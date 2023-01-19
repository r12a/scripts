var wordList = contents.split('\n')
var spreadsheetInfo = {}
//wordList.push('|End of list reached.||')
var metadata, value
const TERM = 0
const MEANING = 1
const IPA = 2
const TRANS = 3
const NOTES = 4
const WIKI = 5
const IPAraw = 6




document.querySelector("body").addEventListener('keydown', closeDialogEsc)


function closeDialogEsc (e) {
    // closes the dialog box and panel when escape is pressed
    if (e.code === 'Escape') {
        document.getElementById('panel').style.display = 'none'
        }
}


// get names and ipa info from the spreadsheet
if (document.getElementById('tabPlaceholder')) {
    var rows = spreadsheet.split('\n')
    for (r=0;r<rows.length;r++) {
        var temp = rows[r].split('\t')
        var cps = [...temp[0]]
        if (cps.length === 1) {
            spreadsheetInfo[temp[0]] = {}
            spreadsheetInfo[temp[0]]['name'] = temp[cols['ucsName']]
            spreadsheetInfo[temp[0]]['ipa'] = temp[cols['ipaLoc']]
            }
        }
    //spreadsheet = ''
    rows = ''
    temp = ''
    }


// make spreadsheetRows from the spreadsheet (for the panel routines)
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

// create a charData array - (this removes reliance on the all-names.js file)
// global, spreadsheetRows
window.charData = {}

for (var c in spreadsheetRows) {
    charData[c] = spreadsheetRows[c][cols['ucsName']].replace(/U\+[^:]+: /,'')
    }


// collect the sets and make markup
var setMarkup = ''
if (collections.length === 0) setMarkup = '<div class="set">none</div>'
else {
    for (set=0;set<collections.length; set++) {
        setMarkup += `<div class="set"><span class="symbol" onclick="navigator.clipboard.writeText(this.textContent)">${ collections[set].symbol }</span> <span class="desc">${ collections[set].desc }</span></div>`
        }
    }


// set the global variable marks as a set containing all combining marks in the spreadsheet
window.marks = new Set()
for (var char in spreadsheetRows) {
    if (spreadsheetRows[char][cols['class']].startsWith('M')) window.marks.add(char)
    }


// build the tab markup
if (document.getElementById('tabPlaceholder')) {
    document.getElementById('tabPlaceholder').innerHTML =
    `
    <div id="tabs">
    <h2 id="list_tab" onClick="switchTabTo(this.id)">List</h2>
    <h2 id="find_tab" onClick="switchTabTo(this.id)">Find</h2>
    <h2 id="freq_tab" onClick="switchTabTo(this.id);listFrequency()">Frequency</h2>
    </div> 


    <div id="list_tab_area">
    <p style="font-style: italic; font-size: 80%;"><label>Total items: <span id="totalLemmas">–</span></label></p>
    <table id="printout"></table>
    </div>


    <div id="find_tab_area">
    <p style="margin-inline-end:1em;"><label>Find words containing the following: <input id="needle" type="text" placeholder="Regular expressions can be used."  onInput="document.getElementById('foundItems').innerHTML = findWords(document.getElementById('needle').value, '')"></label> &nbsp;&nbsp;
    Search in: <select id="searchCol">
    <option value="all">All</option>
    <option value="0">Terms</option>
    <option value="1">Meanings</option>
    <option value="2">IPA</option>
    <option value="3">Transcriptions</option>
    </select>&nbsp;&nbsp;
    <button onClick="document.getElementById('foundItems').innerHTML = findWords(document.getElementById('needle').value, '')">Go</button>
    </p>


    <details><summary style="font-style: italic; font-size: 80%;">Sets</summary>
    ${ setMarkup }
    </details>
    
        
    <p style="font-style: italic; font-size: 80%;"><label>Items found: <span id="found">–</span></label><br/><table id="foundItems"></table></p>
    </div>


    <div id="freq_tab_area">
    <p>Frequency of individual characters across all the entries.</p>
    <p style="font-style: italic; font-size: 80%;">Total sample size: <span id="totalFreq">–</span> characters. &nbsp;&nbsp; Unique characters: <span id="uniqueChars">-</span>. &nbsp;&nbsp; Averaged: <span id="averaged">-</span> &nbsp; <img src="../../shared/images/help.png" alt="[?]" id="averagedHelp"></p>
    <table id="freqout"></table>
    </div>
    `
    }





// remove blank lines
for (var m=0;m<wordList.length;m++) {
	if (wordList[m].trim() == '' || wordList[m].startsWith('#')) {
		metadata = wordList.splice(m, 1)
		m--
		}
	}


