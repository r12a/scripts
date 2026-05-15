// provide values for trace variables in the debug.js file
if (typeof traceSet === 'undefined') traceSet = new Set([])


// GLOBALS   -  see also the manifest file under /shared
index = {}  // holds information needed to build index; used by makeIndexObject, makeMarkupForSection
window.spreadsheetRows = {}  // holds spreadsheet info for each character in an object, with the character as the key
window.autoTranslitArray = {} // used to store transliterations; used for glossed text, eg. in panel
window.marks = new Set()  // stores combining marks found in the spreadsheet


//window.addEventListener('DOMContentLoaded', includeHTML)
//window.addEventListener('onload', createtoc(3))


// set accessibility defaults
access = {
    fontsize: 15,
    contrast: 'low'
    }





function addPageFeatures () {     
    console.log(`addPageFeatures() 
    Expand and add markup.
    Called by ${ getCallerName() }.`)
    
    
    // pull in any shared HTML code
    //includeHTML()

    
    // create the spreadsheetRows global variable - this holds spreadsheet info for each 
    // character in an object, with the character as the key
    if (typeof window.spreadsheet !== 'undefined') {
        const lines = window.spreadsheet.split('\n')

        for (let line of lines) {
            if (! line.trim()) continue

            const items = line.split('\t')
            const key = items[0]

            if (! key) continue

            window.spreadsheetRows[key] = ['0']

            for (let i = 1; i < items.length; i++)
                window.spreadsheetRows[key].push(items[i])
            }

        // Explicitly free memory used by the large TSV string
        window.spreadsheet = ''
        }
    else
        alert('Spreadsheet undefined. [addPageFeatures]')


    makeCharDataObj() // DO WE NEED THIS? WHY NOT JUST LOOK AT SPREADSHEET ROWS?
    setMarks()


    
    // add invisible headings to basicV and consonantSummary
    const vsection = document.getElementById("basicV")
    if (vsection) {
        let heading = document.createElement('h3')
        heading.textContent = 'Vowel summary table'
        vsection.prepend(heading)
        }

    const csection = document.getElementById("consonantSummary")
    if (csection) {
        let heading = document.createElement('h3')
        heading.textContent = 'Consonant summary table'
        csection.prepend(heading)
        }


    // create the right column aside for script origins
     addUsageHistory()


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


	// create links at page top/bottom
    doHeadersFooters(window.orthogFilePath)
    
    // Add the introduction for the Index
    makeIndexIntro(document.getElementById('index_intro')) 

	// Create side panel
	const features = document.getElementById('features')
	if (features) features.innerHTML = makeSidePanel()
    
    copyIntroInfo()  // Copy from brief summary to top of various sections
    addResources()   // Make the Online Resources section

	// more page setup
	createtoc(3)
	removeEditorNotes()
	addDefinitions()
	setContentPrompts()
	setFindIPA()
	setTranslitToggle()

	// create TOC panel
	const body = document.body
	const tocPanel = document.createElement('div')
	tocPanel.id = 'tocPanel'
	tocPanel.style.display = 'none'
	body.appendChild(tocPanel)
	createtocPanel(4)

    // expand references
	if (typeof reflist !== 'undefined') createReferences(window.langTag)



    // create translit data in autoTranslitArray, used to create glossed text
    makeAutoTranslitArray(window.langTag)  // defined in transliterate.js
    
    expandCharacterBoxes(langTag)  // Create the lists of characterBoxes
    
    makeBreakdownTables() // Converts simple markup for breakdown tables full tables

    expandChMarkup() // Expand spans with ch classes to full character markup

    expandEgMarkup(langTag)  // Convert all .eg items to full markup. (egcode.js)

    // autogenerate the index
    makeIndexObject()
    makeMarkupForSection('index_letters')
    makeMarkupForSection('index_cchars')
    makeMarkupForSection('index_numbers')
    makeMarkupForSection('index_punctuation')
    makeMarkupForSection('index_symbols')
    makeMarkupForSection('index_other')
    window.index = {}
    
    pointToSummaryPages()  // Make links for bidi/linebreak (using index)
    

    addCharacterLists()  // Make character lists in right column

    
    // create dialog popup window (displays details after clicking on code point names)
    makePopupDialogs ()
    
    
    // set event trigger on all .ipa elements - opens description box on click
    var ipaNodes = document.querySelectorAll(".ipa, .listIPA, .allophone, .phoneme")
    for (i=0;i<ipaNodes.length;i++) ipaNodes[i].onclick = showIPAPhoneEvt

    // set event listener on TOC links to close the TOC
    var tocNodes = document.querySelectorAll(".toc1, .toc2, .toc3")
    for (i=0;i<tocNodes.length;i++) tocNodes[i].onclick = closeTOC
    
    // set up show composition to show composition in panel
    summaryNodes = document.querySelectorAll('.figureSub summary')
    for (i=0;i<summaryNodes.length;i++) summaryNodes[i].onclick = function(){ this.parentNode.querySelector('bdi').click() }
    
    // hide all sections to be added
    summaryNodes = document.querySelectorAll('.sectionAside details')
    for (i=0;i<summaryNodes.length;i++) summaryNodes[i].open = false
    
    // lighten colour of any tone letters in examples
    wrapToneLettersInBdi()
    
    

    // set the popovers for references
    document.querySelectorAll("a.fn").forEach(a => {
    a.addEventListener("click", function (ev) {
        ev.preventDefault()
        showFnPopover(this)
        })
    })

    // Clicking the popover closes it
    document.getElementById("fn-pop").addEventListener("click", () => {
        document.getElementById("fn-pop").hidden = true
        })

    // Clicking outside closes it
    document.addEventListener("click", ev => {
        const pop = document.getElementById("fn-pop")
        if (!pop.hidden && !pop.contains(ev.target) && !ev.target.matches("a.fn")) {
            pop.hidden = true
            }
        })
    // end of set popovers
    
    
    
    // empty large global variables
    window.fontDB = []
    defList = []
    fontInfo = {}
  
    checkParameters()
    }




function makePopupDialogs () {
	// create dialog popup windows (#dialogBox + #ipaDialogBox)

	const header = document.querySelector('header')
	if (!header) return

	const dialogBox = document.createElement('dialog')
	dialogBox.id = 'dialogBox'
	header.appendChild(dialogBox)

	const ipaDialogBox = document.createElement('dialog')
	ipaDialogBox.id = 'ipaDialogBox'
	header.appendChild(ipaDialogBox)

	document.body.addEventListener('keydown', closeDialogEsc)
}





function showFnPopover(a) {
    const pop = document.getElementById("fn-pop")

    const href = a.href
    const title = a.title || href

    pop.innerHTML = `
        <a href="${href}" target="_blank" rel="noopener">
            ${title}
        </a>
    `

    const rect = a.getBoundingClientRect()
    const scrollX = window.scrollX
    const scrollY = window.scrollY

    pop.style.left = (rect.left + scrollX) + "px"
    pop.style.top  = (rect.bottom + 6 + scrollY) + "px"

    pop.hidden = false
    }
    




function addUsageHistory () {
    out = ''
        
   if (typeof summaryExists !== 'undefined') {
        // Make the origin side panel
        out += `<p style="margin-block-end:1.5em;">Origins of the ${ scriptInfo.script } script, ${ scriptInfo.dates }.</p>`
        lineageArray = scriptInfo.lineage.trim().split('>')
        lineageText = ''
        if (lineageArray.length > 0) {
            for (i=0;i<lineageArray.length;i++) {
                lineageText += `<p style="`
                if (i == lineageArray.length-1 && lineageArray.length > 1) lineageText += `font-weight:bold; `
                if (i>0) lineageText += `margin-inline-start:${ i }em;">\u2514 `
                else lineageText += `">`
                lineageText += lineageArray[i]
                lineageText += `</p>`
                }
            out += lineageText
            }
        siblingsArray = scriptInfo.siblings.trim().split(',')
        siblingsText = ''
        if (siblingsArray.length > 0 && siblingsArray[0] !== '') {
            for (s=0;s<siblingsArray.length;s++) {
                siblingsText += `<p style="margin-inline-start:${ i }em;">+ `
                siblingsText += siblingsArray[s]
                siblingsText += `</p>`
                }
            out += siblingsText
            }

        
        
        document.getElementById('ancestry').innerHTML = out
        }
    }





