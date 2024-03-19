/* jshint strict: false */
/* globals cl, langs, desc */




debug = false
marks = new Set()


function setMarks (languageName) {
    // sets the global variable marks as a set containing all combining marks in the spreadsheet
    if (languageName) console.log("Running setMarks for ",languageName)
    for (var char in spreadsheetRows) {
        //console.log(char,spreadsheetRows[char][cols['class']])
        if (typeof spreadsheetRows[char][cols['class']] === 'undefined') console.log(`>>> setMarks: Cannot find class column info for ${ char } in spreadsheet!`)
        if (spreadsheetRows[char][cols['class']].startsWith('M')) window.marks.add(char)
        }
    return
    }



function expandCharMarkup () {
    if (traceSet.has('expandCharMarkup') || traceSet.has('all')) console.log('expandCharMarkup(',') Convert char markup to .codepoint spans (has to be done before the indexing)')
     // convert char markup to .codepoint spans (has to be done before the indexing)
     // the .ch and .hx classes should only be used for characters in the
     // spreadsheet.  For other characters, generate the markup in a picker
     // if the svg class is appended, use an svg image to display the char
     // if the split class used, the characters will be separated by +
     
     var charMarkup, unicodeNames, unicodeChars, charlist, split, svg, img, hex, ch, block, initial, medial, final, circle, noname
     
   
    // convert .hx markup (one or more hex codes)
    charMarkup = document.querySelectorAll('.hex, .hx')
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

        charlist = charMarkup[i].textContent.trim().split(' ')
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
                unicodeNames += `<span style="color:red">${ ch } NOT IN DB!</span>`
                unicodeChars += ch
               continue
                }
            
            if (c > 0) unicodeNames += ' + '
            unicodeNames += spreadsheetRows[ch][cols['ucsName']].replace(/:/,'')
         
            if (split && c > 0) unicodeChars += `</bdi> + <bdi lang="${ window.langTag }">`
            if (svg) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/${ hex }.svg" alt="${ ch }" style="height:2rem;">`
                }
            else if (img) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/large/${ hex }.png" alt="${ ch }" style="height:2rem;">`
                }
            else unicodeChars += `&#x${ hex };`
            }
            
        if (initial || medial) unicodeChars += '\u200D '

        out += `<span class="codepoint" translate="no"><bdi lang="${ window.langTag }"`
        //if (blockDirection === 'rtl') out += ` dir="rtl"`
        if (img || svg) out += ' style="margin:0;" '
        out += `>${ unicodeChars }${ coda }</bdi>`
        if (noname) {}
        else out += `<a href="javascript:void(0)"><span class="uname">${ unicodeNames }</span></a></span>`
        
        charMarkup[i].outerHTML = out
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

            if (split && c > 0) unicodeChars += `</bdi> + <bdi lang="${ window.langTag }">`
            
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

        out += `<span class="codepoint" translate="no"><bdi lang="${ window.langTag }"`
        if (blockDirection === 'rtl') out += ` dir="rtl"`
        if (img || svg) out += ' style="margin:0;" '
        out += `>${ unicodeChars }${ coda }</bdi>`
        if (noname) {}
        else out += `<a href="javascript:void(0)"><span class="uname">${ unicodeNames }</span></a></span>`
        
        charMarkup[i].outerHTML = out
        }
    }





