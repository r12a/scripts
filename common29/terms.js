var wordList = contents.split('\n')
var spreadsheetInfo = {}
var metadata, value
const TERM = 0
const MEANING = 1
const IPA = 2
const TRANS = 3
const EQUIV = 4
const NOTES = 5
const WIKI = 6
const IPAraw = 7

document.querySelector("title").textContent = `${ terms.title } term lister`

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
        setMarkup += `<div class="set"><span class="symbol" onclick="navigator.clipboard.writeText(this.textContent)">${ collections[set].symbol }</span> <span class="desc">${ collections[set].desc }</span> ${ collections[set].chars }</div>`
        //setMarkup += `<div class="set"><span class="symbol" onclick="navigator.clipboard.writeText(this.textContent)">${ collections[set].symbol }</span> <span class="desc">${ collections[set].desc }</span> ${ collections[set].chars.replace(/\|/g,' &nbsp; ') }</div>`
        }
    }


// set the global variable marks as a set containing all combining marks in the spreadsheet
window.marks = new Set()
for (var char in spreadsheetRows) {
    if (spreadsheetRows[char][cols['class']].startsWith('M')) window.marks.add(char)
    }


// create a list of transliterations from the spreadsheet
var autoTranslitArray = {}
for (var line in spreadsheetRows) {
    if (spreadsheetRows[line][cols.transLoc] === '') continue		

    // create entry for the item
    if (autoTranslitArray[line]) {
        var errmsg = `Warning! Unexpected duplicate in makeTransliterationArray: ${ line }`
        console.log('%c' + errmsg, 'color:orange;font-weight:bold;')
        }
    else autoTranslitArray[line] = spreadsheetRows[line][cols.transLoc]
    }





// build the tab markup
if (document.getElementById('tabPlaceholder')) {
    document.getElementById('tabPlaceholder').innerHTML =
    `
    <div id="tabs">
    <h2 id="list_tab" onClick="switchTabTo(this.id)">List</h2>
    <h2 id="find_tab" onClick="switchTabTo(this.id)">Find</h2>
    <h2 id="freq_tab" onClick="switchTabTo(this.id);listFrequency()">Frequency</h2>
    <h2 id="help_tab" onClick="switchTabTo(this.id)">Help</h2>
    </div> 


    <div id="list_tab_area">
    <div style="float:right; font-style: italic; font-size: 60%; margin-inline-end:2rem; cursor:pointer;" onclick="checkForDuplicates()">Check for duplicates</div>
    <p style="font-style: italic; font-size: 80%;"><label>Total items: <span id="totalLemmas">–</span></label></p>
    <table>
    <thead><tr style="position: sticky; top: 0; background: white;"><th>&nbsp;</th><th>&nbsp;</th><th>meaning</th><th>ipa</th><th>transcription</th><th>alt</th><th>notes</th></tr></thead>
    <tbody id="printout"></tbody></table>
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
    
    <button onclick="hideNonIPA()">With IPA</button>
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
    <p style="font-size: 80%;">Show the following characters only: <input id="freqFilter" type="text" 
        onchange="filterFrequency(this.value)">
    <button onclick="   filterFrequency(documentGetElementById('freqFilter').value)">GO</button>
    <button onclick="resetFilter()">RESET</button></p>

</div>
    

    <div id="help_tab_area">
    <p style="text-align:end;"><a href="https://r12a.github.io/scripts/index.html#termbases">More term lists</a></p>
    <p>This app has 3 main tabs:</p>
    <ol>
    <li><samp>List</samp>: Simply lists all the entries in the term base.</li>
    <li><samp>Find</samp>: Allows you to search for terms containing one or more characters.</li>
    <li><samp>Frequency</samp>: Provides information about how often each character appears in the term base.</li>
    </ol>
    
    <p>For many terms, adjacent columns provide meanings and IPA and other transcriptions (and sometimes notes). This is a work in progress.</p>

    <p>Clicking on a term opens a panel that decomposes it into <i class="kw">base+combining_mark(s)</i> units, and annotates them with a Latin transliteration and, where available, an IPA transcription. The characters are also listed, one by one, with their Unicode names. You can dismiss the panel by clicking on X, or by hitting the ESC key.</p>

    <h2>Searching & sets</h2>
    <p>In the <samp>Find</samp> tab you can search for any sequence of characters, and you can use regular expressions, too. For example, <samp>a.a</samp> will show any terms containing two a's with one intervening character (of any kind). And <samp>[^ ]Ⓥ</samp> will show words with independent vowels that appear word-medially.</p>
    
    <p>To search for characters at word boundaries, type a space before or after the character(s).</p>
    
    <p>The <samp>Sets</samp> pulldown presents you with shortcuts, tailored to the language of the term base, which provide significant help for certain types of search. Copy the tokens to the search field to represent one of a named set of characters. For example, <samp>ⒸⓋⓋ</samp> will typically search for any consonant followed by any 2 vowels, and <samp>ⓋxⒸ</samp> may reveal a word-medial, syllable-final use of x.</p>
    
    <h2>Icons</h2>
    
    <p><img src="../common29/icons/showPanel.svg" class="showPanel" alt="Explode" title="Show composition" style="float: none;"> appears alongside terms that have a <a href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page" target="_blank">Wiktionary</a> page. Click on the icon to open that page. (In some lists, some of these currently give false positives. These will eventually be removed.)</p>

    <p><img src="../common29/icons/copytiny.svg" alt="copy" title="Copy to clipboard" class="copyme"> next to a term copies the term to the clipboard. In the Find tab's right-hand column this icon copies some markup code to the clipboard that allows you to insert the term with any transcriptions into an HTML page.</p>
    
    <h2>URL parameters</h2>
    <p>You can create a link that will automatically search for something using <code class="kw">?q=xxx</code> (where xxx represents one or more characters). For example, <a href="https://r12a.github.io/scripts/mlym/ml_vocab.html?q=്" target="_blank">find words using the chandrakkala in the Malayalam database</a>.</p>
    </div>
`
    }



