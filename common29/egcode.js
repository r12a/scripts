/* jshint strict: false */
/* globals autoExpandExamples, egList */


//if (typeof traceSet === 'undefined') traceSet = new Set([])


window.autoExpandExamples = {}
// this will contain the vocab information stored in xxx-examples.js for all languages
// it has to be declared before that page is loaded, so that the .langFilter item can be attached
var egList = {}


function addExamples (langFilter) {
    // console.log('addExamples(',langFilter,')\n\tConvert all .eg items to full markup.')
/*  read the data into egList, in which each record has
	example, meaning, transcription?, notes?, alt?
	alt is generally a vowelled form for abjads or an alternative spelling
    
    latest modifications have the following effect:
    if .transc is set (and there's a transcription) only the transcription will be output (no IPA)
    otherwise, if there's IPA that will be output
    if there's no IPA and no .transc, then the transcription will be output
    there is no longer any transliteration output
    
    langFilter, class name used to select blocks to add examples to
    
    [GLOBALS]
    autoExpandExamples, obj, set above, then populated under .<langFiler> in xx-examples.js; holds all vocab
    
    [CLASSES]
    The calling element can have class names with the following meanings:
    inline      don't make into a separate, large text block
    transc      used to force display of the transcription rather than the IPA
    alt         displays the IPA/transcription with the special transcription (eg. vowelled version or other orthography than Latin)
    vertical    applies a vertical writing mode, eg. for Mongolian
    
    [LOCALS]
    egArray, array, built from autoExpandExamples
    egList, object, list of vocab filtered out by langFilter with native word as key
    selector, a selector for searching for letter blocks
    nodes, node array, example nodes to expand
    out, str, the generated markup
    ipa, str, an IPA value
    transcription, str, a transcription value
    i, n, counters
    temp, temptemp
    */
    
	if (typeof langFilter === 'undefined') alert('addExamples call needs to specify a language')

    if (typeof autoExpandExamples[langFilter] === 'undefined') {
        console.log('%c' + 'autoExpandExamples[langFilter] fails for '+langFilter+'  (addExamples). Check the language setting on the link element.', 'color:' + 'red' + ';font-weight:bold;')
        return
        }
    var egArray = autoExpandExamples[langFilter].split("\n")

    for (var i=0;i<egArray.length;i++) {
		if (egArray[i] == '') continue
		var temp = egArray[i].split('|')
		egList[temp[0]] = egArray[i]
		}

    // find the nodes that correspond to the language in langFilter
	var selector = '.eg[lang='+langFilter+']'
	var nodes = document.querySelectorAll(selector)
	// console.log(nodes.length,' example nodes to expand')
	
	for (var n=0;n<nodes.length;n++) {
		//console.log('Looking for ',nodes[n].textContent)
		//console.log('Language is ',nodes[n].lang)
        
        // example of raw data: 
        // τέσσερα|four|ˈt§e§s§e§r§a|téssera|notes|x
        // term|meaning|ipa|transcription|notes|source

		if (nodes[n].lang === langFilter && egList[nodes[n].textContent]) {
			temp = egList[nodes[n].textContent].split('|')
            
            // console.log('addExamples:',egList[nodes[n].textContent])
            // get the available data
            var termdata = egList[nodes[n].textContent].replace(/␣/g,'').split('|')
            var term = termdata[0]
            var meaning = termdata[1]
            var ipa = termdata[2]
            var transc = termdata[3]
            var notes = termdata[4]
            var alt = termdata[4]
            
            // choose the source pointer field depending on whether alt has been used
            var source
            if (termdata.length == 7) source = termdata[6]
            else source = termdata[5]
            
            // console.log('term',term,'meaning',meaning,'ipa',ipa,'transc', transc,'notes',notes,'source',source)
            
            if (ipa) var cleanIPA = ipa.replace(/§/g,'').replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
            else cleanIPA = ''
            if (nodes[n].classList.contains('transc')) var forceTranscription = true
            else forceTranscription = false
            
            // start the charExample element
			var out = '<span class="charExample'
			if (nodes[n].classList.contains('inline')) out += ' inline'
			out += '" translate="no">'
			
			// add the .ex element, with onclick
			out += `<bdi class="ex`
            if (nodes[n].classList.contains('vertical')) out += ' vertical'
            out += `" lang="${ nodes[n].lang }"`
			if (nodes[n].dir === 'rtl') out += ' dir="rtl"'            
			//if (temp[2]) ipaBreakdown = temp[2]
            //else ipaBreakdown = ''
            //out += `  onclick="showNameDetails('${ term }', '${ nodes[n].lang }', window.blockDir, 'c', document.getElementById('panel'), '', '', '${ ipa }')"`
            // LATEST out += `  onclick="showNameDetails('${ term }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }')"`
            //out += `  onmouseover="showNameDetails('${ term }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }')"`
       
            
            //out += `  onmouseover="showNameDetails('${ term }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }')"`
            out += `  onclick="showCharDetailsInline('${ term }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }', this)"`
			out += '>'
			out += term
			out += '</bdi>'
            
            // add an alternate transcription if requested
            if (nodes[n].classList.contains('alt')) {
                out += ` &nbsp;≡&nbsp; <bdi class="ex`
                if (nodes[n].classList.contains('vertical')) out += ' vertical'
                out += `" lang="${ nodes[n].lang }"`
                if (nodes[n].dir === 'rtl') out += ' dir="rtl"'            
                out += `  onclick="showCharDetailsInline('${ alt }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }', this)"`
                out += '>'
                out += alt
                out += '</bdi>'
                }
                
			
            // bail if there is a nometadata class name
            // this is used principally for maps with non-pointed examples
            if (nodes[n].classList.contains('short')) {
                out += '</span>'
                nodes[n].outerHTML = out
                continue
                }
            
			// add a transcription, if the .transc attribute is set
            if (forceTranscription) {
                if (transc) {
                    out += ' <bdi class="transc"'
                    if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
                    out += `>${ transc }</bdi>`
                    }
                }
            // ipa if available, otherwise look for transcription, unless .transc already set
			else if (ipa) out += ' <bdi class="ipa">'+cleanIPA+'</bdi>'
            else if (transc) {
                out += ' <bdi class="transc"'
                if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
                out += `>${ transc }</bdi>`
                }

			// meaning
			if (meaning) out += ' <bdi class="meaning">'+meaning+'</bdi>'
			
			out += '</span>'
			
			nodes[n].outerHTML = out
			}
		}
    if (! typeof showTransliterations === 'undefined') showTransliterations( document.getElementById('translitToggleCheckbox').checked )
	egArray = []
	//egList = {}
	}






