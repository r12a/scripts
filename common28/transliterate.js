
// functions that automatically write transliterations to the examples (spans with class=trans inside a class=ex span)
// call this from the end of the document, but first read in the file that contains the (language specific) autoTranslitArray variable


var autoTranslitArray = {}


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





function transliterateLang (str, lang) {
// like transliterate() but uses newer data format, to allow for multiple languages per page
str = ' '+str

var strArray = [...str]
var exclusions = new Set(['(',')','[',']','.',' '])

for (i=0;i<strArray.length;i++) {
	if (exclusions.has(strArray[i])) continue
	if (! autoTranslitArray[lang][strArray[i]]) continue
	re = new RegExp(strArray[i],'g')
	str = str.replace(re, autoTranslitArray[lang][strArray[i]])
	}


return str.trim()
}





function autoTransliterate (language) {
	// finds all the transliterations in examples and retransliterates them using autoTranslitArray
    // global autoTranslitArray
    // local trans i ex translit
    // calls transliterateLang & transliterate
	var trans = document.querySelectorAll('.charExample')
	
	for (var i=0;i<trans.length;i++) {
		// check this is for the right language, and that there's native and translit text
		var ex = trans[i].querySelector('.ex')
		if (ex === null) continue
		if (ex.lang !== language) continue
  		var translit = trans[i].querySelector('.trans')
		if (translit === null) continue
		
		// if all ok, route this according to whether data has language-specific format
		if (autoTranslitArray[language]) translit.textContent = transliterateLang(ex.textContent, language)
		else translit.textContent = transliterate(ex.textContent)
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
