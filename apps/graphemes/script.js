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

var Virama = new Set(['\u{94D}', '\u{9CD}', '\u{A4D}', '\u{ACD}', '\u{B4D}', '\u{C4D}', '\u{CCD}', '\u{D4D}', '\u{1B44}', '\u{A806}', '\u{A8C4}', '\u{110B9}', '\u{111C0}', '\u{11235}', '\u{1134D}', '\u{11442}', '\u{114C2}', '\u{115BF}', '\u{1163F}', '\u{116B6}', '\u{119E0}', '\u{11839}', '\u{11046}', '\u{11C3F}', '\u{1B44}', '\u{A9C0}', '\u{E001}', '\u{E002}' ])

var Consonants = new Set([
// Balinese
'ᬧ', 'ᬩ', 'ᬢ', 'ᬤ', 'ᬓ', 'ᬕ', 'ᬘ', 'ᬚ', 'ᬲ', 'ᬳ', 'ᬫ', 'ᬦ', 'ᬗ', 'ᬜ', 'ᬯ', 'ᬭ', 'ᬮ', 'ᬬ', 'ᬨ', 'ᬪ', 'ᬝ', 'ᬣ', 'ᬥ', 'ᬖ', 'ᬰ', 'ᬱ', 'ᬡ', 'ᬞ', 'ᬟ', 'ᬠ', 'ᬔ', 'ᬙ', 'ᬛ', 'ᭅ', 'ᭆ', 'ᭇ', 'ᭈ', 'ᭉ', 'ᭊ', 'ᭋ', 'ᬋ', 'ᬌ', 'ᬍ', 'ᬎ',
// Devanagari
'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ', 'ॹ', 'ॺ', 'ॻ', 'ॼ', 'ॾ', 'ॿ',
// Sinhala
'ක', 'ග', 'ඟ', 'ච', 'ජ', 'ට', 'ඩ', 'ණ', 'ඬ', 'ත', 'ද', 'ඳ', 'ප', 'බ', 'ම', 'ඹ', 'ය', 'ර', 'ල', 'ළ', 'ව', 'ස', 'හ', 'ඛ', 'ඝ', 'ඥ', 'ඞ', 'ඡ', 'ඣ', 'ඤ', 'ඦ', 'ඨ', 'ඪ', 'ථ', 'ධ', 'න', 'ඵ', 'භ', 'ශ', 'ෂ', 'ෆ',
// Javanese
'ꦧ', 'ꦕ', 'ꦢ', 'ꦝ', 'ꦒ', 'ꦲ', 'ꦗ', 'ꦏ', 'ꦭ', 'ꦩ', 'ꦤ', 'ꦚ', 'ꦔ', 'ꦥ', 'ꦫ', 'ꦱ', 'ꦠ', 'ꦛ', 'ꦮ', 'ꦪ', 'ꦨ', 'ꦖ', 'ꦓ', 'ꦑ', 'ꦟ', 'ꦘ', 'ꦦ', 'ꦬ', 'ꦯ', 'ꦡ', 'ꦣ', 'ꦞ', 'ꦙ', 'ꦰ', 'ꦜ', 'ꦐ', 'ꦉ', 'ꦊ', 'ꦋ',
// Malayalam
'ക', 'ഖ', 'ഗ', 'ഘ', 'ങ', 'ച', 'ഛ', 'ജ', 'ഝ', 'ഞ', 'ട', 'ഠ', 'ഡ', 'ഢ', 'ണ', 'ത', 'ഥ', 'ദ', 'ധ', 'ന', 'ഩ', 'പ', 'ഫ', 'ബ', 'ഭ', 'മ', 'യ', 'ര', 'റ', 'ല', 'ള', 'ഴ', 'വ', 'ശ', 'ഷ', 'സ', 'ഹ', 'ഺ', 'ൺ', 'ൻ', 'ർ', 'ൽ', 'ൾ', 'ൿ',
// Bengali
'প', 'ফ', 'ব', 'ভ', 'ত', 'থ', 'দ', 'ধ', 'ট', 'ঠ', 'ড', 'ঢ', 'ক', 'খ', 'গ', 'ঘ', 'চ', 'ছ', 'জ', 'য', 'ঝ', 'স', 'শ', 'ষ', 'হ', 'ম', 'ন', 'ঙ', 'ঞ', 'ণ', 'ৱ', 'র', 'ৰ', 'ল', 'ৎ',
])


// make Extend set (mostly ~2000 combining marks)
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

// add special substitions that need to be treated as marks to Extend
addToSet('Extend', '\uE006')
addToSet('Extend', '\uE007')


if (debug) console.log(Prepend)
if (debug) console.log(Control)
if (debug) console.log(Extend)
if (debug) console.log(SpacingMark)




