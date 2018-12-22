/* jshint strict: false */
/* globals cl, langs */


function initialise (base) {
    createtoc(3)
    initialiseShowNames(base, '')
    checkForCharParam()
    addLangInfo()
    listCharsWithNotes()
    addUnicodeNotes()
    }

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



function addUnicodeNotes () {
    // adds description.js information 
    
    var notes = document.querySelectorAll('.unicodenotes')
    for (let i=0;i<notes.length;i++) {
        //console.log(notes[i].parentNode.id)
        var dec = parseInt(notes[i].parentNode.id.replace('char',''), 16)
        //console.log(dec)
        if (desc[dec]) notes[i].innerHTML = desc[dec].replace(/¶/g,'<br/>')
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
    //var notesNode = node.querySelector('.notes')
    var notesNode = node

    if (notesNode && cl[cp]) {
        var languages = cl[cp][0]
        var auxlanguages = cl[cp][1]
        var p = document.createElement('p')
        p.className = 'usedby'
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




function makeCharacterLink (cp, lang, direction) { 
	// returns markup with information about cp
	// cp: a unicode character, or sequence of unicode characters
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
    var chars = [...cp]

	var out = '<span class="codepoint" translate="no">'
	var charstr = ''
	for (let i=0;i<chars.length;i++) {
        if (i>0) out += ' + '
		charstr = chars[i]
        var dec = chars[i].codePointAt(0)
		var cbase = ''
		var dir = ''
		
		if (U[dec]) {
            var ufields = U[dec].split(';')
            var hex = chars[i].codePointAt(0).toString(16).toUpperCase()
			while (hex.length < 4) hex = '0'+hex 
			
			if (ufields[2][0] == 'M') cbase = '\u00A0'
			if (direction === 'rtl') dir = ' dir="rtl"'
			}
		else console.log( 'Character not found in database.' )
		out += '<span lang="'+lang+'"'+dir+'>'+cbase+'&#x'+hex+';</span> '
        }
	
	for (let i=0;i<chars.length;i++) {
        if (i===0) out += '['
        if (i>0 && i<chars.length) out += ' + '
        
		charstr = chars[i]
        hex = chars[i].codePointAt(0).toString(16).toUpperCase()
        dec = chars[i].codePointAt(0)
		while (hex.length < 4) hex = '0'+hex 
        ufields = U[dec].split(';')

       out +=  '<a href="#char'+hex+'">'
		out +=  '<span class="uname">U+'+hex+' '+ufields[1]+'</span>'
		out +=  '</a>'
        if (i===chars.length-1) out += ']'
		}
    out += '</span> '
	
	return out.trim()
	}



function replaceStuff (language, langClass, chars, bicameral, lang, dir, cols, showShape) {
	var charList = chars.split('\n')
    var div, p, span
    /*
    if (bicameral) {
        temp = []
        for (let i=0;i<charList.length;i++) {
            if (charList[i] == '') continue
            temp.push(charList[i][0].toUpperCase()+charList[i].substr(1))
            temp.push(charList[i][0].toLowerCase()+charList[i].substr(1))
            }
        charList = temp
        }
    
 	*/
   	
    for (var x=0; x<charList.length; x++) {
        //console.log('charlist.x',charList[x])
        if (charList[x].trim() == '') continue
        var items = charList[x].split('\t')
        if (items[0] === '') continue
        console.log(items[0])

        // get the character as dec & hex
        if (items[0].length > 1) var dec = parseInt(items[0].replace('&#x','').replace(';',''),16) // change this to \u.... ?
		else dec = items[0].codePointAt(0)
        var hex = dec.toString(16).toUpperCase()
        while (hex.length < 4) hex = '0'+hex
      
        //console.log(charList[x])
		//console.log('dec',dec,'hex',hex, items)
        if (! document.getElementById('char'+hex)) console.log('Character not found: ',items[0],hex)
		
        else if (U[dec]) {
            out = ''
            // get data from descriptions.js
			unicodenotes = ''
			if (desc[dec]) {
				var unicodenotes = desc[dec]
				unicodenotes = unicodenotes.replace(/¶/,'')
				unicodenotes = unicodenotes.replace(/¶/g,'<br/>')
				}
            
            // access unicode db
			var dbrecord = U[dec].split(';')
			var cpName = dbrecord[dec]
			
            // find the location in the document
            var node = document.getElementById('char'+hex)
            var prevSibling = node.querySelector('.univiewLink')
console.log('char'+hex)
            
            // Unicode notes
			if (unicodenotes) {
                var target = node.querySelector('.unicodenotes') // check whether notes exist already
                if (target) {
                    target.innerHTML = unicodenotes
                    prevSibling = target
                    }
                else {
                    p = document.createElement('p')
                    p.className = 'subtitle'
                    p.textContent = 'Description in the Unicode standard:'
                    div = document.createElement('div')
                    div.className = 'unicodenotes'
                    div.textContent = unicodenotes
                    prevSibling = node.insertBefore(p, prevSibling.nextSibling)
                    prevSibling = node.insertBefore(div, prevSibling.nextSibling)
                    }
				}

            // check for decomposable characters
            if (items[0].normalize('NFD') != items[0]) {
                var target = node.querySelector('.decomposition') // check whether decomposition exist already
                if (target) target.innerHTML = 'Decomposes to '+makeCharacterLink(items[0].normalize('NFD'), lang, dir)
                else {
                    p = document.createElement('p')
                    p.className = 'decomposition'
                    p.innerHTML = 'Decomposes to '+makeCharacterLink(items[0].normalize('NFD'), lang, dir)
                    prevSibling = node.insertBefore(p, prevSibling.nextSibling)
                    }
                }

            // add pointer to other case, if bicameral
            if (bicameral && items[0].toUpperCase() == items[0]) {
                var target = node.querySelector('.lowercase') // check whether lowercase exist already
                if (target) target.innerHTML = 'Lowercase is '+makeCharacterLink(items[0].toLowerCase(), lang, dir)
                else {
                    p = document.createElement('p')
                    p.className = 'lowercase'
                    p.innerHTML = 'Lowercase is '+makeCharacterLink(items[0].toLowerCase(), lang, dir)
                    prevSibling = node.insertBefore(p, prevSibling.nextSibling)
                    }
                }
            // add pointer to other case, if bicameral
            if (bicameral && items[0].toLowerCase() == items[0]) {
                var target = node.querySelector('.uppercase') // check whether uppercase exist already
                if (target) target.innerHTML = 'Uppercase is '+makeCharacterLink(items[0].toUpperCase(), lang, dir)
                else {
                    p = document.createElement('p')
                    p.className = 'uppercase'
                    p.innerHTML = 'Uppercase is '+makeCharacterLink(items[0].toUpperCase(), lang, dir)
                    prevSibling = node.insertBefore(p, prevSibling.nextSibling)
                    }
                }

            
            // ADD OTHER STUFF HERE
            
            
            // check for .note subsection
            var notes = node.querySelector('.notes')
            if (! notes) { // if no div exists, create one
                div = document.createElement('div')
                div.className = 'notes'
                notes = node.insertBefore(div, prevSibling.nextSibling)
                }
            
            notesNode = node.querySelector('.notes')
            
            // check for .letter subsection
            var letter = notesNode.querySelector('.'+langClass)
            if (! letter) { // if no subsection exists, create one
                div = document.createElement('div')
                div.className = 'letter '+langClass
                p = document.createElement('p')
                p.className = 'titlepara'
                span = document.createElement('span')
                span.className = 'title'
                span.textContent = language
                
                p.appendChild(span)
                div.appendChild(p)
                refsNode = notesNode.querySelector('.ref') // check whether there's a refs section
                if (refsNode) letter = notesNode.insertBefore(div, refsNode)
                else letter = notesNode.appendChild(div)
                }
            
            
            // FILL IN NOTES TITLE
            var titlepara = letter.querySelector('.titlepara')
            titlepara.innerHTML = ''
           
            // do title
            span = document.createElement('span')
            span.className = 'title'
            span.textContent = language+' '
            titlepara.appendChild(span)

            // do charStatus
            if (items[cols.statusLoc]) {
                var msg = '?'
                switch (items[cols.statusLoc]) {
                    case 'sd': msg = 'strongly deprecated'; break
                    case 'd': msg = 'deprecated'; break
                    case 'o': msg = 'obsolete'; break
                    case 'a': msg = 'archaic'; break
                    case 'l': msg = 'liturgical'; break
                    }
                span = document.createElement('span')
                span.className = 'charStatus'
                if (msg === 'strongly deprecated') span.className += ' deprecated'
                span.textContent = ' '+msg+' '
                titlepara.appendChild(span)
                }
            
            // do charType
            if (items[cols.typeLoc]) {
                span = document.createElement('span')
                span.className = 'charType'
                span.textContent = items[cols.typeLoc]+' '
                titlepara.appendChild(span)
                }
            
            // do charIPA
            if (items[cols.ipaLoc]) {
                span = document.createElement('span')
                span.className = 'charIPA ipa'
                span.textContent = items[cols.ipaLoc].replace(/ /g,', ')
                titlepara.appendChild(span)
                }
            
            // do localtrans
            if (items[cols.transLoc]) {
                span = document.createElement('span')
                span.className = 'localtrans trans'
                span.textContent = ' '+items[cols.transLoc]
                titlepara.appendChild(span)
               }
 
            // add linebreak before any names
            if (items[cols.nnameLoc] || items[cols.nameLoc]) titlepara.appendChild(document.createElement('br'))
 
 
            // do localname
            if (items[cols.nnameLoc]) {
                span = document.createElement('span')
                span.className = 'localname'
                if (dir) span.dir = dir
                span.lang = lang
                span.textContent = ' '+items[cols.nnameLoc]
                titlepara.appendChild(span)
                }
            
            // do transliteratedname
            if (items[cols.nameLoc]) {
                span = document.createElement('span')
                span.className = 'transliteratedname trans'
                span.textContent = ' '+items[cols.nameLoc]
                titlepara.appendChild(span)
                }
            
    
    
            // SECOND LINE INFO
            prevSibling = titlepara

            // if has subjoined form
            if (items[cols.subj]) {
                p = document.createElement('p')
                p.className = 'charShape'
                msg = ''
                if (showShape) msg = 'Basic shape is <span class="ex" lang="'+lang+'">'+items[0]+'</span> &nbsp; '
                if (items[cols.subj] === '-') msg += 'No subjoined form.'
                else msg += 'Subjoined form is <span class="ex" lang="'+lang+'">'+items[cols.subj]+'</span>'
                p.innerHTML = msg
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }
           
            // if has conjoined form
            if (items[cols.conj]) {
                p = document.createElement('p')
                p.className = 'charShape'
                p.innerHTML = 'Rather than a subjoined form, this letter has a special joining form: <span class="ex" lang="'+lang+'">'+items[cols.conj]+'</span>'
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }
   console.log(items[cols.subj] === '')             
            // show shape without subjoined form
            if (showShape && items[cols.subj] === '') {
                p = document.createElement('p')
                p.className = 'charShape'
                p.innerHTML = 'Shape is <span class="ex" lang="'+lang+'">'+items[0]+'</span>'
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }

            // vowel correspondences
            if (items[cols.ivowel]) {
                p = document.createElement('p')
                p.className = 'vowelPairing'
                p.innerHTML = 'The corresponding independent vowel is '+makeCharacterLink(items[cols.ivowel], lang, dir)
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }
            if (items[cols.dvowel]) {
                p = document.createElement('p')
                p.className = 'vowelPairing'
                p.innerHTML = 'The corresponding dependent vowel is '+makeCharacterLink(items[cols.dvowel], lang, dir)
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }
           
             // tone correspondences
            if (items[cols.htone]) {
                p = document.createElement('p')
                p.className = 'tonePairing'
                p.innerHTML = 'High tone equivalent is '+makeCharacterLink(items[cols.htone], lang, dir)
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }
            if (items[cols.ltone]) {
                p = document.createElement('p')
                p.className = 'tonePairing'
                p.innerHTML = 'Low tone equivalent is '+makeCharacterLink(items[cols.ltone], lang, dir)
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }
            
           

    
    
    
            // DO EXTRA STUFF AT END OF LETTER DIV
            
            // numeric values
            if (items[cols.numLoc] && cols.numLoc !== 0) {
                var target = node.querySelector('.numEquiv') // check whether numEquiv exist already
                if (target) target.innerHTML = 'Number equivalent: '+items[cols.numLoc]
                else { 
                    p = document.createElement('p')
                    p.className = 'numEquiv'
                    p.innerHTML = 'Number equivalent: '+items[cols.numLoc]
                    letter.appendChild(p)
                    }
                }
            
            // other transcriptions
            if (cols.othertranscriptions && cols.othertranscriptions.length > 0) { 
                for (let i=0;i<cols.othertranscriptions.length;i++) {
                    para = ''
                    if (items[cols.othertranscriptions[i][0]]) {
                        para += cols.othertranscriptions[i][1]+': <span class="trans">'+items[cols.othertranscriptions[i][0]].replace(/ /g,', ')+'</span> '
                        p = document.createElement('p')
                        p.className = 'otherTranscriptions'
                        p.innerHTML = para
                        letter.appendChild(p)
                        }
                    }
                }
            
           
            
 /*           
 
            // if cursive, show the various forms
            if (document.getElementById('cursive').value) {
                cursiveBase = document.getElementById('cursive').value
                out += '<p class="cursiveShapes">Cursive shapes (naskh): <span class="ex" lang="'+lang+'">'+items[0]+cursiveBase+items[0]+cursiveBase+items[0]+' '+items[0]+'</span></p>\n'
                //out += '<p>Cursive shapes (nastaliq): <span class="ex" lang="ur">'+items[0]+cursiveBase+items[0]+cursiveBase+items[0]+' '+items[0]+'</span></p>\n'
                //out += '\n<p>Cursive shapes: Eastern <span class="charExample"><span class="ex" dir="rtl" lang="syr-Syrn">'+items[0]+cursiveBase+items[0]+cursiveBase+items[0]+' '+items[0]+'</span></span>&nbsp; Estrangela <span class="charExample"><span class="ex" dir="rtl" lang="syr-Syre">'+items[0]+cursiveBase+items[0]+cursiveBase+items[0]+' '+items[0]+'</span></span> &nbsp; Western <span class="charExample"><span class="ex" dir="rtl" lang="syr-Syrj">'+items[0]+cursiveBase+items[0]+cursiveBase+items[0]+' '+items[0]+'</span></span></p>'
                 }
           
*/
			}
        }
	}

































function OLDreplaceStuff () {
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
