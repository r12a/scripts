function initialiseSummary (base, lang, tableName, dir) {
    window.base = base
	doHeadersFooters(dir)
	//runCharCounts()
    makeTables(lang)
	if (typeof addExamples !== 'undefined') addExamples(lang)
    initialiseShowNames(document, base, 'c')
    document.getElementById('features').innerHTML = makeSidePanel(tableName,"")
    createtoc(3)
	removeEditorNotes()
	addDefinitions()
	if (typeof(contentPrompts) !== 'undefined') setContentPrompts()
	setFindIPA()
	setupBlockLinks()
	setTranslitToggle()
	setCharOnclicks()
	if (typeof reflist !== 'undefined') createReferences(lang)
	//if (typeof reflist !== 'undefined') chooseRelevantRefs()
    }





function setCharOnclicks () {
	// all links with target=c should open descriptions in the panel
	var links = document.querySelectorAll('.codepoint a')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
	}

function setupBlockLinks () {
	// set target attribute for links that point to characters in the block page
	var links = document.querySelectorAll('.codepoint a')
	for (let i=0;i<links.length;i++) if (links[i].target != null) links[i].target = 'c'
	}



function setFindIPA () {
	// makes ipa characters in sounds charts indicate locations they are used
	var listItems = document.querySelectorAll('.ipaTable .ipa, .ipaTable .allophone')
	for (let i=0;i<listItems.length;i++) listItems[i].onclick = findIPA
	var listItems = document.querySelectorAll('.ipaSVG .ipa, .ipaSVG .allophone')
	for (let i=0;i<listItems.length;i++) listItems[i].onclick = findIPA
	}



function shareCodeLinks (charList, script, charApp) {
    // provides some of the repetitive code for listAllIndexCharacters
    
    out = `<td class="indexShareLinks" style="position:relative;" 
    onmouseover="this.lastChild.style.display='block'" 
    onmouseout="this.lastChild.style.display='none'"><img src="../common/icons/transfer_small.png" alt="Send characters." title="Send characters." class="ulink">
    <div class="popup" style="position: absolute; right: 0px; display: none;">
        <div><a href="/scripts/apps/listcategories/?chars=`+charList+`" target="_blank">General Category</a></div>
        <div><a href="/app-analysestring/?chars=`+charList+`" target="_blank">Show details</a></div>
        <div><a href="/uniview?charlist=`+charList+`" target="_blank">Show characters in UniView</a></div>
        <div><a href="/app-listcharacters?chars=`+charList+`" target="_blank">List characters by block</a></div>
        <div><a href="/scripts/fontlist?script=`+script+`&amp;text=`+charList+`" target="_blank">Send to Font lister</a></div>
        <div><a target="_blank" href="/pickers/`+charApp+`/?showFonts=true&amp;text=`+charList+`">Show in character app</a></div></td>`
    return out
}






function listAllIndexCharacters (scriptISO, pickerName) {
    // creates the showStats table
    
    var out = ''
    var list
    
    // find all the characters in the index
    var allItems = ''
    var itemArray = []
    listItems = document.getElementById('index').querySelectorAll('.listItem')
    for (i=0;i<listItems.length;i++) itemArray.push(listItems[i].textContent)
    const uniqueSet = new Set(itemArray)
    allItems = [...uniqueSet].join(' ')
    if (listItems.length !== [...uniqueSet].length) console.log('NOTE: Index contains ',listItems.length,' items, but only ',[...uniqueSet].length,' unique characters.')
    
    //for (i=0;i<listItems.length;i++) allItems += listItems[i].textContent+' '
	out += '<tr><th>All</th><td id="allCharList">'+allItems+'</td><td id="allCharListTotal">'+[...uniqueSet].length+'</td></tr>'
    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td>'
    out += '</tr>'
    
    // find the characters of each type
    list = [...getOrthographyList('.characterBox')]
	out += '<tr><th>Main</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'
    
    fullList = list

    list = [...getOrthographyList('.auxiliaryBox')]
	if (list.length > 0) out += '<tr><th>Infrequent</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>'+ shareCodeLinks(list.join(''),scriptISO,pickerName)+'</tr>'
    
    fullList += list

    list = [...getOrthographyList('.formattingBox')]
	if (list.length > 0) out += '<tr><th>Formatting</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.archaicBox')]
	if (list.length > 0) out += '<tr><th>Archaic</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.foreignBox')]
	if (list.length > 0) out += '<tr><th>Foreign</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.otherBox')]
	if (list.length > 0) out += '<tr><th>Other</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.deprecatedBox')]
	if (list.length > 0) out += '<tr><th>Deprecated</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'
	
	document.getElementById('charCountList').innerHTML = out
    }