function filterFrequency (chars) {
    // remove all characters from the frequency list except those in chars list
    var rows = document.getElementById('freqout').querySelectorAll('.char')
    
    for (i=0;i<rows.length;i++) {
        //console.log(rows[i].textContent, chars.includes(rows[i].textContent), chars)
        if (! chars.includes(rows[i].textContent)) rows[i].parentNode.style.display = 'none'
        }
    }

function resetFilter () {
    var rows = document.getElementById('freqout').querySelectorAll('tr')
    for (i=0;i<rows.length;i++) {
        rows[i].style.display = 'table-row'
        }
    }


// remove blank lines
for (var m=0;m<wordList.length;m++) {
	if (wordList[m].trim() == '' || wordList[m].startsWith('#')) {
		metadata = wordList.splice(m, 1)
		m--
		}
	}

    
terms.thereAreNotes = false

for (var n=0;n<wordList.length;n++) {
    fields = wordList[n].split('|')
    newfields = {}
    // initialise all fields 
    newfields.term = ''
    newfields.meaning = ''
    newfields.ipa = ''
    newfields.trans = ''
    newfields.equiv = ''
    newfields.notes = ''
    newfields.wiktionary = ''
    newfields.ipaRaw = ''
    
    newfields.term = ' '+fields[0]+' '
    newfields.meaning = fields[1]
    newfields.ipaRaw = ' '+fields[2]+' '
    newfields.ipa = ' '+fields[2]+' '
    newfields.ipa = newfields.ipa.replace(/§/g,'').replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')

	if (fields[3]) newfields.trans = ' '+fields[3]+' '
    
    if (fields[4]) newfields.equiv = fields[4]
    
    if (fields[5]) {
        terms.thereAreNotes = true
        newfields.notes = fields[5]
        }

    if (fields[6]) newfields.wiktionary = fields[6]
    

    wordList[n] = newfields.term+'|'+newfields.meaning+'|'+newfields.ipa+'|'+newfields.trans+'|'+newfields.equiv+'|'+newfields.notes+'|'+newfields.wiktionary+'|'+newfields.ipaRaw+'|'
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
		if (pairs[0] == 'col' && pairs[1]) { // which column to search
			document.getElementById('searchCol').value = decodeURIComponent(pairs[1])
			switchTabTo('find_tab')
			document.getElementById('foundItems').innerHTML = findWords(document.getElementById('needle').value, document.getElementById('searchCol').value)
			}
		if (pairs[0] == 'q' && pairs[1]) { // find query, value is string to search for
			document.getElementById('needle').value = decodeURIComponent(pairs[1])
			switchTabTo('find_tab')
			document.getElementById('foundItems').innerHTML = findWords(document.getElementById('needle').value, '')
			}
		}
    
    // add a dialogue box to notify about Copying
    var dialog = document.createElement('dialog')
    dialog.appendChild( document.createTextNode('Copied !'))
    dialog.id = 'copyNotice'
    document.querySelector('body').appendChild( dialog )
    
    // add a dialogue box to notify about Duplicates
    var dialog = document.createElement('dialog')
    dialog.appendChild( document.createTextNode('No duplicates !'))
    dialog.id = 'dupNotice'
    document.querySelector('body').appendChild( dialog )
	}





