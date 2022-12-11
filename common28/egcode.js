/* jshint strict: false */
/* globals autoExpandExamples, egList */

window.autoExpandExamples = {}
// this will contain the vocab information stored in xxx-examples.js for all languages
// it has to be declared before that page is loaded, so that the .langFilter item can be attached
var egList = {}


function addExamples (langFilter) {
/*  read the data into egList, in which each record has
	example, meaning, transcription?, notes?, alt?
	alt is generally a vowelled form for abjads or an alternative spelling
    
    langFilter, class name used to select blocks to add examples to
    
    [GLOBALS]
    autoExpandExamples, obj, set above, then populated under .<langFiler> in xx-examples.js; holds all vocab
    
    [LOCALS]
    egArray, array, built from autoExpandExamples
    egList, object, list of vocab filtered out by langFilter with native word as key
    selector, a selector for searching for letter blocks
    nodes, node array, example nodes to expand
    out, str, the generated markup
    ipa, str, an IPA value
    transcription, str, a transcription value
    i, n, counters
    temp, temptemp
    */
    if (trace) console.log('addExamples(',langFilter,')')
    
	if (typeof langFilter === 'undefined') alert('addExamples call needs to specify a language')

    if (typeof autoExpandExamples[langFilter] === 'undefined') console.log('autoExpandExamples[langFilter] fails for ',langFilter)
    var egArray = autoExpandExamples[langFilter].split("\n")
	//var egList = {}
	for (var i=0;i<egArray.length;i++) {
		if (egArray[i] == '') continue
		var temp = egArray[i].split('|')
		egList[temp[0]] = egArray[i]
		}

    // find the nodes that correspond to the language in langFilter
	var selector = '.eg[lang='+langFilter+']'
	var nodes = document.querySelectorAll(selector)
	//console.log(nodes.length,' example nodes to expand')
	
	for (var n=0;n<nodes.length;n++) {
		//console.log('Looking for ',nodes[n].textContent)
		//console.log('Language is ',nodes[n].lang)
        
        // example of raw data: 
        // τέσσερα|four|ˈtesera|téssera|notes|x|ˈte§se§ra
        // term|meaning|ipa|transcription|notes|source|ipalist

		if (nodes[n].lang === langFilter && egList[nodes[n].textContent]) {
			temp = egList[nodes[n].textContent].split('|')
			//var out = ''
			//if (nodes[n].classList.contains('inline')) out += '<span class="charExample inline" translate="no">'
			//else out += '<span class="charExample" translate="no">'
			
			var out = '<span class="charExample'
			if (nodes[n].classList.contains('inline')) out += ' inline'
			out += '" translate="no">'
			
			// term
			out += `<span class="ex`
            if (nodes[n].classList.contains('vertical')) out += ' vertical'
            out += `" lang="${ nodes[n].lang }"`
			//out += nodes[n].lang
			//out += '"'
			if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
			//if (nodes[n].classList.contains('ipalist') && temp[6]) ipaBreakdown = temp[6]
            
            
			if (temp[2]) ipaBreakdown = temp[2]
            else ipaBreakdown = ''
            out += `  onclick="showNameDetails('${ temp[0] }', '${ nodes[n].lang }', window.blockDir, 'c', document.getElementById('panel'), '', '', '${ ipaBreakdown }')"`
           
            
            
            
			/*if (temp[6]) ipaBreakdown = temp[6]
            else ipaBreakdown = ''
            out += `  onclick="showNameDetails('${ temp[0] }', '${ nodes[n].lang }', window.blockDir, 'c', document.getElementById('panel'), '', '', '${ ipaBreakdown }')"`*/
			out += '>'
			out += temp[0]
			out += '</span>'
			
			// transcription
            if (temp[3]) {
                // the transc class forces display of the transcription
                if (nodes[n].classList.contains('transc')) {
                    out += ' <bdi class="transc"'
                    if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
                    out += `>${ temp[3] }</bdi>`
                    }
                // otherwise use the trans class to hide until requested
                else out += ` <bdi class="trans">${ temp[3] }</bdi>`
                }
			//if (! nodes[n].classList.contains('latn')) out += ' <bdi class="trans">xxx</bdi>'
            
			var ipa = ''
			if (temp[2]) ipa = temp[2].replace(/§/g,'').replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
			
			// alt/transcription
			//if (temp[3] && nodes[n].classList.contains('transc')) {
//				out += ' (<bdi class="transc"'
//				if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
//				out += '>'+temp[3]+'</bdi>)'
//				}
			
			// ipa
			if (ipa) out += ' <bdi class="ipa">'+ipa+'</bdi>'
			
			// meaning
			if (temp[1]) out += ' <bdi class="meaning">'+temp[1]+'</bdi>'
			
			out += '</span>'
			
			nodes[n].outerHTML = out
			}
		}
    if (! typeof showTransliterations === 'undefined') showTransliterations( document.getElementById('translitToggleCheckbox').checked )
	egArray = []
	//egList = {}
	}







