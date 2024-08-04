// provide values for trace variables in the debug.js file
if (typeof traceSet === 'undefined') traceSet = new Set([])


// GLOBALS   -  see also the manifest file under /shared
var index = {}  // holds information needed to build index; used by makeIndexObject, makeMarkupForSection



// set accessibility defaults
access = {
    fontsize: 15,
    contrast: 'low'
    }


function addPageFeatures () {
     //console.log('Globals(','blockDirectoryName:',window.blockDirectoryName, 'langTag:',window.langTag, 'scriptSummaryTableName:',window.scriptSummaryTableName, 'orthogFilePath:',window.orthogFilePath,')')

    //set accessibility defaults
    if (localStorage['docsAccess']) access = JSON.parse(localStorage['docsAccess']) 
    if (access.contrast === 'high') {
        document.querySelector('body').classList.add('contrast')
        document.getElementById('contrastLow').classList.remove('access_selected')
        document.getElementById('contrastDark').classList.remove('access_selected')
        document.getElementById('contrastHigh').classList.add('access_selected')
        }
    else if (access.contrast === 'dark') {
        document.querySelector('body').classList.add('dark')
        document.getElementById('contrastLow').classList.remove('access_selected')
        document.getElementById('contrastHigh').classList.remove('access_selected')
        document.getElementById('contrastDark').classList.add('access_selected')
        }
    document.querySelector('html').style.fontSize = access.fontsize+'px'
    document.getElementById('accessFontsize').value = access.fontsize
    //console.log(access.fontsize,document.getElementById('accessFontsize').value)

	doHeadersFooters(window.orthogFilePath) // links at page top/bottom
    
    makeIndexIntro(document.getElementById('index_intro')) // write page intro
    
    makeTables(langTag)  // Create the lists of characters in yellow, etc. boxes

    expandCharMarkup() // Expand spans with ch classes to full character markup
    
    addExamples(langTag)  // Convert all .eg items to full markup. (egcode.js)
    
    initialiseShowNames(document, blockDirectoryName, '') // Add onclick function to all .ex elements to display in panel


    // create translit data in autoTranslitArray
    makeAutoTranslitArray (langTag)


    initialiseSummary (window.blockDirectoryName, window.langTag, window.scriptSummaryTableName, window.orthogFilePath)
    //autoTransliterate(langTag)
    checkParameters()
    
    
    // autogenerate the index
    makeIndexObject()
    makeMarkupForSection('index_letters')
    makeMarkupForSection('index_cchars')
    makeMarkupForSection('index_numbers')
    makeMarkupForSection('index_punctuation')
    makeMarkupForSection('index_symbols')
    makeMarkupForSection('index_other')
    window.index = {}
    
    makeCharDataObj()
    pointToSummaryPages()
    
    marks = new Set()
    setMarks()
    
    // empty large global variables
    window.fontDB = []
    defList = []
    fontInfo = {}
    
    
    copyIntroInfo()
    
    addResources()
    
    
    // create dialog popup window (displays details after clicking on code point names)
    var node = document.querySelector('header')
    dialog = document.createElement('dialog')
    dialog.open = false
    dialog.id = 'dialogBox'
    node.appendChild(dialog)
    dialog = document.createElement('dialog')
    dialog.open = false
    dialog.id = 'ipaDialogBox'
    node.appendChild(dialog)
    document.querySelector("body").addEventListener('keydown', closeDialogEsc)
    
    
    // set event trigger on all .ipa elements - opens description box on click
    var ipaNodes = document.querySelectorAll(".ipa, .listIPA, .allophone")
    for (i=0;i<ipaNodes.length;i++) ipaNodes[i].onclick = showIPAPhoneEvt
    
    
    // set up show composition to show composition in panel
    summaryNodes = document.querySelectorAll('.figureSub summary')
    for (i=0;i<summaryNodes.length;i++) summaryNodes[i].onclick = function(){ this.parentNode.querySelector('bdi').click() }
    
    // show all sections to be added
    summaryNodes = document.querySelectorAll('.sectionAside details')
    //for (i=0;i<summaryNodes.length;i++) summaryNodes[i].open = true
    for (i=0;i<summaryNodes.length;i++) if (summaryNodes[i].parentNode.parentNode.id !== 'page') summaryNodes[i].open = true
    
    addCharacterLists()
    }










function expandCharMarkup () {
    if (traceSet.has('expandCharMarkup') || traceSet.has('all')) console.log('expandCharMarkup(',') Convert char markup to .codepoint spans (has to be done before the indexing)')
     // convert char markup to .codepoint spans (has to be done before the indexing)
     // the .ch and .hx classes should only be used for characters in the
     // spreadsheet.  For other characters, generate the markup in a picker
     // if the svg class is appended, use an svg image to display the char
     // if the split class used, the characters will be separated by +
     
     var charMarkup, unicodeNames, unicodeChars, charlist, split, svg, img, hex, ch, block, initial, medial, final, circle, noname, coda, noindex
     
     // split puts + signs between the characters in a sequence
     // init, medi, fina produce positional forms of cursive text using zwj
     // skip  puts a circle before a mark, and zwj between it and the following consonant
     // circle puts a dotted circle before the item - used for combining marks
     // coda puts a dotted circle after the item - used for closed syllables
     // noname prevents the production of the Unicode name
     
   
    // convert .hx markup (one or more hex codes)
    charMarkup = document.querySelectorAll('.hex, .hx')
    for (i=0;i<charMarkup.length;i++) {
        charMarkup[i].classList.contains('split')? split=true: split=false
        charMarkup[i].classList.contains('svg')? svg=true: svg=false
        charMarkup[i].classList.contains('img')? img=true: img=false
        charMarkup[i].classList.contains('init')? initial=true: initial=false
        charMarkup[i].classList.contains('medi')? medial=true: medial=false
        charMarkup[i].classList.contains('fina')? final=true: final=false
        charMarkup[i].classList.contains('skip')? skipDiacritic=true: skipDiacritic=false
        charMarkup[i].classList.contains('circle')? circle=true: circle=false
        charMarkup[i].classList.contains('coda')? coda='◌': coda=''
        charMarkup[i].classList.contains('noname')? noname=true: noname=false
        charMarkup[i].classList.contains('noindex')? noindex=' noindex': noindex=''

        if (charMarkup[i].lang === '') var language = window.langTag
        else language = charMarkup[i].lang
        
        charlist = charMarkup[i].textContent.trim().split(' ')
        if (charlist[0] === '') continue
        unicodeNames = ''
        unicodeChars = ''

        out = ''
        if (final || medial) unicodeChars += '\u200D' // the space is needed for Safari to work
        if (circle) unicodeChars = '\u25CC' + unicodeChars
        for (c=0;c<charlist.length;c++) {
            hex = charlist[c]
            dec = parseInt(hex,16)
            if (Number.isNaN(dec)) { 
                console.log('%c' + 'Error! The link text "'+charMarkup[i].textContent+'" is not a number!. (expandCharMarkup)', 'color:' + 'red' + ';font-weight:bold;')
                continue
                }
            //console.log('>>>',charMarkup[i].classList,charMarkup[i].textContent, hex, dec)
            ch = String.fromCodePoint(dec)

            if (! spreadsheetRows[ch]) {
                unicodeNames += `<span style="color:red">${ ch } NOT IN DB! (expandCharMarkup)</span>`
                unicodeChars += ch
               continue
                }
            
            if (hex !== '25CC') {
                if (c > 0) unicodeNames += ' + '
                unicodeNames += spreadsheetRows[ch][cols['ucsName']].replace(/:/,'')
                }
         
            if (split && c > 0) unicodeChars += `</bdi> + <bdi lang="${ language }">`
            if (svg) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/${ hex }.svg" alt="${ ch }" style="height:2rem;">`
                }
            else if (img) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/large/${ hex }.png" alt="${ ch }" style="height:2rem;">`
                }
            else unicodeChars += `&#x${ hex };`
            if (skipDiacritic && c == 0) unicodeChars += '&#x200D;'
            }
            
        if (initial || medial) unicodeChars += '\u200D '

        out += `<span class="codepoint${ noindex }" translate="no"><bdi lang="${ language }"`
        //if (blockDirection === 'rtl') out += ` dir="rtl"`
        if (img || svg) out += ' style="margin:0;" '
        out += `>${ unicodeChars }${ coda }</bdi>`
        if (noname) {}
        else out += `<a href="javascript:void(0)"><span class="uname">${ unicodeNames }</span></a></span>`
        
        if (window.hideBlockName) {
            let re = new RegExp(window.hideBlockName, 'g')
            charMarkup[i].outerHTML = out.replace(re,'')
            }
        else charMarkup[i].outerHTML = out
        }




    // convert .ch markup (one or more characters using Unicode code points)
    charMarkup = document.querySelectorAll('.ch')
    for (i=0;i<charMarkup.length;i++) {
        charMarkup[i].classList.contains('split')? split=true: split=false
        charMarkup[i].classList.contains('svg')? svg=true: svg=false
        charMarkup[i].classList.contains('img')? img=true: img=false
        charMarkup[i].classList.contains('init')? initial=true: initial=false
        charMarkup[i].classList.contains('medi')? medial=true: medial=false
        charMarkup[i].classList.contains('fina')? final=true: final=false
        charMarkup[i].classList.contains('circle')? circle=true: circle=false
        charMarkup[i].classList.contains('coda')? coda='◌': coda=''
        charMarkup[i].classList.contains('noname')? noname=true: noname=false
        charMarkup[i].classList.contains('noindex')? noindex=' noindex': noindex=''
        
        if (charMarkup[i].lang === '') var language = window.langTag
        else language = charMarkup[i].lang

        charlist = [... charMarkup[i].textContent]
        unicodeNames = ''
        unicodeChars = ''
        
        out = ''
        if (final || medial) unicodeChars += ' \u200D'
        for (c=0;c<charlist.length;c++) {
            dec = charlist[c].codePointAt(0)
            hex = dec.toString(16).toUpperCase()
            while (hex.length < 4) hex = '0'+hex

            if (! spreadsheetRows[charlist[c]]) {
                unicodeChars += charlist[c]
                unicodeNames += `<span style="color:red"> ${ charlist[c] } NOT IN DB!</span> `
                continue
                }
            
            if (c > 0) unicodeNames += ' + '
            unicodeNames += spreadsheetRows[charlist[c]][cols['ucsName']].replace(/:/,'')

            if (split && c > 0) unicodeChars += `</bdi> + <bdi lang="${ language }">`
            
            if (svg) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/${ hex }.svg" alt="${ charlist[c] }" style="height:2rem;">`
                }
            else if (img) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/large/${ hex }.png" alt="${ charlist[c] }" style="height:2rem;">`
                }
            else unicodeChars += charlist[c]
            }
            
        if (initial || medial) unicodeChars += '\u200D '
        if (circle) unicodeChars = '\u25CC' + unicodeChars

        out += `<span class="codepoint${ noindex }" translate="no"><bdi lang="${ language }"`
        if (blockDirection === 'rtl') out += ` dir="rtl"`
        if (img || svg) out += ' style="margin:0;" '
        out += `>${ unicodeChars }${ coda }</bdi>`
        if (noname) {}
        else out += `<a href="javascript:void(0)"><span class="uname">${ unicodeNames }</span></a></span>`
        
        if (window.hideBlockName) {
            let re = new RegExp(window.hideBlockName, 'g')
            charMarkup[i].outerHTML = out.replace(re,'')
            }
        else charMarkup[i].outerHTML = out
        }
    }












function closeDialogEsc (e) {
    // closes the dialog box and panel when escape is pressed
    if (e.code === 'Escape') {
        document.getElementById('dialogBox').open = false
        document.getElementById('ipaDialogBox').open = false
        document.getElementById('panel').style.display = 'none'
        document.getElementById('tocPanel').style.display = 'none'
        }
}



function initialiseSummary (blockDirectory, lang, tableName, orthogNotesFile) {
    if (traceSet.has('initialiseSummary') || traceSet.has('all')) console.log('initialiseSummary(',blockDirectory, lang, tableName, orthogNotesFile,')')
    
    if (document.getElementById('features')) document.getElementById('features').innerHTML = makeSidePanel(tableName,"")
    createtoc(3)
	removeEditorNotes()
	addDefinitions()
	//if (typeof(contentPrompts) !== 'undefined') setContentPrompts()
	setContentPrompts()
	setFindIPA()  // Make ipa characters in sounds charts indicate locations they are used
	setupBlockLinks() // Set target attribute for links that point to characters in the block page
	setTranslitToggle()  // Add checkboxes and links to the fixed position selector
	setCharOnclicks() // All links with target=c should open descriptions in the panel
	if (typeof reflist !== 'undefined') createReferences(lang)
    
    var body = document.querySelector('body')
    var tocPanel = document.createElement('div')
    tocPanel.id = 'tocPanel'
    tocPanel.style.display = 'none'
    body.appendChild(tocPanel)
    createtocPanel(4)
    }



function initialiseIndex () {
    // called from index.html pages to set up page after load    
    // add fragids for legacy URLs to all links to orthography descriptions
    olinks = document.querySelectorAll('#olinks a')
    for (i=0;i<olinks.length;i++) olinks[i].href += window.location.hash

    }


function setMarks () {
    // sets the global variable marks as a set containing all combining marks in the spreadsheet
    for (var char in spreadsheetRows) {
        if (spreadsheetRows[char][1] === 'key') continue
        if (typeof spreadsheetRows[char][cols['class']] === 'undefined') console.log('%c' + 'Error! General category not found in setMarks() for '+spreadsheetRows[char], 'color:' + 'red' + ';font-weight:bold;')

        if (spreadsheetRows[char][cols['class']].startsWith('M')) window.marks.add(char)
        }
    return
    }



function setCharOnclicks () {
	// all links with target=c should open descriptions in the panel
    if (traceSet.has('setCharOnclicks') || traceSet.has('all')) console.log('setCharOnclicks(',') All links with target=c should open descriptions in the panel')

	var links = document.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) {
        links[i].onclick = showCharDetailsInPanel
        links[i].href = 'javascript:void(0)'
        links[i].target = ''
        }
	}

function setupBlockLinks () {
	// set target attribute for links that point to characters in the block page
    if (traceSet.has('setupBlockLinks') || traceSet.has('all')) console.log('setupBlockLinks(',') Set target attribute for links that point to characters in the block page')
    
	var links = document.querySelectorAll('.codepoint a, .codepoint code')
	for (var i=0;i<links.length;i++) if (links[i].target != null) links[i].target = 'c'
	}





function setFindIPA () { // test extension to map stuff
	// makes ipa characters in sounds charts indicate locations they are used
    // and also sets up codepoint elements
    if (traceSet.has('setFindIPA') || traceSet.has('all')) console.log('setFindIPA(',') Make ipa characters in sounds charts indicate locations they are used')

	var listItems = document.querySelectorAll('.codepoint span, .codepoint bdi')
	for (var i=0;i<listItems.length;i++) {
        if (listItems[i].parentNode.classList.contains('codepoint')) listItems[i].onclick = makeFootnoteIndex
        }

	//var listItems = document.querySelectorAll('.ipaTable .ipa, .ipaTable .allophone')
	//for (i=0;i<listItems.length;i++) listItems[i].onclick = findIPA
	var listItems = document.querySelectorAll('.ipaTable .ipa, .ipaTable .allophone, .diphthongTable .ipa, .diphthongTable .allophone')
	for (i=0;i<listItems.length;i++) listItems[i].click = findIPA
	var listItems = document.querySelectorAll('.ipaSVG .ipa, .ipaSVG .allophone')
	for (i=0;i<listItems.length;i++) listItems[i].click = findIPA
	}





