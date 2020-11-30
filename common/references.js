function createReferences () {
	// creates the content of the references section from the refs.js file
	
	// backwards compatibility release valve
	if (typeof refs === 'undefined') return
	
	
	// draw the references section
	var out = '<h2>References</h2>\n<ol>'
	
	for (ref in refs) {
		out += '<li>'
		out += '<i class="fn">'+ref+'</i> &nbsp;&nbsp;'
		out += '<span class="refAuthor">'+refs[ref].authors+'</span>'
		out += ', <a target="_blank" href="'+refs[ref].url+'"><cite class="refTitle">'+refs[ref].title+'</cite></a>'
		if (refs[ref].sub) out += ', <span class="refSub">'+refs[ref].sub+'<span>'
		if (refs[ref].publisher) out += ', <span class="refPublisher">'+refs[ref].publisher+'<span>'
		if (refs[ref].pages) out += ', <span class="refPages">'+refs[ref].pages+'<span>'
		if (refs[ref].isbn) out += ', ISBN <span class="refISBN">'+refs[ref].isbn+'<span>'
		out += '</li>\n'
		}
	
	out += '</ol>\n'
	
	document.getElementById('refs').innerHTML = out
	
	setFootnoteRefs()
	}





function setFootnoteRefs () {
	// creates markup for the footnote references
		
	fnrefs = document.querySelectorAll('tt')
	console.log(fnrefs)
	for (let i=0;i<fnrefs.length;i++) {
		var itemArray = fnrefs[i].textContent.split(',')
		var locn = ''
		var pages = ''
		var id = itemArray[0]
		var authors = refs[id].authors
		var title = refs[id].title
		if (typeof refs[id] === 'undefined') console.log('refs[id] ('+id+') is undefined.')
		
		if (itemArray.length > 1) {
			if (itemArray[1][0] === '#') locn = itemArray[1]
			else pages = itemArray[1]
			}
		url = refs[id].url
		
		out = '<a class="fn" target="_blank" title="'+authors+', '+title
		if (pages) out += ', p.'+pages
		out += '" href="'+url+locn+'">'+id+pages+'</a>'
		fnrefs[i].outerHTML = out
		}
	}



