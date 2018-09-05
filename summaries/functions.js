var featureName = { 
	type:"Script type", 
	chars:"Number of characters", 
	cchars:"Combining characters", 
	mcchars:"Multiple combining characters", 
	matras:"Vowel-signs", 
	gpos:"Context-based positioning", 
	cs:"Case distinction", 
	cursive:"Cursive script", 
	gsub:"Contextual shaping", 
	dir:"Text direction", 
	baseline:"Baseline", 
	wordsep:"Word separator", 
	wrap:"Wraps at", 
    hyphenation:"Hyphenation",
	justify:"Justification", 
	digits:"Native digits?", 
	region:"Region" 
	}



function makeSidePanel (script, otherlinks) {
	console.log(script, otherlinks)
	var ptr = ''
	for (var i=0;i<scriptData.length;i++) if  (scriptData[i].script === script) {
		ptr = scriptData[i]
		break
		}

	var out = ''
	out += '<tr><th>Script name</th><td><p>'+script+'</td></tr>'
	for (var feature in featureName) {
		out += '<tr><th>'+featureName[feature]+'</th><td>'
		if (document.getElementById(feature)) out +='<a href="#'+feature+'">'+ptr[feature]+'</a>'
		else out += ptr[feature]
		out += '</td></tr>'
		}
	
	// process other links, eg. Punctuation:punctuation,Tones:tones
	/*var links = otherlinks.split(',')
	for (i=0;i<links.length;i++) {
		var parts = links[i].split(':')
		out += '<tr><th>'
		if (i===0) out += 'Other information'
		out += '</th><td>'
		if (document.getElementById(parts[1])) out +='<a href="#'+parts[1]+'">'+parts[0]+'</a>'
		else out += parts[0]
		out += '</td></tr>'
		} */
	return out
	}
	



function makeSidePanel (script, otherlinks) {
	console.log(script, otherlinks)
	var ptr = ''
	for (var i=0;i<scriptData.length;i++) if  (scriptData[i].script === script) {
		ptr = scriptData[i]
		break
		}

	var out = ''
	out += '<tr><th>Script name</th><td><p>'+script+'</td></tr>'
	for (var feature in featureName) {
		out += '<tr><th>'+featureName[feature]+'</th><td>'
        if (    (feature==='chars' && ptr[feature]==='0') ||
                (feature==='cchars' && ptr[feature]==='0') ||
                (feature==='matras' && ptr[feature]==='no') ||
                (feature==='mcchars' && ptr[feature]==='no') ||
                (feature==='gpos' && ptr[feature]==='no') ||
                (feature==='cs' && ptr[feature]==='no') ||
                (feature==='cursive' && ptr[feature]==='no') ||
                (feature==='gsub' && ptr[feature]==='no') ||
                (feature==='dir' && ptr[feature]==='ltr') ||
                (feature==='baseline' && ptr[feature]==='mid') ||
                (feature==='digits' && ptr[feature]==='no') ||
                (feature==='wordsep' && ptr[feature]==='space') ||
                (feature==='justify' && ptr[feature]==='space') ||
                (feature==='wrap' && ptr[feature]==='word') ||
                (feature==='hyphenation' && ptr[feature]==='no') ||
                (feature==='region')
                ) { out += ptr[feature] }
        else out +='<span class="tableHighlight">'+ptr[feature]+'</span>'
        
		out += '</td></tr>'
		}
	
	return out
	}
	



function clearExamples () {
	examples = document.getElementById('freeText').getElementsByTagName('span');
	for (var i=0; i<examples.length; i++) {
		examples[i].style.color = 'black';
		}
	
	var notes = document.getElementById('notes').getElementsByTagName('div');
	for (var i=0; i<notes.length; i++) { notes[i].style.display = 'none'; }
	}
	
function highlightExample (text) {
	document.getElementById(text).style.color = 'red';
	}


isJustified = false;

function toggleJustification (sample, justifyButton) { 
	if (sample.style.textAlign === 'justify') { 
		sample.style.textAlign = 'start'
		justifyButton.textContent = ' Justify '
		}
	else {
		sample.style.textAlign = 'justify'
		justifyButton.textContent = ' Remove justification '
		}
	}


function toggleDirection (sample, toggleButton) { 
	if (sample.className === 'set_horizontal') { 
		sample.className = 'set_vertical_rl'
		justifyButton.textContent = ' Set horizontally '
		}
	else {
		sample.className = 'set_horizontal'
		justifyButton.textContent = ' Set vertically '
		}
	}


var currDirection = 'horizontal';



