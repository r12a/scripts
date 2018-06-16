/* jshint strict: false */
/* globals cl, langs */

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


function OLDfindLangs (node) {
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


function findLangs (node) {
    var hex = node.id.replace(/char/,'')
    var cp = parseInt(hex, 16)
    var notesNode = node.querySelector('.notes')

    if (notesNode && cl[cp]) {
        var languages = cl[cp][0]
        var auxlanguages = cl[cp][1]
        var p = document.createElement('p')
        if (languages.length>0) p.appendChild(document.createTextNode('Used by: '))
        else if (auxlanguages.length>0) p.appendChild(document.createTextNode('Used infrequently by: '))
        for (let l=0;l<languages.length;l++) {
            var a = document.createElement('a')
            a.href = '/app-charuse/?language='+languages[l]
            a.target = '_blank'
            a.appendChild(document.createTextNode(langs[languages[l]].name.replace(/ \([^\)]+\)/g,'')))
            p.appendChild(a)
            if (l<languages.length-1) p.appendChild(document.createTextNode(', '))
            }
        if (auxlanguages.length>0 && languages.length>0) p.appendChild(document.createTextNode(', and infrequently by: '))
        for (let l=0;l<auxlanguages.length;l++) {
            let a = document.createElement('a')
            a.href = '/app-charuse/?language='+auxlanguages[l]
            a.target = '_blank'
            a.style.fontStyle = 'italic'
            a.style.fontSize = '90%'
            a.appendChild(document.createTextNode(langs[auxlanguages[l]].name.replace(/ \([^\)]+\)/g,'')))
            p.appendChild(a)
            if (l<auxlanguages.length-1) p.appendChild(document.createTextNode(', '))
            }
        notesNode.appendChild(p)
        }
    }



function listCharsWithNotes () {
	// makes a list of which characters have notes attached, list is space-separated, and mostly decimal number pairs
	// however a single character that is not part of a series is represented by just that decimal codepoint
	var charliststr = ''
	var charlist = document.querySelectorAll("div > div.notes")
	var sortedcharlist = []
	for (let i=0; i<charlist.length; i++) {
		sortedcharlist[i] = ' '+parseInt(charlist[i].parentNode.id.substr(4), 16)
		}
	sortedcharlist.sort()
	
	charliststr = 'Characters with notes: '
	var start = parseInt(sortedcharlist[0])
	var end = '';
	for (let i=0; i<sortedcharlist.length; i++) {
		end = parseInt(sortedcharlist[i])
		if (sortedcharlist[i+1] != end+1) {
			if (start == end) { 
				charliststr += start+' ' 
				start = parseInt(sortedcharlist[i+1])
				}
			else {
				charliststr += start+':'+end+' '
				start = parseInt(sortedcharlist[i+1])
				}
			}
		}
	document.getElementById('charliststr').textContent = charliststr	
	}


function getFindStr (hex) {
// return a value for the Find box at the top of the page

    if (hex.length === 1) hex = hex.codePointAt(0).toString(16)
    while(hex.length<4) hex='0'+hex
    return '#char'+hex.toUpperCase()
    }






