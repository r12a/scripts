/* jshint strict: false */
/* globals autoExpandExamples, egList */


ch = ''
charData = {}
traceSet = new Set([])


// check for parameters and take appropriate action
parameters = location.search.split('&');
parameters[0] = parameters[0].substring(1)
for (var p=0;p<parameters.length;p++) {
	pairs = parameters[p].split('=')
	if (pairs[0] == 'q' && pairs[1]) ch = decodeURIComponent(pairs[1])
	}






function showCharDetails (ch) {
    // creates a heading and a div for a given orthography
    // window.charDetails is the code from xx-details
    
    // ch, a character or string
    
    // langTag, defined in globals.js
    // charDetails, 
    // spreadsheetRows
    // cols
    
    var div, h2, p, out, shapes
    //console.log('showCharDetails', ch, langTag)


	if (typeof charDetails === 'undefined') return
	
    // make sure we're only looking for a single character
    if (ch.length > 1) {
        ch = [... ch][0]
        }

	if (typeof charDetails[ch] === 'undefined') return
    
	if (typeof spreadsheetRows[ch] === 'undefined') return   
    
	
    charBlock = document.createElement('div')
    charBlock.className = 'character'
    
    
    // Add the current character - use shape column, if it is defined
    div = document.createElement('div')
    div.lang = langTag
    div.className = 'currentCharacter'
    
    if (cols['shape'] !== 0 && spreadsheetRows[ch] && spreadsheetRows[ch][cols['shape']] && spreadsheetRows[ch][cols['shape']] !== '') {
        if (spreadsheetRows[ch][cols['shape']] === '4') div.appendChild(document.createTextNode(`${ ch } ${ ch }${ ch }${ ch }`))
        else if (spreadsheetRows[ch][cols['shape']] === '2') div.appendChild(document.createTextNode(`${ ch } \u200D${ ch }`))
        else div.appendChild(document.createTextNode(spreadsheetRows[ch][cols['shape']]))
       }
    else {
        div.appendChild(document.createTextNode(ch))
        }
    charBlock.appendChild(div)
   
    
    // add the title
    h2 = document.createElement('h2')
    h2.id = langTag
    h2.appendChild(document.createTextNode(languageName))
    charBlock.appendChild(h2)


    // add the Unicode name
    p = document.createElement('p')
    p.className = 'unicodeName'
    p.onclick = copyToClipboard
    p.appendChild(document.createTextNode(spreadsheetRows[ch][cols['ucsName']]))
    charBlock.appendChild(p)


    // create the basic info
    p = document.createElement('p')
    p.className = 'basicInfo'
    if (spreadsheetRows[ch][cols['typeLoc']]) {
        span = document.createElement('span')
        span.className = 'typeLoc'
        span.innerHTML = spreadsheetRows[ch][cols['typeLoc']]
        p.appendChild(span)
        }
    if (spreadsheetRows[ch][cols['nameLoc']]) {
        span = document.createElement('span')
        span.className = 'name'
        span.innerHTML = spreadsheetRows[ch][cols['nameLoc']]
        p.appendChild(span)
        }
    if (spreadsheetRows[ch][cols['nnameLoc']]) {
        span = document.createElement('span')
        span.lang = langTag
        span.className = 'nnameLoc'
        span.innerHTML = spreadsheetRows[ch][cols['nnameLoc']]
        p.appendChild(span)
        }
    if (spreadsheetRows[ch][cols['class']]) {
        span = document.createElement('span')
        span.className = 'class'
        span.title = 'Unicode general category.'
        span.innerHTML = spreadsheetRows[ch][cols['class']]
        p.appendChild(span)
        }
    if (spreadsheetRows[ch][cols['transLoc']]) {
        span = document.createElement('span')
        span.className = 'transLoc'
        span.title = 'Transliteration used in these documents.'
        span.innerHTML = spreadsheetRows[ch][cols['transLoc']]
        p.appendChild(span)
        }
    charBlock.appendChild(p)


			//if (spreadsheetRows[cchar][cols['transLoc']]) out += '<span class="localtrans trans" title="How transliterated in the scheme used for this document.">'+spreadsheetRows[cchar][cols['transLoc']]+'</span>'



	div = document.createElement('div')
	div.className = 'charDetails'
   
    div.innerHTML = makeDetails(ch, langTag)
    
    charBlock.appendChild(div)

    var hex = ch.codePointAt(0).toString(16).toUpperCase()
    while (hex.length < 4) hex = '0'+hex 


	div = document.createElement('div')
	div.className = 'orthogFilePath'
    out = ''
    out += 'Find in: '
    out += `<a href="../${ orthogFilePath }.html?showIndex#index${ ch }" target="_blank" title="Click on the character name, then one of the links on the orange space at the bottom of the page.">Orthography</a>`
    out += ` • <a href="../${ blockDirectoryName }/character.html?q=${ ch }#${ langTag }" target="_blank">Other uses</a>`
    out += ` • <a href="../../uniview/index.html?char=${ hex }" target="_blank">UniView</a>`
    out += ` • <a href="../../pickers/${ pickerDir }/index.html?text=${ ch }" target="_blank">Picker</a>`
    out += ` • <a href="../${ orthogFilePath }_vocab.html?q=${ ch }" target="_blank">Term list</a>`
    out += ` • <a href="../../app-charuse/index.html?language=${ charUsageBCP }&charlist=${ ch }" target="_blank">Character usage</a>`
    div.innerHTML = out
    charBlock.appendChild(div)

    document.getElementById('output').appendChild(charBlock)



    expandCharMarkup()
	if (typeof autoExpandExamples[langTag] !== 'undefined') addExamples(langTag)
	convertTranscriptionData(blockLangtag)
    
    
    // expand any .characterMarkup elements (mainly for cursive)
    shapes = document.querySelectorAll('.characterShape')
    if (cols['shape'] && cols['shape'] !== 0) {
        for (i=0;i<shapes.length;i++) {
            ch = shapes[i].textContent
            if (spreadsheetRows[ch] && spreadsheetRows[ch][cols['shape']] && spreadsheetRows[ch][cols['shape']] !== '') {
                if (spreadsheetRows[ch][cols['shape']] === '4') shapes[i].innerHTML = `${ ch } ${ ch }${ ch }${ ch }`
                else if (spreadsheetRows[ch][cols['shape']] === '2') shapes[i].innerHTML = `${ ch } ${ ch }${ ch }`
                else shapes[i].innerHTML = spreadsheetRows[ch][cols['shape']]
                }
            shapes[i].className = 'charShape'
            shapes[i].lang = langTag
            }
        }
    }




