/*

var scriptData = [ 

{ script:"Arabic", type:"abjad", chars:390, cchars:95, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", justify:"word/space", digits:"yes", region:"M East" },

{ script:"Armenian", type:"alpha", chars:89, cchars:0, cs:"yes", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"no", region:"M East" },

{ script:"Bengali", type:"abugida", chars:95, cchars:19, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Cherokee", type:"syllabic", chars:172, cchars:0, cs:"yes", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"no", region:"America" },

{ script:"Cyrillic", type:"alpha", chars:441, cchars:55, cs:"yes", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"no", region:"Europe", linked:"cyrillic" },

{ script:"Devanagari", type:"abugida", chars:158, cchars:52, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high", wrap:"word", justify:"space", digits:"yes", region:"Asia S", linked:"devanagari" },

{ script:"Ethiopic", type:"syllabic", chars:495, cchars:3, cs:"no", gpos:"no", mcchars:"?", gsub:"no", cursive:"no", dir:"ltr", wordsep:"፡", baseline:"mid", wrap:"word", justify:"፡", digits:"yes", region:"Africa" },

{ script:"Greek", type:"alpha", chars:368, cchars:0, cs:"yes", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"no", region:"Europe", linked:"greek" },

{ script:"Gujarati", type:"abugida", chars:91, cchars:26, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high?", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Gurmukhi", type:"abugida", chars:79, cchars:18, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Han", type:"ideogr", chars:87915, cchars:0, cs:"no", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr/tbrl", wordsep:"no", baseline:"low", wrap:"char", justify:"char", digits:"yes", region:"Asia E", linked:"han" },

{ script:"Hangul", type:"ideogr", chars:11183, cchars:0, cs:"no", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr/tbrl", wordsep:"space", baseline:"low", wrap:"char", justify:"space", digits:"no", region:"Asia E" },

{ script:"Hebrew", type:"abjad", chars:87, cchars:51, cs:"no", gpos:"yes", mcchars:"yes", gsub:"no", cursive:"no", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", region:"M East", digits:"no", linked:"hebrew" },

{ script:"Kana", type:"ideogr", chars:492, cchars:0, cs:"no", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr/tbrl", wordsep:"no", baseline:"low", wrap:"char", justify:"char", digits:"no", region:"Asia E", linked:"japanese" },

{ script:"Kannada", type:"abugida", chars:88, cchars:22, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Khmer", type:"abugida", chars:146, cchars:33, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", justify:"cluster", digits:"yes", region:"SE Asia" },

{ script:"Lao", type:"alpha", chars:67, cchars:15, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", justify:"cluster", digits:"yes", region:"SE Asia" },

{ script:"Latin", type:"alpha", chars:1286, cchars:0, cs:"yes", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"yes", region:"Eur/Am" },

{ script:"Malayalam", type:"abugida", chars:117, cchars:23, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Mongolian", type:"alpha", chars:156, cchars:6, cs:"no", gpos:"yes", mcchars:"no?", gsub:"yes", cursive:"yes", dir:"tblr", wordsep:"space", baseline:"vertical", wrap:"?", justify:"?", digits:"yes", region:"Asia C" },

{ script:"Myanmar", type:"abugida", chars:223, cchars:62, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", justify:"cluster", digits:"yes", region:"SE Asia" },

{ script:"Oriya", type:"abugida", chars:90, cchars:20, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Tamil", type:"abugida", chars:72, cchars:14, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Telugu", type:"abugida", chars:96, cchars:22, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Thaana", type:"alpha", chars:50, cchars:11, cs:"no", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", region:"SAsia", digits:"no" },

{ script:"Thai", type:"abugida", chars:87, cchars:16, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", justify:"cluster", digits:"yes", region:"Asia SE" },

{ script:"Tibetan", type:"abugida", chars:211, cchars:77, cs:"no", gpos:"yes", mcchars:"yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"high", wrap:"syllable", justify:"special", digits:"yes", region:"Asia C", linked:"tibetan" },
	   
{ script:"Tifinagh", type:"alpha", chars:32, cchars:0, cs:"yes", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr (+other)", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"yes", region:"Europe" },
	   
{ script:"UCAS", type:"?", chars:710, cchars:0, cs:"no", gpos:"no", mcchars:"no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", justify:"space", digits:"no", region:"Europe" },
	   
]

*/

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
		gsub:"Contextual shaping", 
		cursive:"Cursive script",
		dir:"Text direction",
		wordsep:"Word separator",
		baseline:"Baseline",
		wrap:"Text wrap",
		justify:"Justification",
		digits:"Native digits?",
		region:"Region of origin",
		fcount:"Feature count"
		}	
	
	for (var col in tablecolumns) {
		table += '<th class="top"><a href="#theTable" onclick="resort(\''+col+'\');">'+tablecolumns[col]+'</a></th>'+"\n";
		}
	
	
	table += '</tr></thead><tbody>'
	


		for (var i=0;i<scriptData.length;i++) {
			var fc = 0;
			var linked = ''
			table += '<tr>';
			if (scriptData[i].linked) linked = " \u003Ca href='/scripts/summaries/"+scriptData[i].linked+"' target='_blank'>\u003Cimg src='link.png' alt='details'/>\u003C/a>"
			table += '<td title="'+tablecolumns.script+'" style="text-align:right;">'+scriptData[i].script+'</td>'
			table += '<td title="Link to more details">'+linked+'</td>'
			table += '<td title="'+tablecolumns.numchars+'">'+scriptData[i].chars+'</td>';
			table += '<td title="'+tablecolumns.cchars+'"'; if (scriptData[i].cchars!==0){table += 'class="y"'; fc++;} table += '>'+scriptData[i].cchars+'</td>';
			table += '<td title="'+tablecolumns.cs+'"'; if (scriptData[i].cs!=='no'){table += 'class="y"'; fc++; } table += '>'+scriptData[i].cs+'</td>';
			table += '<td title="'+tablecolumns.gpos+'"'; if (scriptData[i].gpos!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].gpos+'</td>';
			table += '<td title="'+tablecolumns.mcchars+'"'; if (scriptData[i].mcchars!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].mcchars+'</td>';
			table += '<td title="'+tablecolumns.gsub+'"'; if (scriptData[i].gsub!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].gsub+'</td>';
			table += '<td title="'+tablecolumns.cursive+'"'; if (scriptData[i].cursive!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].cursive+'</td>';
			table += '<td title="'+tablecolumns.dir+'"'; if (scriptData[i].dir!=='ltr'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].dir+'</td>';
			table += '<td title="'+tablecolumns.wordsep+'"'; if (scriptData[i].wordsep!=='space'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].wordsep+'</td>';
			table += '<td title="'+tablecolumns.baseline+'"'; if (scriptData[i].baseline!=='mid'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].baseline+'</td>';
			table += '<td title="'+tablecolumns.wrap+'"'; if (scriptData[i].wrap!=='word'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].wrap+'</td>';
			table += '<td title="'+tablecolumns.justify+'"'; if (scriptData[i].justify!=='space'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].justify+'</td>';
			table += '<td title="'+tablecolumns.digits+'"'; if (scriptData[i].digits!=='no'){table += 'class="y"'; fc++;} table += '>'+scriptData[i].digits+'</td>';
			table += '<td title="'+tablecolumns.region+'">'+scriptData[i].region+'</td>';
			
			table += '<td title="'+tablecolumns[15]+'">'+fc+'</td>';
			table += '</tr>'+"\n";
			}


document.getElementById('theTable').innerHTML = table;
}
