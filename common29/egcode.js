/* jshint strict: false */
/* globals autoExpandExamples, egList */


//if (typeof traceSet === 'undefined') traceSet = new Set([])


window.autoExpandExamples = {}
// this will contain the vocab information stored in xxx-examples.js for all languages
// it has to be declared before that page is loaded, so that the .langFilter item can be attached
var egList = {}


function addExamples (langFilter) {
    if (traceSet.has('addExamples')) console.log('addExamples(',langFilter,')\n\tConvert all .eg items to full markup.')
/*  read the data into egList, in which each record has
	example, meaning, transcription?, notes?, alt?
	alt is generally a vowelled form for abjads or an alternative spelling
    
    latest modifications have the following effect:
    if .transc is set (and there's a transcription) only the transcription will be output (no IPA)
    otherwise, if there's IPA that will be output
    if there's no IPA and no .transc, then the transcription will be output
    there is no longer any transliteration output
    
    langFilter, class name used to select blocks to add examples to
    
    [GLOBALS]
    autoExpandExamples, obj, set above, then populated under .<langFiler> in xx-examples.js; holds all vocab
    
    [CLASSES]
    The calling element can have class names with the following meanings:
    inline      don't make into a separate, large text block
    transc      used to force display of the transcription rather than the IPA
    alt         displays the IPA/transcription with the special transcription (eg. vowelled version or other orthography than Latin)
    vertical    applies a vertical writing mode, eg. for Mongolian
    
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

    if (typeof autoExpandExamples[langFilter] === 'undefined') {
        console.log('%c' + 'autoExpandExamples[langFilter] fails for '+langFilter+'  (addExamples). Check the language setting on the link element.', 'color:' + 'red' + ';font-weight:bold;')
        return
        }
    var egArray = autoExpandExamples[langFilter].split("\n")

    for (var i=0;i<egArray.length;i++) {
		if (egArray[i] == '') continue
		var temp = egArray[i].split('|')
		egList[temp[0]] = egArray[i]
		}

    // find the nodes that correspond to the language in langFilter
	var selector = '.eg[lang='+langFilter+']'
	var nodes = document.querySelectorAll(selector)
	if (traceSet.has('addExamples')) console.log(nodes.length,' example nodes to expand')
	
	for (var n=0;n<nodes.length;n++) {
		//console.log('Looking for ',nodes[n].textContent)
		//console.log('Language is ',nodes[n].lang)
        
        // example of raw data: 
        // τέσσερα|four|ˈt§e§s§e§r§a|téssera|notes|x
        // term|meaning|ipa|transcription|notes|source

		if (nodes[n].lang === langFilter && egList[nodes[n].textContent]) {
			temp = egList[nodes[n].textContent].split('|')
            
            if (traceSet.has('addExamples')) console.log('addExamples:',egList[nodes[n].textContent])
            // get the available data
            var termdata = egList[nodes[n].textContent].split('|')
            var term = termdata[0]
            var meaning = termdata[1]
            var ipa = termdata[2]
            var transc = termdata[3]
            var notes = termdata[4]
            var alt = termdata[4]
            
            // choose the source pointer field depending on whether alt has been used
            var source
            if (termdata.length == 7) source = termdata[6]
            else source = termdata[5]
            
            
            if (ipa) var cleanIPA = ipa.replace(/§/g,'').replace(/–/g,'').replace(/‹/g,'').replace(/›/g,'')
            else cleanIPA = ''
            if (nodes[n].classList.contains('transc')) var forceTranscription = true
            else forceTranscription = false
            
            // start the charExample element
			var out = '<span class="charExample'
			if (nodes[n].classList.contains('inline')) out += ' inline'
			out += '" translate="no">'
			
			// add the .ex element, with onclick
			out += `<bdi class="ex`
            if (nodes[n].classList.contains('vertical')) out += ' vertical'
            out += `" lang="${ nodes[n].lang }"`
			if (nodes[n].dir === 'rtl') out += ' dir="rtl"'            
			//if (temp[2]) ipaBreakdown = temp[2]
            //else ipaBreakdown = ''
            //out += `  onclick="showNameDetails('${ term }', '${ nodes[n].lang }', window.blockDir, 'c', document.getElementById('panel'), '', '', '${ ipa }')"`
            // LATEST out += `  onclick="showNameDetails('${ term }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }')"`
            out += `  onmouseover="showNameDetails('${ term }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }')"`
			out += '>'
			out += term
			out += '</bdi>'
            
            // add an alternate transcription if requested
            if (nodes[n].classList.contains('alt')) {
                out += ` &nbsp;≡&nbsp; <bdi class="ex`
                if (nodes[n].classList.contains('vertical')) out += ' vertical'
                out += `" lang="${ nodes[n].lang }"`
                if (nodes[n].dir === 'rtl') out += ' dir="rtl"'            
                out += `  onclick="showNameDetails('${ alt }', '${ nodes[n].lang }', window.blockDir, '', document.getElementById('panel'), '', '', '${ ipa }')"`
                out += '>'
                out += alt
                out += '</bdi>'
                }
                
			
            // bail if there is a nometadata class name
            // this is used principally for maps with non-pointed examples
            if (nodes[n].classList.contains('short')) {
                out += '</span>'
                nodes[n].outerHTML = out
                continue
                }
            
			// add a transcription, if the .transc attribute is set
            if (forceTranscription) {
                if (transc) {
                    out += ' <bdi class="transc"'
                    if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
                    out += `>${ transc }</bdi>`
                    }
                }
            // ipa if available, otherwise look for transcription, unless .transc already set
			else if (ipa) out += ' <bdi class="ipa">'+cleanIPA+'</bdi>'
            else if (transc) {
                out += ' <bdi class="transc"'
                if (nodes[n].dir === 'rtl') out += ' dir="rtl"'
                out += `>${ transc }</bdi>`
                }

			// meaning
			if (meaning) out += ' <bdi class="meaning">'+meaning+'</bdi>'
			
			out += '</span>'
			
			nodes[n].outerHTML = out
			}
		}
    if (! typeof showTransliterations === 'undefined') showTransliterations( document.getElementById('translitToggleCheckbox').checked )
	egArray = []
	//egList = {}
	}






//<span class="charExample" translate="no"><span class="ex" lang="ta">கேடு</span> <span class="trans">kēʈu</span> <span class="ipa">keːɖʉ</span> <span class="meaning">destruction</span></span>