function copyToClipboard(evt) {
  // Copies the content of an element to the clipboard when clicked on
  // Currently applied to #characterName and #characterAsText

  var node = evt.target
  navigator.clipboard.writeText(node.textContent)


  document.getElementById('copyNotice').style.display = 'block'
  setTimeout(() => {
    document.getElementById('copyNotice').style.display = 'none'
  }, "500")
}





function makeDetails (chars) {
    // Add  details for character(s) below a chart.
    // GLOBALS notesLangtag
    // blockDirectoryName
    // IF MAKING CHANGES HERE, MAKE THEM ALSO IN makePanelDetail FUNCTION
    
    // global charDetails spreadsheetRows cols
    var out, charArray, i, lang, dir

    if (typeof charDetails === 'undefined') return

    var out = ''
    var charArray = [... chars]
    var lang = window.notesLangtag
    var dir = window.blockDirectoryName

    for (var i=0;i<charArray.length;i++) {
        if (spreadsheetRows[charArray[i]]) {
            // make title to side
            //out += `<tr><th class="cdChar" onclick="this.parentNode.parentNode.parentNode.style.display='none'"><span class="ex" lang="${ lang }">${ charArray[i] }</span><br><span class="cdCharClose">x</span></th>`
            
            // add the full details
            //out += '<td class="cdData">'

            out += printDetails(charArray[i])
            //out += '</td></tr>'
            }
        }
    //out += '</table>'
    return out
    }