function expandCharMarkupX () {
    if (traceSet.has('expandCharMarkup') || traceSet.has('all')) console.log('expandCharMarkup(',') Convert char markup to .codepoint spans (has to be done before the indexing)')
     // convert char markup to .codepoint spans (has to be done before the indexing)
     // the .ch and .hx classes should only be used for characters in the
     // spreadsheet.  For other characters, generate the markup in a picker
     // if the svg class is appended, use an svg image to display the char
     // if the split class used, the characters will be separated by +
     
     var charMarkup, unicodeNames, unicodeChars, charlist, split, svg, img, hex, ch, block
     
   
    // convert .hx markup (one or more hex codes)
    charMarkup = document.querySelectorAll('.hex, .hx')
    for (i=0;i<charMarkup.length;i++) {
        charMarkup[i].classList.contains('split')? split=true: split=false
        charMarkup[i].classList.contains('svg')? svg=true: svg=false
        charMarkup[i].classList.contains('img')? img=true: img=false
        charlist = charMarkup[i].textContent.trim().split(' ')
        unicodeNames = ''
        unicodeChars = ''
        out = ''
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
                unicodeNames += `<span style="color:red">${ ch } NOT IN DB!</span>`
                unicodeChars += ch
               continue
                }
            
            if (c > 0) unicodeNames += ' + '
            unicodeNames += `<a href="#char${ hex }"><span class="uname">${ spreadsheetRows[ch][cols['ucsName']].replace(/:/,'') }</span></a>`

            if (split && c > 0) unicodeChars += `</bdi> + <bdi lang="${ window.langTag }">`
            if (svg) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/${ hex }.svg" alt="${ ch }" style="height:2rem;">`
                }
            else if (img) {
                block = getScriptGroup(dec, false)
                unicodeChars += `<img src="../../c/${ block }/large/${ hex }.png" alt="${ ch }" style="height:2rem;">`
                }
            else unicodeChars += `&#x${ hex };`
            }
        out += `<span class="codepoint" translate="no"><bdi lang="${ window.langTag }"`
        //if (blockDirection === 'rtl') out += ` dir="rtl"`
        if (img || svg) out += ' style="margin:0;" '
        out += `>${ unicodeChars }</bdi>`
        out += `${ unicodeNames }</span>`
        
        charMarkup[i].outerHTML = out
        }
   
    // convert .ch markup (one or more characters using Unicode code points)
    charMarkup = document.querySelectorAll('.ch')
    for (i=0;i<charMarkup.length;i++) {
        charMarkup[i].classList.contains('split')? split=true: split=false
        charMarkup[i].classList.contains('svg')? svg=true: svg=false
        charMarkup[i].classList.contains('img')? img=true: img=false
        charlist = [... charMarkup[i].textContent]
        unicodeNames = ''
        unicodeChars = ''
        out = ''
        for (c=0;c<charlist.length;c++) {
            dec = charlist[c].codePointAt(0)
            hex = dec.toString(16).toUpperCase()
            while (hex.length < 4) hex = '0'+hex

            if (! spreadsheetRows[charlist[c]]) {
                unicodeChars += charlist[c]
                unicodeNames += `<span style="color:red"> ${ charlist[c] } NOT IN DB!</span> `
                continue
                }
            
            if (charlist[c] !== '◌') {
                if (c > 0) unicodeNames += ' + '
                unicodeNames += `<a href="#char${ hex }"><span class="uname">${ spreadsheetRows[charlist[c]][cols['ucsName']].replace(/:/,'') }</span></a>`

                }

            if (split && c > 0) unicodeChars += `</bdi> + <bdi lang="${ window.langTag }">`
            
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
        out += `<span class="codepoint" translate="no"><bdi lang="${ window.langTag }"`
        if (blockDirection === 'rtl') out += ` dir="rtl"`
        if (img || svg) out += ' style="margin:0;" '
        out += `>${ unicodeChars }</bdi>`
        out += `${ unicodeNames }</span>`
        
        charMarkup[i].outerHTML = out
        }
    }








function buildPage () {
    initialise(`/scripts/${ window.blockDirectory }/block`, window.ghDirectory, window.detailsfileList, window.version)
    for (i=0;i<languageList.length;i++) autoTransliterate(window.languageList[i])
    makeFontChanger(window.languageList.join(','), window.scriptISO, window.webfonts, window.defaultSize)
    // expandCharMarkup()   this has to be called for each language, so that the right spreadsheet is available
    document.querySelector("body").addEventListener('keydown', closeDialogEsc)
    }



function initialise (base, ghDirectory, detailsfileList, version) {
    createtoc(3)
    addSearchEtc()
	doHeadersAndFooters(ghDirectory, detailsfileList, version) 
    initialiseShowNames(base, '') // adds a function to all .ex elements
    checkForCharParam()  // hides unneeded stuff when this page is opened by UniView
    createCLArray() // creates the window.cl array that associates characters with languages
    addLangInfo()  // adds the used by information
	if (typeof refs !== 'undefined') createReferences('all')
    
    // free up memory from large objects
	desc = ''
	autoExpandExamples = {}
    cl = ''

	// create list of characters under "About this page"
    }

    // U, unicode db declared in u.js
    // desc, declared in descriptions.js
    // cl
    // langs
    // spreadsheetRows
    // spreadsheet
    // cols
    // explainerDir, directory for the script notes page
    // pickerDir, directory name for the character app
    // charDetails, obj, the detailed notes, created in xx-examples.js
    /* autoExpandExamples */







function closeDialogEsc (e) {
    // closes the dialog box and panel when escape is pressed
    if (e.code === 'Escape') {
        //document.getElementById('dialogBox').open = false
        document.getElementById('panel').style.display = 'none'
        ///document.getElementById('tocPanel').style.display = 'none'
        }
    }


function addSearchEtc () {
    document.getElementById('top').innerHTML = `<img src="../common/showImages.png" alt="Toggle images" title="Toggle large characters between images and text." onclick="toggleImages()"/><br/><a href="#header-boilerplate"><img src="../../shared/images/up.png" alt="go to page top" title="Jump to top of page."/></a><br><input type="text" id="findInput" placeholder="Find..." style="width: 4em; text-align: center;" onChange="var hex=this.value; if (hex!=''){ document.location = getFindStr(hex); }"/>`
    }   