// add spaces around term, ipa, & transc to facilitate word edge searching
// check whether there are notes (affects drawing of table later)
terms.thereAreNotes = false
for (var n=0;n<wordList.length;n++) {
    fields = wordList[n].split('|')
    fields[TERM] = ' '+fields[TERM]+' '
    fields[IPAraw] = ' '+fields[IPA]+' '
    fields[IPA] = ' '+fields[IPA]+' '
    fields[IPA] = fields[IPA].replace(/§/g,'').replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
	if (typeof fields[TRANS] === 'undefined' || fields[TRANS] === '') {
        fields[TRANS] = ''
        }
    else fields[TRANS] = ' '+fields[TRANS]+' '
	if (typeof fields[NOTES] === 'undefined' || fields[NOTES] === '') {
        fields[NOTES] = ''
        }
    else terms.thereAreNotes = true
    wordList[n] = fields.join('|')
	}



// ------------------

window.autoExpandExamples = {}
window.contents = ''







function initialise () {
	if (!document.getElementById) { alert('You need a JavaScript enabled browser to use these pages.'); }

	// draw up the list
	printAll()
	switchTabTo('list_tab')

	// check for parameters and take appropriate action
	var parameters = location.search.split('&')
	parameters[0] = parameters[0].substring(1)
	for (var p=0;p<parameters.length;p++) {  
		var pairs = parameters[p].split('=')
		if (pairs[0] == 'q' && pairs[1]) { // find query, value is string to search for
			document.getElementById('needle').value = decodeURIComponent(pairs[1])
			switchTabTo('find_tab')
			document.getElementById('foundItems').innerHTML = findWords(document.getElementById('needle').value, '')
			}
		}
	}





function printAll () {
	var out = ''
    var panel = document.getElementById('panel')
	for (var i=0;i<wordList.length;i++) {
        var fields = wordList[i].split('|')
		out += '<tr>'

        out += `<td lang="${ terms.language }" dir="${ terms.direction }" style="font-family:${ terms.fontFamily }; font-size:${ terms.fontSize }">`
        
        // figure out whether to link to a different string for Wiktionary lookup
        if (fields[WIKI]  && fields[WIKI].trim() !== 'x') out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ fields[WIKI] }#${ terms.wiktionaryLink }">${ fields[TERM] }</a>`
        else if (fields[WIKI]) out += `${ fields[TERM] }`
        else out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ fields[TERM] }#${ terms.wiktionaryLink }">${ fields[TERM] }</a>`
        
        out += `<img src="../common29/icons/copytiny.svg" alt="copy" title="Copy to clipboard" class="copyme" onclick="navigator.clipboard.writeText('${ fields[TERM].trim() }')">`

        out += `<span onclick="showNameDetails('${ fields[TERM].trim() }', '${ terms.language }', 'mong', '', panel, '', '', '${ fields[IPAraw] }')"><img src="../common29/icons/showPanel.svg" class="showPanel" alt="Explode" title="Show composition"></span>`
        

        out += '</td>'


        out += '<td>'+fields[MEANING]+'</td>'
		out += '<td class="tr">'+fields[IPA]+'</td>'
		out += '<td class="tr">'+fields[TRANS]+'</td>'
       // if (terms.thereAreNotes) out += '<td class="noteCol">'+fields[NOTES]+'</td>'
        
        if (terms.thereAreNotes) {
            if (fields[NOTES].match('§')) {
                var noteParts = fields[NOTES].split('§')
                var xrefs =  `<a href="${ terms.language }_vocab?q=${ noteParts[1].replace(/,\s*/g,'|') }">${ noteParts[1] }</a>`
                out += `<td class="noteCol">${ noteParts[0]+xrefs+noteParts[noteParts.length-1] }</td>`
                }
            else out += '<td class="noteCol">'+fields[NOTES]+'</td>'
            }

        
        out += '</tr>\n'
		}

	document.getElementById('printout').innerHTML = out
	document.getElementById('totalLemmas').innerHTML = wordList.length
	}



function switchTabTo (tab) {
	var tabs = document.getElementById('tabs').querySelectorAll('h2')
	for (var i=0;i<tabs.length;i++) {
		tabs[i].style.color = '#ccc'
		var area = tabs[i].id+'_area'
		document.getElementById(area).style.display = 'none'
		}
	document.getElementById(tab).style.color = '#a52a2a'
	document.getElementById(tab+"_area").style.display = 'block'
	}





