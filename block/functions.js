
function checkForCharParam () {
	// check for parameters; if char= found with value, set style to show only that character
	var parameters = location.search.split('&')
	parameters[0] = parameters[0].substring(1)
	for (var p=0;p<parameters.length;p++) {  
		var pairs = parameters[p].split('=')
		if (pairs[0] === 'char') { 
			if (pairs[1]) { 
				document.getElementById('includeStyles').textContent = '.character, h1, h2, h3, #charlistsection, .sidebar, header, #status, #intro, #fontsetting, section>p, .smallprint, .univiewLink, .subtitle, .unicodenotes, .charimg, .charname, #top, #ack, #refs { display: none; } .notes { margin: 0;} #char'+pairs[1]+' { display: block; }' 
				} 
			}
		}
	}



function hideStuff (codepoint) {
	document.getElementById('includeStyles').textContent = '.character, h1, h2, h3, #charlistsection, .sidebar, header, #status, #intro, #fontsetting, .smallprint, .univiewLink, .subtitle, .unicodenotes, #references, #endlinks, .up { display: none; } #char'+codepoint+' { display: block; }' 
	}




function setBoxFont (fontname) {		
	// change the font of the large characters in the block pages
	// but don't change the size
	var pictures = document.querySelectorAll('.charimg')
	for (var p=0;p<pictures.length;p++) {  
		pictures[p].style.fontFamily = fontname
		}
	}



function setGeneralFont (fontname, size, language) {
	if (language === '') return
	var langtags = language.split(',')
	var searchstr = ''
	if (langtags.length === 1) searchstr = '*[lang ="'+language+'"]'
	else {
		searchstr = '*[lang ="'+langtags[0]+'"]'
		for (var i=1;i<langtags.length;i++) searchstr += ',*[lang ="'+langtags[i]+'"]'
		}
	console.log(searchstr)
	var examples = document.querySelectorAll(searchstr)
	for (var e=0;e<examples.length;e++) {  
		examples[e].style.fontFamily = fontname
		examples[e].style.fontSize = size
		}
	}


function addLangInfo () {
    var chars = document.querySelectorAll('.character')
    for (let i=0;i<chars.length; i++) findLangs(chars[i])
    }


function findLangs (node) {
    var hex = node.id.replace(/char/,'')
    var cp = parseInt(hex, 16)
    var notesNode = node.querySelector('.notes')

    if (notesNode && cl[cp]) {
        languages = cl[cp]
        var p = document.createElement('p')
        p.appendChild(document.createTextNode('Used by: '))
        for (let l=0;l<languages.length;l++) {
            var a = document.createElement('a')
            a.href = '/app-charuse/?language='+languages[l]
            a.target = '_blank'
            a.appendChild(document.createTextNode(langs[languages[l]].name.replace(/ \([^\)]+\)/g,'')))
            p.appendChild(a)
            if (l<languages.length-1) p.appendChild(document.createTextNode(', '))
            }
        notesNode.appendChild(p)
        }
    }


function getFindStr (hex) {
// return a value for the Find box at the top of the page

    if (hex.length === 1) var hex = hex.codePointAt(0).toString(16)
    while(hex.length<4) hex='0'+hex
    return '#char'+hex.toUpperCase()
    }