function shareCodeLinks (charList, script, charApp) {
    // provides some of the repetitive code for listAllIndexCharacters
    
    charList = charList.replace(/%/g,'%25')
    
    out = `<td class="indexShareLinks" style="position:relative;" 
    onmouseover="this.lastChild.style.display='block'" 
    onmouseout="this.lastChild.style.display='none'"><img src="../common29/icons/transfer.svg" alt="Send characters." title="Send characters." class="ulink" style="height: 1.2rem;">
    <div class="popup" style="position: absolute; right: 0px; display: none;">
        <div><a href="../../app-analysestring/index.html?chars=`+charList+`" target="_blank">Analyse string</a></div>
        <div><a href="../../scripts/apps/listcategories/index.html?chars=`+charList+`" target="_blank">General Category</a></div>
        <div><a href="../../uniview/index.html?charlist=`+charList+`" target="_blank">Show characters in UniView</a></div>
        <div><a href="../../app-listcharacters/index.html?chars=`+charList+`" target="_blank">List characters by block</a></div>
        <div><a href="../../scripts/fontlist/index.html?script=`+script+`&amp;text=`+charList+`" target="_blank">Send to Font lister</a></div>
        <div><a target="_blank" href="../../pickers/`+charApp+`/index.html?showFonts=true&amp;text=`+charList+`">Show in character app</a></div></td>`
    return out
}







function listAllIndexCharacters (scriptISO, pickerName) {
    // creates the showStats table
    
    var out = '<table>'
    var list
    
    
    // find all the characters in the index sorted by common, rare, and not used
    allPageChars = [...allchars]

    // get a list of all (unique) characters in the index, ignore if not a single codepoint
    allIndexChars = []
    var indexNodes = document.getElementById('index').querySelectorAll('.listItem')
    for (i=0;i<indexNodes.length;i++) {
        if ([...indexNodes[i].textContent].length === 1) allIndexChars.push(indexNodes[i].textContent)
        }
    var uniqueSet = new Set(allIndexChars)
    allIndexChars = [...uniqueSet].sort()
    if (indexNodes.length !== [...uniqueSet].length) console.log('NOTE: Index contains ',indexNodes.length,' items, but only ',[...uniqueSet].length,' unique characters.')



    
    // get a list of all Index characters used by the orthography & all ascii characters
    mainIndexArray = []
    asciiIndexArray = []
    unusedIndexArray = []
    tbcIndexArray = []

    for (i=0;i<indexNodes.length;i++) {
        // gather not used, obsolete, archaic, & deprecated
        if (indexNodes[i].parentNode.classList.contains('index_notused') || indexNodes[i].parentNode.classList.contains('index_unused') || indexNodes[i].parentNode.classList.contains('index_obsolete') || indexNodes[i].parentNode.classList.contains('index_archaic') || indexNodes[i].parentNode.classList.contains('index_deprecated'))
            unusedIndexArray.push(indexNodes[i].textContent) 

        // gather to be investigated
        else if (indexNodes[i].parentNode.classList.contains('index_tbc'))
            tbcIndexArray.push(indexNodes[i].textContent)
        
        else if ([...indexNodes[i].textContent].length === 1) {
            if (indexNodes[i].textContent.codePointAt(0) < 129) {
                asciiIndexArray.push(indexNodes[i].textContent)
                mainIndexArray.push(indexNodes[i].textContent)
                }
            else mainIndexArray.push(indexNodes[i].textContent)
            }
            
        }
    
    
            var uniqueSet = new Set(mainIndexArray)
    mainIndexArray = [...uniqueSet].sort()
    
            var uniqueSet = new Set(asciiIndexArray)
    asciiIndexArray = [...uniqueSet].sort()
    
            var uniqueSet = new Set(unusedIndexArray)
    unusedIndexArray = [...uniqueSet].sort()
    
            var uniqueSet = new Set(tbcIndexArray)
    tbcIndexArray = [...uniqueSet].sort()



            var charlist = listCharsInSpreadsheet('all')
    allSpreadsheetChars = [...charlist].sort()
            var charlistused = listCharsInSpreadsheet('allused')
    usedSpreadsheetChars = [...charlistused].sort()
            var charlistunused = listCharsInSpreadsheet('unused')
    unusedSpreadsheetChars = [...charlistunused].sort()
            var charlisttbc = listCharsInSpreadsheet('possibles')
    tbcSpreadsheetChars = [...charlisttbc].sort()



    // page/index diff
    pageYesSpreadsheetNo = ''
    for (var t=0;t<[...allPageChars].length; t++) {
        if (! allSpreadsheetChars.includes(allPageChars[t])) pageYesSpreadsheetNo += allPageChars[t]
        }
    pageYesIndexNo = ''
    for (var t=0;t<[...allPageChars].length; t++) {
        if (! allIndexChars.includes(allPageChars[t])) pageYesIndexNo += allPageChars[t]
        }
    pageNoIndexYes = ''
    for (var t=0;t<allIndexChars.length; t++) {
        if (! allPageChars.includes(allIndexChars[t])) pageNoIndexYes += allIndexChars[t]
        }




    // get block file entries
    var blockChars = []
    for (ch in charDetails) blockChars.push(ch)
    console.log('block chars', blockChars)






     /*   SPREADSHEET   */   
    
    
    // get information about the spreadsheet

    out += '<tr><th></th><th colspan="2" style="text-align:start">Spreadsheet db</th></tr>'

    out += `<tr><th>All</th><td id="allSpreadsheetList" style="word-break:break-all;">${ allSpreadsheetChars.join('') }</td><td id="allSpreadsheetListTotal">${ allSpreadsheetChars.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('allSpreadsheetList').textContent)"></td>${ shareCodeLinks(allSpreadsheetChars.join(''),scriptISO,pickerName) }</tr>`

    out += `<tr><th>Used</th><td id="usedSpreadsheetList" style="word-break:break-all;">${ usedSpreadsheetChars.join('') }</td><td id="usedSpreadsheetListTotal">${ usedSpreadsheetChars.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('usedSpreadsheetList').textContent)"></td>${ shareCodeLinks(usedSpreadsheetChars.join(''),scriptISO,pickerName) }</tr>`

    out += `<tr><th>Unused</th><td id="ssCharListUsed" style="word-break:break-all;">${ unusedSpreadsheetChars.join('') }</td><td id="ssCharListUsedTotal">${ unusedSpreadsheetChars.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('ssCharListUsed').textContent)"></td>${ shareCodeLinks(unusedSpreadsheetChars.join(''),scriptISO,pickerName) }</tr>`

    out += `<tr><th>Investigate</th><td id="ssCharListUsed" style="word-break:break-all;">${ tbcSpreadsheetChars.join('') }</td><td id="ssCharListUsedTotal">${ tbcSpreadsheetChars.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('ssCharListUsed').textContent)"></td>${ shareCodeLinks(tbcSpreadsheetChars.join(''),scriptISO,pickerName) }</tr>`


    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'





    /* ACTION TO TAKE */

    out += '<tr><th></th><th colspan="2" style="text-align:start">Actions to take for new characters</th></tr>'


    // what's in the page but not in the spreadsheet
    out += `<tr><th>In page.<br>Add to db.</th>
    <td id="pageExtrasDB" style="word-break:break-all;">${ pageYesSpreadsheetNo.replace(/ |\u25CC/g,'') }</td>
    <td id="pageExtrasDBTotal">${ [...pageYesSpreadsheetNo.replace(/ |\u25CC/g,'')].length }</td>
    <td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('pageExtrasDB').textContent)">
    </td>${ shareCodeLinks(pageYesSpreadsheetNo.replace(/ |\u25CC/g,''),scriptISO,pickerName) }</tr>`


    // what's in the spreadsheet but not in the index    
    result = ''
    for (var t=0;t<usedSpreadsheetChars.length; t++) {
        if (! mainIndexArray.includes(usedSpreadsheetChars[t])) result += usedSpreadsheetChars[t]
        }
    out += `<tr><th>In db.<br>Add to index</th><td id="spreadsheetExtras" style="word-break:break-all;">${ result.replace(/ |\u25CC/g,'') }</td><td id="spreadsheetExtrasTotal">${ [...result.replace(/ |\u25CC/g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('spreadsheetExtras').textContent)"></td>${ shareCodeLinks(result.replace(/ |\u25CC/g,''),scriptISO,pickerName) }</tr>`


    // what's in the spreadsheet but not in the xx-details file    
    result = ''
    for (var t=0;t<usedSpreadsheetChars.length; t++) {
        if (! blockChars.includes(usedSpreadsheetChars[t])) result += usedSpreadsheetChars[t]
        }
    out += `<tr><th>Add to xx&#x2011;details</th><td id="detailsNeeds" style="word-break:break-all;">${ result.replace(/ |\u25CC/g,'') }</td><td id="spreadsheetExtrasTotal">${ [...result.replace(/ |\u25CC/g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('spreadsheetExtras').textContent)"></td>${ shareCodeLinks(result.replace(/ |\u25CC/g,''),scriptISO,pickerName) }</tr>`
    //out += `<tr><th></th><td colspan="2" style="text-align:start"><a target="_blank" href="../_tools/generate_details_page_stubs.html?q=${ result }">Details creator</a></td></tr>`
    
    
    
    

    out += `<tr><th>In page.<br>Add to index</th><td id="pageExtras" style="word-break:break-all;">${ pageYesIndexNo.replace(/ |\u25CC/g,'') }</td><td id="pageExtrasTotal">${ [...pageYesIndexNo.replace(/ |\u25CC/g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('pageExtras').textContent)"></td>${ shareCodeLinks(pageYesIndexNo.replace(/ |\u25CC/g,''),scriptISO,pickerName) }</tr>`


    // find out what's in the unused spreadsheet but not in the unused index    
    /*
    result = ''
    for (var t=0;t<unusedSpreadsheetChars.length; t++) {
        if (! unusedIndexArray.includes(unusedSpreadsheetChars[t])) result += unusedSpreadsheetChars[t]
        }
    out += `<tr><th>Unused ssheet extras</th><td id="spreadsheetExtras" style="word-break:break-all;">${ result }</td><td id="spreadsheetExtrasTotal">${ [...result.replace(/ /g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('spreadsheetExtras').textContent)"></td>${ shareCodeLinks(result,scriptISO,pickerName) }</tr>`


    // find out what's in the unused index but not in the unused spreadsheet
    result = ''
    for (var t=0;t<unusedIndexArray.length; t++) {
        if (! unusedSpreadsheetChars.includes(unusedIndexArray[t])) result += unusedIndexArray[t]
        }
    out += `<tr><th>Unused index extras</th><td id="indexSurplus" style="word-break:break-all;">${ result }</td><td id="indexSurplusTotal">${ [...result.replace(/ /g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('indexSurplus').textContent)"></td>${ shareCodeLinks(result,scriptISO,pickerName) }</tr>`
    */



    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'

    out += `<tr><th>Add new characters to picker</th><td style="text-align:start"><a target="_blank" href="../../pickers/${ pickerDir }/index.html">Picker</a></td></tr>`
    
    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'

    
    out += '<tr><th></th><th colspan="2" style="text-align:start">&nbsp;</th></tr>'




    /*   CHARACTER USE   */
    
    
    var langdata = 'Update the following in xx-langdata.js: '
    
    if (typeof langs[charUsageBCP] === 'undefined') alert("Can't create entry for character use because there's no Character Usage entry yet.")

    // create entry for character use
    usedNonASCII = ''
    out += `<tr><th>Update Character usage</th><td id="cUsage" style="word-break:break-all;">`
    result = listCharsInSpreadsheet('letters').join('')
    out += `letter:"${ result }", `
    if (langs[charUsageBCP].letter && result !== langs[charUsageBCP].letter) langdata += 'letter '
    usedNonASCII += result
    result = listCharsInSpreadsheet('auxletters').join('')
    if (result !== '') out += `letteraux:"${ result }", `
    if (langs[charUsageBCP].letteraux && result !== langs[charUsageBCP].letteraux) langdata += 'letteraux '
    usedNonASCII += result

    result = listCharsInSpreadsheet('marks').join('')
    out += `mark:"${ result }", `
    if (langs[charUsageBCP].mark && result !== langs[charUsageBCP].mark) langdata += 'mark '
    usedNonASCII += result
    result = listCharsInSpreadsheet('auxmarks').join('')
    if (result !== '') out += `markaux:"${ result }", `
    if (langs[charUsageBCP].markaux && result !== langs[charUsageBCP].markaux) langdata += 'markaux '
    usedNonASCII += result

    result = listCharsInSpreadsheet('numbers').join('')
    out += `number:"${ result }", `
    if (langs[charUsageBCP].numbers && result !== langs[charUsageBCP].numbers) langdata += 'numbers '
    usedNonASCII += result
    result = listCharsInSpreadsheet('auxnumbers').join('')
    if (result !== '') out += `numberaux:"${ result }", `
    if (langs[charUsageBCP].numbersaux && result !== langs[charUsageBCP].numbersaux) langdata += 'numbersaux '
    usedNonASCII += result

    result = listCharsInSpreadsheet('punctuation').join('')
    out += `punctuation:"${ result }", `
    if (langs[charUsageBCP].punctuation && result !== langs[charUsageBCP].punctuation) langdata += 'punctuation '
    usedNonASCII += result
    result = listCharsInSpreadsheet('auxpunctuation').join('')
    if (result !== '') out += `punctuationaux:"${ result }", `
    if (langs[charUsageBCP].punctuationaux && result !== langs[charUsageBCP].punctuationaux) langdata += 'punctuationaux '
    usedNonASCII += result

    result = listCharsInSpreadsheet('symbols').join('')
    out += `symbol:"${ result }", `
    if (langs[charUsageBCP].symbol && result !== langs[charUsageBCP].symbol) langdata += 'symbol '
    usedNonASCII += result
    result = listCharsInSpreadsheet('auxsymbols').join('')
    if (result !== '') out += `symbolaux:"${ result }", `
    if (langs[charUsageBCP].symbolaux && result !== langs[charUsageBCP].symbolaux) langdata += 'symbolaux '
    usedNonASCII += result

    result = listCharsInSpreadsheet('other').join('')
    out += `other:"${ result }", `
    //if (langs[charUsageBCP].other && result !== langs[charUsageBCP].other) langdata += 'other '
    result = listCharsInSpreadsheet('auxother').join('')
    if (result !== '') out += `otheraux:"${ result }", `
    //if (langs[charUsageBCP].auxother && result !== langs[charUsageBCP].auxother) langdata += 'auxother '

    out += `</td>
        <td id="ssCharListTotal">${ result.length }</td>
        <td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('cUsage').textContent)"></td>${ shareCodeLinks(usedNonASCII,scriptISO,pickerName) }</tr>`    
    
    
    if (langdata !== 'Update the following in xx-langdata.js: ') out += `<tr><th></th><th colspan="2" style="text-align:start; color:red;">${ langdata }</th></tr>`
    else out += `<tr><th></th><th colspan="2" style="text-align:start">${ langTag }-langdata.js matches!</th></tr>`
    
    // out += `<tr><th></th><th colspan="2" style="text-align:start">Also update xx-langdata.js</th></tr>`


    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'



    // create entry for character use
    /*out += '<tr><th colspan="3">Possible additions from the spreadsheet</th></tr>'
    result = listCharsInSpreadsheet('possibles').join('')
    out += `<tr><th>TBC</th><td id="toInvestigate" style="word-break:break-all;">${ result }</td><td id="toInvestigateTotal">${ result.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('toInvestigate').textContent)"></td>${ shareCodeLinks(result,scriptISO,pickerName) }</tr>`*/

    out += `</table>`
    out += `<details><summary>More details</summary>`
    out += `<table style="margin-inline-start:7.5%; margin-inline-end:32%;">`




    
    //   BLOCK PAGE   
    
    
    
    out += '<tr><th></th><th colspan="2" style="text-align:start">&nbsp;</th></tr>'

    out += '<tr><th></th><th colspan="2" style="text-align:start">Block details</th></tr>'



    // show unique characters in the xx-details.html file
    out += `<tr><th>All</th><td id="allPageList" style="word-break:break-all;">${ blockChars.join('') }</td><td id="allPageListTotal">${ blockChars.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1rem;" onclick="navigator.clipboard.writeText(document.getElementById('allPageList').textContent)"></td>${ shareCodeLinks(blockChars.join(''),scriptISO,pickerName) }</tr>`
    



    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'






    
    //   THIS PAGE   
    // find out what's in the index but not in the spreadsheet
    result = ''
    for (var t=0;t<mainIndexArray.length; t++) {
        if (! usedSpreadsheetChars.includes(mainIndexArray[t])) result += mainIndexArray[t]
        }
    out += `<tr><th>Used index extras</th><td id="indexSurplus" style="word-break:break-all;">${ result }</td><td id="indexSurplusTotal">${ [...result.replace(/ /g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('indexSurplus').textContent)"></td>${ shareCodeLinks(result,scriptISO,pickerName) }</tr>`




    
    out += '<tr><th></th><th colspan="2" style="text-align:start">&nbsp;</th></tr>'

    out += '<tr><th></th><th colspan="2" style="text-align:start">This page</th></tr>'

    // show unique characters in .codepoint or .listItem throughout the page
    // the list allchars is assembled as a string elsewhere - convert to an array for supp chars
    out += `<tr><th>All</th><td id="allPageList" style="word-break:break-all;">${ allPageChars.join('') }</td><td id="allPageListTotal">${ allPageChars.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1rem;" onclick="navigator.clipboard.writeText(document.getElementById('allPageList').textContent)"></td>${ shareCodeLinks(allPageChars.join(''),scriptISO,pickerName) }</tr>`
    



    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'




    //   INDEX   

    out += '<tr><th></th><th colspan="2" style="text-align:start">Index</th></tr>'
    
    
    // show all index characters
    out += `<tr><th>All</th><td id="allIndexList" style="word-break:break-all;">${ allIndexChars.join('') }</td><td id="allIndexListTotal">${ allIndexChars.length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1rem;" onclick="navigator.clipboard.writeText(document.getElementById('allIndexList').textContent)"></td>${ shareCodeLinks(allIndexChars.join(''),scriptISO,pickerName) }</tr>`
    
    
    // all index items
    out += `<tr><th>Used</th><td id="usedIndexList" style="word-break:break-all;">${ mainIndexArray.join('') }</td><td id="usedIndexListTotal">${ [...mainIndexArray].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1rem;" onclick="navigator.clipboard.writeText(document.getElementById('usedIndexList').textContent)"></td>${ shareCodeLinks(mainIndexArray.join(''),scriptISO,pickerName) }</tr>`
    
    // unused items in index
    out += `<tr><th>Unused</th><td id="asciiIndexList" style="word-break:break-all;">${ unusedIndexArray.join('') }</td><td id="asciiIndexListTotal">${ [...unusedIndexArray].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1rem;" onclick="navigator.clipboard.writeText(document.getElementById('asciiIndexList').textContent)"></td>${ shareCodeLinks(unusedIndexArray.join(''),scriptISO,pickerName) }</tr>`
    
    // to be investigated items in index
    out += `<tr><th>TBC</th><td id="asciiIndexList" style="word-break:break-all;">${ tbcIndexArray.join('') }</td><td id="tbcIndexListTotal">${ [...tbcIndexArray].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1rem;" onclick="navigator.clipboard.writeText(document.getElementById('asciiIndexList').textContent)"></td>${ shareCodeLinks(tbcIndexArray.join(''),scriptISO,pickerName) }</tr>`





    // what's in the page but not in the index
    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'

    out += '<tr><th></th><th colspan="2" style="text-align:start">Page &amp; Index differences</th></tr>'

    out += `<tr><th>Page extras</th><td id="pageExtras" style="word-break:break-all;">${ pageYesIndexNo }</td><td id="pageExtrasTotal">${ [...pageYesIndexNo.replace(/ /g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('pageExtras').textContent)"></td>${ shareCodeLinks(pageYesIndexNo,scriptISO,pickerName) }</tr>`

    
    out += `<tr><th>Index extras</th><td id="indexExtras" style="word-break:break-all;">${ pageNoIndexYes }</td><td id="indexExtrasTotal">${ [...pageNoIndexYes.replace(/ /g,'')].length }</td><td class="indexShareLinks"><img src="../common29/icons/copytiny.svg" alt="Copy" style="height:1.2rem;" onclick="navigator.clipboard.writeText(document.getElementById('indexExtras').textContent)"></td>${ shareCodeLinks(pageNoIndexYes,scriptISO,pickerName) }</tr>`
 
    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'


    out += `</table></details>`
    out += `</tr>`


	document.getElementById('charCountList').innerHTML = out
    }

