function toggleImages () {
	// replace all the large characters with images
	var testnode, toImg, i, nodes, id, dec, group
    
	// check whether we're converting to images or characters
	testnode = document.querySelector('.charimg')
	if (testnode.textContent == '') toImg = false
	else toImg = true
	nodes = document.querySelectorAll('.charimg')
	
	if (toImg) {
		for (i=0;i<nodes.length;i++) {
			id = nodes[i].parentNode.id.replace('char','')
			dec = parseInt(id, 16)
			group = getScriptGroup(dec)
			nodes[i].innerHTML = '<img src="../../c/'+group+'/large/'+id+'.png"/>'
			}
		}
	else {
		for (i=0;i<nodes.length;i++) {
			id = nodes[i].parentNode.id.replace('char','')
			nodes[i].innerHTML = '&#x'+id+';'
			}
		}
	}



function doHeadersAndFooters (ghDirectory, detailsfileList, version) {
	// adds links to top and bottom of document
	// ghDirectory is the name of the directory under /scripts/
    // detailsList is a comma-separated list of the first part of xx-details in that directory
    // version is the version of the template, eg. v27

	
	if (document.getElementById('versionTop') === null) return
    if (typeof detailsfileList === 'undefined') return

    // build the header
    var out = 'Recent commits: '
    for (var i=0;i<detailsfileList.length;i++) {
        out += `<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/${ ghDirectory }/${ detailsfileList[i] }-details.html">${ detailsfileList[i] }</a> `
        if (i<detailsfileList.length-1) out += ' &bull; '
        }
	
    out += ` &bull; <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/${ ghDirectory }/block.html" title="Show recent commits for the block file container.">block</a> [${ version }]`
    
	out += ' &bull; Leave a <a target="_blank" href="https://github.com/r12a/scripts/issues/new?title=['+ghDirectory.replace(/index/,'')+'/block]%20%20BRIEF_TITLE_GOES_HERE&body=%5Bsource%5D%20https%3A%2F%2Fr12a.github.io%2Fscripts%2F'+ghDirectory+'/block%0A%0A">comment</a>'
	
	document.getElementById('versionTop').innerHTML = out
	
	
	out = ''
	out += 'See <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+ghDirectory+'/block.html">recent changes</a>. &nbsp;&bull;&nbsp; Make a <a href="https://github.com/r12a/scripts/issues/new?title=%5B'+ghDirectory+'%2Fblock%5D%20TITLE_GOES_HERE&body=Comment%20on%20http%3A%2F%2Fr12a.github.io%2Fscripts%2F'+ghDirectory+'%2Fblock%0A%0A" target="_blank">comment</a>. &nbsp;&bull;&nbsp; Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a>.</span></div>'
	
	
	document.getElementById('version').innerHTML = out
	}






function checkForCharParam () {
	// check for parameters; if char= found with value, set style to show only that character
    var parameters, p, pairs
    
	parameters = location.search.split('&')
	parameters[0] = parameters[0].substring(1)
	for (p=0;p<parameters.length;p++) {  
		pairs = parameters[p].split('=')
		if (pairs[0] === 'char') { 
			if (pairs[1]) { 
				document.getElementById('includeStyles').textContent = '.character, h1, h2, h3, #charlistsection, .sidebar, header, #status, #intro, #fontsetting, section>p, .smallprint, .univiewLink, .subtitle, .unicodenotes, .charimg, .charname, #top, #ack, #refs { display: none; } .notes { margin: 0;} #char'+pairs[1]+' { display: block; } .letter { margin-inline-start: 0; margin-inline-end: 1rem; } .usedby { margin-inline-end: 1rem; margin-inline-start: 0; font-size:inherit; }' 
				} 
			}
		}
	}





function checkForCharParamY () {
	// check for parameters; if char= found with value, set style to show only that character
    var parameters, p, pairs
    
	parameters = location.search.split('&')
	parameters[0] = parameters[0].substring(1)
	for (p=0;p<parameters.length;p++) {  
		pairs = parameters[p].split('=')
		if (pairs[0] === 'char') { 
			if (pairs[1]) { 
				document.getElementById('includeStyles').textContent = `
                .character, h1, h2, h3, #charlistsection, .sidebar, header, #status, #intro, #fontsetting, section>p, .smallprint, .univiewLink, .subtitle, .unicodenotes, .charimg, .charname, #top, #ack, #refs { display: none; } 
                .notes { margin: 0;} #char'+pairs[1]+' { display: block; } 
                .letter { margin-inline-start: 0; margin-inline-end: 1rem; } 
                .usedby { margin-inline-end: 1rem; margin-inline-start: 0; font-size:inherit; }`
				} 
			}
		}
	}





/* DUPLICATE ? */
function hideStuff (codepoint) {
	document.getElementById('includeStyles').textContent = '.character, h1, h2, h3, #charlistsection, .sidebar, header, #status, #intro, #fontsetting, .smallprint, .univiewLink, .subtitle, .unicodenotes, #references, #endlinks, .up { display: none; } #char'+codepoint+' { display: block; }' 
	}




function setBoxFont (fontname) {		
	// change the font of the large characters in the block pages
	// but don't change the size
	var pictures = document.querySelectorAll('.charimg')
	for (var p=0;p<pictures.length;p++) {  
		pictures[p].style.fontFamily = fontname
		}
	}



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