function replaceStuff () {
// generate lines for spreadsheet
var entries = document.querySelectorAll('.character')
var out = '' 
document.getElementById('leftovers').value = 'var sidecar = {}\n'

for (let i=0;i<entries.length;i++) {
    out += entries[i].querySelector('.charimg').textContent
    letter = entries[i].querySelector('.letter')
    trans = letter.querySelector('.trans')
    titlepara = letter.querySelector('.titlepara')
    ipa = titlepara.querySelectorAll('.ipa')
    console.log(ipa)
    ipaStr = ''
    for (j=0;j<ipa.length;j++) {
        if (j>0) ipaStr += ', '
        ipaStr += ipa[j].textContent
        }
    if (ipa.length>1) ipaStr += '…'
    out += '\t'+trans.textContent+'\t'+ipaStr
    out += '\n'
    
    id = entries[i].querySelector('.charimg').textContent
    allButTitlePara = letter.innerHTML
    titleParaStr = titlepara.innerHTML
    allButTitlePara = allButTitlePara.replace('<p class="titlepara">'+titleParaStr+'</p>','')
    console.log(allButTitlePara)
    document.getElementById('leftovers').value += 'sidecar["'+id+'"] = `'+allButTitlePara+'`\n'
    }
console.log(out)
document.getElementById('input').value = out
//document.getElementById('leftovers').value = leftovers


// redo contents
var inputData = document.getElementById('input').value
var inputLines = inputData.split('\n')
for (let i=0;i<inputLines.length;i++) {
    fields = inputLines[i].split('\t')
    if (fields.length === 1) continue
    
    id = fields[0]
    id = id.codePointAt(0).toString(16).toUpperCase()
    while (id.length < 4) id = '0'+id
    id = 'char'+id
    console.log(id, fields)
    }
}






function extractStuff () {
// generate lines for spreadsheet
var entries = document.querySelectorAll('.character')
var out = '' 
document.getElementById('leftovers').value = 'var sidecar = {}\n'

for (let i=0;i<entries.length;i++) {
    //out += entries[i].querySelector('.charimg').textContent
    letter = entries[i].querySelector('.letter')
    if (letter) titlepara = letter.querySelector('.titlepara')
    
    /*if (titlepara) nametrans = titlepara.querySelector('.trans')
    else trans = ''
    if (nametrans) nameipa = titlepara.querySelectorAll('.ipa')
    else ipa = ''
    console.log(ipa, nameipa)
    
    //ipaStr = ''
    //for (j=0;j<ipa.length;j++) {
    //    if (j>0) ipaStr += ', '
    //    ipaStr += ipa[j].textContent
    //    }
    if (nametrans) out += '\t\t\t'+nametrans.textContent+'\t'+nameipa.textContent
    out += '\n'
    */
    
    if (letter) {
        id = entries[i].querySelector('.charimg').textContent
        allButTitlePara = letter.innerHTML
        if (titlepara){
            titleParaStr = titlepara.innerHTML
            allButTitlePara = allButTitlePara.replace('<p class="titlepara">'+titleParaStr+'</p>','')
            }
        console.log(allButTitlePara)
        document.getElementById('leftovers').value += 'sidecar["'+id+'"] = `'+allButTitlePara+'`\n'
        }
    }
//document.getElementById('input').value = out
//document.getElementById('leftovers').value = leftovers

/*
// redo contents
var inputData = document.getElementById('input').value
var inputLines = inputData.split('\n')
for (let i=0;i<inputLines.length;i++) {
    fields = inputLines[i].split('\t')
    if (fields.length === 1) continue
    
    id = fields[0]
    id = id.codePointAt(0).toString(16).toUpperCase()
    while (id.length < 4) id = '0'+id
    id = 'char'+id
    console.log(id, fields)
    }
*/


/*
var inputData = document.getElementById('input').value
var inputLines = inputData.split('\n')
for (let i=0;i<inputLines.length;i++) {
    fields = inputLines[i].split('\t')
    if (fields.length === 1) continue
    
    id = fields[0]
    id = id.codePointAt(0).toString(16).toUpperCase()
    while (id.length < 4) id = '0'+id
    id = 'char'+id
    console.log(id, fields)
    character = document.getElementById(id)

    
    innerCode = character.innerHTML
    replacement = '<p>Syllable &nbsp;&nbsp; <span class="trans">'+fields[1]+'</span></p>'
    newInnerCode = innerCode.replace(/<div class="notes">/,'<div class="notes">\n'+replacement)
    character.innerHTML = newInnerCode
    console.log(replacement)
    
    replacement = '<span class="title">Cherokee</span> &nbsp;&nbsp;  <span class="ipa">'+fields[2]+'</span>'
    titlepara = character.querySelector('.titlepara')
    titlepara.innerHTML = replacement
    
    }
*/


}