function runCharCounts () {
    // creates the showStats table
    
    var out = ''
    
    // find all the characters in the index
    var allItems = ''
    listItems = document.getElementById('index').querySelectorAll('.listItem')
    for (i=0;i<listItems.length;i++) allItems += listItems[i].textContent
	out += '<tr><th>All</th><td id="allCharList">'+allItems+'</td><td id="allCharListTotal">'+allItems.length+'</td></tr>'
    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td></tr>'
    
	out += '<tr><th>Main</th><td id="allCharList">'+getOrthographyList('.characterBox', 'Main')+'</td><td id="allCharListTotal">'+allItems.length+'</td></tr>'
	out += getOrthographyList('.characterBox', 'Main')
	out += runCharCount('.auxiliaryBox', 'Auxiliary')
	out += runCharCount('.formattingBox', 'Formatting')
	out += runCharCount('.archaicBox', 'Archaic')
	out += runCharCount('.foreignBox', 'Foreign')
	out += runCharCount('.otherBox', 'Other')
	out += runCharCount('.deprecatedBox', 'Deprecated')
	
    //out += '<tr><th>&nbsp;</th><td><strong>List by general category:</strong></td><td>&nbsp;</td></tr>'
	//out += runCategoryCharCount('index_letters', 'Letter')
	//out += runCategoryCharCount('index_cchars', 'Marks')
	//out += runCategoryCharCount('index_numbers', 'Numbers')
	//out += runCategoryCharCount('index_punctuation', 'Punctuation')
	//out += runCategoryCharCount('index_symbols', 'Symbols')
	//out += runCategoryCharCount('index_separators', 'Separators')
	
	document.getElementById('charCountList').innerHTML = out
    
    if (document.getElementById('showLinebreaks')) document.getElementById('showLinebreaks').href = '../apps/listlinebreak?chars='+encodeURI(runCharCount('.characterBox', 'index', true) + runCharCount('.auxiliaryBox', 'index', true) + runCharCount('.formattingBox', 'index', true))

    if (document.getElementById('showCategories')) document.getElementById('showCategories').href = '../apps/listcategories?chars='+encodeURI(runCharCount('.characterBox', 'index', true) + runCharCount('.auxiliaryBox', 'index', true) + runCharCount('.formattingBox', 'index', true))

    if (document.getElementById('showBlocks')) document.getElementById('showBlocks').href = '../../app-listcharacters?chars='+encodeURI(runCharCount('.characterBox', 'index', true) + runCharCount('.auxiliaryBox', 'index', true) + runCharCount('.formattingBox', 'index', true))

    if (document.getElementById('showBidiClass')) document.getElementById('showBidiClass').href = '../apps/listbidi?chars='+encodeURI(runCharCount('.characterBox', 'index', true) + runCharCount('.auxiliaryBox', 'index', true) + runCharCount('.formattingBox', 'index', true))

    if (document.getElementById('showIndicSyllables')) document.getElementById('showIndicSyllables').href = '../apps/listindic?chars='+encodeURI(runCharCount('.characterBox', 'index', true) + runCharCount('.auxiliaryBox', 'index', true) + runCharCount('.formattingBox', 'index', true))

	}






function runCategoryCharCount (location, row, raw=false) { 
	if (document.getElementById(location) == null) return
	var charlists
	if (document.getElementById(location)) charlists = document.getElementById(location).querySelectorAll('.characterBox, .auxiliaryBox, .deprecated, .foreign, .archaic')
    //console.log(document.getElementById(location).textContent)
    //console.log('charlists',charlists[0].textContent)
    

    var out = ''
	charlistArray = []
	for (let i=0;i<charlists.length;i++) {
		var charStr = charlists[i].textContent
		charStr = charStr.replace(/␣/g,'')
		var chars = [...charStr]
		for (let c=0;c<chars.length;c++) charlistArray.push(chars[c])
		}
	const uniqueSet = new Set(charlistArray)
	var uniqueArray = [...uniqueSet]
	
	if (raw) out += uniqueArray.toString().replace(/,/g,' ')
    else {
        out += '<tr><th>'+row+'</th>'
        +'<td id="'+row+'CharList">'
        +uniqueArray.toString().replace(/,/g,' ')
        +'</td>'
        +'<td id="'+row+'CharListTotal">'+uniqueArray.length+'</td></tr>'
        }

	return out
	}

 //   <tr><th>Letter</th><td id="letterCharList"></td><td id="letterCharListTotal"></td></tr>





