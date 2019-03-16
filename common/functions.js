
function initialiseSummary (base, lang, tableName) {
    window.base = base
    makeTables(lang)
    initialiseShowNames(base, 'c')
    document.getElementById('featureTableBody').innerHTML = makeSidePanel(tableName,"")
    createtoc(3)
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



function makeSidePanel (script, otherlinks) {
	console.log(script, otherlinks)
	var ptr = ''
	for (var i=0;i<scriptData.length;i++) if  (scriptData[i].script === script) {
		ptr = scriptData[i]
		break
		}

	var out = ''
	out += '<tr><th>Script name</th><td><p>'+script+'</td></tr>'
	for (var feature in featureName) {
		out += '<tr><th>'+featureName[feature]+'</th><td>'
        if (    (feature==='chars' && ptr[feature]==='0') ||
                (feature==='cchars' && ptr[feature]==='0') ||
                (feature==='matras' && ptr[feature]==='no') ||
                (feature==='mcchars' && ptr[feature]==='no') ||
                (feature==='gpos' && ptr[feature]==='no') ||
                (feature==='cs' && ptr[feature]==='no') ||
                (feature==='cursive' && ptr[feature]==='no') ||
                (feature==='gsub' && ptr[feature]==='no') ||
                (feature==='dir' && ptr[feature]==='ltr') ||
                (feature==='baseline' && ptr[feature]==='mid') ||
                (feature==='digits' && ptr[feature]==='no') ||
                (feature==='wordsep' && ptr[feature]==='space') ||
                (feature==='justify' && ptr[feature]==='space') ||
                (feature==='wrap' && ptr[feature]==='word') ||
                (feature==='hyphenation' && ptr[feature]==='no') ||
                (feature==='region')
                ) { out += ptr[feature] }
        else out +='<span class="tableHighlight">'+ptr[feature]+'</span>'
        
		out += '</td></tr>'
		}
	
	return out
	}
	


function makeTables (lang) {
    // create the lists of characters in yellow boxes

    if (typeof window.spreadsheet == 'undefined') return
    
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
    console.log(spreadsheetRows)


    var tables, node, chars, info, bicameral, out, char
    
    tables = document.querySelectorAll('.auto')

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
                if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ipaLoc]) ch = window.spreadsheetRows[char][cols.ipaLoc]
                else ch = '&nbsp;'
                if (ch === '&nbsp;') out += '<span>&nbsp;</span>'
                else out += '<span class="listIPA">'+ch+'</span>'
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

            if (links.length > 0) {
                if (links[i]) out += '<a href="'+links[i]+'">link</a>'
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

            if (links.length > 0) {
                if (links[i]) out += '<a href="'+links[i]+'">link</a>'
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
	showNameDetails(evt.target.textContent, evt.target.lang, window.base, 'c', document.getElementById('panel'), 'list' )
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







