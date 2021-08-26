/* jshint strict: false */
/* globals cl, langs */

debug = false

function initialise (base, dir) {
    createtoc(3)
	doHeadersFooters(dir)
    initialiseShowNames(base, '')
    checkForCharParam()
    addLangInfo()
    listCharsWithNotes()
    addUnicodeNotes()
	if (typeof refs !== 'undefined') createReferences('all')
    }



function toggleImages () {
	// replace all the large characters with images
	
	// check whether we're converting to images or characters
	var testnode = document.querySelector('.charimg')
	if (testnode.textContent == '') var toImg = false
	else toImg = true
	
	var nodes = document.querySelectorAll('.charimg')
	
	if (toImg) {
		for (let i=0;i<nodes.length;i++) {
			var id = nodes[i].parentNode.id.replace('char','')
			var dec = parseInt(id, 16)
			var group = getScriptGroup(dec)
			nodes[i].innerHTML = '<img src="/c/'+group+'/large/'+id+'.png"/>'
			}
		}
	else {
		for (let i=0;i<nodes.length;i++) {
			var id = nodes[i].parentNode.id.replace('char','')
			nodes[i].innerHTML = '&#x'+id+';'
			}
		}
	}



function doHeadersFooters (dir) {
	// adds links to top of document
	// dir is of the form arabic/index or arabic/urdu
	
	if (document.getElementById('versionTop') === null) return
	

	//parse the dir
	var filename = ''
	var directory = ''
	var path = dir.split('/')
	directory = path[0]
	if (path.length === 1) {
		filename = path[0]
		}
	else {
		filename = path[1]
		}
		

	var out = '&bull; recent changes <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages" title="Show commits for the whole scripts repository.">scripts</a>/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'" title="Show commits for scripts/'+directory+'.">'+directory+'</a>'
	
	out += '/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'/block.html" title="Show commits for scripts/'+filename+'/block.">block</a>'
	
	out += ' &bull; leave a <a target="_blank" href="https://github.com/r12a/scripts/issues/new?title=['+dir.replace(/index/,'')+'/block]%20%20BRIEF_TITLE_GOES_HERE&body=%5Bsource%5D%20https%3A%2F%2Fr12a.github.io%2Fscripts%2F'+dir+'/block%0A%0A" title="Leave a comment.">comment</a>'
	
	document.getElementById('versionTop').innerHTML = out
	
	
	out = ''
	out += 'See <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'/block.html">recent changes</a>. &nbsp;&bull;&nbsp; Make a <a href="https://github.com/r12a/scripts/issues/new?title=%5B'+dir+'%2Fblock%5D%20TITLE_GOES_HERE&body=Comment%20on%20http%3A%2F%2Fr12a.github.io%2Fscripts%2F'+directory+'%2Fblock%0A%0A" target="_blank">comment</a>. &nbsp;&bull;&nbsp; Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a>.</span></div>'
	
	
	document.getElementById('version').innerHTML = out
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
	var charlist = document.querySelectorAll("div > div.notes, .usedby")
	var sortedcharlist = []
	for (let i=0; i<charlist.length; i++) {
		if (charlist[i].querySelector('.letter') !== null || charlist[i].querySelector('.usedby') !== null) 
		sortedcharlist.push(parseInt(charlist[i].parentNode.id.substr(4), 16))
		}
	const uniqueSet = new Set(sortedcharlist)
	sortedcharlist = [...uniqueSet]
	sortedcharlist.sort()
    sortedcharlist.push('')
	charliststr = 'Characters with notes: '
	var start = sortedcharlist[0]
	var end = '';
	for (let i=0; i<sortedcharlist.length; i++) {
		end = sortedcharlist[i]
		if (sortedcharlist[i+1] != end+1) {
			if (start == end) { 
				charliststr += start+' ' 
				start = sortedcharlist[i+1]
				}
			else {
				charliststr += start+':'+end+' '
				start = sortedcharlist[i+1]
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





var spreadsheetRows = {}

function parseSpreadsheet (spreadsheet) {
    // create an object called spreadsheetRows from the Google spreadsheet data
	// newStyleSpreadsheet is defined in the db.js file - if set, the character column is one higher
	// it should eventually become the only pattern

    if (typeof spreadsheet == 'undefined') {
		alert("Spreadsheet not loaded !")
		return
		}
    
    if (typeof window.newStyleSpreadsheet == 'undefined') {
		// make an object from the spreadsheet
		var temp = window.spreadsheet.split('\n')
		window.spreadsheetRows = {}
		for (var x=0; x<temp.length; x++) {
			if (temp[x].trim() == '') continue
			var items = temp[x].split('\t')
			if (items[0] === '') continue

			window.spreadsheetRows[items[0]] = ['0']
			for (let i=1;i<items.length;i++) window.spreadsheetRows[items[0]].push(items[i])
			}
		}
	else {
		// make an object from the spreadsheet
		var temp = window.spreadsheet.split('\n')
		window.spreadsheetRows = {}
		for (var x=0; x<temp.length; x++) {
			if (temp[x].trim() == '') continue
			var items = temp[x].split('\t')
			if (items[1] === '') continue

			window.spreadsheetRows[items[1]] = ['0']
			for (let i=1;i<items.length;i++) window.spreadsheetRows[items[1]].push(items[i])
			}
	}
	}





//replaceStuff('Urdu', 'urdu', spreadsheet, '', 'ur', '', cols, false)


function replaceStuffOLD (language, langClass, chars, bicameral, lang, dir, cols, showShape) { 
	var charList = chars.split('\n')
    var div, p, span
	parseSpreadsheet(chars)
   	var missing = ''
	
    for (var x=0; x<charList.length; x++) { 
        if (charList[x].trim() == '') continue
        var items = charList[x].split('\t')
        if (items[0] === '') continue
		
		// check whether this is more than one codepoint, taking surrogates into account
		tempArray = [... items[0]]
		if (tempArray.length > 1) continue

		// quit if the spreadsheet indicates that this should not be displayed
		if (items[cols.class] && items[cols.class].includes('-')) continue
		if (items[cols.class] && items[cols.class].includes('x')) continue

		// get the character as dec & hex
        if (items[0].includes('\\u')) var dec = parseInt(items[0].replace('\\u',''),16)
        //if (items[0].length > 1) var dec = parseInt(items[0].replace('&#x','').replace(';',''),16) // change this to \u.... ?
		else dec = items[0].codePointAt(0)
        var hex = dec.toString(16).toUpperCase()
        while (hex.length < 4) hex = '0'+hex
        
        //if (! document.getElementById('char'+hex)) console.log('This page needs: ',items[0],hex)
        if (! document.getElementById('char'+hex)) missing += items[0]+' '+hex+', '
		
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



            // ADD TO NOTES SECTION

            // check for .note subsection
            var notes = node.querySelector('.notes')
            if (! notes) { // if no div exists, create one
                div = document.createElement('div')
                div.className = 'notes'
                notes = node.insertBefore(div, prevSibling.nextSibling)
                }
            
            notesNode = node.querySelector('.notes')
            
           // check for decomposable characters
            if (items[0].normalize('NFD') != items[0]) {
                var target = notesNode.querySelector('.decomposition') // check whether decomposition markup exists already
                //if (target) target.innerHTML = 'Decomposes to '+makeCharacterLink(items[0].normalize('NFD'), lang, dir)
                if (target) {
                    let msg = 'Decomposes to '+makeCharacterLink(items[0].normalize('NFD'), lang, dir)
                    if (items[0].normalize('NFD') === items[0].normalize('NFC')) msg += '<br/><strong>The NFC normalised form of this character is the decomposed sequence!</strong>'
                    target.innerHTML = msg
                    }
                else {
                    p = document.createElement('p')
                    p.className = 'decomposition'
                    p.innerHTML = 'Decomposes to '+makeCharacterLink(items[0].normalize('NFD'), lang, dir)
                    if (items[0].normalize('NFD') === items[0].normalize('NFC')) p.innerHTML += '<br/><strong>The NFC normalised form of this character is the decomposed sequence!</strong>'
                    prevSibling = notesNode.insertBefore(p, notesNode.firstChild)
                    }
                }


            
            // ADD OTHER STUFF HERE
            
            
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
                if (! refsNode) letter = notesNode.appendChild(div)
                else letter = notesNode.insertBefore(div, refsNode)
                }
            
            

            // FILL IN LETTER TITLE
            var titlepara = letter.querySelector('.titlepara')
            titlepara.innerHTML = ''
           
            // show shape from shape column (use for cursive text)
            if (cols.shape>0 && items[cols.shape]) {
                p = document.createElement('p')
                p.className = 'charShape'
                p.innerHTML = '<span class="ex" lang="'+lang+'">'+items[cols.shape]+'</span>'
                prevSibling = letter.insertBefore(p, titlepara)
                }


           // do title
            span = document.createElement('span')
            span.className = 'title'
            span.textContent = language+' '
            titlepara.appendChild(span)

            // do charStatus
            if (cols.statusLoc>0 && items[cols.statusLoc]) {
                var msg = items[cols.statusLoc]
                switch (items[cols.statusLoc]) {
                    case 'sd': msg = 'strongly deprecated'; break
                    case 'd': msg = 'deprecated'; break
                    case 'o': msg = 'obsolete'; break
                    case 'a': msg = 'archaic'; break
                    case 'l': msg = 'liturgical'; break
                    }
                span = document.createElement('span')
                span.className = 'charStatus'
                //if (msg === 'strongly deprecated') span.className += ' deprecated'
                span.className += ' deprecated'
                span.textContent = ' '+msg+' '
                titlepara.appendChild(span)
                }
            
            // do charType
            if (cols.typeLoc>0 && items[cols.typeLoc]) {
                span = document.createElement('span')
                span.className = 'charType'
                span.textContent = items[cols.typeLoc]+' '
                titlepara.appendChild(span)
                }
            
            // do charIPA
            if (cols.ipaLoc>0 && items[cols.ipaLoc]) {
                span = document.createElement('span')
                span.className = 'charIPA ipa'
                span.textContent = items[cols.ipaLoc].replace(/ /g,', ')
                titlepara.appendChild(span)
                }
            
            // do localtrans
            if (cols.transLoc>0 && items[cols.transLoc]) {
                span = document.createElement('span')
                span.className = 'localtrans trans'
                span.textContent = ' '+items[cols.transLoc]
                titlepara.appendChild(span)
               }
 
            // add linebreak before any names
            if ((cols.nnameLoc>0 || cols.nameLoc>0) && (items[cols.nnameLoc] || items[cols.nameLoc]) && (items[cols.nnameLoc] !== '' || items[cols.nameLoc] !== '')) titlepara.appendChild(document.createElement('br'))
 
            // do localname
            if (cols.nnameLoc>0 && items[cols.nnameLoc]) {
                span = document.createElement('span')
                span.className = 'localname'
                if (dir) span.dir = dir
                span.lang = lang
                span.textContent = ' '+items[cols.nnameLoc]
                titlepara.appendChild(span)
                }
            
            // do transliteratedname
            if (cols.nameLoc>0 && items[cols.nameLoc]) {
                span = document.createElement('span')
                span.className = 'transliteratedname trans'
                span.textContent = ' '+items[cols.nameLoc]
                titlepara.appendChild(span)
                }
            
            // do meaning
            if (cols.meaning>0 && items[cols.meaning]) {
                span = document.createElement('span')
                span.className = 'charMeaning meaning'
                span.textContent = items[cols.meaning]
                titlepara.appendChild(document.createTextNode(' '))
                titlepara.appendChild(span)
                }
            
   
    
            // SECOND LINE INFO
            prevSibling = titlepara
/*
            // if has subjoined form
            if (cols.subj>0 && items[cols.subj]) {
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
            if (cols.conj>0 && items[cols.conj]) {
                p = document.createElement('p')
                p.className = 'charShape'
                p.innerHTML = 'Rather than a subjoined form, this letter has a special joining form: <span class="ex" lang="'+lang+'">'+items[cols.conj]+'</span>'
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }

            // show shape without subjoined form
            if (showShape && items[cols.subj] === '') {
                p = document.createElement('p')
                p.className = 'charShape'
                p.innerHTML = 'Shape is <span class="ex" lang="'+lang+'">'+items[0]+'</span>'
                prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }
*/




			// ADD THE DETAILS
			if (charDetails) {
				//console.log(charDetails[String.fromCodePoint(dec)])
				if (charDetails[String.fromCodePoint(dec)]) {
					console.log('ok')
					detailDiv = document.createElement('div')
					detailDiv.innerHTML = charDetails[String.fromCodePoint(dec)]
					letter.appendChild(detailDiv)
					}
				}



   
    
    
            // DO EXTRA STUFF AT END OF LETTER DIV

            // show uppercase
            if (cols.uc && items[cols.uc] !== '') {
                p = document.createElement('p')
                p.className = 'charUppercase'
                p.innerHTML = 'Uppercase is '+makeCharacterLink(items[cols.uc], lang, dir)
                //prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                letter.appendChild(p)
                }

            // show lowercase
            if (cols.lc && items[cols.lc] !== '') {
                p = document.createElement('p')
                p.className = 'charLowercase'
                p.innerHTML = 'Lowercase is '+makeCharacterLink(items[cols.lc], lang, dir)
                letter.appendChild(p)
                //prevSibling = letter.insertBefore(p, prevSibling.nextSibling)
                }

            // show subjoined form
            if (cols.subj && items[cols.subj] !== '') {
                p = document.createElement('p')
                p.className = 'subjPair'
                p.innerHTML = 'Subjoined form is '+makeCharacterLink(items[cols.subj], lang, dir)
                letter.appendChild(p)
                }

            // show unsubjoined form
            if (cols.fform && items[cols.fform] !== '') {
                p = document.createElement('p')
                p.className = 'subjPair'
                p.innerHTML = 'Non-subjoined form is '+makeCharacterLink(items[cols.fform], lang, dir)
                letter.appendChild(p)
                }


            // vowel correspondences
            if (cols.ivowel>0 && items[cols.ivowel]) {
                p = document.createElement('p')
                p.className = 'vowelPairing'
                p.innerHTML = 'The corresponding independent vowel is '+makeCharacterLink(items[cols.ivowel], lang, dir)
                letter.appendChild(p)
                }
            if (cols.dvowel>0 && items[cols.dvowel]) {
                p = document.createElement('p')
                p.className = 'vowelPairing'
                p.innerHTML = 'The corresponding dependent vowel is '+makeCharacterLink(items[cols.dvowel], lang, dir)
                letter.appendChild(p)
                }
  
            // tone correspondences
            if (cols.htone>0 && items[cols.htone]) {
                p = document.createElement('p')
                p.className = 'tonePairing'
                p.innerHTML = 'High class equivalent is '+makeCharacterLink(items[cols.htone], lang, dir)
                letter.appendChild(p)
                }
            if (cols.ltone>0 && items[cols.ltone]) {
                p = document.createElement('p')
                p.className = 'tonePairing'
                p.innerHTML = 'Low class equivalent is '+makeCharacterLink(items[cols.ltone], lang, dir)
                letter.appendChild(p)
                }
         
            
            // other transcriptions
 			var insertTranscriptions = letter.querySelectorAll('.insertTranscription')
            if (cols.othertranscriptions && cols.othertranscriptions.length > 0 && insertTranscriptions.length === 0) { 
                para = ''
                for (let i=0;i<cols.othertranscriptions.length;i++) {
                    if (items[cols.othertranscriptions[i][0]]) {
                        para += cols.othertranscriptions[i][1]+': <span class="trans">'+items[cols.othertranscriptions[i][0]].replace(/ /g,', ')+'</span>'
                        if (i<cols.othertranscriptions.length-1) para += ', &nbsp; '
                        }
                    }
                p = document.createElement('p')
                p.className = 'otherTranscriptions'
                p.innerHTML = para
                letter.appendChild(p)
                }
            
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
	
			// do the inserted transcription locations
			if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
				for (var it=0;it<insertTranscriptions.length;it++) {
					para = ''
					for (let i=0;i<cols.othertranscriptions.length;i++) {
						if (spreadsheetRows[insertTranscriptions[it].textContent] && spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]) {
						//if (spreadsheetRows[insertTranscriptions[it]] && spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]) {
							//para += cols.othertranscriptions[i][1]+': <span class="trans">'+items[cols.othertranscriptions[i][0]].replace(/ /g,', ')+'</span>'
							para += cols.othertranscriptions[i][1]+': <span class="trans">'+spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]+'</span>'
							if (i<cols.othertranscriptions.length-1) para += ', &nbsp; '
							}
						}
					insertTranscriptions[it].innerHTML = para
					}
				}
			// if there are paras in the markup but no data in the spreadsheet, hide the markup
			else if (insertTranscriptions.length > 0) {
				for (var z=0;z<insertTranscriptions.length;z++) insertTranscriptions[z].style.display = 'none'
				}
			}
        }
	console.log('Missing characters: ',missing)
	}








