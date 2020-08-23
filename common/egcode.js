
var autoExpandExamples = {}


function addExamples (langFilter) { //console.log('langFilter:', langFilter, autoExpandExamples[langFilter])
	// read the data into egList
	if (typeof langFilter === 'undefined') alert('addExamples call needs to specify a language')
	var egArray = autoExpandExamples[langFilter].split("\n")
	var egList = {}
	for (i=0;i<egArray.length;i++) {
		if (egArray[i] == '') continue
		temp = egArray[i].split('|')
		egList[temp[0]] = egArray[i]
		}
	//console.log('egArray',egArray,'egList', egList)
	
	var selector = '.eg[lang='+langFilter+']'
	var nodes = document.querySelectorAll(selector)
	console.log(nodes.length,' example nodes to expand')
	for (let n=0;n<nodes.length;n++) {
		//console.log('Looking for ',nodes[n].textContent)
		//console.log('Language is ',nodes[n].lang)
		if (nodes[n].lang === langFilter && egList[nodes[n].textContent]) {
			var temp = egList[nodes[n].textContent].split('|')
			var out = '<span class="charExample" translate="no"><span class="ex" lang="'
			out += nodes[n].lang
			out += '"'
			if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
			out += '>'
			out += temp[0]
			out += '</span>'
			if (! nodes[n].classList.contains('latn')) out += ' <span class="trans">xxx</span>'
			ipa = ''
			transcription = ''
			if (temp[2] && temp[2].includes('(')) {
				temptemp = temp[2].split('(')
				ipa = temptemp[0].trim()
				transcription = temptemp[1].replace(/\)/,'')
				}
			else if (temp[2]) ipa = temp[2]
			if (transcription) out += ' (<span class="transc">'+transcription+'</span>)'
			if (ipa) out += ' <span class="ipa">'+ipa+'</span>'
			if (temp[1]) out += ' <span class="meaning">'+temp[1]+'</span>'
			out += '</span>'
			
			nodes[n].outerHTML = out
			}
		}
	egArray = []
	egList = {}
	//autoExpandExamples = {}
	}

//<span class="charExample" translate="no"><span class="ex" lang="ta">கேடு</span> <span class="trans">kēʈu</span> <span class="ipa">keːɖʉ</span> <span class="meaning">destruction</span></span>


