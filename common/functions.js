function initialiseSummary (base, lang, tableName, dir) {
    window.base = base
	doHeadersFooters(dir)
	runCharCounts()
    makeTables(lang)
	if (typeof addExamples !== 'undefined') addExamples(lang)
    initialiseShowNames(base, 'c')
    document.getElementById('features').innerHTML = makeSidePanel(tableName,"")
    createtoc(3)
	removeEditorNotes()
	addDefinitions()
	if (typeof(contentPrompts) !== 'undefined') setContentPrompts()
	setFindIPA()
	setupBlockLinks()
	setTranslitToggle()
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




function runCharCounts () {
	var out = ''
	out += runCharCount('.characterBox', 'Main')
	out += runCharCount('.auxiliaryBox', 'Auxiliary')
	out += runCharCount('.formattingBox', 'Formatting')
	out += runCharCount('.archaicBox', 'Archaic')
	out += runCharCount('.otherBox', 'Other')
	out += runCharCount('.deprecatedBox', 'Deprecated')
	
	document.getElementById('charCountList').innerHTML = out
	}



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
		
	// get character counts in a way that works around surrogates
	var letters = marks = punctuation = symbols = others = numbers = aux = 0
	langs[id].letter ? letters = [...langs[id].letter].length : 0
	langs[id].mark ? marks = [...langs[id].mark].length : 0
	langs[id].punctuation ? punctuation = [...langs[id].punctuation].length : 0
	langs[id].symbol ? symbols = [...langs[id].symbol].length : 0
	langs[id].other ? others = [...langs[id].other].length : 0
	langs[id].number ? numbers = [...langs[id].number].length : 0
	langs[id].aux ? aux = [...langs[id].aux].length : 0
	
	total = letters + marks + punctuation + symbols + others + numbers 
	
	var out = '<table>'
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
	
	//if (langs[id].vowels) out += '<tr><th>Vowels</th><td>'+langs[id].vowels+'</td></tr>'
	if (langs[id].vowels) {
		out += '<tr><th>Vowels</th><td'
		if (langs[id].vowels!=='letters') out += ' class="tableHighlight"'
		out += '>'+langs[id].vowels.replace(/, /g,'<br>')+'</td></tr>'
		}
	
	//out += '<tr><th>Combines marks</th><td'
	//if (langs[id].mcchars!=='no') out += ' class="tableHighlight"'
	//out += '>'+langs[id].mcchars+'</td></tr>'
	
	//out += '<tr><th>Vowel-signs</th><td'
	//if (langs[id].matras!=='no') out += ' class="tableHighlight"'
	//out += '>'+langs[id].matras+'</td></tr>'
	
	out += '<tr><th>Context-based positioning</th><td'
	if (langs[id].gpos!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].gpos+'</td></tr>'
	
	out += '<tr><th>Contextual shaping</th><td'
	if (langs[id].gsub!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].gsub+'</td></tr>'
	
	out += '<tr><th>Case distinction</th><td'
	if (langs[id].cs!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].cs+'</td></tr>'
	
	out += '<tr><th>Cursive script</th><td'
	if (langs[id].cursive!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].cursive+'</td></tr>'
	
	out += '<tr><th>Text direction</th><td'
	if (langs[id].dir!=='ltr') out += ' class="tableHighlight"'
	out += '>'+langs[id].dir+'</td></tr>'
	
	out += '<tr><th>Baseline</th><td'
	if (langs[id].baseline!=='mid') out += ' class="tableHighlight"'
	out += '>'+langs[id].baseline+'</td></tr>'
	
	out += '<tr><th>Word separator</th><td'
	if (langs[id].wordsep!=='space') out += ' class="tableHighlight"'
	out += '>'+langs[id].wordsep+'</td></tr>'
	
	out += '<tr><th>Wraps at</th><td'
	if (langs[id].wrap!=='word') out += ' class="tableHighlight"'
	out += '>'+langs[id].wrap+'</td></tr>'
	
	out += '<tr><th>Hyphenation</th><td'
	if (langs[id].hyphenation!=='word') out += ' class="tableHighlight"'
	out += '>'+langs[id].hyphenation+'</td></tr>'
	
	out += '<tr><th>Justification</th><td'
	if (langs[id].justify!=='word') out += ' class="tableHighlight"'
	out += '>'+langs[id].justify+'</td></tr>'
	
	
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


    var tables, node, chars, info, bicameral, out, char
    
    tables = document.querySelectorAll('.auto')

	// for each figure in the document...
    for (let t=0;t<tables.length;t++) {
        node = tables[t]
        bicameral = false
        showFirst = false
       //console.log(node)

		// populate the chars array with characters & gather additional info
        //chars = node.dataset.chars.split('␣')
        chars = node.textContent.split('␣')
        info = node.dataset.cols
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
            else char = chars[i].replace(/-|–/g,'')
		            
            //out += '<div class="listPair"><span class="listItem" lang="'+lang+'">'+chars[i]+'</span>'
			if (node.dataset.lang) out += '<div class="listPair"><span class="listItem" lang="'+node.dataset.lang+'">'+chars[i]+'</span>'
            else out += '<div class="listPair"><span class="listItem" lang="'+lang+'">'+chars[i]+'</span>'

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
                if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ipaLoc]) ch = window.spreadsheetRows[char][cols.ipaLoc]
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
            out += '<span class="listUnum">'
			charList = [... chars[i]]
            for (let z=0;z<charList.length;z++) {
                var hex = charList[z].codePointAt(0)
                if (ignorableChar && ignorableChar === hex) continue // ignore specified character
                if (vowelcluster && hex === 45) continue // ignore hyphens - this should be phased out
                hex = hex.toString(16).toUpperCase()
                while (hex.length < 4) hex = '0'+hex
				
				if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.block]) out += '<a href="/scripts/'+window.spreadsheetRows[char][cols.block]+'/block#char'+hex+'" target="c">'
                out += hex
				if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.block]) out += '</a>'
                if (charList.length>1 && z<charList.length-1) out += '<br/>'
                }
                out += '</span>'


			// add any links
            if (links.length > 0) {
                if (links[i]) {
					var linkList = links[i].split(' ')
					out += '<span class="links">'
					for (let l=0;l<linkList.length;l++) {
						out += '<a href="'+linkList[l]+'">↓</a>'
						}
					out += '</span>'
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



function initialiseShowNames (base, target) {
// add function to all images with class ex
// function will display character by character names for example in the panel
// base (string), path for link to character detail

// this extends the function in show_codepoints.js to add support for listItems

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') { base = ''; }
	if(typeof target === 'undefined') { target = ''; } 
	
	var examples = document.querySelectorAll('.ex')
	for (e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() == 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}
	
    // this is the new stuff
	var listItems = document.querySelectorAll(".listItem")
	for (let i=0;i<listItems.length;i++) listItems[i].addEventListener('click', showNameDetailsEvent)
	
	var lists = document.querySelectorAll(".exlist")
	for (let i=0;i<lists.length;i++) lists[i].addEventListener('click', showNameDetailsEvent)
	}


function showNameDetailsEvent (evt) { 
	// base is set at the bottom of the source page
	showNameDetails(evt.target.textContent, evt.target.lang, window.base, 'c', document.getElementById('panel'), 'list', '' )
	}

/*
function shownames_setImgOnclick ( node, base, target ) {
	node.onclick = function(){ showNameDetails(node.alt, node.lang, base, target, document.getElementById('panel') ) }
	}

function shownames_setOnclick ( node, base, target ) {
	node.onclick = function(){ showNameDetails(node.firstChild.data, getLanguage(node), base, target, document.getElementById('panel')) }
	}


function getLanguage(node) {
	// given a node, returns lang value of node or nearest parent
	if(node.lang) return node.lang
	else if(node.parentNode) return getLanguage(node.parentNode)
	else return ''
	}
*/

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




function runCharCount (type, location) { 
	//if (document.getElementById(location) == null) return
	var charlists = document.querySelectorAll(type)
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
	
	out += '<tr><th>'+location+'</th>'
	+'<td id="'+location+'CharList">'
	+uniqueArray.toString().replace(/,/g,' ')
	+'</td>'
	+'<td id="'+location+'CharListTotal">'+uniqueArray.length+'</td></tr>'

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
	// adds a checkbox to the sliding selector to 
	// switch transliterations on/off
	
	var checkboxList = document.getElementById('showTranscriptions')
	if (checkboxList === null) {
		console.log("Couldn't find sliding checkbox!")
		return
		}
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
	}

function showTransliterationsEvt (evt) { 
	showTransliterations(evt.target.checked )
	}



