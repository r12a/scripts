var cnames = {

'L':"Letter",
"M":"Mark",
"N":"Number",
"P":"Punctuation",
"Z":"Separator",
"S":"Symbol",
"C":"Other",
"Lu":"Letter, uppercase",
"Li":"Letter, lowercase",
"Lt":"Letter, titlecase",
"Lm":"Letter, modifier",
"Lo":"Letter, other",
"Mn":"Mark, non-spacing",
"Mc":"Mark, spacing combining",
"Me":"Mark, enclosing",
"0":"Mark, combining class 0",
"Nd":"Number, decimal digit",
"Nl":"Number, letter",
"No":"Number, other",
"Pc":"Punctuation, connector",
"Pd":"Punctuation, dash",
"Ps":"Punctuation, open",
"Pe":"Punctuation, close",
"Pi":"Punctuation, initial quote",
"Pf":"Punctuation, final quote",
"Po":"Punctuation, other",
"Zs":"Separator, space",
"Zl":"Separator, line",
"Zp":"Separator, paragraph",
"Sm":"Symbol, math",
"Sc":"Symbol, currency",
"Sk":"Symbol, modifier",
"So":"Symbol, other",
"Cc":"Other, control",
"Cf":"Other, format",
"Co":"Other, private use",
"cn":"Other, not assigned",


}





function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}








function makeList (stream) {
    // clear the legend
    var spans = document.querySelectorAll('#legend span')
    for (i=0;i<spans.length;i++) spans[i].style.display = 'none'

	stream = stream.replace(/ /g,'')
	stream = stream.replace(/\u000A/g,'')
	var streamArray = [...stream]

	// remove duplicates
	const uniqueSet = new Set(streamArray)
	const cps = [...uniqueSet]

	// sort the items
	var categories = {}
    var nodata = ''
	for (let i=0;i<cps.length;i++) {
        if (typeof U[cps[i]] === 'undefined') nodata += cps[i]
        else {
            var group = U[cps[i]]
            var supergroup = U[cps[i]][0]
            if (categories[supergroup]) categories[supergroup] += cps[i]
            else categories[supergroup] = cps[i]
            if (categories[group]) categories[group] += cps[i]
            else categories[group] = cps[i]
            }
		}
	
	
	// output the list 
	var out = '<table><tbody>\n'
	var keys = Object.keys(categories)
	keys.sort()

	// construct a table
	for (x=0;x<keys.length;x++) { //console.log(keys[x],keys[x].length)
		out += '<tr'
		if (keys[x].length === 1) out += ' class="main"'
		else out += ' class="sub"'
		out += '>'
		out += '<th class="sg" title="'+cnames[keys[x]]+'">'+keys[x]+'</th>'
		var count = [...categories[keys[x]]].length
		out += '<td class="count">'+count+'</td>'
        charlist = [...categories[keys[x]]]
        if (document.getElementById(keys[x]) !== null) document.getElementById(keys[x]).style.display = 'inline'
        out += '<td class="chars" dir="ltr">'
        for (i=0;i<charlist.length;i++) out += '<bdi>'+charlist[i]+'</bdi>'
        out += '</td>'
		out += '<td class="select">'
        out += '<span title="Copy to clipboard" onclick="console.log(this.parentNode); copyToClipboard(this.parentNode.previousSibling)"><img src="copy.png"></span>'
        out += ' <a title="Show a list with details." href="../../../app-analysestring/index.html?chars='+encodeURI(categories[keys[x]])+'" target="_blank"><img src="share.png"></a>'
        out += '</td>'
		out += '</tr>\n'
        //console.log('cats',categories[keys[x]])
		}
    
    // collect items with no entry in the U db (likely CJKT)
    if (nodata.length > 1) {
        out += '<tr class="main">'
 		out += '<th class="sg">X</th>'
		var count = [...nodata].length
		out += '<td class="count">'+count+'</td>'
        charlist = [...nodata]
        if (document.getElementById('X') !== null) document.getElementById('X').style.display = 'inline'
        out += '<td class="chars" dir="ltr">'
        for (i=0;i<charlist.length;i++) out += '<bdi>'+charlist[i]+'</bdi>'
        out += '</td>'
		out += '<td class="select">'
        out += '<span title="Copy to clipboard" onclick="console.log(this.parentNode); copyToClipboard(this.parentNode.previousSibling)"><img src="copy.png"></span>'
        out += ' <a title="Show a list with details." href="../../../app-analysestring/index.html?chars='+encodeURI(categories[keys[x]])+'" target="_blank"><img src="share.png"></a>'
        out += '</td>'
		out += '</tr>\n'
       }
        
    out += '</tbody></table>'
	
	out += '<p class="total">Total characters: '+cps.length+"</p>"
	//out += '<p class="total">Total blocks: '+keys.length+"</p>"
	
	document.getElementById('out').innerHTML = out
    
    // make summary
    var summary = []
    var total = 0
    if (categories.L && categories.L.length > 0) { temp = [...categories.L]; summary.push(temp.length+' letters'); total += temp.length }
    if (categories.M && categories.M.length > 0) { temp = [...categories.M]; summary.push(temp.length+' marks'); total += temp.length }
    if (categories.N && categories.N.length > 0) { temp = [...categories.N]; summary.push(temp.length+' numbers'); total += temp.length }
    if (categories.P && categories.P.length > 0) { temp = [...categories.P]; summary.push(temp.length+' punctuation'); total += temp.length }
    if (categories.S && categories.S.length > 0) { temp = [...categories.S]; summary.push(temp.length+' symbols'); total += temp.length }
    if (categories.Z && categories.Z.length > 0) { temp = [...categories.Z]; summary.push(temp.length+' separators'); total += temp.length }
    if (categories.C && categories.C.length > 0) { temp = [...categories.C]; summary.push(temp.length+' other'); total += temp.length }
    document.getElementById('summary').innerHTML = summary.join(', ')+' : total '+total
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