function addLangInfo () {
    // add information from app-charuse to indicate where characters are used
    // [global] cl is declared in char_lang.js
    var chars
    
    chars = document.querySelectorAll('.character')
    for (var i=0;i<chars.length; i++) findLangs(chars[i])
    }


function findLangs (node) {
    // return a list of languages used by a particular character, formatted for insertion
    // node points to an element with class .character 
    // cl is defined in char_lang.js and pairs characters with languages
    // global: langs, defined in langs.js, db of orthographic information
    var hex = node.id.replace(/char/,'')
    var cp = parseInt(hex, 16)
    var notesNode = node

    if (notesNode && cl[cp]) {
        var languages = cl[cp][0]
        var auxlanguages = cl[cp][1]
        var usedbyInsertionPoint = notesNode.querySelector('#usedbyInsertionPoint')
        var out = ''
        
        out += '<p class="usedby">'
        if (languages.length>0) out += 'Used by: '
        else if (auxlanguages.length>0) out += 'Used infrequently by: '
        for (let l=0;l<languages.length;l++) {
            out += '<a href="../../app-charuse/index.html?language='+languages[l]+'" target="_blank">'
            out += langs[languages[l]].name.replace(/ \([^\)]+\)/g,'')
            out += '</a>'
            if (l<languages.length-1) out += ' &bull; '
            }
        if (auxlanguages.length>0 && languages.length>0)  out += ', and infrequently by: '
        for (let l=0;l<auxlanguages.length;l++) {
            out += '<a href="../../app-charuse/index.html?language='+auxlanguages[l]+'" target="_blank" style="font-style:italic; font-size: 90%;">'
            out += langs[auxlanguages[l]].name.replace(/ \([^\)]+\)/g,'')
            out += '</a>'
            if (l<languages.length-1) out += ' &bull; '
            }
        out += '</p>'
        usedbyInsertionPoint.outerHTML = out
        }
    }





function listCharsWithNotes () {
	// makes a list of which characters have letter sections attached, list is space-separated, and mostly decimal number pairs
	// however a single character that is not part of a series is represented by just that decimal codepoint
    var chaliststr, charlist, sortedcharlist, i, start, end
    
	charliststr = ''
	charlist = document.querySelectorAll("div > div.notes, .usedby")
	sortedcharlist = []
	for (i=0; i<charlist.length; i++) {
		if (charlist[i].querySelector('.letter') !== null || charlist[i].querySelector('.usedby') !== null) 
		sortedcharlist.push(parseInt(charlist[i].parentNode.id.substr(4), 16))
		}
	const uniqueSet = new Set(sortedcharlist)
	sortedcharlist = [...uniqueSet]
	sortedcharlist.sort()
    sortedcharlist.push('')
	charliststr = ''
	start = sortedcharlist[0]
	end = '';
	for (i=0; i<sortedcharlist.length; i++) {
		end = sortedcharlist[i]
		if (sortedcharlist[i+1] != end+1) {
			if (start == end) { 
				charliststr += start+' ' 
				start = sortedcharlist[i+1]
				}
			else {
				charliststr += start+':'+end+' '
				start = sortedcharlist[i+1]
				}
			}
		}
    return charliststr
	}





function getFindStr (hex) {
// return a value for the Find box

    if (hex.length === 1) hex = hex.codePointAt(0).toString(16)
    while(hex.length<4) hex='0'+hex
    return '#char'+hex.toUpperCase()
    }





function makeCharacterLink (cp, lang, direction) {
	// returns markup with information about cp
    // example output:
    // "<span class=\"codepoint\" translate=\"no\"><span lang=\"en\">&#x0078;</span> [<a href=\"#char0078\"><span class=\"uname\">U+0078 LATIN SMALL LETTER X</span></a>]</span>"
	// cp: a unicode character, or sequence of unicode characters
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
    // local chars out i hex directionMarkup charName
    // used by addBasics & addDetails
    
    var chars = [...cp]

	var out = '<span class="codepoint" translate="no">'
    
    // create the U+XXXX part
	for (var i=0;i<chars.length;i++) {
        if (i>0) out += ' + '
		
        var hex = chars[i].codePointAt(0).toString(16).toUpperCase()
        while (hex.length < 4) hex = '0'+hex 

        if (direction === 'rtl') var directionMarkup = ' dir="rtl"'
        else directionMarkup = ''
		out += '<span lang="'+lang+'"'+directionMarkup+'>'+'&#x'+hex+';</span> '
        }
	
    // list the names
	for (let i=0;i<chars.length;i++) {
        if (i===0) out += '['
        if (i>0 && i<chars.length) out += ' + '
        
        hex = chars[i].codePointAt(0).toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex
        
        if (charData[chars[i]]) var charName = charData[chars[i]]     
		else console.log( 'Character',chars[i], 'not found in database.' )

        out +=  '<a href="#char'+hex+'">'
		out +=  '<span class="uname">U+'+hex+' '+charName+'</span>'
		out +=  '</a>'
        if (i===chars.length-1) out += ']'
		}
    out += '</span> '
	
	return out.trim()
	}




