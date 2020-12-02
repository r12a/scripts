function createReferencesOLD () {
	// creates the content of the references section from the refs.js file
	
	// backwards compatibility release valve
	if (typeof reflist === 'undefined') return
	
	
	// draw the references section
	var out = '<h2>References</h2>\n<ol>'
	
	for (ref in reflist) {
		out += '<li>'
		out += '<i class="fn">'+ref+'</i> &nbsp;&nbsp;'
		out += '<span class="refAuthor">'+reflist[ref].authors+'</span>'
		out += ', <a target="_blank" href="'+reflist[ref].url+'"><cite class="refTitle">'+reflist[ref].title+'</cite></a>'
		if (reflist[ref].sub) out += ', <span class="reflistub">'+reflist[ref].sub+'<span>'
		if (reflist[ref].publisher) out += ', <span class="refPublisher">'+reflist[ref].publisher+'<span>'
		if (reflist[ref].pages) out += ', <span class="refPages">'+reflist[ref].pages+'<span>'
		if (reflist[ref].isbn) out += ', ISBN <span class="refISBN">'+reflist[ref].isbn+'<span>'
		if (reflist[ref].reviewed) out += '<span class="reviewed" title="Review completed.">✓</span>'
		out += '</li>\n'
		}
	
	out += '</ol>\n'
	
	document.getElementById('refs').innerHTML = out
	
	setFootnoteRefs()
	}





function createReferences () {
	// creates the content of the references section from the refs.js file
	
	// backwards compatibility release valve
	if (typeof reflist === 'undefined') return
	
	
	// draw the references section
	var out = '<h2>References</h2>'
	var counter = 0
	
	for (ref in reflist) {
		counter++
		out += '<p>'
		//out += '<i class="fn">'+ref+'</i>'
		out += '<i class="fn">'+counter+'</i>'
		reflist[ref].counter = counter
		out += '<span class="refAuthor">'+reflist[ref].authors+'</span>'
		out += ', <a target="_blank" href="'+reflist[ref].url+'"><cite class="refTitle">'+reflist[ref].title+'</cite></a>'
		if (reflist[ref].sub) out += ', <span class="reflistub">'+reflist[ref].sub+'<span>'
		if (reflist[ref].publisher) out += ', <span class="refPublisher">'+reflist[ref].publisher+'<span>'
		if (reflist[ref].pages) out += ', <span class="refPages">'+reflist[ref].pages+'<span>'
		if (reflist[ref].isbn) out += ', ISBN <span class="refISBN">'+reflist[ref].isbn+'<span>'
		if (reflist[ref].reviewed) out += '<span class="reviewed" title="Review completed.">✓</span>'
		out += '</p>\n'
		}
	
	document.getElementById('refs').innerHTML = out
	
	setFootnoteRefs()
	}





function setFootnoteRefs () {
	// creates markup for the footnote references
		
	fnrefs = document.querySelectorAll('tt')
	for (let i=0;i<fnrefs.length;i++) {
		var more = ''
		if (fnrefs[i].classList.contains('more')) more = '→'
		var itemArray = fnrefs[i].textContent.split(',')
		var locn = ''
		var pages = ''
		var id = itemArray[0]
		var counter = reflist[id].counter
		var authors = reflist[id].authors
		var title = reflist[id].title
		if (typeof reflist[id] === 'undefined') console.log('reflist[id] ('+id+') is undefined.')
		
		if (itemArray.length > 1) {
			if (itemArray[1][0] === '#') locn = itemArray[1]
			else pages = itemArray[1]
			}
		url = reflist[id].url
		
		out = '<a class="fn" target="_blank" title="'+authors+', '+title
		if (pages) out += ', p.'+pages
		out += '" href="'+url+locn+'">'+counter+pages+more+'</a>'
		fnrefs[i].outerHTML = out
		}
	}



