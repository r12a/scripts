function createReferencesSTABLE () {
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
		out += '<i class="fnDef">'+counter+'</i>'
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





function createReferences () {
	// creates the content of the references section from the refs.js file
	
	// backwards compatibility release valve
	if (typeof reflist === 'undefined') return
	
	
	// draw the references section
	var out = '<h2>References</h2>'
	var counter = 0
	
	// find out what references are pointed to from the document
	tts = document.querySelectorAll('tt')
	//console.log('tts length',tts.length)
	ttsUsed = []
	for (i=0;i<tts.length;i++) {
		temp = tts[i].textContent.split(',')
		ttsUsed.push(temp[0])
		}
	var usedRefs = new Set(ttsUsed)
	
	
	for (ref in reflist) {
		if (! usedRefs.has(ref)) continue
		counter++
		out += '<p>'
		//out += '<i class="fn">'+ref+'</i>'
		out += '<i class="fnDef">'+counter+'</i>'
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
		if (typeof reflist[id] === 'undefined') console.log('reflist[id] ('+id+') is undefined.')
		var counter = reflist[id].counter
		var authors = reflist[id].authors
		var title = reflist[id].title
		
		if (itemArray.length > 1) {
			if (itemArray[1][0] === '#') locn = itemArray[1]
			else pages = '^'+itemArray[1]
			}
		url = reflist[id].url
		
		out = '<a class="fn" target="_blank" title="'+authors+', '+title
		if (pages) out += ', p.'+pages.replace(/:/,'')
		if (locn) out += ', §'+locn.replace(/#/,'')
		out += '" href="'+url+locn+'">'+counter+pages+more+'</a>'
		fnrefs[i].outerHTML = out
		}
	}


/*
function chooseRelevantRefs () {
	// hide references in the refs section that are not used in the document
	
	fns = document.querySelectorAll('.fn')
	console.log('fns length',fns.length)
	refsUsed = []
	for (i=0;i<fns.length;i++) {
		temp = fns[i].textContent.split(':')
		temp[0] = temp[0].replace(/→/,'')
		refsUsed.push(temp[0])
		}
	const uniqueSet = new Set(refsUsed)
	var uniqueArray = [...uniqueSet]

	console.log(uniqueArray)
	
	refs = document.querySelectorAll('.fnDef')

	for (i=0;i<refs.length;i++) {		
		if (! uniqueSet.has(refs[i].textContent)) refs[i].parentNode.style.display='none'
		}
	}
*/