function addBasics (lang, dir) {
	var charList = document.querySelectorAll('.character')
	console.log('.character length',charList.length)
	
	for (i=0;i<charList.length;i++) {
		// get the character
		var hex = charList[i].id.replace(/char/,'')
		while (hex.length < 4) hex = '0' + hex
		//console.log(hex)
		dec = parseInt(hex, 16)
		var dbrecord = U[dec].split(';')
		var cpName = dbrecord[1]

		cchar = String.fromCodePoint(dec)
		out = ''
		
		// add top stuff
		out += '<div class="charimg">&#x'+hex+';</div>\n'
		out += '<p class="charname"><strong>U+'+hex+'</strong> <a href="#char'+hex+'">'+cpName+'</a></p>\n'
		out += '<p class="univiewLink"><a target="_blank" href="/uniview/?char='+hex+'">See in UniView</a></p>\n'
		
		// get data from descriptions.js
		unicodenotes = ''
		if (desc[dec]) {
			var unicodenotes = desc[dec]
			unicodenotes = unicodenotes.replace(/¶/,'')
			unicodenotes = unicodenotes.replace(/¶/g,'<br>')
			}
		if (unicodenotes != '') out += '<div class="unicodenotes">'+unicodenotes+'</div>\n'
		

	   // check for decomposable characters
		if (cchar.normalize('NFD') != cchar) {
			out += '<p class="decomposition">'
			out += 'Decomposes to '+makeCharacterLink(cchar.normalize('NFD'), lang, dir)
			if (cchar.normalize('NFD') === cchar.normalize('NFC')) out += '<br><strong>The NFC normalised form of this character is the decomposed sequence!</strong>'
			out += '</p>'
			}


		out += '<div class="notes">\n'           

		//if (document.getElementById('letter').checked) {
		//	out += '<div class="letter '+lang+'">'
		//	out += '<p class="titlepara">'+lang+'Title</p>\n'
		
		out += '</div>\n'
		out += '</div>\n'

		charList[i].innerHTML = out
		}
	desc = '' // remove desc from memory
	}





