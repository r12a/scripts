var wordList = contents.split('\n')
//wordList.push('|End of list reached.||')
var metadata, value
const TERM = 0
const MEANING = 1
const IPA = 2
const TRANS = 3
const NOTES = 4
const WIKI = 5

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
    fields[IPA] = ' '+fields[IPA]+' '
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
	for (var i=0;i<wordList.length;i++) {
        var fields = wordList[i].split('|')
		out += '<tr>'
        out += `<td lang="${ terms.language }" dir="${ terms.direction }" style="font-family:${ terms.fontFamily }; font-size:${ terms.fontSize }">`
        
        // figure out whether to link to a different string for Wiktionary lookup
        if (fields[WIKI]  && fields[WIKI].trim() !== 'x') out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ fields[WIKI] }#${ terms.wiktionaryLink }">${ fields[TERM] }</a>`
        else if (fields[WIKI]) out += `${ fields[TERM] }`
        else out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ fields[TERM] }#${ terms.wiktionaryLink }">${ fields[TERM] }</a>`
        
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

		//out += '<td lang="'+terms.language+'" dir="'+terms.direction+'" style="font-family:'+terms.fontFamily+'; font-size:'+terms.fontSize+'"><a target="lemmas" href="https://en.wiktionary.org/wiki/'+itemArray[TERM]+'#'+terms.wiktionaryLink+'">'+itemArray[TERM]+'</a></td>'
        out += `<td lang="${ terms.language }" dir="${ terms.direction }" style="font-family:${ terms.fontFamily }; font-size:${ terms.fontSize }">`
        if (itemArray[WIKI]  && itemArray[WIKI].trim() !== 'x') out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ itemArray[WIKI] }#${ terms.wiktionaryLink }">${ itemArray[TERM] }</a>`
        else if (itemArray[WIKI]) out += `${ itemArray[TERM] }`
        else out += `<a target="lemmas" href="https://en.wiktionary.org/wiki/${ itemArray[TERM] }#${ terms.wiktionaryLink }">${ itemArray[TERM] }</a>`
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

		out += `<td class="noteCol">&lt;span class="eg`
        if (itemArray[IPA].trim() == '' && itemArray[TRANS].trim() != '') out += ' transc'
        out += `" lang="${ terms.language }"`
        if (terms.direction !== '') out += ` dir="${ terms.direction }"`
        out += `&gt;${ itemArray[TERM].trim() }&lt;/span&gt;</td>`
        
		//out += '<td class="noteCol">&lt;span class="eg" lang="'+terms.language+'"&gt;'+itemArray[TERM].trim()+'&lt;/span&gt;</td>'

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