function printAll () {
	var out = ''
    var source = ''
    var panel = document.getElementById('panel')
	for (var i=0;i<wordList.length;i++) { 
    
        // find a source header
        if (window.wordList[i].startsWith(' @')) {
            source = window.wordList[i].replace(/ @/,'').trim()
            continue
            }
        
        var fields = wordList[i].split('|')
		out += '<tr>'

        out += `<td id="w${ fields[TERM] }" class="tickCol"></td>`

        out += `<td lang="${ terms.language }" dir="${ terms.direction }" style="font-family:${ terms.fontFamily }; font-size:${ terms.fontSize }">`
        
        // add the term with an onlick to explode
        // first, remove ascii apostrophe to avoid crashing the codde
        termToLookUp = fields[TERM].trim().toLocaleLowerCase().replace(/'/,'ʼ')
        out += `<span onclick="showNameDetails('${ termToLookUp }', '${ terms.language }', 'mong', '', panel, '', '', '${ fields[IPAraw].trim() }')" class="term">${ fields[TERM] }</span>`
        
        // add copy icon
        out += `<img src="../common29/icons/copytiny.svg" alt="copy" title="Copy to clipboard" class="copyme" onclick="copyMsg('${ fields[TERM].trim() }')">`

        // add a link icon if there's a Wiktionary entry
        if (source.includes('wiktionary')) {
            if (fields[WIKI] && fields[WIKI].trim() !== 'x') out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ fields[WIKI] }#${ terms.wiktionaryLink }" onclick="document.getElementById('w${ fields[TERM] }').textContent='✓';"><img src="../common29/icons/showPanel.svg" class="showPanel" alt="Show in Wiktionary" title="Show in Wiktionary"></a>`
            else out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ fields[TERM] }#${ terms.wiktionaryLink }" onclick="document.getElementById('w${ fields[TERM] }').textContent='✓';"><img src="../common29/icons/showPanel.svg" class="showPanel" alt="Show in Wiktionary" title="Show in Wiktionary"></a>`
            }


        

        out += '</td>'


        out += '<td>'+fields[MEANING]+'</td>'
		out += '<td class="tr">'+fields[IPA]+'</td>'
		out += '<td class="tr">'+fields[TRANS]+'</td>'
		out += '<td class="tr">'+fields[EQUIV]+'</td>'
        
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
    var source = ''
    for (var i=0;i<window.wordList.length;i++) {
    
        // find a source header
        if (window.wordList[i].startsWith(' @')) {
            if (window.wordList[i].includes('wiktionary')) source = '‣'
            else source = ''
            continue
            }
        
        if (searchCol !== 'all') {
            colsToSearch = window.wordList[i].split('|')
            if (colsToSearch[searchCol].match(regex)) result.push( window.wordList[i]+source )
            }
        else if (window.wordList[i].match(regex)) result.push( window.wordList[i]+source )
        }
    result.sort(compareByWord)
    
    document.getElementById('found').innerHTML = result.length

    var out = ''
	var itemArray
    
    
    for (let i=0;i<result.length;i++) {
    	if (result[i].includes('‣')) source = '‣'
    	else source = ''
    	
		itemArray = result[i].split('|')
		out += '<tr>'
        
        out += `<td id="w${ itemArray[TERM].trim() }" class="tickCol"></td>`

        out += `<td class="termCol" lang="${ terms.language }" dir="${ terms.direction }" style="font-family:${ terms.fontFamily }; font-size:${ terms.fontSize }">`





        // add the term with an onlick to explode
        // first, remove ascii apostrophe to avoid crashing the codde
        termToLookUp = itemArray[TERM].trim().toLocaleLowerCase().replace(/'/,'ʼ')
        out += `<span onclick="showNameDetails('${ termToLookUp }', '${ terms.language }', 'mong', '', panel, '', '', '${ itemArray[IPAraw].trim() }')" class="term">${ itemArray[TERM] }</span>`
        
        // add copy icon
        out += `<img src="../common29/icons/copytiny.svg" alt="copy" title="Copy to clipboard" class="copyme" onclick="copyMsg('${ itemArray[TERM].trim() }')">`

        // add a link icon if there's a Wiktionary entry
        if (source) {
            if (itemArray[WIKI]  && itemArray[WIKI].trim() !== 'x') out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ itemArray[WIKI] }#${ terms.wiktionaryLink }" onclick="document.getElementById('w${ itemArray[TERM] }').textContent='✓';"><img src="../common29/icons/showPanel.svg" class="showPanel" alt="Explode" title="Show composition"></a>`
            else out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ itemArray[TERM] }#${ terms.wiktionaryLink }" onclick="document.getElementById('w${ itemArray[TERM].trim() }').textContent='✓';"><img src="../common29/icons/showPanel.svg" class="showPanel" alt="Explode" title="Show composition"></a>`
            }

        out += '</td>'
        

		out += '<td>'+itemArray[MEANING]+'</td>'

        out += '<td class="tr ipaCol">'+itemArray[IPA]+'</td>'

        // if this is an abjad, check for vowelled alternatives
        if (itemArray[TRANS].match('#')) {
            var link = itemArray[TRANS].replace(/#/g,'|')
            out += `<td class="tr"><a href="${ terms.language }_vocab?q=${ link }">${ link }</a></td>`
            }
        else out += `<td class="tr"> ${ itemArray[TRANS] }</td>`

        out += '<td class="tr">'+itemArray[EQUIV]+'</td>'

        if (terms.thereAreNotes) { //out += `<td class="noteCol">${ itemArray[NOTES] }</td>`
            // find cross references and turn them into links
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
            
            out += `<td class="markupCol"><img src="../common29/icons/copytiny.svg" alt="copy" class="copyme" onclick="copyMsg('${ markup }')"></td>`
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
            out += `<img src="../common29/icons/copytiny.svg" alt="copy" class="copyme" onclick="copyMsg('${ markup }')"></td>`
            }

        out += '</tr>\n'
        }
    return out
	}