function findWords (reg) { 

    if (reg === '') return
    
    for (set=0;set<collections.length;set++) {
        findme = new RegExp(collections[set].symbol, 'g')
        reg = reg.replace(findme, collections[set].chars)
        }

    var regex = new RegExp(reg)
    var searchCol = document.getElementById('searchCol').value
    result = []
    for (var i=0;i<window.wordList.length;i++) {
        if (searchCol !== 'all') {
            colsToSearch = window.wordList[i].split('|')
            if (colsToSearch[searchCol].match(regex)) result.push( window.wordList[i] )
            }
        else if (window.wordList[i].match(regex)) result.push( window.wordList[i] )
        }
    result.sort(compareByWord)
    
    document.getElementById('found').innerHTML = result.length

    var out = ''
	var itemArray
    
    
    for (let i=0;i<result.length;i++) { 
		itemArray = result[i].split('|')
		out += '<tr>'

        out += `<td class="termCol" lang="${ terms.language }" dir="${ terms.direction }" style="font-family:${ terms.fontFamily }; font-size:${ terms.fontSize }">`
        
        

        if (itemArray[WIKI]  && itemArray[WIKI].trim() !== 'x') out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ itemArray[WIKI] }#${ terms.wiktionaryLink }">${ itemArray[TERM] }</a>`
        else if (itemArray[WIKI]) out += `${ itemArray[TERM] }`
        else out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ itemArray[TERM] }#${ terms.wiktionaryLink }">${ itemArray[TERM] }</a>`
        
                
        out += `<span onclick="showNameDetails('${ itemArray[TERM].trim() }', '${ terms.language }', 'mong', '', panel, '', '', '${ itemArray[IPAraw] }')"><img src="../common29/icons/showPanel.svg" class="showPanel" alt="Explode" title="Show composition"></span>`
        
        out += `<img src="../common29/icons/copytiny.svg" alt="copy" class="copyme" onclick="navigator.clipboard.writeText('${ itemArray[TERM].trim() }')">`

        out += '</td>'
        

		out += '<td>'+itemArray[MEANING]+'</td>'

        out += '<td class="tr">'+itemArray[IPA]+'</td>'

        // if this is an abjad, check for vowelled alternatives
        if (itemArray[TRANS].match('#')) {
            var link = itemArray[TRANS].replace(/#/g,'|')
            out += `<td class="tr"><a href="${ terms.language }_vocab?q=${ link }">${ link }</a></td>`
            }
        else out += `<td class="tr"> ${ itemArray[TRANS] }</td>`

        if (terms.thereAreNotes) { //out += `<td class="noteCol">${ itemArray[NOTES] }</td>`
            // find cross references and turn them into links
        	/*if (itemArray[NOTES].match('§')) {
                var noteParts = itemArray[NOTES].split('§')
                var xrefs = ''
                for (var x=1;x<noteParts.length-1;x++) {
                    xrefs +=  `<a href="${ terms.language }_vocab?q=${ noteParts[x] }">${ noteParts[x] }</a> `
                    }
            	out += `<td class="noteCol">${ noteParts[0]+xrefs+noteParts[noteParts.length-1] }</td>`
            	}
            */
        	if (itemArray[NOTES].match('§')) {
                var noteParts = itemArray[NOTES].split('§')
                var xrefs =  `<a href="${ terms.language }_vocab?q=${ noteParts[1].replace(/,\s*/g,'|') }">${ noteParts[1] }</a>`
            	out += `<td class="noteCol">${ noteParts[0]+xrefs+noteParts[noteParts.length-1] }</td>`
            	}
            
            // this is the older variant on see also, which should eventually be obsoleted
        	else if (itemArray[NOTES].match('#')) {
            	var link = itemArray[NOTES].replace(/#/g,'|')
            	out += `<td class="noteCol"><a href="${ terms.language }_vocab?q=${ link }">${ link }</a></td>`
            	}
        	else out += `<td class="noteCol"> ${ itemArray[NOTES] }</td>`
        	}

        // add the markup column for server-based use
        if (location.hostname === 'r12a.github.io') {
            markup = ''
            markup += `&lt;span class=&quot;charExample&quot; translate=&quot;no&quot;&gt;`
            markup += `&lt;bdi class=&quot;ex`
            markup += `&quot; lang=&quot;${ terms.language }&quot;`
            if (terms.direction !== '') markup += ` dir=&quot;${ terms.direction }&quot;`
            markup += `&gt;${ itemArray[TERM].trim() }&lt;/bdi&gt;`
            
            if (itemArray[IPA].trim()) markup += `&lt;bdi class=&quot;ipa&quot;&gt;${ itemArray[IPA].trim() }&lt;/bdi&gt;`
             
            if (itemArray[IPA].trim() == '' && itemArray[TRANS].trim() != '') markup += `&lt;bdi class=&quot;transc&quot;&gt;${ itemArray[IPA].trim() }&lt;/bdi&gt;`
             
            if (itemArray[MEANING].trim()) markup += `&lt;bdi class=&quot;meaning&quot;&gt;${ itemArray[MEANING].trim() }&lt;/bdi&gt;`
           
            markup +=`&lt;/span&gt;`
            
            out += `<td class="markupCol"><img src="../common29/icons/copytiny.svg" alt="copy" class="copyme" onclick="navigator.clipboard.writeText('${ markup }')"></td>`
            }
        
        
        
        
        else {
            markup = ''
            markup += `<span class=&quot;eg`
            if (itemArray[IPA].trim() == '' && itemArray[TRANS].trim() != '') markup += ' transc'
            markup += `&quot; lang=&quot;${ terms.language }&quot;`
            if (terms.direction !== '') markup += ` dir=&quot;${ terms.direction }&quot;`
            markup += `>${ itemArray[TERM].trim() }</span>`
           
           
            out += `<td class="markupCol">`
            if (i===0) out += `get markup<br>`
            out += `<img src="../common29/icons/copytiny.svg" alt="copy" class="copyme" onclick="navigator.clipboard.writeText('${ markup }')"></td>`
            }

        out += '</tr>\n'
        }
    return out
	}