function expandChMarkup () {
    // console.log('expandChMarkup() Convert char markup to .codepoint spans (has to be done before the indexing)')
    // Purpose: convert .hex/.hx (hex codepoint lists) and .ch (literal characters)
    // into <span class="codepoint"> markup containing glyph(s) and Unicode name(s).
    // This must run before any indexing that depends on .codepoint spans.

    
    // High-level notes:
    // - .hx/.hex elements contain one or more hex codepoints separated by spaces.
    // - .ch elements contain one or more literal characters.
    // - Supported modifier classes (applied to the source element) control output:
    //     split     -> insert " + " between successive items and break BDI wrappers
    //     svg       -> render item as an SVG image sourced from the corpus
    //     img       -> render item as a PNG image (large folder)
    //     init/medi/fina -> add ZERO WIDTH JOINER (ZWJ) to form positional cursive shapes
    //     skip      -> insert ZWJ after a diacritic (used to visually separate mark + base)
    //     circle    -> prepend dotted circle (U+25CC) before combining marks
    //     coda      -> append dotted circle after the item (used for closed syllables)
    //     noname    -> suppress rendering of the Unicode name link
    //     noindex   -> mark output with noindex class to exclude from index
    //     uncommon  -> mark <bdi> with class="uncommon" for styling
    //
    // - The function consults `spreadsheetRows` and `cols` (global data) to look up
    //   character metadata such as Unicode names. If a character is not found in the
    //   database, an error marker is inserted.
    //
    // - Generated markup:
    //   <span class="codepoint[ noindex]">
    //     <bdi [class="uncommon"] lang="{lang}">[glyphs and markers]</bdi>
    //     <a href="javascript:void(0)"><span class="uname">Unicode Name(s)</span></a>
    //   </span>
    //
    // Globals used by this function:
    // - spreadsheetRows: mapping from character to row data (contains ucsName)
    // - cols: mapping of column names to numeric indices (cols['ucsName'])
    // - getScriptGroup(dec, boolean): utility that returns script block name for images
    // - window.langTag: default language tag for generated <bdi>
    // - window.hideBlockName: optional pattern to remove block names from name output
    // - blockDirection: used to optionally set dir="rtl" on output (if needed)



    // Helper: read the presence of modifier classes on an element and return
    // a compact flags object used by the renderer.
    function readFlags(el) {
        return {
            split: el.classList.contains('split'),
            svg: el.classList.contains('svg'),
            img: el.classList.contains('img'),
            initial: el.classList.contains('init'),
            medial: el.classList.contains('medi'),
            final: el.classList.contains('fina'),
            skipDiacritic: el.classList.contains('skip'),
            circle: el.classList.contains('circle'),
            coda: el.classList.contains('coda'),
            noname: el.classList.contains('noname'),
            noindex: el.classList.contains('noindex'),
            uncommon: el.classList.contains('uncommon')
        }
    }

    // Helper: language for output <bdi> (element.lang or global default)
    function getLanguage(el) {
        return (el.lang && el.lang !== '') ? el.lang : window.langTag
    }

    // Helper: return HTML for a single codepoint depending on flags (svg/img/text)
    function glyphHtmlForCodepoint(dec, hex, ch, flags) {
        if (flags.svg) {
            const block = getScriptGroup(dec, false)
            return `<img src="../../c/${ block }/${ hex }.svg" alt="${ ch }" style="height:2rem;">`
        }
        if (flags.img) {
            const block = getScriptGroup(dec, false)
            return `<img src="../../c/${ block }/large/${ hex }.png" alt="${ ch }" style="height:2rem;">`
        }
        return `&#x${ hex };`
    }

    // Helper: escape optional class attributes for <bdi>
    function bdiUncommonAttr(flags) {
        return flags.uncommon ? ' class="uncommon"' : ''
    }

    // Shared renderer for both .hx/.hex and .ch elements.
    // tokens: array of items where each token is {dec, hex, ch} (dec may be null for missing/invalid)
    function renderTokens(tokens, flags, language) {
        let unicodeNames = ''
        let unicodeChars = ''
        // positional forms: add ZWJ before or after as required
        if (flags.final || flags.medial) unicodeChars += '\u200D' // leading ZWJ for medial/final
        if (flags.circle) unicodeChars = '\u25CC' + unicodeChars // dotted circle prefix

        tokens.forEach((token, idx) => {
            const { dec, hex, ch, missing } = token

            // If missing in DB or token invalid, append visible marker and continue.
            if (missing) {
                unicodeNames += `<span style="color:red">${ ch } NOT IN DB! (expandChMarkup)</span>`
                unicodeChars += ch
                console.error(`%cNot in DB: ${ ch }`, 'color:red;font-weight:bold;')
                return
                }

            // Build name string (skip dotted circle sentinel U+25CC for name output)
            if (hex !== '25CC') {
                if (unicodeNames) unicodeNames += ' + '
                unicodeNames += spreadsheetRows[ch][cols['ucsName']].replace(/:/,'')
                }

            // If split requested, close previous <bdi>, insert " + ", and open a new one.
            if (flags.split && idx > 0) unicodeChars += `</bdi> + <bdi${ bdiUncommonAttr(flags) } lang="${ language }">`

            // Append glyph HTML or literal depending on flags.
            unicodeChars += glyphHtmlForCodepoint(dec, hex, ch, flags)

            // If skipDiacritic (skip) is set and this is the first token, insert ZWJ after it.
            if (flags.skipDiacritic && idx === 0) unicodeChars += '\u200D'
            })

        // trailing ZWJ/space for initial/medial
        if (flags.initial || flags.medial) unicodeChars += '\u200D '

        // coda appends dotted circle; represent as visible character when requested
        const codaStr = flags.coda ? '◌' : ''

        // Final composed markup for this element
        const noindexClass = flags.noindex ? ' noindex' : ''
        const bdiAttr = `${ bdiUncommonAttr(flags) } lang="${ language }"`
        let out = `<span class="codepoint${ noindexClass }" translate="no"><bdi ${ bdiAttr }`
        if (flags.img || flags.svg) out += ' style="margin:0;"'
        out += `>${ unicodeChars }${ codaStr }</bdi>`
        if (!flags.noname) out += `<a href="javascript:void(0)"><span class="uname">${ unicodeNames }</span></a>`
        out += `</span>`

        // Optionally hide block names if a global pattern is set
        if (window.hideBlockName) {
            let re = new RegExp(window.hideBlockName, 'g')
            out = out.replace(re,'')
            }
        return out
        }

    // Small utility: normalise hex string to 4+ uppercase digits
    function normaliseHex(dec) {
        let hex = dec.toString(16).toUpperCase()
        while (hex.length < 4) hex = '0' + hex
        return hex
        }

    // Process .hex/.hx elements (space-separated hex code points)
    const hexElements = document.querySelectorAll('.hex, .hx')
    hexElements.forEach(el => {
        const flags = readFlags(el)
        const language = getLanguage(el)

        // Tokenise on whitespace; ignore empty tokens
        const rawTokens = el.textContent.trim().split(/\s+/).filter(t => t !== '')
        if (rawTokens.length === 0) return

        // Build token objects: parse hex -> dec -> char, check DB presence
        const tokens = rawTokens.map(tok => {
            const dec = parseInt(tok, 16)
            if (Number.isNaN(dec)) {
                console.error('%c' + 'The link text "' + el.textContent + '" is not a number!.', 'color:red;font-weight:bold;')
                return { dec: null, hex: tok, ch: tok, missing: true }
            }
            const ch = String.fromCodePoint(dec)
            // If character not in spreadsheetRows DB, flag as missing so renderer can annotate
            if (!spreadsheetRows[ch]) return { dec, hex: tok, ch, missing: true }
            return { dec, hex: tok, ch, missing: false }
            })

        // Render and replace the original element
        el.outerHTML = renderTokens(tokens, flags, language)
        })

    // Process .ch elements (literal characters). Use spread operator to iterate code points.
    const chElements = document.querySelectorAll('.ch')
    chElements.forEach(el => {
        const flags = readFlags(el)
        const language = getLanguage(el)

        // Spread into an array of Unicode code points (handles surrogate pairs correctly).
        const chars = [...el.textContent]
        if (chars.length === 0) return

        // Build token objects from characters
        const tokens = chars.map(ch => {
            const dec = ch.codePointAt(0)
            const hex = normaliseHex(dec)
            if (!spreadsheetRows[ch]) return { dec, hex, ch, missing: true }
            return { dec, hex, ch, missing: false }
            })

        // Render and replace the original element
        el.outerHTML = renderTokens(tokens, flags, language)
        })
    
    setOnclicks()
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


function closeTOC (e) {
    // closes the dialog box and panel when escape is pressed
    document.getElementById('tocPanel').style.display = 'none'
    }





function initialiseIndex () {
    // called from index.html pages to set up page after load    
    // add fragids for legacy URLs to all links to orthography descriptions
    olinks = document.querySelectorAll('#olinks a')
    for (i=0;i<olinks.length;i++) olinks[i].href += window.location.hash

    }


function setMarks () {
	// console.log(`setMarks()
    //Set the global variable marks as a set containing all combining marks in the spreadsheet.`)

	for (const key in spreadsheetRows) {
		const row = spreadsheetRows[key]
		if (!row) continue

		// skip header rows
		if (row[1] === 'key') continue

		const gc = row[cols.class]
		if (typeof gc === 'undefined') {
			console.log('%cError! General category not found in setMarks() for ' + key, 'color:red;font-weight:bold')
			continue
		  }

		// add combining marks: Mn, Mc, Me
		if (gc.startsWith('M')) window.marks.add(key)
        }
    }




function setupBlockLinks () {
	// set target attribute for links that point to characters in the block page
    console.log('setupBlockLinks(',') Set target attribute for links that point to characters in the block page')
    
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
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'C' && spreadsheetRows[allused[k]][cols['status']][0] !== 'r' && spreadsheetRows[allused[k]][cols['status']][0] !== 'x') selection.push(allused[k])
            }
        for (x=0;x<selection.length;x++) selection[x] = selection[x].codePointAt(0).toString(16).toUpperCase()
        for (x=0;x<selection.length;x++) while (selection[x].length < 4) selection[x] = '0'+selection[x]
        //for (x=0;x<selection.length;x++) selection[x] = '\\u'+selection[x]
        for (x=0;x<selection.length;x++) selection[x] = '\\u{'+selection[x]+'}'
        }
    if (howmuch === 'auxother') {
        for (k=0;k<allused.length;k++) {
            if (allused[k] > '¡' && spreadsheetRows[allused[k]][cols['class']][0] === 'C' && (spreadsheetRows[allused[k]][cols['status']][0] === 'r' || spreadsheetRows[allused[k]][cols['status']][0] === 'x')) selection.push(allused[k])
            }
        for (x=0;x<selection.length;x++) selection[x] = selection[x].codePointAt(0).toString(16).toUpperCase()
        for (x=0;x<selection.length;x++) while (selection[x].length < 4) selection[x] = '0'+selection[x]
        //for (x=0;x<selection.length;x++) selection[x] = '\\u'+selection[x]
        for (x=0;x<selection.length;x++) selection[x] = '\\u{'+selection[x]+'}'
        }


     if (howmuch === 'possibles') {
        for (k=0;k<all.length;k++) {
            if (spreadsheetRows[all[k]][cols['status']] === '?') selection.push(all[k])
            }
        }
   
    return selection
    }









function getOrthographyList (type, location, spaced = false) {
	// harvest characters from rendered index lists
    // this is a modified version of runCharCount, adapted to harvest characters after the 
    // page has been rendered, and used by the links in the Basic Summary section on click
    // it requires the presence of #index

	const indexEl = document.getElementById('index')
	if (!indexEl) {
		alert('No #index element (in getOrthographyList).')
		return ''
	    }

	// collect all list items under the requested selector
	const items = indexEl.querySelectorAll(type + ' .listItem')
	if (!items.length) return ''

	// build a string of all characters
	let chars = ''
	for (let i = 0; i < items.length; i++) chars += items[i].textContent

	// dedupe while preserving order
	const unique = [...new Set([...chars])]

	// output formatting
	return spaced
		? unique.join(' ')
		: unique.join('')
}









function pointToSummaryPages () {
	console.log(`>>> pointToSummaryPages()
    Create links for various anchors such as line-breaking properties etc.
    Called by ${ getCallerName() }.`)

	const charList =
		getOrthographyList('.characterBox', 'index', true) +
		getOrthographyList('.auxiliaryBox', 'index', true)

	const encoded = encodeURI(charList)

	const showLinebreaks = document.getElementById('showLinebreaks')
	if (showLinebreaks)
		showLinebreaks.href = '../apps/listlinebreak/index.html?chars=' + encoded

	const showBidiClass = document.getElementById('showBidiClass')
	if (showBidiClass)
		showBidiClass.href = '../apps/listbidi/index.html?chars=' + encoded
    }














