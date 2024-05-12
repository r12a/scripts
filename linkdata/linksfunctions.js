// THIS FILE WAS ADAPTED TO CREATE & RUN THE NEW DATA STRUCTURE
// the new data structure is a single object with all relevant info for each script
// included as a sub-object, rather than several large items plus the main db


function getData (script) {
	var out, lc, norm, temp
	
	script = script.toLowerCase()
    if (! linkDB[script]) return '<p>No data found.</p>'
    
	record = linkDB[script]
	lc = script.toLowerCase()
	if (record.script) norm = linkDB[script].script.toLowerCase().replace(/ /g,'_')
    
    //    'cans':'Eastern Canadian Inuktitut, Plains Cree',  

    
// temporary code to capture db fields for integration

if (! record.ssHistory) {
    if (record.charts) {
        oldcharts = record.charts
        record.charts = []
        for (c=0;c<oldcharts.length;c++) {
            pair = []
            pair.push(oldcharts[c])
            pair.push(blockStart[oldcharts[c].toLowerCase().replace(/ /g,'_')])
            record.charts.push(pair)
            }
        console.log(record.charts)
        }
    
    if (scriptNotes[record.code.toLowerCase()]) {
        record.scriptNotes = scriptNotes[record.code.toLowerCase()]
        console.log('scriptNotes', record.scriptNotes)
        }
    else console.log('No scriptnotes for', record.code)
    
    if (charNotesList[record.code.toLowerCase()]) {
        record.charNotesList = charNotesList[record.code.toLowerCase()]
        console.log('charNotesList', record.charNotesList)
        }
    else console.log('No scriptNotes for', record.code)
    
    if (orthoChart[record.code.toLowerCase()]) {
        record.orthoChart = orthoChart[record.code.toLowerCase()]
        console.log('orthoChart', record.orthoChart)
        }
    else console.log('No orthoChart for', record.code)
    
    if (ssHistory[record.code.toLowerCase()]) {
        record.ssHistory = ssHistory[record.code.toLowerCase()]
        console.log('ssHistory', record.ssHistory)
        }
    else console.log('No ssHistory for', record.code)
    
    if (chapters[record.code.toLowerCase()]) {
        record.chapters = chapters[record.code.toLowerCase()]
        console.log('chapters', record.chapters)
        }
    else console.log('No chapters for', record.code)
    
    if (blockStart[record.script.toLowerCase().replace(/ /g,'_')]) {
        record.blockStart = blockStart[record.script.toLowerCase().replace(/ /g,'_')]
        console.log('blockStart', record.blockStart)
        }
    else console.log('No blockStart for', record.script.toLowerCase().replace(/ /g,'_'))
    
    
    }

outcode = `${lc}:{ script:"${record.script}", code:"${record.code}", name:"${record.name}", type:"${record.type}",
dates:"${record.dates}", start:"${record.start}", end:"${record.end}", current_usage:"${record.current_usage}",
status:"${record.status}",
origin:"${record.origin}",
info:{ wikipedia:"${record.info.wikipedia}", omniglot:"${record.info.omniglot}" },
local: [ ], layout: [ ],
charts: [ `
for (c=0;c<record.charts.length;c++) {
    outcode += '["'+record.charts[c][0]+'", "'+record.charts[c][1]+'"]'
    if (c<record.charts.length-1) outcode += ', '
    }
outcode += ` ],
`
if (record.scriptNotes) {
    outcode += `scriptNotes: [`
    for (n=0;n<record.scriptNotes.length;n++) {
        outcode += '["'+record.scriptNotes[n][0]+'", "'+record.scriptNotes[n][1]+'"]'
        if (n<record.scriptNotes.length-1) outcode += ', ' 
        }
    outcode += `],
`
    }
if (record.charNotesList) {
    outcode += `charNotesList:[`
    if (record.charNotesList.length > 0) outcode += `"${record.charNotesList[0]}", "${record.charNotesList[1]}"`
    outcode += `],
`
    }
outcode += `orthoChart: "${record.orthoChart}",
ssHistory: "${record.ssHistory}",
chapters: "${record.chapters}",
usedfor: "${record.usedfor}",
},
`

/*
outcode = `${lc}:{ script:"${record.script}", code:"${record.code}", name:"${record.name}", type:"${record.type}",
dates:"${record.dates}", start:"${record.start}", end:"${record.end}", current_usage:"${record.current_usage}",
status:"${record.status}",
origin:"${record.origin}",
info:{ wikipedia:"${record.info.wikipedia}", omniglot:"${record.info.omniglot}" },
local: [ ], layout: [ ],
charts: [ `
for (c=0;c<record.charts.length;c++) {
    outcode += '["'+record.charts[c]+'", "'+blockStart[record.charts[c].toLowerCase().replace(/ /g,'_')]+'"]'
    if (c<record.charts.length-1) outcode += ', '
    }
outcode += ` ],
scriptNotes: [`
notes = scriptNotes[record.code.toLowerCase()]
cnotes = charNotesList[record.code.toLowerCase()]
console.log(notes)
for (n=0;n<notes.length;n++) {
    outcode += '["'+notes[n][0]+'", "'+notes[n][1]+'"]'
    if (n<notes.length-1) outcode += ', ' 
    }
outcode += `],
charNotesList:["${cnotes[0]}", "${cnotes[1]}"],
orthoChart: "${orthoChart[record.code.toLowerCase()]}",
ssHistory: "${ssHistory[record.code.toLowerCase()]}",
chapter: "${chapters[record.code.toLowerCase()]}", blockStart: "${blockStart[record.script.toLowerCase().replace(/ /g,'_')]}",
usedfor: "${record.usedfor}",
},
`
*/



	// title
	if ( record.name ) out = '<h2>'+record.name+'</h2>'
	else out = '<h2>'+record.script+'</h2>'
	out += '<table class="links"><tbody>'


	// script code
	out += '<tr><th>Script code:</th><td>'
	out += lc
	out += '</td></tr>'


	// chronology
	if (record.dates) {
		temp = ''
		temp += '<tr><th>Chronology:</th><td>'
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
		out += '<tr><th>Type:</th><td>'
		out += '<p class="scripttype">'+record.type+'</p>'
        out += '</td>'
		}


	// orthography descriptions
	if (record.scriptNotes) {
        out += '<tr><th>Orthography descriptions:</th><td style="font-size:1.2em;">'
		if (record.scriptNotes && record.scriptNotes.length > 0) {
            for (let n=0;n<record.scriptNotes.length;n++) out += '<p><a href="'+record.scriptNotes[n][1]+'" target="_blank">'+record.scriptNotes[n][0]+'</a></p>'
            }
		out += '</td></tr>'
		}




	// character detail
	if (record.charNotesList && record.charNotesList.length > 0 || record.ssHistory) {
		out += '<tr><th>Character detail:</th><td>'
		if (record.charNotesList && record.charNotesList.length > 0) out += '<p><a href="../scripts/'+record.charNotesList[1]+'" target="_blank">Character notes</a></p>'
		out += '<p><a href="http://scriptsource.org/entry/'+record.ssHistory+'" target="_blank">Unicode historical documents</a></p>'
		out += '</td></tr>'
		}




	// term lists
	if (record.terms) {
        out += '<tr><th>Term lists:</th><td>'
        for (let n=0;n<record.terms.length;n++) out += '<p><a href="'+record.terms[n][1]+'" target="_blank">'+record.terms[n][0]+'</a></p>'
 		out += '</td></tr>'
        }




	// general info
	if (record.info) {
		out += '<tr><th>General info:</th><td>'
		out += '<p><a target="_blank" href="http://www.unicode.org/versions/latest/ch'+record.chapters+'.pdf">Unicode</a></p>'
		out += '<p><a target="_blank" href="http://scriptsource.org/scr/'+record.code+'" >Scriptsource</a></p>'
		if (record.info.wikipedia) out += '<p><a target="_blank" href="http://en.wikipedia.org/wiki/'+record.info.wikipedia+'">Wikipedia</a></p>'
		if (record.info.omniglot) {
			if ( record.info.omniglot.match('http') ) out += '<p><a target="_blank" href="'+record.info.omniglot+'">Omniglot</a></p>'
			else out += '<p><a target="_blank" href="http://www.omniglot.com/writing/'+record.info.omniglot+'.htm">Omniglot</a></p>'
			}
		if (record.info.endalpha) out += '<p><a target="_blank" href="https://www.endangeredalphabets.net/alphabets/'+record.info.endalpha+'">Endangered alphabets</a></p>'
		//if (record.info.endangered[lc]) out += '<p><a target="_blank" href="https://www.endangeredalphabets.net/alphabets/'+endangered[lc]+'">Endangered alphabets</a></p>'
		// ?
		for (let r=2;r<record.local.length;r++) temp += '<p><a href="'+record.info[r].url+'" >'+record.info[r].name+'</a></p>'
		out += '</td></tr>'
		}




	// other info
	if ((record.local && record.local.length > 0) || (record.layout && record.layout.length > 0) || record.orthoChart) {
		var temp = ''
        temp += '<tr><th>Other info:</th><td>'
		for (var r=0;r<record.local.length;r++) temp += '<p><a href="'+record.local[r].url+'" target="_blank">'+record.local[r].name+'</a></p>'
		if (record.layout && record.layout.length > 0) {
            for (let n=0;n<record.layout.length;n++) temp += '<p><a href="'+record.layout[n].url+'" target="_blank">'+record.layout[n].name+'</a></p>'
            }
		if (record.orthoChart) temp += '<p><a href="featurelist/index.html" target="_blank">Comparisons:</a> '+record.orthoChart+'</p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Other info:</th><td></td></tr>') out += temp
		}



	// pickers
	temp = ''
	temp += '<tr><th>Pickers:</th><td>'
	for (let p=0;p<plist.length;p++) {
		if (plist[p].tag === script) temp += '<p><a href="../pickers/'+plist[p].url+'" target="_blank">'+plist[p].name+'</a></p>'
		}
	temp += '</td></tr>'
	if (temp !== '<tr><th>Pickers:</th><td></td></tr>') out += temp



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
		out += '<tr><th>Character usage:</th><td>'
		out += temp
		out += '</td></tr>'
		}
		
		


    // charts table
	if (record.charts) {
		out += '<tr><th>Charts:</th><td><table><tbody>'
		for (var r=0;r<record.charts.length;r++) out += '<tr><td>'+record.charts[r][0]+'</td><td><a href="../uniview/index.html?block='+record.charts[r][0].toLowerCase().replace(/ /g,'_')+'" target="_blank">UniView</a></td><td><a href="http://www.unicode.org/charts/PDF/U'+record.charts[r][1]+'.pdf" target="_blank">Unicode</a></td></tr>'
		out += '</tbody></table></td></tr>'
		}



	//  fonts
	temp = ''
	if (sampleScriptsIndex[lc] && sampleScriptsIndex[lc].font) {
		temp = '<tr><th>Fonts:</th><td>'
		for (let i=0;i<sampleScriptsIndex[lc].font.length;i++) temp += '<p><a href="fontlist/index.html?script='+sampleScriptsIndex[lc].font[i]+'" target="_blank">'+sampleScriptsIndex[lc].font[i]+'</a></p>'
		}
	temp += '</td></tr>'
	if (temp !== '<tr><th>Fonts:</th><td></td></tr>') out += temp





	// phrases
	temp = ''
	if ((phrasesList[lc] || sampleScriptsIndex[lc])) {
		temp = '<tr><th>Samples:</th><td>'
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
  




    // used for
	if (record.usedfor) {
		var temp = ''
		temp += '<tr><th>Used for:</th><td>'
		temp += '<p class="usedfor">'+record.usedfor.replace(/],/g,'],&nbsp;&nbsp;&nbsp;')+'</p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Used for:</th><td></td></tr>') out += temp
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
	