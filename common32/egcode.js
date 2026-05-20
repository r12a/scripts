/* jshint strict: false */
/* globals autoExpandExamples, egList */




window.autoExpandExamples = {}
// this will contain the terms information stored in xxx-examples.js for all languages
// it has to be declared before that page is loaded, so that the .langFilter item can be attached
var egList = {}







function showCharacterDetails (evt) {
	console.log(`showCharacterDetails (${ evt })
    Open an article to display character notes details.
    Called by ${ getCallerName() }.`)
	//if (evt.target.closest('.noexpansion')) return
    
	if (typeof charDetails === 'undefined') return   // charDetails is defined in xx-details.js
    
    // don't show details for section character lists in right margin
    if (evt.target.closest('.sectionCharacterList')) return 
    
    // get the character(s)
    if (evt.target.closest('.soundSummary') || evt.target.closest('.listItem')) chars = evt.target.textContent
    else {
        const codepointLocn = evt.target.closest('.codepoint')
        const imageLocn = codepointLocn.querySelector('img') ? codepointLocn.querySelector('img') : null
        if (imageLocn) chars = imageLocn.alt.trim()
        else chars = codepointLocn.querySelector('bdi').textContent.trim()
        }
    console.log('**** chars',chars)
    
    // decide whether to replace existing details or add to them (for listItems)
    const replaceLast = evt.target.closest('.listArray') ? true : false
    
    // get the insertion point
    let insertPoint = ''
    if (evt.target.closest('.soundSummary')) insertPoint = evt.target.closest('.soundSummary') // summary tables
    else if (evt.target.closest('.listArray')) insertPoint = evt.target.closest('.listArray') // characterboxes
    else if (evt.target.closest('.cased')) insertPoint = evt.target.closest('.cased')
    else if (evt.target.closest('p.glyphs')) insertPoint = evt.target.closest('p.glyphs') // map tables
    else insertPoint = evt.target.closest('p, table, div, li')
    console.log('#### insertPoint', insertPoint)
    console.log('**** insertPoint:',insertPoint.tagName, typeof insertPoint.tagName, insertPoint.title)

    // if this article is already open, close it
    const ptr = insertPoint.nextElementSibling
    //console.log('**** ptr:',ptr.tagName, typeof ptr.tagName, ptr.title)
    if (ptr !== null && ptr.tagName.toLowerCase() === 'article' && ptr.title.trim() === chars) {
        ptr.remove()
        return
        }
    if (replaceLast && ptr !== null && ptr.tagName.toLowerCase() === 'article') {
        ptr.remove()
        }


    // create the article element & table outer
    const articleNode = document.createElement('article')
    articleNode.title = chars

	const tableNode = document.createElement('table')
	tableNode.className = 'panel'
    
	tableNode.innerHTML = makeCharArticleList(chars.replace(/[◌-]/g,''), window.langTag)
    
	articleNode.appendChild(tableNode)
    insertPoint.after(articleNode)

    // post-processing
	expandChMarkup()
	expandEgMarkup(window.langTag)
	setFootnoteRefs()
	wrapToneLettersInBdi()
    
    setOnclicks()

	return false
    }






