/* global settings, currentTag, currentTitle, currentSample, fontDB */




function getResult (tag, hash) {
	if (tag == '') return
    
    var language = document.getElementById('language').value
    var features = document.getElementById('fontFeatures').value.replace(/"/,"'")
 
 	window.currentTag = tag
	window.currentTitle = scriptData[tag].title
	window.currentSample = scriptData[tag].sample


    document.getElementById('result').innerHTML = getSection(currentTag, currentTitle, currentSample, '', language, features)

	currentStyle = ''
    if (tag === null || hash === '') hash = 'result'
    document.getElementById(hash).scrollIntoView({behavior: 'smooth'})
	}






function getSection (script, scriptName, sample, style='', lang='', fontfeatures='') {
    console.log('getSection', script,scriptName, sample, style, lang, fontfeatures )
	var out = '<section id="'+script+style+'">'
	out += '<h2>'+scriptName+'</h2>'
    
    out += `<div class="samplePointer">`
    out += `<a href="../samples/index.html?script=${ script }" target="_blank">Sample text(s) for ${ scriptName }</a>`
    out += `&nbsp; • &nbsp;`
    out += `<a href="../links.html?iso=${ script }" target="_blank">Other resources for ${ scriptName }</a>`
    out += `</div>`
    
    
    out += `<div class="scriptDescription">`
    scriptId = scriptSummaries[script]
    console.log('scriptID', scriptId)
    if (typeof scriptId !== 'undefined') {
        if (scriptId.dates) out += `<div class="scriptDates">${ scriptId.dates }</div>`
        if (scriptId.status) out += `<div class="scriptStatus">${ scriptId.status }</div>`
        if (scriptId.lineage) out += `<div class="scriptLineage">Lineage: ${ scriptId.lineage }</div>`
        if (scriptId.siblings) out += `<div class="scriptSiblings">Siblings: ${ scriptId.siblings }</div>`
        if (scriptId.history || scriptId.description || scriptId.unicode) {
            out += `<div class="scriptDetails">`
            if (scriptId.history) out += `${ scriptId.history } `
            if (scriptId.description) out += `${ scriptId.description } `
            if (scriptId.unicode) out += `${ scriptId.unicode } `
            out += `</div>`
            }
        }
    out += `</div>`
    
    
    out += '<div id="myfontDisplay"></div>'
	var lastStyle = ''
	
	// find relevant records
	for (let r=0;r<fontDB.length;r++) { 
		if ((fontDB[r].locales.has(script) && style === '') || 
			(fontDB[r].style && fontDB[r].locales.has(script) && fontDB[r].style === style)) {
			
            if (fontDB[r].style === style) console.log('For',style,' found ',fontDB[r].name)
			// skip fonts that are not from one of the main sources
			if (fontDB[r].locales.has('other')) continue

			// check against requested sources
			if (
				settings.mac && fontDB[r].system.has('mac') ||
				settings.win && fontDB[r].system.has('win') ||
				settings.noto && fontDB[r].system.has('goog') ||
				settings.sil && fontDB[r].system.has('sil')
				)
				{ /* carry on */ }
			else continue

            // figure out directionality
            if (rtlScripts.has(script)) var direction = 'rtl'
            else direction = 'auto'
			
			
			out += '<div>'
			if (fontDB[r].style && fontDB[r].style !== lastStyle) {
                // transform any keywords that need it
                var writingStyle = ''
                if (fontDB[r].style === 'serif') writingStyle = 'modulated'
                else if (fontDB[r].style === 'sans') writingStyle = 'monoline'
                else if (fontDB[r].style === 'syrc') writingStyle = 'syriac estrangela'
                else if (fontDB[r].style === 'syre') writingStyle = 'syriac eastern'
                else if (fontDB[r].style === 'syrj') writingStyle = 'syriac western'
                else writingStyle = fontDB[r].style
            
				out += `<div id="${ writingStyle.replace(/ /g,'-') }" class="writingStyle"><a href="#${ writingStyle.replace(/ /g,'-') }">${ writingStyle }</a></div> `
				lastStyle = fontDB[r].style
				}
			out += '<p class="fontItem">'
			if (fontDB[r].system) {
				if (fontDB[r].system.has('mac')) out += `<img src="images/mac.png" width="25" height="22" alt="Mac" title="Click to show only Mac fonts." onclick="showOnly('mac', '${ script }')">`
				if (fontDB[r].md) out += `<img src="images/download.png" width="10" height="22" alt="Download" title="Download required.">`
				if (fontDB[r].system.has('win')) out += `<img src="images/windows.png" width="25" height="22" alt="Windows" title="Click to show only Windows fonts." onclick="showOnly('win', '${ script }')">`
				if (fontDB[r].wd) out += `<img src="images/download.png" width="10" height="22" alt="Download" title="Download required.">`
				if (fontDB[r].system.has('goog')) out += `<b title="Click to show only Noto fonts." onclick="showOnly('noto', '${ script }')">N</b> `
				if (fontDB[r].system.has('sil')) out += `<b title="Click to show only SIL fonts." onclick="showOnly('sil', '${ script }')">S</b> `
				}
			out += ' <span class="fontname"><span class="theName">'+fontDB[r].name+'</span>'
			out += ' <span style="color:#ccc; font-size:80%; margin: 0 1em; cursor: pointer;" onclick="this.parentNode.parentNode.parentNode.style.display = \'none\'">X</span> '
			//if (fontDB[r].notes) out += '<span class="infoIcon">🛈 '+fontDB[r].notes+'</span>'
            fontInfoKey = fontDB[r].name.toLowerCase()
			if (fontInfoDB[fontInfoKey]) out += `<span class="infoIcon" onclick="showFontInfo('${ fontDB[r].name }')"><span style="font-size:2em;">ℹ</span> Show details.</span>`
			out += '</span></p>'

			if (document.getElementById('showFonts').checked) {
				out += '<div class="sample text"'
				out += ' lang="'+lang+'"'
				out += ` dir="${ direction }" style="font-family:\'${ fontDB[r].name }\', \'Adobe NotDef\';`
				if (fontfeatures) out += ' font-feature-settings: '+fontfeatures+';'
				out += '">'
				if (document.getElementById('inputText').value !== '') {
					out += document.getElementById('inputText').value
					}
				else out += phraseDB[sample].text
				out += '</div>'
				}
			
			if (document.getElementById('showGraphics').checked && typeof script !== 'undefined') {
				out += '<div class="sample"'
				out += ` dir="${ direction }" style="font-family:\'${ fontDB[r].name }\', \'Adobe NotDef\';"><img src="img/${ script.substring(0,4) }/${ fontDB[r].name.toLowerCase().replace(/ /g,'') }.png" alt="'+'NOT FOUND'+'"></div>`
				}

			out += '</div>'
			}
		}
    
    // add a message if no fonts found
    if (out.endsWith('<div id="myfontDisplay"></div>')) out += `<h3 style="margin-block:3rem; border:0; font-size: 2rem;">No fonts !</h3>`
    
	out += '</section>'
	return out
	}





function showFontInfo (font) {
    document.getElementById('fontInfoTitle').textContent = font
    document.getElementById('fontInfoContent').innerHTML = fontInfoDB[font.toLowerCase()].replace(/\n/g,'<br><br>')
    document.getElementById('fontInfo').style.display = 'block'
    }






function showOnly (type, script) {
    settings.mac = false
    settings.win = false
    settings.noto = false
    settings.sil = false
    
    switch (type) {
        case 'mac': settings.mac = true; break
        case 'win': settings.win = true; break
        case 'noto': settings.noto = true; break
        case 'sil': settings.sil = true; break
        default: alert('Unrecognised type: '+type)
        }
    
    localStorage.fontListerSettings = JSON.stringify(settings)

    window.location = `index.html?script=${ script }`
    //getResult(script)
    }






function addMyFont (fontName) {
    let out = ''
    out += `<p class="fontItem"><b>My Font</b>
        <span class="fontname">${ fontName }<span style="color:#ccc; font-size:80%; margin: 0 1em; cursor: pointer;" onclick="this.parentNode.parentNode.parentNode.style.display = 'none'">X</span></span></p>`
    //out += `<div class="sample text" dir="auto" style="font-family:'${ fontName }', 'Adobe NotDef';" lang="">${ phraseDB[window.currentSample].text }</div>`
    
    out += `<div class="sample text" dir="auto" style="font-family:'${ fontName }';" lang="">${ document.getElementById('inputText').value }</div>`
    document.getElementById('myfontDisplay').innerHTML = out
    }





function copyFontList() {
  // 1. Collect all font names
  const names = Array.from(document.querySelectorAll("span.theName"))
                     .map(el => el.textContent.trim());

  // 2. Make a comma‑separated list
  const list = names.join(", ");

  // 3. Copy to clipboard
  navigator.clipboard.writeText(list).then(() => {

    // 4. Create a temporary notification dialog
    const note = document.createElement("div");
    note.textContent = "Font list copied to clipboard.";
    note.style.position = "fixed";
    note.style.top = "20px";
    note.style.left = "50%";
    note.style.transform = "translateX(-50%)";
    note.style.background = "rgba(0,0,0,0.85)";
    note.style.color = "white";
    note.style.padding = "1em 1.5em";
    note.style.borderRadius = "6px";
    note.style.fontSize = "1rem";
    note.style.zIndex = "9999";

    document.body.appendChild(note);

    // 5. Remove after 3 seconds
    setTimeout(() => note.remove(), 3000);
  });
}






function refresh () {
	getResult(window.currentTag)
	}


function changeFontSize ( newSize ) {
    settings.fontsize = newSize
    localStorage.fontListerSettings = JSON.stringify(settings)
	//document.getElementById( 'fontSizeStyling' ).innerHTML = '.text { font-size: '+newSize + 'px; }'
    document.getElementById( 'fontSizeStyling' ).innerHTML = '.text { font-size: '+newSize + 'px; } .sample img { height: '+eval(newSize*2) + 'px; }'
	document.getElementById( 'sizeIndicator' ).innerHTML = newSize + 'px'
	}


function setLanguage ( lang ) {
	var lines = document.querySelectorAll( '.text' )
	for (i=0;i<lines.length;i++) lines[i].lang = lang
	}

function setFontFeatures ( features ) {
	var lines = document.querySelectorAll( '.text' )
	for (i=0;i<lines.length;i++) lines[i].style.fontFeatureSettings = features
	}




function showActiveFontFilters() {
    const checks = [
        { id: "showMac",  label: "Mac" },
        { id: "showWin",  label: "Windows" },
        { id: "showNoto", label: "Noto" },
        { id: "showSIL",  label: "SIL" }
        ]

    const selected = checks.filter(c => document.getElementById(c.id).checked)

    // If all are selected, no dialog is needed
    if (selected.length === checks.length) return

    // Build the message
    const msg = document.createElement("div")
    msg.textContent = "Only fonts for the following are being shown: " +
                    selected.map(s => s.label).join(", ")

    // Basic styling for visibility
    msg.style.position = "fixed"
    msg.style.top = "20px"
    msg.style.left = "50%"
    msg.style.transform = "translateX(-50%)"
    msg.style.background = "rgba(0,0,0,0.85)"
    msg.style.color = "white"
    msg.style.padding = "1em 1.5em"
    msg.style.borderRadius = "6px"
    msg.style.fontSize = "1rem"
    msg.style.zIndex = "9999"

    document.body.appendChild(msg)

    // Remove after 2 seconds
    setTimeout(() => msg.remove(), 3000)
    }



function closeDialogEsc (e) {
    // closes the dialog box and panel when escape is pressed
    if (e.code === 'Escape') {
        document.getElementById('fontInfo').style.display = 'none'
        }
}