function listCharsInSpreadsheet (howmuch) {
    // provide a list of characters in the spreadsheet, sorted by category
    var all = []
    var allused = []
    var unused = []
    var letters = []
    var selection = []

    var letters = []
    var marks = []
    var numbers = []
    var punctuation = []
    var symbols = []
    var other = []

    var possibles = []
    
    // get a starting point of all unique characters (but exclude ASCII)
    for (row in spreadsheetRows) {
        if ([...row].length === 1) {
            chars = [...row]
            for (j=0;j<chars.length;j++) all.push(chars[j])
            var uniqueSet = new Set(all)
            all = [...uniqueSet].sort()
            }
        }
        
    if (howmuch === 'all') return all


    // get a list that excludes unused items
    for (k=0;k<all.length;k++) {
        if (spreadsheetRows[all[k]][cols['status']][0] !== 'u' 
            && spreadsheetRows[all[k]][cols['status']][0] !== '?'
            && spreadsheetRows[all[k]][cols['status']][0] !== 'd'
            && spreadsheetRows[all[k]][cols['status']][0] !== 'a'
            && spreadsheetRows[all[k]][cols['status']][0] !== 'o'
            ) allused.push(all[k])
        }
        
    if (howmuch === 'allused') return allused
    
    
    // get a list of unused items
    for (k=0;k<all.length;k++) {
        if (spreadsheetRows[all[k]][cols['status']][0] === 'u' 
            //|| spreadsheetRows[all[k]][cols['status']][0] === '?'
            || spreadsheetRows[all[k]][cols['status']][0] === 'd'
            || spreadsheetRows[all[k]][cols['status']][0] === 'a'
            || spreadsheetRows[all[k]][cols['status']][0] === 'o'
            ) unused.push(all[k])
        }
    if (howmuch === 'unused') return unused
    
    
    // for other types, extract a list from allused
                                           
    if (howmuch === 'letters') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'L' && spreadsheetRows[allused[k]][cols['status']][0] !== 'r' && spreadsheetRows[allused[k]][cols['status']][0] !== 'x') selection.push(allused[k])
            }
        }
    if (howmuch === 'auxletters') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'L' && (spreadsheetRows[allused[k]][cols['status']][0] === 'r' || spreadsheetRows[allused[k]][cols['status']][0] === 'x')) selection.push(allused[k])
            }
        }

    if (howmuch === 'marks') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'M' && spreadsheetRows[allused[k]][cols['status']][0] !== 'r' && spreadsheetRows[allused[k]][cols['status']][0] !== 'x') selection.push(allused[k])
            }
        }
    if (howmuch === 'auxmarks') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'M' && (spreadsheetRows[allused[k]][cols['status']][0] === 'r' || spreadsheetRows[allused[k]][cols['status']][0] === 'x')) selection.push(allused[k])
            }
        }

    if (howmuch === 'numbers') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'N' && spreadsheetRows[allused[k]][cols['status']][0] !== 'r' && spreadsheetRows[allused[k]][cols['status']][0] !== 'x') selection.push(allused[k])
            }
        }
    if (howmuch === 'auxnumbers') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'N' && (spreadsheetRows[allused[k]][cols['status']][0] === 'r' || spreadsheetRows[allused[k]][cols['status']][0] === 'x')) selection.push(allused[k])
            }
        }

    if (howmuch === 'punctuation') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'P' && spreadsheetRows[allused[k]][cols['status']][0] !== 'r' && spreadsheetRows[allused[k]][cols['status']][0] !== 'x') selection.push(allused[k])
            }
        }
    if (howmuch === 'auxpunctuation') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'P' && (spreadsheetRows[allused[k]][cols['status']][0] === 'r' || spreadsheetRows[allused[k]][cols['status']][0] === 'x')) selection.push(allused[k])
            }
        }

    if (howmuch === 'symbols') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'S' && spreadsheetRows[allused[k]][cols['status']][0] !== 'r' && spreadsheetRows[allused[k]][cols['status']][0] !== 'x') selection.push(allused[k])
            }
        }
    if (howmuch === 'auxsymbols') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'S' && (spreadsheetRows[allused[k]][cols['status']][0] === 'r' || spreadsheetRows[allused[k]][cols['status']][0] === 'x')) selection.push(allused[k])
            }
        }

    if (howmuch === 'other') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'C') selection.push(allused[k])
            }
        for (x=0;x<selection.length;x++) selection[x] = selection[x].codePointAt(0).toString(16).toUpperCase()
        for (x=0;x<selection.length;x++) while (selection[x].length < 4) selection[x] = '0'+selection[x]
        for (x=0;x<selection.length;x++) selection[x] = '\\u'+selection[x]
        }
                                           
     if (howmuch === 'possibles') {
        for (k=0;k<all.length;k++) {
            if (spreadsheetRows[all[k]][cols['status']] === '?') selection.push(all[k])
            }
        }
   
    return selection
    }













function getOrthographyList (type, location, spaced=false) {
    // this is a modified version of runCharCount, adapted to harvest characters after the 
    // page has been rendered, and used by the links in the Basic Summary section on click
    // it requires the presence of #index
	var charlists, out
	if (document.getElementById('index') == null) {
        alert('No #index element (in getOrthographyList)')
        return
        }
    else charlists = document.querySelectorAll('#index '+type+' .listItem')
    var chars = ''
	for (let i=0;i<charlists.length;i++) chars += charlists[i].textContent
    var charlistArray = [...chars]
	const uniqueSet = new Set(charlistArray)
	var uniqueArray = [...uniqueSet]
	
    if (spaced) out = uniqueArray.toString().replace(/,/g,' ')
	else out = uniqueArray.toString().replace(/,/g,'')
    return out
	}







function pointToSummaryPages () {
    // create links for various anchors such as line-breaking properties etc
    
    if (document.getElementById('showLinebreaks')) document.getElementById('showLinebreaks').href = '../apps/listlinebreak/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))

    if (document.getElementById('showBidiClass')) document.getElementById('showBidiClass').href = '../apps/listbidi/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))
	}








function doHeadersFooters (orthogNotesFile) {
    if (traceSet.has('doHeadersFooters') || traceSet.has('all')) console.log('doHeadersFooters(',orthogNotesFile,') Add links to top of document')
	// adds links to top of document
	// orthogNotesFile is of the form arabic/arb or arabic/ur

	if (document.getElementById('versionTop') === null) return
	

	//parse the orthogNotesFile
	var filename = ''
	var directory = ''
	var path = orthogNotesFile.split('/')
	directory = path[0]
	if (path.length === 1) {
		filename = path[0]
		}
	else {
		filename = path[1]
		}
		

	var out = '&bull; recent changes <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages" title="Show commits for the whole scripts repository.">scripts</a>/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'" title="Show commits for scripts/'+directory+'.">'+directory+'</a>'
	if (path.length > 1) out += '/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'/'+filename+'.html" title="Show commits for scripts/'+filename+'.">'+filename+'</a>'
	
	out += ' &bull; leave a <a target="_blank" href="https://github.com/r12a/scripts/issues/new?title=['+orthogNotesFile.replace(/index/,'')+']%20%20BRIEF_TITLE_GOES_HERE&body=%5Bsource%5D%20https%3A%2F%2Fr12a.github.io%2Fscripts%2F'+orthogNotesFile+'%0A%0A" title="Leave a comment.">comment</a>'
	
	document.getElementById('versionTop').innerHTML = out
	
	
	out = ''
	out += 'See <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'">recent changes</a>. &nbsp;&bull;&nbsp; Make a <a href="https://github.com/r12a/scripts/issues/new?title=%5B'+orthogNotesFile+'%5D%20TITLE_GOES_HERE&body=Comment%20on%20http%3A%2F%2Fr12a.github.io%2Fscripts%2F'+directory+'%2F%0A%0A" target="_blank">comment</a>. &nbsp;&bull;&nbsp; Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a>.</span></div>'
	
	
	document.getElementById('version').innerHTML = out
	}





function addDefinitions () {
	// adds text for definitions
	
	var nodes = document.querySelectorAll('.definitionStub')
	for (let i=0;i<nodes.length;i++) nodes[i].innerHTML = defList[nodes[i].id.replace(/^def-/,'')]
	}



function removeEditorNotes () {
	// removes editor's notes from the published version: they are only visible when using the localhost domain
	
	if (! window.location.origin.includes('localhost')) { 
		var nodes = document.querySelectorAll('.ednote')
		for (let i=0;i<nodes.length;i++) nodes[i].style.display = 'none'
		}
	}





