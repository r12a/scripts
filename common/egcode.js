
var autoExpandExamples = {}
// this is the string containing vocab information stored in xxx-examples.js
// not sure why it's declared here, and as an object


function addExamples (langFilter) { //console.log('langFilter:', langFilter, autoExpandExamples[langFilter])

	// read the data into egList, in which each record has
	// example, meaning, transcription?, notes?, alt?
	// alt is generally a vowelled form for abjads or an alternative spelling
	if (typeof langFilter === 'undefined') alert('addExamples call needs to specify a language')
	var egArray = autoExpandExamples[langFilter].split("\n")
	var egList = {}
	for (i=0;i<egArray.length;i++) {
		if (egArray[i] == '') continue
		temp = egArray[i].split('|')
		egList[temp[0]] = egArray[i]
		}
	//console.log('egArray',egArray,'egList', egList)
	
	// find the nodes that correspond to the language in langFilter
	var selector = '.eg[lang='+langFilter+']'
	var nodes = document.querySelectorAll(selector)
	console.log(nodes.length,' example nodes to expand')
	
	for (let n=0;n<nodes.length;n++) {
		//console.log('Looking for ',nodes[n].textContent)
		//console.log('Language is ',nodes[n].lang)
		if (nodes[n].lang === langFilter && egList[nodes[n].textContent]) {
			var temp = egList[nodes[n].textContent].split('|')
			var out = '<span class="charExample" translate="no">'
			
			// term
			out += '<span class="ex" lang="'
			out += nodes[n].lang
			out += '"'
			if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
			out += '>'
			out += temp[0]
			out += '</span>'
			
			// transcription
			if (! nodes[n].classList.contains('latn')) out += ' <bdi class="trans">xxx</bdi>'
			ipa = ''
			transcription = ''
			if (temp[2] && temp[2].includes('(')) {
				temptemp = temp[2].split('(')
				ipa = temptemp[0].trim()
				transcription = temptemp[1].replace(/\)/,'')
				}
			else if (temp[2]) ipa = temp[2]
			if (transcription) out += ' (<bdi class="transc">'+transcription+'</bdi>)'
			
			// alt
			if (temp[4]) {
				out += ' (<bdi lang="'
				out += nodes[n].lang
				out += '"'
				if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
				out += '>'+temp[4]+'</bdi>)'
				}
			
			// ipa
			if (ipa) out += ' <bdi class="ipa">'+ipa+'</bdi>'
			
			// meaning
			if (temp[1]) out += ' <bdi class="meaning">'+temp[1]+'</bdi>'
			
			out += '</span>'
			
			nodes[n].outerHTML = out
			}
		}
	egArray = []
	egList = {}
	//autoExpandExamples = {}
	}

//<span class="charExample" translate="no"><span class="ex" lang="ta">கேடு</span> <span class="trans">kēʈu</span> <span class="ipa">keːɖʉ</span> <span class="meaning">destruction</span></span>


