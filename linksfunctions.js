function getData (script) {
	var out, lc, norm, temp
	
	script = script.toLowerCase()
    if (! linkDB[script]) return '<p>No data found.</p>'
    
	record = linkDB[script]
	lc = script.toLowerCase()
	if (record.script) norm = linkDB[script].script.toLowerCase().replace(/ /g,'_')
	
	// title
	if ( record.name ) out = '<h2>'+record.name+'</h2>'
	else out = '<h2>'+record.script+'</h2>'
	out += '<table class="links"><tbody>'
	
	// script code
	out += '<tr><td>Script code:</td><td>'
	out += lc
	out += '</td></tr>'
	
	// chronology
	if (record.dates) {
		temp = ''
		temp += '<tr><td>Chronology:</td><td>'
		temp += '<p>'
		if (record.end) temp+= 'Historic script <span style="font-size:80%;">('+record.dates+')</span>'
		else if (record.current_usage) temp += record.dates+ ', <span style="font-size:80%">but with limited usage ('+record.current_usage+')</span>'
		else temp += record.dates
		temp += '</p>'
		if (record.status) {
			temp += '<p class="status">'+record.status+'</p>'
			}
		temp += '</td></tr>'
		out += temp
		}


	// type
	if (record.type) {
		out += '<tr><td>Type:</td><td>'
		out += '<p class="scripttype">'+record.type+'</p>'
		}


	// general info
	if (record.info) {
		out += '<tr><td>General info:</td><td>'
		out += '<p><a target="_blank" href="http://www.unicode.org/versions/latest/ch'+chapters[lc]+'.pdf">Unicode</a></p>'
		out += '<p><a target="_blank" href="http://scriptsource.org/scr/'+record.code+'" >Scriptsource</a></p>'
		if (record.info.wikipedia) out += '<p><a target="_blank" href="http://en.wikipedia.org/wiki/'+record.info.wikipedia+'">Wikipedia</a></p>'
		if (record.info.omniglot) {
			if ( record.info.omniglot.match('http') ) out += '<p><a target="_blank" href="'+record.info.omniglot+'">Omniglot</a></p>'
			else out += '<p><a target="_blank" href="http://www.omniglot.com/writing/'+record.info.omniglot+'.htm">Omniglot</a></p>'
			}
		if (endangered[lc]) out += '<p><a target="_blank" href="https://www.endangeredalphabets.net/alphabets/'+endangered[lc]+'">Endangered alphabets</a></p>'
		// ?
		for (let r=2;r<record.local.length;r++) temp += '<p><a href="'+record.info[r].url+'" >'+record.info[r].name+'</a></p>'
		out += '</td></tr>'
		}


	// descriptions
	if ((record.local && record.local.length > 0) || scriptNotes[lc] || compChartSet.has(lc)) {
		var temp = ''
		temp += '<tr><td>Descriptions:</td><td>'
		if (scriptNotes[lc]) {
            for (let n=0;n<scriptNotes[lc].length;n++) temp += '<p><a href="/scripts/'+scriptNotes[lc][n][1]+'" >'+scriptNotes[lc][n][0]+'</a></p>'
            }
		if (orthoChart[lc]) temp += '<p><a href="/scripts/featurelist/" >Comparisons:</a> '+orthoChart[lc]+'</p>'
		for (var r=0;r<record.local.length;r++) temp += '<p><a href="'+record.local[r].url+'" >'+record.local[r].name+'</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>This site:</th><td></td></tr>') out += temp
		}

	// character detail
	if (charNotesList[lc] || ssHistory[lc]) {
		out += '<tr><td>Character detail:</td><td>'
		if (charNotesList[lc]) out += '<p><a href="/scripts/'+charNotesList[lc][1]+'">Character notes</a></p>'
		out += '<p><a href="http://scriptsource.org/entry/'+ssHistory[lc]+'" >Unicode historical documents</a></p>'
		out += '</td></tr>'
		}


	// character usage
	temp = ''
	beginning = true
	for (lang in langs) {
		if (langs[lang].script === script) {
			if (! beginning) temp += ' • '
			beginning = false
			temp += '<a href="../app-charuse/?language='+lang+'">'+langs[lang].name+'</a> '
			}
		}
	if (temp !== '') {
		out += '<tr><td>Character usage:</td><td>'
		out += temp
		out += '</td></tr>'
		}
		
		
