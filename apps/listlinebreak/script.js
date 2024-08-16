// make proplist array
lines = rawPropertyListStr.split('\n')
var U = []
for (let i=0;i<lines.length;i++) {
	if (lines[i].startsWith('#')) continue
	if (lines[i].trim() == '') continue
	splitLine = lines[i].split('#')
	cpRange = splitLine[0].split(';')[0].trim()
	property = splitLine[0].split(';')[1].trim()
    
	if (cpRange.includes('..')) {
		cpoints = cpRange.split('.')
		start = parseInt(cpoints[0],16)
		end = parseInt(cpoints[2],16)
		while (start<=end) {
			U[start] = property
			start++
			} 
		}
	else { 
		U[parseInt(cpRange,16)] = property
		}
	}


console.log(U.length)






function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}








function makeList (stream) {
	stream = stream.replace(/ /g,'')
	stream = stream.replace(/\u000A/g,'')
	var streamArray = [... stream]

	// remove duplicates
	const uniqueSet = new Set(streamArray)
	const cps = [...uniqueSet]

	// sort the items
	var scriptGroups = {}
	for (let i=0;i<cps.length;i++) {
		var group = U[cps[i].codePointAt(0)]
		if (scriptGroups[group]) scriptGroups[group] += cps[i]
		else scriptGroups[group] = cps[i]
		}
	
	// output the list 
	var out = '<table><tbody>\n'
	var keys = Object.keys(scriptGroups)
	keys.sort()

    // clear out any previously displayed legend notes
    notes = document.querySelectorAll('#legend p')
    for (i=0;i<notes.length;i++) notes[i].style.display = 'none'
    
	// construct a table
	for (x=0;x<keys.length;x++) {
		out += '<tr class="main">'
		out += '<th class="sg">'+keys[x]+'</th>'
        if (document.getElementById(keys[x]) === null) console.log('Missing legend:',keys[x])
        else document.getElementById(keys[x]).style.display = 'block'
        //document.getElementById(keys[x]).style.display = 'block'
		var count = [...scriptGroups[keys[x]]].length
		out += '<td class="count">'+count+'</td>'
        charlist = [...scriptGroups[keys[x]]]
        out += '<td class="chars" dir="ltr">'
        for (i=0;i<charlist.length;i++) out += '<bdi>'+charlist[i]+'</bdi>'
        out += '</td>'
		out += '<td class="select">'
        out += '<span title="Copy to clipboard" onclick="console.log(this.parentNode); copyToClipboard(this.parentNode.previousSibling)"><img src="copy.png"></span>'
        out += ' <a title="Show a list with details." href="../../../app-analysestring/index.html?chars='+encodeURI(scriptGroups[keys[x]])+'" target="_blank"><img src="share.png"></a>'
        out += '</td>'
		out += '</tr>\n'
		}
	out += '</tbody></table>'
	
	out += '<p class="total">Total characters: '+cps.length+"</p>"
	
	document.getElementById('out').innerHTML = out
	
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



function compareLists () {
    var left = document.getElementById('leftList').value
    var right = document.getElementById('rightList').value
    
    var leftArray = [...left]
    var rightArray = [...right]
    
    var leftResult = ''
    var rightResult = ''
    var bothResult = ''
    
    for (let i=0;i<leftArray.length;i++) {
        var found = false
        for (let j=0;j<rightArray.length;j++) {
            if (leftArray[i] === rightArray[j]) { 
				found = true
				if (! bothResult.match(leftArray[i])) bothResult += leftArray[i]
				break
				}
            }
        if (! found && ! leftResult.match(leftArray[i])) leftResult += leftArray[i]+' '
        }
    document.getElementById('leftOut').textContent = leftResult

    for (let i=0;i<rightArray.length;i++) {
        var found = false
        for (let j=0;j<leftArray.length;j++) {
            if (rightArray[i] === leftArray[j]) { found = true; break }
            }
        if (! found && ! rightResult.match(rightArray[i])) rightResult += rightArray[i]+' '
        }
    document.getElementById('rightOut').textContent = rightResult
	
	var bothArray = [...bothResult]
	bothArray = bothArray.filter((x, i, a) => a.indexOf(x) == i)
    document.getElementById('bothOut').textContent = bothArray.join(' ')

    }