function doHeadersFooters (dir) {
	// adds links to top of document
	// dir is of the form arabic/index or arabic/urdu
	
	if (document.getElementById('versionTop') === null) return
	

	//parse the dir
	var filename = ''
	var directory = ''
	var path = dir.split('/')
	directory = path[0]
	if (path.length === 1) {
		filename = path[0]
		}
	else {
		filename = path[1]
		}
		

	var out = '&bull; recent changes <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages" title="Show commits for the whole scripts repository.">scripts</a>/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'" title="Show commits for scripts/'+directory+'.">'+directory+'</a>'
	if (path.length > 1) out += '/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'/'+filename+'.html" title="Show commits for scripts/'+filename+'.">'+filename+'</a>'
	
	out += ' &bull; leave a <a target="_blank" href="https://github.com/r12a/scripts/issues/new?title=['+dir.replace(/index/,'')+']%20%20BRIEF_TITLE_GOES_HERE&body=%5Bsource%5D%20https%3A%2F%2Fr12a.github.io%2Fscripts%2F'+dir+'%0A%0A" title="Leave a comment.">comment</a>'
	
	document.getElementById('versionTop').innerHTML = out
	
	
	out = ''
	out += 'See <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'">recent changes</a>. &nbsp;&bull;&nbsp; Make a <a href="https://github.com/r12a/scripts/issues/new?title=%5B'+dir+'%5D%20TITLE_GOES_HERE&body=Comment%20on%20http%3A%2F%2Fr12a.github.io%2Fscripts%2F'+directory+'%2F%0A%0A" target="_blank">comment</a>. &nbsp;&bull;&nbsp; Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a>.</span></div>'
	
	
	document.getElementById('version').innerHTML = out
	}




var featureName = { 
	type:"Script type", 
	chars:"Number of characters", 
	cchars:"Combining characters", 
	mcchars:"Multiple combining characters", 
	matras:"Vowel-signs", 
	gpos:"Context-based positioning", 
	cs:"Case distinction", 
	cursive:"Cursive script", 
	gsub:"Contextual shaping", 
	dir:"Text direction", 
	baseline:"Baseline", 
	wordsep:"Word separator", 
	wrap:"Wraps at", 
    hyphenation:"Hyphenation",
	justify:"Justification", 
	digits:"Native digits?", 
	region:"Region" 
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
	if (typeof langs[id] === 'undefined') { console.log('Charuse data not found. Id sent to makeSidePanel was ',id); return }
    
    var letters, marks, punctuation, symbols, others, nummbers, aux, total
    var out, records, fields, values
	
    // get character counts in a way that works around surrogates
	letters = marks = punctuation = symbols = others = numbers = aux = 0
	langs[id].letter ? letters = [...langs[id].letter].length : 0
	langs[id].mark ? marks = [...langs[id].mark].length : 0
	langs[id].punctuation ? punctuation = [...langs[id].punctuation].length : 0
	langs[id].symbol ? symbols = [...langs[id].symbol].length : 0
	//langs[id].other ? others = [...langs[id].other].length : 0
	langs[id].other ? others = langs[id].other.split(' ').length : 0
	langs[id].number ? numbers = [...langs[id].number].length : 0
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

	out += '<tr><th>Other infrequent</th><td>'+aux+'</td></tr>'
	
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
                case 'vs': out += ' vowel signs'; break
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
                case 'sp': out += 'between words'; break
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
	
	langs = {}
	
	return out
	}
	






