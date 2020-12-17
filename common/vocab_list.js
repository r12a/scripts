var lineList = contents.split('\n')
lineList.push('|End of list reached.||')
var metadata, value
//debug = true		

// remove blank lines
if (debug) console.log('lineList',lineList)
for (var m=0;m<lineList.length;m++) {
	if (debug) console.log(m)
	if (lineList[m].trim() == '') {
		metadata = lineList.splice(m, 1)
		if (debug) console.log('Removed blank line')
		m--
		}
	}
if (debug) console.log('Reduced lineList',lineList)


// split the remaining lineList items into a mutlidimensional array
for (var n=0;n<lineList.length;n++) {
	window.wordList[n] = lineList[n].split('|')
	while (window.wordList[n].length <= 4) wordList[n].push('')
	}
if (debug) console.log('wordList',window.wordList)


// check whether there are notes (affects drawing of table later)
settings.thereAreNotes = false
for (var n=0;n<wordList.length;n++) {
	if (wordList[n][3] !== '') {
		settings.thereAreNotes = true
		break
		}
	}


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