var spreadsheetRows = {}

function parseSpreadsheet (spreadsheet) {
    // create an object called spreadsheetRows from the Google spreadsheet data
	// newStyleSpreadsheet is defined in the db.js file ???? - if set, the character column is one higher
	// it should eventually become the only pattern
    
    /* GLOBAL
    spreadsheet, str, is declared in /shared/scriptdb/xxxx.js
    
    LOCAL
    spreadsheetLines, array of lines from spreadsheet
    fields, array, the items on a spreadsheetLine
    i, counter
    */

    if (typeof spreadsheet == 'undefined') {
		alert("Spreadsheet not loaded !")
		return
		}
    
    if (typeof window.newStyleSpreadsheet == 'undefined') {
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
		}
	else {
		// make an object from the spreadsheet
		var temp = window.spreadsheet.split('\n')
		window.spreadsheetRows = {}
		for (var x=0; x<temp.length; x++) {
			if (temp[x].trim() == '') continue
			var items = temp[x].split('\t')
			if (items[1] === '') continue

			window.spreadsheetRows[items[1]] = ['0']
			for (let i=1;i<items.length;i++) window.spreadsheetRows[items[1]].push(items[i])
			}
	   }
	}








function addBasics (lang, dir) {
    // fill out the .character blocks with generic information: unicode notes & link, N11n info, usedby insertion point, etc.
    // adds a blank notes block to be filled out by addDetails (language by language)
    // lang, str, BCP47 language tag
    // dir, str, direction
    
    /* GLOBAL
    desc, declared in descriptions.js
    */
    
    /* LOCAL
    charList, node array, all .character elements
    hex, str, hex cp value
    dec, int, dec cp value
    dbrecord, array, split record of U
    cpName, str, cp name from dbrecord
    cchar, str, current character, from dec
    out, str, the result markup
    unicodenotes, str, unicode description notes collected from desc[dec]
    i, counter
    */
    
    var  hex, dec, dbrecord, cpName, cchar, out, unicodenotes, i
    
	var charList = document.querySelectorAll('.character')
	console.log('Number of .character sections:',charList.length)
	
	for (var i=0;i<charList.length;i++) {
		// get the character & character name
		var hex = charList[i].id.replace(/char/,'')
		while (hex.length < 4) hex = '0' + hex
		var dec = parseInt(hex, 16)
		var cchar = String.fromCodePoint(dec)
        var cpName = charData[cchar]

		var out = ''
		
		// add top stuff
		out += `<div class="charimg" style="cursor:copy;" onclick="navigator.clipboard.writeText(this.textContent); document.getElementById('copyNotice').style.display = 'block'; setTimeout(() => { document.getElementById('copyNotice').style.display = 'none' }, '500')">&#x${ hex };</div>\n`
		out += '<p class="charname"><strong>U+'+hex+'</strong> <a href="#char'+hex+'">'+cpName+'</a></p>\n'
		out += '<p class="univiewLink"><a target="_blank" href="https://util.unicode.org/UnicodeJsps/character.jsp?a='+hex+'">Unicode properties</a><br>\n'
		out += '<a target="_blank" href="../../uniview/index.html?char='+hex+'">Open in UniView</a></p>\n'
		
		// get data from descriptions.js
		var unicodenotes = ''
		if (desc[dec]) {
			var unicodenotes = desc[dec]
			unicodenotes = unicodenotes.replace(/¶/,'')
			unicodenotes = unicodenotes.replace(/¶/g,'<br>')
			}
		if (unicodenotes != '') out += '<div class="unicodenotes">'+unicodenotes+'</div>\n'
		
		out += '<p id="usedbyInsertionPoint"></p>\n'

	   // check for decomposable characters
		if (cchar.normalize('NFD') != cchar) {
			out += '<p class="decomposition">'
			out += 'Decomposes to '+makeCharacterLink(cchar.normalize('NFD'), lang, dir)
			if (cchar.normalize('NFD') === cchar.normalize('NFC')) out += '<br><strong>The NFC normalised form of this character is the decomposed sequence!</strong>'
			out += '</p>'
			}


		out += '<div class="notes">\n'           
		
		out += '</div>\n'
		out += '</div>\n'

		charList[i].innerHTML = out
		}
	}




function statusExpander (status) {
    // takes a single letter status value and expands to a word for display
    
    out = ''
    switch (status) {
        case 'i': out += 'infrequent '; break
        case 'r': out += 'rare '; break
        case 'a': out += 'archaic '; break
        case 'd': out += 'deprecated '; break
        case 'u': out += 'unused '; break
        case 'o': out += 'obsolete '; break
        case 'x': out += 'best avoided '; break
        case 'l': out += 'loan words or foreign sounds '; break
        }
    return out
    }