function makeSidePanel (id, otherlinks) {
	if (typeof langs === 'undefined') return
	if (typeof langs[id] === 'undefined') { console.log('Charuse data not found. ID sent to makeSidePanel was ',id); return }
    
    var letters, marks, punctuation, symbols, others, numbers, aux, total
    var out, records, fields, values
	
    // get character counts in a way that works around surrogates
	letters = marks = punctuation = symbols = others = numbers = aux = 0
	langs[id].letter ? letters = [...langs[id].letter].length : 0
	langs[id].letteraux ? letters += [...langs[id].letteraux].length : 0
	langs[id].mark ? marks = [...langs[id].mark].length : 0
	langs[id].markaux ? marks += [...langs[id].markaux].length : 0
	langs[id].punctuation ? punctuation = [...langs[id].punctuation].length : 0
	langs[id].punctuationaux ? punctuation += [...langs[id].punctuationaux].length : 0
	langs[id].symbol ? symbols = [...langs[id].symbol].length : 0
	langs[id].symbolaux ? symbols += [...langs[id].symbolaux].length : 0
	//langs[id].other ? others = [...langs[id].other].length : 0
	langs[id].other ? others = langs[id].other.length : 0
	langs[id].number ? numbers = [...langs[id].number].length : 0
	langs[id].numberaux ? numbers += [...langs[id].numberaux].length : 0
	langs[id].aux ? aux = [...langs[id].aux].length : 0
	
	total = letters + marks + punctuation + symbols + others + numbers 
	
	out = '<table>'
	out += '<tbody id="featureTableBody">'
	out += '<tr><th>Script code</th><td>'+langs[id].script+'</td></tr>'
	out += '<tr><th>Language code</th><td>'+id+'</td></tr>'
	out += '<tr><th>Script type</th><td class="tableHighlight">'+langs[id].type+'</td></tr>'
	out += '<tr><th>Total characters</th><td class="tableHighlight" style="font-size: 150%;">'+parseInt(total).toLocaleString()
	if (aux>0) out += ' <span style="font-size: 70%">+ '+aux+'</span>'
	out += '</td></tr>'
	out += '<tr><th>Letters</th><td class="tableHighlight">'+letters+'</td></tr>'

	
	out += '<tr><th>Combining marks</th><td'
	if (marks!==0) out += ' class="tableHighlight"'
	out += '>'+marks+'</td></tr>'
	
	if (punctuation!==0) out += '<tr><th>Punctuation</th><td class="tableHighlight">'+punctuation+'</td></tr>'
	
	if (symbols!==0) out += '<tr><th>Symbols</th><td class="tableHighlight">'+symbols+'</td></tr>'

	if (others!==0) out += '<tr><th>Format codes</th><td class="tableHighlight">'+others+'</td></tr>'

	out += '<tr><th>Native digits</th><td'
	if (numbers!==0) out += ' class="tableHighlight"'
	out += '>'+numbers+'</td></tr>'

	out += '<tr><th>Possible other</th><td>'+aux+'</td></tr>'
	
	out += '<tr><th colspan="2">Character counts exclude ASCII.</td></tr>'
	
	out += '<tr style="line-height: .4;"><th>&nbsp;</th><td style="border:0;">&nbsp;</td></tr>'

    if (langs[id].vowels) {
        records = langs[id].vowels.split(' ')
		out += '<tr><th>Vowels</th><td class="tableHighlight">'
        for (i=0;i<records.length;i++) {
            fields = records[i].split(':')
            if (fields[1] !== 'y') out += fields[1]
            switch (fields[0]) {
                case 'let': out += ' letters'; break
                case 'inh': out += ' inherent vowel'; break
                case 'vs': out += ' vowel sign marks'; break
                case 'vsl': out += ' vowel sign letters'; break
                case 'venc': out += ' visually-encoded'; break
                case 'ind': out += ' independent vowels'; break
                case 'ml': out += ' matres lectionis'; break
                case 'cm': out += ' combining marks'; break
                case 'hcm': out += ' hidden diacritics'; break
                case 'syl': out += ' syllables'; break

                case 'base': out += ' base'; break
                case 'pre': out += ' pre-base glyphs'; break
                case 'circ': out += ' circumgraphs'; break
                case 'comp': out += ' composite vowels'; break
                case 'voc': out += ' vocalics'; break
                }
            if (i<records.length) out += '<br>'
            }
        out += '</td></tr>'
		}

    if (langs[id].medials) {
        records = langs[id].medials.split(' ')
		out += '<tr><th>Medials</th><td class="tableHighlight">'
        for (i=0;i<records.length;i++) {
            fields = records[i].split(':')
            if (fields[1] !== 'y') out += fields[1]
            switch (fields[0]) {
                case 'cm': out += ' diacritics'; break
                case 'sj': out += ' subjoined letters'; break
                case 'vs': out += ' dedicated letters'; break
                }
            if (i<records.length) out += '<br>'
            }
        out += '</td></tr>'
		}

    if (langs[id].finals) {
        records = langs[id].finals.split(' ')
		out += '<tr><th>Finals</th><td class="tableHighlight">'
        for (i=0;i<records.length;i++) {
            fields = records[i].split(':')
            if (fields[1] !== 'y') out += fields[1]
            switch (fields[0]) {
                case 'cm': out += ' diacritics'; break
                case 'let': out += ' dedicated letters'; break
                case 'ss': out += ' superscript letters'; break
                case 'vk': out += ' vowel killer'; break
                }
            if (i<records.length) out += '<br>'
            }
        out += '</td></tr>'
		}

    if (langs[id].clusters) {
        values = langs[id].clusters.split(' ')
		out += '<tr><th>Consonant clusters</th><td class="tableHighlight">'
        for (i=0;i<values.length;i++) {
            switch (values[i]) {
                case 'vir': out += 'visible virama'; break
                case 'inv': out += 'hidden conjunct maker'; break
                case 'stk': out += 'stacked glyphs'; break
                case 'cnj': out += 'conjoined glyphs'; break
                case 'lig': out += 'ligatures'; break
                case 'tcg': out += 'touching glyphs'; break
                case 'rax': out += 'special RA handling'; break
                case 'mrk': out += 'vowel-killer diacritic'; break
                case 'let': out += 'special letters'; break
                case 'unm': out += 'unmarked'; break
                }
            if (i<values.length) out += '<br>'
            }
        out += '</td></tr>'
		}

	out += '<tr><th>Case distinction</th><td'
	if (langs[id].cs!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].cs+'</td></tr>'
	
	out += '<tr><th>Cursive script</th><td'
	if (langs[id].cursive!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].cursive+'</td></tr>'
	
	out += '<tr><th>Text direction</th><td'
	if (langs[id].direction!=='ltr') out += ' class="tableHighlight"'
	out += '>'+langs[id].direction+'</td></tr>'
	
	out += '<tr><th>Baseline</th><td'
	if (langs[id].baseline!=='mid') out += ' class="tableHighlight"'
	out += '>'+langs[id].baseline+'</td></tr>'
	
	out += '<tr><th>Word separator</th><td'
	if (langs[id].wordsep!=='space') out += ' class="tableHighlight"'
	out += '>'+langs[id].wordsep
    if (langs[id].wordsepChar) out += ' '+langs[id].wordsepChar
    out += '</td></tr>'
	
	out += '<tr><th>Wraps at</th><td'
	if (langs[id].wrap!=='word') out += ' class="tableHighlight"'
	out += '>'+langs[id].wrap+'</td></tr>'
	
	out += '<tr><th>Hyphenation</th><td'
	if (langs[id].hyphenation!=='word') out += ' class="tableHighlight"'
	out += '>'+langs[id].hyphenation
    if (langs[id].hyphen) out += ' '+langs[id].hyphen
    out += '</td></tr>'
	
    if (langs[id].justification) {
        values = langs[id].justification.split(' ')
		out += '<tr><th>Justification</th><td class="tableHighlight">'
        for (i=0;i<values.length;i++) {
            switch (values[i]) {
                case 'sp': out += 'at spaces/wordbreaks'; break
                case 'str': out += 'baseline stretching'; break
                case 'sw': out += 'swashes'; break
                case 'pad': out += 'character padding'; break
                case 'ic': out += 'between characters'; break
                case 'ig': out += 'between glyphs'; break
                case 'none': out += 'none'; break
                case '?': out += '?'; break
                }
            if (i<values.length) out += '<br>'
            }
        out += '</td></tr>'
		}
	
	
	out += '<tr><th>Native speakers</th><td>'+parseInt(langs[id].speakers.replace(/~/g,'')).toLocaleString()+'</td></tr>'
	
	out += '<tr><th>Region</th><td>'+langs[id].region+'</td></tr>'
	
	
	
	out += '</tbody>'
	out += '</table>'

	out += '<p class="ctlink"><a href="../featurelist/">See the comparison table</a></p>'
	out += '<p class="ctlink"><a href="../featurelist/#key">See the key</a></p>'
	
	//langs = {}
	
	return out
	}




	






function makeTables (lang) {
    if (traceSet.has('makeTables') || traceSet.has('all')) console.log('makeTables(',lang,') Create the lists of characters in yellow, etc. boxes')

    if (typeof window.spreadsheet == 'undefined') {
		console.log("Spreadsheet undefined.")
		return
		}
    
    // make an object from the spreadsheet
    var temp = window.spreadsheet.split('\n')
    spreadsheet = ''
    window.spreadsheetRows = {}
    for (var x=0; x<temp.length; x++) {
        if (temp[x].trim() == '') continue
        var items = temp[x].split('\t')
        if (items[0] === '') continue

        window.spreadsheetRows[items[0]] = ['0']
        for (let i=1;i<items.length;i++) window.spreadsheetRows[items[0]].push(items[i])
        }
    //console.log(spreadsheetRows) 


    var tables, node, chars, info, bicameral, out, char, indexline
    
    tables = document.querySelectorAll('.auto')

	// for each figure in the document...
    for (let t=0;t<tables.length;t++) {
        replaceStuff(tables[t])
        }
    }



function getStatus (token) {
    // returns expanded strings for the status column in spreadsheet
    switch (token) {
    case 'r': status = 'rare'; break;
    case 'i': status = 'infreq.'; break;
    case 'l': status = 'loan'; break;
    case 't': status = 'transc.'; break;
    case 'a': status = 'archaic'; break;
    case 'u': status = 'unused'; break;
    case 'o': status = 'obsolete'; break;
    case 'd': status = 'deprecated'; break;
    case 'x': status = 'avoid'; break;
    default: status = '&nbsp;'
    }

    return status
    }








function replaceStuff (node) {

    var bicameral = false
    var showFirst = false
    var noexpansion = false
    var nolist = false
    var ipaplus = ''
    //console.log('replacing',node)

    // check whether this is an index line
    if (node.classList.contains('indexline')) var indexline = true
    else indexline = false

    // populate the chars array with characters & gather additional info
    //chars = node.dataset.chars.split('␣')
    chars = node.textContent.split('␣')
    
    // create a set of ignorable characters from data-ingore
    var ignoreset = new Set([])
    if (node.dataset.ignore) {
        ignorables = node.dataset.ignore.split(',')
        for (g=0;g<ignorables.length;g++) {
            ignoreset.add(ignorables[g])
            }
        }

    if (typeof node.dataset.cols === 'undefined') var info = ''
    else info = node.dataset.cols
    if (node.className.includes('noexpansion')) noexpansion = true // don't show the curved arrow
    if (node.className.includes('nolist')) nolist = true // don't show the total+arrow
    if (node.className.includes('bicameral')) bicameral = true // note: phase this out in favour of data-select=last
    else bicameral = false
    if (node.dataset.select && node.dataset.select == 'last') bicameral = true
    else if (node.dataset.select) showFirst = true
    if (node.className.includes('vowelcluster')) var vowelcluster = true // this should be phased out
    else vowelcluster = false
/*    if (node.dataset.ignore) {
        var ignorableChar = node.dataset.ignore.codePointAt(0)
        var ignorableCh = node.dataset.ignore
        }
    else {
        ignorableChar = ''
        ignorableCh = ''
        }
*/
    if (node.dataset.notes) {
        var notes = node.dataset.notes.split(',')
        }
    else notes = []
    if (node.dataset.extra) {
        var extra = node.dataset.extra.split('␣')
        var extraLang = extra.pop()
        }
    else extra = []
    if (node.dataset.ipa) {
        ipa = node.dataset.ipa.split(',')
        }
    else ipa = []
    if (node.dataset.translit) {
        var translit = node.dataset.translit.split('␣')
        }
    else translit = []
    if (node.dataset.links) {
        var links = node.dataset.links.split(',')
        }
    else links = []
    if (node.dataset.highlight) {
        var highlights = node.dataset.highlight.split(',')
        }
    else highlights = []
    if (node.dataset.dir) {
        var dirn = ` dir="${ node.dataset.dir }"`
        }
    else dirn = ''
    var out = ''

    // make the summary count link
    //if (chars.length > 1) {
        if (! nolist) {
            var length = chars.length
            for (let j=0;j<chars.length;j++) if (chars[j] === ' ') length-- // ignore spaces
            out += '<div class="listAll" onClick="listAll(this, \''+window.langTag+'\')" style="line-height:1;" title="Create a list of the items in the right column."><img src="../../shared/images/listitems.svg" style="height:.7rem; margin-inline-end:.1rem;"><br>'
            if (length === 2) out += 'both'
            else if (length > 2) out += length
            out += '</div>'
            }
        if (! noexpansion) {
            out += `<div class="listAll" onclick="showAllCharDetails(this)" title="Expand details for the whole list of characters." style="cursor:pointer;"><img src="../../shared/images/showdetails.svg" style="height:2rem; margin-inline-end:1rem;"></span> `
            out += '</div>'
            }
        //}
        

/*

        var length = chars.length
        for (let j=0;j<chars.length;j++) if (chars[j] === ' ') length-- // ignore spaces
        out += '<div class="listAll" onClick="listAll(this, \''+window.langTag+'\')"><img src="../../shared/images/listitems.svg" style="height:.7rem; margin-inline-end:.1rem;"> '
        if (length === 2) out += 'both'
        else if (length > 2) out += 'all '+length
        out += '</div>'
        out += `<div class="listAll" onclick="showAllCharDetails(this)" title="Expand details for the whole list of characters." style="cursor:pointer;"><img src="../../shared/images/showdetails.svg" style="height:2rem; margin-inline-end:1rem;"></span> `
        out += '</div>'
        //}

*/
    // find out whether this table includes status information
    var showStatus = false
    for (c=0;c<chars.length;c++) {
        if (window.spreadsheetRows[chars[c]] && window.spreadsheetRows[chars[c]][cols.status] && window.spreadsheetRows[chars[c]][cols.status] !== '') showStatus = true
        }
    
    // start building the listArray
    out += '<div class="listArray">'

    // for each item ...
    for (let i=0;i<chars.length;i++) { 
        if (bicameral || showFirst) {
            var charList = [... chars[i]]
            if (bicameral) char = charList[1]
            else char = charList[0]
            }
        else char = chars[i]
        
        // remove the character identified by data-ignore
        //if (ignorableCh) {
        //    var re = new RegExp(ignorableCh,'g')
        //    char = char.replace(re,'')
        //    }

        // create an id attribute for the listPairs in the index
        if (node.closest("#index")) var indexId = ' id="index'+chars[i]+'"'
        else indexId = ''

        // if (node.dataset.lang) out += '<div class="listPair"'+indexId+'><span class="listItem" lang="'+node.dataset.lang+'">'+chars[i]+'</span>'
        /* superceded
        if (node.dataset.lang) out += `<div class="listPair"${ indexId }><span class="listItem" lang="${ node.dataset.lang }"${ dirn }>${ chars[i] }</span>`
        else out += `<div class="listPair"${ indexId }><span class="listItem" lang="${ window.langTag }"${ dirn }>${ chars[i] }</span>`
        */
  
        // capture the listItem markup and add highlight class and special lang if appropriate
        out += `<div class="listPair"${ indexId }><span class="listItem`
        if (highlights[i]) out += ` highlight`
        out += `"`
        if (node.dataset.lang) out += ` lang="${ node.dataset.lang }"`
        else out += ` lang="${ window.langTag }"`
        out += `${ dirn }>${ chars[i] }</span>`

        
        //else out += '<div class="listPair"'+indexId+'><span class="listItem" lang="'+window.langTag+'">'+chars[i]+'</span>'


        // leave a blank where a space is used
        if (chars[i] === ' ') {
            out += '&nbsp;</span></div>'
            continue
            }

        // print any second row of characters
        if (extra.length > 0) {
            if (extra[i]) out += '<span class="listExtra" lang="'+extraLang+'">'+extra[i]+'</span>'
            else out += '<span>&nbsp;</span>'
            }

        
        // status line, if needed
        if (showStatus) {
            var status = '&nbsp;'
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.status]) {
                status = getStatus(window.spreadsheetRows[char][cols.status])
                }
            out += `<span class="listItemType">${ status }</span>`
            }

        
        // if the ipaplus class is set, get the ipa+ value (if there is one)
        if (info.includes('ipa')) {
            ipaplus = ''
            if (node.className.includes('ipaplus')) {
                if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ipaPlus]) ipaplus = window.spreadsheetRows[char][cols.ipaPlus].toLowerCase()
                }

        //if (window.spreadsheetRows[char]) console.log('ipa',char,window.spreadsheetRows[char][cols.ipaLoc])
            //if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ipaLoc]) ch = window.spreadsheetRows[char][cols.ipaLoc].toLowerCase()+ipaplus
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ipaLoc]) {
                ch = window.spreadsheetRows[char][cols.ipaLoc].toLowerCase()
                chs = ch.split(' ')
                ch = ''
                for (x=0;x<chs.length;x++) {
                    ch += chs[x]+ipaplus+' '
                    }
                }
            else ch = '&nbsp;'
            if (ch === '&nbsp;') out += '<span>&nbsp;</span>'
            else out += '<span class="listIPA">'+ch.replace(/ /g,' ').trim()+'</span>'
            //else out += '<span class="listIPA">'+ch.replace(/ /g,'<i>~</i>')+'</span>'
            }

        if (ipa.length > 0) {
            if (ipa[i]) out += '<span class="listIPA">'+ipa[i]+'</span>'
            else out += ' '
            }

       if (info.includes('transc')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.transcription]) ch = window.spreadsheetRows[char][cols.transcription]
            else ch = '&nbsp;'
            out += '<span class="listTransc">'+ch+'</span>'
            }

        if (info.includes('trans2')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.transcription2]) ch = window.spreadsheetRows[char][cols.transcription2]
            else ch = '&nbsp;'
            out += '<span class="listTrans2">'+ch+'</span>'
            }

         if (info.includes('trans')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.transLoc]) ch = window.spreadsheetRows[char][cols.transLoc]
            else ch = '&nbsp;'
            out += '<span class="listTrans">'+ch+'</span>'
            }

         if (translit.length > 0) {
            if (translit[i]) out += '<span class="listTrans">'+translit[i]+'</span>'
            else out += ' '
            }

       if (info.includes('meaning')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.meaning]) ch = window.spreadsheetRows[char][cols.meaning]
            else ch = '&nbsp;'
            out += '<span class="listMeaning">'+ch+'</span>'
            }

        if (notes.length > 0) {
            if (notes[i]) ch = notes[i]
            else ch = '&nbsp;'
            out += '<span class="listMeaning">'+ch+'</span>'
            }


        // print the code point values
        if (node.className.includes('noCodePoints')) {} // do nothing
        else {
            out += '<span class="listUnum">'
            charList = [... chars[i]]
            for (let z=0;z<charList.length;z++) {
                if (ignoreset.has(charList[z])) continue // ignore hex for this character
                var hex = charList[z].codePointAt(0)
                //if (ignorableChar && ignorableChar === hex) continue // ignore specified character
                if (vowelcluster && hex === 45) continue // ignore hyphens - this should be phased out
                hex = hex.toString(16).toUpperCase()
                while (hex.length < 4) hex = '0'+hex

                out += '<span class="listUnumCP" onclick="showCharDetailsInPanel(event)">'+hex+'</span>'
                if (charList.length>1 && z<charList.length-1) out += '<br/>'
                }
                out += '</span>'
                }


        // add any links
        if (links.length > 0) {
            if (links[i]) {
                var linkList = links[i].split(' ')
                if (indexline) out += '<div class="index_details">'
                if (window.spreadsheetRows[char]) var uname = window.spreadsheetRows[char][cols.ucsName].replace(/U\+[^:]+: /,'')
                else uname = "NAME UNKNOWN"
                if (indexline) out += '<span class="index_uname">'+uname+'</span>'
                out += `<span class="links">`
                for (let l=0;l<linkList.length;l++) {
                    out += '<a href="'+linkList[l]+'">↓</a>'
                    }
                out += '</span>'
                if (indexline) out += '</div>'
                }
            else out += '<span>&nbsp;</span>'
            }



        out += '</div>'
        }
    out += '</div>'

    node.innerHTML = out
    }