function copyMsg ( text ) {
    // briefly shows a dialog box to confirm copy
    navigator.clipboard.writeText(text)
    
    document.getElementById('copyNotice').style.display = 'block'
    setTimeout(() => {
        document.getElementById('copyNotice').style.display = 'none'
        }, "500")
    }

function duplicatesMsg ( text ) {
    // briefly shows a dialog box to list the number of duplicates
    document.getElementById('dupNotice').textContent = text
    
    document.getElementById('dupNotice').style.display = 'block'
    setTimeout(() => {
        document.getElementById('dupNotice').style.display = 'none'
        }, "1000")
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
            <td class="uname"><a target="charnotes" href="block.html#char${ hex }">${ spreadsheetInfo[key].name }</a>`
            if (spreadsheetInfo[key].ipa !== '') out +=` <span class="ipa">${ spreadsheetInfo[key].ipa.toLowerCase() }</span>`
            out += `</td>
            <td class="char" style="cursor:pointer;" 
                onclick="copyMsg(this.textContent)"
                >${ key }</td>
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



function checkForDuplicates () {
	// highlights duplicate entries
	
	var entries = document.querySelectorAll('.term')
	
	uniqueSet = new Set()

	for (i=0;i<entries.length;i++) {
		if (uniqueSet.has(entries[i].textContent)) {
			entries[i].style.backgroundColor = 'yellow'
			entries[i].textContent += ' §'
			}
		else uniqueSet.add(entries[i].textContent)
		}
console.log('entries', entries.length)
console.log('set',uniqueSet.size)
	duplicatesMsg(`${ entries.length - uniqueSet.size } duplicates.`)
	}





function hideNonIPA () {
    // hide table rows that don't have an IPA transcription
    
    var count = 0
    var nodes = document.getElementById('foundItems').querySelectorAll('.ipaCol')
    for (i=0;i<nodes.length;i++) {
        if (nodes[i].textContent.trim() == '' || nodes[i].textContent.trim() == '␣') {
            nodes[i].parentNode.style.display = 'none'
            count++
            }
        }
    
    var initialCount = parseInt( document.getElementById('found').textContent )
    document.getElementById('found').textContent = initialCount - count
    
    }





