function addDetails (languageName, langClass, lang, dir, spreadsheet, cols) {
    if (traceSet.has('addDetails') || traceSet.has('all')) { console.log('addDetails(',
        'languageName:',languageName,
        'langClass:',langClass,
        'lang:',lang,
        'dir:',dir,
        'spreadsheet.length:',spreadsheet.length,
        'cols:',cols,
        ')') }
    // for a given orthography, add notes to the notes block stub
    // languageName, str used for the title of the block
    // langClass, str, the class name to use for the .letter block
    // lang, BCP47 language tag
    // dir, direction
    
    /* GLOBAL
    spreadsheet, str, declared in /shared/scriptdb/xxxx.js
    cols, array, declared in the same file, matches spreadsheet columns with names
    spreadsheetRows, object, created by a call from this function from the spreadsheet string
    explainerDir, str, directory for the script notes page
    pickerDir, str, directory name for the character app
    charDetails, obj, the detailed notes, created in xx-examples.js
    */
    /* LOCAL
    noteList, node array, list of all .notes nodes
    hex, str, hex code point value for current character in noteList
    dec, int, dec code point value for current character
    cchar, str, current character, from dec
    out, str, the markup being built
    missing, str, comma-separated list of characters in page but not in the spreadsheet 
	missingDetails, str, comma-separated list of characters in the spreadsheet, but not in the xx-details file
    x, counter
    */
    
    var missingDetails = ''
    var missing = ''
    
	var noteList = document.querySelectorAll('.notes')
	if (debug) console.log('noteList length',noteList.length)
	parseSpreadsheet(spreadsheet)
	
    for (var x=0; x<noteList.length; x++) {
		// get the character
		var hex = noteList[x].parentNode.id.replace(/char/,'')
		var dec = parseInt(hex, 16)
		var cchar = String.fromCodePoint(dec)
		
		if (spreadsheetRows[cchar] && charDetails[cchar]) {
			var out = '<div class="letter '+langClass+'" id="'+langClass+hex+'">'

			// show shape from shape column (use for cursive or conjunct text)
			if (cols.shape>0 && spreadsheetRows[cchar][cols.shape]) {
				out += '<p class="charShape"><span class="ex" lang="'+lang+'">'+spreadsheetRows[cchar][cols.shape]+'</span></p>'
				}

            // draw the data at the top
            out += '<div class="letterData">'
			
            out += '<p class="titlepara"><span class="title">'+languageName+'</span>'

			if (spreadsheetRows[cchar][cols['nameLoc']] && spreadsheetRows[cchar][cols['nameLoc']] != '0') out += '<span class="transliteratedname trans">'+spreadsheetRows[cchar][cols['nameLoc']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['nnameLoc']] && spreadsheetRows[cchar][cols['nnameLoc']] != '0') out += '<span class="localname" lang="'+lang+'">'+spreadsheetRows[cchar][cols['nnameLoc']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['meaning']] && spreadsheetRows[cchar][cols['meaning']] != '0') out += '<span class="charMeaning meaning">'+spreadsheetRows[cchar][cols['meaning']]+'</span>'
			
			out += '<br>'

			if (spreadsheetRows[cchar][cols['typeLoc']]) out += '<span class="charType" title="Type of character.">'+spreadsheetRows[cchar][cols['typeLoc']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['statusLoc']]) out += ' <span class="charType" title="Usage information.">('+spreadsheetRows[cchar][cols['statusLoc']]+')</span>'
			
			if (spreadsheetRows[cchar][cols['status']]) out += '<span class="charStatus" title="Status information.">'+statusExpander(spreadsheetRows[cchar][cols['status']])+'</span>'
			
			if (spreadsheetRows[cchar][cols['ipaLoc']]) out += '<span class="charIPA ipa" title="Typical IPA phonetic values.">'+spreadsheetRows[cchar][cols['ipaLoc']].toLowerCase()+'</span>'
			
			if (spreadsheetRows[cchar][cols['class']]) out += '&nbsp; <span class="charType" title="Unicode General Category property value.">'+spreadsheetRows[cchar][cols['class']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['transLoc']]) out += '<span class="localtrans trans" title="How transliterated in the scheme used for this document.">'+spreadsheetRows[cchar][cols['transLoc']]+'</span>'
 			out += '</p>'
           
            
           // add a link to the script notes
            if (window.explainerDir || window.pickerDir) {
 			    out += '<p class="explainerLink">Show in: '

                if (window.explainerDir) {
                out += '<a target="_blank" href="../'+window.explainerDir+'.html?showIndex&index='+encodeURIComponent(cchar)+'">script notes index</a> '
                }

                if (window.explainerDir && window.pickerDir) out += ' &bull; '

                // add a link to the character app
                if (window.pickerDir) {
                    out += '<a target="picker" href="../../pickers/'+window.pickerDir+'/index.html?text='+encodeURIComponent(cchar)+'">character app</a> '
                    }

                out += '</p>'
                }
           
			// vowel correspondences
			if (cols.ivowel>0 && spreadsheetRows[cchar][cols.ivowel]) {
				out += '<p class="vowelPairing">The corresponding independent vowel is '+makeCharacterLink(spreadsheetRows[cchar][cols.ivowel], lang, dir)+'</p>'
				}
			if (cols.dvowel>0 && spreadsheetRows[cchar][cols.dvowel]) {
				out += '<p class="vowelPairing">The corresponding dependent vowel is '+makeCharacterLink(spreadsheetRows[cchar][cols.dvowel], lang, dir)+'</p>'
				}

			// upper/lowercase
			if (cols.uc>0 && spreadsheetRows[cchar][cols.uc]) {
				out += '<p class="charUppercase">Uppercase is '+makeCharacterLink(spreadsheetRows[cchar][cols.uc], lang, dir)+'</p>'
				}
			if (cols.lc>0 && spreadsheetRows[cchar][cols.lc]) {
				out += '<p class="charLowercase">Lowercase is '+makeCharacterLink(spreadsheetRows[cchar][cols.lc], lang, dir)+'</p>'
				}

			// subjoined forms
			if (cols.subj>0 && spreadsheetRows[cchar][cols.subj]) {
				out += '<p class="subjPair">Subjoined form is '+makeCharacterLink(spreadsheetRows[cchar][cols.subj], lang, dir)+'</p>'
				}
			if (cols.fform>0 && spreadsheetRows[cchar][cols.fform]) {
				out += '<p class="subjPair">Non-subjoined form is '+makeCharacterLink(spreadsheetRows[cchar][cols.fform], lang, dir)+'</p>'
				}

			// tone correspondences
			if (cols.htone>0 && spreadsheetRows[cchar][cols.htone]) {
				out += '<p class="tonePairing">High class equivalent is  '+makeCharacterLink(spreadsheetRows[cchar][cols.htone], lang, dir)+'</p>'
				}
			if (cols.ltone>0 && spreadsheetRows[cchar][cols.ltone]) {
				out += '<p class="tonePairing">Low class equivalent is '+makeCharacterLink(spreadsheetRows[cchar][cols.ltone], lang, dir)+'</p>'
				}
			
            
            out += '</div>' // end of letterData

            out += '<div class="letterDetails">'
            
            // if a character is in the spreadsheet, but not in the xx-details file, add it to the missingDetails list
			if (typeof charDetails[cchar] === 'undefined') missingDetails += ' '+cchar
			else if (charDetails[cchar].trim() !== '') out += charDetails[cchar]

            out += '</div>' // end of letterDetails
			out += '</div>' // end of letter div
			
			noteList[x].innerHTML = noteList[x].innerHTML + '\n\n' + out
            }

		else missing += ' '+cchar
		}
	if (debug) console.log('Characters in block file but not in spreadsheet for '+lang+': ',missing)
	if (debug) console.log('Spreadsheet characters not in xx-details for '+lang+': ',missingDetails)
	}






