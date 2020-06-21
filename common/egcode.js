function addExamples () {
	// read the data into egList
	egArray = examples.split("\n")
	egList = {}
	for (i=0;i<egArray.length;i++) {
		if (egArray[i] == '') continue
		temp = egArray[i].split('|')
		egList[temp[0]] = egArray[i]
		}
	//console.log(egArray, egList)
	
	nodes = document.querySelectorAll('.eg')
	//console.log(nodes.length,' nodes found')
	for (n=0;n<nodes.length;n++) {
		//console.log('Looking for ',nodes[n].textContent)
		//console.log('Language is ',nodes[n].lang)
		if (egList[nodes[n].textContent]) {
			temp = egList[nodes[n].textContent].split('|')
			out = '<span class="charExample" translate="no"><span class="ex" lang="'
			out += nodes[n].lang
			out += '">'
			out += temp[0]
			out += '</span> <span class="trans">xxx</span>'
			ipa = ''
			transcription = ''
			if (temp[2] && temp[2].includes('(')) {
				temptemp = temp[2].split('(')
				ipa = temptemp[0].trim()
				transcription = temptemp[1].replace(/\)/,'')
				}
			else if (temp[2]) ipa = temp[2]
			if (transcription) out += ' (<span class="trans">'+transcription+'</span>)'
			if (ipa) out += ' <span class="ipa">'+ipa+'</span>'
			if (temp[1]) out += ' <span class="meaning">'+temp[1]+'</span>'
			out += '</span>'
			
			nodes[n].outerHTML = out
			}
		}
	egArray = []
	egList = {}
	}

//<span class="charExample" translate="no"><span class="ex" lang="ta">கேடு</span> <span class="trans">kēʈu</span> <span class="ipa">keːɖʉ</span> <span class="meaning">destruction</span></span>