/*	var usageFound = false
	out += '<tr><td>Character usage:</td><td>'
		beginning = true
		for (lang in langs) {
			if (langs[lang].script === script) {
				if (! beginning) out += ' • '
				beginning = false
				out += '<a href="../app-charuse/?language='+lang+'">'+langs[lang].name+'</a> '
				}
			}
		out += '</td></tr>'
		*/
		
	// charts
	if (record.charts) {
		out += '<tr><td>Charts:</td><td><table><tbody>'
		for (var r=0;r<record.charts.length;r++) out += '<tr><td>'+record.charts[r]+'</td><td><a href="/uniview/?block='+record.charts[r].toLowerCase().replace(/ /g,'_')+'" >UniView</a></td><td><a href="http://www.unicode.org/charts/PDF/U'+blockStart[record.charts[r].toLowerCase().replace(/ /g,'_')]+'.pdf" >Unicode</a></td></tr>'
		out += '</tbody></table></td></tr>'
		}


	// character apps
	temp = ''
	temp += '<tr><td>Character apps:</td><td>'
	for (let p=0;p<plist.length;p++) {
		if (plist[p].tag === script) temp += '<p><a href="/pickers/'+plist[p].url+'" >'+plist[p].name+'</a></p>'
		}
	temp += '</td></tr>'
	if (temp !== '<tr><td>Character apps:</td><td></td></tr>') out += temp


	/* old fonts
	temp = ''
	if (fontLister[lc]) {
		temp = '<tr><td>Fonts:</td><td>'
		for (let i=0;i<fontLister[lc].length;i++) temp += '<p><a href="fontlist?script='+fontLister[lc][i][1]+'">'+fontLister[lc][i][0]+'</a></p>'
		}
	temp += '</td></tr>'
	if (temp !== '<tr><td>Character apps:</td><td></td></tr>') out += temp
	*/

	//  fonts
	temp = ''
	if (sampleScriptsIndex[lc] && sampleScriptsIndex[lc].font) {
		temp = '<tr><td>Fonts:</td><td>'
		for (let i=0;i<sampleScriptsIndex[lc].font.length;i++) temp += '<p><a href="fontlist?script='+sampleScriptsIndex[lc].font[i]+'">'+sampleScriptsIndex[lc].font[i]+'</a></p>'
		}
	temp += '</td></tr>'
	if (temp !== '<tr><td>Character apps:</td><td></td></tr>') out += temp
	
	// phrases
	temp = ''
	if ((phrasesList[lc] || sampleScriptsIndex[lc])) {
		temp = '<tr><td>Samples:</td><td>'
		if (sampleScriptsIndex[lc]) {
			temp += '<p><a href="samples?script='+lc+'" >Sample DB</a> ('
			for (let i=0;i<sampleScriptsIndex[lc].langs.length;i++) {
				if (i!==0) temp += ', '
				temp += sampleScriptsIndex[lc].langs[i]
				}
			temp += ')</p>'
			}
		if (phrasesList[lc]) temp += '<p><a href="phrases#'+lc+'" >W3C phrase list</a> ('+phrasesList[lc]+')</p>'
		}
	temp += '</td></tr>'
	if (temp !== '<tr><td>Character apps:</td><td></td></tr>') out += temp
    
    
    // used for
	if (record.usedfor) {
		var temp = ''
		temp += '<tr><td>Used for:</td><td>'
		temp += '<p class="usedfor">'+record.usedfor.replace(/],/g,'],&nbsp;&nbsp;&nbsp;')+'</p>'
		temp += '</td></tr>'
		if (temp !== '<tr><td>Used for:</td><td></td></tr>') out += temp
		}