function getStatusForIndex (token) {
    // returns expanded strings for the status column in spreadsheet
    switch (token) {
    case 'r': status = 'index_rare'; break;
    case 'i': status = 'index_infrequent'; break;
    case 'l': status = 'index_loan'; break; // should migrate this to t
    case 't': status = 'index_transcription'; break;
    case 'a': status = 'index_archaic'; break;
    case 'u': status = 'index_unused'; break;
    case 'o': status = 'index_obsolete'; break;
    case 'd': status = 'index_deprecated'; break;
    case '?': status = 'index_tbc'; break;
    case 'x': status = 'index_avoid'; break;
    default: status = ''
    }

    return status
    }






function makeIndexLine (node) {


    var bicameral = false
    var showFirst = false
    //console.log(node)

    // populate the chars array with characters & gather additional info
    //chars = node.dataset.chars.split('␣')
    chars = node.textContent.split('␣')
    
    if (typeof node.dataset.cols === 'undefined') var info = ''
    else info = node.dataset.cols
   
    if (node.dataset.notes) {
        var notes = node.dataset.notes.split(',')
        }
    else notes = []


    var out = ''

    // make the summary count link
    //if (chars.length > 1) {
        var length = chars.length
        for (let j=0;j<chars.length;j++) if (chars[j] === ' ') length-- // ignore spaces
        out += '<div class="listAll" onClick="listAll(this, \''+window.langTag+'\')">list '
        if (length === 2) out += 'both'
        else if (length > 2) out += 'all '+length
        out += '</div>'
        //}

    // start building the listArray
    out += '<div class="listArray">'

    // for each item ...
    for (let i=0;i<chars.length;i++) {
        //console.log('makeIndexLine',chars[i])
        char = chars[i]
        
        if (typeof window.spreadsheetRows[char] === 'undefined') {
            console.log('%c' + 'Cannot find '+char+' in the spreadsheet (makeIndexLine). Index building needs attention.', 'color:' + 'orange' + ';font-weight:bold;')
            continue
            }

        // create an id attribute for the listPairs in the index
        if (node.closest("#index")) var indexId = ' id="index'+chars[i]+'"'
        else indexId = ''

        // check for status
        if (window.spreadsheetRows[char][cols.status] && window.spreadsheetRows[char][cols.status] !== '0') status = getStatusForIndex(window.spreadsheetRows[char][cols.status]).replace(/\./,'')
        else status = ''

        if (node.dataset.lang) out += `<div class="listPair ${ status }"${ indexId }><span class="listItem" lang="${ node.dataset.lang }" onclick="makeFootnoteIndex(charVal)">${ chars[i] }</span>`
        else out += `<div class="listPair ${ status }"${ indexId }><span class="listItem" lang="${ window.langTag }" onclick="makeFootnoteIndex('${ chars[i] }')">${ chars[i] }</span>`



        if (notes.length > 0) {
            if (notes[i]) ch = notes[i]
            else ch = '&nbsp;'
            out += '<span class="listMeaning">'+ch+'</span>'
            }


        // print the code point values
        out += '<span class="listUnum">'
        charList = [... chars[i]]
        for (let z=0;z<charList.length;z++) {
            var hex = charList[z].codePointAt(0)
            hex = hex.toString(16).toUpperCase()
            while (hex.length < 4) hex = '0'+hex

            out += '<span class="listUnumCP" onclick="showCharDetailsInPanel(event)">'+hex+'</span>'
            if (charList.length>1 && z<charList.length-1) out += '<br/>'
            }
        out += '</span>'


        // add any links
        out += '<div class="index_details">'
        if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ucsName]) {
            var uname = window.spreadsheetRows[char][cols.ucsName].replace(/U\+[^:]+: /,'')
            //if (window.spreadsheetRows[char][cols.status] && window.spreadsheetRows[char][cols.status] !== '0') {
                //status = getStatusForIndex(window.spreadsheetRows[char][cols.status]).replace(/\./,'')
                //out += `<span class="index_uname index_${ status }" onclick="makeFootnoteIndex('${ chars[i] }')">(${ status }) &nbsp;&nbsp; ${ uname }</span>`
                //}
            if (status) out += `<span class="index_uname" onclick="makeFootnoteIndex('${ chars[i] }')">(${ status.replace(/index_/,'') }) &nbsp;&nbsp; ${ uname }</span>`
            else out += `<span class="index_uname" onclick="makeFootnoteIndex('${ chars[i] }')">${uname}</span>`          
            }
        else uname = "NAME UNKNOWN"

        //out += `<span class="index_uname" onclick="makeFootnoteIndex('${ chars[i] }')">${uname}</span>`
        if (window.spreadsheetRows[char]) {
            out += `<span class="indexLineData" onclick="makeFootnoteIndex('${ chars[i] }')">`
            if (window.spreadsheetRows[char][cols.typeLoc]) out += `<span class="typeLoc">${ window.spreadsheetRows[char][cols.typeLoc] }</span> `
            if (window.spreadsheetRows[char][cols.statusLoc]) out += `<span class="statusLoc">${ window.spreadsheetRows[char][cols.statusLoc] }</span> `
            if (window.spreadsheetRows[char][cols.ipaLoc]) out += `<span class="ipa">${ window.spreadsheetRows[char][cols.ipaLoc].toLowerCase() }</span> `
            if (window.spreadsheetRows[char][cols.transcription] && window.spreadsheetRows[char][cols.transcription] !== '0') out += `<span class="transc">${ window.spreadsheetRows[char][cols.transcription] }</span> `
            out += '</span>'
            }
        out += '</span>'
        out += '</div>'



        out += '</div>'
        }
    out += '</div>'

    node.innerHTML = out
    }










function initialiseShowNames (node, base, target) {
    console.log('initialiseShowNames(',node, base, target,') Add onclick function to all .ex elements to display in panel')
    // function will display character by character names for example in the panel
    // base (string), path for link to character detail

    // this extends the function in show_codepoints.js to add support for listItems

    // locals
    var e, examples

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') base = ''
	if(typeof target === 'undefined') target = ''
	
    // collect list of nodes with .ex class & add onclick function
	examples = node.querySelectorAll('.ex')
	for (e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() == 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}
	
    // this is the new stuff
	var listItems = document.querySelectorAll(".listItem")
	for (let i=0;i<listItems.length;i++) {
		listItems[i].addEventListener('click', showCharDetailsEvent)
		listItems[i].addEventListener('click', makeFootnoteIndex)
		listItems[i].addEventListener('mouseover', showCharDetailsEvent)
		}
	
	var lists = document.querySelectorAll(".exlist")
	for (let i=0;i<lists.length;i++) lists[i].addEventListener('click', showCharDetailsEvent)
	}





function showCharDetailsEvent (evt) {
    // opens a panel to display character notes details
    
	if (evt.target.parentNode.parentNode.parentNode.classList.contains('noexpansion')) return
    
	if (typeof charDetails === 'undefined') return

	if (evt.type === 'mouseover' && document.getElementById('showDetailOnMouseover').checked != true) return
	
	table = evt.target.parentNode.parentNode.parentNode.querySelector('table')
    displayedItem = ''
    if (table !== null) displayedItem = table.querySelector('.ex')
    if (displayedItem) displayedItem = displayedItem.textContent
    
    // if clicked item and table are about the same thing, just close table
    if (displayedItem && displayedItem === evt.target.textContent) { 
        //console.log("found",displayedItem)
        table.parentNode.removeChild(table)
        return
        }
    
    // clear any existing table
	if (table !== null) table.parentNode.removeChild(table)
	
	var table = document.createElement('table')
	table.className = 'charDetails'
	table.innerHTML = makeDetails(evt.target.textContent, evt.target.lang)
	evt.target.parentNode.parentNode.parentNode.appendChild(table)
	
	expandCharMarkup()
	addExamples(evt.target.lang)
	convertTranscriptionData(evt.target)
	setFootnoteRefs()
    var links = table.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
    initialiseShowNames(table, window.blockDirectoryName, 'c')
    
    // set event trigger on all .ipa elements - opens description box on click
    var ipaNodes = document.querySelectorAll(".ipa")
    console.log('ipaNodes',ipaNodes.length)
    for (i=0;i<ipaNodes.length;i++) ipaNodes[i].onclick = showIPAPhoneEvt
    }







function showAllCharDetails (node) {
    // opens a panel to display character notes details
    
	if (typeof charDetails === 'undefined') return

    figure = node.closest('figure')
    displayedItem = ''
    if (figure === null) return
 	
	table = figure.querySelector('table')
   
    var itemlist=figure.querySelectorAll('.listItem')
    var characters = ''
    for (i=0;i<itemlist.length;i++) characters += itemlist[i].textContent
    
    const uniqueSet = new Set([...characters])
    var uniqueArray = [...uniqueSet]

    var charList = uniqueArray.join('')
    
	table = figure.querySelector('table')
    displayedItem = ''
    if (table !== null) displayedItem = table.querySelector('.ex')
    if (displayedItem) displayedItem = displayedItem.textContent
    
    // if clicked item and table are about the same thing, just close table
    if (displayedItem && displayedItem === charList) { 
        console.log("found",displayedItem)
        table.parentNode.removeChild(table)
        return
        }
    
    // clear any existing table
	if (table !== null) table.parentNode.removeChild(table)
	
	var table = document.createElement('table')
	table.className = 'charDetails'
	table.innerHTML = makeDetails(charList, window.langTag)
	figure.appendChild(table)
	
	expandCharMarkup()
	addExamples(window.langTag)
	//convertTranscriptionData(evt.target)
	setFootnoteRefs()
    var links = table.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
    initialiseShowNames(table, window.blockDirectoryName, 'c')
    }










function showtext (sourceName) {
	// when text is highlighted in the freeText area, display the character list
	text=getSelected()
	if (text.focusOffset > text.anchorOffset) {
		var start = text.anchorOffset
		var end = text.focusOffset
		}
	else {
		var start = text.focusOffset
		var end = text.anchorOffset
		}
	var highlight = text.focusNode.nodeValue.substr(start, end-start)
	var source = document.getElementById(sourceName)
	showNameDetails(highlight, source.lang, source.dataset.base, source.dataset.target, document.getElementById('panel') )
	}




