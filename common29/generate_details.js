// Functions for generating xx-details entries
// These functions are called from local html files in each orthography directory


function initialise () {
	// create the intro and input/output fields
	out = ''
	out += `
<h1>Generate details page stubs</h1>
<p>Produces stubs for codepoint descriptions in XX-details pages.</p>
<p>Input is a space-separated list of characters, generated by UniView. &nbsp;&nbsp; <label><input type="checkbox" id="sort" checked> Sort first?</label></p>

<p><input type="text" id="listin" placeholder="Add a list of characters here." style="height:100px;width:100%;font-size:60px;" onclick="this.select()" oninput="document.getElementById('out').value = makeListFromChars(this.value); 
document.getElementById('out').select()"></textarea></p>

<p>
<button style="font-size: 150%;" onClick="
document.getElementById('out').value = makeListFromChars(document.getElementById('listin').value); 
document.getElementById('out').select()">Go</button>
</p>

<textarea id="out" style="height:600px;width:100%;"></textarea>
`
	document.getElementById('intro').innerHTML = out
	
	
	makeTables(lang)

	}





function makeTables (lang) {
    // make the spreadsheetRows object

    if (typeof window.spreadsheet === 'undefined') {
		console.log("Spreadsheet undefined.")
        console.log('%c' + 'Cannot find '+char+' the spreadsheet.', 'color:' + 'red' + ';font-weight:bold;')
		return
		}
    
    // make an object from the spreadsheet
    var temp = window.spreadsheet.split('\n')
    spreadsheet = ''
    window.spreadsheetRows = {}
    for (var x=0; x<temp.length; x++) {
        if (temp[x].trim() == '') continue
        var items = temp[x].split('\t')
        if (items[0] === '') continue

        window.spreadsheetRows[items[0]] = ['0']
        for (let i=1;i<items.length;i++) window.spreadsheetRows[items[0]].push(items[i])
        }
    //console.log(spreadsheetRows) 
    }