//<span class="charExample" translate="no"><span class="ex" lang="ta">கேடு</span> <span class="trans">kēʈu</span> <span class="ipa">keːɖʉ</span> <span class="meaning">destruction</span></span>


/* SHOW TRANSCRIPTIONS INLINE, RATHER THAN IN POPUP PANEL */


function showCharDetailsInline (chars, clang, base, target, panel, list, translit, ipa, node) {
    // open an article window after an example and fill it with character details
    
	if (typeof charDetails === 'undefined') return

    // get the insertion point
    insertPoint = node.closest('p, table, div, li')



    // if this article is already open, close it
    console.log('insertPoint',insertPoint,'next',insertPoint.nextElementSibling)
    ptr = insertPoint.nextElementSibling
    //console.log('tagname',ptr.tagName, 'title',ptr.title)
    if (ptr !== null && ptr.tagName === 'ARTICLE' && ptr.title === chars) {
        ptr.remove()
        return
        }


    // create the article element & table outer
    var panel = document.createElement('article')
    panel.title = chars
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
    if (document.querySelector('.useBlockExamples')) {
        var ipaNodes = document.querySelectorAll(".ipa")
        for (i=0;i<ipaNodes.length;i++) ipaNodes[i].onclick = showIPAPhoneEvt
        }
        
	return false
	}