function makeOrthSyllables (str) {
    if (trace) console.log('makeOrthSyllables(',str,')')
    
    str = makeGraphemeClusters(str)
    
    // make temporary tokens
    // for Sinhala, V+ZWJ and ZWJ+V, added to Virama
    str = str.replace(/\u0DCA\u200D/g,'\u{E001}')
    str = str.replace(/\u200D\u0DCA/g,'\u{E002}')
    
    // for Tamil, KSHA and SHRIx2
    str = str.replace(/\u0B95\u0BCD\u007C\u0BB7/g,'\u{E003}')
    str = str.replace(/\u0BB8\u0BCD\u007C\u0BB0\u0BC0/g,'\u{E004}')
    str = str.replace(/\u0BB6\u0BCD\u007C\u0BB0\u0BC0/g,'\u{E005}')

    console.log('GC string', str)

    var strArray = str.split('|')
    
    var out = ''
    for (i=0;i<strArray.length-1;i++) {
        console.log(strArray[i][strArray[i].length-1])
        //if (Virama.has(strArray[i][strArray[i].length-1])) console.log('yes')
        
        if (
            (Virama.has(strArray[i][strArray[i].length-1]) && Consonants.has(strArray[i+1][0])) || 
            InvisibleStacker.has(strArray[i][strArray[i].length-1]) ||
            Exceptions.has(strArray[i+1][0])
            ) out += strArray[i]
        else out += strArray[i]+'|'
        }
    
    out += strArray[strArray.length-1]
    
    // reinstate Sinhala code points
    out = out.replace(/\uE001/g,'\u0DCA\u200D')
    out = out.replace(/\uE002/g,'\u200D\u0DCA')
    
    // reinstate Tamil conjuncts
    out = out.replace(/\uE003/g,'\u0B95\u0BCD\u0BB7')
    out = out.replace(/\uE004/g,'ஸ்ரீ')
    out = out.replace(/\uE005/g,'ஶ்ரீ')

    return out
    }





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
            out += '|'+strArray[i]
            prependFlag = true
            }
        else {
            if (prependFlag) {
                out += strArray[i]
                prependFlag = false
                }
            else {
                if (i>0) out += '|'
                out += strArray[i]
                }
            }
        }
    return out
    }


function addMarkup (str) {
    // add markup around segments output by makeGraphemeClusters
    var out = str.replace(/\|/g, '</bdi><bdi class="divider">|</bdi>&#x200B;<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked === false) showComponents(this.textContent)" onmouseout="if (document.getElementById(\'mouseover\').checked === false) document.getElementById(\'panel\').style.display = \'none\'" onclick="showComponents(this.textContent)">')
    
    return '<bdi class="segment" onmouseover="if (document.getElementById(\'mouseover\').checked === false) showComponents(this.textContent)" onmouseout="if (document.getElementById(\'mouseover\').checked === false) document.getElementById(\'panel\').style.display = \'none\'" onclick="showComponents(this.textContent)">'+out+'</bdi>'
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


function makeBCvGraphemesOLD (str) {
    // process str and output an annotated string with |+ZWSP dividers
    if (trace) console.log('makeBCvGraphemes(',str,')')
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


function makeBCvGraphemes (str) {
    // process str and output an annotated string with |+ZWSP dividers
    if (trace) console.log('makeBCvGraphemes(',str,')')
    
    
    // for Sinhala, change V+ZWJ and ZWJ+V to temporary tokens
    str = str.replace(/\u0DCA\u200D/g,'\u{E001}')
    str = str.replace(/\u200D\u0DCA/g,'\u{E002}')

    // for Tamil, change KSHA and SHRI to temporary tokens
    str = str.replace(/\u0B95\u0BCD\u0BB7/g,'\u{E003}')
    str = str.replace(/ஸ்ரீ/g,'\u{E004}')
    str = str.replace(/ஶ்ரீ/g,'\u{E005}')
    
    // for Balinese, change virama + ZWNJ or ZWSP to temporary tokens
    str = str.replace(/\u1B44\u200C/g,'\u{E006}')
    str = str.replace(/\u1B44\u200B/g,'\u{E007}')
    

    var strArray = [...str]
    var out = ''
    var prependFlag = false
    
    for (var i=0;i<strArray.length;i++) {
        if (InvisibleStacker.has(strArray[i]) || Virama.has(strArray[i])
            || strArray[i] === '\uE001' || strArray[i] === '\uE002'
            ) {
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
    
    // reinstate Sinhala code points
    out = out.replace(/\uE001/g,'\u0DCA\u200D')
    out = out.replace(/\uE002/g,'\u200D\u0DCA')
    
    // reinstate Tamil conjuncts
    out = out.replace(/\uE003/g,'\u0B95\u0BCD\u0BB7')
    out = out.replace(/\uE004/g,'ஸ்ரீ')
    out = out.replace(/\uE005/g,'ஶ்ரீ')

    // reinstate Balinese visible adeg-adeg
    out = out.replace(/\uE006/g,'\u1B44\u200C')
    out = out.replace(/\uE007/g,'\u1B44\u200B')
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