function convertTranscriptionData (lang) {
    // adds the Latin transcriptions that are floated right, for a given language
    // local insertTranscriptions t para 
    // global cols spreadsheetRows
	var insertTranscriptions = document.querySelectorAll('.letter.'+lang+' .insertTranscription')
	console.log("For language ",lang,'Transcriptions to check: ',insertTranscriptions.length)
	
	// do the inserted transcription locations
	for (var t=0;t<insertTranscriptions.length;t++) {
		if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
			var para = ''
			for (var i=0;i<cols.othertranscriptions.length;i++) {
				if (spreadsheetRows[insertTranscriptions[t].textContent] && spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]) {
					para += cols.othertranscriptions[i][1]+': <span class="transc">'+spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]+'</span>'
					if (i<cols.othertranscriptions.length-1) para += '<br>'
					}
				}
			insertTranscriptions[t].innerHTML = para
			}
		else { insertTranscriptions[t].outerHTML = '' }
		}
	}





function convertTranscriptionData (lang) {
    // adds the Latin transcriptions that are floated right, for a given language
    // local insertTranscriptions t para 
    // global cols spreadsheetRows
	var insertTranscriptions = document.querySelectorAll('.letter.'+lang+' .insertTranscription')
	console.log("For language ",lang,'Transcriptions to check: ',insertTranscriptions.length)
	
	// do the inserted transcription locations
	for (var t=0;t<insertTranscriptions.length;t++) {
		if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
			var para = ''
			for (var i=0;i<cols.othertranscriptions.length;i++) {
				if (spreadsheetRows[insertTranscriptions[t].textContent] && spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]) {
                    if (cols.othertranscriptions[i][1]) 					para += cols.othertranscriptions[i][1]+': '
                    para += '<span class="transc">'+spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]+'</span>'
					if (i<cols.othertranscriptions.length-1) para += '<br>'
					}
				}
			insertTranscriptions[t].innerHTML = para
			}
		else { insertTranscriptions[t].outerHTML = '' }
		}
	}




