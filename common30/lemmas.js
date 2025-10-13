var lemmaArray = window.lemmas.split('\n')
var translationArray = window.translations.split('\n')
var wordList = []

// remove blank lines
var m, metadata
for (m=0;m<lemmaArray.length;m++) {
	if (lemmaArray[m].trim() == '' || lemmaArray[m].startsWith('#')) {
		metadata = lemmaArray.splice(m, 1)
		m--
		}
	}
for (m=0;m<translationArray.length;m++) {
	if (translationArray[m].trim() == '' || translationArray[m].startsWith('#')) {
		metadata = translationArray.splice(m, 1)
		m--
		}
	}

// make the wordList
for (var n=0;n<lemmaArray.length;n++) {
    if (lemmaArray[n].trim() !== '') {
        if (!translationArray[n]) translationArray[n] = ''
        window.wordList[n] = ' '+lemmaArray[n]+' | '+translationArray[n]
        }
	}
window.lemmaArray = []
window.translationArray = []
window.lemmas = ''
window.translations = ''



const TERM = 0
const TRANS = 1

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
		out += '<td lang="'+terms.language+'" dir="'+terms.direction+'" style="font-family:'+terms.fontFamily+'; font-size:'+terms.fontSize+'"><a target="lemmas" href="https://en.wiktionary.org/wiki/'+fields[TERM]+'#'+terms.wiktionaryLink+'">'+fields[TERM]+'</a></td>'
		out += '<td>'+fields[TRANS]+'</td>'
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

    var regex = new RegExp(reg)
    result = []
    for (var i=0;i<window.wordList.length;i++) {
        if (window.wordList[i].match(regex)) result.push( window.wordList[i] )
        }
    result.sort(compareByWord)

    document.getElementById('found').innerHTML = result.length

    var out = ''
	var itemArray
    for (let i=0;i<result.length;i++) { 
		itemArray = result[i].split('|')
		out += '<tr>'
		out += '<td dir="'+terms.direction+'" style="font-family:'+terms.fontFamily+'; font-size:'+terms.fontSize+'"><a target="lemmas" href="https://en.wiktionary.org/wiki/'+itemArray[TERM]+'#'+terms.wiktionaryLink+'">'+itemArray[TERM]+'</a></td>'
		out += '<td>'+itemArray[1]+'</td>'
		out += '<td class="noteCol">&lt;span class="eg" lang="'+terms.language+'"&gt;'+itemArray[TERM]+'&lt;/span&gt;</td>'
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