function showFeatureInfo (examples, featureInfoId) {
	// causes the page to display the info for the feature you clicked on
	// highlights, comma-separated string of example ids
	// featureInfo, string, id of the feature description block to show
	clearExamples()
	if (examples != '') {
		exampleIds = examples.split(',')
		for (var i=0;i<exampleIds.length;i++) {
			highlightExample(exampleIds[i])
			}
		}
	if (featureInfoId != '') {
		document.getElementById(featureInfoId).style.display = 'block'
		document.location = '#'+featureInfoId
		}
	}

function showAllFeatureInfo () {
	// causes the page to display all the info in note form
	var notes = document.querySelectorAll('.note')
	for (var i=0;i<notes.length;i++) {
		notes[i].style.display = 'block'
		}
	}



function initialiseShowNames (base, target) {
// add function to all images with class ex
// function will display character by character names for example in the panel
// base (string), path for link to character detail

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') { base = ''; }
	if(typeof target === 'undefined') { target = ''; } 
	
	var examples = document.querySelectorAll('.ex')
	for (e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() == 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}
	
	var listItems = document.querySelectorAll(".listItem")
	for (let i=0;i<listItems.length;i++) listItems[i].addEventListener('click', showNameDetailsEvent)
	
	var lists = document.querySelectorAll(".exlist")
	for (let i=0;i<lists.length;i++) lists[i].addEventListener('click', showNameDetailsEvent)
	}


function showNameDetailsEvent (evt) { 
	// base is set at the bottom of the source page
	showNameDetails(evt.target.textContent, evt.target.lang, window.base, 'c', document.getElementById('panel'), 'list' )
	}
//	document.querySelector("#myButton").addEventListener('click', callbackFunctionName)
	
//	function callbackFunctionName (evt) { console.log("Button clicked!") }


function shownames_setImgOnclick ( node, base, target ) {
	node.onclick = function(){ showNameDetails(node.alt, node.lang, base, target, document.getElementById('panel') ) }
	}

function shownames_setOnclick ( node, base, target ) {
	node.onclick = function(){ showNameDetails(node.firstChild.data, getLanguage(node), base, target, document.getElementById('panel')) }
	}


function getLanguage(node) {
	// given a node, returns lang value of node or nearest parent
	if(node.lang) return node.lang
	else if(node.parentNode) return getLanguage(node.parentNode)
	else return ''
	}


function showtext (sourceName) {
	// when text is highlighted in the freeText area, display the character list
	text=getSelected()
	if (text.focusOffset > text.anchorOffset) {
		var start = text.anchorOffset
		var end = text.focusOffset
		}
	else {
		var start = text.focusOffset
		var end = text.anchorOffset
		}
	var highlight = text.focusNode.nodeValue.substr(start, end-start)
	var source = document.getElementById(sourceName)
	showNameDetails(highlight, source.lang, source.dataset.base, source.dataset.target, document.getElementById('panel') )
	}

function getSelected() {
	if (window.getSelection) return window.getSelection()
	else if (document.getSelection) return document.getSelection()
	else {
		var selection = document.selection && document.selection.createRange()
		if (selection.text) return selection.text
		return false
		}
	return false
	}


function setFigureRefs () {
    // looks for inline tags with class .figref, takes the textContent and replaces it with the number of the figure
    // textConten should be the id of the figure
    // only works for figures with figcaption (to screen out character lists)
    
    var figrefs = {}
    var figures = document.querySelectorAll('figcaption')
    for (let i=0;i<figures.length;i++) {
        //console.log(figures[i].textContent)
        if (figures[i] && figures[i].parentNode.id) {
            if (figrefs[figures[i].parentNode.id]) {}
            else figrefs[figures[i].parentNode.id] = i+1
            //console.log(figures[i].textContent, i+1)
            }
        }

    var figrefitems = document.querySelectorAll('.figref')
    for (let i=0;i<figrefitems.length;i++) {
        let id = figrefitems[i].textContent
        if (figrefs[id]) figrefitems[i].textContent = 'Figure '+figrefs[id]
        }
    }

/*
function setFigureRefs () {
    // looks for inline a tags with class .figref, takes the textContent and replaces it with the number of the figure
    // adds a link to the href
    // textContent should be the id of the figure
    // only works for figures with figcaption (to screen out character lists)
    
    var figrefs = {}
    var figures = document.querySelectorAll('figcaption')
    for (let i=0;i<figures.length;i++) {
        console.log(figures[i].textContent)
        if (figures[i] && figures[i].parentNode.id) {
            if (figrefs[figures[i].parentNode.id]) {}
            else figrefs[figures[i].parentNode.id] = i+1
            console.log(figures[i].textContent, i+1)
            }
        }
    console.log(figrefs)

    var figrefitems = document.querySelectorAll('.figref')
    for (let i=0;i<figrefitems.length;i++) {
        let id = figrefitems[i].textContent
        if (figrefs[id]) {
            figrefitems[i].textContent = figrefs[id]
            figrefitems[i].href = '#'+id
            }
        }
    }

*/