function printDetails (char) {
    // Print the meat of a details panel.
    // GLOBALS notesLangtag, blockDirectoryName
    // this is called bymakeDetails 
    // char, the character
    var lang = window.notesLangtag
    var dir = window.blockDirectoryName
    var out = ''


    // add information about correspondences

   // check for decomposable characters
    if (char.normalize('NFD') != char) {
        out += '<p class="decomposition">'
        out += `Decomposes to <span class="ch">${ char.normalize('NFD') }</span>.`
        if (char.normalize('NFD') === char.normalize('NFC')) out += '<br><strong>The NFC normalised form of this character is the decomposed sequence!</strong>'
        out += '</p>'
        }           

    // vowel correspondences
    if (cols.ivowel>0 && spreadsheetRows[char][cols.ivowel]) {
        out += `<p class="vowelPairing">The corresponding independent vowel is <span class="ch">${ spreadsheetRows[char][cols.ivowel] }</span></p>`
        }
    if (cols.dvowel>0 && spreadsheetRows[char][cols.dvowel]) {
        out += `<p class="vowelPairing">The corresponding dependent vowel is <span class="ch">${ spreadsheetRows[char][cols.dvowel] }</span></p>`
        }

    // upper/lowercase
    if (cols.uc>0 && spreadsheetRows[char][cols.uc]) {
        out += `<p class="charUppercase">Uppercase is <span class="ch">${ spreadsheetRows[char][cols.uc] }</span></p>`
        }
    if (cols.lc>0 && spreadsheetRows[char][cols.lc]) {
        out += `<p class="charLowercase">Lowercase is <span class="ch">${ spreadsheetRows[char][cols.lc] }</span></p>`
        }

    // subjoined forms
    if (cols.subj>0 && spreadsheetRows[char][cols.subj]) {
        out += `<p class="subjPair">Subjoined form is <span class="ch">${ spreadsheetRows[char][cols.subj] }</span></p>`
        }
    if (cols.fform>0 && spreadsheetRows[char][cols.fform]) {
        out += `<p class="subjPair">Non-subjoined form is <span class="ch">${ spreadsheetRows[char][cols.fform] }</span></p>`
        }

    // tone correspondences
    if (cols.htone>0 && spreadsheetRows[char][cols.htone]) {
        out += `<p class="tonePairing">High class equivalent is <span class="ch">${ spreadsheetRows[char][cols.htone] }</span></p>`
        }
    if (cols.ltone>0 && spreadsheetRows[char][cols.ltone]) {
        out += `<p class="tonePairing">Low class equivalent is <span class="ch">${ spreadsheetRows[char][cols.ltone] }</span></p>`
        }

      out += '</p>'

    // add the details from xx-details.js
    if (charDetails[char]) out += charDetails[char]

 
    // onset-final correspondences
    out += `<p>`
     if (cols.onset>0 && spreadsheetRows[char][cols.onset]) {
        out += `<p class="syllPairing">Onset equivalent is <span class="ch">${ spreadsheetRows[char][cols.onset] }</span></p>`
        }
    if (cols.finals>0 && spreadsheetRows[char][cols.finals]) {
        out += `<p class="syllPairing">Syllable-final equivalent is <span class="ch">${ spreadsheetRows[char][cols.finals] }</span></p>`
        }
    out += `</p>`

    return out
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









debug = false
marks = new Set()


function setMarks (languageName) {
    // sets the global variable marks as a set containing all combining marks in the spreadsheet
    if (languageName) console.log("Running setMarks for ",languageName)
    for (var char in spreadsheetRows) {
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
        //else out += `<a href="character.html?q=${ unicodeChars }"><span class="uname">${ unicodeNames }</span></a></span>`
        else out += `<a href="#char${ hex }"><span class="uname">${ unicodeNames }</span></a></span>`
        
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
            //unicodeNames += spreadsheetRows[charlist[c]][cols['ucsName']].replace(/:/,'')
            //unicodeNames += `<a href="character.html?q=${ charlist[c] }"><span class="uname">${ spreadsheetRows[charlist[c]][cols['ucsName']].replace(/:/,'') }</span></a>` 
            unicodeNames += `<a href="#char${ hex }"><span class="uname">${ spreadsheetRows[charlist[c]][cols['ucsName']].replace(/:/,'') }</span></a>` 
            

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
        //else out += `<a href="character.html?q=${ unicodeChars }"><span class="uname">${ unicodeNames }</span></a></span>`
        else out += `${ unicodeNames }</span>`
        
        if (window.hideBlockName) {
            let re = new RegExp(window.hideBlockName, 'g')
            charMarkup[i].outerHTML = out.replace(re,'')
            }
        else charMarkup[i].outerHTML = out
        }
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






function convertTranscriptionData (lang) {
    // adds the Latin transcriptions that are floated right, for a given language
    // local insertTranscriptions t para 
    // global cols spreadsheetRows
	var insertTranscriptions = document.querySelectorAll('.insertTranscription')
	
	// do the inserted transcription locations
	for (var t=0;t<insertTranscriptions.length;t++) {
		if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
			var para = ''
			for (var i=0;i<cols.othertranscriptions.length;i++) {
				if (spreadsheetRows[insertTranscriptions[t].textContent] && spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]) {
                    if (cols.othertranscriptions[i][1]) para += cols.othertranscriptions[i][1]+': '
                    para += '<span class="transc">'+spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]+'</span>'
					if (i<cols.othertranscriptions.length-1) para += '<br>'
					}
				}
            
            //para += `<br>translit: <span class="trans">${ spreadsheetRows[insertTranscriptions[t].textContent][cols['transLoc']] }</span>`
            
			insertTranscriptions[t].innerHTML = para
			insertTranscriptions[t].className = 'transcription'
			}
		else { insertTranscriptions[t].outerHTML = '' }
		}
	}