function getSelected() {
	if (window.getSelection) return window.getSelection()
	else if (document.getSelection) return document.getSelection()
	else {
		var selection = document.selection && document.selection.createRange()
		if (selection.text) return selection.text
		return false
		}
	return false
	}




function toggleTranscription (type, show) { 
    // shows/hides a line of transcriptions in the listPairs
    // type: string, name of the class of the items to toggle
    // show: boolean, checkbox unchecked gives false
    var trans = document.querySelectorAll('.'+type)
    console.log('translen for ', type, 'is', trans.length)
    if (trans.length === 0) return

    for (let i=0; i<trans.length; i++) {
        if (show) trans[i].style.display = 'block'
        else trans[i].style.display = 'none'
        }
    }










function findSpecificIPA (ipa) {
    // modified to trigger a footnote index of locations for a given phoneme when 
    // activated from the panel showing phoneme links
    // the panel separates 

    ipa = ipa.normalize('NFC')

	// create a set of the character(s) being looked up
	const phoneSet = new Set(ipa.replace(/-/g,'').split(' '))
	//console.log('search for:',phoneSet)

/*	// identify locations in svg and tables that should not count
	var svgArray = document.querySelectorAll('.ipaSVG .ipa, .ipaSVG .allophone',)
	var tableArray = document.querySelectorAll('.ipaTable .ipa, .ipaTable .allophone')
	var screenedItems = new Set([ ...svgArray, ...tableArray ])
	//console.log('screenedItems',screenedItems)
*/
	var screenedItems = new Set()


    // collect all the .ipa elements
	var listItems = document.querySelectorAll('.ipa, .listIPA')
	var counter = 0
	var links = []
	for (k=0;k<listItems.length;k++) listItems[k].style.backgroundColor = 'transparent'
	
	for (let i=0;i<listItems.length;i++) {
        listItemContent = listItems[i].textContent

        // separate vowels and consonants if this is a syllabary
        // vowelsInSyllables is defined in xxx.js
        if (typeof vowelsInSyllables !== 'undefined') {
            for (var v=0;v<vowelsInSyllables.length;v++) {
                re = new RegExp(vowelsInSyllables[v],'g')
                if (re.test(listItems[i].textContent)) listItemContent += ' '+listItems[i].textContent.replace(re,'')+' '+vowelsInSyllables[v]
                }
            }
        //console.log(listItemContent)
        
		//var listPhones = listItems[i].textContent.split(' ')
		var listPhones = listItemContent.split(' ')
		for (let p=0;p<listPhones.length;p++) {
			if ((! screenedItems.has(listItems[i])) && phoneSet.has(listPhones[p].replace(/-/g,''))) {
				listItems[i].style.backgroundColor = '#ffa442ad'
				listItems[i].style.borderRadius = '5px'
				
				// gather a list of links to the found items
				var ptr = listItems[i]
				//console.log(listItems[i])
				while (ptr.parentNode.id == '') ptr = ptr.parentNode
				links.push(ptr.parentNode.id)
				
				counter++
				}
			}
		}
	
	// remove redundancy from the links array
	const uniqueLinks = new Set(links)
	leanLinks = [...uniqueLinks]
	//console.log(leanLinks)
	
	// report the results
	if (document.getElementById('phoneLinks')) {
		var out = counter+' matches found: &nbsp; '
		for (let i=0;i<leanLinks.length;i++) {
            if (i>0) out += ' • '
            out += '<a href="#'+leanLinks[i]+'">'+leanLinks[i]+'</a> '
            }
        out += ` \u2022 <a href="${ langTag }_vocab.html?q=${ ipa }" target="terms">terms list</a>`
		document.getElementById('phoneLinks').style.display = 'block'
		document.getElementById('phoneLinks').innerHTML = out+' &nbsp;&nbsp;<span style="cursor:pointer" onclick="this.parentNode.style.display = \'none\'">X</span>&nbsp;&nbsp;'
		}
	else {
		if (counter > 0) alert(counter+' matches found: &nbsp; '+leanLinks+'.')
		else alert('No matches found.')
		}
	}









//itemToFind.test(possibleMatches[i].textContent)

function findIPA () {
	// when you click on a phone in an svg or table chart, this highlights occurrences of that phone in the doc
	// this only locates a match if the phone is isolated (ie the only phone in the span or one of a set of 
	// space-separated phones in the span.  It won't pick up usage in ipa spellings of examples.
	// This is to avoid matching t with th, tʰ, t͡ʃʰ, etc.)

	// create a set of the character(s) being looked up
	const phoneSet = new Set(this.textContent.replace(/-/g,'').split(' '))
	//console.log('search for:',phoneSet)

	// identify locations in svg and tables that should not count
	var svgArray = document.querySelectorAll('.ipaSVG .ipa, .ipaSVG .allophone',)
	var tableArray = document.querySelectorAll('.ipaTable .ipa, .ipaTable .allophone')
	var screenedItems = new Set([ ...svgArray, ...tableArray ])
	//console.log('screenedItems',screenedItems)

	// collect all the .ipa elements
	var listItems = document.querySelectorAll('.ipa, .listIPA')
	var counter = 0
	var links = []
	for (k=0;k<listItems.length;k++) listItems[k].style.backgroundColor = 'transparent'
	
	for (let i=0;i<listItems.length;i++) {
        listItemContent = listItems[i].textContent

        // separate vowels and consonants if this is a syllabary
        // vowelsInSyllables is defined in xxx.js
        if (typeof vowelsInSyllables !== 'undefined') {
            for (var v=0;v<vowelsInSyllables.length;v++) {
                re = new RegExp(vowelsInSyllables[v],'g')
                if (re.test(listItems[i].textContent)) listItemContent += ' '+listItems[i].textContent.replace(re,'')+' '+vowelsInSyllables[v]
                }
            }
        //console.log(listItemContent)
        
		//var listPhones = listItems[i].textContent.split(' ')
		var listPhones = listItemContent.split(' ')
		for (let p=0;p<listPhones.length;p++) {
			if ((! screenedItems.has(listItems[i])) && phoneSet.has(listPhones[p].replace(/-/g,''))) {
				listItems[i].style.backgroundColor = '#ffa442ad'
				listItems[i].style.borderRadius = '5px'
				
				// gather a list of links to the found items
				var ptr = listItems[i]
				//console.log(listItems[i])
				while (ptr.parentNode.id == '') ptr = ptr.parentNode
				links.push(ptr.parentNode.id)
				
				counter++
				}
			}
		}
	
	// remove redundancy from the links array
	const uniqueLinks = new Set(links)
	leanLinks = [...uniqueLinks]
	//console.log(leanLinks)
	
	// report the results
	if (document.getElementById('phoneLinks')) {
		var out = counter+' matches found: &nbsp; '
		for (let i=0;i<leanLinks.length;i++) {
            if (i>0) out += ' • '
            out += '<a href="#'+leanLinks[i]+'">'+leanLinks[i]+'</a> '
            }
        out += ` &nbsp; <a href="${ ipa }" target="_blank">terms list</a>`
		document.getElementById('phoneLinks').style.display = 'block'
		document.getElementById('phoneLinks').innerHTML = out+' &nbsp;&nbsp;<span style="cursor:pointer" onclick="this.parentNode.style.display = \'none\'">X</span>&nbsp;&nbsp;'
		}
	else {
		if (counter > 0) alert(counter+' matches found: &nbsp; '+leanLinks+'.')
		else alert('No matches found.')
		}
	}





function makeSafeRegex (str) {
    // escapes the regex syntax characters in a string
    
    str = str.replace(/\./,'\\.')
    str = str.replace(/\?/,'\\?')
    str = str.replace(/\(/,'\\(')
    str = str.replace(/\)/,'\\)')
    str = str.replace(/\*/,'\\*')
    str = str.replace(/\+/,'\\+')
    str = str.replace(/\$/,'\\$')
    
    return str
    }




function makeFootnoteIndex (charVal) {
    if (traceSet.has('makeFootnoteIndex')) console.log('makeFootnoteIndex(','charVal='+charVal,')')
	// when you click on a character in a .listItem or .codepoint this creates a set of links at the bottom
    // of the page to other locations where that character is mentioned
    // it also highlights those instances

	// create a regex of the character(s) being looked up
    var incomingValue, itemToFind
    
    // this creation of itemToFind regex seems unnecessary, and .test was failing 
    // to locate all instances.  Replaced the latter with .includes
    // seems to work: wait a while to ensure it's a good fix, then delete the following
    if (typeof charVal === 'string') incomingValue = charVal.replace(/◌/g,'')
    else if (this.querySelector('img')) incomingValue = this.querySelector('img').alt.replace(/◌/g,'')
    else incomingValue = this.textContent.replace(/◌/g,'')
    //itemToFind = new RegExp(makeSafeRegex(incomingValue), 'g')
    //console.log('search for:',incomingValue)

	// collect all the .listItem & .codepoint elements
	var possibleMatches = document.querySelectorAll('.listItem, .codepoint span, .codepoint bdi')
	var counter = 0
	var links = []
    //for (x=0;x<possibleMatches.length;x++) if (traceSet.has('makeFootnoteIndex')) console.log('possibleMatch:',possibleMatches[x].textContent)
    
    // clear any existing highlights
	for (var k=0;k<possibleMatches.length;k++) {
        possibleMatches[k].style.backgroundColor = 'transparent'
        possibleMatches[k].style.padding = '0'
        }
	
    // check for matches and add highlights etc
	for (var i=0;i<possibleMatches.length;i++) {
        // get the value of this possible match, whether a bdi/span or an img
        if (possibleMatches[i].querySelector('img')) possibleMatchValue = possibleMatches[i].querySelector('img').alt
        else possibleMatchValue = possibleMatches[i].textContent
        
        //if (traceSet.has('makeFootnoteIndex')) console.log('Seeking possibleMatch in:',possibleMatchValue)
        
        // if this is a span around a character name, ignore it
        // otherwise check whether the possible match matches the thing we're looking for
        if (possibleMatches[i].parentNode.nodeName !== 'A' && 
       // itemToFind.test(possibleMatches[i].textContent)) {
        possibleMatchValue.includes(incomingValue)) {
            possibleMatches[i].style.backgroundColor = '#ffa442ad'
            possibleMatches[i].style.borderRadius = '5px'
            possibleMatches[i].style.paddingInline = '.25rem'
            //console.log('FOUND',incomingValue,'in',possibleMatchValue)
            
            // gather a list of links to the found items
            var ptr = possibleMatches[i]
            while (ptr.parentNode.nodeName == 'FIGURE' || ptr.parentNode.id == '') ptr = ptr.parentNode
            links.push(ptr.parentNode.id)
            counter++
            }
		}

    //if (traceSet.has('makeFootnoteIndex')) console.log('links',links)

	// remove redundancy from the links array
	const uniqueLinks = new Set(links)
	var leanLinks = [...uniqueLinks]
	//if (traceSet.has('makeFootnoteIndex')) console.log(leanLinks)
	
	// report the results
	if (document.getElementById('phoneLinks')) {
		var out = counter+' matches found: &nbsp; '
		for (let i=0;i<leanLinks.length;i++) {
            if (typeof leanLinks[i] === 'undefined') {
                console.log('*** Undefined leanLinks in makeFootnoteIndex')
                continue
                }
            if (i>0) out += ' • '
            out += `<a href="#${ leanLinks[i] }"`
            // open the index, if necessary
            if (leanLinks[i].startsWith('index')) {
                out += ` onclick = "var indexSections = document.getElementById('index').querySelectorAll('details'); for (i=0;i<indexSections.length;i++) indexSections[i].open = true"`
                }
            out += `>${ leanLinks[i] }</a> `
            //out += '<a href="#'+leanLinks[i]+'">'+leanLinks[i]+'</a> '
            }
        out += ` \u2022 <a href="${ langTag }_vocab.html?q=${ incomingValue }" target="terms">terms list</a>`
		document.getElementById('phoneLinks').style.display = 'block'
		document.getElementById('phoneLinks').innerHTML = out+`<span style="cursor:pointer; margin-inline: 1em;" onclick="this.parentNode.style.display = 'none'; clearFootnoteIndexHighlights()">X</span>&nbsp;&nbsp;`
		}
	else {
		if (counter > 0) alert(counter+' matches found: &nbsp; '+leanLinks+'.')
		else alert('No matches found.')
		}
	}







function clearFootnoteIndexHighlights () {
    // removes the highlighting associated with the footnote index links
    // called when the footnote index box is closed
	var listItems = document.querySelectorAll('.listItem, .codepoint span, .codepoint bdi')
	for (var k=0;k<listItems.length;k++) {
        listItems[k].style.backgroundColor = 'transparent'
        listItems[k].style.padding = '0'
        }
    }




function showTransliterations (yes) {
    //console.log('showTransliterations(',yes,')')
	if (! yes) {
		var nodes = document.querySelectorAll('.charExample .trans')
		for (let n=0;n<nodes.length;n++) nodes[n].style.display = 'none'
		}
	else {
		var nodes = document.querySelectorAll('.charExample .trans')
		for (let n=0;n<nodes.length;n++) nodes[n].style.display = 'inline'
		}
	}










function showIPAPhoneEvt (evt) { 
	// look for a Wikipedia page that describes the phoneme input
    
    if (typeof IPAsymbols === 'undefined') {
        console.log('Quitting show IPA symbols because no data.')
        return
        }
    
    if (typeof evt.target.value === 'undefined') searchitem = evt.target.textContent.normalize("NFD")
    else searchitem = evt.target.value.normalize("NFD")
    
    console.log('Looking up '+searchitem)
    founditems = []
    
    var out = ''
    
    out += `<p style="font-size: 3em; color: #ccc; float:right; margin:.2em .2em 0 0; cursor:pointer;" onclick="document.getElementById('ipaDialogBox').open=false">X</p>`
    
    out += `<p class="ipaAnalyseTitle">${ searchitem }</p>`
    
    out += `<table id="ipaAnalyseTable">`
    
    var searchArray = [... searchitem]
    for (i=0;i<searchArray.length;i++) {
        if (IPAsymbols[searchArray[i]]) {
            var names = IPAsymbols[searchArray[i]].split('\u00A7')
            var name = names[0]
            if (typeof names[1] !== 'undefined') var webpage = names[1]
            else webpage = names[0]
            out += `<tr><th>${ searchArray[i] }</th><td><a href="https://en.wikipedia.org/wiki/${ webpage.replace(/ /g,'_') }" target=_blank>${ name }</a></td></tr>`
            }
        }
    
    out += `</table>`
    
    document.getElementById('ipaDialogBox').innerHTML = out
    document.getElementById('ipaDialogBox').open = true
    
    
    findSpecificIPA(searchitem)
	}