function expandEgMarkup (langFilter) {
    console.log(`>>> expandEgMarkup(${ langFilter })
    Convert all .eg items to full markup.
    Called by ${ getCallerName() }.`)
    /*  read the data into egList, in which each record has
	example, meaning, transcription?, alt?, narrow transcription, wiktionary
	alt is generally a vowelled form for abjads, an alternative spelling, or alternative script
    
    if the classList doesn't contain any of ipa, transc, narrow, meaning:
    output will include ipa, meaning by default
    if there's no ipa but there is a transc, that will be output
    
    otherwise, output will include only those items called for from the classList
    ipa: the ipa transcription
    narrow:a narrow phonetic transcription (some term lists use that column for notes)
    transc: the default latin transcription
    meaning: the meaning
    
    any of the above can be included together or can be listed alone
        
    langFilter, class name used to select blocks to add examples to
    
    [GLOBALS]
    autoExpandExamples, obj, set above, then populated under .<langFiler> in xx-examples.js; holds all terms
    
    [CLASSES]
    The calling element can have class names with the following meanings:
    inline      don't make into a separate, large text block
    transc      used to force display of the transcription rather than the IPA
    alt         displays the IPA/transcription with the special transcription (eg. vowelled version or other orthography than Latin)
    narrow      displays the narrow IPA if there is one in the penultimate field
    vertical    applies a vertical writing mode, eg. for Mongolian
    
    [LOCALS]
    egArray, array, built from autoExpandExamples
    egList, object, list of terms filtered out by langFilter with native word as key
    selector, a selector for searching for letter blocks
    nodes, node array, example nodes to expand
    out, str, the generated markup
    ipa, str, an IPA value
    transcription, str, a transcription value
    i, n, counters
    temp, temptemp
    */
    

    // this removes the requirement to provide lang attr with eg markup
    // by defaulting to langTag set in xx-globals
	if (typeof langFilter === 'undefined') langFilter = window.langTag

    // ensure data exists
    if (typeof autoExpandExamples[langFilter] === 'undefined') {
		console.log('%cautoExpandExamples missing for '+langFilter+'  (expandEgMarkup). Check the language setting on the link element.', 'color:red;font-weight:bold')
        alert('See error in console.log.')
        return
        }


    // BUILD LOOKUP TABLE
    // get lines from the xx-terms.js file
    const egArray = autoExpandExamples[langFilter].split('\n')
    
    // get list of terms with native word as key
    const egList = {}
	for (let line of egArray) {
        if (!line) continue
        const [term] = line.split('|')
        egList[term] = line
        }



    // FIND EG NODES
	const selector = `.eg[lang=${ langFilter }]`
    const exampleNodeList = document.querySelectorAll(selector)
	// console.log(exampleNodeList.length,' example nodes to expand')
    
    // example of raw data: 
    // 𑻣𑻵𑻣𑻵|mute, dumb|ˈpe,pe|pepe|ᨄᨙᨄᨙ|ˈpʰɛ.pʰɛ|pepe
    // term|meaning|ipa|transcription|altTranscription|notes|sAlt
    const NATIVE = 0
    const MEANING = 1
    const IPA = 2
	const TRANSCRIPTION = 3
    const ALT = 4
	const NOTES = 5
    const WALT = 6

	
    for (let node of exampleNodeList) {
        // example of raw data: 
        // 𑻣𑻵𑻣𑻵|mute, dumb|ˈpe,pe|pepe|ᨄᨙᨄᨙ|ˈpʰɛ.pʰɛ|pepe
        // term|meaning|ipa|transcription|alt|narrow transc/notes|source

		const term = node.textContent
		if (!egList[term]) continue

		// remove ipa indicators
        const raw = egList[term].replace(/␣/g, '')
        
        // get the available data
		const termdata = raw.split('|')
		const meaning = termdata[MEANING] || ''
		const ipa = termdata[IPA] || ''
		const transc = termdata[TRANSCRIPTION] || ''
		const alt = termdata[ALT] || ''
		const narrow = termdata[NOTES] || ''
        // choose the source pointer field depending on whether alt has been used
		const source = termdata.length === 7 ? termdata[WALT] : termdata[NOTES]



		const nodeClassList = node.classList
		const nodeLang = node.lang
		const nodeDir = node.dir

		const wantsIPA = nodeClassList.contains('ipa')
		const wantsTransc = nodeClassList.contains('transc')
		const wantsNarrow = nodeClassList.contains('narrow')
		const wantsMeaning = nodeClassList.contains('meaning')
		const wantsInline = nodeClassList.contains('inline')
		const wantsAlt = nodeClassList.contains('alt')
		const wantsVertical = nodeClassList.contains('vertical')
		const wantsShort = nodeClassList.contains('short')

		const noExplicitFields = !wantsIPA && !wantsTransc && !wantsNarrow && !wantsMeaning

		const cleanIPA = ipa
			.replace(/,/g, '')
			.replace(/–/g, '')
			.replace(/‹/g, '')
			.replace(/›/g, '')
    
        //const onclickText = `  onclick="showCharDetailsInline('${ term }', '${ nodeLang }', '${ ipa }', this)"`

		// build wrapper
		let out = `<span class="charExample${ wantsInline ? ' inline' : '' }" translate="no"`
		if (nodeDir === 'rtl') out += ' dir="rtl"'
		out += '>'

		// main example
		out += `<bdi class="ex${ wantsVertical ? ' vertical' : '' }" lang="${ nodeLang }" data-ipa="${ ipa }"`
		if (nodeDir === 'rtl') out += ' dir="rtl"'
		out += '>'
		out += term
		out += '</bdi>'


		// alternate form
		if (wantsAlt && alt) {
            out += ` &nbsp;≡&nbsp; <bdi class="ex${ wantsVertical ? ' vertical' : '' }" lang="${ nodeLang }" data-ipa="${ ipa }"`
            if (nodeDir === 'rtl') out += ' dir="rtl"'
            out += '>'
            out += alt
            out += '</bdi>'
            }

        // short mode: no metadata
        if (wantsShort) {
            out += '</span>'
            node.outerHTML = out
            continue
            }

        // default behaviour: IPA or transc + meaning
        if (noExplicitFields) {
            if (ipa) out += ` <bdi class="ipa">${ cleanIPA }</bdi>`
            else if (transc) {
                out += ` <bdi class="transc"`
                if (nodeDir === 'rtl') out += ' dir="rtl"'
                out += `>${ transc }</bdi>`
                }
            if (meaning) out += ` <bdi class="meaning">${ meaning }</bdi>`
            out += '</span>'
            node.outerHTML = out
            continue
            }

		// explicit field selection
        else {
            if (wantsIPA) out += ` <bdi class="ipa">${ cleanIPA }</bdi>`

            if (wantsTransc) {
                out += ` <bdi class="transc"`
                if (nodeDir === 'rtl') out += ' dir="rtl"'
                out += `>${ transc }</bdi>`
                }

            if (wantsNarrow) out += ` <bdi class="ipa narrow">${ narrow }</bdi>`

            if (wantsMeaning && meaning)
                out += ` <bdi class="meaning">${ meaning }</bdi>`

            out += '</span>'
            node.outerHTML = out
            }
        }

    setOnclicks()
    
    
    // update transliterations if needed  DO WE NEED THIS ??
    if (typeof showTransliterations !== 'undefined')
    showTransliterations(document.getElementById('translitToggleCheckbox').checked)
	}







