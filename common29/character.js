/* jshint strict: false */
/* globals autoExpandExamples, egList */


ch = ''
charData = {}
function showNameDetails () {
    // stop the mouseover producing a composition panel
    // should probably be fixed by removing the mouseovers...
    }
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
    
    var table, tr, td
    console.log('showCharDetails', ch, langTag)
    
	if (typeof charDetails === 'undefined') return
	
    // make sure we're only looking for a single character
    if (ch.length > 1) {
        ch = [... ch][0]
        }

	if (typeof charDetails[ch] === 'undefined') return
    
	if (typeof spreadsheetRows[ch] === 'undefined') return   
    
	
    
    
    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode(languageName))
    document.getElementById('output').appendChild(h2)

    p = document.createElement('p')
    p.className = 'basicInfo'
    if (cols['shape'] !== 0 && spreadsheetRows[ch][cols['shape']] && spreadsheetRows[ch][cols['shape']] !== '') {
        span = document.createElement('span')
        span.lang = langTag
        span.className = 'charShape'
        span.innerHTML = spreadsheetRows[ch][cols['shape']]
        p.appendChild(span)
        }
    if (spreadsheetRows[ch][cols['nnameLoc']]) {
        span = document.createElement('span')
        span.lang = langTag
        span.className = 'nnameLoc'
        span.innerHTML = spreadsheetRows[ch][cols['nnameLoc']]
        p.appendChild(span)
        }
    if (spreadsheetRows[ch][cols['nameLoc']]) {
        span = document.createElement('span')
        span.className = 'name'
        span.innerHTML = spreadsheetRows[ch][cols['nameLoc']]
        p.appendChild(span)
        }
    if (spreadsheetRows[ch][cols['typeLoc']]) {
        span = document.createElement('span')
        span.className = 'typeLoc'
        span.innerHTML = spreadsheetRows[ch][cols['typeLoc']]
        p.appendChild(span)
        }
    document.getElementById('output').appendChild(p)

	div = document.createElement('div')
	div.className = 'charDetails'
   
    div.innerHTML = makeDetails(ch, langTag)
    
    document.getElementById('output').appendChild(div)

    expandCharMarkup()
	if (typeof autoExpandExamples[langTag] !== 'undefined') addExamples(langTag)
	convertTranscriptionData(blockLangtag)
    }


//p class="charShape"><span class="ex" lang="ar">آ ـآ</span></p>



function showCharDetailsX (ch) {
    // creates a heading and a div for a given orthography
    // window.charDetails is the code from xx-details
    
    var table, tr, td
    console.log('showCharDetails', ch)
    
	if (typeof charDetails === 'undefined') return
	
    if (ch.length > 1) {
        ch = [... ch][0]
        }

	if (typeof charDetails[ch] === 'undefined') {
        div = document.createElement('div')
        div.className = 'charDetails'

        div.innerHTML = "Not used."

        document.getElementById('output').appendChild(div)
        return
        }
    
    else {
    h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode(languageName))
    document.getElementById('output').appendChild(h2)


	div = document.createElement('div')
	div.className = 'charDetails'
   
    div.innerHTML = makeDetails(ch, langTag)
    
    document.getElementById('output').appendChild(div)
}

    expandCharMarkup()
	addExamples(langTag)
	//convertTranscriptionData(ch)
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
        out += `Decomposes to ${ char.normalize('NFD') }.`
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
	console.log("For language ",lang,'Transcriptions to check: ',insertTranscriptions.length)
	
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