function makeTables (lang) {
    // create the lists of characters in yellow, etc. boxes

    if (typeof window.spreadsheet == 'undefined') {
		console.log("Spreadsheet undefined.")
		return
		}
    
    // make an object from the spreadsheet
    var temp = window.spreadsheet.split('\n')
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
        node = tables[t]
        bicameral = false
        showFirst = false
       //console.log(node)

// check whether this is an index line
if (node.classList.contains('indexline')) indexline = true
else indexline = false

		// populate the chars array with characters & gather additional info
        //chars = node.dataset.chars.split('␣')
        chars = node.textContent.split('␣')
        if (typeof node.dataset.cols === 'undefined') info = ''
        else info = node.dataset.cols
        if (node.className.includes('bicameral')) bicameral = true // note: phase this out in favour of data-select=last
        else bicameral = false
        if (node.dataset.select && node.dataset.select == 'last') bicameral = true
        else if (node.dataset.select) showFirst = true
        if (node.className.includes('vowelcluster')) vowelcluster = true // this should be phased out
        else vowelcluster = false
        if (node.dataset.ignore) var ignorableChar = node.dataset.ignore.codePointAt(0)
        else ignorableChar = ''
        if (node.dataset.notes) {
            notes = node.dataset.notes.split(',')
            }
        else notes = []
        if (node.dataset.extra) {
            extra = node.dataset.extra.split('␣')
			var extraLang = extra.pop()
            }
        else extra = []
        if (node.dataset.ipa) {
            ipa = node.dataset.ipa.split(',')
            }
        else ipa = []
        if (node.dataset.translit) {
            translit = node.dataset.translit.split('␣')
            }
        else translit = []
        if (node.dataset.links) {
            links = node.dataset.links.split(',')
            }
        else links = []
        out = ''

		// make the summary count link
        if (chars.length > 1) {
            var length = chars.length
            for (let j=0;j<chars.length;j++) if (chars[j] === ' ') length-- // ignore spaces
            out += '<div class="listAll" onClick="listAll(this, \''+lang+'\')">list '
            if (length === 2) out += 'both'
            else out += 'all '+length
            out += '</div>'
            }

		// start building the listArray
        out += '<div class="listArray">'

		// for each item ...
        for (let i=0;i<chars.length;i++) { 
			if (bicameral || showFirst) {
				charList = [... chars[i]]
            	if (bicameral) char = charList[1]
            	else char = charList[0]
				}
            //else char = chars[i].replace(/-|–/g,'')
            else char = chars[i]

            // create an id attribute for the listPairs in the index
            //if ((node.parentNode.parentNode.parentNode && node.parentNode.parentNode.parentNode.id === 'index') || (node.parentNode.parentNode.parentNode.parentNode && node.parentNode.parentNode.parentNode.parentNode.id === 'index')) var indexId = ' id="index'+chars[i]+'"'
            //else indexId = ''
            if (node.closest("#index")) var indexId = ' id="index'+chars[i]+'"'
            else indexId = ''
            
			if (node.dataset.lang) out += '<div class="listPair"'+indexId+'><span class="listItem" lang="'+node.dataset.lang+'">'+chars[i]+'</span>'
            else out += '<div class="listPair"'+indexId+'><span class="listItem" lang="'+lang+'">'+chars[i]+'</span>'

			/*if (node.dataset.lang) out += '<div class="listPair"><span class="listItem" lang="'+node.dataset.lang+'">'+chars[i]+'</span>'
            else out += '<div class="listPair"><span class="listItem" lang="'+lang+'">'+chars[i]+'</span>'*/

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

            /*for (let z=0;z<chars[i].length;z++) {
                var hex = chars[i].codePointAt(z)
                if (ignorableChar && ignorableChar === hex) continue // ignore specified character
                if (vowelcluster && hex === 45) continue // ignore hyphens - this should be phased out
                hex = hex.toString(16).toUpperCase()
                while (hex.length < 4) hex = '0'+hex
                out += hex
                if (chars.length>1 && z<chars.length-1) out += '<br/>'
                }
                out += '</span>'*/

            if (info.includes('ipa')) { 
			//if (window.spreadsheetRows[char]) console.log('ipa',char,window.spreadsheetRows[char][cols.ipaLoc])
                if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ipaLoc]) ch = window.spreadsheetRows[char][cols.ipaLoc].toLowerCase()
                else ch = '&nbsp;'
                if (ch === '&nbsp;') out += '<span>&nbsp;</span>'
                else out += '<span class="listIPA">'+ch.replace(/ /g,' ')+'</span>'
                //else out += '<span class="listIPA">'+ch.replace(/ /g,'<i>~</i>')+'</span>'
                }

            if (ipa.length > 0) {
                if (ipa[i]) out += '<span class="listIPA">'+ipa[i]+'</span>'
                else out += ' '
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
                    var hex = charList[z].codePointAt(0)
                    if (ignorableChar && ignorableChar === hex) continue // ignore specified character
                    if (vowelcluster && hex === 45) continue // ignore hyphens - this should be phased out
                    hex = hex.toString(16).toUpperCase()
                    while (hex.length < 4) hex = '0'+hex

                    out += '<span class="listUnumCP" onclick="showCharDetailsInPanel(event)">'+hex+'</span>'
    /* remove in favour of displaying data in panel
                    if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.block]) out += '<a href="/scripts/'+window.spreadsheetRows[char][cols.block]+'/block#char'+hex+'" target="c">'
                    out += hex
                    if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.block]) out += '</a>'
                    */
                    if (charList.length>1 && z<charList.length-1) out += '<br/>'
                    }
                    out += '</span>'
                    }


			// add any links
            if (links.length > 0) {
                if (links[i]) {
					var linkList = links[i].split(' ')
                    if (indexline) out += '<div class="index_details">'
                    if (window.spreadsheetRows[char]) uname = window.spreadsheetRows[char][cols.ucsName].replace(/U\+[^:]+: /,'')
                    else uname = "NAME UNKNOWN"
                    if (indexline) out += '<span class="index_uname">'+uname+'</span>'
                    //if (indexline) out += '<span class="index_uname">'+window.spreadsheetRows[char][cols.ucsName].replace(/U\+[^:]+: /,'')+'</span>'
					out += '<span class="links">'
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
    }





//replaceStuff('Georgian', 'otherlanguages', otherlanguages, '', 'ka', '', cols, false)
	


function replaceStuff (language, langClass, chars, bicameral, lang, dir, cols, showShape) {
    // create the lists of characters in yellow boxes

    //if (typeof chars == 'undefined') return
    console.log(cols)
	
    // make an object from the spreadsheet data
    var temp = chars.split('\n')
    var spreadsheetRows = {}
    for (var x=0; x<temp.length; x++) {
        if (temp[x].trim() == '') continue
        var items = temp[x].split('\t')
        if (items[0] === '') continue

        spreadsheetRows[items[0]] = ['0']
        for (let i=1;i<items.length;i++) spreadsheetRows[items[0]].push(items[i])
        }
    console.log(spreadsheetRows)


    var tables, node, chars, info, bicameral, out, char
    
    tables = document.querySelectorAll(langClass)
	console.log('table length', tables.length, langClass)

    for (let t=0;t<tables.length;t++) {
        node = tables[t]
        bicameral = false
        showFirst = false
       //console.log(node)

        //chars = node.dataset.chars.split('␣')
        chars = node.textContent.split('␣')
        info = node.dataset.cols
        if (node.className.includes('bicameral')) bicameral = true
        else bicameral = false
        if (node.dataset.select && node.dataset.select == 'last') bicameral = true
        else if (node.dataset.select) showFirst = true
        if (node.className.includes('vowelcluster')) vowelcluster = true // this should be phased out
        else vowelcluster = false
        if (node.dataset.ignore) var ignorableChar = node.dataset.ignore.codePointAt(0)
        else ignorableChar = ''
        if (node.dataset.notes) {
            notes = node.dataset.notes.split(',')
            }
        else notes = []
        if (node.dataset.extra) {
            extra = node.dataset.extra.split('␣')
			var extraLang = extra.pop()
            }
        else extra = []
        if (node.dataset.ipa) {
            ipa = node.dataset.ipa.split(',')
            }
        else ipa = []
        if (node.dataset.translit) {
            translit = node.dataset.translit.split('␣')
            }
        else translit = []
        if (node.dataset.links) {
            links = node.dataset.links.split(',')
            }
        else links = []
        out = ''

        if (chars.length > 1) {
            var length = chars.length
            for (let j=0;j<chars.length;j++) if (chars[j] === ' ') length-- // ignore spaces
            out += '<div class="listAll" onClick="listAll(this, \''+lang+'\')">list '
            if (length === 2) out += 'both'
            else out += 'all '+length
            out += '</div>'
            }

        out += '<div class="listArray">'

        for (let i=0;i<chars.length;i++) {
            if (bicameral) char = chars[i][chars[i].length-1]
            else if (showFirst) char = chars[i][0]
            else char = chars[i]
            
            out += '<div class="listPair"><span class="listItem" lang="'+lang+'">'+chars[i]+'</span>'

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

			
            // print the code point values
            out += '<span class="listUnum">'
            for (let z=0;z<chars[i].length;z++) {
                var hex = chars[i].codePointAt(z)
                if (ignorableChar && ignorableChar === hex) continue // ignore specified character
                if (vowelcluster && hex === 45) continue // ignore hyphens - this should be phased out
                hex = hex.toString(16).toUpperCase()
                while (hex.length < 4) hex = '0'+hex
                out += hex
                if (chars.length>1 && z<chars.length-1) out += '<br/>'
                }
                out += '</span>'

            if (info.includes('ipa')) {
                if (spreadsheetRows[char] && spreadsheetRows[char][cols.ipaLoc]) ch = spreadsheetRows[char][cols.ipaLoc]
                else ch = '&nbsp;'
                if (ch === '&nbsp;') out += '<span>&nbsp;</span>'
                else out += '<span class="listIPA">'+ch+'</span>'
                }

            if (ipa.length > 0) {
                if (ipa[i]) out += '<span class="listIPA">'+ipa[i]+'</span>'
                else out += ' '
                }

            if (info.includes('trans')) {
                if (spreadsheetRows[char] && spreadsheetRows[char][cols.transLoc]) ch = spreadsheetRows[char][cols.transLoc]
                else ch = '&nbsp;'
                out += '<span class="listTrans">'+ch+'</span>'
                }

             if (translit.length > 0) {
                if (translit[i]) out += '<span class="listTrans">'+translit[i]+'</span>'
                else out += ' '
                }

           if (info.includes('transc')) {
                if (spreadsheetRows[char] && spreadsheetRows[char][cols.transcription]) ch = spreadsheetRows[char][cols.transcription]
                else ch = '&nbsp;'
                out += '<span class="listTransc">'+ch+'</span>'
                }

            if (info.includes('trans2')) {
                if (spreadsheetRows[char] && spreadsheetRows[char][cols.transcription2]) ch = spreadsheetRows[char][cols.transcription2]
                else ch = '&nbsp;'
                out += '<span class="listTrans2">'+ch+'</span>'
                }

            if (info.includes('meaning')) {
                if (spreadsheetRows[char] && spreadsheetRows[char][cols.meaning]) ch = spreadsheetRows[char][cols.meaning]
                else ch = '&nbsp;'
                out += '<span class="listMeaning">'+ch+'</span>'
                }

            if (notes.length > 0) {
                if (notes[i]) ch = notes[i]
                else ch = '&nbsp;'
                out += '<span class="listMeaning">'+ch+'</span>'
                }
/*
            if (links.length > 0) {
                if (links[i]) out += '<a href="'+links[i]+'">link</a>'
                else out += '<span>&nbsp;</span>'
                }
*/
            if (links.length > 0) {
                if (links[i]) out += '<a href="'+links[i]+'"><img src="../../shared/images/info.png" alt="More information."></a>'
                else out += '<span>&nbsp;</span>'
                }

            out += '</div>'
            }
        out += '</div>'

        node.innerHTML = out
        }
    }






function clearExamples () {
	examples = document.getElementById('freeText').getElementsByTagName('span');
	for (var i=0; i<examples.length; i++) {
		examples[i].style.color = 'black';
		}
	
	var notes = document.getElementById('notes').getElementsByTagName('div');
	for (var i=0; i<notes.length; i++) { notes[i].style.display = 'none'; }
	}
	
function highlightExample (text) {
	document.getElementById(text).style.color = 'red';
	}


isJustified = false;

function toggleJustification (sample, justifyButton) { 
	if (sample.style.textAlign === 'justify') { 
		sample.style.textAlign = 'start'
		justifyButton.textContent = ' Justify '
		}
	else {
		sample.style.textAlign = 'justify'
		justifyButton.textContent = ' Remove justification '
		}
	}


function toggleDirection (sample, toggleButton) { 
	if (sample.className === 'set_horizontal') { 
		sample.className = 'set_vertical_rl'
		justifyButton.textContent = ' Set horizontally '
		}
	else {
		sample.className = 'set_horizontal'
		justifyButton.textContent = ' Set vertically '
		}
	}


var currDirection = 'horizontal';



function showFeatureInfo (examples, featureInfoId) {
	// causes the page to display the info for the feature you clicked on
	// highlights, comma-separated string of example ids
	// featureInfo, string, id of the feature description block to show
	clearExamples()
	if (examples != '') {
		exampleIds = examples.split(',')
		for (var i=0;i<exampleIds.length;i++) {
			highlightExample(exampleIds[i])
			}
		}
	if (featureInfoId != '') {
		document.getElementById(featureInfoId).style.display = 'block'
		document.location = '#'+featureInfoId
		}
	}

function showAllFeatureInfo () {
	// causes the page to display all the info in note form
	var notes = document.querySelectorAll('.note')
	for (var i=0;i<notes.length;i++) {
		notes[i].style.display = 'block'
		}
	}



function initialiseShowNames (node, base, target) {
// add function to all images with class ex
// function will display character by character names for example in the panel
// base (string), path for link to character detail

// this extends the function in show_codepoints.js to add support for listItems

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') { base = ''; }
	if(typeof target === 'undefined') { target = ''; } 
	
	var examples = node.querySelectorAll('.ex')
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
		//listItems[i].addEventListener('click', showCharDetailsInPanel)
		//listItems[i].addEventListener('mouseover', showCharDetailsInPanel)
		listItems[i].addEventListener('mouseover', showCharDetailsEvent)
		}
	
	var lists = document.querySelectorAll(".exlist")
	for (let i=0;i<lists.length;i++) lists[i].addEventListener('click', showCharDetailsEvent)
	}






