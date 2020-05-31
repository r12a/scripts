
var items = ['am', 'arb', 'hy', 'aii', 'ban-bali', 'bsq-bass', 'bn', 'bug-bugi', 'my', 'chr', 'dv', 'ka', 'gu', 'khk-mong', 'ha-arab', 'he', 'hi', 'ja', 'jv-java', 'kn', 'ks-deva', 'km', 'kkh', 'ko', 'lo', 'lis', 'ml', 'cmn', 'el', 'mid', 'nod', 'nqo', 'ory', 'fuf-adlm', 'pa', 'ru', 'si', 'zgh', 'su-sund', 'csw', 'syc', 'khb', 'tdd', 'blt', 'ta', 'te', 'th', 'bo', 'tru', 'vai']





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
		punctuation:"Punct\u00ADuation",
		digits:"Native digits",
		other:"Format chars",
		type:"Type",
		vletter:"Vowel letters",
		//vindep:"Independent vowels",
		vmark:"Vowel marks",
		vcircum:"Circum\u00ADgraphs",
		vprescript:"Prescript vowels",
		//vhidden:"Hides vowels",
		gpos:"Contextual placement", 
		//mcchars:"Multiple combining marks",
		//matras:"Vowel signs",
		gsub:"Contextual shaping", 
		cs:"Case sensitive", 
		cursive:"Cursive script",
		dir:"Text direction",
		baseline:"Baseline",
		wordsep:"Word separator",
		wrap:"Text wrap",
		hyphenation:"Hyphen\u00ADation",
		justify:"Justification",
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
			
			table += '<td title="'+tablecolumns.punctuation+'"'
			if (scriptData[i].punctuation!=='0') table += 'class="y"'
			table += '>'+scriptData[i].punctuation+'</td>'
			
			table += '<td title="'+tablecolumns.digits+'"'
			if (scriptData[i].digits!==0) table += 'class="y"'
			table += '>'+scriptData[i].digits.toString()+'</td>'
			
			table += '<td title="'+tablecolumns.other+'"'
			if (scriptData[i].other!=='0') table += 'class="y"'
			table += '>'+scriptData[i].other+'</td>'
			
			table += '<td title="'+tablecolumns.type+'"'
			if (scriptData[i].type!=='alpha') table += 'class="y"'
			table += '>'+scriptData[i].type+'</td>'
			
			table += '<td title="'+tablecolumns.vletter+'"'
			if (scriptData[i].vletter!=='-') table += 'class="yy"'
			table += '>'+scriptData[i].vletter+'</td>'
			
			//table += '<td title="'+tablecolumns.vindep+'"'
			//if (scriptData[i].vindep!=='-') table += 'class="y"'
			//table += '>'+scriptData[i].vindep+'</td>'
			
			table += '<td title="'+tablecolumns.vmark+'"'
			if (scriptData[i].vmark!=='-') table += 'class="yy"'
			table += '>'+scriptData[i].vmark+'</td>'
			
			table += '<td title="'+tablecolumns.vcircum+'"'
			if (scriptData[i].vcircum!=='-') table += 'class="yy"'
			table += '>'+scriptData[i].vcircum+'</td>'
			
			table += '<td title="'+tablecolumns.vprescript+'"'
			if (scriptData[i].vprescript!=='-') table += 'class="yy"'
			table += '>'+scriptData[i].vprescript+'</td>'
			
			//table += '<td title="'+tablecolumns.vhidden+'"'
			//if (scriptData[i].vhidden!=='-') table += 'class="y"'
			//table += '>'+scriptData[i].vhidden+'</td>'
			
			table += '<td title="'+tablecolumns.gpos+'"'
			if (scriptData[i].gpos!=='no') table += 'class="y"'
			table += '>'+scriptData[i].gpos+'</td>'
			
			//table += '<td title="'+tablecolumns.mcchars+'"'
			//if (scriptData[i].mcchars!=='no') table += 'class="y"'
			//table += '>'+scriptData[i].mcchars+'</td>'
			
			//table += '<td title="'+tablecolumns.matras+'"'
			//if (scriptData[i].matras!=='no' && scriptData[i].matras!=='n/a') table += 'class="y"'
			//table += '>'+scriptData[i].matras+'</td>'
			
			table += '<td title="'+tablecolumns.gsub+'"'
			if (scriptData[i].gsub!=='no') table += 'class="y"'
			table += '>'+scriptData[i].gsub+'</td>'
			
			table += '<td title="'+tablecolumns.cs+'"'
			if (scriptData[i].cs!=='no') table += 'class="y"'
			table += '>'+scriptData[i].cs+'</td>'
			
			table += '<td title="'+tablecolumns.cursive+'"'
			if (scriptData[i].cursive!=='no') table += 'class="y"'
			table += '>'+scriptData[i].cursive+'</td>'
			
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
			
			table += '<td title="'+tablecolumns.region+'">'+scriptData[i].region+'</td>';
			
			table += '<td title="Go to Charuse page for '+scriptData[i].id+'"><a href="../../app-charuse/?language='+scriptData[i].id+'" style="font-size:80%;font-style:italic;" target="_blank"><img src="link.png" alt="details"/></td>'
			
			table += '</tr>'+"\n";

		}


	document.getElementById('theTable').innerHTML = table
	
	var cells = document.querySelectorAll('#reviewtable td')
	for (var i=0;i<cells.length;i++) cells[i].addEventListener('click', showContext)
	}


function showContext (evt) {
	document.getElementById('hint').textContent = evt.target.title
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



			// deal with types
			if (charuseData.type.includes('alpha')) scriptData[i].type = 'alpha'
			if (charuseData.type.includes('abug')) scriptData[i].type = 'abug'
			if (charuseData.type.includes('syll')) scriptData[i].type = 'syll'
			if (charuseData.type.includes('ideo')) scriptData[i].type = 'syll'



			// deal with vowel characteristics
			scriptData[i].vletter = '-'
			scriptData[i].vmark = '-'
			scriptData[i].vprescript = '-'
			scriptData[i].vcircum = '-'

			if (charuseData.vowels) {
				if (charuseData.vowels.includes('letters')) scriptData[i].vletter = 'l'
				if (charuseData.vowels.includes('matres')) scriptData[i].vletter = 'ml'
				if (charuseData.vowels.includes('independent') && charuseData.vowels.includes('some')) scriptData[i].vletter = '(iv)'
				else if (charuseData.vowels.includes('independent')) scriptData[i].vletter = 'iv'
				if (charuseData.vowels.includes('diacritics') && charuseData.vowels.includes('hidden')) scriptData[i].vmark = '(d)'
				else if (charuseData.vowels.includes('diacritics')) scriptData[i].vmark = 'd'
				if (charuseData.vowels.includes('vowel-signs')) scriptData[i].vmark = 'vs'
				if (charuseData.vowels.includes('circumgraphs')) scriptData[i].vcircum = 'c'
				if (charuseData.vowels.includes('prescript')) scriptData[i].vprescript = 'p'
				}
			if (scriptData[i].type.includes('syll')) scriptData[i].vletter = 's'
			}
		}
	}