function addDetails (languageName, langClass, lang, dir, spreadsheet, cols) {

    var missing = ''
	var missingDetails = ''
	var noteList = document.querySelectorAll('.notes')
	if (debug) console.log('noteList length',noteList.length)
	parseSpreadsheet(spreadsheet)
	
    for (var x=0; x<noteList.length; x++) {
		// get the character
		hex = noteList[x].parentNode.id.replace(/char/,'')
		dec = parseInt(hex, 16)
		cchar = String.fromCodePoint(dec)
		
		if (spreadsheetRows[cchar]) {
			out = '<div class="letter '+langClass+'" id="'+langClass+hex+'">'

			// show shape from shape column (use for cursive or conjunct text)
			if (cols.shape>0 && spreadsheetRows[cchar][cols.shape]) {
				out += '<p class="charShape"><span class="ex" lang="'+lang+'">'+spreadsheetRows[cchar][cols.shape]+'</span></p>'
				}

			out += '<p class="titlepara"><span class="title">'+languageName+'</span>'

			if (spreadsheetRows[cchar][cols['nnameLoc']] && spreadsheetRows[cchar][cols['nnameLoc']] != '0') out += '<span class="localname" lang="'+lang+'">'+spreadsheetRows[cchar][cols['nnameLoc']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['nameLoc']] && spreadsheetRows[cchar][cols['nameLoc']] != '0') out += '<span class="transliteratedname trans">'+spreadsheetRows[cchar][cols['nameLoc']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['meaning']] && spreadsheetRows[cchar][cols['meaning']] != '0') out += '<span class="charMeaning meaning">'+spreadsheetRows[cchar][cols['meaning']]+'</span>'
			
			out += '<br>'

			if (spreadsheetRows[cchar][cols['typeLoc']]) out += '<span class="charType">'+spreadsheetRows[cchar][cols['typeLoc']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['statusLoc']]) out += '<span class="charStatus">'+spreadsheetRows[cchar][cols['statusLoc']]+'</span>'
			
			if (spreadsheetRows[cchar][cols['ipaLoc']]) out += '<span class="charIPA ipa">'+spreadsheetRows[cchar][cols['ipaLoc']].toLowerCase()+'</span>'
			
			if (spreadsheetRows[cchar][cols['transLoc']]) out += '<span class="localtrans trans">'+spreadsheetRows[cchar][cols['transLoc']]+'</span>'

			out += '</p>'

            // if a character is in the spreadsheet, but not in the xx-details file, add it to the missingDetails list
			if (typeof charDetails[cchar] === 'undefined') missingDetails += ' '+cchar
			else if (charDetails[cchar].trim() !== '') out += charDetails[cchar]

			// vowel correspondences
			if (cols.ivowel>0 && spreadsheetRows[cchar][cols.ivowel]) {
				out += '<p class="vowelPairing">The corresponding independent vowel is '+makeCharacterLink(spreadsheetRows[cchar][cols.ivowel], lang, dir)+'</p>'
				}
			if (cols.dvowel>0 && spreadsheetRows[cchar][cols.dvowel]) {
				out += '<p class="vowelPairing">The corresponding dependent vowel is '+makeCharacterLink(spreadsheetRows[cchar][cols.dvowel], lang, dir)+'</p>'
				}

			// upper/lowercase
			if (cols.uc>0 && spreadsheetRows[cchar][cols.uc]) {
				out += '<p class="charUppercase">Uppercase is '+makeCharacterLink(spreadsheetRows[cchar][cols.uc], lang, dir)+'</p>'
				}
			if (cols.lc>0 && spreadsheetRows[cchar][cols.lc]) {
				out += '<p class="charLowercase">Lowercase is '+makeCharacterLink(spreadsheetRows[cchar][cols.lc], lang, dir)+'</p>'
				}

			// subjoined forms
			if (cols.subj>0 && spreadsheetRows[cchar][cols.subj]) {
				out += '<p class="subjPair">Subjoined form is '+makeCharacterLink(spreadsheetRows[cchar][cols.subj], lang, dir)+'</p>'
				}
			if (cols.fform>0 && spreadsheetRows[cchar][cols.fform]) {
				out += '<p class="subjPair">Non-subjoined form is '+makeCharacterLink(spreadsheetRows[cchar][cols.fform], lang, dir)+'</p>'
				}

			// tone correspondences
			if (cols.htone>0 && spreadsheetRows[cchar][cols.htone]) {
				out += '<p class="tonePairing">High class equivalent is  '+makeCharacterLink(spreadsheetRows[cchar][cols.htone], lang, dir)+'</p>'
				}
			if (cols.ltone>0 && spreadsheetRows[cchar][cols.ltone]) {
				out += '<p class="tonePairing">Low class equivalent is '+makeCharacterLink(spreadsheetRows[cchar][cols.ltone], lang, dir)+'</p>'
				}

			out += '</div>' // end of letter div
			
			noteList[x].innerHTML = noteList[x].innerHTML + '\n\n' + out
			}

		else missing += ' '+cchar
		}
	if (debug) console.log('Characters in block file but not in spreadsheet for '+lang+': ',missing)
	if (debug) console.log('Spreadsheet characters not in xx-details for '+lang+': ',missingDetails)
	}