function addExamplesOLD (langFilter) {
/*  read the data into egList, in which each record has
	example, meaning, transcription?, notes?, alt?
	alt is generally a vowelled form for abjads or an alternative spelling
    
    langFilter, class name used to select blocks to add examples to
    
    [GLOBALS]
    autoExpandExamples, obj, set above, then populated under .<langFiler> in xx-examples.js; holds all vocab
    
    [LOCALS]
    egArray, array, built from autoExpandExamples
    egList, object, list of vocab filtered out by langFilter with native word as key
    selector, a selector for searching for letter blocks
    nodes, node array, example nodes to expand
    out, str, the generated markup
    ipa, str, an IPA value
    transcription, str, a transcription value
    i, n, counters
    temp, temptemp
    */
    
	if (typeof langFilter === 'undefined') alert('addExamples call needs to specify a language')
    
	var egArray = autoExpandExamples[langFilter].split("\n")
	var egList = {}
	for (var i=0;i<egArray.length;i++) {
		if (egArray[i] == '') continue
		var temp = egArray[i].split('|')
		egList[temp[0]] = egArray[i]
		}
	
	// find the nodes that correspond to the language in langFilter
	var selector = '.eg[lang='+langFilter+']'
	var nodes = document.querySelectorAll(selector)
	//console.log(nodes.length,' example nodes to expand')
	
	for (var n=0;n<nodes.length;n++) {
		//console.log('Looking for ',nodes[n].textContent)
		//console.log('Language is ',nodes[n].lang)
        
        // example of raw data: τέσσερα|four|ˈtesera|téssera|notes

		if (nodes[n].lang === langFilter && egList[nodes[n].textContent]) {
			temp = egList[nodes[n].textContent].split('|')
			var out = ''
			if (nodes[n].classList.contains('inline')) out += '<span class="charExample inline" translate="no">'
			else out += '<span class="charExample" translate="no">'
			
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
			var ipa = ''
			/*
            var transcription = ''
            this code separated out stuff in parens - too complicated!
			if (temp[2] && temp[2].includes('(')) {
				var temptemp = temp[2].split('(')
				ipa = temptemp[0].trim()
				transcription = temptemp[1].replace(/\)/,'')
				}
			else if (temp[2]) ipa = temp[2]
			if (transcription) out += ' (<bdi class="transc">'+transcription+'</bdi>)'
            */
			if (temp[2]) ipa = temp[2]
			
			// alt/transcription
			if (temp[3] && nodes[n].classList.contains('transc')) {
				out += ' (<bdi class="transc"'
				if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
				out += '>'+temp[3]+'</bdi>)'
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
	}

//<span class="charExample" translate="no"><span class="ex" lang="ta">கேடு</span> <span class="trans">kēʈu</span> <span class="ipa">keːɖʉ</span> <span class="meaning">destruction</span></span>


