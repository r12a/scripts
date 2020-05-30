var items = ['fuf-adlm', 'arb', 'ha-arab', 'hy', 'ban-bali', 'bsq-bass', 'bn', 'bug-bugi', 'csw', 'chr', 'ru', 'hi', 'ks-deva', 'am', 'ka', 'el', 'gu', 'pa', 'ko', 'cmn', 'he', 'jv-java', 'ja', 'km', 'kn', 'lo', 'nod', 'kkh','lis', 'mid', 'ml','khk-mong', 'my', 'nqo', 'ory', 'si', 'su-sund', 'syc', 'tru', 'aii', 'tdd', 'khb', 'ta', 'blt', 'te', 'zgh', 'dv', 'th', 'bo', 'vai']
	
	

var by = function (path, reverse, primer, then) {
    var get = function (obj, path) {
            if (path) {
                path = path.split('.');
                for (var i = 0, len = path.length - 1; i < len; i++) {
                    obj = obj[path[i]];
                }
                return obj[path[len]];
            }
            return obj;
        },
        prime = function (obj) {
            return primer ? primer(get(obj, path)) : get(obj, path);
        };
    
    return function (a, b) {
        var A = prime(a),
            B = prime(b);
        
        return (
            (A < B) ? -1 :
            (A > B) ?  1 :
            (typeof then === 'function') ? then(a, b) : 0
        ) * [1,-1][+!!reverse];
	}
} // from http://jsfiddle.net/gfullam/sq9U7/
     