function getScriptGroup (charNum, blockfile) {
	// find the name of the script group for the character in charNum
	// codepoint: dec codepoint value
    // blockfile: boolean, determines whether to return the group name or block file name
	// returns: if blockfile not set, the Unicode block name, with spaces converted to _
    //          if blockfile set, the name of the block file under scripts
	//          or, if neither is found, ''
    // called by showNameDetails & toggleImages (block-functions.js)
    // local field i
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



/* FUNCTIONS FOR THE XX-CHARACTER PAGES */

function getCharList () {
// get a list of characters for the xx-character files
    out = ''
    for (chr in spreadsheetRows) {
        if (typeof spreadsheetRows[chr][cols['status']] === 'undefined' ||
            spreadsheetRows[chr][cols['status']] === 'x' ||
            spreadsheetRows[chr][cols['status']] === 'o' ||
            spreadsheetRows[chr][cols['status']] === '?' ||
            spreadsheetRows[chr][cols['status']] === 'status' ||
            [... chr].length > 1 ||
            spreadsheetRows[chr][cols['status']].startsWith('/') ||
            spreadsheetRows[chr][cols['status']].startsWith('var'))
            { console.log('Avoiding',chr,'status is ',spreadsheetRows[chr][cols['status']])} // do nothing
        else out += chr
        }

    return out
    }




function getFindStr (hex) {
// return a value for the Find box

    if (hex.length === 1) hex = hex.codePointAt(0).toString(16)
    while(hex.length<4) hex='0'+hex
    return '#char'+hex.toUpperCase()
    }




function toggleImages () {
	// replace all the large characters with images
	var testnode, toImg, i, nodes, id, dec, group
    
	// check whether we're converting to images or characters
	testnode = document.querySelector('.largeChar')
	if (testnode.textContent == '') toImg = false
	else toImg = true
	nodes = document.querySelectorAll('.largeChar')
	
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




function makeXXCharacterPage () {
    // write the data to the page
    var panel

    document.querySelector('header').innerHTML = `
        
        <div id="site-navigation"> <img id="bp_picture" alt=" " src="../../shared/images/world.gif"></div>
        <div id="boilerplate">
        <div id="topbar"><a href="/">r12a</a> &gt;&gt; docs</div>
        <div id="sitelinks" class="noprint">
        <a href="/scripts">scripts</a>&nbsp; <a href="/doclist">docs</a>&nbsp; <a href="/applist">apps</a>&nbsp; <a href="/maplist">maps</a>&nbsp; <a href="/blog/">blog</a>&nbsp; <a href="/photos">photos</a>&nbsp;&nbsp;</span></div>
        </div>
      
        
        
        <h1>${ languageName } (${ orthogName }) db</h1>\n
        <p class="intro">Shows data in the database for this orthography.</p>
        <dialog id="copyNotice">Copied !</dialog>
        
        <nav id="top">
            <img src="../common/showImages.png" alt="Toggle images" title="Toggle large characters between images and text." onclick="toggleImages()">
            <br>
            <a href="#site-navigation"><img src="../../shared/images/up.png" alt="go to page top" title="Jump to top of page."></a>
            <br>
            <input type="text" id="findInput" placeholder="Find..." style="width: 4em; text-align: center;" onchange="var hex=this.value; if (hex!=''){ document.location = getFindStr(hex); }">
            </nav>
        `
        
    document.querySelector('title').textContent = `${ langTag } db dump (${ orthogName })`
    //document.querySelector('header').style.fontSize = '2rem'
    
    // create a panel
    panel = document.createElement('div')
    panel.id = 'panel'
    panel.style.display = 'none'
    document.querySelector('header').appendChild(panel)

    parseSpreadsheet(spreadsheet)

    setMarks(languageName)

    charList = getCharList()
    charArray = [... charList]
    charArray = charArray.sort()
    for (item=0;item<charArray.length;item++) showCharDetails(charArray[item])
    cChars = document.querySelectorAll('.currentCharacter')
    for (c=0;c<cChars.length;c++) {
        cChar = [... cChars[c].textContent][0]
        titleNode = cChars[c].nextElementSibling
        hex = cChar.codePointAt(0).toString(16).toUpperCase()
        while (hex.length < 4) hex = '0'+hex
        content = `<bdi class="largeChar" onclick="navigator.clipboard.writeText(this.textContent); document.getElementById('copyNotice').style.display = 'block'; setTimeout(() => { document.getElementById('copyNotice').style.display = 'none' }, '500')">${ cChar }</bdi><span class="largeHex" onclick="document.location = getFindStr('${ hex }')">${ hex }</span>`
        titleNode.innerHTML = content
        titleNode.id = 'char'+hex
        titleNode.style.fontSize = '3rem'
        }
    }



function showNameDetails (chars, clang, base, target, panel, list, translit, ipa) {
    // called by onclick created by shownames_setOnclick & shownames_setImgOnclick & listAll
    // chars (string), alt text of example
    // clang (string), lang attribute value of example img
    // base (string), path for link to character detail
    // target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window
    // list (string), if not null, indicates that spaces and nbsp should be ignored
    // local out charArray chardiv charimg thename thelink hex dec blockname blockfile c
    // global charData pickerDir
    // calls getScriptGroup

    // to show per-grapheme ipa the ipa transcriptions should have § as grapheme separator (and syllables should be separated by '.'). Unpronounced segments are represented by – (en hyphen).  Monosyllabic words don't need any extra stuff.
    // កន្ត្រៃ|scissors|kɑː§n.§t§raj§–

    var dir, characterList, graphemes, ptr, transcriptions, gloss, charArray
	var chardiv, charimg, thename, thelink, hex, dec, blockname, blockfile

	// check whether the calling page has set a base and target window: if not base, point to UniView
	if(typeof base === 'undefined' || base === '') { base = '../../uniview/index.html?char=' }
	if(typeof target === 'undefined') { target = 'c' }
	if(typeof list === 'undefined') { list = null }
	if(typeof translit === 'undefined') { translit = '' }
	  
	// clear and show the panel
	panel.innerHTML = ''
	panel.style.display = 'block'
    dir = ''
    if (typeof window.direction === 'string') dir = window.direction
    else if (typeof template !== 'undefined' && typeof template.direction === 'string') dir = template.direction
    
    
	var out = '<div id="ruby">'
	
    // get any IPA data provided - should be pre-separated for graphemes by §
    if (typeof ipa === 'string' && ipa !== '') ipa = ipa.split('§')
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


    // draw the glosses
    iconURL = '../common29/icons/copytiny.svg'
    gloss = '<div class="multilineGlossedText">'
    for (t=-1;t<graphemes.length;t++) {
        if (t===-1) {
            gloss += `<div class="stack"><span class="rt translitGloss" lang="und-fonipa" title="Transliteration of the text."><img src="${ iconURL }" class="copyIcon" onclick="copyPanelText('.translitGloss')" title="Copy the transliteration." alt="Copy transliteration"></span><span class="rb"><img src="${ iconURL }" onclick="copyPanelText('.rb')" class="copyIcon" title="Copy the text." alt="Copy text"></span>`
            if (ipa !== false) {
                if (ipa[t+1]) gloss += `<span class="rt IPAGloss" lang="und-fonipa" title="IPA transcription of the text."><img class="copyIcon" src="${ iconURL }" onclick="copyPanelText('.IPAGloss')" title="Copy the IPA transcription." alt="Copy IPA"></span>`
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
    
        
    
    // add instructions line
	out += '<p id="advice" style="line-height:1;">Glossed lines are transliteration/text/IPA.<br>Click on character names below for detailed information.</p>'
	
	// create a list of characters
	if (list) chars = chars.replace(/ /g,'').replace(/\u00A0/g,'') // remove spaces if list
    charArray = [...chars]

    out += '<div id="listOfCharacters">'
	for (var c=0; c<charArray.length; c++) { 
        dec = charArray[c].codePointAt(0)
        hex = dec.toString(16)
        while (hex.length < 4) { hex = '0'+hex }
        hex = hex.toUpperCase()
 
		if (spreadsheetRows[charArray[c]]) {            
			out += '<div class="panelCharacter">'
            out += `<img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }" style="height:2rem;">`
            out += `<a href="#char${ hex }">`
            out += spreadsheetRows[charArray[c]][cols['ucsName']]
            out += '</a>\n'
			}
		else {
			out += `<div class="panelCharacter"><a target="c" href="../../uniview/index.html?charlist=${ charArray[c] }&char=${ hex }"><img src="../../c/${ getScriptGroup(dec, false) }/large/${ hex }.png" alt="${ charArray[c] }"> U+${ hex } No data for this character</a></div>`
			}

        out += '</div>'
		}
	out += '</div>'
	
    
	// write out the bottom line
	out += '<p style="text-align:left; margin-block-start: 1em; line-height:2rem;" id="panelSharingLine">'
    out += '<button onclick="copyPanelList()" style="cursor:copy;">Copy list</button> \u00A0 '
	
    out += `<button onclick="openExportWindow('character.html?q=${ chars[0] }')">Notes</button> \u00A0 `
	
    out += `<button onclick="openExportWindow('../../app-analysestring/index.html?chars=${ chars }')">Details</button> \u00A0 `
	
    out += `<button onclick="openExportWindow('../../uniview/index.html?charlist=${ chars }')">UniView</button> \u00A0 `
	
    out += `<button onclick="openExportWindow('../../scripts/apps/graphemes/index.html?gc=${ chars }')">Graphemes</button> \u00A0 `
	
    if (window.pickerDir) {
        out += `<button onclick="openExportWindow('../../pickers/${ window.pickerDir }/index.html?text=${ chars }')">Character App</button> \u00A0 `
	   }

    // add a link to the _vocab page
    if (typeof window.languageName === 'undefined') var fragid = ''
    else fragid = '#'+window.languageName

    // figure out where to find the url for the _vocab page
    var url
    if (typeof template !== 'undefined' && typeof template.vocablocation === 'string')  url = `../../scripts/${ template.vocablocation }.html`
    
    else url = `${ window.langTag }_vocab`
    
    if (typeof window.removeVowels === 'function') chars = removeVowels(chars)

    out += `<button onclick="openExportWindow('${ url }.html?q=${ chars }')">Terms</button> \u00A0 `
		
	// add a close button
	out += '<p id="character_panel_close_button" '
	out += ' onclick="document.getElementById(\'panel\').style.display = \'none\'"'
	out += '>X</p>'
	panel.innerHTML = out
	}



function transliteratePanel (str, lang) {
// transliterate the rb tags in the panel

var strArray = [...str]
str = ''

var exclusions = new Set(['(',')','[',']','.',' '])
for (i=0;i<strArray.length;i++) {
    if (spreadsheetRows[strArray[i]][cols['transLoc']]) str += spreadsheetRows[strArray[i]][cols['transLoc']]
    else str += ''
    }

return str.trim()
}


function openExportWindow (url) {
	var shareWindow = window.open(url, 'analyse') 
	shareWindow.focus()
	}

function copyPanelList () {
    var lines = document.getElementById('listOfCharacters').querySelectorAll('.panelCharacter')
    var imgs = document.getElementById('listOfCharacters').querySelectorAll('img')
    var out = ''
    for (var i=0;i<lines.length;i++) out += imgs[i].alt+' '+lines[i].textContent
	var node = document.getElementById('panelCopyField')
    node.value = out
	node.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	}


function copyPanelText (type) {
    var text = document.getElementById('ruby').querySelectorAll(type)
    var out = ''
    for (var i=0;i<text.length;i++) out += text[i].textContent
    if (type === '.IPAGloss') out = out.replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
	var node = document.getElementById('panelCopyField')
    node.value = out
	node.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	}