function showCharDetailsEvent (evt) {
	if (typeof charDetails === 'undefined') return

	if (evt.type === 'mouseover' && document.getElementById('showDetailOnMouseover').checked != true) return
	
	table = evt.target.parentNode.parentNode.parentNode.querySelector('table')
    displayedItem = ''
    if (table !== null) displayedItem = table.querySelector('.ex')
    if (displayedItem) displayedItem = displayedItem.textContent
    
    // if clicked item and table are about the same thing, just close table
    if (displayedItem && displayedItem === evt.target.textContent) { 
        console.log("found",displayedItem)
        table.parentNode.removeChild(table)
        return
        }
    
    // clear any existing table
	if (table !== null) table.parentNode.removeChild(table)
	
	var table = document.createElement('table')
	table.className = 'charDetails'
	table.innerHTML = makeDetails(evt.target.textContent, evt.target.lang)
	evt.target.parentNode.parentNode.parentNode.appendChild(table)
	
	
	addExamples(evt.target.lang)
	autoTransliterate(evt.target.lang)
	convertTranscriptionData(evt.target)
	setFootnoteRefs()
    var links = table.querySelectorAll('.codepoint a')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
    initialiseShowNames(table)
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


function setFigureRefs () {
    // looks for inline tags with class .figref, takes the textContent and replaces it with the number of the figure
    // textConten should be the id of the figure
    // only works for figures with figcaption (to screen out character lists)
    
    var figrefs = {}
    var figures = document.querySelectorAll('figcaption')
    for (let i=0;i<figures.length;i++) {
        //console.log(figures[i].textContent)
        if (figures[i] && figures[i].parentNode.id) {
            if (figrefs[figures[i].parentNode.id]) {}
            else figrefs[figures[i].parentNode.id] = i+1
            //console.log(figures[i].textContent, i+1)
            }
        }

    var figrefitems = document.querySelectorAll('.figref')
    for (let i=0;i<figrefitems.length;i++) {
        let id = figrefitems[i].textContent
        if (figrefs[id]) figrefitems[i].textContent = 'Figure '+figrefs[id]
        }
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

//<div class="listPair"><span class="listItem" lang="ber">ⵓ</span><span class="listTrans">u</span><span class="listIPA">ʊ</span></div>


function setGeneralFont (fontname, size, language) {
	if (language === '') return
	var langtags = language.split(',')
	var searchstr = ''
	if (langtags.length === 1) searchstr = '*[lang ="'+language+'"]'
	else {
		searchstr = '*[lang ="'+langtags[0]+'"]'
		for (var i=1;i<langtags.length;i++) searchstr += ',*[lang ="'+langtags[i]+'"]'
		}
	console.log(searchstr)
	var examples = document.querySelectorAll(searchstr)
	for (var e=0;e<examples.length;e++) {  
		examples[e].style.fontFamily = fontname
		examples[e].style.fontSize = size
		}
	}






function runCharCount (type, location, raw=false) { 
	//if (document.getElementById(location) == null) return
	var charlists
	if (document.getElementById('index')) charlists = document.getElementById('index').querySelectorAll(type)
	else charlists = document.querySelectorAll(type)
	var out = ''
	charlistArray = []
	for (let i=0;i<charlists.length;i++) {
		var charStr = charlists[i].textContent
		charStr = charStr.replace(/␣/g,'')
		var chars = [...charStr]
		for (let c=0;c<chars.length;c++) charlistArray.push(chars[c])
		}
	const uniqueSet = new Set(charlistArray)
	var uniqueArray = [...uniqueSet]
	
	if (raw) out += uniqueArray.toString().replace(/,/g,' ')
    else {
        out += '<tr><th>'+location+'</th>'
        +'<td id="'+location+'CharList">'
        +uniqueArray.toString().replace(/,/g,' ')
        +'</td>'
        +'<td id="'+location+'CharListTotal">'+uniqueArray.length+'</td></tr>'
        }

	return out
	}


function getOrthographyList (type, location, spaced=false) {
    // this is a modified version of runCharCount, adapted to harvest characters after the 
    // page has been rendered, and used by the links in the Basic Summary section on click
    // it assumes the presence of #index_details
	var charlists, out
	if (document.getElementById('index_details') == null) {
        alert('No #index_details element (in getOrthographyList)')
        return
        }
    else charlists = document.querySelectorAll('#index_details '+type+' .listItem')
    var chars = ''
	for (let i=0;i<charlists.length;i++) chars += charlists[i].textContent
    charlistArray = [...chars]
	const uniqueSet = new Set(charlistArray)
	var uniqueArray = [...uniqueSet]
	
    if (spaced) out = uniqueArray.toString().replace(/,/g,' ')
	else out = uniqueArray.toString().replace(/,/g,'')
    return out
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
    charlistArray = [...chars]
	const uniqueSet = new Set(charlistArray)
	var uniqueArray = [...uniqueSet]
	
    if (spaced) out = uniqueArray.toString().replace(/,/g,' ')
	else out = uniqueArray.toString().replace(/,/g,'')
    return out
	}











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
		var listPhones = listItems[i].textContent.split(' ')
		for (let p=0;p<listPhones.length;p++) {
			//listItems[i].style.backgroundColor = 'transparent'
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
		var out = counter+' matches found in these sections: '
		for (let i=0;i<leanLinks.length;i++) out += '<a href="#'+leanLinks[i]+'">'+leanLinks[i]+'</a> '
		document.getElementById('phoneLinks').style.display = 'block'
		document.getElementById('phoneLinks').innerHTML = out+' &nbsp;&nbsp;<span style="cursor:pointer" onclick="this.parentNode.style.display = \'none\'">X</span>&nbsp;&nbsp;'
		}
	else {
		if (counter > 0) alert(counter+' matches found in these sections: '+leanLinks+'.')
		else alert('No matches found.')
		}
	}


function copyToClipboard (node) {
	var oldContent = node.textContent
	node.textContent=node.textContent.replace(/\u200B/g,'')
	node.contentEditable=true
	node.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	node.contentEditable=false
	node.textContent=oldContent
	}
	


function showTransliterations (yes) {
	if (! yes) {
		var nodes = document.querySelectorAll('.charExample .trans')
		for (let n=0;n<nodes.length;n++) nodes[n].style.display = 'none'
		}
	else {
		var nodes = document.querySelectorAll('.charExample .trans')
		for (let n=0;n<nodes.length;n++) nodes[n].style.display = 'inline'
		}
	}



function setTranslitToggle () {
	// adds checkboxes and links to the fixed position selector
	
	var checkboxList = document.getElementById('showTranscriptions')
	if (checkboxList === null) {
		console.log("Couldn't find sliding checkbox!")
		return
		}
	// add translit toggle
	var div = document.createElement('div')
	div.id = 'translitToggle'
	var label = document.createElement('label')
	var input = document.createElement('input')
	input.type = 'checkbox'
	label.appendChild(document.createTextNode('Show transliterations '))
	label.appendChild(input)
	label.onclick = showTransliterationsEvt
	div.appendChild(label)
	checkboxList.appendChild(div)

	// add detail mouseover toggle
	div = document.createElement('div')
	div.id = 'showDetailType'
	label = document.createElement('label')
	input = document.createElement('input')
	input.type = 'checkbox'
	input.checked = true
	input.id = 'showDetailOnMouseover'
	label.appendChild(document.createTextNode('Detail on mouseover '))
	label.appendChild(input)
	//label.onclick = showTransliterationsEvt
	div.appendChild(label)
	checkboxList.appendChild(div)

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
	}

function showTransliterationsEvt (evt) { 
	showTransliterations(evt.target.checked )
	}






// MAKE INDEX DATA
index = {}

function makeIndexObject () {
    var charArray = []
	chars = document.querySelectorAll('.codepoint, .listItem')
	for (i=0;i<chars.length;i++) {
        if (chars[i].textContent.trim() === '') continue
        if (chars[i].classList.contains('noindex') || chars[i].parentNode.parentNode.parentNode.classList.contains('noindex')) continue
        
        console.log('Processing:',chars[i].textContent)
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
	console.log('charArray',charArray)

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
	console.log('index',index)
    
    // sort the allchars string
    sortedAllChars = [...allchars].sort()
    allchars = sortedAllChars.join('')
	document.getElementById('allchars').value = allchars
    
    // drop lists of characters into the right form fields
    for (entry in index) {
        if (index[entry].status) {
            if (index[entry].status.includes('character')) document.getElementById('mainIndexList').value += entry
            if (index[entry].status.includes('aux')) document.getElementById('auxIndexList').value += entry
            if (index[entry].status.includes('archaic')) document.getElementById('archaicIndexList').value += entry
            if (index[entry].status.includes('deprecated')) document.getElementById('deprecatedIndexList').value += entry
            if (index[entry].status.includes('other')) document.getElementById('otherIndexList').value += entry
            }
        else document.getElementById('unknownIndexList').value += entry
        }
    
    
    
    
	}






function makeMarkup () {

	charList = document.getElementById('in').value
	charList = charList.replace(/ /g,'')
	chars = [...charList]
    type = index[chars[0]].status
	out = '<figure class="'+type+'Box auto"  data-cols="" data-links="'
	for (i=0;i<chars.length;i++) {
		out += index[chars[i]].section+','
		}
	out +='" data-notes="'
 	for (i=0;i<chars.length;i++) {
		out += index[chars[i]].sectionName+','
		}
    out += '">'+chars.join('␣')+'</figure>'
	document.getElementById('out').value = out
	document.getElementById('out').select()
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

    var out = ''
    var indexList = document.getElementById(sectionName)
    //var indexSections = indexList.querySelectorAll('section')
    var indexFigures = indexList.querySelectorAll('figure')
    for (i=0;i<indexFigures.length;i++) {
        var listItems = indexFigures[i].querySelectorAll('.listItem')
        var allChars = ''
        for (j=0;j<listItems.length;j++) allChars += listItems[j].textContent
        console.log('heading',indexFigures[i].parentNode.id, 'type', indexFigures[i].className.replace(/ auto/,''), 'content', allChars)
        
        allCharsArray = [...allChars]
        out += '<figure class="'+indexFigures[i].className+'" data-cols="" data-links="'
        for (k=0;k<allCharsArray.length;k++) console.log(allCharsArray[k])
        for (k=0;k<allCharsArray.length;k++) {
            if (typeof index[allCharsArray[k]] === 'undefined') console.log('NOT FOUND:',allCharsArray[k])
            else out += index[allCharsArray[k]].section + ','
            }
        out += '">'
        for (k=0;k<allCharsArray.length;k++) {
            out += allCharsArray[k]
            if (k<allCharsArray.length-1) out += '␣'
            }
        out += '</figure>\n'
        }
    
	document.getElementById('out').value = out
	document.getElementById('out').select()
	}













function checkParameters () {
    // check for parameters and take appropriate action
    parameters = location.search.split('&')
    parameters[0] = parameters[0].substring(1)
    for (var p=0;p<parameters.length;p++) {  
        pairs = parameters[p].split('=')
        
        // open index and jump to character location
        if (pairs[0] === 'index') { if (pairs[1]) {
            indexSections = document.getElementById('index').querySelectorAll('details')
            console.log('indexSections',indexSections.length)
            for (i=0;i<indexSections.length;i++) indexSections[i].open = true
            //document.getElementById('index_details').open = true
            document.location = '#index'+pairs[1]
            } }
        
        // turn off mouseover reveal of list boxes
        if (pairs[0] === 'nomouseover') {
            document.getElementById('showDetailOnMouseover').checked = false
            console.log('Detail on mouseover is off.')
            }
        }
    }