function makeListFromChars (chars) {
    // generate the code for the xx-details
    
	var charList = chars.split(' ')
    var items, hex, ipas, combinations
    
    if (document.getElementById('sort').checked) charList = charList.sort()
    
	var out = ''
	
    for (var x=0; x<charList.length; x++) {
        if (charList[x] == '') continue
        if (typeof charList[x] === 'undefined') { console.log('Undefined ',charList[x]); continue }
        if (typeof  spreadsheetRows[charList[x]] === 'undefined') { console.log('Undefined in spreadsheet',charList[x]); continue }
        if (spreadsheetRows[charList[x]][cols['status']] === '?') { console.log('? status for',charList[x]); continue }
        if (spreadsheetRows[charList[x]][cols['status']] === 'u') { console.log('U status for',charList[x]); continue }
        
        items = charList[x].split('\t')
        
        // get code point value, converting escapes if necessary
        if (items[0].includes('&#x')) {
            items[0] = items[0].replace('&#x','').replace(';','')
            i = parseInt(items[0],16)
            }
		else i = items[0].codePointAt(0)
		//console.log('i',i, 'items',items)

        hex = i.toString(16).toUpperCase()
        while (hex.length < 4) hex = '0' + hex
        //console.log(hex)

        out += "'\\u{"+hex+"}': `\n"
        out += '<p class="insertTranscription">&#x'+hex+';</p>\n\n'

        // add status info to top of entry
        console.log('charList[x]',charList[x])
        if (spreadsheetRows[charList[x]][cols['status']] || spreadsheetRows[charList[x]][cols['statusLoc']]) {
            out += `<p>`
            if (spreadsheetRows[charList[x]][cols['status']]) {
                switch (spreadsheetRows[charList[x]][cols['status']]) {
                    case 'l': out += 'Used for non-native sounds in loan words.'; break
                    case 'i': out += 'Infrequent.'; break
                    case 'a': out += 'Archaic.'; break
                    case 'o': out += 'Obsolete.'; break
                    case 'r': out += 'Rare.'; break
                    case 'x': out += 'Best avoided.'; break
                    case 'd': out += '<strong>Deprecated.</strong>'; break
                    }
                }
            if (spreadsheetRows[charList[x]][cols['statusLoc']]) {
                out += ' '+spreadsheetRows[charList[x]][cols['statusLoc']]
                }
            out += `</p>\n`
            }

        // make code for each phone
        if (spreadsheetRows[charList[x]][cols['ipaLoc']]) {
            ipas = spreadsheetRows[charList[x]][cols['ipaLoc']].split(' ')


            for (i=0;i<ipas.length;i++) {
               out +=
            `<p><span class="ipa h">${ ipas[i].toLowerCase() }</span> ${ spreadsheetRows[charList[x]][cols['typeLoc']] }`
                if ( spreadsheetRows[charList[x]][cols['ipaPlus']] ) out += ` with inherent vowel <span class="ipa">${ spreadsheetRows[charList[x]][cols['ipaPlus']] }</span>`
                out +=
            `.</p>
<p><span class="eg" lang="${ lang }"></span></p>
<p><span class="eg" lang="${ lang }"></span></p>
<p><span class="eg" lang="${ lang }"></span></p>\n\n`
                }
            
            
            // check for IPAOther column
            if (spreadsheetRows[charList[x]][cols['ipaOther']]) {
                ipao = spreadsheetRows[charList[x]][cols['ipaOther']].split(' ')
                for (i=0;i<ipao.length;i++) {
                    out +=
                `<p><span class="ipa h">${ ipao[i] }</span>`
                    out += `</p>\n<p><span class="eg" lang="${ lang }"></span></p>\n<p><span class="eg" lang="${ lang }"></span></p>\n<p><span class="eg" lang="${ lang }"></span></p>`
                    }              
                }
            }
        
        // if this code executes, there is no ipa value, so just print the type info
        else {
            temp = [... spreadsheetRows[charList[x]][cols['typeLoc']]]
            first = temp.shift()
            console.log('first',first)
            if (first) {
                out +=  `<p>${ first.toUpperCase() + temp.join('') }.</p>`
                }
            }
        
        
        // check for combinations
        combinations = ''
        for (comb in spreadsheetRows) {
            if ([...comb].length > 1 && comb.includes(charList[x]) && spreadsheetRows[comb][cols['ipaLoc']]) {
                console.log(comb,'>>',spreadsheetRows[comb][cols['ipaLoc']])
                if (spreadsheetRows[comb][cols['transLoc']]) {
                    combinations += `\n<p class="insertTranscription">${ comb }</p>`
                    }
                combinations += `\n<p><span class="ipa h">${ spreadsheetRows[comb][cols['ipaLoc']].toLowerCase() }</span> is <span class="ch">${ comb }</span>`
                if (spreadsheetRows[comb][cols['status']]) {
                    switch (spreadsheetRows[comb][cols['status']]) {
                        case 'l': combinations += ' (used for non-native sounds in loan words)'; break
                        case 'i': combinations += ' (infrequent)'; break
                        case 'a': combinations += ' (archaic)'; break
                        case 'o': combinations += ' (obsolete)'; break
                        case 'r': combinations += ' (rare)'; break
                        case 'x': combinations += ' (best avoided)'; break
                        case 'd': combinations += ' (<strong>Deprecated.</strong>)'; break
                        }
                    }
                if (spreadsheetRows[comb][cols['statusLoc']]) {
                    combinations += ' '+ spreadsheetRows[comb][cols['statusLoc']]
                    }
                combinations += `</p>\n`
                combinations += `<p><span class="eg" lang="${ lang }"></span></p>\n`
                }
            }
        if (combinations) out += `\n<p class="leadin">Combinations</p>${ combinations }`
        out += '\n`,\n\n\n\n\n\n'
		}
	return out
	}






