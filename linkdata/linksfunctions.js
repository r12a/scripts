// THIS FILE WAS ADAPTED TO CREATE & RUN THE NEW DATA STRUCTURE
// the new data structure is a single object with all relevant info for each script
// included as a sub-object, rather than several large items plus the main db


function getData (script) {
    console.log('>> getData( ', script, ')')
	var out, lc, norm, temp
	
    //console.log(window.scriptInfo)
	script = script.toLowerCase()
    //if (linkDB === '') return '<p>No data found.</p>'
    if (typeof scriptInfo === 'undefined') return '<p>No data found.</p>'
    
	record = scriptInfo
    // console.log('RECORD', record)
	lc = script.toLowerCase()
	if (record.script) norm = scriptInfo.script.toLowerCase().replace(/ /g,'_')
    

	// title
	//if ( record.name ) out = '<h2>'+record.name+'</h2>'
	//else out = '<h2>'+record.script+'</h2>'
	out = '<h2>'+record.script+'</h2>'

    // add descriptions to the right column    
    var sidebar = ''
    
    sidebar += record.history+'<br><br>'+record.description+'<br><br>'+record.unicode

    if (record.name !== '') {
        sidebar += `<p style="margin-block:3rem;"><i>Alternate names:</i><br><span style="color:chocolate">`
        var names = record.name.split(',')
        for (i=0;i<names.length;i++) sidebar += names[i]+'<br>'
        sidebar += `</span></p>`
        }

    document.getElementById('scriptIntro').innerHTML = sidebar
    
    
    
    

    out += `<table class=""><tbody>`

	// script code
	out += `<tr><td><b>Script code:</b><p>${ record.code.toLowerCase() }</p></td>`


	// type
	if (record.type) {
		out += '<td><b>Type:</b>'
		out += '<p class="scripttype">'+record.type+'</p>'
        out += '</td>'
		}

	// chronology
		temp = ''
		temp += '<td><b>Chronology:</b>'
		temp += '<p>'
		temp += record.dates
		temp += '</p>'
		if (record.status) {
			temp += '<p class="status">'+record.status+'</p>'
			}
		temp += '</td></tr>'
		out += temp
	out += `</tbody></table>`

    out += `<table class="links"><thead><tr>
    <th style="width:50%;">&nbsp;</th>
    <th style="width:50%;">&nbsp;</th>
    </tr></thead><tbody>`


	// orthography descriptions
	if (record.scriptNotes && record.scriptNotes.length > 0) {
        out += '<tr><td><b>Orthography descriptions:</b><p style="font-size:1.2em;">'
		if (record.scriptNotes && record.scriptNotes.length > 0) {
            for (let n=0;n<record.scriptNotes.length;n++) {
                out += '<p style="font-size:1.2em;"><a href="'+record.scriptNotes[n][1]+'" target="_blank">'+record.scriptNotes[n][0]+'</a>'
                if (clickthrough && [...clickthrough].length < 2) out += `<span class="clickthrough"><a href="${ record.scriptNotes[n][1] }?showIndex#index${ clickthrough }" target="_blank">find ${ clickthrough }</a></span>`
                out += '</p>'
                }
            }
		out += '</td>'
		}




	// pickers 
	if (record.pickers && record.pickers.length > 0) {
        out += '<td><b>Pickers:</b>'
		if (record.pickers && record.pickers.length > 0) {
            for (let n=0;n<record.pickers.length;n++) {
                out += '<p style="font-size:1.1em;"><a href="../pickers/'+record.pickers[n][1]+'/index.html" target="_blank">'+record.pickers[n][0]+'</a>'
                if (clickthrough) out += `<span class="clickthrough"><a href="${ record.pickers[n][1] }?showIndex#index${ clickthrough }" target="_blank">find ${ clickthrough }</a></span>`
                out += '</p>'
                }
            }
		out += '</td></tr>'
		}




	// term lists
	if (record.terms && record.terms.length > 0) {
        out += '<tr><td><b>Term lists:</b>'
        for (let n=0;n<record.terms.length;n++) out += '<p><a href="'+record.terms[n][1]+'" target="_blank">'+record.terms[n][0]+'</a></p>'
 		out += '</td>'
        }



	// character usage
	temp = ''
	beginning = true
	for (lang in langs) {
		if (langs[lang].script === script) {
			if (! beginning) temp += ' • '
			beginning = false
			temp += '<a href="../app-charuse/index.html?language='+lang+'" target="_blank">'+langs[lang].name+'</a> '
			}
		}
	if (temp !== '') {
		out += '<td><b>Character usage:</b><p>'
		out += temp
		out += '</p></td></tr>'
		}



	// general info
	if (record.info) {
		out += '<tr><td><b>General info:</b>'
		if (record.htmlchapter) out += 
            `<p><a target="_blank" href="https://unicode.org/versions/Unicode17.0.0/core-spec/chapter-${ record.htmlchapter }">Unicode</a></p>`
		else out += 
            `<p><a target="_blank" href="http://www.unicode.org/versions/latest/ch${ record.chapters }.pdf">Unicode</a></p>`
		//out += 
        //    `<p><a target="_blank" href="http://scriptsource.org/scr/${ record.code }">Scriptsource</a></p>`
		if (record.info.wikipedia) out += 
            '<p><a target="_blank" href="http://en.wikipedia.org/wiki/'+record.info.wikipedia+'">Wikipedia</a></p>'
		out += 
            `<p><a target="_blank" href="https://writingsystems.info/scrlang/scripts/${ record.code.toLowerCase() }/">SIL</a></p>`
		if (record.info.omniglot) {
			if ( record.info.omniglot.match('http') ) out += 
                '<p><a target="_blank" href="'+record.info.omniglot+'">Omniglot</a></p>'
			else out += 
                '<p><a target="_blank" href="http://www.omniglot.com/writing/'+record.info.omniglot+'.htm">Omniglot</a></p>'
			}
		if (record.info.endalpha) out += 
            '<p><a target="_blank" href="https://www.endangeredalphabets.net/alphabets/'+record.info.endalpha+'">Endangered alphabets</a></p>'
        
        if (record.orthoChart) out += 
            '<p><a href="script-features/index.html" target="_blank">Script comparison table</a></p></td>'

		// Add any other local documents
		//for (let r=2;r<record.local.length;r++) temp += '<p><a href="'+record.info[r].url+'" >'+record.info[r].name+'</a></p>'
		//out += '</td></tr>'
		}






	// character detail
	if (record.charNotesList && record.charNotesList.length > 0 || record.ssHistory) {
		out += '<td><b>Character detail:</b>'
		//out += '<p><a href="http://scriptsource.org/entry/'+record.ssHistory+'" target="_blank">Unicode historical documents</a></p>'
		
		out += '<p><a href="https://writingsystems.info/scrlang/unicode/'+record.code.toLowerCase()+'-unicode/" target="_blank">Unicode historical documents</a></p>'
		
        if (record.scriptNotes && record.scriptNotes.length > 0) {
            out += '<p>'
            for (let n=0;n<record.scriptNotes.length;n++) {
                if (n>0) out += ' • '
                out += '<a href="'+record.scriptNotes[n][1].replace(/.html/,'')+'-characters.html" target="_blank">'+record.scriptNotes[n][0]+'</a>'
                }
            out += '</p>'
            }
        
        if (record.charNotesList && record.charNotesList.length > 0) out += '<p><a href="../scripts/'+record.charNotesList[1]+'" target="_blank">Unicode block notes</a></p>'

        out += '</td></tr>'
		}




	// other info
	if ((record.local && record.local.length > 0) || (record.layout && record.layout.length > 0) || record.orthoChart) {
		var temp = ''
        temp += '<tr><td colspan="2"><b>Other info:</b>'
		for (var r=0;r<record.local.length;r++) temp += '<p><a href="'+record.local[r].url+'" target="_blank">'+record.local[r].name+'</a></p>'
		if (record.layout && record.layout.length > 0) {
            for (let n=0;n<record.layout.length;n++) temp += '<p><a href="'+record.layout[n].url+'" target="_blank">'+record.layout[n].name+'</a></p>'
            }
		temp += '</td></tr>'
		if (temp !== '<tr><th>Other info:</th><td></td></tr>') out += temp
		}



	//  fonts
	temp = ''
	if (sampleScriptsIndex[lc] && sampleScriptsIndex[lc].font) {
		temp = '<tr><td><b>Fonts:</b>'
		for (let i=0;i<sampleScriptsIndex[lc].font.length;i++) temp += '<p><a href="fontlist/index.html?script='+sampleScriptsIndex[lc].font[i]+'" target="_blank">'+sampleScriptsIndex[lc].font[i]+'</a></p>'
		}
	temp += '</td>'
	if (temp !== '<tr><th>Fonts:</th><td></td>') out += temp





	// phrases
	temp = ''
	if ((phrasesList[lc] || sampleScriptsIndex[lc])) {
		temp = '<td><b>Samples:</b>'
		if (sampleScriptsIndex[lc]) {
			temp += '<p><a href="samples/index.html?script='+lc+'" target="_blank">Sample DB</a> ('
			for (let i=0;i<sampleScriptsIndex[lc].langs.length;i++) {
				if (i!==0) temp += ', '
				temp += sampleScriptsIndex[lc].langs[i]
				}
			temp += ')</p>'
			}
		if (phrasesList[lc]) temp += '<p><a href="phrases.html#'+lc+'" target="_blank">W3C phrase list</a> ('+phrasesList[lc]+')</p>'
		}
	temp += '</td></tr>'
	if (temp !== '<tr><th>Samples:</th><td></td></tr>') out += temp
		
		


    // charts table
	if (record.charts) {
		out += '<tr><td colspan="2"><b>Charts:</b><table><tbody>'
		for (var r=0;r<record.charts.length;r++) out += '<tr><td colspan="3">'+record.charts[r][0]+'</td><td><a href="../uniview/index.html?block='+record.charts[r][0].toLowerCase().replace(/ /g,'_')+'" target="_blank">UniView</a></td><td><a href="http://www.unicode.org/charts/PDF/U'+record.charts[r][1]+'.pdf" target="_blank">Unicode</a></td></tr>'
		out += '</tbody></table></td></tr>'
		}
  




    // used for
	if (record.usedfor) {
		var temp = ''
        var usedforArray = record.usedfor.split(',')
        
		//temp += '<tr><td colspan="2"><b>Used for:</b>'
        if (usedforArray.length > 0) {
            temp += `<tr><td colspan="2"><b>Used for:</b> &nbsp; <small>${ usedforArray.length } languages</small>`
            temp += '<p class="usedfor">'

            for (let i=0;i<usedforArray.length;i++) {
                ltag = usedforArray[i].trim().split('[')
                link = ''
                if (ltag && typeof ltag[1] !== 'undefined') link = `<span class="ethlink">${ ltag[0] } [<a href="https://www.ethnologue.com/language/${ ltag[1].replace(/\]/,'') }/" target="_blank">${ ltag[1].replace(/\]/,'') }</a>],&nbsp;&nbsp;&nbsp;</span> `
                else link = `${ ltag[0] }, `
                temp += `${ link }`
                }
            temp += '</p></td></tr>'
            }
            if (temp !== '') out += temp
		}
  




    // used for
	/*if (record.usedfor) {
		var temp = ''
		temp += '<tr><td colspan="2"><b>Used for:</b>'
		temp += '<p class="usedfor"><a href="https://www.ethnologue.com/language/gon/" target="_blank">'+record.usedfor.replace(/],/g,'],record.usedfor&nbsp;&nbsp;&nbsp;')+'</p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Used for:</th><td></td></tr>') out += temp
		}*/
  




    // lineage & siblings
	if (record.lineage) {
		var temp = ''
		temp += '<tr><td colspan="2"><b>Lineage:</b>'
		temp += `<p class="lineage">${ record.lineage.replace(/>/g,' → ') }</p>`
		temp += '</td></tr>'
		if (temp !== '<tr><th>Lineage:</th><td></td></tr>') out += temp
		}
	if (record.siblings) {
		var temp = ''
		temp += '<tr><td colspan="2"><b>Siblings:</b>'
		temp += `<p class="siblings">${ record.siblings }</p>`
		temp += '</td></tr>'
		if (temp !== '<tr><th>Lineage:</th><td></td></tr>') out += temp
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
    // outcode = outcode.replace(/undefined/g,'')
	document.getElementById('out').innerHTML = out // + `<pre>${outcode}</pre>`
	}


function highlight (classNm, checkboxNode) {
    console.log('>> highlight( ',classNm,checkboxNode,' )')
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
			if (scripts[s].classList.contains('today')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'historic') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('historic')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'established') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('established')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'limited') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('limited')) scripts[s].style.color = 'brown'
			}
		}



	if (classNm === 'recent') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('recent') || scripts[s].classList.contains('vrecent')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'vrecent') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('vrecent')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'rtl') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('rtl')) scripts[s].style.color = 'brown'
			}
		}




	if (classNm === 'alpha') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('alpha')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'abjad') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('abjad')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'abug') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('abug')) scripts[s].style.color = 'brown'
			}
		}

	if (classNm === 'syll') {
		for (let s=0; s<scripts.length; s++) {
			if (scripts[s].classList.contains('syll')) scripts[s].style.color = 'brown'
			}
		}





/*	
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
        */
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
    
    for (record in scriptInfo) {
		if (scriptInfo[record].script.toLowerCase() === script) {
			code = linkDB[record].code
			found = true
			break
			}
		}
	if (! found) return '<p>No data found.</p>'
	else return code.toLowerCase()
	}
	