/*
		if (record.fontkey) {
		var temp = ''
		temp += '<tr><td>Fonts &amp; keyboards:</td><td>'
		temp += '<p><a href="http://scriptsource.org/scr/'+record.code+'/font" >Scriptsource</a></p>'
		if (googleFontSet.has(lc)) temp += '<p><a href="https://www.google.com/get/noto/" >Google Noto</a></p>'
		if (googleEASet.has(lc)) temp += '<p><a href="http://www.google.com/fonts/earlyaccess" >Google Early Access</a></p>'
		if (gouFonts[lc]) temp += '<p><a href="http://www.wazu.jp/gallery/Fonts_'+gouFonts[lc]+'.html" >Gallery of Unicode Fonts</a></p>'
		for (var r=0;r<record.fontkey.length;r++) temp += '<p><a href="'+record.fontkey[r].url+'" >'+record.fontkey[r].name+'</a></p>'
		if (OSDefaultFontsSet.has(lc)) temp += '<p><a href="/scripts/fontlist/#'+norm+'" >OS default fonts</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><td>Fonts &amp; keyboards:</td><td></td></tr>') out += temp
		}
	if (record.layout) {
		var temp = ''
		temp += '<tr><td>Layout &amp; typography:</td><td>'
		for (var r=0;r<record.layout.length;r++) temp += '<p><a href="'+record.layout[r].url+'" >'+record.layout[r].name+'</a></p>'
		if (typographyDocSet.has(norm)) temp += '<p><a href="http://w3c.github.io/typography/" >International text layout and typography index</a></p>'
		if (w3cTypographySet.has(norm)) temp += '<p><a href="https://github.com/w3c/i18n-activity/issues?q=is%3Aissue+is%3Aopen+label%3A'+lc+'" >w3c/typography</a></p>'
		if (w3cTypeSampleSet.has(norm)) temp += '<p><a href="https://w3c.github.io/type-samples/" >w3c/type-samples</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><td>Layout &amp; typography:</td><td></td></tr>') out += temp
		}
	if (record.other && record.other.length > 0) {
		var temp = ''
		temp += '<tr><td>Other:</td><td>'
		for (var r=0;r<record.other.length;r++) temp += '<p><a href="'+record.other[r].url+'" >'+record.other[r].name+'</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><td>Other:</td><td></td></tr>') out += temp
		}
	*/
	
	
	out += '</table></tbody>'
	document.getElementById('out').innerHTML = out
	}


function highlight (classNm, checkboxNode) {
	// clear the other checkboxes
	var checkboxes = document.getElementById('usage').querySelectorAll('input')
	for (let i=0;i<checkboxes.length; i++) checkboxes[i].checked = false
	checkboxNode.checked = true
	
	// fade everything first
	var scripts = document.querySelectorAll('.script')
	for (let i=0;i<scripts.length;i++) scripts[i].style.color = '#ccc'
	
	// highlight the chosen few
	if (classNm === 'active') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].end === '' && linkDB[scripts[s].id.toLowerCase()].current_usage === '') scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'limited') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].end === '' && linkDB[scripts[s].id.toLowerCase()].current_usage !== '') scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'uptake') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].current_usage.includes('uptake')) scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'endangered') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].current_usage.includes('endangered')) scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'liturgical') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].current_usage.includes('liturgical')) scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'community') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].current_usage.includes('community')) scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'activelimited') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].end === '') scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'historic') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].end !== '') scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'recent') {
		for (let s=0; s<scripts.length; s++) {
			var start = parseInt(linkDB[scripts[s].id.toLowerCase()].start)
			if (start >= 1800) scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'vrecent') {
		for (let s=0; s<scripts.length; s++) {
			var start = parseInt(linkDB[scripts[s].id.toLowerCase()].start)
			if (start >= 1900) scripts[s].style.color = 'brown'
			}
		}
	
	if (classNm === 'rtl') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].type && linkDB[scripts[s].id.toLowerCase()].type.includes('RTL')) scripts[s].style.color = 'brown'
			}
		}
	if (classNm === 'alphabet') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].type && linkDB[scripts[s].id.toLowerCase()].type.includes('alphabet')) scripts[s].style.color = 'brown'
			}
		}
	if (classNm === 'abugida') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].type && linkDB[scripts[s].id.toLowerCase()].type.includes('abugida')) scripts[s].style.color = 'brown'
			}
		}
	if (classNm === 'abjad') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].type && linkDB[scripts[s].id.toLowerCase()].type.includes('abjad')) scripts[s].style.color = 'brown'
			}
		}
	if (classNm === 'syllabary') {
		for (let s=0; s<scripts.length; s++) {
			if (linkDB[scripts[s].id.toLowerCase()].type && linkDB[scripts[s].id.toLowerCase()].type.includes('syllabary')) scripts[s].style.color = 'brown'
			}
		}
	}



function clearAll () {
	var checkboxes = document.getElementById('filters').querySelectorAll('input')
	for (let i=0;i<checkboxes.length; i++) checkboxes[i].checked = false
	
	var scripts = document.querySelectorAll('.script')
	for (let i=0;i<scripts.length;i++) scripts[i].style.color = 'brown'
	}


function getScriptCode (script) {
	var found = false
	var record = null
	script = script.replace(/_/g, ' ')
	script = script.replace(/%20/g, ' ')
    script = script.toLowerCase()
    
    for (record in linkDB) {
		if (linkDB[record].script.toLowerCase() === script) {
			code = linkDB[record].code
			found = true
			break
			}
		}
	if (! found) return '<p>No data found.</p>'
	else return code.toLowerCase()
	}
	