function convertTranscriptionData (node) {
	 // other transcriptions
	var insertTranscriptions = document.querySelectorAll('.insertTranscription')

	// do the inserted transcription locations
	if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
		for (var it=0;it<insertTranscriptions.length;it++) {
			para = ''
			for (let i=0;i<cols.othertranscriptions.length;i++) {
				if (spreadsheetRows[insertTranscriptions[it].textContent] && spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]) {
					para += cols.othertranscriptions[i][1]+': <span class="trans">'+spreadsheetRows[insertTranscriptions[it].textContent][cols.othertranscriptions[i][0]]+'</span>'
					if (i<cols.othertranscriptions.length-1) para += '<br>'
					}
				}
			insertTranscriptions[it].innerHTML = para
			}
		}
	}


function convertTranscriptionData (lang) {
	 // other transcriptions
	var insertTranscriptions = document.querySelectorAll('.letter.'+lang+' .insertTranscription')
	console.log("For language ",lang,'Transcriptions to check: ',insertTranscriptions.length)
	
	// do the inserted transcription locations
	for (var t=0;t<insertTranscriptions.length;t++) {
		if (insertTranscriptions.length > 0 && cols.othertranscriptions && cols.othertranscriptions.length > 0) {
			para = ''
			for (let i=0;i<cols.othertranscriptions.length;i++) {
				if (spreadsheetRows[insertTranscriptions[t].textContent] && spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]) {
					para += cols.othertranscriptions[i][1]+': <span class="trans">'+spreadsheetRows[insertTranscriptions[t].textContent][cols.othertranscriptions[i][0]]+'</span>'
					if (i<cols.othertranscriptions.length-1) para += '<br>'
					}
				}
			insertTranscriptions[t].innerHTML = para
			}
		else { insertTranscriptions[t].outerHTML = '' }
		}
	}




