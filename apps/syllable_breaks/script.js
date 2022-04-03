// make proplist array
var PreBase = new Set([])
var Aksara = new Set([])
var Start = new Set([])
var Virama_Final = new Set([])
var Virama = new Set([])
var Mark = new Set([])
var marks = new Set([])
var debug = false
var trace = false
var template = {}
template.direction = "ltr"
var autoTranslitArray = []

strList = rawPropertyListStr.split('\n')
for (var i=0;i<strList.length;i++) {
    strList[i] = strList[i].replace(/\s+/g,' ')
	if (strList[i].startsWith('#')) continue
	if (strList[i] == '') continue
	spaceArray = strList[i].split(' ')
    if (debug) console.log(spaceArray)
    
	type = spaceArray[2]
	if (spaceArray[0].includes('..')) {
		cpoints = spaceArray[0].split('.')
		start = parseInt(cpoints[0],16)
		end = parseInt(cpoints[2],16)
        for (j=start;j<end+1;j++) {
            addToSet(type, String.fromCodePoint(start))
            start++
            }
		}
	else { 
        if (debug) console.log(parseInt(spaceArray[0],16), spaceArray[0], type )
		addToSet(type, String.fromCodePoint(parseInt(spaceArray[0],16)))
		}
	}


if (debug) console.log(PreBase)
if (debug) console.log(Aksara)
if (debug) console.log(Start)
if (debug) console.log(Virama_Final)
if (debug) console.log(Virama)
if (debug) console.log(Mark)


function addToSet (type, char) {
    // adds characters to a set – sets correspond to types used for grapheme cluster parsing
    switch (type) {
        case 'PreBase': PreBase.add(char); break
        case 'Aksara': Aksara.add(char); break
        case 'Start': Start.add(char); break
        case 'Virama_Final': Virama_Final.add(char); break
        case 'Virama': Virama.add(char); break
        case 'Mark': Mark.add(char); break
        }
    }


function addBoundaries (str) {
    // process str and output an annotated string with |+ZWSP dividers
    if (trace) console.log('addBoundaries(',str,')')
    var strArray = [...str]
    var out = '<bdi class="segment" onclick="showComponents(this.textContent)">'
    var PreBaseFlag = false
    
    for (var i=0;i<strArray.length;i++) {
        if (PreBase.has(strArray[i])) {
            out += strArray[i]
            PreBaseFlag = true
            }
        else if (Aksara.has(strArray[i])) {
            if (Mark.has(strArray[i+1]) || Virama.has(strArray[i+1]) || Virama_Final.has(strArray[i+1])) out += strArray[i]
            else out += strArray[i] + '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onclick="showComponents(this.textContent)">'
            }
        else if (Start.has(strArray[i])) {
            if (Mark.has(strArray[i+1]) || Virama.has(strArray[i+1]) || Virama_Final.has(strArray[i+1])) out += strArray[i]
            else out += strArray[i] + '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onclick="showComponents(this.textContent)">'
            }
        else if (Mark.has(strArray[i])) {
            if (Mark.has(strArray[i+1]) || Virama.has(strArray[i+1]) || Virama_Final.has(strArray[i+1])) out += strArray[i]
            else out += strArray[i] + '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onclick="showComponents(this.textContent)">'
            }
        else if (Virama.has(strArray[i])) {
            if (Aksara.has(strArray[i+1])) out += strArray[i]
            else out += strArray[i] + '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onclick="showComponents(this.textContent)">'
            }
        else if (Virama_Final.has(strArray[i])) {
            out += strArray[i] + '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onclick="showComponents(this.textContent)">'
            }
        else out += strArray[i] + '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onclick="showComponents(this.textContent)">'
        }
    return out
    }


function changeFont (fontName) {
    // changes the font for the in and out areas
    document.getElementById('in').style.fontFamily = fontName
    document.getElementById('out').style.fontFamily = fontName
    }




function showComponents (str) {
    if (trace) console.log('showComponents(',str,')')
    // display character names in a dialog panel
    var chars = [...str]
    out = ''
    
    for (var i=0;i<chars.length;i++) {
        var scriptGroup = findScriptGroup( chars[i].codePointAt(0) )
        var hex = chars[i].codePointAt(0).toString(16).toUpperCase()
        while (hex.length < 4) hex = '0'+hex
        out += `<div class="panelCharacter"><a target="c" href="../../../uniview/index.html?char=${ hex }"><img src="../../../c/${ scriptGroup }/${ hex }.png" alt="${ chars[i] }"> U+${ hex } ${ charData[chars[i]] }</a></div>\n`
        }
    
    out += `<p class="closeDialog" onclick="document.getElementById('panel').style.display='none'">X</p>`
    document.getElementById('panel').style.display = 'block'
    document.getElementById('panel').innerHTML = out
    }




function findScriptGroup ( charNum ) { 
	// output: returns the name of the script group in which charNum falls
	// charNum: a decimal number representing the code point of the character in question
	if (charNum < 128) { return 'Basic Latin' }
	var i=1
	while ( i<scriptGroups.length && charNum > scriptGroups[i][0] ) i++
	if ( i === scriptGroups.length ) { return( sNotAChar ) }
	if ( scriptGroups[i-1][1] >= charNum ) { return( scriptGroups[i-1][2]) }
	if ( scriptGroups[i][0] == charNum ) { return( scriptGroups[i][2]) }
	return( sNotAChar )
	}
	







function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}



function copyToClipboard (node) {
	//var oldContent = node.textContent
	//node.textContent=node.textContent.replace(/\u200B/g,'')
	node.contentEditable=true
	node.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	node.contentEditable=false
	//node.textContent=oldContent
	}







