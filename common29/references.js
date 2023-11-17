/* NOTE

window.langSet is set in the refs.js file

if createReferences is being used for a *block file* where window.langSet is true,
then add the following line just below the ref.js inclusion in the block source file:
<script>window.langSet = false </script>

*/

function createReferences (lang) {
	// creates the content of the references section from the refs.js file
	console.log('Language is ',lang)
	// backwards compatibility release valve
	if (typeof reflist === 'undefined') return
	
	
	// draw the references section
	var out = '<h2>References &amp; sources</h2>'
	var counter = 0
	
	// find out what references are pointed to from the document
	var tts = document.querySelectorAll('tt')
	//console.log('tts length',tts.length)
	var ttsUsed = []
	for (var i=0;i<tts.length;i++) {
		temp = tts[i].textContent.split(',')
		ttsUsed.push(temp[0])
		}
	var usedRefs = new Set(ttsUsed)
	
	
	for (ref in reflist) {
		//if (! usedRefs.has(ref)) continue
		if (window.langSet && lang !== 'all' && ! reflist[ref].lang.has(lang)) continue
		counter++
		out += '<p>'
		//out += '<i class="fn">'+ref+'</i>'
		out += '<i class="fnDef">'+counter+'</i>'
		reflist[ref].counter = counter
		out += '<span class="refAuthor">'+reflist[ref].authors+'</span>'
		if (reflist[ref].date) out += ' (<span class="reflistdate">'+reflist[ref].date+')'
		if (reflist[ref].url) out += ', <a target="_blank" href="'+reflist[ref].url+'"><cite class="refTitle">'+reflist[ref].title+'</cite></a>'
        else {
            reflist[ref].url = "#refs"
            out += ', <a href="'+reflist[ref].url+'"><cite class="refTitle">'+reflist[ref].title+'</cite></a>'
            }
		if (reflist[ref].sub) out += ', <span class="reflistub">'+reflist[ref].sub+'<span>'
		if (reflist[ref].publisher) out += ', <span class="refPublisher">'+reflist[ref].publisher+'<span>'
		if (reflist[ref].pages) out += ', <span class="refPages">'+reflist[ref].pages+'<span>'
		if (reflist[ref].isbn) out += ', ISBN <span class="refISBN">'+reflist[ref].isbn+'<span>'
		if (reflist[ref].retr) out += ' <small>(retr. '+reflist[ref].retr+')</small>'
		if (reflist[ref].reviewed) out += '<span class="reviewed" title="Review completed.">✓</span>'
		out += '</p>\n'
		}
	
	document.getElementById('refs').innerHTML = out
	
	setFootnoteRefs()
	}





function setFootnoteRefsOLD () {
	// creates markup for the footnote references
		
	var fnrefs = document.querySelectorAll('tt')
	for (let i=0;i<fnrefs.length;i++) {
		var more = ''
		if (fnrefs[i].classList.contains('more')) more = '→'
		var itemArray = fnrefs[i].textContent.split(',')
		var locn = ''
		var pages = ''
		var id = itemArray[0]
		if (typeof reflist[id] === 'undefined') console.log('reflist[id] ('+id+') is undefined.')
		var counter = reflist[id].counter
		var authors = reflist[id].authors
		var title = reflist[id].title
		
		if (itemArray.length > 1) {
			if (itemArray[1][0] === '#') locn = itemArray[1]
			else pages = '<sub>'+itemArray[1]+'</sub>'
			}
		var url = reflist[id].url
		
		var out = '<a class="fn" target="_blank" title="'+authors+', '+title
		if (pages) out += ', p.'+pages.replace(/<sub>/,'').replace(/<\/sub>/,'')
		if (locn) out += ', §'+locn.replace(/#/,'')
		out += '" href="'+url+locn+'">'+counter+pages+more+'</a>'
		fnrefs[i].outerHTML = out
		}
	}





function setFootnoteRefs () {
	// creates markup for the footnote references
		
	var fnrefs = document.querySelectorAll('tt')
    var out = ''
	for (let i=0;i<fnrefs.length;i++) {
		var more = ''
		if (fnrefs[i].classList.contains('more')) more = '→'
		var itemArray = fnrefs[i].textContent.split(',')
		var locn = ''
		var pages = ''
		var id = itemArray[0]
        var linktext = itemArray[0].replace(/@/,'')
        
        if (id.startsWith('@')) { // not linked to references section
            if (fnrefs[i].classList.contains('more')) out = `<a target="_blank" title="${ itemArray[0] }" href="${ itemArray[1] }">${ linktext }</a>`
            else out = `<a class="fn" target="_blank" title="${ itemArray[0] }" href="${ itemArray[1] }">§</a>`
            }
        else { // look up info in refs.js
		if (typeof reflist[id] === 'undefined') {
            console.log('%c' + 'reflist[id] ('+id+') is undefined.', 'color:' + 'red' + ';font-weight:bold;')
            console.log('languageName',languageName)
            //continue
            }
            var counter = reflist[id].counter
            var authors = reflist[id].authors
            var title = reflist[id].title

            if (itemArray.length > 1) {
                if (itemArray[1][0] === '#') locn = itemArray[1]
                else pages = '<sub>'+itemArray[1]+'</sub>'
                }
            var url = reflist[id].url

            out = '<a class="fn" target="_blank" title="'+authors+', '+title
            if (pages) out += ', p.'+pages.replace(/<sub>/,'').replace(/<\/sub>/,'')
            if (locn) out += ', §'+locn.replace(/#/,'')
            out += '" href="'+url+locn+'">'+counter+pages+more+'</a>'
            }
        fnrefs[i].outerHTML = out
		}
	}