function showAbout (node, script, language) {
// Displays/hides the 'About this document' details

if (node.innerHTML == '') {
	//console.log(node.parentNode)
	node.innerHTML = `
    <p class="instructions"><span class="leadin">Showing codepoints for examples.</span>If you click on example text, you will see  at the bottom right of the page a list of the characters that make up the example.</p>
<p class="instructions"><span class="leadin">Finding characters.</span> To find a character by codepoint, type #char0000 at the end of the URL in the address bar, where 0000 is a four-figure, hex codepoint number, all in uppercase. Or type the character or its hex number in the <samp>Find</samp> control, bottom left.</p>
    <p class="instructions"><span class="leadin">Fonts.</span> To view this page as intended, you need   ${script} fonts.  The page comes with a webfont. Click the blue vertical bar at the bottom right of the page to apply other fonts, if you have them on your system.</p>
<p class="instructions">The large character in the box will not be rendered unless the webfont downloaded with the page or a system font has a glyph for it. If there is no glyph and you want to see what it looks like, click on the <img src="../common/showImages.png" alt="Toggle images" style="vertical-align: middle;"/> icon to toggle the large characters between font glyphs and graphics.</p>
    <p class="instructions"><span class="leadin">Language usage lists.</span> Information about languages that use these characters is taken from the list maintained for the <a href="../../app-charuse/">Character usage lookup</a> app. The list is not exhaustive.</p>
<p class="instructions"><span class="leadin">References &amp; further information.</span> References are indicated by superscript letters, optionally followed by page numbers. Wherever possible, those contain direct links to the source material. When there is also an arrow → it is worth following the link for  additional information. The references are listed at the bottom of the page, but the links should take you to the exact location of the source, wherever possible.</p>
    <p class="instructions"><span class="leadin">UniView.</span><a href="../../uniview/">UniView</a>'s notes feature pulls in information about characters from this page.</p>
    <details class="instructions"><summary>Make a list of characters with notes for a spreadsheet:</summary>
    <p>Add list of characters here: <input id="notesListIn" placeholder=">"> <button 
        onclick="document.getElementById('notesListOut').value = getNotesList(document.getElementById('notesListIn').value); document.getElementById('notesListOut').select()"
        >GO</button></p>
    <p>Result: <textarea id="notesListOut" placeholder=">"></textarea> <button
        onclick="document.getElementById('notesListIn').value = '';document.getElementById('notesListOut').value = '';">Clear</button></p>
    </details>
	` 
	node.parentNode.open = true
	}
else { 
	node.parentNode.open = false
	node.innerHTML = ''
	}
}