function compareByWord(a,b) { 
  if (a < b)         
    return 1;
  if (a > b)
    return -1;
  return 0;
	}

function compareByWord(a,b) { 
  if (a > b)         
    return 1;
  if (a < b)
    return -1;
  return 0;
	}



function compareFrequency(a,b) { // comparison function
  if (a < b)         // compare by age
    return -1;
  if (a > b)
    return 1;
  return 0;
}

function listFrequency () {
    var frequencyTable = {}
    var total = 0
    
    // count the characters
	for (var i=0;i<wordList.length;i++) {
        var fields = wordList[i].split('|')
        fields[0] = fields[0].replace(/ /g,'').toLowerCase()
        var native = [...fields[0]]
        for (var j=0;j<native.length;j++) {
            if (frequencyTable[native[j]]) {
                frequencyTable[native[j]]++
                total++
                }
            else {
                frequencyTable[native[j]] = 1
                total++
                }
            }
        }

    // sort the data in descending order of frequency
    const sortedArr = Object.entries(frequencyTable)
      .sort(([, v1], [, v2]) => v2 - v1)
    const sorted = Object.fromEntries(sortedArr)


    // create the markup
    var out = ''
    for (var key in sorted) {
        var hex = key.codePointAt(0).toString(16).toUpperCase()
        while (hex.length < 4) hex = '0'+hex
        //out += '<tr><td class="uname"><a target="charnotes" href="block#char'+hex+'">U+'+ hex + '</a></td><td class="char">'+ key +'</td><td class="freq">'+sorted[key].toLocaleString()+'</td><td class="percent">'+eval(sorted[key]*100/total).toFixed(2)+'%</td></tr>\n'
        //console.log(key)
        
        if (typeof spreadsheetInfo[key] === 'undefined') {
            spreadsheetInfo[key] = {}
            if (key === '-') spreadsheetInfo[key].name = 'U+002D HYPHEN'
            else spreadsheetInfo[key].name = 'U+'+ hex
            spreadsheetInfo[key].ipa = ''
            }
        out += `<tr>
            <td class="uname"><a target="charnotes" href="block#char${ hex }">${ spreadsheetInfo[key].name }</a>`
            if (spreadsheetInfo[key].ipa !== '') out +=` <span class="ipa">${ spreadsheetInfo[key].ipa.toLowerCase() }</span>`
            out += `</td>
            <td class="char">${ key }</td>
            <td class="freq">${ sorted[key].toLocaleString() }</td>
            <td class="percent">${ eval(sorted[key]*100/total).toFixed(2) }%</td>
            </tr>\n`
        }

    document.getElementById('freqout').innerHTML = out 
    document.getElementById('totalFreq').textContent = total.toLocaleString()     
    document.getElementById('uniqueChars').textContent = Object.keys(frequencyTable).length 
    
    
    if (window.langs && langs[terms.langdataTag]) {
        var letterCount = 0
        if (langs[terms.langdataTag].letter) letterCount = langs[terms.langdataTag].letter.length
        var markCount = 0
        if (langs[terms.langdataTag].mark) markCount = langs[terms.langdataTag].mark.length
        var charCount = letterCount + markCount
        document.getElementById('averaged').textContent = eval(100/charCount).toFixed(2)+'%'   
        document.querySelector("#averagedHelp").addEventListener('click', function(evt) { alert(`Taking into account typical characters, there are ${ letterCount } letters and ${ markCount } combining marks in this orthography. If each of these characters was used equally, you'd expect to see this percentage value.`) })
        }
    else {
        document.getElementById('averaged').textContent = parseInt(total/Object.keys(frequencyTable).length).toLocaleString()
        document.querySelector("#averagedHelp").addEventListener('click', function(evt) { alert(`The number of occurrences you would expect if every character had the same frequency.`) })
       }
   
    }





