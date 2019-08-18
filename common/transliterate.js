
// functions that automatically write transliterations to the examples (spans with class=trans inside a class=ex span)
// call this from the end of the document, but first read in the file that contains the (language specific) autoTranslitArray variable



function transliterate (str) {

str = ' '+str

var strArray = [...str]
var exclusions = new Set(['(',')','[',']','.',' '])

for (i=0;i<strArray.length;i++) {
	if (exclusions.has(strArray[i])) continue
	if (! autoTranslitArray[strArray[i]]) continue
	re = new RegExp(strArray[i],'g')
	str = str.replace(re, autoTranslitArray[strArray[i]])
	}


return str.trim()
}


function autoTransliterate (language) {
	// finds all the transliterations in examples and retransliterates them using autoTranslitArray
	
	var trans = document.querySelectorAll('.charExample')
	
	for (let i=0;i<trans.length;i++) {
		var ex = trans[i].querySelector('.ex')
		if (ex === null) continue
  		var translit = trans[i].querySelector('.trans')
		if (translit === null) continue
		if (ex.lang !== language) continue
		
		translit.textContent = transliterate(ex.textContent)
		}
	}


function reTransliterate (language, verbose) {
	// finds all the transliterations in examples and checks them using the above
	// output goes to the console
	// this should be called from the end of the document with transliterations
	
	var trans = document.querySelectorAll('.charExample')
	
	for (let i=0;i<trans.length;i++) {
		var ex = trans[i].querySelector('.ex')
		if (ex === null) ex = 'und'
  		var translit = trans[i].querySelector('.trans')
		if (translit === null) translit = 'und'
		if (ex !== null && ex.lang !== language) continue
		
		var newTranslit = transliterate(ex.textContent)
		
		if (verbose) {
			if (translit === 'und') console.log('MISSING',newTranslit,' for ',ex.textContent)
			else if (newTranslit === translit.textContent) console.log('For ',ex.textContent,' translit is ',translit.textContent)
			else console.log('DIVERGENCE',ex.textContent,' ',translit.textContent,' should be ',transliterate(ex.textContent))
			}
		else if (newTranslit !== translit.textContent && translit !== 'und') console.log('DIVERGENCE',ex.textContent,' ',translit.textContent,' should be ',transliterate(ex.textContent))
		}
	}