function makeExampleArticleDetails (chars, clang, base, target, panel, list, translit, ipa) {
    // called from showCharDetailsInline to build internal details of an article
    
    // new version uses spreadsheetRows, rather than charData
    
    //console.log('makeExampleArticleDetails (chars=',chars, 'clang=',clang, 'base=',base, 'target=', target, 'panel=',panel, 'list=',list, 'translit=',translit, 'ipa=',ipa,')\n\tDisplay characters in an example (like in the panel)')
    // chars (string), alt text of example
    // clang (string), lang attribute value of example img
    // base (string), path for link to character detail
    // target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
    // list (string), if not null, indicates that spaces and nbsp should be ignored
    // local out charArray chardiv charimg thename thelink hex dec blockname blockfile c
    // global charData pickerDir
    // calls getScriptGroup

    // to show per-grapheme ipa the ipa transcriptions should have ï¿½ as grapheme separator (and syllables should be separated by '.'). Unpronounced segments are represented by ï¿½ (en hyphen).  Monosyllabic words don't need any extra stuff.

    var characterList, graphemes, ptr, transcriptions, gloss, charArray, out
	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

	// check whether the calling page has set a base and target window: if not base, point to UniView
	if(typeof base === 'undefined' || base === '') { base = '../../uniview/index.html?char=' }
	if(typeof target === 'undefined') { target = 'c' }
	if(typeof list === 'undefined') { list = null }
	if(typeof translit === 'undefined') { translit = '' }
	  
    
    out = '<tr>'
    
    
    out += `<th class="cdChar" onclick="this.closest('article').remove()"><span class="exCharClose">X</span></th>`
    
    
    // add the links
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

    if (window.pickerDir) {
        out += `<p><a href="javascript:void(0)" onclick="openExportWindow('../../pickers/${ window.pickerDir }/index.html?text=${ chars }')">Picker</a>`
        out += `</p>`
        }
    
    // add a link to the _vocab page
    if (typeof window.languageName === 'undefined') var fragid = ''
    else fragid = '#'+window.languageName

    // figure out where to find the url for the _vocab page
    var url
    if (typeof template !== 'undefined' && typeof template.vocablocation === 'string')  url = `../../scripts/${ template.vocablocation }.html`
    
    else url = `${ window.langTag }_vocab`
    
    if (typeof window.removeVowels === 'function') chars = removeVowels(chars)

    out += `<p><a href="javascript:void(0)" onclick="openExportWindow('${ url }.html?q=${ chars }')">Term list</a>`
    out += `</p>`

    out += `</div>`



    // make the character gloss
	out += '<div id="ruby">'
	
    // get any IPA data provided - should be pre-separated for graphemes by ï¿½
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

	out += `<div dir="ltr" class="glossContainer" lang="${ clang }" id="title">${ gloss }</div>`


	// create a list of characters
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    charArray = [...chars]
    
    // console.log('charArray: ',charArray)

    out += '<div id="listOfCharacters">'
	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
 
		if (spreadsheetRows[charArray[c]]) {            
            blockname = getScriptGroup(dec, false)
            blockfile = getScriptGroup(dec, true)
            //console.log(dec,blockfile)
            isInBlock = spreadsheetRows[charArray[c]]?true:false
            //isInBlock = spreadsheetRows[charArray[c]]?spreadsheetRows[charArray[c]][cols['block']]:''

            out += '<div class="panelCharacter">'
			if (isInBlock) {
                out += `<img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }" style="height:2rem;">`
                
                // FOR ORTHOGRAPHY NOTES
                if (document.querySelector('.useBlockExamples')) {
                    out += `<a href="javascript:void(0)" onclick="showCharDetailsInPanel(event)"> ${ spreadsheetRows[charArray[c]][cols['ucsName']] }</a>`
                    }

                else {
                    out += `<a href="#char${ hex }"> ${ spreadsheetRows[charArray[c]][cols['ucsName']] }</a>\n`
                    }
				}
			else {
				out += '<img src="'+'../../c/'+blockname+"/large/"+hex+'.png'+'" alt="'+charArray[c]+'" style="height:2rem;">'
				out += ' '+spreadsheetRows[charArray[c]][cols['ucsName']]+'\n'
				}
			}
        else if (window.detailsfileList) { // ie FOR BLOCK PAGES
            out += `<div class="panelCharacter"><img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }" style="height:2rem;"> <a href="#char${ hex }"> U+${ hex } ${ charData[charArray[c]]}</a></div>\n`
            }
		else {
			out += `<div class="panelCharacter"><a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }"> U+${ hex } No data. Open in UniView.</a></div>`
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
    if (type === '.IPAGloss') out = out.replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
    navigator.clipboard.writeText(out)
    
    document.getElementById('copyNotice').style.display = 'block';
      setTimeout(() => {
        document.getElementById('copyNotice').style.display = 'none'
      }, '500')
	}




function closeArticle (node) {
    node.parentNode.remove()
    }








function showCharDetailsInPanel (evt) {
	var lang, chars, insetPoint, panel, table, ipaNodes
    
    //console.log('Event:',evt.target.textContent)
	if (typeof charDetails === 'undefined') return

    // get the insertion point
    insertPoint = evt.target.closest('p, table, div, li, figure')


	// find the language
	if (evt.target.className == 'listItem') lang = evt.target.lang
    else if (evt.target.parentNode.className === 'panelCharacter') lang = langTag
	else if (evt.target.parentNode.parentNode.querySelector('bdi') !== null) lang = evt.target.parentNode.parentNode.querySelector('bdi').lang
	else if (evt.target.parentNode.parentNode.querySelector('span') !== null) lang = evt.target.parentNode.parentNode.querySelector('span').lang
	else console.log('No lang found in showCharDetailsInPanel')

    // find the character(s)
	if (evt.target.className == 'listItem') chars = evt.target.textContent
    else if (evt.target.parentNode.className === 'panelCharacter') chars = evt.target.parentNode.querySelector('img').alt
	else if (evt.target.parentNode.parentNode.querySelector('bdi') !== null) {
        var bdi = evt.target.parentNode.parentNode.querySelector('bdi')
        if (bdi.querySelector('img')) chars = bdi.querySelector('img').alt
        else chars = bdi.textContent
        }
	else if (evt.target.parentNode.parentNode.querySelector('span') !== null) chars = evt.target.parentNode.parentNode.querySelector('span').textContent
	else console.log('No characters found in showCharDetailsInPanel')


    // if this article is already open, close it
    console.log('insertPoint',insertPoint,'next',insertPoint.nextElementSibling)
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
	
	expandCharMarkup()
	addExamples(lang)
	//convertTranscriptionData(evt.target)
	setFootnoteRefs()
    var links = table.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
    initialiseShowNames(table, window.blockDirectoryName, 'c')
    
    // set event trigger on all .ipa elements - opens description box on click
    ipaNodes = document.querySelectorAll(".ipa")
    for (i=0;i<ipaNodes.length;i++) ipaNodes[i].onclick = showIPAPhoneEvt
	return false
	}



function makeArticleDetails (chars) {
    // console.log('makeDetails(', 'chars:'+chars, ')\n\tAdd  details for character(s) below a block.\n\tGLOBALS notesLangtag:'+window.notesLangtag, 'blockDirectoryName:'+window.blockDirectoryName)
    
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