function setTranslitToggle () {
    if (traceSet.has('setTranslitToggle') || traceSet.has('all')) console.log('setTranslitToggle(',') Add checkboxes and links to the fixed position selector')
	// adds checkboxes and links to the fixed position selector
	
	var checkboxList = document.getElementById('showTranscriptions')
	if (checkboxList === null) {
		console.log("Couldn't find sliding checkbox!")
		return
		}
    
    /* CHECK THIS OUT */
    var details = document.createElement('details')
    
    var summary = document.createElement('summary')
    summary.appendChild(document.createTextNode('Hide/show other items'))
    details.appendChild(summary)
    
	// add translit toggle
	var div = document.createElement('div')
	div.id = 'translitToggle'
	var label = document.createElement('label')
	var input = document.createElement('input')
	input.type = 'checkbox'
    input.id = 'translitToggleCheckbox'
	label.appendChild(document.createTextNode('Show transcriptions '))
	label.appendChild(input)
	label.onclick = showTransliterationsEvt
	div.appendChild(label)
	details.appendChild(div)

	// add detail mouseover toggle
	div = document.createElement('div')
	div.id = 'showDetailType'
	label = document.createElement('label')
	input = document.createElement('input')
	input.type = 'checkbox'
	input.checked = false
	input.id = 'showDetailOnMouseover'
	label.appendChild(document.createTextNode('Detail on mouseover '))
	label.appendChild(input)
	//label.onclick = showTransliterationsEvt
	div.appendChild(label)
	details.appendChild(div)
    
	checkboxList.appendChild(details)
    

	// add links to phonetic symbol info
	div = document.createElement('div')
	div.id = 'phoneticLinks'
    div.appendChild(document.createTextNode('Phonetic alphabet tips:'))
    div.appendChild(document.createElement('br'))
    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Consonants'))
    a.href = 'https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Consonants'
    a.target = "_blank"
    div.appendChild(a)

    div.appendChild(document.createTextNode(' • '))

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Vowels'))
    a.href = 'https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Vowels'
    a.target = "_blank"
    div.appendChild(a)

    div.appendChild(document.createTextNode(' • '))

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Diacritics'))
    a.href = 'https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Diacritics_and_prosodic_notation'
    a.target = "_blank"
    div.appendChild(a)

	checkboxList.appendChild(div)


	// phonetic symbol lookup
	div = document.createElement('div')
	div.id = 'phoneticLookup'
    var span = document.createElement('span')
    span.style = 'font-size: 80%; font-style: italic'
    span.appendChild(document.createTextNode('Look up IPA symbols: '))
    div.appendChild(span)
    var input = document.createElement('input')
    input.type = 'text'
    input.style = 'text-align:center; width: 8rem; height:1.4rem; vertical-align:top;'
    input.title = 'Look up a phonetic symbol in Wikipedia.'
    input.oninput = showIPAPhoneEvt
    input.placeholder = '🔎'
    div.appendChild(input)

	checkboxList.appendChild(div)

	div = document.createElement('div')
	div.id = 'phoneticLookupOut'
    div.style = 'font-size:80%;'

	checkboxList.appendChild(div)


    // add link to glossary
	div = document.createElement('div')
    div.id = 'glossaryLink'

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Open glossary'))
    a.href = '../glossary/'
    a.title = 'Find a term in the glossary.'
    a.target = '_blank'
    div.appendChild(a)

	checkboxList.appendChild(div)
    
    // add link to character app
	div = document.createElement('div')
    div.id = 'characterAppLink'

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Open character app'))
    a.href = '../../pickers/'+window.pickerDir+'/index.html'
    a.title = 'Open a character app for this orthography.'
    a.target = '_blank'
    div.appendChild(a)

	checkboxList.appendChild(div)


/*
<input type="text" style="text-align:center; width: 1.2rem; height:1.4rem; vertical-align:top;" title="Add a (single) character to highlight where it appears in this page." oninput="if (this.value !== '') makeFootnoteIndex(this.value)" placeholder="🔎">
*/



    // add link to top of plage
	/* div = document.createElement('div')
    var img = document.createElement('img')
    img.id = 'jumpToToc'
    img.src = '../../shared/images/up.png'
    img.style.marginBlockStart = '2rem'
    img.alt = 'TOC.'
    img.title = 'Jump to table of contents.'
    img.onclick = function () { document.getElementById('tocPanel').style.display = 'block'}
    div.appendChild(img) */
    /*var a = document.createElement('a')
    a.appendChild(img)
    a.href = '#header-boilerplate'
    div.appendChild(a)*/

	checkboxList.appendChild(div)
    checkboxList.style.display = 'none'
	}




function showTransliterationsEvt (evt) { 
	showTransliterations(evt.target.checked )
	}






// MAKE INDEX DATA
function makeIndexObject () {
    var charArray = []
	chars = document.querySelectorAll('.codepoint, .listItem')
	for (i=0;i<chars.length;i++) {
        if (chars[i].textContent.trim() === '') continue
        if (chars[i].classList.contains('noindex') || chars[i].parentNode.parentNode.parentNode.classList.contains('noindex')) continue
        
        //console.log('Processing:',chars[i].textContent)
        if (chars[i].firstChild == null) console.log('No content found for',chars[i].parentNode.textContent)
        cell = chars[i].firstChild.textContent
        
        // get the heading
		ptr = chars[i]
		while (ptr.nodeName != 'SECTION' && ptr.nodeName != 'HTML') {
			ptr = ptr.parentNode
			}
		section = ptr.id
        //console.log(cell, section)
        if (section.includes('index_')) continue
        if (section.includes('_map')) continue
        if (section.includes('map_')) continue
      
        
        // get the status
        var status = ''
        if (chars[i].classList.contains('listItem')) {
            listHead = chars[i].parentNode.parentNode.parentNode
            if (listHead.classList.contains('otherBox')) status = 'other'
            //else if (listHead.classList.contains('characterBox') || listHead.classList.contains('mainBox')) status = 'main'
            //else if (listHead.classList.contains('auxiliaryBox') || listHead.classList.contains('auxBox')) status = 'aux'
            else if (listHead.classList.contains('characterBox') || listHead.classList.contains('mainBox')) status = 'character'
            else if (listHead.classList.contains('auxiliaryBox') || listHead.classList.contains('auxBox')) status = 'auxiliary'
            else if (listHead.classList.contains('deprecatedBox')) status = 'deprecated'
            else if (listHead.classList.contains('archaicBox')) status = 'archaic'
            //console.log(cell, status)
            }
        
        // create an object for each item in the cell
        cellList = [...cell]
        for (j=0;j<cellList.length;j++) {
            charArray.push(new Object)
            charArray[charArray.length-1].codepoint = cellList[j]
            charArray[charArray.length-1].section = section
            if (status !== '') charArray[charArray.length-1].status = status
            }
		}
	//console.log('charArray',charArray)

	allchars = '' // makes a list of all characters for sorting later
    
    // create entries in the index array, avoiding duplicate entries per section
    for (j=0;j<charArray.length;j++) {
        indexChar = charArray[j].codepoint
        // stop duplicates within the same section
        if (index[indexChar] && index[indexChar].section.includes(charArray[j].section)) {
            if (charArray[j].status) index[indexChar].status = charArray[j].status
            continue
            }
		if (index[indexChar]) {
            index[indexChar].section += ' #'+charArray[j].section
            if (charArray[j].status) index[indexChar].status = charArray[j].status
            }
		else {
            index[indexChar] = new Object
			index[indexChar].section = '#'+charArray[j].section
            if (charArray[j].status) index[indexChar].status = charArray[j].status
			allchars += indexChar
			}
		}
	//console.log('index',index)
    
    // sort the allchars string
    sortedAllChars = [...allchars].sort()
    allchars = sortedAllChars.join('')
	//document.getElementById('allchars').value = allchars
	}




// reworked to add indexline
function makeMarkup () {

	charList = document.getElementById('in').value
	charList = charList.replace(/ /g,'')
	chars = [...charList]
    type = index[chars[0]].status
	out = '<figure class="'+type+'Box auto noindex indexline"  data-cols="" data-links="'
	for (i=0;i<chars.length;i++) {
		out += index[chars[i]].section+','
		}
	//out +='" data-notes="'
 	//for (i=0;i<chars.length;i++) {
	//	out += index[chars[i]].sectionName+','
	//	}
    out += '">'+chars.join('␣')+'</figure>'
	document.getElementById('out').value = out
	document.getElementById('out').select()
	}





function makeMarkupForSection (sectionName) {
    // rewrite the index for a given section in the index
    // new versions makes markup changes in place
    // sectionName is the id of a section in the index
    // global: index, contains the mappings of character to section
    
    if (document.getElementById(sectionName) === null) {
        console.log('ℹ no ',sectionName,'section found (makeMarkupForSection)')
        return
        }

    var i, j, k
    
    var indexList = document.getElementById(sectionName)
    var indexFigures = indexList.querySelectorAll('figure')
    for (i=0;i<indexFigures.length;i++) {
        var allCharsArray = indexFigures[i].textContent.split('␣')
        //console.log('allCharsArray',allCharsArray)
                
        var out = ''
        var missing = []
        for (k=0;k<allCharsArray.length;k++) {
            if (typeof index[allCharsArray[k]] === 'undefined') missing.push(allCharsArray[k])
            else out += index[allCharsArray[k]].section + ','
            }
        if (missing.length > 0) {
            console.log('INFO: in makeMarkupForSection, the following characters were not found in the global index object (meaning that they don\'t appear in the text)')
            for (var j=0;j<missing.length;j++) console.log(missing[j])
            }
        //console.log('out',out)
        
        indexFigures[i].dataset.links = out
        //replaceStuff(indexFigures[i])
        makeIndexLine(indexFigures[i])
        }
	}






function checkParameters () {
    // check for parameters and take appropriate action
    var parameters = location.search.split('&')
    parameters[0] = parameters[0].substring(1)
    for (var p=0;p<parameters.length;p++) {  
        var pairs = parameters[p].split('=')
        
        // open index and jump to character location
        if (pairs[0] === 'index') { if (pairs[1]) {
            indexSections = document.getElementById('index').querySelectorAll('details')
            console.log('indexSections',indexSections.length)
            for (i=0;i<indexSections.length;i++) indexSections[i].open = true
            //document.getElementById('index_details').open = true
            document.location = '#index'+pairs[1]
            } }
        
        // open index without jumping to character location
        if (pairs[0] === 'showIndex') {
            indexSections = document.getElementById('index').querySelectorAll('details')
            for (i=0;i<indexSections.length;i++) indexSections[i].open = true
            }
        
        // turn off mouseover reveal of list boxes
        if (pairs[0] === 'nomouseover') {
            document.getElementById('showDetailOnMouseover').checked = false
            console.log('Detail on mouseover is off.')
            }
        }
    }












function makeCharDataObj () {
    // create a charData array - (this removes reliance on the all-names.js file)
    // global, spreadsheetRows
    
    window.charData = {}
    
    for (var c in spreadsheetRows) {
        charData[c] = spreadsheetRows[c][cols['ucsName']].replace(/U\+[^:]+: /,'')
        }
    }





function copyIntroInfo () {
    if (traceSet.has('copyIntroInfo') || traceSet.has('all')) console.log('copyIntroInfo()\n\tCopy paragraphs from the brief summary to the top of various sections')
    
    // do the vowels
    if (document.getElementById('vowel_description')) {
        var out = ''
        var paras = document.querySelectorAll('.addToVowels')
        console.log("Copying",paras.length,"paragraphs to Vowel section.")
        for (var i=0;i<paras.length;i++) out += paras[i].outerHTML
        //if (document.getElementById('vowel_mappings')) out += `<p class="instructions">For a mapping of sounds to graphemes see <a class="secref" href="#vowel_mappings">Vowel sounds to characters</a>.</p>`
        if (out !== '') document.getElementById('vowel_description').innerHTML = out
        }
    
    // do the consonants
    if (document.getElementById('consonant_description')) {
        var out = ''
        var paras = document.querySelectorAll('.addToConsonants')
        console.log("Copying",paras.length,"paragraphs to Consonant section.")
        for (var i=0;i<paras.length;i++) out += paras[i].outerHTML
        //if (document.getElementById('consonant_mappings')) out += `<p class="instructions">For a mapping of sounds to graphemes see <a class="secref" href="#consonant_mappings">Consonant sounds to characters</a>.</p>`
        if (out !== '') document.getElementById('consonant_description').innerHTML = out
        }

    
    // do diacritics
    if (document.getElementById('diacritic_description')) {
        var out = ''
        var paras = document.querySelectorAll('.addToDiacritics')
        console.log("Copying",paras.length,"paragraphs to Diacritics section.")
        for (var i=0;i<paras.length;i++) out += paras[i].outerHTML
        if (out !== '') document.getElementById('diacritic_description').innerHTML = out
        }
    }








function createtocPanel (maxlevel) {
	// creates a TOC and puts it in #tocPanel
    // expect to find the id on the heading markup, NOT the section, and NO a around the heading text
    // works for h2 or h2+h3 (if maxlevel set to 3
    // calls setSectionRefs setFigRefs
    // local h2s toc h2 h3 i h a h3s k hh aa h4s
	
	var h2s = document.querySelectorAll('h2')
	var toc = document.getElementById('tocPanel')
	var h2, h3
	
	for (var i=0; i<h2s.length; i++) {
		if (!h2s[i].className.match(/notoc/)) {
			h2 = h2s[i].innerHTML
            
            // create a self link <a class="selflink" aria-label="§" href="#basicconsonants"></a>
            var selflink = document.createElement('a')
            selflink.className = 'selflink'
            selflink.href = '#'+h2s[i].parentNode.id
            h2s[i].appendChild(selflink)
            
			var h = document.createElement('div')
			var a = document.createElement('a')
				a.href = '#'+h2s[i].parentNode.id
				a.innerHTML = h2
			h.appendChild(a)
			h.className = 'toc1'
		
			if (maxlevel && maxlevel > 2) {
				// check for h3s
				var h3s = h2s[i].parentNode.querySelectorAll('h3')
				for (var k=0; k<h3s.length; k++) {
					if (!h3s[k].className.match(/notoc/)) {
						h3 = h3s[k].innerHTML
            
                        // create a self link
                        selflink = document.createElement('a')
                        selflink.className = 'selflink'
                        selflink.href = '#'+h3s[k].parentNode.id
                        h3s[k].appendChild(selflink)
            
						var hh = document.createElement('div')
						var aa = document.createElement('a')
							aa.href = '#'+h3s[k].parentNode.id
							aa.innerHTML = h3
						hh.appendChild(aa)
						hh.className = 'toc2'
						
                        // check for h4s and add self-links
                        var h4s = h3s[k].parentNode.querySelectorAll('h4')
                        for (var m=0; m<h4s.length; m++) {
                            if (!h4s[m].className.match(/notoc/)) {
                                h4 = h4s[m].innerHTML

                                // create a self link
                                selflink = document.createElement('a')
                                selflink.className = 'selflink'
                                selflink.href = '#'+h4s[m].parentNode.id
                                h4s[m].appendChild(selflink)
                                var hhh = document.createElement('div')
                                var aaa = document.createElement('a')
                                    aaa.href = '#'+h4s[m].parentNode.id
                                    aaa.innerHTML = h4
                                hhh.appendChild(aaa)
                                hhh.className = 'toc3'
                                }
                                console.log(h2)
                                if (! h2.includes('index')) hh.appendChild(hhh)
                            }
						}
					h.appendChild(hh)
					}
				}
				toc.appendChild(h)
			}
		}
    x = document.createElement('div')
    x.id = 'toc_panel_close_button'
    x.appendChild( document.createTextNode('X'))
    x.onclick = function () { document.getElementById('tocPanel').style.display = 'none' }
    toc.appendChild(x)
	}