function getNotesListPRESUPPCHAR (charList) {
    console.log(charList)
    charList = charList.replace(/\n/,' ')
    //charList = charList.replace(/[\s]+/,' ').trim()
    listArray = charList.split(' ')
    out = ''
    for (i=0;i<listArray.length;i++) {
        console.log('listArray:>'+listArray[i]+'<')
        if (listArray[i][0] && (listArray[i].includes('\\u') || listArray[i].includes('&#x'))) {
             if (listArray[i].includes('\\u')) listArray[i] = listArray[i].replace('\\u','0x').replace(/\{/,'').replace(/\}/,' ')
             if (listArray[i].includes('&#x')) listArray[i] = listArray[i].replace('&#x','0x').replace(/;/,'').replace(/\{/,'').replace(/\}/,' ')
             console.log('Convert escapes from',listArray[i])
             if (listArray[i].length > 1) {
                out += '\n'
                continue
                }
             listArray[i] = String.fromCodePoint(listArray[i])
             console.log('Convert escapes to',listArray[i])
            }
       
        if (listArray[i] === '') {
            out += '\n'
            console.log('gap')
            continue
            }
        if (listArray[i].length > 1) {
            out += '\n'
            console.log('sequence:',listArray[i])
            continue
            }
        else {
            char = listArray[i].codePointAt(0)
            hex = ''
            hex = char.toString(16).toUpperCase()
            while (hex.length < 4) hex = '0'+hex
            ptr = 'char'+hex
            console.log(ptr)
            }
        
        target = document.getElementById(ptr)
        if (target == null) out += '\n'
        else {
            letters = target.querySelector('.letter')
            if (letters == null) out += '\n'
            else out += '🗸\n'
            }
        }
    return(out)
    }





