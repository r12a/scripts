// make proplist array
var Prepend = new Set([])
var Control = new Set([])
var Extend = new Set([])
var SpacingMark = new Set([])
var marks = new Set([])
var debug = false
var trace = true
var template = {}
template.direction = "ltr"
var autoTranslitArray = []

var Exceptions = new Set(['\u102B', '\u102C', '\u1038', '\u1062', '\u1063', '\u1064', '\u1067', '\u1068', '\u1069', '\u106A', '\u106B', '\u106C', '\u106D', '\u1083', '\u1087', '\u1088', '\u1089', '\u108A', '\u108B', '\u108C', '\u108F', '\u109A', '\u109B', '\u109C', '\u1A61', '\u1A63', '\u1A64', '\uAA7B', '\uAA7D', '\u11720', '\u11721' ])


var InvisibleStacker = new Set(['\u{AAF6}', '\u{1193E}', '\u{11D45}', '\u{11D97}', '\u{1BAB}', '\u{10A3F}', '\u{11A47}', '\u{11A99}', '\u{1039}', '\u{11133}', '\u{17D2}', '\u{1A60}'])

var Virama = new Set(['\u{94D}', '\u{9CD}', '\u{A4D}', '\u{ACD}', '\u{B4D}', '\u{BCD}', '\u{C4D}', '\u{CCD}', '\u{D4D}', '\u{DCA}', '\u{A806}', '\u{A8C4}', '\u{110B9}', '\u{111C0}', '\u{11235}', '\u{1134D}', '\u{11442}', '\u{114C2}', '\u{115BF}', '\u{1163F}', '\u{116B6}', '\u{119E0}', '\u{11839}', '\u{11046}', '\u{11C3F}', '\u{1B44}', '\u{A9C0}'])


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


if (debug) console.log(Prepend)
if (debug) console.log(Control)
if (debug) console.log(Extend)
if (debug) console.log(SpacingMark)


function addToSet (type, char) {
    // adds characters to a set – sets correspond to types used for grapheme cluster parsing
    switch (type) {
        case 'Prepend': Prepend.add(char); break
        case 'Control': Control.add(char); break
        case 'Extend': Extend.add(char); break
        case 'SpacingMark': SpacingMark.add(char); break
        }
    }


function makeGraphemeClusters (str) {
    // process str and output an annotated string with |+ZWSP dividers
    if (trace) console.log('makeGraphemeClusters(',str,')')
    var strArray = [...str]
    var out = ''
    var prependFlag = false
    
    for (var i=0;i<strArray.length;i++) {
        if (Extend.has(strArray[i])) out += strArray[i]
        else if (SpacingMark.has(strArray[i])) out += strArray[i]
        else if (Control.has(strArray[i])) out += strArray[i]
        else if (Prepend.has(strArray[i])) {
            out += '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked) showComponents(this.textContent)" onclick="showComponents(this.textContent)">'+strArray[i]
            prependFlag = true
            }
        else {
            if (prependFlag) {
                out += strArray[i]
                prependFlag = false
                }
            else {
                if (i>0) out += '</bdi><bdi class="divider">|</bdi>&#x200B;'
                out += '<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked) showComponents(this.textContent)" onclick="showComponents(this.textContent)">'+strArray[i]
                }
            }
        }
    return out
    }


function makeGraphemes (str) {
    // process str and output an annotated string with |+ZWSP dividers
    if (trace) console.log('makeGraphemes(',str,')')
    var strArray = [...str]
    var out = ''
    var prependFlag = false
    
    for (var i=0;i<strArray.length;i++) {
        if (Extend.has(strArray[i]) || SpacingMark.has(strArray[i]) || Exceptions.has(strArray[i])) out += strArray[i]
        else if (Control.has(strArray[i])) out += strArray[i]
        else if (Prepend.has(strArray[i])) {
            out += '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked) showComponents(this.textContent)" onclick="showComponents(this.textContent)">'+strArray[i]
            prependFlag = true
            }
        else {
            if (prependFlag) {
                out += strArray[i]
                prependFlag = false
                }
            else {
                if (i>0) out += '</bdi><bdi class="divider">|</bdi>&#x200B;'
                out += '<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked) showComponents(this.textContent)" onclick="showComponents(this.textContent)">'+strArray[i]
                }
            }
        }
    return out
    }


function makeBCvGraphemes (str) {
    // process str and output an annotated string with |+ZWSP dividers
    if (trace) console.log('makeGraphemes(',str,')')
    var strArray = [...str]
    var out = ''
    var prependFlag = false
    
    for (var i=0;i<strArray.length;i++) {
        if (InvisibleStacker.has(strArray[i]) || Virama.has(strArray[i])) {
            out += strArray[i]
            prependFlag = true
            }
        else if (Extend.has(strArray[i]) || SpacingMark.has(strArray[i]) || Exceptions.has(strArray[i])) out += strArray[i]
        else if (Control.has(strArray[i])) out += strArray[i]
        else if (Prepend.has(strArray[i])) {
            out += '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked) showComponents(this.textContent)" onclick="showComponents(this.textContent)">'+strArray[i]
            prependFlag = true
            }
        else {
            if (prependFlag) {
                out += strArray[i]
                prependFlag = false
                }
            else {
                if (i>0) out += '</bdi><bdi class="divider">|</bdi>&#x200B;'
                out += '<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked) showComponents(this.textContent)" onclick="showComponents(this.textContent)">'+strArray[i]
                }
            }
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
        out += `<div class="panelCharacter"><a target="c" href="../../../uniview/index.html?char=${ hex }"><img src="../../../c/${ scriptGroup.replace(/ /g,'_') }/${ hex }.png" alt="${ chars[i] }"> U+${ hex } ${ charData[chars[i]] }</a></div>\n`
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