function showAbout () {
// Displays/hides the 'About this document' details

var node = document.getElementById('about')
var script = window.scriptName

if (node.innerHTML == '') {
	//console.log(node.parentNode)
	node.innerHTML = `
    <p class="instructions"><span class="leadin">Showing codepoints for examples.</span> If you click on example text, you will see at the bottom right of the page a list of the characters that make up the example.</p>

    <p class="instructions"><span class="leadin">Finding characters.</span> To find a character by codepoint, type #char0000 at the end of the URL in the address bar, where 0000 is a four-figure, hex codepoint number, all in uppercase. Or type the character or its hex number in the <samp>Find</samp> control, bottom left.</p>

    <p class="instructions"><span class="leadin">Fonts.</span> To view this page as intended, you need ${ script } fonts.  The page comes with a webfont. Click the blue vertical bar at the bottom right of the page to apply other fonts, if you have them on your system.</p>

    <p class="instructions">The large character in the box will not be rendered unless the webfont downloaded with the page or a system font has a glyph for it. If there is no glyph and you want to see what it looks like, click on the <img src="../common/showImages.png" alt="Toggle images" style="vertical-align: middle;"/> icon to toggle the large characters between font glyphs and graphics.</p>

    <p class="instructions"><span class="leadin">Language usage lists.</span> Information about languages that use these characters is taken from the list maintained for the <a href="../../app-charuse/index.html">Character usage lookup</a> app. The list is not exhaustive.</p>

    <p class="instructions"><span class="leadin">References &amp; further information.</span> References are indicated by superscript letters, optionally followed by page numbers. Wherever possible, those contain direct links to the source material. When there is also an arrow → it is worth following the link for  additional information. The references are listed at the bottom of the page, but the links should take you to the exact location of the source, wherever possible.</p>

    <p class="instructions"><span class="leadin">UniView.</span><a href="../../uniview/index.html">UniView</a>'s notes feature pulls in information about characters from this page.</p>



    <details class="instructions"><summary onclick="chMarkup = document.querySelectorAll('.charimg')
    chList = ''
    for (i=0;i<chMarkup.length;i++) chList += chMarkup[i].textContent+' '
    document.getElementById('charsListed').innerHTML = chList
">Show all characters listed here</summary>
    <p id="charsListed"></p>
    </details>


    <details class="instructions"><summary>Make a list of characters with notes for a spreadsheet:</summary>
    <p>Add list of characters here: <input id="notesListIn" placeholder=">"> <button 
        onclick="document.getElementById('notesListOut').value = getNotesList(document.getElementById('notesListIn').value); document.getElementById('notesListOut').select()"
    >GO</button></p>
    <p>Result: <textarea id="notesListOut" placeholder=">"></textarea> <button
        onclick="document.getElementById('notesListIn').value = '';document.getElementById('notesListOut').value = '';">Clear</button></p>
    </details>

    <details class="instructions"><summary>Make a list of characters with notes for UniView:</summary>
    <p><button 
        onclick="document.getElementById('noteCodepointsListOut').value = listCharsWithNotes(); document.getElementById('noteCodepointsListOut').select()"
        >GO</button></p>
    <p>Result: <textarea id="noteCodepointsListOut" placeholder=">"></textarea></p>
    </details>
	` 
	node.parentNode.open = true
	}
else { 
	node.parentNode.open = false
	node.innerHTML = ''
	}
}










function getNotesList (charList) {
    console.log(charList)
    charList = charList.replace(/\n/,' ')
    //charList = charList.replace(/[\s]+/,' ').trim()
    listArray = charList.split(' ')
    out = ''
    for (i=0;i<listArray.length;i++) {
        console.log('listArray:>'+listArray[i]+'<')
        if (listArray[i][0] && (listArray[i].includes('\\u') || listArray[i].includes('&#x'))) {
             if (listArray[i].includes('\\u')) listArray[i] = listArray[i].replace('\\u','0x').replace(/\{/,'').replace(/\}/,' ')
             if (listArray[i].includes('&#x')) listArray[i] = listArray[i].replace('&#x','0x').replace(/;/,'').replace(/\{/,'').replace(/\}/,' ')
             console.log('Convert escapes from',listArray[i])
             if ([...listArray[i]].length > 1) {
                out += '\n'
                continue
                }
             listArray[i] = String.fromCodePoint(listArray[i])
             console.log('Convert escapes to',listArray[i])
            }
       
        if (listArray[i] === '') {
            out += '\n'
            console.log('gap')
            continue
            }
        console.log([...listArray[i]].length)
        if ([...listArray[i]].length > 1) {
            out += '\n'
            console.log('sequence:',listArray[i])
            continue
            }
        else {
            char = listArray[i].codePointAt(0)
            hex = ''
            hex = char.toString(16).toUpperCase()
            while (hex.length < 4) hex = '0'+hex
            ptr = 'char'+hex
            console.log(ptr)
            }
        
        target = document.getElementById(ptr)
        if (target == null) out += '\n'
        else {
            letters = target.querySelector('.letter')
            if (letters == null) out += '\n'
            else out += '✓\n'
            }
        }
    return(out)
    }