function resort (column) { 

	scriptData.sort(by(column))
	
	var table = ''
	table += '<table id="reviewtable"><thead><tr>';
	

	var tablecolumns = {
		name:"Language",
		script:"Script",
		linked:" ", 
		chars:"Total chars", 
		aux:"+", 
		letters:"Letters", 
		mark:"Marks", 
		gpos:"Context-based positioning", 
		mcchars:"Multiple combining marks",
		matras:"Vowel signs",
		cs:"Case sensitive", 
		gsub:"Contextual shaping", 
		cursive:"Cursive script",
		other:"Format chars",
		dir:"Text direction",
		baseline:"Baseline",
		wordsep:"Word separator",
		wrap:"Text wrap",
		hyphenation:"Hyphen\u00ADation",
		justify:"Justification",
		digits:"Native digits",
		punctuation:"Punct\u00ADuation",
		region:"Region of origin",
		fcount:"More info"
		}	
	
	for (var col in tablecolumns) {
		table += '<th class="top"><a href="#theTable" onclick="resort(\''+col+'\'); return false;">'+tablecolumns[col]+'</a></th>'+"\n";
		}
	
	
	table += '</tr></thead><tbody>'
	


		for (var i=0;i<items.length;i++) {
			var linked = ''
			table += '<tr>'
			
			if (scriptData[i].linked) linked = " \u003Ca href='/scripts/"+scriptData[i].linked+"' target='_blank'>\u003Cimg src='link.png' alt='details'/>\u003C/a>"
			
			//table += '<td title="'+tablecolumns.language+'" style="text-align:right;white-space:nowrap;">'+scriptData[i].name.replace(/ \([^\)]+\)/,'')+'</td>'
			table += '<td title="'+items[i]+'" style="text-align:right;white-space:nowrap;">'+scriptData[i].name.replace(/ \([^\)]+\)/,'')+'</td>'
			
			table += '<td title="'+tablecolumns.script+'" style="text-align:right;">'+scriptData[i].script+'</td>'
			
			table += '<td title="Link to more details">'+linked+'</td>'
			
			table += '<td title="'+tablecolumns.numchars+'" style="text-align:right;padding-left: 1em;">'+scriptData[i].chars+'</td>'
			
			table += '<td title="Infequent characters" style="text-align:left;">'+scriptData[i].aux+'</td>'
			
			table += '<td title="'+tablecolumns.letters+'"'
			if (scriptData[i].letters!==0) table += 'class="y"'
			table += '>'+scriptData[i].letters+'</td>'
			
			table += '<td title="'+tablecolumns.mark+'"'
			if (scriptData[i].mark!==0) table += 'class="y"'
			table += '>'+scriptData[i].mark+'</td>'
			
			table += '<td title="'+tablecolumns.gpos+'"'
			if (scriptData[i].gpos!=='no') table += 'class="y"'
			table += '>'+scriptData[i].gpos+'</td>'
			
			table += '<td title="'+tablecolumns.mcchars+'"'
			if (scriptData[i].mcchars!=='no') table += 'class="y"'
			table += '>'+scriptData[i].mcchars+'</td>'
			
			table += '<td title="'+tablecolumns.matras+'"'
			if (scriptData[i].matras!=='no' && scriptData[i].matras!=='n/a') table += 'class="y"'
			table += '>'+scriptData[i].matras+'</td>'
			
			table += '<td title="'+tablecolumns.cs+'"'
			if (scriptData[i].cs!=='no') table += 'class="y"'
			table += '>'+scriptData[i].cs+'</td>'
			
			table += '<td title="'+tablecolumns.gsub+'"'
			if (scriptData[i].gsub!=='no') table += 'class="y"'
			table += '>'+scriptData[i].gsub+'</td>'
			
			table += '<td title="'+tablecolumns.cursive+'"'
			if (scriptData[i].cursive!=='no') table += 'class="y"'
			table += '>'+scriptData[i].cursive+'</td>'
			
			table += '<td title="'+tablecolumns.other+'"'
			if (scriptData[i].other!=='0') table += 'class="y"'
			table += '>'+scriptData[i].other+'</td>'
			
			table += '<td title="'+tablecolumns.dir+'"'
			if (scriptData[i].dir!=='ltr') table += 'class="y"'
			table += '>'+scriptData[i].dir+'</td>'
			
			table += '<td title="'+tablecolumns.baseline+'"'
			if (scriptData[i].baseline!=='mid') table += 'class="y"'
			table += '>'+scriptData[i].baseline+'</td>'

			table += '<td title="'+tablecolumns.wordsep+'"'
			if (scriptData[i].wordsep!=='space') table += 'class="y"'
			table += '>'+scriptData[i].wordsep+'</td>'
			
			table += '<td title="'+tablecolumns.wrap+'"'
			if (scriptData[i].wrap!=='word') table += 'class="y"'
			table += '>'+scriptData[i].wrap+'</td>'
			
			table += '<td title="'+tablecolumns.hyphenation+'"'
			if (scriptData[i].hyphenation!=='no' && scriptData[i].hyphenation!=='?') table += 'class="y"'
			table += '>'+scriptData[i].hyphenation+'</td>'
			
			table += '<td title="'+tablecolumns.justify+'"'
			if (scriptData[i].justify!=='sp') table += 'class="y"'
			table += '>'+scriptData[i].justify+'</td>'
			
			table += '<td title="'+tablecolumns.digits+'"'
			if (scriptData[i].digits!==0) table += 'class="y"'
			table += '>'+scriptData[i].digits.toString()+'</td>'
			
			table += '<td title="'+tablecolumns.punctuation+'"'
			if (scriptData[i].punctuation!=='0') table += 'class="y"'
			table += '>'+scriptData[i].punctuation+'</td>'
			
			table += '<td title="'+tablecolumns.region+'">'+scriptData[i].region+'</td>';
			
			table += '<td title="Go to Charuse page for '+scriptData[i].id+'"><a href="../../app-charuse/?language='+scriptData[i].id+'" style="font-size:80%;font-style:italic;" target="_blank"><img src="link.png" alt="details"/></td>'
			
			table += '</tr>'+"\n";

			

}


document.getElementById('theTable').innerHTML = table;
}


function getCharacterStats () {
	for (var i=0;i<items.length;i++) {
		if (scriptData[i]) {

			var count = 0
			var aux = 0
			var charArray
			charuseData = scriptData[i]

			if (charuseData.number) {
				charArray = [...charuseData.number]
				scriptData[i].digits = charArray.length
				count += charArray.length
				}
			else scriptData[i].digits = 0
			
			if (charuseData.letter) {
				charArray = [...charuseData.letter]
				scriptData[i].letters = charArray.length
				count += charArray.length
				}

			if (charuseData.mark) {
				charArray = [...charuseData.mark]
				scriptData[i].mark = charArray.length
				count += charArray.length
				}
			else scriptData[i].mark = 0

			if (charuseData.punctuation) {
				charArray = [...charuseData.punctuation]
				scriptData[i].punctuation = charArray.length
				count += charArray.length
				}
			else scriptData[i].punctuation = '0'

			if (charuseData.other) {
				charArray = [...charuseData.other]
				scriptData[i].other = charArray.length
				count += charArray.length
				}
			else scriptData[i].other = '0'

			if (charuseData.aux) {
				charArray = [...charuseData.aux]
				aux = '+'+charArray.length
				}
			else scriptData[i].aux = ''

			scriptData[i].chars = count
			if (aux > 0) scriptData[i].aux = aux
			}
		}
	}