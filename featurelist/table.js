
var items = ['am', 'arb', 'hy', 'aii', 'ban-bali', 'bsq-bass', 'bn', 'bug-bugi', 'my', 'chr', 'dv', 'ka', 'gu', 'khk-mong', 'ha', 'ha-arab', 'he', 'hi', 'ike', 'ja', 'jv-java', 'kn', 'ks', 'ks-deva', 'km', 'kkh', 'ko', 'lo', 'lis', 'ml', 'cmn', 'el', 'mid', 'nod', 'nqo', 'ory', 'fuf-adlm', 'pa', 'ru', 'si', 'zgh', 'su-sund', 'syc', 'khb', 'tdd', 'blt', 'ta', 'te', 'th', 'bo', 'tru', 'ug', 'ur', 'vai', 'osa']

var csubset = false
var vsubset = false
var resortCol = ''
const REVERSE = true


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
     


function resort (column, reverse) { 

	scriptData.sort(by(column, reverse))
	
	var table = ''
	table += '<table id="reviewtable"><thead><tr>';
	
	// sets of subcolumns, for toggles
	var charsubset = new Set(['Letters','Marks', 'Punct\u00ADuation', 'Native digits', 'Format chars'])


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
	
	//for (var col in tablecolumns) {
	//	table += '<th class="top" title="'+tablecolumns[col]+'"><a href="#theTable" onclick="resort(\''+col+'\'); return false;">'+tablecolumns[col]+'</a></th>'+"\n";
	//	}
	
	table += '<th class="top" title="Language" style="text-align:right;"><a href="#theTable" onclick="resort(\'name\'); window.resortCol=\'name\';return false;">Language</a></th>\n'
	table += '<th class="top" title="Script"><a href="#theTable" onclick="resort(\'script\'); window.resortCol=\'script\'; return false;">Script</a></th>\n'
	table += '<th class="top" title="Link to details"><a href="#theTable"; return false;"> </a></th>\n'
	table += '<th class="top" title="Total chars"><a href="#theTable" onclick="resort(\'chars\'); window.resortCol=\'chars\'; return false;">Total chars</a></th>\n'
	table += '<th class="top" title="+"><a href="#theTable" onclick="resort(\'aux\'); window.resortCol=\'aux\'; return false;">+</a></th>\n'

	if (window.csubset) {
		table += '<th class="top charsubset" title="Letters"><a href="#theTable" onclick="resort(\'letters\', REVERSE); window.resortCol=\'letters\'; return false;">Letters</a></th>\n'
		table += '<th class="top charsubset" title="Marks"><a href="#theTable" onclick="resort(\'mark\', REVERSE); window.resortCol=\'mark\'; return false;">Marks</a></th>\n'
		table += '<th class="top charsubset" title="Punctuation"><a href="#theTable" onclick="resort(\'punctuation\', REVERSE); window.resortCol=\'punctuation\'; return false;">Punct\u00ADuation</a></th>\n'
		table += '<th class="top charsubset" title="Native digits"><a href="#theTable" onclick="resort(\'digits\', REVERSE); window.resortCol=\'digits\'; return false;">Native digits</a></th>\n'
		table += '<th class="top charsubset" title="Format chars"><a href="#theTable" onclick="resort(\'other\', REVERSE); window.resortCol=\'other\'; return false;">Format chars</a></th>\n'
		}

	table += '<th class="top" title="Type"><a href="#theTable" onclick="resort(\'type\'); window.resortCol=\'type\'; return false;">Type</a></th>\n'

	if (window.vsubset) {
		table += '<th class="top vsubset" title="Vowel letters"><a href="#theTable" onclick="resort(\'vletter\'); window.resortCol=\'vletter\'; return false;">Vowel letters</a></th>\n'
		table += '<th class="top vsubset" title="Vowel marks"><a href="#theTable" onclick="resort(\'vmark\'); window.resortCol=\'vmark\'; return false;">Vowel marks</a></th>\n'
		table += '<th class="top vsubset" title="Circum\u00ADgraphs"><a href="#theTable" onclick="resort(\'vcircum\', REVERSE); window.resortCol=\'vcircum\'; return false;">Circum\u00ADgraphs</a></th>\n'
		table += '<th class="top vsubset" title="Prescript vowels"><a href="#theTable" onclick="resort(\'vprescript\', REVERSE); window.resortCol=\'vprescript\'; return false;">Prescript vowels</a></th>\n'
		}

	table += '<th class="top" title="Contextual placement"><a href="#theTable" onclick="resort(\'gpos\', REVERSE); window.resortCol=\'gpos\'; return false;">Contextual placement</a></th>\n'
	table += '<th class="top" title="Contextual shaping"><a href="#theTable" onclick="resort(\'gsub\', REVERSE); window.resortCol=\'gsub\'; return false;">Contextual shaping</a></th>\n'
	table += '<th class="top" title="Case sensitive"><a href="#theTable" onclick="resort(\'cs\', REVERSE); window.resortCol=\'cs\'; return false;">Case sensitive</a></th>\n'
	table += '<th class="top" title="Cursive script"><a href="#theTable" onclick="resort(\'cursive\', REVERSE); window.resortCol=\'cursive\'; return false;">Cursive script</a></th>\n'
	table += '<th class="top" title="Text direction"><a href="#theTable" onclick="resort(\'dir\', REVERSE); window.resortCol=\'dir\'; return false;">Text direction</a></th>\n'
	table += '<th class="top" title="Baseline"><a href="#theTable" onclick="resort(\'baseline\'); window.resortCol=\'baseline\'; return false;">Baseline</a></th>\n'
	table += '<th class="top" title="Word separator"><a href="#theTable" onclick="resort(\'wordsep\'); window.resortCol=\'wordsep\'; return false;">Word separator</a></th>\n'
	table += '<th class="top" title="Text wrap"><a href="#theTable" onclick="resort(\'wrap\'); window.resortCol=\'wrap\'; return false;">Text wrap</a></th>\n'
	table += '<th class="top" title="Hyphenation"><a href="#theTable" onclick="resort(\'hyphenation\', REVERSE); window.resortCol=\'hyphenation\'; return false;">Hyphen\u00ADation</a></th>\n'
	table += '<th class="top" title="Justification"><a href="#theTable" onclick="resort(\'justify\'); window.resortCol=\'justify\'; return false;">Justification</a></th>\n'
	table += '<th class="top" title="Region of origin"><a href="#theTable" onclick="resort(\'region\'); window.resortCol=\'region\'; return false;">Region of origin</a></th>\n'
	table += '<th class="top" title="More info"><a href="#theTable">More info</a></th>\n'
	
	table += '</tr></thead><tbody>'
	


		for (var i=0;i<items.length;i++) {
			var linked = ''
			table += '<tr>'
			
			if (scriptData[i].linked) linked = " \u003Ca href='/scripts/"+scriptData[i].linked+"' target='_blank'>\u003Cimg src='link.png' alt='details'/>\u003C/a>"
			
			table += '<td title="Language" style="text-align:right;white-space:nowrap;">'+scriptData[i].name.replace(/ \([^\)]+\)/,'')+'</td>'
			
			table += '<td title="Script" style="text-align:right;">'+scriptData[i].script+'</td>'
			
			table += '<td title="Link to more details">'+linked+'</td>'
			
			table += '<td title="Total characters" style="text-align:right;padding: 0 .5em;" class="y">'+scriptData[i].chars+'</td>'
			
			table += '<td title="Infequent characters" style="text-align:left;">'+scriptData[i].aux+'</td>'


			if (window.csubset) {
				table += '<td title="Letters" class="charsubset'
				if (scriptData[i].letters!==0) table += ' yy'
				table += '">'+scriptData[i].letters+'</td>'

				table += '<td title="Marks" class="charsubset'
				if (scriptData[i].mark!==0) table += ' yy'
				table += '">'+scriptData[i].mark+'</td>'

				table += '<td title="Punctuation" class="charsubset'
				if (scriptData[i].punctuation!=='0') table += ' yy'
				table += '">'+scriptData[i].punctuation+'</td>'

				table += '<td title="Native digits" class="charsubset'
				if (scriptData[i].digits!==0) table += ' yy'
				table += '">'+scriptData[i].digits.toString()+'</td>'

				table += '<td title="Format characters" class="charsubset'
				if (scriptData[i].other!=='0') table += ' yy'
				table += '">'+scriptData[i].other+'</td>'
				}


			table += '<td title="Type"'
			if (scriptData[i].type!=='alpha') table += 'class="y"'
			table += '>'+scriptData[i].type+'</td>'
			
			if (window.vsubset) {
				table += '<td title="Vowel letters" class="vsubset'
				if (scriptData[i].vletter!=='-') table += ' yy'
				table += '">'+scriptData[i].vletter+'</td>'

				table += '<td title="Vowel marks" class="vsubset'
				if (scriptData[i].vmark!=='-') table += ' yy'
				table += '">'+scriptData[i].vmark+'</td>'

				table += '<td title="Circumgraphs" class="vsubset'
				if (scriptData[i].vcircum!==0) table += ' yy'
				table += '">'+scriptData[i].vcircum+'</td>'

				table += '<td title="Prescript vowels" class="vsubset'
				if (scriptData[i].vprescript!==0) table += ' yy'
				table += '">'+scriptData[i].vprescript+'</td>'
				}


			table += '<td title="Contextual placement"'
			if (scriptData[i].gpos!=='no') table += 'class="y"'
			table += '>'+scriptData[i].gpos+'</td>'
			
			//table += '<td title="'+tablecolumns.mcchars+'"'
			//if (scriptData[i].mcchars!=='no') table += 'class="y"'
			//table += '>'+scriptData[i].mcchars+'</td>'
			
			//table += '<td title="'+tablecolumns.matras+'"'
			//if (scriptData[i].matras!=='no' && scriptData[i].matras!=='n/a') table += 'class="y"'
			//table += '>'+scriptData[i].matras+'</td>'
			
			table += '<td title="Contextual shaping"'
			if (scriptData[i].gsub!=='no') table += 'class="y"'
			table += '>'+scriptData[i].gsub+'</td>'
			
			table += '<td title="Case sensitive"'
			if (scriptData[i].cs!=='no') table += 'class="y"'
			table += '>'+scriptData[i].cs+'</td>'
			
			table += '<td title="Cursive script"'
			if (scriptData[i].cursive!=='no') table += 'class="y"'
			table += '>'+scriptData[i].cursive+'</td>'
			
			table += '<td title="Text direction"'
			if (scriptData[i].dir!=='ltr') table += 'class="y"'
			table += '>'+scriptData[i].dir+'</td>'
			
			table += '<td title="Baseline"'
			if (scriptData[i].baseline!=='mid') table += 'class="y"'
			table += '>'+scriptData[i].baseline+'</td>'

			table += '<td title="Word separator"'
			if (scriptData[i].wordsep!=='space') table += 'class="y"'
			table += '>'+scriptData[i].wordsep+'</td>'
			
			table += '<td title="Text wrap"'
			if (scriptData[i].wrap!=='word') table += 'class="y"'
			table += '>'+scriptData[i].wrap+'</td>'
			
			table += '<td title="Hyphenation"'
			if (scriptData[i].hyphenation!=='no' && scriptData[i].hyphenation!=='?') table += 'class="y"'
			table += '>'+scriptData[i].hyphenation+'</td>'
			
			table += '<td title="Justification"'
			if (scriptData[i].justify!=='spaces') table += 'class="y"'
			table += '>'+scriptData[i].justify+'</td>'
			
			table += '<td title="Region of origin">'+scriptData[i].region+'</td>';
			
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
			scriptData[i].vprescript = 0
			scriptData[i].vcircum = 0

			if (charuseData.vowels) {
				if (charuseData.vowels.includes('letters')) scriptData[i].vletter = 'l'
				if (charuseData.vowels.includes('matres')) scriptData[i].vletter = 'ml'
				if (charuseData.vowels.includes('independent') && charuseData.vowels.includes('some')) scriptData[i].vletter = '(iv)'
				else if (charuseData.vowels.includes('independent')) scriptData[i].vletter = 'iv'
				if (charuseData.vowels.includes('diacritics') && charuseData.vowels.includes('hidden')) scriptData[i].vmark = '(d)'
				else if (charuseData.vowels.includes('diacritics')) scriptData[i].vmark = 'd'
				if (charuseData.vowels.includes('vowel-signs')) scriptData[i].vmark = 'vs'
				if (charuseData.vowels.includes('circumgraphs')) {
					// get the number
					temp1 = charuseData.vowels.split('circumgraph')
					temp2 = temp1[0].split(' ')
					temp3 = temp2[temp2.length-2]
					scriptData[i].vcircum = parseInt(temp3)
					}
				if (charuseData.vowels.includes('prescript')) {
					// get the number
					temp1 = charuseData.vowels.split('prescript')
					temp2 = temp1[0].split(' ')
					temp3 = temp2[temp2.length-2]
					scriptData[i].vprescript = parseInt(temp3)
					}
				}
			if (scriptData[i].type.includes('syll')) scriptData[i].vletter = 's'
			}
		}
	}



function toggle (col) {
	if (col === 'characters') cols = document.querySelectorAll(".charsubset")
	else if  (col === 'vowels') cols = document.querySelectorAll(".vsubset")
	else { console.log('Invalid parameter for toggle function.'); return }
	
	if (cols[0].style.display === 'none') for (i=0;i<cols.length;i++) cols[i].style.display = 'table-cell'
	else for (i=0;i<cols.length;i++) cols[i].style.display = 'none'
	}



function toggle (col) {
	if (col === 'characters') {
		if (window.csubset) window.csubset = false
		else window.csubset = true
		resort(window.resortCol)
		}
	if (col === 'vowels') {
		if (window.vsubset) window.vsubset = false
		else window.vsubset = true
		resort(window.resortCol)
		}
	}
