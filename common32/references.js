/* NOTE

window.langSet is set in the refs.js file

if createReferences is being used for a *block file* where window.langSet is true,
then add the following line just below the ref.js inclusion in the block source file:
<script>window.langSet = false </script>

*/

function createReferences (lang) {
	// creates the content of the references section from the refs.js file
	// console.log('Creating references for ',lang)
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








function setFootnoteRefs () {
	// creates markup for the footnote references
		
	const fnrefs = document.querySelectorAll('tt')
    let out = ''
    const SOURCE = 0
    const DETAIL = 1
    
	for (let i=0;i<fnrefs.length;i++) {
		more = fnrefs[i].classList.contains('more') ? '\u{2139}' : ''
        
		const sourceAndDetail = fnrefs[i].textContent.split('§')
        const marker = '↗&#xFE0E;'+more
        const source = sourceAndDetail[SOURCE]
        const details = sourceAndDetail[DETAIL]
        
        
        // check whether source is in references
        if (reflist[sourceAndDetail[SOURCE]]) {
            const counter = reflist[source].counter
            const authors = reflist[source].authors
            const title = reflist[source].title
            let locn = ''
            let pages = ''

            if (sourceAndDetail.length > 1) {
                if (sourceAndDetail[DETAIL][0] === '#') locn = sourceAndDetail[DETAIL]
                else pages = ', p'+sourceAndDetail[DETAIL]
                }
                
            var url = reflist[sourceAndDetail[SOURCE]].url
            // if the details start with # and so does the reference url, replace former with latter
            //if (locn) url = reflist[sourceAndDetail[SOURCE]].url.replace(/#.*/, locn)
            const base = reflist[sourceAndDetail[SOURCE]].url
            if (locn) {
                if (base.includes('#')) url = base.replace(/#.*/, locn) // Replace existing fragment
                else url = base + locn  // Append new fragment
                }
            else url = base // No fragment to add

            
            out = `<a class="fn" target="_blank" title="${ authors }, ${ title }${ pages }" href="${ url }">${ counter }${ more }</a>`
            }
        
       else if (sourceAndDetail.length < 2 || ! sourceAndDetail[DETAIL].startsWith('http')) {
            const pointer = sourceAndDetail[SOURCE]
            const errmsg = `reflist ${ pointer } is undefined. Language is ${ languageName }.`
            console.log('%c' + errmsg, 'color:' + 'red' + ';font-weight:bold;')
            out = ` <span style="color:red">Reference ${ pointer } not found !</span> `
            }
        else {
            regex = new RegExp('@','g')
            out = `<a class="fn" target="_blank" title="${ sourceAndDetail[SOURCE].replace(regex,'') }" href="${ sourceAndDetail[DETAIL] }">${ marker }</a>`;
            }

        fnrefs[i].outerHTML = out
		}
	}