function getNotesList (charList) {
    console.log(charList)
    charList = charList.replace(/\n/,' ')
    //charList = charList.replace(/[\s]+/,' ').trim()
    listArray = charList.split(' ')
    out = ''
    for (i=0;i<listArray.length;i++) {
        console.log('listArray:>'+listArray[i]+'<')
        if (listArray[i][0] && (listArray[i].includes('\\u') || listArray[i].includes('&#x'))) {
             if (listArray[i].includes('\\u')) listArray[i] = listArray[i].replace('\\u','0x').replace(/\{/,'').replace(/\}/,' ')
             if (listArray[i].includes('&#x')) listArray[i] = listArray[i].replace('&#x','0x').replace(/;/,'').replace(/\{/,'').replace(/\}/,' ')
             console.log('Convert escapes from',listArray[i])
             if ([...listArray[i]].length > 1) {
                out += '\n'
                continue
                }
             listArray[i] = String.fromCodePoint(listArray[i])
             console.log('Convert escapes to',listArray[i])
            }
       
        if (listArray[i] === '') {
            out += '\n'
            console.log('gap')
            continue
            }
        console.log([...listArray[i]].length)
        if ([...listArray[i]].length > 1) {
            out += '\n'
            console.log('sequence:',listArray[i])
            continue
            }
        else {
            char = listArray[i].codePointAt(0)
            hex = ''
            hex = char.toString(16).toUpperCase()
            while (hex.length < 4) hex = '0'+hex
            ptr = 'char'+hex
            console.log(ptr)
            }
        
        target = document.getElementById(ptr)
        if (target == null) out += '\n'
        else {
            letters = target.querySelector('.letter')
            if (letters == null) out += '\n'
            else out += '🗸\n'
            }
        }
    return(out)
    }