function addResources () {
    // Adds information from xx-examples to the section Online resources
    
    if (typeof termLists === 'undefined') return
    
    var section = document.getElementById('online_samples')
    if (section === null) return
    
    var out = `<h2>Online resources</h2>

<ol>\n`
    for (i=0;i<termLists.length;i++) {
        if (typeof termLists[i].notes == 'undefined') termLists[i].notes = '    '
        out += `<li><a href="${ termLists[i].url }" target="_blank">${ termLists[i].title }</a> &nbsp;&nbsp; ${ termLists[i].notes }\n`
        }
    out += `</ol>`
    
    document.getElementById('online_samples').innerHTML = out
    }






function addCharacterLists () {
    // adds the lists of characters in selected sections to the right hand column

    if (document.getElementById('vowels') && document.getElementById('vowels').querySelector('aside') !== null) listSectionCharacters('vowels')
    if (document.getElementById('consonants') && document.getElementById('consonants').querySelector('aside') !== null)listSectionCharacters('consonants')
    if (document.getElementById('inline') && document.getElementById('inline').querySelector('aside') !== null)listSectionCharacters('inline')
    
    }




function listSectionCharacters (section) {
    charElems = document.getElementById(section).querySelectorAll('.listItem')
    charList = ''
    for (i=0;i<charElems.length;i++) {
        if (charElems[i].className === 'listItem' && ! charElems[i].closest('figure').classList.contains('noindex'))  charList += charElems[i].textContent
        else if (charElems[i].closest('.codepoint') && charElems[i].closest('.codepoint').classList !== null && ! charElems[i].closest('.codepoint').classList.contains('noindex'))  charList += charElems[i].textContent
        }
    charList = charList.replace(/\u25CC/g,'')
    charList = charList.replace(/\u200D/g,'')
    charList = charList.replace(/\u0020/g,'')
    charList = charList.replace(/\u00A0/g,'')
    charList = charList.replace(/\u24D8/g,'')
        
    charArray = [... charList]
    uniqueSet = new Set(charArray)
    charArray = [...uniqueSet]
    charArray.sort()
    charList = charArray.join('\u2423')
    
    document.getElementById(section).querySelector('aside').innerHTML += `
    <div class="sectionCharacterList">
    <p>Characters described in this section</p>
    <figure class="characterBox auto noexpansion small" data-cols="">${ charList }</figure>
    </div>
    `
    
    replaceStuff(document.getElementById(section).querySelector('figure'))
    listItems = document.getElementById(section).querySelectorAll('.listItem')
	for (let i=0;i<listItems.length;i++) listItems[i].addEventListener('click', makeFootnoteIndex)
    
    console.log('charlist',charList)
    document.getElementById(section).querySelector('aside').innerHTML += `<p class="instructions" style="text-align:end;"><a href="../apps/listcategories/index.html?chars=${ charList.replace(/\u2423/g,'') }" target="_blank">Triage by General Category</a></p>`
    }




/* SHOW TRANSCRIPTIONS INLINE, RATHER THAN IN POPUP PANEL */


function showCharDetailsInline (chars, clang, base, target, panel, list, translit, ipa, node) {
    // open an article window after an example and fill it with character details
    
	if (typeof charDetails === 'undefined') return

    // get the insertion point
    insertPoint = node.closest('p, table, div, li, figure')

    // create the article element & table outer
    var panel = document.createElement('article') 
	var table = document.createElement('table')
	table.className = 'panel'
	table.innerHTML = makeExampleArticleDetails(chars, clang, base, target, panel, list, translit, ipa, node)
	panel.appendChild(table)
    insertPoint.after(panel)
	
	expandCharMarkup()
	addExamples(clang)
	//convertTranscriptionData(evt.target)
	setFootnoteRefs()
    var links = table.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
    initialiseShowNames(table, window.blockDirectoryName, 'c')
    
    // set event trigger on all .ipa elements - opens description box on click
    var ipaNodes = document.querySelectorAll(".ipa")
    for (i=0;i<ipaNodes.length;i++) ipaNodes[i].onclick = showIPAPhoneEvt
	return false
	}



function makeExampleArticleDetails (chars, clang, base, target, panel, list, translit, ipa) {
    //console.log('makeExampleArticleDetails (chars=',chars, 'clang=',clang, 'base=',base, 'target=', target, 'panel=',panel, 'list=',list, 'translit=',translit, 'ipa=',ipa,')\n\tDisplay characters in an example (like in the panel)')
    // called by showCharDetailsInline
    // chars (string), alt text of example
    // clang (string), lang attribute value of example img
    // base (string), path for link to character detail
    // target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
    // list (string), if not null, indicates that spaces and nbsp should be ignored
    // local out charArray chardiv charimg thename thelink hex dec blockname blockfile c
    // global charData pickerDir
    // calls getScriptGroup

    // to show per-grapheme ipa the ipa transcriptions should have � as grapheme separator (and syllables should be separated by '.'). Unpronounced segments are represented by � (en hyphen).  Monosyllabic words don't need any extra stuff.

    var dir, characterList, graphemes, ptr, transcriptions, gloss, charArray, out
	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

	// check whether the calling page has set a base and target window: if not base, point to UniView
	if(typeof base === 'undefined' || base === '') { base = '../../uniview/index.html?char=' }
	if(typeof target === 'undefined') { target = 'c' }
	if(typeof list === 'undefined') { list = null }
	if(typeof translit === 'undefined') { translit = '' }
	  
	// clear and show the panel
	/*panel.innerHTML = ''
	panel.style.display = 'block'*/
    dir = ''
    if (typeof window.direction === 'string') dir = window.direction
    else if (typeof template !== 'undefined' && typeof template.direction === 'string') dir = template.direction
    
    
    
    out = '<tr>'
    
    
    out += `<th class="cdChar" onclick="this.closest('article').remove()"><span class="exCharClose">x</span></th>`
    
    
    // add the links
    out += `<td class="cData">`
    out += `<p class="notesLink">`
    
    out += `<a href="javascript:void(0)" onclick="copyPanelList(); return false;" style="cursor:copy;">Copy list</a>`
    out += `<br>`
    
    out += `<a href="javascript:void(0)" onclick="openExportWindow('../../app-analysestring/index.html?chars=${ chars }'); return false;">Details</a>`
    out += `<br>`
    
    out += `<a href="javascript:void(0)" onclick="openExportWindow('../../uniview/index.html?charlist=${ chars }')">UniView</a>`
    out += `<br>`
    
    out += `<a href="javascript:void(0)" onclick="openExportWindow('../../scripts/apps/graphemes/index.html?gc=${ chars }')">Graphemes</a>`
    out += `<br>`

    if (window.pickerDir) {
        out += `<a href="javascript:void(0)" onclick="openExportWindow('../../pickers/${ window.pickerDir }/index.html?text=${ chars }')">Character App</a>`
        out += `<br>`
        }
    
    // add a link to the _vocab page
    if (typeof window.languageName === 'undefined') var fragid = ''
    else fragid = '#'+window.languageName

    // figure out where to find the url for the _vocab page
    var url
    if (typeof template !== 'undefined' && typeof template.vocablocation === 'string')  url = `../../scripts/${ template.vocablocation }.html`
    
    else url = `${ window.langTag }_vocab`
    
    if (typeof window.removeVowels === 'function') chars = removeVowels(chars)

    out += `<a href="javascript:void(0)" onclick="openExportWindow('${ url }.html?q=${ chars }')">Term list</a>`
    out += `<br>`

    out += `</p>`



    // make the character gloss
	out += '<div id="ruby">'
	
    // get any IPA data provided - should be pre-separated for graphemes by �
    if (typeof ipa === 'string' && ipa !== '') ipa = ipa.split('\u00A7')
    else ipa = false
    
	// add the example to the panel as a title
    characterList = [...chars]
    graphemes = []
    ptr = -1
    for (var c=0;c<characterList.length;c++) {
        if (window.marks && window.marks.has(characterList[c]) && c !== 0) graphemes[ptr] += characterList[c]
        else {
            ptr++
            graphemes[ptr] = characterList[c]
            }
        }

    transcriptions = []
    for (var t=0;t<graphemes.length;t++) {
        transcriptions[t] = transliteratePanel(graphemes[t], clang)
        }
    
    if (traceSet.has('showNameDetails')) {
        console.log('graphemes: ',graphemes)
        console.log('transcriptions: ',transcriptions)
        console.log('ipa: ',ipa)
        }


    // draw the glosses
    if (location.toString().includes('picker')) var iconURL = '../../scripts/common29/icons/copytiny.svg'
    else iconURL = '../common29/icons/copytiny.svg'
    gloss = '<div class="multilineGlossedText">'
    for (t=-1;t<graphemes.length;t++) {
        if (t===-1) {
            gloss += `<div class="stack"><span class="rt translitGloss" lang="und-fonipa" title="Transliteration of the text."><img src="${ iconURL }" class="copyIcon" onclick="copyExamplePanelText(this, '.translitGloss')" title="Copy the transliteration." alt="Copy transliteration"></span><span class="rb"><img src="${ iconURL }" onclick="copyExamplePanelText(this, '.rb')" class="copyIcon" title="Copy the text." alt="Copy text"></span>`
            if (ipa !== false) {
                if (ipa[t+1]) gloss += `<span class="rt IPAGloss" lang="und-fonipa" title="IPA transcription of the text."><img class="copyIcon" src="${ iconURL }" onclick="copyExamplePanelText(this, '.IPAGloss')" title="Copy the IPA transcription." alt="Copy IPA"></span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        else {
            gloss += ` <div class="stack"><span class="rt translitGloss" lang="und-fonipa">${ transcriptions[t] }</span><span class="rb">${ graphemes[t] }</span>`
            if (ipa !== false) {
                if (ipa[t]) gloss += `<span class="rt IPAGloss" lang="und-fonipa">${ ipa[t] }</span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        }
    gloss += '</div>'

	//out += `<div dir="${ dir }" class="ex" lang="${ clang }" id="title">${ gloss }</div>`
    // removing the alternating direction so that IPA reads better
	//out += `<div dir="${ window.blockDirection }" class="ex" lang="${ clang }" id="title">${ gloss }</div>`
	out += `<div dir="ltr" class="glossContainer" lang="${ clang }" id="title">${ gloss }</div>`
    
        
    
    // add instructions line
	out += '<p class="advice" style="line-height:1;">Glossed lines are transliteration/text/IPA.<br>Click on character names below for detailed information.</p>'
	
	// create a list of characters
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    charArray = [...chars]
    
    if (traceSet.has('showNameDetails')) console.log('charArray: ',charArray)

    out += '<div id="listOfCharacters">'
	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
 
        //if (traceSet.has('showNameDetails')) console.log('charData: ',charData)
        //if (traceSet.has('showNameDetails')) console.log('charArray[c]: ',charArray[c])

		if (charData[charArray[c]]) {
            blockname = getScriptGroup(dec, false)
            blockfile = getScriptGroup(dec, true)
            //console.log(dec,blockfile)
            isInBlock = spreadsheetRows[charArray[c]]?true:false
            //isInBlock = spreadsheetRows[charArray[c]]?spreadsheetRows[charArray[c]][cols['block']]:''

            out += '<div class="panelCharacter">'
			//if (blockfile) {
			if (isInBlock) {
				//out += `<a target="${ target }" href="`
                // undoing this change which put characters in the list because imgs are needed in order to make the list to copy to clipboard
                // out += `<span style="display:inline-block; font-size:1.5rem; min-width: 2rem;">${ charArray[c] }</span>`
                out += `<img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }" style="height:2rem;">`
                
                // FOR ORTHOGRAPHY NOTES
                if (document.querySelector('.useBlockExamples')) {
                    out += `<a href="javascript:void(0)" onclick="showCharDetailsInPanel(event)"> U+${ hex } ${ charData[charArray[c]] }</a>`
                    //out += `<a href="javascript:void(0)" onclick="showCharDetailsInPanel('${ charArray[c] }', '${ clang }', '','','','','', '${ ipa }', this)"> U+${ hex } ${ charData[charArray[c]] }</a>`
                    }
   //(chars, clang, base, target, panel, list, translit, ipa, node)             
                // FOR TERMS LISTS
                else if (document.querySelector('.termListApp')) {
                    out += `<a target="c" href="../../scripts/${ blockfile }/${ terms.language }-characters.html#char${ hex }"> U+${ hex } ${ charData[charArray[c]] }</a>`
                    console.log('blockfile',terms.language )
                    }

                else {
                    out += `<a target="c" href="`
                    //if (base === '../../uniview/index.html?char=') out += base+hex
                    //else out += '../../scripts/'+blockfile+'/block.html#char'+hex useBlockExamples
                    out += '../../scripts/'+blockfile+'/block.html#char'+hex
                    out += '">'
                    //out += '<img src="'+'../../c/'+blockname+"/"+hex+'.png'+'" alt="'+charArray[c]+'">'
                    out += ' U+'+hex + ' '+charData[charArray[c]]
                    out += '</a>\n'
                    }
				}
			else {
				out += '<img src="'+'../../c/'+blockname+"/large/"+hex+'.png'+'" alt="'+charArray[c]+'" style="height:2rem;">'
				out += ' U+'+hex+' '+charData[charArray[c]]+'\n'
				}
			}
		else {
			//out += `<a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/Basic_Latin/005F.png" alt="U+${ hex }"> U+${ hex } No data for this character</a>`
			out += `<div class="panelCharacter"><a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }"> U+${ hex } No data for this character</a></div>`
			}
		out += '</div>'
		}
	out += '</div>'

    out += `</td>`
    out += `<tr>`
    
    return out
	}






function makeArticleDetails (chars) {
    if (traceSet.has('makeDetails')) console.log('makeDetails(', 'chars:'+chars, ')\n\tAdd  details for character(s) below a block.\n\tGLOBALS notesLangtag:'+window.notesLangtag, 'blockDirectoryName:'+window.blockDirectoryName)
    
    // global charDetails spreadsheetRows cols
    // local out charArray i lang dir

    if (typeof charDetails === 'undefined') return

    var out = ''
    var charArray = [... chars]
    var lang = window.notesLangtag
    var dir = window.blockDirectoryName

    for (var i=0;i<charArray.length;i++) {
        if (spreadsheetRows[charArray[i]]) {
            // make title to side
            out += `<tr><th class="cdChar" onclick="this.closest('article').remove()"><span class="ex" lang="${ lang }">${ charArray[i] }</span><br><span class="cdCharClose">x</span></th>`
            
            // add the full details
            out += '<td class="cdData">'
            out += printDetails(charArray[i])
            out += '</td></tr>'
            }
        }

    return out
    }




function closeArticle (node) {
    node.parentNode.remove()
    }

function copyExamplePanelText (node, type) {
console.log(node)
    var text = node.closest('.glossContainer').querySelectorAll(type)
    var out = ''
    for (var i=0;i<text.length;i++) out += text[i].textContent
    if (type === '.IPAGloss') out = out.replace(/�/g,'').replace(/�/g,'').replace(/�/g,'')
    navigator.clipboard.writeText(out)
    
    document.getElementById('copyNotice').style.display = 'block';
      setTimeout(() => {
        document.getElementById('copyNotice').style.display = 'none'
      }, '500')
	}




function closeArticle (node) {
    node.parentNode.remove()
    }