function makeExampleArticle (evt) {   // chars, clang, ipa, node
    // open an article window after an example and fill it with character details
    //console.log(`showCharDetailsInline (\n\tchars ${ chars }\n\tclang ${ clang }\n\tipa ${ ipa }\n\tnode ${ node } )`)
    console.log(`makeExampleArticle ( ${ evt }\ )\n\tOpen an article window after an example and fill it with character details`)

	if (typeof charDetails === 'undefined') return  // PROBABLY DON'T NEED THIS

    const node = evt.target
    const clang = evt.target.lang
    const ipa = evt.target.dataset.ipa
    const chars = evt.target.textContent

    // get the insertion point
    //if (node.closest('figure')) insertPoint = node.closest('figure')
    //else 
    insertPoint = node.closest('p, table, div, li')
    console.log('*** Insertpoint', insertPoint)
    
    // if this article is already open, close it
    const ptr = insertPoint.nextElementSibling
    if (ptr !== null && ptr.tagName === 'ARTICLE' && ptr.title === chars) {
        ptr.remove()
        return
        }

    // create the article element & table outer
    const articleNode = document.createElement('article')
    articleNode.title = chars
    
	const tableNode = document.createElement('table')
	tableNode.className = 'panel'
    
	tableNode.innerHTML = makeExampleArticleDetails(chars, ipa, clang)
    
	articleNode.appendChild(tableNode)
    insertPoint.after(articleNode)
	
    // post-processing
	expandChMarkup()
	expandEgMarkup(clang)
	setFootnoteRefs()
    wrapToneLettersInBdi()
    
    setOnclicks()
    
	return false
	}