function doHeadersFooters (orthogNotesFile) {
    // console.log('doHeadersFooters(',orthogNotesFile,') Add links to top and bottom of document')
    // orthogNotesFile is set in xx-globals.js and looks like "arab/arb"

	const topEl = document.getElementById('versionTop')
	const bottomEl = document.getElementById('version')

	if (! topEl) {
		alert('Element #versionTop not found in doHeadersFooters')
		return
	   }

	if (! bottomEl) {
		alert('Element #version not found in doHeadersFooters')
		return
	   }

	// Validate orthogNotesFile format
	if (! orthogNotesFile.includes('/')) {
		alert('Global variable orthogNotesFile must contain two parts (in doHeadersFooters)')
		return
	   }

	// Extract directory + filename once
	const [directory, filename] = orthogNotesFile.split('/')

	// Build top‑of‑page links
	let out = `
&bull; recent changes 
<a target="_blank"
	href="https://github.com/r12a/scripts/commits/gh-pages"
	title="Show commits for the whole scripts repository.">scripts</a>/<a target="_blank"
	href="https://github.com/r12a/scripts/commits/gh-pages/${directory}"
	title="Show commits for scripts/${directory}.">${directory}</a>/<a target="_blank"
	href="https://github.com/r12a/scripts/commits/gh-pages/${directory}/${filename}.html"
	title="Show commits for scripts/${directory}/${filename}.">${filename}</a>

&bull; leave a 
<a target="_blank"
	href="https://github.com/r12a/scripts/issues/new?title=[${orthogNotesFile}]%20%20BRIEF_TITLE_GOES_HERE&body=Source%3A%20https%3A%2F%2Fr12a.github.io%2Fscripts%2F${orthogNotesFile}.html%0A%0A"
	title="Leave a comment.">comment</a>
`.trim()

	topEl.innerHTML = out

	// Build footer links
	out = `
See <a target="_blank"
	href="https://github.com/r12a/scripts/commits/gh-pages/${directory}">recent changes</a>.
&nbsp;&bull;&nbsp;
Make a <a target="_blank"
	href="https://github.com/r12a/scripts/issues/new?title=%5B${orthogNotesFile}%5D%20TITLE_GOES_HERE&body=Comment%20on%20http%3A%2F%2Fr12a.github.io%2Fscripts%2F${directory}%2F%0A%0A">comment</a>.
&nbsp;&bull;&nbsp;
Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC‑By</a>
© <a href="mailto:r12a@w3.org">r12a</a>.
`.trim()

	bottomEl.innerHTML = out
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





function makeSidePanel () {
    // console.log('>> makeSidePanel()')
    
	if (typeof langs === 'undefined') return
    
    
    window.orthogSummaryTableName, window.scriptSummaryTableName
    
    // for backwards compat
    if (typeof window.orthogSummaryTableName === 'undefined') id = window.scriptSummaryTableName
    else {
        oid = window.orthogSummaryTableName
        sid = window.scriptSummaryTableName
        }
    
	//if (typeof langs[id] === 'undefined') { console.log('Charuse data not found. ID sent to makeSidePanel was ',id); return }
    
    var letters, marks, punctuation, symbols, others, numbers, aux, total
    var out, records, fields, values, scriptType
    
    if (typeof orthogSummaryTableName === 'undefined') { // for backward compat
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
/*        out += '<tr><th>Script code</th><td>'+langs[id].script+'</td></tr>'
*/        out += '<tr><th>Language code</th><td>'+id+'</td></tr>'
/*        out += '<tr><th>Script type</th><td class="tableHighlight">'+langs[id].type+'</td></tr>'
*/        out += '<tr><th>Total characters</th><td class="tableHighlight" style="font-size: 150%;">'+parseInt(total).toLocaleString()
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

        out += '<tr><th>Script code</th><td>'+langs[id].script+'</td></tr>'
        out += '<tr><th>Script type</th><td class="tableHighlight">'+langs[id].type+'</td></tr>'

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
        }





<!-- ----------------------------------------------------------------------------- --> 
<!-- NEW STUFF -->

    
        
    else {  // this is a script-based summary
    
        out = ''
        // console.log("LANGS",langs.langTag)
        // Create the script name    
        if (typeof summaryExists !== 'undefined') out += `<p style="margin-inline:2rem; text-align: start; margin-block-end:2rem;"><span class="eg inline" lang="${ langTag }">${ langs[oid].local }</span></p>`

        out += '<table>'
        out += '<tbody id="featureTableBody">'
        out += `<tr><th>Script code</th><td>${ sid }</td></tr>`
        out += `<tr><th>Language code</th><td>${ oid }</td></tr>`

        if (typeof summaryExists !== 'undefined') scriptType = scriptInfo[sid].type
        else scriptType = langs[sid].type
        scriptType = scriptType.replace(/alpha/,'alphabet')
        scriptType = scriptType.replace(/abug/,'abugida')
        scriptType = scriptType.replace(/abjad/,'abjad')
        scriptType = scriptType.replace(/syll/,'syllabary')
        scriptType = scriptType.replace(/feat/,'featural syllabary')
        
        out += '<tr><th>Script type</th><td class="tableHighlight">'+scriptType+'</td></tr>'
	
        out += '<tr><th>Origin</th><td>'+scriptInfo[sid].region+'</td></tr>'
        
        
        let raw = parseInt(langs[oid].speakers.replace(/~/g,''))
        let speakerCount = Number.isNaN(raw) ? '?' : raw.toLocaleString()
        out += `<tr><th>Native speakers</th><td>${ speakerCount }</td></tr>`


        
        // Character counts
        out += '<tr><th colspan="2" style="padding-block-start:.8rem;">Character counts<br>( for orthography, excluding ASCII )</td></tr>'


        // get character counts in a way that works around surrogates
        letters = marks = punctuation = symbols = others = numbers = aux = 0
        langs[oid].letter ? letters = [...langs[oid].letter].length : 0
        langs[oid].letteraux ? letters += [...langs[oid].letteraux].length : 0
        langs[oid].mark ? marks = [...langs[oid].mark].length : 0
        langs[oid].markaux ? marks += [...langs[oid].markaux].length : 0
        langs[oid].punctuation ? punctuation = [...langs[oid].punctuation].length : 0
        langs[oid].punctuationaux ? punctuation += [...langs[oid].punctuationaux].length : 0
        langs[oid].symbol ? symbols = [...langs[oid].symbol].length : 0
        langs[oid].symbolaux ? symbols += [...langs[oid].symbolaux].length : 0
        //langs[oid].other ? others = [...langs[oid].other].length : 0
        langs[oid].other ? others = langs[oid].other.length : 0
        langs[oid].number ? numbers = [...langs[oid].number].length : 0
        langs[oid].numberaux ? numbers += [...langs[oid].numberaux].length : 0
        langs[oid].aux ? aux = [...langs[oid].aux].length : 0

        total = letters + marks + punctuation + symbols + others + numbers 



        out += `<tr><th>Total characters</th><td class="tableHighlight" style="font-size: 150%;">${ total }</td></tr>`
        
        out += `<tr><th>Letters</th><td class="tableHighlight">${ letters }</td></tr>`

        if (marks > 0) out += `<tr><th>Combining marks</th><td class="tableHighlight">${ marks }</td></tr>`

        if (symbols > 0) out += `<tr><th>Symbols</th><td class="tableHighlight">${ symbols }</td></tr>`

        if (punctuation > 0) out += `<tr><th>Punctuation</th><td class="tableHighlight">${ punctuation }</td></tr>`

        if (numbers > 0) out += `<tr><th>Numbers</th><td class="tableHighlight">${ numbers }</td></tr>`

        if (others > 0) out += `<tr><th>Other</th><td class="tableHighlight">${ others }</td></tr>`

        out += '<tr><th>Possible other</th><td>'+aux+'</td></tr>'

        out += `<tr><th>Unicode blocks</th><td>${ scriptInfo[sid].blocks }</td></tr>`







        // Composition
        out += '<tr><th colspan="2" style="padding-block-start:.8rem;">Composition</td></tr>'



        if (scriptInfo[sid].voweltype) {
            out += '<tr><th>Post-consonant<br>vowels</th><td class="tableHighlight">'
            
            if (scriptInfo[sid].voweltype.inherent !== 0) {
                if (scriptInfo[sid].voweltype.inherent === 1) out += `1 inherent vowel<br>`
                else out += `${ scriptInfo[sid].voweltype.inherent } inherent vowels<br>`
                }
            
            if (scriptInfo[sid].voweltype.letters) out += `letters<br>`
            
            if (scriptInfo[sid].voweltype.marks) out += `marks<br>`
            
            if (scriptInfo[sid].voweltype.hidden) out += `hides vowels<br>`
            
            if (scriptInfo[sid].voweltype.vocalics) out += `vocalics<br>`
            
            if (scriptInfo[sid].voweltype.vcomposite) out += `composite vowels<br>`
             
            if (scriptInfo[sid].voweltype.prebase) out += `pre-base marks<br>`
            
            if (scriptInfo[sid].voweltype.visorder) out += `pre-base letters<br>`
            
            if (scriptInfo[sid].voweltype.circum) out += `circumgraphs<br>`

            out += '</td></tr>'
            }


        if (scriptInfo[sid].voweltype) {
            out += '<tr><th>Standalone<br>vowels</th><td class="tableHighlight">'
            
            if (scriptInfo[sid].voweltype.ivowels) out += `letters<br>`
            
            if (scriptInfo[sid].voweltype.vbase) out += `carrier ${ scriptInfo[sid].voweltype.vbase }<br>`

            out += '</td></tr>'
            }


        
        out += '<tr><th>Combining  marks</th><td'
        if (scriptInfo[sid].mcchars) out += ' class="tableHighlight"'
        out += '>'
        if (scriptInfo[sid].mcchars === true) out += 'yes'
        else if (scriptInfo[sid].mcchars === 'm') out += '>1 per base'
        else out += 'no'
        //out += scriptInfo[sid].mcchars ? 'yes' : 'no'
        out += '</td></tr>'

        out += '<tr><th>Clusters marked</th><td'
        if (scriptInfo[sid].conjuncts) out += ' class="tableHighlight"'
        out += '>'
        out += scriptInfo[sid].conjuncts ? 'yes' : 'no'
        out += '</td></tr>'


        if (scriptInfo[sid].medials !== '') {
            out += '<tr><th>Dedicated medials</th><td class="tableHighlight">'
            
            if (scriptInfo[sid].medials.includes('cm')) out += `marks<br>`  
            
            if (scriptInfo[sid].medials.includes('let')) out += `letters<br>`
            
            if (scriptInfo[sid].medials.includes('sj')) out += `uses subjoined chars<br>`

            out += '</td></tr>'
            }

        if (scriptInfo[sid].finals !== '') {
            out += '<tr><th>Dedicated finals</th><td class="tableHighlight">'
            
            if (scriptInfo[sid].finals.includes('cm')) out += `marks<br>`  
            
            if (scriptInfo[sid].finals.includes('let')) out += `letters<br>`
            
            if (scriptInfo[sid].finals.includes('vk')) out += `vowel killer<br>`
            
            if (scriptInfo[sid].finals.includes('ss')) out += `superscripts<br>`

            out += '</td></tr>'
            }

        if (scriptInfo[sid].conjuncts !== false) {
            out += '<tr><th>Consonant clusters</th><td class="tableHighlight">'
            
            if (scriptInfo[sid].clusters.ligation) out += `ligated glyphs<br>`
            
            if (scriptInfo[sid].clusters.stacks) out += `stacks<br>`
            
            if (scriptInfo[sid].clusters.touch) out += `touching glyphs<br>`
            
            if (scriptInfo[sid].clusters.conjoined) out += `conjoined glyphs<br>`
            
            if (scriptInfo[sid].clusters.subjoinedcp) out += `subjoined cps<br>`
            
            if (scriptInfo[sid].clusters.visviram) out += `visual killer<br>`
             
            if (scriptInfo[sid].clusters.diacritic) out += `diacritics<br>`
            
            if (scriptInfo[sid].clusters.killer !== '') out += `killer type: ${ scriptInfo[sid].clusters.killer }<br>`

            out += '</td></tr>'
            }



        out += '<tr><th>Other ligatures</th><td'
        if (scriptInfo[sid].ligs) out += ' class="tableHighlight"'
        out += '>'
        out += scriptInfo[sid].ligs ? 'yes' : 'no'
        out += '</td></tr>'





        // Typography
        out += '<tr><th colspan="2" style="padding-block-start:.8rem;">Layout</td></tr>'

        out += '<tr><th>Text direction</th><td'
        if (scriptInfo[sid].direction !== "ltr") out += ' class="tableHighlight"'
        out += `>${ scriptInfo[sid].direction }`
        if (scriptInfo[sid].rtlnumbers) out += ` \u2014 including <br> numbers`
        out += `</td></tr>`


        out += '<tr><th>Case distinction</th><td'
        if (scriptInfo[sid].case) out += ' class="tableHighlight"'
        out += '>'
        out += scriptInfo[sid].case ? 'yes' : 'no'
        out += '</td></tr>'
        
        out += '<tr><th>Cursive script</th><td'
        if (scriptInfo[sid].cursive) out += ' class="tableHighlight"'
        out += '>'
        out += scriptInfo[sid].cursive ? 'yes' : 'no'
        out += '</td></tr>'


        if (scriptInfo[sid].wordsep !== '') {
            out += '<tr><th>Word separator</th><td'
            
            if (scriptInfo[sid].wordsep !== 'space') out += ` class="tableHighlight"`
            out += '>'
            
            if (scriptInfo[sid].wordsep.includes('space')) out += `space<br>`  
            
            if (scriptInfo[sid].wordsep.includes('ws')) out += `word space<br>`
            
            if (scriptInfo[sid].wordsep.includes('no')) out += `no separation<br>`
            
            if (scriptInfo[sid].wordsep.includes('syllables')) out += `space separates syllables<br>`
            
            if (scriptInfo[sid].wordsep.includes('sb')) out += `glyph separates syllables<br>`

            out += '</td></tr>'
            }

        if (scriptInfo[sid].linebreak !== '') {
            out += '<tr><th>Wraps at</th><td'
            
            if (scriptInfo[sid].linebreak !== 'word') out += ` class="tableHighlight"`
            out += '>'
            
            if (scriptInfo[sid].linebreak.includes('word')) out += `word<br>`  
            
            if (scriptInfo[sid].linebreak.includes('syllable')) out += `syllable<br>`
            
            if (scriptInfo[sid].linebreak.includes('char')) out += `after any character<br>`

            out += '</td></tr>'
            }


        if (scriptInfo[sid].hyphen !== '') {
            out += `<tr><th>Hyphenation</th><td class="tableHighlight">${ scriptInfo[sid].hyphen }</td></tr>`
            }

        if (scriptInfo[sid].wordspan) {
            out += `<tr><th>Conjuncts</th><td class="tableHighlight">span word boundaries</td></tr>`
            }


        out += '<tr><th>G Clusters OK?</th><td'
        if (scriptInfo[sid].gc === false) out += ' class="tableHighlight"'
        out += '>'
        out += scriptInfo[sid].gc ? 'yes' : 'no'
        out += '</td></tr>'


        if (scriptInfo[sid].justification !== '') {
            out += '<tr><th>Justification</th><td'
            
            if (scriptInfo[sid].justification !== 'sp') out += ` class="tableHighlight"`
            out += '>'
            
            if (scriptInfo[sid].justification.includes('sp')) out += `spaces<br>`  
            
            if (scriptInfo[sid].justification.includes('ic')) out += `inter-character<br>`
            
            if (scriptInfo[sid].justification.includes('ig')) out += `between graphemes<br>`
            
            if (scriptInfo[sid].justification.includes('str')) out += `baseline stretching<br>`  
            
            if (scriptInfo[sid].justification.includes('sw')) out += `swashes<br>`
            
            if (scriptInfo[sid].justification.includes('pad')) out += `line-end padding<br>`
            
            if (scriptInfo[sid].justification.includes('none')) out += `none<br>`
            
            if (scriptInfo[sid].justification === '?') out += `?`

            out += '</td></tr>'
            }

        if (scriptInfo[sid].baseline !== '') {
            out += '<tr><th>Baseline</th><td'
            
            if (scriptInfo[sid].baseline !== 'romn') out += ` class="tableHighlight"`
            out += '>'

            out += `${ scriptInfo[sid].baseline }</td></tr>`
           }
	


        out += '</tbody>'
        out += '</table>'

        out += '<p class="ctlink"><a href="../script-features/index.html" target="_blank">See the comparison table</a></p>'
        out += '<p class="ctlink"><a href="../script-features/index.html#key" target="_blank">See the key</a></p>'

        }
	
	//langs = {}
	
	return out
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







function expandCharacterBoxes (lang) {
    console.log(`>>> expandCharacterBoxes(${ lang })
    Create the lists of characters in yellow, etc. boxes.
    Called by ${ getCallerName() }.`)

	const tableNodeList = document.querySelectorAll('.auto')

	for (let tableNode of tableNodeList)
		buildCharacterBox(tableNode)
    
    setOnclicks()
    }






function buildCharacterBox (node) {
    console.log(`>>> buildCharacterBox( ${ node })\n\t
    Build character boxes and replace source node content with generated HTML.
    Called by ${ getCallerName() }.`)
    // optional images/fonts, IPA/latin/meaning display, status, links, and codepoints.

  // Quick guards
  if (!node) return

  // Helper: boolean class/dataset checks
  const hasClass = (el, name) => el.classList.contains(name)
  const ds = node.dataset || {}

  // Context detection: where the rendered list appears (affects order)
  // if inside a soundSummary section, the IPA goes above
  // if data-ipaPosn=top, IPA goes above
    if (node.hasAttribute('data-ipaAbove'))  context = 'soundSummary'
    else if (node.closest('.soundSummary')) context = 'soundSummary'
    else if (node.closest('.sectionCharacterList')) context = 'sectionCharacterList'
    else context = null

  // Index line detection
  const indexline = hasClass(node, 'indexline')

  // Split the source characters by comma
  // Keep original empty items where present; trim not used to preserve spaces
  const chars = node.textContent.split(',')

  // Build ignore set from data-ignore (comma separated)
  const ignoreset = new Set((ds.ignore || '').split(',').filter(Boolean))

  // Optional font style
  const fontAttr = ds.font ? ` style="font-family: ${ ds.font }"` : ''

  // Determine which info columns to show (default behaviour preserved)
  let info = ''
  if (typeof ds.ipa === 'undefined' && typeof ds.latin === 'undefined' && typeof ds.cols === 'undefined') {
    info = 'ipa'
  }
  if (typeof ds.cols !== 'undefined') info += ds.cols

  // Flags from classes / dataset
  const noexpansion = hasClass(node, 'noexpansion')
  const showLast = ds.select === 'last'
  const showFirst = !showLast && !!ds.select
  const ipaplusClass = hasClass(node, 'ipaplus')
  const showUnique = hasClass(node, 'showUnique')

  // Parse datasets into arrays where applicable (preserve index alignment)
  const notes = (ds.notes ? ds.notes.split(',') : [])
  let extra = (ds.extra ? ds.extra.split(',') : [])
  const extraLang = extra.length ? extra[extra.length - 1] : ''
  if (extra.length) extra = extra.slice(0, -1)
  const ipa = (ds.ipa ? ds.ipa.split(',') : [])
  const latin = (ds.latin ? ds.latin.split(',') : [])
  const links = (ds.links ? ds.links.split(',') : [])
  const highlights = (ds.highlight ? ds.highlight.split(',') : [])
  const dirn = ds.dir ? ` dir="${ ds.dir }"` : ''

  // Helper: safe lookup of spreadsheetRows and cols with graceful fallback
  const sheet = window.spreadsheetRows || {}
  const cols = window.cols || {}

  // Precompute whether status column should be shown (scan characters)
  let showStatus = false
  for (let c = 0; c < chars.length; c++) {
    const ch = chars[c]
    if (sheet[ch] && cols.status !== undefined && sheet[ch][cols.status]) {
        if (String(sheet[ch][cols.status]).trim() !== '') { showStatus = true; break }
        }
    }

  // Helper: return status HTML (delegates to global getStatus if present)
  const getStatusHtml = (ch) => {
    if (sheet[ch] && cols.status !== undefined && sheet[ch][cols.status]) {
        return (typeof window.getStatus === 'function') ? window.getStatus(sheet[ch][cols.status]) : sheet[ch][cols.status]
        }
    return '&nbsp;'
    }

  // Helper: normalise hex string for codepoint filenames (4+ uppercase)
  const normaliseHex = (dec) => {
    let h = dec.toString(16).toUpperCase()
    while (h.length < 4) h = '0' + h
    return h
    }

  // Start composing output
  let out = ''

  out += `<div class="listAllOptions" style="">`
  // Summary / listAll block: count visible items (ignore plain spaces)
  const visibleCount = chars.reduce((acc, x) => acc + (x === ' ' ? 0 : 1), 0)
  out += `<div class="listAll" style="line-height:1;" title="Create a list of the items in the right column."><img src="../../shared/images/listitems.svg" style="height:.7rem; margin-inline-end:.1rem;"><br>`
  out += (visibleCount === 2) ? 'both' : (visibleCount > 2 ? visibleCount : '')
  out += `</div>`


  if (showUnique) {
    out += `<div class="listAll showUnique" style="line-height:1; margin-block:.5rem;" title="Show all unique items in this list."><span style="cursor:pointer; font-size:1.8em; color: chocolate;">\u29C8</span><br>${ countUniqueChars(chars) }</div>`
    }


  // Expansion control if allowed
  if (!noexpansion) {
    out += `<div class="expandAll" title="Expand details for the whole list of characters." style="cursor:pointer;"><img src="../../shared/images/showdetails.svg" style="height:2rem; /*margin-inline-end:1rem;*/"></div>`
    }

  out += `</div>` // ends listAllOptions

  // listArray container
  out += `<div class="listArray">`

  // Loop through each source entry and build a listPair
  for (let i = 0; i < chars.length; i++) {
    // Determine the effective character for lookups depending on showFirst/showLast
    const raw = chars[i]
    
    // Convert U+2423 placeholder to comma
    const src = (raw === '\u2423') ? ',' : raw

    // Determine char used for DB lookups; if showLast/showFirst, split codepoints
    let charForLookup = src
    if (showLast || showFirst) {
        const splitList = [...src]
        charForLookup = showLast ? (splitList[1] || splitList[0] || '') : (splitList[0] || '')
        }

    // Build index id only if inside #index element (preserve behaviour)
    const indexId = node.closest('#index') ? ` id="index${ src }"` : ''

    // Start listPair wrapper
    out += `<div class="listPair"${ indexId }>`

    // IPA handling:
    // - If explicit ipa dataset provided, use those values
    // - Else if info includes ipa, try to build from spreadsheet (including ipaplus)
    let listIPAHtml = ''
    
    if (ipa.length > 0) {
        // change [ ] to bdi for allophones etc
        if (ipa[i]) ipa[i] = ipa[i].replace(/\[/g,'<bdi>').replace(/\]/g,'</bdi>')
        listIPAHtml = ipa[i] ? `<span class="listIPA">${ ipa[i] }</span>` : ' '
        }
    else if (info.includes('ipa')) {
        // ipaplus support: append spreadsheet ipaPlus if class ipaplus present
        let ipaplus = ''
        if (ipaplusClass && sheet[charForLookup] && cols.ipaPlus !== undefined && sheet[charForLookup][cols.ipaPlus]) ipaplus = String(sheet[charForLookup][cols.ipaPlus]).toLowerCase()
        // ipaLoc may contain multiple parts separated by spaces; append ipaplus between parts
        let ipaLoc = '&nbsp;'
        if (sheet[charForLookup] && cols.ipaLoc !== undefined && sheet[charForLookup][cols.ipaLoc]) {
            const parts = String(sheet[charForLookup][cols.ipaLoc]).toLowerCase().split(' ')
            ipaLoc = parts.map(p => p + ipaplus).join(' ').trim()
            }
        listIPAHtml = ipaLoc === '&nbsp;' ? '<span>&nbsp;</span>' : `<span class="listIPA">${ ipaLoc }</span>`
        }

    // Order glyph + IPA reversed for soundSummary context
    if (context === 'soundSummary') out += listIPAHtml

    // Build primary glyph span with optional highlight, font, lang, dir and title
    const highlightClass = highlights[i] ? ' highlight' : ''
    const langAttr = ds.lang ? ` lang="${ ds.lang }"` : ` lang="${ window.langTag }"`
    const title = (sheet[src] && cols.ucsName !== undefined) ? sheet[src][cols.ucsName] : ''
    out += `<span class="listItem${ highlightClass }"${ fontAttr }${ dirn }${ langAttr } title="${ title }">${ src }</span>`

    // Extra second-row characters (preserve alignment)
    if (extra.length > 0) {
        out += extra[i] ? `<span class="listExtra" lang="${ extraLang }">${ extra[i] }</span>` : `<span>&nbsp;</span>`
        }

    // Status column if required
    if (showStatus) {
        const statusHtml = getStatusHtml(charForLookup)
        out += `<span class="listItemType">${ statusHtml }</span>`
        }

    // Order glyph + IPA reversed for soundSummary context
    if (context !== 'soundSummary') out += listIPAHtml

    // Latin transcription (explicit dataset takes precedence)
    if (latin.length > 0) out += latin[i] ? `<span class="listLatin">${ latin[i] }</span>` : '&nbsp;'
    else if (info.includes('latin')) {
        const trans = (sheet[charForLookup] && cols.transcription !== undefined) ? sheet[charForLookup][cols.transcription] : '&nbsp;'
        out += `<span class="listLatin">${ trans }</span>`
        }

    // Meaning / gloss (info-driven) and notes dataset
    if (info.includes('meaning')) {
        const meaning = (sheet[charForLookup] && cols.meaning !== undefined) ? sheet[charForLookup][cols.meaning] : '&nbsp;'
        out += `<span class="listMeaning">${ meaning }</span>`
        }
    if (notes.length > 0) out += notes[i] ? `<span class="listMeaning">${ notes[i] }</span>` : `<span class="listMeaning">&nbsp;</span>`

    // Code point values block (skipped for space or when class noCodePoints present)
    if (!hasClass(node, 'noCodePoints') && src !== ' ') {
      out += '<span class="listUnum">'
      const charList = [...src] // iterate code points correctly
      for (let z = 0; z < charList.length; z++) {
        if (ignoreset.has(charList[z])) continue
        const dec = charList[z].codePointAt(0)
        const hex = normaliseHex(dec)
        out += `<span class="listUnumCP">${ hex }</span>`
        if (charList.length > 1 && z < charList.length - 1) out += '<br/>'
        }
      out += '</span>'
      }

    // Links block (preserve indexline wrapping and arrow symbol)
    if (links.length > 0) {
      if (links[i]) {
        const linkList = links[i].split(' ').filter(Boolean)
        if (indexline) out += '<div class="index_details">'
        const uname = (sheet[charForLookup] && cols.ucsName !== undefined) ? String(sheet[charForLookup][cols.ucsName]).replace(/U\+[^:]+: /,'') : 'NAME UNKNOWN'
        if (indexline) out += `<span class="index_uname">${ uname }</span>`
        out += `<span class="links">`
        linkList.forEach(l => { out += `<a href="${ l }">\u2193</a>` })
        out += `</span>`
        if (indexline) out += `</div>`
        }
      else out += '<span>&nbsp;</span>'
      }

    // Now insert IPA/html in correct position if not already added for soundSummary
    //if (context === 'soundSummary') out += listIPAHtml + `<span class="listItemType"></span>` // maintain spacing/structure
    //else out += listIPAHtml

    // Insert IPA and glyph in the correct order, only once
    //if (context === 'soundSummary') out += listIPAHtml + listItemHtml /* primary glyph/html already built earlier as listItemHtml */
    //else out += listItemHtml + listIPAHtml

    // Close listPair
    out += `</div>`
    }

  // Close listArray and write output back into node
  out += `</div>`
  node.innerHTML = out
  }




function countUniqueChars(chars) {
  // Flatten the array into a single string
  const combined = chars.join('').replace(/\u25CC/g,'')

  // Extract unique characters
  const unique = [...new Set(combined)]

  // Unicode combining marks: \p{M}
  const combiningMark = /\p{M}/u

  // Prefix combining marks with U+25CC
  const processed = unique.map(ch =>
    combiningMark.test(ch) ? '\u25CC' + ch : ch
  )

  // Return comma-separated string
  return processed.length
  }



/*function getUniqueChars(chars) {
  // Flatten the array into a single string
  const combined = chars.join('');

  // Extract unique characters
  const unique = [...new Set(combined)];

  // Unicode combining marks: \p{M}
  const combiningMark = /\p{M}/u;

  // Prefix combining marks with U+25CC
  const processed = unique.map(ch =>
    combiningMark.test(ch) ? '\u25CC' + ch : ch
  );

  // Return comma-separated string
  return processed.join(', ');
}



function showUniqueCharsPopover(uniqueCharsString) {
  // Count items by splitting on commas
  const count = uniqueCharsString
    ? uniqueCharsString.split(',').length
    : 0;

  let html = `
    <strong>${count} unique characters</strong><br>
  `;
  
  const chars = uniqueCharsString.split(',')
  for (i=0;i<chars.length;i++) {
    html += `<span lang="ha" style="margin-inline:.5rem;">${ chars[i] }</span> `
    }

  const pop = document.getElementById('uniqueCharsPopover');
  pop.innerHTML = html;
  pop.showPopover();
}
*/







function unumToPanel (evt) {
    console.log(`>>> unumToPanel(evt)
    Gather data from hex numbers below a listItem and send it/them to displayCharacterList.
    Called by ${ getCallerName() }.`)

    node = evt.target.closest('.listUnum')
    lang = window.langTag

    // gather the nodes from across the listItem hex numbers
	const itemNodeList = node.querySelectorAll('.listUnumCP')
    const rawItemArray = Array.from(itemNodeList, node => String.fromCodePoint(parseInt(node.textContent, 16)))
    
    let itemArray = []
    let ipaArray = [node.closest('.listPair').querySelector('.listIPA').textContent]

    itemArray = rawItemArray
    //const ipaNodeList = figure.querySelectorAll('.listIPA')
    //ipaArray = Array.from(ipaNodeList, node => node.textContent)

    const transcriptionsArray = itemArray.map(g => transliteratePanel(g, lang))

    const direction = ''

	listCharactersInPanel(
		itemArray,
		ipaArray,
        transcriptionsArray,
		lang,
		direction
        )
    }







function characterBoxToPanel (evt) {
    console.log(`>>> characterBoxToPanel(evt),
    Gather data from a character box and send it to displayCharacterList.
    Called by ${ getCallerName() }.`)
    
    node = evt.target.closest('.listAll')
    if (node === null) return
    console.log(evt.target)
    console.log('***NODE', node)
    lang = window.langTag
    //unique = node.classList.contains('showUnique')
    let unique = false
    if (node.classList.contains('showUnique')) unique = true
    
	const figure = node.closest('figure')
	if (!figure) return  // shortcut the function when topping up newly generated data

    // gather the nodes from across the characterBox
	const itemNodeList = figure.querySelectorAll('.listItem')
    const rawItemArray = Array.from(itemNodeList, node => node.textContent)
    
    let itemArray = []
    let ipaArray = []

    if (unique) {
        const chars = rawItemArray.join('')
            .replace(/◌/g,'') // merge all items & remove dotted circles
        const charArray = [...chars]            // split into characters
        itemArray = [...new Set(charArray)]     // remove duplicates
            .filter(ch => ch.trim() !== '')     // remove spaces/newlines
        }
    else {
        itemArray = rawItemArray
        const ipaNodeList = figure.querySelectorAll('.listIPA')
        ipaArray = Array.from(ipaNodeList, node => node.textContent)
        }

    const transcriptionsArray = itemArray.map(g => transliteratePanel(g, lang))

    const direction = figure.dataset.dir ? ' dir="rtl"' : ''

	listCharactersInPanel(
		itemArray,
		ipaArray,
        transcriptionsArray,
		lang,
		direction
        )
    }






function listCharactersInPanel (itemArray, ipaArray, transcriptionsArray, clang, direction) {
    console.log('>> listCharactersInPanel (\n\titemArray=',itemArray, '\n\tipaArray=',ipaArray, '\n\ttranscriptionsArray=',transcriptionsArray,'\n\tclang=', clang,'\n\t)\n\tCreate a panel at bottom-right and add glosses, character lists, & buttons.')

    // called by onclick characterBoxToPanel, created by setCharacterBoxOnclicks
    // itemArray, native text for listItems
    // ipaArray, ipa items, if any, for each itemArray item
    // transcriptionsArray, transcriptions for each item
    // clang (string), lang attribute value of listItems
    // global charData pickerDir

    // to show per-grapheme ipa there needs to be a data-ipa attribute

    const base = window.blockDirectory
    const target = 'c'
    const panel = document.getElementById('panel')
    
    let chars = itemArray.join(' ')  // eventually remove this...

	document.getElementById('panel').innerHTML = ''
	document.getElementById('panel').style.display = 'block'




	let out = '<div id="ruby">'

	console.log('*** graphemes:', itemArray)
	console.log('*** transcriptions:', transcriptionsArray)
	console.log('*** ipa:', ipaArray)

	// Gloss block
	const iconURL = '../img/icons/copytiny.svg'
	let gloss = '<div class="multilineGlossedText">'

	for (let t = -1; t < itemArray.length; t++) {
		if (t === -1) {
			gloss += `<div class="stack">
				<span class="rt translitGloss" lang="und-fonipa" title="Transliteration of the text.">
					<img src="${ iconURL }" class="copyIcon" onclick="copyPanelText('.translitGloss')" title="Copy the transliteration." alt="Copy transliteration">
				</span>
				<span class="rb">
					<img src="${ iconURL }" onclick="copyPanelText('.rb')" class="copyIcon" title="Copy the text." alt="Copy text">
				</span>`

			if (ipaArray.length > 0)
				gloss += ipaArray[0] ? `<span class="rt IPAGloss" lang="und-fonipa"><img class="copyIcon" src="${ iconURL }" onclick="copyPanelText('.IPAGloss')" title="Copy IPA" alt="Copy IPA"></span>` : `<span class="rt">&nbsp;</span>`

			gloss += `</div>`
		    }
		else {
			gloss += `<div class="stack">
				<span class="rt translitGloss" lang="und-fonipa">${ transcriptionsArray[t] }</span>
				<span class="rb">${ itemArray[t] }</span>`

			if (ipaArray.length > 0)
				gloss += ipaArray[t] ? `<span class="rt IPAGloss" lang="und-fonipa">${ ipaArray[t] }</span>` : `<span class="rt">&nbsp;</span>`

			gloss += `</div>`
		    }
	   }
	gloss += '</div>'
    
	out += `<div dir="ltr" class="glossContainer" lang="${ clang }" id="title">${ gloss }</div>`



	out += '<p id="advice" style="line-height:1;">Glossed lines are transliteration/text/IPA.<br>Click on character names below for detailed information.</p>'
    
    


	// Character list
	chars = chars.replace(/[ \u00A0]/g, '')

	const charArray = [...chars]

	out += '<div id="listOfCharacters">'

	for (let ch of charArray) {
		const dec = ch.codePointAt(0)
		let hex = dec.toString(16).toUpperCase().padStart(4, '0')

		if (charData[ch]) {
			const blockname = getScriptGroup(dec, false)
			const blockfile = getScriptGroup(dec, true)
			const isInBlock = spreadsheetRows[ch] ? true : false

            if (ch === '◌') { continue }
            //if (ch === '◌') { out += `<hr>`; continue }
            
			out += '<div class="panelCharacter">'

			if (isInBlock) {
				out += `<img title="Copy U+${ hex } ${ charData[ch] } to clipboard."
                    onclick="copyCharToClipboard('U+${ hex } ${ charData[ch] }')"
                    src="../img/icons/copytiny.svg"
                    style="float:right; height:1.2rem; margin-inline:.4em; border-radius:0; border:0;"
                    alt="Copy">`
				out += `<img title="Copy ${ ch } to clipboard."
                    onclick="copyCharToClipboard('${ ch }')"
                    src="../img/icons/copytiny.svg"
                    style="float:right; height:1.2rem; margin-inline:.4em; border-radius:0; border:0;"
                    alt="Copy">`
				out += `<img class="pcImg"
                    src="../../c/${ blockname }/large/${ hex }.png"
                    alt="${ ch }"
                    style="height:2rem;">`

                //if (ch === '◌') out += `Placeholder for consonant`
                /*else*/ out += `<a href="${ clang }-characters.html#char${ hex }" target="characters"> U+${ hex } ${ charData[ch] }</a>`
                //else out += `<a href="javascript:void(0)" onclick="showCharDetailsInPanel(event)"> U+${ hex } ${ charData[ch] }</a>`
			    }
			else {
				out += `<img src="../../c/${ blockname }/large/${ hex }.png" alt="${ ch }" style="height:2rem;">`
				out += ` U+${ hex } ${ charData[ch] }`
			}
			out += '</div>'
		}
		else {
			out += `<div class="panelCharacter"><a target="c" href="../../uniview/index.html?charlist=${ ch }&char=${ hex }"><img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ ch }"> U+${ hex } No data for this character</a></div>`
		}
	}

	out += '</div>'

	// Bottom buttons
	out += '<p style="text-align:left; margin-block-start:1em; line-height:2rem;" id="panelSharingLine">'
    
	out += '<button onclick="copyPanelList()" style="cursor:copy;">Copy list</button> \u00A0 '
	
    out += `<button onclick="openExportWindow('../../app-analysestring/index.html?chars=${ chars.replace(/\u25CC/g,'') }')">Details</button> \u00A0 `
    
	out += `<button onclick="openExportWindow('../../uniview/index.html?charlist=${ chars.replace(/\u25CC/g,'') }')">UniView</button> \u00A0 `
	
    out += `<button onclick="openExportWindow('../../pickers/${ pickerDir }/index.html?text=${ chars.replace(/\u25CC/g,'.') }')">Workbench</button> \u00A0 `

	let url = `${ window.langTag }_terms`
	if (typeof window.removeVowels === 'function')
		chars = removeVowels(chars)

	out += `<button onclick="openExportWindow('${ url }.html?q=${ chars.replace(/\u25CC/g,'.') }')">Terms</button> \u00A0 `

	out += '<p id="character_panel_close_button" onclick="document.getElementById(\'panel\').style.display=\'none\'">X</p>'

	panel.innerHTML = out
}





function openExportWindow (url) {
	var shareWindow = window.open(url, 'analyse') 
	shareWindow.focus()
	}



function transliteratePanel (str, lang) {
    // transliterate the rb tags in the panel
    //console.log('>> transliteratePanel(',str,lang,')\n\tAutoTranslitArray',lang, autoTranslitArray[lang])

    // exit if this isn't a full orthography page
    if (typeof autoTranslitArray === 'undefined') return

    var strArray = [...str]
    str = ''

    var exclusions = new Set(['(',')','[',']','.',' '])

    // fudge because in notes autoTranslitArray has a language level which is not present in pickers
    if (autoTranslitArray[lang]) {
        for (i=0;i<strArray.length;i++) {
            if (autoTranslitArray[lang][strArray[i]]) str += autoTranslitArray[lang][strArray[i]]
            else if (strArray[i] === ' ') str += ''
            else str += '–'
            }
        }
    else {
        for (i=0;i<strArray.length;i++) {
            if (autoTranslitArray[strArray[i]]) str += autoTranslitArray[strArray[i]]
            else str += ''
            }
        }

    return str.trim()
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






function makeIndexLine(node) {   // Optimised by CoPilot
    // console.log(`>>> makeIndexLine(`, node, ').   Creates the markup for a given characterBox in the index.')
    // node is the characterBox figure
    
    // Guard: require a node with textContent
    if (!node || !node.textContent) {
        node && (node.innerHTML = '')
        return
        }

    // Local references to globals for faster repeated access
    const ssRows = window.spreadsheetRows || {}
    const colDefs = typeof cols !== 'undefined' ? cols : {}
    const langDefault = window.langTag || 'und'

    // Helper: normalise a token (trim whitespace)
    //const norm = s => (s == null ? '' : s.trim())

    // normalize token: convert visible-space glyph to comma, then trim; return empty string for null/undefined
    const norm = s => {
        if (s == null) return ''
        return String(s).replace(/␣/g, ',').trim()
        }

    // Helper: convert a single JS string character to padded uppercase hex
    const cpHex = ch => {
        const hex = ch.codePointAt(0).toString(16).toUpperCase()
        return hex.padStart(4, '0')
        }

    // Split visible text into tokens by comma and filter empty tokens
    const chars = node.textContent.split(',').map(norm).filter(Boolean)

    // Read optional metadata from dataset
    const info = typeof node.dataset.cols === 'undefined' ? '' : node.dataset.cols
    const notes = node.dataset.notes ? node.dataset.notes.split(',').map(norm) : []

    // Build the output in parts (arrays) and join at the end — faster than repeated string concat
    const outParts = []

    // Build the "list all" control: count non-space tokens
    const visibleCount = chars.reduce((n, c) => (c === ' ' ? n : n + 1), 0)
    outParts.push(
        `<div class="listAll" onClick="listAll(this, '${langDefault}')">list ${
          visibleCount === 2 ? 'both' : visibleCount > 2 ? 'all ' + visibleCount : ''
        }</div>`
        )

    // Begin container for list items
    outParts.push('<div class="listArray">')

    // Process each token
    for (let i=0; i<chars.length; i++) {
        const token = chars[i]
        if (!token) continue // defensive

    // Lookup spreadsheet row once per token
    const row = ssRows[token]
    if (!row) {
        // Warn once per missing token and skip
        console.warn(
        `Cannot find ${token} in the spreadsheet (makeIndexLine). Index building needs attention.`
        )
        continue
        }

    // If node is inside the main index container, create an id attribute
    const indexId = node.closest && node.closest('#index') ? ` id="index${token}"` : '';

    // Determine status (normalise as before)
    const statusVal =
      row[colDefs.status] && row[colDefs.status] !== '0'
        ? getStatusForIndex(row[colDefs.status]).replace(/\./, '')
        : ''

    // language for the listItem span
    const itemLang = node.dataset.lang || langDefault

    // listPair open + character span with click handler (passes token)
    outParts.push(
        `<div class="listPair ${statusVal}"${indexId}><span class="listItem" lang="${itemLang}" onclick="makeFootnoteIndex('${token}')">${token}</span>`
        )

    // optional note corresponding to this token
    if (notes.length > 0) {
        const noteText = notes[i] || '&nbsp;';
        outParts.push(`<span class="listMeaning">${noteText}</span>`)
        }

    // codepoint hex listing — decompose token into codepoints
    outParts.push('<span class="listUnum">')
    const cps = [...token]; // spreads into codepoint-aware array
    for (let z = 0; z < cps.length; z++) {
        outParts.push(
            `<span class="listUnumCP" onclick="showCharDetailsInPanel(event)">${ cpHex(cps[z]) }</span>`)
        if (cps.length > 1 && z < cps.length - 1) outParts.push('<br/>')
        }
    outParts.push('</span>')

    // details area: unicode name and extra metadata if present
    outParts.push('<div class="index_details">')

    if (row[colDefs.ucsName]) {
        // strip leading "U+xxxx: " if present and show status + name
        const uname = row[colDefs.ucsName].replace(/U\+[^:]+: /, '')
        if (statusVal) {
            outParts.push(
            `<span class="index_uname" onclick="makeFootnoteIndex('${ token }')">(${ statusVal.replace(
            /index_/, '') }) &nbsp;&nbsp; ${ uname }</span>`
            )
        }
    else {
        outParts.push(
            `<span class="index_uname" onclick="makeFootnoteIndex('${token}')">${uname}</span>`
            )
            }
        }
    else {
        // keep behavior consistent: name unknown
        outParts.push(`<span class="index_uname" onclick="makeFootnoteIndex('${token}')">NAME UNKNOWN</span>`)
        }

    // additional inline metadata: type, statusLoc, ipa, transcription
    outParts.push(`<span class="indexLineData" onclick="makeFootnoteIndex('${token}')">`)
    if (row[colDefs.typeLoc]) outParts.push(`<span class="typeLoc">${row[colDefs.typeLoc]}</span> `)
    if (row[colDefs.statusLoc]) outParts.push(`<span class="statusLoc">${row[colDefs.statusLoc]}</span> `)
    if (row[colDefs.ipaLoc]) outParts.push(`<span class="ipa">${String(row[colDefs.ipaLoc]).toLowerCase()}</span> `)
    if (row[colDefs.transcription] && row[colDefs.transcription] !== '0')
        outParts.push(`<span class="transc">${row[colDefs.transcription]}</span> `)
    outParts.push('</span>')

    // close details and listPair wrappers
    outParts.push('</div>') // .index_details
    outParts.push('</div>') // .listPair
    }

    // close listArray and set innerHTML once
    outParts.push('</div>')
    node.innerHTML = outParts.join('')
    }













function showAllCharDetails (evt) {
	console.log(`showAllCharDetails (${ evt })
    Open an article that displays character notes details for all items in a characterBox.
    Called by ${ (new Error().stack.split('\n')[2] || '').trim() }`)

	if (typeof charDetails === 'undefined') return   // charDetails is defined in xx-details.js

	const node = evt.target
	const figure = node.closest('figure')
	if (!figure) return

	// collect all characters in this figure
	const items = figure.querySelectorAll('.listItem')
	let chars = ''
	for (let i = 0; i < items.length; i++) chars += items[i].textContent
    chars = chars.replace(/◌/g,'')

	// dedupe while preserving order
	const unique = [...new Set([...chars])]
	const charList = unique.join('')

    // get the insertion point
	let insertPoint = figure.querySelector('.listArray')
    
    // close any existing article
    const ptr = insertPoint.nextElementSibling
    if (ptr !== null && ptr.tagName.toLowerCase() === 'article') ptr.remove()


    // create the article element & table outer
    const articleNode = document.createElement('article')
    articleNode.title = charList

	const tableNode = document.createElement('table')
	tableNode.className = 'panel'
    
	tableNode.innerHTML = makeCharArticleList(charList.replace(/[◌-]/g,''), window.langTag)
    
	articleNode.appendChild(tableNode)
    insertPoint.after(articleNode)



	// post‑processing
	expandChMarkup()
	expandEgMarkup(window.langTag)
	setFootnoteRefs()
	wrapToneLettersInBdi()

    setOnclicks()
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
        out += ` \u2022 <a href="${ langTag }_terms.html?q=${ ipa }" target="terms">terms list</a>`
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
    // console.log('makeFootnoteIndex(','charVal='+this.textContent,')')
	// when you click on a character in a .listItem or .codepoint this
    // creates a set of links at the bottom of the page to other locations
    // where that character is mentioned; it also highlights those instances

	// create a regex of the character(s) being looked up
    var incomingValue, itemToFind
    
    // this creation of itemToFind regex seems unnecessary, and .test was failing 
    // to locate all instances.  Replaced the latter with .includes
    // seems to work: wait a while to ensure it's a good fix, then delete the following
    if (typeof charVal === 'string') incomingValue = charVal.replace(/\u25CC/g,'')
    else if (this.querySelector('img')) incomingValue = this.querySelector('img').alt.replace(/\u25CC/g,'')
    else incomingValue = this.textContent.replace(/\u25CC/g,'')
    //itemToFind = new RegExp(makeSafeRegex(incomingValue), 'g')
    //console.log('search for:',incomingValue)
    
    // convert hex code point values to a character
    if (! Number.isNaN(parseInt(charVal, 16))) incomingValue = String.fromCodePoint(parseInt(charVal, 16))

	// collect all the .listItem & .codepoint elements
	var possibleMatches = document.querySelectorAll('.listItem, .codepoint span, .codepoint bdi')
	var counter = 0
	var links = []
    
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
        
        //console.log('Seeking possibleMatch in:',possibleMatchValue)
        
        // if this is a span around a character name, ignore it
        // otherwise check whether the possible match matches the thing we're looking for
        if (possibleMatches[i].parentNode.nodeName !== 'A' && 
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

    // console.log('links',links)

	// remove redundancy from the links array
	const uniqueLinks = new Set(links)
	var leanLinks = [...uniqueLinks]
	// console.log(leanLinks)
	
	// report the results
	if (document.getElementById('phoneLinks')) {
		var out = counter+' matches found: &nbsp; '
		for (let i=0;i<leanLinks.length;i++) {
            if (typeof leanLinks[i] === 'undefined') {
                console.log('*** Undefined leanLinks in makeFootnoteIndex')
                continue
                }
            if (i>0) out += ' \u2022 '
            out += `<a href="#${ leanLinks[i] }"`
            // open the index, if necessary
            if (leanLinks[i].startsWith('index')) {
                out += ` onclick = "var indexSections = document.getElementById('index').querySelectorAll('details'); for (i=0;i<indexSections.length;i++) indexSections[i].open = true"`
                }
            out += `>${ leanLinks[i] }</a> `
            }
        out += ` \u2022 <a href="${ langTag }_terms.html?q=${ incomingValue }" target="terms">terms list</a>`
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


    // figure out whether this phone is inside a summary table
    var context = null
    if (evt.target.closest('.soundSummary')) context = 'soundSummary'


    if (typeof IPAsymbols === 'undefined') {
        console.log('Quitting show IPA symbols because no data.')
        return
        }
    
    if (context == 'soundSummary') {
        window.location = `#map${ evt.target.textContent.replace(/-/g,'').replace(/ /g,'') }`
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
            var names = IPAsymbols[searchArray[i]].split(',')
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
function makeIndexObject () { // copilot optimised
  // collect characters temporarily
  const charArray = []

  // select nodes once
  const chars = document.querySelectorAll('.codepoint, .listItem')

  // iterate with indexed for to avoid creating iterators for every loop
  for (let i=0, len=chars.length; i<len; i++) {
    const node = chars[i]

    // skip empty text nodes quickly
    const text = node.textContent && node.textContent.trim()
    if (!text && ! node.querySelector('img')) continue

    // skip nodes explicitly excluded via .noindex anywhere up the tree
    if (node.closest('.noindex')) continue

    // get the text to use from the node's first meaningful child
    // - if the first child contains an <img>, use that image's alt text
    // - otherwise fall back to the child's textContent
    // - logs a warning and continues when nothing meaningful is found
    const getFirstChildTextOrImgAlt = el => {
        if (!el) return ''

        // prefer the first child node that has non-empty textContent or contains an <img>
        for (let n = 0; n < el.childNodes.length; n++) {
            const c = el.childNodes[n]
            if (!c) continue

            // if child is an element, check for an <img> inside it first
            if (c.nodeType === Node.ELEMENT_NODE) {
                const img = c.querySelector && c.querySelector('img')
                if (img && img.alt && img.alt.trim() !== '') {
                    return img.alt.trim()
                    }
                // if no suitable img, use element's textContent if it has visible text
                const t = (c.textContent || '').trim()
                if (t !== '') return t
                }
            else {
                // for text nodes, return non-empty trimmed text
                const t = (c.textContent || '').trim()
                if (t !== '') return t
                }
            }

        // nothing meaningful found
        return ''
        }


    // get the character
    const cell = getFirstChildTextOrImgAlt(node)
    if (!cell) {
        console.log('No content found for', node.parentNode && node.parentNode.textContent)
        continue
        }


    // find enclosing section id; use closest('section') for clarity and robustness
    const sectionEl = node.closest('section')
    const section = sectionEl ? sectionEl.id : ''

    // ignore index/map sections as before
    if (!section || section.includes('index_') || section.includes('_map') || section.includes('map_')) continue

    // determine status only for list items
    let status = ''
    if (node.classList.contains('listItem')) {
      const listHead = node.parentNode && node.parentNode.parentNode && node.parentNode.parentNode.parentNode
      if (listHead) {
        if (listHead.classList.contains('otherBox')) status = 'other'
        else if (listHead.classList.contains('characterBox') || listHead.classList.contains('mainBox')) status = 'character'
        else if (listHead.classList.contains('auxiliaryBox') || listHead.classList.contains('auxBox')) status = 'auxiliary'
        else if (listHead.classList.contains('deprecatedBox')) status = 'deprecated'
        else if (listHead.classList.contains('archaicBox')) status = 'archaic'
      }
    }

    // expand cell string into characters and push compact objects
    for (const ch of [...cell]) {
      const obj = { codepoint: ch, section }
      if (status) obj.status = status
      charArray.push(obj)
    }
  }

  // build index in place. assume `index` is a global or outer-scope object
  // use let/const to avoid implicit globals
  if (typeof index === 'undefined') window.index = {} // create if missing
  const idx = index

  // accumulate characters for sorting
  window.allchars = ''

  // iterate charArray once and build index entries
  for (let j=0, L=charArray.length; j<L; j++) {
    const entry = charArray[j]
    const c = entry.codepoint
    const secTag = '#' + entry.section

    // if entry exists and already lists this section, update status if provided
    if (idx[c] && idx[c].section.includes(entry.section)) {
      if (entry.status) idx[c].status = entry.status
      continue
    }

    // if entry exists but section is new, append
    if (idx[c]) {
      idx[c].section += ' ' + secTag
      if (entry.status) idx[c].status = entry.status
    } else {
      // new entry
      idx[c] = { section: secTag }
      if (entry.status) idx[c].status = entry.status
      allchars += c
    }
  }

  // produce sorted allchars string
  allchars = [...allchars].sort().join('')
  // optional: store or return allchars if needed
  return { index: idx, allchars }
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
    //out += '">'+chars.join('␣')+'</figure>'
    out += '">'+chars.join(',')+'</figure>'
	document.getElementById('out').value = out
	document.getElementById('out').select()
	}





function makeMarkupForSection(sectionName) {  // copilot optimised
    //console.log(`>>> makeMarkupForSection(',sectionName,')   Convert the index's characterBox lists to markup.`)
    // sectionName is the id of a section in the index
    // global: index, contains the mappings of character to section
    
    // find the section element once; return early if not present
    const sectionEl = document.getElementById(sectionName)
    if (!sectionEl) return

    // ensure an index object exists and use a local reference for faster lookups
    if (typeof index === 'undefined') window.index = {}
    const idx = index

    // gather figures into an array to avoid re-querying a live NodeList
    const figures = Array.from(sectionEl.querySelectorAll('figure'))

    // small helper: convert special visible-space glyph to actual comma
    const normalize = ch => (ch === '␣' ? ',' : ch)

    // process each figure once
    for (const fig of figures) {
        // read text content once and guard empty/whitespace-only figures
        const raw = (fig.textContent || '').trim()
        if (!raw) {
            fig.dataset.links = ''
            makeIndexLine(fig) // preserve existing behaviour for empty figures
            continue
            }

        // split by comma, trim each token and drop empty tokens
        const tokens = raw.split(',').map(s => s.trim()).filter(Boolean)

        // accumulate section strings and record characters not found in index
        const outSections = []
        const missing = []

        for (const token of tokens) {
            // normalise token and lookup in index
            const ch = normalize(token)
            const entry = idx[ch]


            if (!entry) {
                // if character is not in index object add to missing
                // unless it's a To be investigated character, or an index entry that is more than one character long
                if (! fig.classList.contains('tbcBox') && ch.length === 1) missing.push(ch)
                }
            else outSections.push(entry.section) // collect the section string, unless this is in the To be Investigated list
            }

        // report missing characters once per figure (keeps console output compact)
        //if (missing.length) console.warn(`While creating markup for the section <${ sectionName }> in the index, the following characters were not found in the global {index} object, indicating that they were in the index but not found in the text:\n`, missing)
        if (missing.length) console.warn('%cIndex characters not in the text!', 'color:darkorange;font-weight:bold;',`See section <${ sectionName }>. (Missing from the global {index} object.)\n`, missing)

        // set dataset.links — join sections with commas; add trailing comma only if desired
        fig.dataset.links = outSections.length ? outSections.join(',') + ',' : ''

        // call existing function to convert dataset.links into markup
        makeIndexLine(fig)
        }

    // return useful results for testing or further processing
    return {
        index: idx,
        figuresProcessed: figures.length
        }
    }





function checkParameters () {
    console.log(`checkParameters()
    Check for parameters and take appropriate action: open index; jump to char in index`)
	// parse ?a=b&c=d into { a: "b", c: "d" }
	const raw = location.search
	if (!raw || raw.length < 2) return

	const params = raw.substring(1).split('&')
	const indexEl = document.getElementById('index')

	for (let p = 0; p < params.length; p++) {
		const [key, value] = params[p].split('=')

		// open index and jump to character
		if (key === 'index' && value) {
			if (indexEl) {
				const sections = indexEl.querySelectorAll('details')
				for (let i = 0; i < sections.length; i++) sections[i].open = true
			}
			document.location = '#index' + value
			continue
		}

		// open index without jumping
		if (key === 'showIndex') {
			if (indexEl) {
				const sections = indexEl.querySelectorAll('details')
				for (let i = 0; i < sections.length; i++) sections[i].open = true
			}
			continue
		}

		// disable mouseover reveal
		/*if (key === 'nomouseover') {
			const box = document.getElementById('showDetailOnMouseover')
			if (box) box.checked = false
			console.log('Detail on mouseover is off.')
			continue
            }*/
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
    //console.log('copyIntroInfo()\n\tCopy paragraphs from the brief summary to the top of various sections')
    
    basicFeatures = document.getElementById('type')
    if (!basicFeatures) return

  

    // do the vowels
    if (document.getElementById('vowel_description')) {
        const target = document.getElementById("vowel_description")
        
        // describe the table
        if (document.querySelector('#basicV .soundSummary')) {
            const p = document.createElement("p")
            p.className = "instructions"
            p.style.marginBlockEnd = "4rem"
            p.innerHTML = `The summary table just above gives only a rough idea of how sounds map to characters. Detailed information about usage and context follows, including the table <a href="#vowel_mappings">Vowel sounds to characters</a> at the end of the section. Clicking on the IPA labels in the table above will take you to that table so you can check for more information about a given sound. For detailed information about a specific character, click on the character.`

            // Insert before the div
            target.before(p)
            }


        out = `<section id="vowel_text_summary">`
        out += `<h3>Summary</h3>`

        var paras = basicFeatures.querySelectorAll('.addToVowels')
        for (var i=0;i<paras.length;i++) out += paras[i].outerHTML
        out += `</section>`
        
        target.outerHTML += out
        }



    
    // do the consonants
    if (document.getElementById('consonant_description')) {
        const target = document.getElementById("consonant_description")
        
        // describe the table
        if (document.querySelector('#consonantSummary .soundSummary')) {
            const p = document.createElement("p")
            p.className = "instructions"
            p.style.marginBlockEnd = "4rem"
            p.innerHTML = `The summary table just above gives only a rough idea of how sounds map to characters. Detailed information about usage and context follows, including the table <a href="#consonant_mappings">Consonant sounds to characters</a> at the end of the section. Clicking on the IPA labels in the table above will take you to that table so you can check for more information about a given sound. For detailed information about a specific character, click on the character.`

            // Insert before the div
            target.before(p)
            }

        out = `<section id="consonant_text_summary">`
        out += `<h3>Summary</h3>`

        var paras = basicFeatures.querySelectorAll('.addToConsonants')
        for (var i=0;i<paras.length;i++) out += paras[i].outerHTML
        out += `</section>`
        
        target.outerHTML += out
        }


    
    // do novowel
    if (document.getElementById('novowel_description')) {
        var out = ''
        var paras = basicFeatures.querySelectorAll('.addToNovowel')
        // console.log("Copying",paras.length,"paragraphs to Novowel section.")
        for (var i=0;i<paras.length;i++) out += paras[i].outerHTML
        if (out !== '') document.getElementById('novowel_description').innerHTML = out
        }

    
    // do diacritics
    if (document.getElementById('diacritic_description')) {
        var out = ''
        var paras = basicFeatures.querySelectorAll('.addToDiacritics')
        // console.log("Copying",paras.length,"paragraphs to Diacritics section.")
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
                                // console.log(h2)
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

	const section = document.getElementById('online_samples')
	if (!section) return

	let out = `<h2>Online resources</h2>\n<ol>\n`

	for (let i = 0; i < termLists.length; i++) {
		const item = termLists[i]
		const url = item.url || ''
		const title = item.title || ''
		const notes = item.notes || ' '

		out += `<li><a href="${ url }" target="_blank">${ title }</a> &nbsp;&nbsp; ${ notes }\n`
	   }

	out += `</ol>`

	section.innerHTML = out
    }








function addCharacterLists () {
    console.log(`>>> addCharacterLists()
    Add the lists of characters in selected sections to the right hand column.
    Called by ${ getCallerName() }.`)

	const sections = [
		'vowels',
		'vocalics',
		'consonants',
		'novowel',
		'symbols',
		'numbers',
		'inline'
	    ]

	for (const id of sections) {
		const el = document.getElementById(id)
		if (!el) continue

		const aside = el.querySelector('aside')
		if (!aside) continue

		listSectionCharacters(id)
	    }

	const listItems = document.querySelectorAll('.sectionCharacterList .listItem')
	for (let i = 0; i < listItems.length; i++)
		listItems[i].addEventListener('click', makeFootnoteIndex)
    }







function listSectionCharacters (section) {
	// Collect all inline glyph sources in the given section:
	// - .listItem elements (primary glyph spans created by buildCharacterBox)
	// - <bdi> inside .codepoint (the visual glyph container)
	// We'll use these to build a unique sorted list of characters used in the section.

	charElems = document.getElementById(section).querySelectorAll('.listItem, .codepoint bdi')

	// Aggregate raw character text from the collected elements
	charList = ''
	for (i=0;i<charElems.length;i++) {
		// If this is a .listItem and it is not inside a figure marked noindex, use its textContent
		if (charElems[i].className === 'listItem' && ! charElems[i].closest('figure').classList.contains('noindex'))  charList += charElems[i].textContent
		// Otherwise, if the current element is inside a .codepoint and that .codepoint is not noindex,
		// prefer any embedded <img alt="…"> text (SVG/PNG alt) so images contribute the character,
		// otherwise use the element's textContent.
		else if (charElems[i].closest('.codepoint') && charElems[i].closest('.codepoint').classList !== null && ! charElems[i].closest('.codepoint').classList.contains('noindex')) {
			if (charElems[i].querySelector('img')) charList += charElems[i].querySelector('img').alt
			else charList += charElems[i].textContent
		    }
	    }

	// Clean up invisible/auxiliary characters used in rendering:
	// - dotted circle U+25CC, ZERO WIDTH JOINER U+200D, normal and non-breaking spaces,
	//   information symbol U+24D8 used as decoration in some workflows
	charList = charList.replace(/\u25CC/g,'')
	charList = charList.replace(/\u200D/g,'')
	charList = charList.replace(/\u0020/g,'')
	charList = charList.replace(/\u00A0/g,'')
	charList = charList.replace(/\u24D8/g,'')

	// The text U+2423 (open box) was used as a stand-in for commas in some content;
	// restore that mapping so commas are preserved as characters rather than separators.
	charList = charList.replace(/,/g,'\u2423')

	// Convert the string of characters into an array of code points
	// [...charList] iterates by Unicode code points (handles surrogate pairs)
	charArray = [... charList]

	// Remove duplicates by creating a Set then back to array
	uniqueSet = new Set(charArray)
	charArray = [...uniqueSet]

	// Sort characters in Unicode code point order (string sort is acceptable for single code points)
	charArray.sort()

	// Join the unique sorted characters into a comma-separated list for later use
	charList = charArray.join(',')

	// Create a Set from that CSV (fast membership tests)
	chartList = new Set(charList)

	// Find index list items (global index area) so we can map characters back to index titles
	indexListItems = document.getElementById('index').querySelectorAll('.listItem')

	// Build an array of "char + title" strings for characters present in the index
	inputLines = []
	for (i=0;i<indexListItems.length;i++) {
		// If this index entry's glyph is one of the characters in our character set,
		// compose "char + sectionTitle" and push for grouping.
		if (chartList.has(indexListItems[i].textContent)) {
			title = indexListItems[i].textContent+' '+indexListItems[i].closest('section').querySelector('h3,h4').textContent
			inputLines.push(title)
		    }
	    }

	// Group characters by the index title they belong to.
	// titleMap will be { titleString: [char1, char2, ...], ... }
	const titleMap = {}
	inputLines.forEach(line => {
		// Split the line at first space: the first token is the character, the rest is the title.
		const [char, ...titleParts] = line.split(' ')
		const title = titleParts.join(' ')
		if (!titleMap[title]) {
			titleMap[title] = []
		    }
		titleMap[title].push(char)
	    })

	// Generate HTML: a small section that lists "Characters described in this section"
	// and a figure.characterBox for each index title containing its characters.
	out = `
	<div class="sectionCharacterList">
	<p style="font-weight: bold; font-style: normal; text-align: center; margin-block-end: .2em; hyphens:none; }">Characters described in this section</p>
	`

	for (const [title, chars] of Object.entries(titleMap)) {
		// Join the group's characters with commas to create a figure suitable for buildCharacterBox()
		let charList = chars.join(',')
        charList = charList.replace(',,,',',\u2423,') // shield buildCharacterBox from ,,,
        charList = charList.replace(',,','\u2423,') // shield buildCharacterBox from ,,
        if (charList !== ',') out += `<div style="font-size:80%;">${title}</div><figure class="characterBox auto noexpansion small" data-cols="">${charList}</figure>`
	    }

	out += `
	</div>
	`
    
    // Add a short triage link using the concatenation of characters (remove commas for URL)
	out += `<p class="instructions" style="text-align:end; margin-block-end: 8em;"><a href="../apps/listcategories/index.html?chars=${ charList.replace(/,/g,'') }" target="_blank">Triage by General Category</a></p>`


	// Append the generated markup to the section's aside (preserve existing aside content)
	//document.getElementById(section).querySelector('aside').innerHTML += out
	document.getElementById(section).querySelector('aside').innerHTML = out + document.getElementById(section).querySelector('aside').innerHTML

	// After inserting figures, call buildCharacterBox on each figure so they are rendered
	figures = document.getElementById(section).querySelector('aside').querySelectorAll('figure')
	for (f=0;f<figures.length;f++) buildCharacterBox(figures[f])

	// Add a short triage link using the concatenation of characters (remove commas for URL)
	//document.getElementById(section).querySelector('aside').innerHTML += `<p class="instructions" style="text-align:end;"><a href="../apps/listcategories/index.html?chars=${ charList.replace(/,/g,'') }" target="_blank">Triage by General Category</a></p>`
    
    setOnclicks()
    }












/* SHOW TRANSCRIPTIONS INLINE, RATHER THAN IN POPUP PANEL */





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



function makeBreakdownTables () {
	// Converts simple markup to tables showing sequences of characters

	const tables = document.querySelectorAll('.sequenceTable')

	for (let table of tables) {
		let out = ''
		const rows = table.querySelectorAll('tr')

		for (let row of rows) {
			const chars = row.querySelector('td').textContent.split(',')
			const notes = row.dataset.notes.split(',')
			const types = row.dataset.type.split(',')
			const prefixes = row.dataset.prefix.split(',')
			const font = row.dataset.font ? ` style="font-family: '${ row.dataset.font }'"` : ''

			out += `<tr>`

			for (let i=0;i<chars.length;i++) {
				let ch = chars[i]

				if (ch === '\u200C')
					ch = `<img src="../../c/General_Punctuation/large/200C.png" alt="ZWNJ" style="height:1em;">`
				else if (ch === '\u200D')
					ch = `<img src="../../c/General_Punctuation/large/200D.png" alt="ZWJ" style="height:1em;">`

				out += `<td>${ prefixes[i] }</td>`
				out += `<td><bdi class="ex" lang="${ window.langTag }" onclick="showCharDetailsInPanel(event)"${ font }>${ ch }</bdi><span class="${ types[i] }">${ notes[i] }</span></td>`
			}

			out += `</tr>`
		}

		table.innerHTML = out
	}
}




function copyCharToClipboard (textToCopy) {
    console.log(`copyCharToClipboard(textToCopy)
    Copy an item to the clipboard.
    `)
    navigator.clipboard.writeText(textToCopy)
    document.getElementById('copyNotice').style.display = 'block'
    setTimeout(() => { document.getElementById('copyNotice').style.display = 'none' }, '500')
	}





function copyPanelText (type) {
    console.log(`copyPanelText(type:${ type })
    Copy a 'ruby' item to the clipboard.
    `)

	const ruby = document.getElementById('ruby')
	if (!ruby) return

	const nodes = ruby.querySelectorAll(type)
	let out = ''

	for (const node of nodes) {
		out += node.textContent
		if (type === '.IPAGloss') out += ' '
	    }

	if (type === '.IPAGloss')
		out = out.replace(/[–‹›]/g, '')
    
	navigator.clipboard.writeText(out.trim())

	const notice = document.getElementById('copyNotice')
	notice.style.display = 'block'
	setTimeout(() => notice.style.display = 'none', 500)
    }







function showMenuText () {} // dummies so we can use the same code as for pickers
function hideMenuText () {}





function wrapToneLettersInBdi() {
    // Select all elements with class "ipa"
    const ipaElements = document.querySelectorAll('.ipa')

    // Regex for one or more tone letter characters or glottal superscript
    const toneSeq = /[\u02E5-\u02E9\u02C0]+/g

    ipaElements.forEach(el => {
        // If this element already contains a <bdi>, skip it entirely
        if (el.querySelector('bdi')) return

        // Replace each sequence with a <bdi> wrapper
        el.innerHTML = el.innerHTML.replace(toneSeq, match => {
            return `<bdi>${match}</bdi>`
            })
        })
    }


    
    
function showUpperCaseRows () {
    const rows = document.querySelectorAll('.soundSummary .uc_row')

    rows.forEach(row => {
        const isHidden = getComputedStyle(row).display === 'none'
        row.style.display = isHidden ? 'table-row' : 'none'
        })
    }








function includeHTML() {  // NOT CURRENTLY IN USE
    // pull external HTML into a location with a data-include attribute
    // the attribute points to the file with the HTML to be included
    // uses XMLHttpRequest instead of fetch, so that local files work
    
  document.querySelectorAll('[data-include]').forEach((el, i) => {
    const file = el.getAttribute('data-include');
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = file;

    iframe.addEventListener('load', () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      el.innerHTML = doc.body.innerHTML;
      iframe.remove(); // clean up
    });

    document.body.appendChild(iframe);
  });
}






function getScriptGroup (charNum, blockfile) {
	// find the name of the script group for the character in charNum
	// codepoint: dec codepoint value
    // blockfile: boolean, determines whether to return the group name or block file name
	// returns: if blockfile not set, the Unicode block name, with spaces converted to _
    //          if blockfile set, the name of the block file under scripts
	//          or, if neither is found, ''
    // global scriptGroups
	
	if(typeof blockfile === 'undefined') { blockfile = false }
    if (blockfile) var field = 3
    else field = 2
    
    // find the script group
	if (charNum < 128) return scriptGroups[1][field].replace(/ /g,'_')
	var i=1
	while ( i<scriptGroups.length && charNum > scriptGroups[i][1] ) { i++ }
    
    // figure out what to return
	if ( i == scriptGroups.length ) return ''
	else { 
        if (blockfile && scriptGroups[i][field]) return scriptGroups[i][field]
        else if (blockfile) return ''
		else return scriptGroups[i][field].replace(/ /g,'_')
		}
	}

