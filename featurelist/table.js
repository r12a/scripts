
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
		script:"Script name",
		linked:" ", 
		chars:"Number of characters", 
		cchars:"Combining characters", 
		cs:"Case sensitive?", 
		gpos:"Context-based positioning", 
		mcchars:"Multiple combining characters",
		matras:"Vowel signs",
		gsub:"Contextual shaping", 
		cursive:"Cursive script",
		dir:"Text direction",
		wordsep:"Word separator",
		baseline:"Baseline",
		wrap:"Text wrap",
		hyphenation:"Hyphen\u00ADation",
		justify:"Justification",
		digits:"Native digits?",
		region:"Region of origin",
		fcount:"Feature count"
		}	
	
	for (var col in tablecolumns) {
		table += '<th class="top"><a href="#theTable" onclick="resort(\''+col+'\'); return false;">'+tablecolumns[col]+'</a></th>'+"\n";
		}
	
	
	table += '</tr></thead><tbody>'
	


		for (var i=0;i<scriptData.length;i++) {
			var fc = 0;
			var linked = ''
			table += '<tr>';
			if (scriptData[i].linked) linked = " \u003Ca href='/scripts/"+scriptData[i].linked+"' target='_blank'>\u003Cimg src='link.png' alt='details'/>\u003C/a>"
			table += '<td title="'+tablecolumns.script+'" style="text-align:right;">'+scriptData[i].script+'</td>'
			table += '<td title="Link to more details">'+linked+'</td>'
			table += '<td title="'+tablecolumns.numchars+'">'+scriptData[i].chars+'</td>';
			table += '<td title="'+tablecolumns.cchars+'"'; if (scriptData[i].cchars!==0){table += 'class="y"'; fc++;} table += '>'+scriptData[i].cchars+'</td>';
			table += '<td title="'+tablecolumns.cs+'"'; if (scriptData[i].cs!=='no'){table += 'class="y"'; fc++; } table += '>'+scriptData[i].cs+'</td>';
			table += '<td title="'+tablecolumns.gpos+'"'; if (scriptData[i].gpos!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].gpos+'</td>';
			table += '<td title="'+tablecolumns.mcchars+'"'; if (scriptData[i].mcchars!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].mcchars+'</td>';
			table += '<td title="'+tablecolumns.matras+'"'; if (scriptData[i].matras!=='no' && scriptData[i].matras!=='n/a'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].matras+'</td>';
			table += '<td title="'+tablecolumns.gsub+'"'; if (scriptData[i].gsub!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].gsub+'</td>';
			table += '<td title="'+tablecolumns.cursive+'"'; if (scriptData[i].cursive!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].cursive+'</td>';
			table += '<td title="'+tablecolumns.dir+'"'; if (scriptData[i].dir!=='ltr'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].dir+'</td>';
			table += '<td title="'+tablecolumns.wordsep+'"'; if (scriptData[i].wordsep!=='space'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].wordsep+'</td>';
			table += '<td title="'+tablecolumns.baseline+'"'; if (scriptData[i].baseline!=='mid'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].baseline+'</td>';
			table += '<td title="'+tablecolumns.wrap+'"'; if (scriptData[i].wrap!=='word'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].wrap+'</td>';
			table += '<td title="'+tablecolumns.hyphenation+'"'; if (scriptData[i].hyphenation!=='no' && scriptData[i].hyphenation!=='?'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].hyphenation+'</td>';
			table += '<td title="'+tablecolumns.justify+'"'; if (scriptData[i].justify!=='space'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].justify+'</td>';
			table += '<td title="'+tablecolumns.digits+'"'; if (scriptData[i].digits!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].digits+'</td>';
			table += '<td title="'+tablecolumns.region+'">'+scriptData[i].region+'</td>';
			
			table += '<td title="'+tablecolumns[15]+'">'+fc+'</td>';
			table += '</tr>'+"\n";
			}


document.getElementById('theTable').innerHTML = table;
}