function makeExampleArticleDetails (chars, ipa, clang) {
    console.log(`>> makeExampleArticleDetails(\n\tchars ${ chars }\n\tclang ${ clang }\n\tipa ${ ipa })\n\tDisplay characters in an example in an article`)
    // called from showCharDetailsInline to build internal details of an article
    // an 'article' is something displayed after an example to give details of composition
    
    //console.log('makeExampleArticleDetails (chars=',chars, 'clang=',clang, 'base=',base, 'target=', target, 'panel=',panel, 'list=',list, 'translit=',translit, 'ipa=',ipa,')\n\tDisplay characters in an example (like in the panel)')
    // chars (string), alt text of example
    // clang (string), lang attribute value of example img
    // global charData pickerDir

    // to show per-grapheme ipa the ipa transcriptions should have a comma as grapheme separator (and syllables should be separated by '.'). Unpronounced segments are represented by – (en dash).  Monosyllabic words don't need any extra stuff.

	  
    
    let out = '<tr>'
    
    // close button
    out += `<th class="cdChar" onclick="this.closest('article').remove()"><span class="exCharClose">X</span></th>`
    
    
    // left column links
    out += `<td class="cData">`
    out += `<div class="notesLink">`
    
    out += `<p><a href="javascript:void(0)" onclick="copyPanelList(); return false;" style="cursor:copy;">Copy list</a>`
    out += `</p>`
    
    out += `<p><a href="javascript:void(0)" onclick="openExportWindow('../../app-analysestring/index.html?chars=${ chars }'); return false;">Details</a>`
    out += `</p>`
    
    out += `<p><a href="javascript:void(0)" onclick="openExportWindow('../../uniview/index.html?charlist=${ chars }')">UniView</a>`
    out += `</p>`
    
    out += `<p><a href="javascript:void(0)" onclick="openExportWindow('../../scripts/apps/graphemes/index.html?gc=${ chars }')">Graphemes</a>`
    out += `</p>`
    
    // add a link to the _terms page
    //const fragid = '#'+window.languageName
    const url = `${ window.langTag }_terms`
    if (typeof window.removeVowels === 'function') chars = removeVowels(chars)
    out += `<p><a href="javascript:void(0)" onclick="openExportWindow('${ url }.html?q=${ chars }')">Term list</a>`
    out += `</p>`

    out += `</div>`



    // put graphemes and ipa into graphemeArray and ipaArray
    // IPA data - should be pre-separated for graphemes by commas
    if (typeof ipa === 'string' && ipa !== '') ipaArray = ipa.split(',')
    else ipaArray = []
    
	// add the example to the panel as a title
    const charArray = [...chars]
    const graphemeArray = []
    let ptr = -1
    
    // segment the example text - use window.marks rather than regex because
    // we may be dealing with scripts not yet in Unicode or not known by JS
    for (var c=0;c<charArray.length;c++) {
        const ch = charArray[c]
        if (window.marks && window.marks.has(ch) && c !== 0) graphemeArray[ptr] += ch
        else {
            ptr++
            graphemeArray[ptr] = ch
            }
        }

    // transliteration
	const transcriptionArray = graphemeArray.map(g => transliteratePanel(g, clang))

        console.log('graphemeArray: ',graphemeArray)
        console.log('transcriptionArray: ',transcriptionArray)
        console.log('ipaArray: ',ipaArray)




    // make the character gloss
	out += '<div id="ruby">'
    
    // draw the glosses
    iconURL = '../img/icons/copytiny.svg'
    
    let gloss = '<div class="multilineGlossedText">'
    
    for (t=-1;t<graphemeArray.length;t++) {
        if (t===-1) {
            gloss += `<div class="stack"><span class="rt translitGloss" lang="und-fonipa" title="Transliteration of the text."><img src="${ iconURL }" class="copyIcon" onclick="copyExamplePanelText(this, '.translitGloss')" title="Copy the transliteration." alt="Copy transliteration"></span><span class="rb"><img src="${ iconURL }" onclick="copyExamplePanelText(this, '.rb')" class="copyIcon" title="Copy the text." alt="Copy text"></span>`
            if (ipaArray.length > 0) {
                if (ipaArray[t+1]) gloss += `<span class="rt IPAGloss" lang="und-fonipa" title="IPA transcription of the text."><img class="copyIcon" src="${ iconURL }" onclick="copyExamplePanelText(this, '.IPAGloss')" title="Copy the IPA transcription." alt="Copy IPA"></span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        else {
            gloss += ` <div class="stack"><span class="rt translitGloss" lang="und-fonipa">${ transcriptionArray[t] }</span><span class="rb">${ graphemeArray[t] }</span>`
            if (ipaArray.length > 0) {
                if (ipaArray[t]) gloss += `<span class="rt IPAGloss" lang="und-fonipa">${ ipaArray[t] }</span>`
                else gloss += `<span class="rt">&nbsp;</span>`
                }
            gloss += `</div>`
            }
        }
    gloss += '</div>'

	out += `<div dir="ltr" class="glossContainer" lang="${ clang }" id="title">${ gloss }</div>`




    // make list of characters
    out += '<div id="listOfCharacters">'
    
	for (let ch of charArray) {
		const dec = ch.codePointAt(0)
		let hex = dec.toString(16).toUpperCase().padStart(4, '0')

		out += '<div class="panelCharacter">'

        if (spreadsheetRows[ch]) {
            out += `<span class="ch img">${ ch }</span>`
            /*const blockname = getScriptGroup(dec, false)
            const blockfile = getScriptGroup(dec, true)
            const isInBlock = spreadsheetRows[ch] ? true : false

            out += `<img src="../../c/${ blockname }/large/${ hex }.png" alt="${ ch }" style="height:2rem;">`

            out += `<a href="javascript:void(0)" onclick="showCharDetailsInPanel(event)"> ${ spreadsheetRows[ch][cols['ucsName']] }</a>`*/
            }
		else {
            out += `<a target="c" href="../../uniview/index.html?charlist=${ ch }&char=${ hex }">
                <img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ ch }">
                U+${ hex } No data. Open in UniView.
                </a>`
            }

		out += '</div>'
    	}

	out += '</div>'


    // add instructions line
	out += '<p class="advice" style="line-height:1;">Glossed lines are transliteration/text/IPA.</p>'

    out += `</td>`
    out += `<tr>`
    
    return out
	}

















function showCharDetailsInPanel (evt) {
	var lang, chars, insetPoint, panel, table, ipaNodes
    console.log(`showCharDetailsInPanel (${evt }) (in egcode.js)`)
    
	if (typeof charDetails === 'undefined') return

    // get the insertion point
    if (evt.target.closest('figure')) insertPoint = evt.target.closest('figure')
    else if (evt.target.closest('table')) insertPoint = evt.target.closest('table')
    else insertPoint = evt.target.closest('p, div, li')


	// find the language
	if (evt.target.className == 'listItem') lang = evt.target.lang
    else if (evt.target.parentNode.className === 'panelCharacter') lang = langTag
	else if (evt.target.parentNode.parentNode.querySelector('bdi') !== null) lang = evt.target.parentNode.parentNode.querySelector('bdi').lang
	else if (evt.target.parentNode.parentNode.querySelector('span') !== null) lang = evt.target.parentNode.parentNode.querySelector('span').lang
	else console.log('No lang found in showCharDetailsInPanel')

    // find the character(s)
	if (evt.target.className == 'listItem') chars = evt.target.textContent.replace(/◌/g,'')
    
    else if (evt.target.parentNode.className === 'panelCharacter') chars = evt.target.parentNode.querySelector('img').alt.replace(/◌/,'')
    
    else if (evt.target.closest('.sequenceTable')) chars = evt.target.textContent.replace(/◌/,'')
    
	else if (evt.target.parentNode.parentNode.querySelector('bdi') !== null) {
        var bdi = evt.target.parentNode.parentNode.querySelector('bdi')
        if (bdi.querySelector('img')) chars = bdi.querySelector('img').alt
        else chars = bdi.textContent.replace(/◌/g,'')
        }
	
    else if (evt.target.parentNode.parentNode.querySelector('span') !== null) chars = evt.target.parentNode.parentNode.querySelector('span').textContent.replace(/◌/g,'')
	
    else console.log('No characters found in showCharDetailsInPanel')

    // if this article is already open, close it
    ptr = insertPoint.nextElementSibling
    //console.log('tagname',ptr.tagName, 'title',ptr.title)
    if (ptr !== null && ptr.tagName === 'ARTICLE' && ptr.title === chars) {
        ptr.remove()
        return
        }


    // create the article element & table outer
    panel = document.createElement('article') 
	panel.title = chars
	table = document.createElement('table')
	table.className = 'charDetails2'
	table.innerHTML = makeArticleDetails(chars)
	panel.appendChild(table)
    insertPoint.after(panel)
	
	expandChMarkup()
	expandEgMarkup(lang)
	//convertTranscriptionData(evt.target)
    wrapToneLettersInBdi()
	setFootnoteRefs()
    var links = table.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
    
    // set event trigger on all .ipa elements - opens description box on click
    ipaNodes = document.querySelectorAll(".ipa")
    for (i=0;i<ipaNodes.length;i++) ipaNodes[i].onclick = showIPAPhoneEvt
	return false
	}











function makeCharArticleList (chars, lang) {
    console.log(`>>> makeArticleDetails(chars: ${ chars })
    Add  details for character(s) below a block.`)

	if (typeof window.charDetails === 'undefined') // charDetails is defined in xx-details.js
		return ''

	const charArray = [...chars]
	const dir = window.blockDirectoryName // not used.  useful ?
    
	let out = ''
	for (let ch of charArray) {
		const row = window.spreadsheetRows[ch]
		if (!row) continue

		out += `<tr>
			<th class="cdChar" onclick="this.closest('article').remove()">
				<span class="ex" lang="${ lang }">${ ch }</span><br>
				<span class="cdCharClose">X</span>
			</th>
			<td class="cdData">${ markupForCharDetails(ch, lang) }</td>
		</tr>`
	}

	return out
    }






function markupForCharDetails (char, lang) {
    console.log(`>>> markupForCharDetails( char: ${ char })
    Get character details for a single character in an article.`)

	if (typeof charDetails === 'undefined') return ''

	const directory = window.blockDirectoryName // ????
	const row = window.spreadsheetRows[char]
	if (!row) return ''

    const hex = char.codePointAt(0).toString(16).toUpperCase()

	let out = ''

	// OUT‑POINTING LINKS     
    // Uniview
    out += `<p class="notesLink"><a target="_blank" href="../../uniview/index.html?codepoints=${ hex }&char=${ hex }">UniView</a>`
    
    // properties
    out += `<br><a target="_blank" href="https://util.unicode.org/UnicodeJsps/character.jsp?a=${ hex }">Properties</a>`

    // character notes files
    if (lang) out += `<br><a target="_blank" href="../../scripts/${ directory }/${ lang }-characters.html#char${ hex }">Notes</a>`

    // terms list
    if (window.autoExpandExamples[window.langTag]) out += `<br><a target="terms" href="${ window.langTag }_terms.html?q=${ char }">Terms</a>`

    // character usage app
    if (window.autoExpandExamples[window.langTag]) out += `<br><a target="_blank" href="../../app-charuse/index.html?language=${ window.charUsageBCP }&charlist=${ char }">Usage</a>`
    out += '</p>'




	// HEADER
	out += `<p class="cdHeader">
		<span class="uname cdTitle">${ row[cols.ucsName] }</span>`

	if (row[cols.nameLoc] && row[cols.nameLoc] !== '0')
		out += ` &nbsp; <span class="transliteratedname trans">${ row[cols.nameLoc] }</span>`

	out += '<br>'

	// BASIC DETAILS
	out += '<span class="cdBasics">'
	if (row[cols.typeLoc]) out += `<span class="charType">${ row[cols.typeLoc] }</span>`
	if (row[cols.statusLoc]) out += ` &nbsp; <span class="usageType">(${ row[cols.statusLoc] })</span>`
	if (row[cols.ipaLoc]) out += ` &nbsp; <span class="charIPA ipa">${ row[cols.ipaLoc] }</span>`
	if (row[cols.class]) out += ` &nbsp; <span class="charGC">${ row[cols.class] }</span>`
	out += '</span><br>'

	// DECOMPOSITION
	const nfd = char.normalize('NFD')
	const nfc = char.normalize('NFC')
	if (nfd !== char) {
		out += `<span class="decomposition">Decomposes to <span class="ch">${ nfd }</span>.`
		if (nfd === nfc)
			out += '<br><strong>The NFC normalised form of this character is the decomposed sequence!</strong>'
		out += '</span><br>'
	    }

	// CORRESPONDENCES (helper)
    const addPair = (colIndex, cls, label) => {
        if (colIndex > 0 && row[colIndex]) {
            out += `<span class="${ cls }">${ label } ${ makeCharacterLink(row[colIndex], lang, directory) }</span><br>`
            }
        }

    addPair(cols.ivowel, 'vowelPairing', 'The corresponding independent vowel is')
    addPair(cols.dvowel, 'vowelPairing', 'The corresponding dependent vowel is')
    addPair(cols.uc, 'charUppercase', 'Uppercase is')
    addPair(cols.lc, 'charLowercase', 'Lowercase is')
    addPair(cols.subj, 'subjPair', 'Subjoined form is')
    addPair(cols.fform, 'subjPair', 'Non-subjoined form is')
    addPair(cols.htone, 'tonePairing', 'High class equivalent is')
    addPair(cols.ltone, 'tonePairing', 'Low class equivalent is')

	out += '</p>'

	// DETAILS FROM xx-details.js
	if (charDetails[char]) out += charDetails[char]

	// ONSET / FINAL
	out += '<p>'
    addPair(cols.onset, 'syllPairing', 'Onset equivalent is')
    addPair(cols.finals, 'syllPairing', 'Syllable-final equivalent is')
	out += '</p>'

	return out
}



function getCallerName () {
	const stack = new Error().stack.split('\n')

	for (let line of stack) {
		// skip this function and console.log
		if (line.includes('getCallerName') || line.includes('console')) continue

		// Chrome
		let m = line.match(/at\s+([^\s(]+)/)
		if (m) return m[1]

		// Firefox
		m = line.match(/^([^\@]+)/)
		if (m) return m[1].trim()
	}

	return ''
}







function setOnclicks () {
    console.log(`>>> setOnclicks()
    Add onclicks to all generated content.
    Called by ${ getCallerName() }.`)

    // CHARACTER BOX ONCLICKS
	let cpNodeList = document.querySelectorAll('.listItem')
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', showCharacterDetails)
        cpNode.dataset.bound = '1'
        }

	cpNodeList = document.querySelectorAll('.showUnique') // do this before general .listAll
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', characterBoxToPanel)
        cpNode.dataset.bound = '1'
        }

	cpNodeList = document.querySelectorAll('.listAll')
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', characterBoxToPanel)
        cpNode.dataset.bound = '1'
        }

	cpNodeList = document.querySelectorAll('.expandAll')
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', showAllCharDetails)
        cpNode.dataset.bound = '1'
        }

	cpNodeList = document.querySelectorAll('.listUnumCP')
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', unumToPanel)
        cpNode.dataset.bound = '1'
        }

    // CODEPOINT ONCLICKS

	cpNodeList = document.querySelectorAll('.codepoint .uname')
    
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', showCharacterDetails)
        cpNode.dataset.bound = '1'
        }

	cpNodeList = document.querySelectorAll('.codepoint bdi')
    
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', makeFootnoteIndex)
        cpNode.dataset.bound = '1'
        }

    // EXAMPLE ONCLICKS

	cpNodeList = document.querySelectorAll('.charExample .ex')
    
    for (let cpNode of cpNodeList) {
        if (cpNode.dataset.bound) continue

        cpNode.addEventListener('click', makeExampleArticle)
        cpNode.dataset.bound = '1'
        }
    }







