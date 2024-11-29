// in the main source file scriptData array is created
// then populated from the langs.js data for the languages (items) listed just below
// then additional fields are added to each record after analysing the info, using getCharacterStats
// resort is then called to draw the table
// to add a new column, search for "NEWCOL" to find code that needs changing


// one lang tag per row
//var items = ['adlm', 'am', 'arb', 'hy', 'aii', 'ban-bali', 'bm', 'bax-bamu', 'bsq-bass', 'bn', 'bug-bugi', 'my', 'chr', 'cmn', 'crk', 'dv', 'ff', 'ff-arab', 'fuf-adlm', 'el', 'gu', 'ha', 'ha-arab', 'he', 'hi', 'ike', 'ja', 'jv-java', 'ka', 'khb', 'khk', 'khk-mong', 'km', 'ko', 'ks', 'ks-deva', 'kyu', 'lep', 'lif', 'lis', 'lo', 'ml', 'mid', 'mro', 'new', 'nod', 'nqo', 'ory', 'osa', 'pa', 'pes', 'rhg', 'ru', 'sat', 'shn', 'si', 'su-sund', 'suz', 'syc', 'kkh', 'ta', 'tdd', 'te', 'th', 'tru', 'ug', 'uk', 'unr', 'ur', 'vai', 'wo', 'zgh', 'blt', 'bo', ]
var items = ['adlm', 'ahom', 'arab', 'arabl', 'arabd', 'armi', 'armn', 'avst', 'bali', 'bamu', 'bass', 'batk', 'beng', 'bugi', 'buhd', 'cans', 'cakm', 'cher', 'cyrl', 'deva', 'ethi', 'geor', 'grek', 'gujr', 'guru', 'hang', 'hani', 'hano', 'hebr', 'hira', 'hluw', 'java', 'kali', 'kana', 'khmr', 'krai', 'lana', 'laoo', 'latn', 'lepc', 'limb', 'lisu', 'mand', 'mlym', 'mong', 'mroo', 'mymr', 'nagm', 'newa', 'nkoo', 'olck', 'orya', 'osge', 'plrd', 'rjng', 'rohg', 'sinh', 'sora', 'sund', 'sunu', 'syrc', 'syrn', 'syrj', 'tagb', 'tale', 'talu', 'taml', 'tayo', 'tavt', 'telu', 'tfng', 'thaa', 'thai', 'tibt', 'tols', 'vaii', 'wcho' ]


// these variables indicate which tabs are open or closed
var type = false
var caseubset = false
var vsubset = false
var consonants = false
var cclusters = false
var direction = false
var shaping = false
var inline = false
var para = false
var more = false
var resortCol = ''


// use this constant to change the order in which a column is sorted
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




	// NEWCOL add to this list
	var tablecolumns = {
		name:"Script name",
		script:"ISO",
		linked:" ", 
		chars:"Chars", 
		aux:"Blocks", 
		letters:"Letter", 
		mark:"Mark", 
		punctuation:"Punct<br>uation",
		digits:"Number",
		symbols:"Symbol",
		other:"Other",
        
		type:"Writing system",

		vsyllable:"Vowel<br>syllables", 
		vinherent:"Inherent<br>vowel",
		vdiac:"PCV<br>marks",
		vletter:"PCV<br>letters",
		vother:"Other<br>chars",
		vhidden:"Hides<br>vowels",
		//matres:"Matres lectionis",
		vsign:"Visual<br>order",
        
		ivowels:"SA<br>letters",
		vbase:"SA<br>carrier",
		//vmark:"Vowel marks",
        
		pbletter:"Prebase<br>letters",
		pbmark:"Prebase<br>marks",
		vcircum:"Circum-<br>graphs",
		vcomposite:"Composite<br>vowels",
        
		vvocalics:"Vocalics",
		cmedials:"Medials",
		cfinals:"Finals",
        
        //gpos:"GPos",
        //gsub:"Gsub",
		conjuncts:"Clusters<br>marked",
		cstack:"Stacked",
		cconj:"Conjoined",
		clig:"Ligated",
        ctouch:"Touching",
        cvirama:"Visible<br>killer",
        cmark:"Diacritic",
		killer:"Killer type",
        
		ligs:"Other<br>ligs.",
        
		//gpos:"Contextual placement", 
		mcchars:"Comb.<br>marks",
		matras:"Independent vowels",
		//gsub:"Contextual shaping", 
        
		case:"Case", 
		cursive:"Cursive<br>script",
        
		direction:"Text<br>direction",
		numdir:"RTL<br>digits",

        baseline:"Baseline",
		wordsep:"Word separator",
		wrap:"Linebreak",
		hyphenation:"Hyphen<br>ation",
		wordspan:"Word<br>span",
		gc:"Graph.<br>clust.",
		justification:"Justification",

		region:"Region of origin",
		fcount:"More info"
		}	






function makeTableHead (name, title, reverse) {
    var out = ''
    out += `<th class="top vsubset" title="${ title }"><a href="#theTable" onclick="resort(\'${ name }\', ${ reverse }); window.resortCol=\'${ name }\'; return false;">${ tablecolumns[name] }</a></th>\n`
    
    return out
    }




function resort (column, reverse) { 

	scriptData.sort(by(column, reverse))
	
	var table = ''
	table += '<table id="reviewtable"><thead><tr style="position:sticky; top:0; background: white;">';
	
	// sets of subcolumns, for toggles
	var charsubset = new Set(['Letters','Marks', 'Punct\u00ADuation', 'Numbers', 'Symbols', 'Other'])

	
	// *****************************
	//	
    // MAKE COLUMN HEADINGS
    //
	//	****************************
	
	// NEWCOL add a line of code to display headings
	table += `<th class="top" title="Script name" style="text-align:right;"><a href="#theTable" onclick="resort(\'name\'); window.resortCol=\'name\';return false;">Script name</a></th>\n`
    
	table += `<th class="top" title="Script"><a href="#theTable" onclick="resort(\'script\'); window.resortCol=\'script\'; return false;">Script</a></th>\n`
    
	table += `<th class="top" title="Link to details"><a href="#theTable"; return false;"> </a></th>\n`

	table += `<th class="top" title="Link to character usage app"><a href="#theTable"; return false;"> </a></th>\n`


      
    table += makeTableHead ('aux', "Number of dedicated Unicode blocks.", REVERSE)
                
    table += makeTableHead ('chars', "Total number of characters in regular use.", REVERSE)

    if (window.csubset) {
      
        table += makeTableHead ('letters', "General category: Letter", REVERSE)
      
        table += makeTableHead ('mark', "General category: Mark", REVERSE)
		
        table += makeTableHead ('digits', "General category: Number", REVERSE)
          
        table += makeTableHead ('punctuation', "General category: Punctuation", REVERSE)
          
        table += makeTableHead ('symbols', "General category: Symbol", REVERSE)

        table += makeTableHead ('other', "Format &amp; other chars", REVERSE)
		}

    table += makeTableHead ('direction', "Text direction.", REVERSE)

    table += makeTableHead ('numdir', "Direction of digits.", REVERSE)



    table += makeTableHead ('type', "Type of writing system.", REVERSE)

	if (window.vsubset) {
    
        table += makeTableHead ('vinherent', "Inherent vowel.", REVERSE)
        
        table += makeTableHead ('vdiac', "Post-consonant vowels are written using combining marks.", REVERSE)
       
        table += makeTableHead ('vletter', "Post-consonant vowels are written using letters.", REVERSE)
        
        //table += makeTableHead ('vother', "Other letters used to spell vowels.", REVERSE)
       
        table += makeTableHead ('vhidden', "Diacritics used to spell vowels that are usually hidden.", REVERSE)
 
        table += makeTableHead ('vsign', "Vowel signs used to spell vowels.", REVERSE)
        
        //table += makeTableHead ('matres', "Matres lectionis used to spell vowels.", REVERSE)
         
        //table += makeTableHead ('vsyllable', "Syllabic characters used to spell vowels.", REVERSE)



        //table += makeTableHead ('pbletter', "Standalone letters that appear before the base consonant. (Indicates visual ordering.)", REVERSE)
        
        table += makeTableHead ('pbmark', "Combining marks that appear before the base consonant when rendered.", REVERSE)
        
        table += makeTableHead ('vcircum', "(Single) combining marks that place glyphs on more than one side of the base character.", REVERSE)
        
        table += makeTableHead ('vcomposite', "Vowel sounds that are represented by more than one character.", REVERSE)

        table += makeTableHead ('ivowels', "Standalone vowels are written using letters.", REVERSE)
       
        table += makeTableHead ('vbase', "Standalone vowels are written using a base carrier with diacritics.", REVERSE)
        
        table += makeTableHead ('vvocalics', "Vocalic letters.", REVERSE)
        }

//	if (window.consonants) {
        table += makeTableHead ('case', "Case transforms.", REVERSE)

        table += makeTableHead ('cursive', "Letters are joined (cursive).", REVERSE)



        table += makeTableHead ('mcchars', "Combining marks.", REVERSE) 
        
        table += makeTableHead ('conjuncts', "Consonant clusters are marked by shaping or diacritics.", REVERSE)

//       }

	if (window.cclusters) {
        table += makeTableHead ('cmedials', "Dedicated combining marks used for syllable-initial clusters.", REVERSE)

        table += makeTableHead ('cfinals', "Dedicated combining marks used for syllable- or word-final consonants.", REVERSE)

        table += makeTableHead ('cstack', "Consonant clusters indicated by stacking.", REVERSE)

        table += makeTableHead ('cconj', "Consonant clusters indicated by conjoined characters.", REVERSE)

        table += makeTableHead ('clig', "Consonant clusters indicated by ligated characters.", REVERSE)

        table += makeTableHead ('ctouch', "Consonant clusters indicated by touching characters.", REVERSE)

        table += makeTableHead ('cvirama', "Consonant clusters indicated by a virama.", REVERSE)

        table += makeTableHead ('cmark', "Consonant clusters indicated by a diacritic mark.", REVERSE)


        table += makeTableHead ('killer', "Type of vowel killer used for conjuncts.", REVERSE)
		}

        table += makeTableHead ('ligs', "Other ligatures, beside conjuncts.", '')

//    if (window.direction) {
//        }

//    if (window.shaping) {
//        }

//    if (window.inline) {
        table += makeTableHead ('wordsep', "What separates words.", '')
//        }
 
//    if (window.para) {
        table += makeTableHead ('wrap', "Basic approach to wrapping text at line ends.", REVERSE)

        table += makeTableHead ('hyphenation', "Hyphenation.", REVERSE)

        table += makeTableHead ('wordspan', "Do conjuncts span word boundaries?", '')

        table += makeTableHead ('gc', "Grapheme clusters sufficient?", REVERSE)

        table += makeTableHead ('justification', "Justification methods.", REVERSE)

        table += makeTableHead ('baseline', "Location of the baseline: romn, ideo, hang, cntr.", '')
//        }

//    if (window.more) {
        table += makeTableHead ('region', "Region of origin.", '')
//        }
	
	table += '</tr></thead><tbody>'
	






    // *************************
    //
    //  ADD VALUES TO CELLS
    //
    // *************************




		// NEWCOL add a value
		for (var i=0;i<items.length;i++) {
			var linked = ''
			table += '<tr>'
			
			if (scriptData[i].linked) linked = " \u003Ca href='../"+scriptData[i].linked+".html' target='_blank'>\u003Cimg src='link.png' alt='details'/>\u003C/a>"
			
			table += '<td title="Script name" style="text-align:right;white-space:nowrap;">'+scriptData[i].name.replace(/ \([^\)]+\)/,'')+'</td>'
			
			//table += '<td title="Script" style="text-align:right; padding-inline:.5rem;">'+scriptData[i].script+'</td>'
			table += '<td id="'+scriptData[i].script+'" title="Script ISO code" style="text-align:right; padding-inline:.5rem;">'+scriptData[i].script+'</td>'
			
			table += '<td title="Link to the orthography notes.">'+linked+'</td>'

            if (scriptData[i].id !== 'cmn' && scriptData[i].id !== 'ja' && scriptData[i].id !== 'ko') {
                table += '<td title="Go to the Script Links page for '+scriptData[i].id+'"><a href="../links.html?iso='+scriptData[i].id+'" style="font-size:100%;font-weight:bold; padding-inline:.25rem;" target="_blank">🔗</a></td>'
                }
            else {
                 table += '<td>&nbsp;</td>'
                 }

            table += '<td title="Dedicated blocks" style="text-align:center;">'+scriptData[i].aux+'</td>'

            table += '<td title="Total characters in dedicated blocks" style="text-align:right;padding: 0 .5em;" class="y">'+scriptData[i].chars+'</td>'


			if (window.csubset) {
        
                table += drawCellForCharacters('letters', scriptData[i], 'index_letters', 'yy')

                table += drawCellForCharacters('mark', scriptData[i], 'index_cchars', 'yy')

                table += drawCellForCharacters('digits', scriptData[i], 'index_numbers', 'yy')

                table += drawCellForCharacters('punctuation', scriptData[i], 'index_punctuation', 'yy')

                table += drawCellForCharacters('symbols', scriptData[i], 'index_symbols', 'yy')

                table += drawCellForCharacters('other', scriptData[i], 'index_other', 'yy')

				}

            table += drawCellWithDefault('direction', scriptData[i], 'direction','y', 'ltr')

            table += drawCell('numdir', scriptData[i], 'direction')

            table += drawCell('type', scriptData[i], 'vowels', 'y')

			if (window.vsubset) {



                table += drawCell('vinherent', scriptData[i], 'inherent')

                table += drawCell('vdiac', scriptData[i], 'combiningV')

                table += drawCell('vletter', scriptData[i], 'vletter')

                //table += drawCell('vother', scriptData[i], 'otherV')

                table += drawCell('vhidden', scriptData[i], 'combiningV')

                //table += drawCell('matres', scriptData[i], 'otherV')

                table += drawCell('vsign', scriptData[i], 'combiningV')

                //table += drawCell('vsyllable', scriptData[i], 'vowels')


                //table += drawCell('pbletter', scriptData[i], 'prebase')

                table += drawCell('pbmark', scriptData[i], 'prebase')

                table += drawCell('vcircum', scriptData[i], 'circumgraphs')

                table += drawCell('vcomposite', scriptData[i], 'compositeV')

                table += drawCell('ivowels', scriptData[i], 'standalone')

                table += drawCell('vbase', scriptData[i], 'standalone')

                table += drawCell('vvocalics', scriptData[i], 'vocalics', 'yy')
                }

                table += drawCell('case', scriptData[i], 'transforms', 'y')

                table += drawCell('cursive', scriptData[i], 'cursive', 'y')

//			if (window.consonants) {

                table += drawCell('mcchars', scriptData[i], 'mcchars', 'y')

                table += drawCell('conjuncts', scriptData[i], 'conjuncts', 'y')

//                }


			if (window.cclusters) {
                table += drawCell('cmedials', scriptData[i], 'onsets')

                table += drawCell('cfinals', scriptData[i], 'finals')

                table += drawCell('cstack', scriptData[i], 'clusters')

                table += drawCell('cconj', scriptData[i], 'clusters')

                table += drawCell('clig', scriptData[i], 'clusters')

                table += drawCell('ctouch', scriptData[i], 'clusters')

                table += drawCell('cvirama', scriptData[i], 'clusters')

                table += drawCell('cmark', scriptData[i], 'clusters')
                
                

                table += drawCell('killer', scriptData[i], 'clusters')
				}

            table += drawCell('ligs', scriptData[i], 'ligs', 'y')

			//table += '<td title="Contextual placement"'
			//if (scriptData[i].mcchars!=='no') table += 'class="y"'
			//table += '>'+scriptData[i].mcchars+'</td>'
			
			//table += '<td title="'+tablecolumns.mcchars+'"'
			//if (scriptData[i].mcchars!=='no') table += 'class="y"'
			//table += '>'+scriptData[i].mcchars+'</td>'
			
			//table += '<td title="'+tablecolumns.matras+'"'
			//if (scriptData[i].matras!=='no' && scriptData[i].matras!=='n/a') table += 'class="y"'
			//table += '>'+scriptData[i].matras+'</td>'
			
			//table += '<td title="Contextual shaping"'
			//if (scriptData[i].gsub!=='no') table += 'class="y"'
			//table += '>'+scriptData[i].gsub+'</td>'
			
//			if (window.direction) {
//               }


//			if (window.shaping) {
//                }


//			if (window.inline) {
                table += drawCellWithDefault('wordsep', scriptData[i], 'word','y', 'space')
//                }


//			if (window.para) {
                table += drawCellWithDefault('wrap', scriptData[i], 'linebreak','yy', 'word')

                table += drawCellWithDefault('hyphenation', scriptData[i], 'hyphenation','yy', 'no')

                table += drawCellWithDefault('wordspan', scriptData[i], 'wordspan','yy', '-')

                table += drawCellWithDefault('gc', scriptData[i], 'gc','yy', '✓')

                table += drawCellWithDefault('justification', scriptData[i], 'justification','yy', 'sp')

                table += drawCellWithDefault('baseline', scriptData[i], 'baselines','yy', 'romn')
//                }
			


//			if (window.more) {
                table += `<td title="${ tablecolumns.region }§${ scriptData[i].region }">${ scriptData[i].region }</td>`

                //table += '<td title="Go to Charuse page for '+scriptData[i].id+'"><a href="../../app-charuse/index.html?language='+scriptData[i].id+'" style="font-size:80%;font-style:italic;" target="_blank"><img src="link.png" alt="details"/></td>'
  //              }
			table += '</tr>'+"\n";

		}


	document.getElementById('theTable').innerHTML = table
	
	var cells = document.querySelectorAll('#reviewtable td')
	for (var i=0;i<cells.length;i++) cells[i].addEventListener('mouseover', showContext)
	}








function drawCell (name, data, frag, colour) {
    var out = ''
    if (typeof data[name] === 'undefined') data[name] = '-'
    if (typeof colour === 'undefined') colour = 'yy'
    
    out += `<td title="${ tablecolumns[name] }§${ data[name] }" class="vsubset`
    if (data[name] !== '-' && data[name] !== '?') out += ` ${ colour }`
    if (data[name] === '-') out += `">${ data[name] }</td>`
    else out += `"><a href="../${ data.linked }.html#${ frag }" target="_blank">${ data[name] }</a></td>`
   
    return out
    }




function drawCellWithDefault (name, data, frag, colour, defaultvalue) {
    var out = ''
    if (typeof data[name] === 'undefined') data[name] = '-'
    if (typeof colour === 'undefined') colour = 'yy'
    if (typeof defaultvalue === 'undefined') defaultvalue = '-'
    
    out += `<td title="${ tablecolumns[name] }§${ data[name] }" class="vsubset`
    if (data[name] !== defaultvalue  && data[name] !== '?') out += ` ${ colour }`
    //if (data[name] === defaultvalue) out += `">${ data[name] }</td>`
    //else 
    out += `"><a href="../${ data.linked }.html#${ frag }" target="_blank">${ data[name] }</a></td>`
   
    return out
    }




function drawCellForCharacters (name, data, frag, colour) {
    var out = ''
    if (typeof data[name] === 'undefined') data[name] = '0'
    if (typeof data[name] === 0) data[name] = '0'

    out += `<td title="${ tablecolumns[name] }§${ data[name] }" class="top charsubset`
    if (data[name] !== '0') out += ` ${ colour }`
    if (data[name] === '0') out += `">${ data[name] }</td>`
    else out += `">${ data[name] }</td>`
   
    return out
    }




/*function drawCellForCharactersX (name, data, frag, colour) {
    var out = ''
    if (typeof data[name] === 'undefined') data[name] = '0'
    if (typeof data[name] === 0) data[name] = '0'

    out += `<td title="${ tablecolumns[name] }§${ data[name] }" class="top charsubset`
    if (data[name] !== '0') out += ` ${ colour }`
    if (data[name] === '0') out += `">${ data[name] }</td>`
    else out += `"><a href="../${ data.linked }.html?showIndex#${ frag }" target="_blank">${ data[name] }</a></td>`
   
    return out
    }
	
*/





    // *************************
    //
    //  SET MOUSEOVER TEXT
    //
    // *************************





function showContext (evt) {
    if (evt.target.title === '') metadata = evt.target.parentNode.title
    else metadata = evt.target.title
    
    var parts = metadata.split('§')
	out = `<strong>${ parts[0].replace(/<br>/,' ') }</strong>`
    if (parts[1] && parts[1] !== '-') out += ': &nbsp;&nbsp;'
    
    // character counts
    if (parts[0] === tablecolumns.letters) {
        out += ` The number of characters with a Unicode General Category of Letter.`
        }
    
    if (parts[0] === tablecolumns.marks) {
        out += ` The number of characters with a Unicode General Category of Mark.`
        }
    
    if (parts[0] === tablecolumns.digits) {
        out += ` The number of characters with a Unicode General Category of Number.`
        }
    
    if (parts[0] === tablecolumns.punctuation) {
        out += ` The number of characters with a Unicode General Category of Punctuation.`
        }
    
    if (parts[0] === tablecolumns.symbols) {
        out += ` The number of characters with a Unicode General Category of Symbol.`
        }
    
    if (parts[0] === tablecolumns.other) {
        out += ` The number of characters with a Unicode General Category of Other (C), or Separator (Z). This includes many of the invisible formatting characters, such as directional controls, ZWNJ, etc.`
        }




    // text direction
    if (parts[0] === tablecolumns.direction) {
        if (parts[1].includes('rtl')) out += ` Right to left script.`
        if (parts[1].includes('ltr')) out += ` Left to right script.`
        if (parts[1].includes('rtl*')) out += ` Digits also run right to left.`
        if (parts[1].includes('tblr')) out += ` Vertically set script, with lines running left to right.`
        if (parts[1].includes('tbrl')) out += ` Vertically set script, with lines running right to left.`
        if (parts[1].includes('bt')) out += ` Vertically set script, with characters running from bottom to top.`
        if (parts[1].includes('bous')) out += ` Boustrophedon text, ie. alternate lines of left to right and right to left.`
        }
    
    if (parts[0] === tablecolumns.numdir) {
        if (parts[1] !== '-') out += ` Digits also run right to left (unlike most RTL orthographies, where embedded digits run left to right within the right to left text flow.`
        }


    // writing sytem type
    if (parts[0] === tablecolumns.type) {
        if (parts[1].includes('alpha')) out += ` Alphabet, ie. both consonant and vowel sounds are written.`
        if (parts[1].includes('abug')) out += ` Abugida, ie. consonants have an inherent vowel that doesn't need to be written.`
        if (parts[1].includes('abjad')) out += ` Abjad, ie. vowel diacritics are usually hidden, leaving only consonants and long vowels.`
        if (parts[1].includes('syll')) out += ` Syllabary, ie. letters/characters typically represent one of V, CV, or CVC.`
        if (parts[1].includes('feat')) out += ` Featural syllabary, ie. a syllabary where regular features identify the vowels represented in the syllable.`
        }



    // VOWELS
    if (parts[0] === tablecolumns.vinherent) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `An inherent vowel is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> inherent vowels are used.`
        out += '<br>The consonants in the orthography carry an inherent vowel sound, which, when needed, can be changed using vowel-signs or nullified by a particular character. The number indicates the number of ways in which the inherent vowel is typically pronounced in languages using this orthography.'
        }
    
    if (parts[0] === tablecolumns.vdiac) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> combining mark is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> combining marks are used to represent vowels.`
        out += '<br>These are combining marks used to indicate a vowel sound <em>after a consonant</em>. It doesn\'t include things like nasalisation or vowel length markers; just marks that represent a vowel sound itself.'
        }

    if (parts[0] === tablecolumns.vletter) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> letter is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> letters are used to represent vowels.`
        out += '<br>The orthography uses letter characters to represent vowels pronounced <em>after a consonant</em>. This does NOT include letters used to represent standalone vowels (cf. independent letters).'
        }
    
    if (parts[0] === tablecolumns.vhidden) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Diacritic vowel marks are normally hidden.<br>Orthographies using this script generally hide vowel diacritics. This typically applies to abjads such as are used by Arabic, Hebrew, Urdu, etc. In the case of Arabic some orthographies always show all vowel diacritics, or show all vowels as letters; these alphabetic uses of the Arabic script appear on separate lines.`
        }
    
    if (parts[0] === tablecolumns.vsign) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> combining mark is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> the script uses visual ordering of vowel signs.`
        out += '<br>The orthography uses ordinary spacing letters before a consonant to represent a vowel sound that is pronounced after the consonant (it could be part of a composite vowel). This includes scripts such as Thai or Lao.'
        }

    if (parts[0] === tablecolumns.pbmark) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> mark is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> marks are used.`
        out += `<br>The orthography uses combining characters after the base consonant to represent vowel sounds, but the glyph for that character appears to the left of the consonant itself. (This doesn't include circumgraphs.)`
        }

    if (parts[0] === tablecolumns.vcircum) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> mark is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> marks are used.`
        out += `<br>A vowel is represented by a single combining character, but the orthography displays multiple glyphs simultaneously on different sides of the base consonant, eg. certain Tamil vowel signs.`
        }

    if (parts[0] === tablecolumns.vcomposite) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> multipart vowel is listed in the description.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> multipart vowels are listed in the description.`
        out += `<br>Orthographies using this script express a single vowel sound using a combination of combining marks and/or letters. This is a common feature of Southeast Asian scripts, such as Thai and Lao. It doesn't generally include glides that form part of a diphthong, nor does it include nasalisation or vowel lengthening diacritics.`
        }

    if (parts[0] === tablecolumns.ivowels) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> character is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> characters are used to represent standalone vowels.`
        out += '<br>More than one letters are used to represent <em>standalone vowel sounds</em>. (Cf. the column <samp>Vowel letters</samp>, which lists free standing letters that represent a vowel following a consonant.)'
        }
    
    if (parts[0] === tablecolumns.vbase) {
        if (parts[1].trim() === '-') out += ` —`
        else {
            out += `${ parts[1] } is used as a vowel carrier.`
            }
        out += '<br>Carriers are used with combining marks to represent <em>standalone vowel sounds</em> (cf. <samp>Standalone letters</samp>, which are free standing letters).'
        }

    if (parts[0] === tablecolumns.vvocalics) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `<bdi>${ parts[1] }</bdi> vocalics are used.`
        out += `<br>The script is an abugida that has single characters that represent a consonant plus vowel, as in Sanskrit and other indic scripts.`
        }





    // shaping & positioning
    if (parts[0] === tablecolumns.case) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else {
            out += `<bdi>${ parts[1] }</bdi>`
            if (parts[1] == 'allcaps') out += `<br>Case forms are used as normal vs all-caps, and all-caps is applied to a whole word. However, Unicode has data to enable algorithms to convert between the 'cases'.`
            else if (parts[1] == 'partial') out += `<br>Some letters have alternate forms that approximate case alternatives, but there are no algorithms to convert from one 'case' to another.`
            else out += '<br>The orthography has uppercase and lowercase forms of letters.'
            }
        }
      
    if (parts[0] === tablecolumns.cursive) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Most or all letters join.`
        }

    if (parts[0] === tablecolumns.mcchars) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else {
            out += `<bdi>${ parts[1] }</bdi>`
            if (parts[1] == 'm') out += `<br>Base characters can have multiple combining marks.  These may require care over relative positioning.`
            else out += '<br>The orthography has combining marks.'
            }
        }

    if (parts[0] === tablecolumns.conjuncts) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `The orthography has a way of indicating clusters of consonants without intervening vowels.`
        }




    // CONSONANT CLUSTERS
    if (parts[0] === tablecolumns.cmedials) {
        types = parts[1].split(' ')
        if (parts[1] !== '-') {
            for (t=0;t<types.length;t++) {
                if (types[t].includes('cm')) out += ` <bdi>${ types[t].substring(3) }</bdi> combining marks.`
                if (types[t].includes('sj')) out += ` <bdi>${ types[t].substring(3) }</bdi> subjoined letters.`
                if (types[t].includes('let')) out += ` <bdi>${ types[t].substring(4) }</bdi> dedicated letters.`
                }
             out += `<br>The orthography uses these dedicated combining or other characters to represent the non-initial consonant(s) in a syllable-initial cluster. Medials represented by simple letters or conjuncts are not included here.<br>`
           }
        else out = ' —'
        }

    if (parts[0] === tablecolumns.cfinals) {
        types = parts[1].split(' ')
        if (parts[1] !== 'undefined') {
            for (t=0;t<types.length;t++) {
                if (types[t].includes('cm')) out += ` <bdi>${ types[t].substring(3) }</bdi> combining marks.`
                if (types[t].includes('let')) out += ` <bdi>${ types[t].substring(4) }</bdi> dedicated letters.`
                if (types[t].includes('ss')) out += ` <bdi>${ types[t].substring(3) }</bdi> superscripts.`
                if (types[t].includes('vk')) out += ` A final letter that has the following vowel-killer diacritic attached: &nbsp; ${ types[t].substring(3) }`
                }
             out += `<br>The orthography uses these dedicated combining or other characters to represent syllable or word final consonants. Finals represented by simple letters or conjuncts are not included here.`
            }
        else out = ' —'
        }
     
    if (parts[0] === tablecolumns.cstack) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Consonant clusters are marked by stacking the consonants.`
        }
      
    if (parts[0] === tablecolumns.cconj) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Consonant clusters are marked by partially merging adjacent consonants.`
        }
      
    if (parts[0] === tablecolumns.clig) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Consonant clusters are marked by joining adjacent consonants into a ligature. In some cases it may be difficult to identify the original components.`
        }
      
    if (parts[0] === tablecolumns.ctouch) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Consonant clusters are marked by moving adjacent consonants closer together, so that they touch. No merging occurs (cf. Conjoined).`
        }
      
    if (parts[0] === tablecolumns.cvirama) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Consonant clusters are marked by a visible virama (when it is the common way of indicating clusters).`
        }
      
    if (parts[0] === tablecolumns.cmark) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Consonant clusters are marked by a diacritic (other than a virama).`
        }
      
    if (parts[0] === tablecolumns.killer) {
        types = parts[1].split(' ')
        if (parts.length === 1) out += ` —`
        else {
            var chars = [...parts[1]]
            for (k=0;k<chars.length;k++) {
                if (k > 0) out += ', '
                if (chars[k] === 'i') out += ' <bdi>invisible stacker</bdi>'
                else if (chars[k] === 'v') out += ' <bdi>virama</bdi>'
                else if (chars[k] === 'k') out += ' <bdi>pure killer</bdi>'
                }
            }
        out += `<br>This Unicode indic category indicates how the orthography creates conjuncts. An invisible stacker never has any visible glyph (and may do other things than stacking). A virama is usually invisible when creating a conjunct, but may be visible if the font doesn't support the conjunct glyph.  A pure killer is always visible.`
        }

    if (parts[0] === tablecolumns.ligs) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Besides conjuncts, the orthography has characters that create mandatory ligatures.`
        }
      




    // TYPOGRAPHY
    if (parts[0] === 'Word separator') {
        if (parts[1].includes('no')) out += ` No explicit delimiters define word boundaries.`
        if (parts[1].includes('space')) out += ` Words are separated by spaces.`
        if (parts[1].includes('zwsp')) out += ` A zero-width space may be used.`
        if (parts[1].includes('syllable')) out += ` Spaces are used, but they separate syllables, not words.`
        if (parts[1].includes('sb')) out += ` Syllables are separated rather than words, but using a non-space character.`
        if (parts[1].includes('wb')) out += ` Words are visually separated, but by a non-space character.`
        
        out += `<br>A word is a unit of segmentation between the grapheme and the phrase. This column asks whether, as a general rule, there are explicit delimiters for word boundaries.`
        }
     
    if (parts[0] === 'Linebreak') {
        if (parts[1].includes('word/char')) out += ` Text wraps at word boundaries OR immediately after the last character that fits on a line, regardless of word or syllable boundaries.`
        else if (parts[1].includes('word')) out += ` Text wraps at word boundaries.`
        else if (parts[1].includes('char')) out += ` Text wraps immediately after the last character that fits on a line, regardless of word or syllable boundaries.`
        if (parts[1].includes('syllable')) out += ` Text wraps at syllable boundaries, regardless of whether word boundaries are delimited.`
        
        out += `<br>Indicates the primary break point for wrapping lines. Note that nearly all scripts have rules about which punctuation characters can appear at the end or start of a line.`
        }
    
    if (parts[0] === 'Hyphenation') {
        if (parts[1].includes('no')) out += ` The primary line-break algorithm involves word boundaries, but words are not broken at the end of a line.`
        if (parts[1].includes('n/a')) out += ` The primary line-break algorithm takes no account of word boundaries.`
        if (parts[1].includes('(')) out += ` Hyphenation occurs but is rare.`
        else if (parts[1].includes('yes')) out += ` Hyphenation occurs.`
        
        if (parts[1].includes('֊')) out += ` ֊  U+058A ARMENIAN HYPHEN is used at the end of the first line.`
        if (parts[1].includes('↵᠆')) out += ` ᠆ U+1806 MONGOLIAN TODO SOFT HYPHEN is used at the <em>beginning of the second line</em>.`
        if (parts[1].includes('᭠')) out += ` ᭠ U+1B60 BALINESE PAMENENG is used at the end of the first line.`
        if (parts[1].includes('᐀')) out += ` ᐀ U+1400 CANADIAN SYLLABICS HYPHEN is used at the end of the first line.`
        if (parts[1].includes('ـ')) out += ` ـ  U+0640 ARABIC TATWEEL is used at the end of the first line.`
        if (parts[1].includes('ꦺ')) out += ` ꦺ U+A9BA JAVANESE VOWEL SIGN TALING is used at the end of the first line.`
        if (parts[1].includes('∅')) out += ` Words are broken to fit at the line end, but no visual indicator is added to indicate that the word continues on the next line.`
        if (parts[1].includes('-')) out += ` A regular hyphen is used at the end of the first line.`
        }
     
    if (parts[0] === 'Graph. clus') {
        if (parts[1].includes('✓')) out += ` Text segmentation conforms to Unicode grapheme clusters.`
        else if (parts[1].includes('?')) out += ` Research needed.`
        else out += ` Grapheme clusters are insufficient to segment this script. It is likely that orthographic syllables are appropriate.`
        
        out += `<br>Indicates whether or not grapheme clusters alone are sufficient to segment the text for line breaking, justification, and text spacing.`
        }
    
    if (parts[0] === 'Justification') {
        if (parts[1].includes('sp')) out += ` <strong>Spaces</strong> between words, syllables, or phrases are adjusted.`
        if (parts[1].includes('ic')) out += ` <strong>Characters</strong> are separated by equal amounts of space across a line. (In practice, some characters tend to attract this spacing before others).`
        if (parts[1].includes('ig')) out += ` Space is introduced between <strong>unconnected glyphs</strong>, eg. Thai not only adds space around base characters, but also between those base characters and associated vowel-signs that are not combining marks. In Tamil, vowel-signs that don't interact with the base character may be separated in narrow column text when there is only one word on a line, even though the base character and vowel-sign together make a single grapheme cluster.`
        if (parts[1].includes('str')) out += ` <strong>Connections</strong> between letters in cursive scripts are stretched.`
        if (parts[1].includes('sw')) out += ` Some letters are given <strong>swash forms</strong> or lengthened glyph shapes to fill up space.`
        if (parts[1].includes('pad')) out += ` Characters are repeated to <strong>pad out</strong> remaining space at the end of a line.`
        if (parts[1].includes('none')) out += ` Full justification is not a feature of the language.`
        }

    if (parts[0] === tablecolumns.wordspan) {
        if (parts[1].includes('✓')) out += ` Conjuncts span word boundaries.`
        else out += ` Conjuncts only occur word-internally, and not across word boundaries.`
        }
    
    if (parts[0] === 'Baseline') {
        if (parts[1].includes('romn')) out += ` Alphabetic baseline, as used in Latin script text.`
        if (parts[1].includes('ideo')) out += ` Ideographic baseline, as used in Chinese & Japanese.`
        if (parts[1].includes('hang')) out += ` Hanging baseline, as used by some Indic scripts.`
        if (parts[1].includes('cntr')) out += ` Vertical, centred baseline, as used by Traditional Mongolian, and by vertical Chinese and Japanese.`
        }
     
/*   
    if (parts[0] === 'Cursive script') {
        if (parts[1].includes('yes')) out += ` Letters are joined by default.`
        if (parts[1].includes('no')) out += ` Letters are not joined by default.`
        }
     
    if (parts[0] === tablecolumns.vsyllable) {
        types = parts[1].split(' ')
        if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> syllabic characters are used to write vowels.`
        else out += ' —'
        out += '<br>This indicates the number of characters that represent vowel sounds with no preceding consonant in a syllabic script.'
        }
  */  
/*    
    if (parts[0] === tablecolumns.matres) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> letter is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> letters are used.`
        out += '<br>Matres lectionis are consonant letters that may also mark the position of a vowel.'
        }
    if (parts[0] === tablecolumns.matres) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else out += `Matres lectionis are used.`
        out += '<br>Matres lectionis are consonant letters that may also mark the position of a vowel.'
        }
   */  
   
    /*if (parts[0] === tablecolumns.vdiac) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> combining mark is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> combining marks are used.`
        out += '<br>These diacritics are small combining marks (cf. vowel signs) used to indicate a vowel sound after a consonant.'
        }*/    
    /*
    if (parts[0] === tablecolumns.vother) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> character is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> characters are used.`
        out += '<br>These characters are other letters or marks that are used to write vowels,  that are not exclusively dedicated to writing vowels. Most are repurposed consonant letters.'
        }
    */
/*
    if (parts[0] === tablecolumns.vbase) {
        types = parts[1].split('§')
        if (parts[1].trim() === '-') out += ` —`
        else {
            var carrier = parts[1].trim().split('/')
            out += `${ carrier[0].replace(/,/g,' or ') } is used as a vowel carrier. Used alone this represents the sound ${ carrier[1].replace(/,/g,' or ') }.`
            }
        out += '<br>Carriers are used with combining marks to represent <em>standalone vowel sounds</em> (cf. <samp>Standalone letters</samp>, which are free standing letters).'
        }

    if (parts[0] === tablecolumns.pbletter) {
        types = parts[1].split(' ')
        if (parts[1].trim() === '-') out += ` —`
        else if (parts[1].trim() === '1') out += `<bdi>${ parts[1] }</bdi> letter is used.`
        else if (parts[1] !== '-') out += `<bdi>${ parts[1] }</bdi> letters are used.`
        out += '<br>The orthography uses ordinary spacing letters before a consonant to represent a sound that occurs <em>after</em> the consonant.'
        }
*/      
      
      

      


    if (parts[0] === tablecolumns.region) {
        switch (parts[1].trim()) {
            case 'afr': out += 'Africa'; break
            case 'wasia': out += 'West Asia (includes Armenian, Azerbaijan, Turkey, & Middle East)'; break
            case 'seasia': out += 'Southeast Asia (including Indonesia, Philippines)'; break
            case 'sasia': out += 'South Asia (includes Pakistan, Nepal, Bangladesh, Bhutan, India, Maldives,...)'; break
            case 'nam': out += 'North America (includes Canada, USA)'; break
            case 'cam': out += 'Central America'; break
            case 'sam': out += 'South America'; break
            case 'easia': out += 'East Asia (includes China, Mongolia, Japan, Korea)'; break
            case 'eur': out += 'Europe (includes Russia to Urals and Georgia, but not Armenia or Azerbaijan)'; break
            case 'casia': out += 'Central Asia (includes north of Iran, S of Russia, W of China)'; break
            case 'oce': out += 'Oceania (includes Australia, NZ, and Pacific Islands)'; break
            case 'carib': out += 'Caribbean'; break
            }
        }





    
    document.getElementById('hint').innerHTML = out
	}










function getCharacterStats () {
    // this function converts db values to values that can be used in the table, where needed
	for (var i=0;i<items.length;i++) {
		if (scriptData[i]) {
			var count = 0
			var aux = 0
			var charArray
			var charuseData = scriptData[i]

            scriptData[i].script = items[i]
            
            
            // change the name if the char db has a 'label' field
			if (charuseData.label) {
				scriptData[i].name = charuseData.label
				}

            // get information about character counts
            scriptData[i].letters = charuseData.bletter?charuseData.bletter:0

            scriptData[i].digits = charuseData.bnumber?charuseData.bnumber:0
            
            scriptData[i].mark = charuseData.bmark?charuseData.bmark:0
            
            scriptData[i].punctuation = charuseData.bpunctuation?charuseData.bpunctuation:0
            
            scriptData[i].symbols = charuseData.bsymbol?charuseData.bsymbol:0
            
            scriptData[i].other = charuseData.bother?charuseData.bother:0
            
            scriptData[i].chars = charuseData.chars?charuseData.chars:0

            scriptData[i].aux = charuseData.blocks?charuseData.blocks:0



            //  hyphenation & hyphen values
            scriptData[i].hyphenation = charuseData.hyphen?charuseData.hyphen:'no'

            scriptData[i].gc = charuseData.gc?'✓':'no'

            
            
            // glyph shaping & positioning
			//if (charuseData.shaping) {
				if (charuseData.case === true) scriptData[i].case = '✓'
                else if (charuseData.case === false) scriptData[i].case = '-'
				else scriptData[i].case = charuseData.case
			//	}


            scriptData[i].cursive = charuseData.cursive?'✓':'-'



			// deal with types
            // push this straight through; options are alpha abug syll ideo abjad
			/*if (charuseData.type.includes('alpha')) scriptData[i].type = 'alphabet'
			if (charuseData.type.includes('abug')) scriptData[i].type = 'abugida'
			if (charuseData.type.includes('syll')) scriptData[i].type = 'syllabic'
			if (charuseData.type.includes('ideo')) scriptData[i].type = 'syllabic'*/


			// NEWCOL set a default, then derive a value

			// deal with vowel characteristics
			//scriptData[i].vmark = ''
			scriptData[i].conjunct = ''
            scriptData[i].vinherent = '-'
            scriptData[i].vletter = '-'
            scriptData[i].vletter = '-'
            scriptData[i].vdiac = '-'
            scriptData[i].vhidden = '-'
            scriptData[i].vbase = '-'
            scriptData[i].pbmark = '-'
            scriptData[i].vcircum = '-'
            
            if (charuseData.voweltype.inherent && charuseData.voweltype.inherent > 0) scriptData[i].vinherent = charuseData.voweltype.inherent
            
            scriptData[i].vletter = charuseData.voweltype.letters?'✓':'-'

            scriptData[i].vdiac = charuseData.voweltype.marks?'✓':'-'

            scriptData[i].vvocalics = charuseData.voweltype.vocalics?'✓':'-'

            scriptData[i].vsign = charuseData.voweltype.visorder?'✓':'-'

            scriptData[i].vhidden = charuseData.voweltype.hidden?'✓':'-'

            scriptData[i].ivowels = charuseData.voweltype.ivowels?'✓':'-'

            if (charuseData.voweltype.vbase) scriptData[i].vbase = charuseData.voweltype.vbase

            scriptData[i].pbmark = charuseData.voweltype.prebase?'✓':'-'

            scriptData[i].vcircum = charuseData.voweltype.circum?'✓':'-'

            scriptData[i].vcomposite = charuseData.voweltype.vcomposite?'✓':'-'



            if (charuseData.voweltype) {
                // make an object containing key:value pairs
                var vowelArray = charuseData.voweltype
                var vowelObj = {}
                for (r=0;r<vowelArray.length;r++) {
                    temp = vowelArray[r].split(':')
                    vowelObj[temp[0]] = temp[1]
                    }

                //if (vowelObj.syl) scriptData[i].vsyllable = vowelObj.syl
                //else scriptData[i].vsyllable = '-'

                //if (vowelObj.inh) scriptData[i].vinherent = vowelObj.inh
                //else scriptData[i].vinherent = '-'
                
                
                
                //if (vowelObj.let) scriptData[i].vletter = vowelObj.let
                //else scriptData[i].vletter = '-'
/*                
                if (vowelObj.ml) scriptData[i].matres = vowelObj.ml
                else scriptData[i].matres = '-'
                if (vowelObj.ml) scriptData[i].matres = '✓'
                else scriptData[i].matres = '-'
*/              

                //if (vowelObj.ind) scriptData[i].ivowels = vowelObj.ind
                //else scriptData[i].ivowels = '-'
                
                //if (vowelObj.vs) scriptData[i].vsign = vowelObj.vs
                //else scriptData[i].vsign = '-'
				//if (vowelObj.vs) scriptData[i].vsign = '✓'
                //else scriptData[i].vsign = '-'
               
                
                //if (vowelObj.other) scriptData[i].vother = vowelObj.other
                //else scriptData[i].vother = '-'
                
				//if (vowelObj.hcm) scriptData[i].vmark += '(d) '
				//if (vowelObj.cm) scriptData[i].vmark += 'd '
				//if (vowelObj.vs) scriptData[i].vmark += 'vs '
                //if (scriptData[i].vmark === '') scriptData[i].vmark = '-'
               
				//if (vowelObj.base) scriptData[i].vbase = vowelObj.base
                //else scriptData[i].vbase = '-'
               
				//if (vowelObj.hcm) scriptData[i].vhidden = vowelObj.hcm
				//if (vowelObj.hcm) scriptData[i].vhidden = '✓'
                //else scriptData[i].vhidden = '-'
               
				//if (vowelObj.cm) scriptData[i].vdiac = vowelObj.cm
                //else scriptData[i].vdiac = '-'
               
				//if (vowelObj.venc) scriptData[i].pbletter = vowelObj.venc
                //else scriptData[i].pbletter = '-'
               
				//if (vowelObj.pre) scriptData[i].pbmark = vowelObj.pre
                //else scriptData[i].pbmark = '-'
               
				//if (vowelObj.circ) scriptData[i].vcircum = vowelObj.circ
                //else scriptData[i].vcircum = '-'
               
				//if (vowelObj.comp) scriptData[i].vcomposite = vowelObj.comp
                //else scriptData[i].vcomposite = '-'
               
				//if (vowelObj.voc) scriptData[i].vvocalics = vowelObj.voc
                //else scriptData[i].vvocalics = '-'
               
                
                
                    
				}

            scriptData[i].conjuncts = charuseData.conjuncts?'✓':'-'
            //scriptData[i].mcchars = charuseData.mcchars?'✓':'-'
            if (charuseData.mcchars === true) scriptData[i].mcchars = '✓'
            else if (charuseData.mcchars === 'm') scriptData[i].mcchars = 'm'
            else scriptData[i].mcchars = '-'
            
            
            if (scriptData[i].ligs === '?') charuseData.ligs = '?'
            else scriptData[i].ligs = charuseData.ligs?'✓':'-'
            
            //clusters:"vir inv stk cnj lig tcg rax mrk let unm"
			scriptData[i].cstack = '-'
			scriptData[i].cconj = '-'
			scriptData[i].ctouch = '-'
			scriptData[i].clig = '-'
			scriptData[i].cvirama = '-'
			scriptData[i].cmark = '-'
			scriptData[i].cra = '-'

            if (charuseData.clusters) {
                scriptData[i].killer = ''
                scriptData[i].killer = charuseData.clusters.killer?charuseData.clusters.killer:'-'
                scriptData[i].cstack = charuseData.clusters.stacks?'✓':'-'
                scriptData[i].clig = charuseData.clusters.ligation?'✓':'-'
                scriptData[i].cconj = charuseData.clusters.conjoined?'✓':'-'
                //scriptData[i].conjuncts = charuseData.clusters.conjuncts?'✓':'-'
                //scriptData[i].clig = charuseData.clusters.conjoined?'✓':'-'
                scriptData[i].ctouch = charuseData.clusters.touch?'✓':'-'
                scriptData[i].cvirama = charuseData.clusters.visviram?'✓':'-'
                scriptData[i].cmark = charuseData.clusters.diacritic?'✓':'-'
                scriptData[i].cra = charuseData.clusters.subjoinedcp?'✓':'-'
				}

			//if (charuseData.medials && charuseData.medials.includes('cm')) scriptData[i].cmedials = '✓'
			if (charuseData.medials) scriptData[i].cmedials = charuseData.medials
            else scriptData[i].cmedials = '-'
			//if (charuseData.finals && charuseData.finals.includes('cm')) scriptData[i].cfinals = '✓'
			if (charuseData.finals) scriptData[i].cfinals = charuseData.finals
            else scriptData[i].cfinals = '-'
            
            
            /* text direction
            if (scriptData[i].direction.includes('rtl*')) {
                scriptData[i].direction = 'rtl'
                scriptData[i].numdir = '✓'
                }
            else scriptData[i].numdir = '-'
            */

            scriptData[i].numdir = '-'
            scriptData[i].direction = charuseData.direction
            scriptData[i].numdir = charuseData.rtlnumbers?'✓':'-'


            scriptData[i].wrap = charuseData.linebreak


            scriptData[i].script = charuseData.script

            // word spanning conjuncts
            scriptData[i].wordspan = charuseData.wordspan?'yes':'-'
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
	if (col === 'type') {
		if (window.type) window.type = false
		else window.type = true
		resort(window.resortCol)
		}
	if (col === 'vowels') {
		if (window.vsubset) window.vsubset = false
		else window.vsubset = true
		resort(window.resortCol)
		}
	if (col === 'consonants') {
		if (window.consonants) window.consonants = false
		else window.consonants = true
		resort(window.resortCol)
		}
	if (col === 'cclusters') {
		if (window.cclusters) window.cclusters = false
		else window.cclusters = true
		resort(window.resortCol)
		}
	if (col === 'direction') {
		if (window.direction) window.direction = false
		else window.direction = true
		resort(window.resortCol)
		}
	if (col === 'shaping') {
		if (window.shaping) window.shaping = false
		else window.shaping = true
		resort(window.resortCol)
		}
	if (col === 'inline') {
		if (window.inline) window.inline = false
		else window.inline = true
		resort(window.resortCol)
		}
	if (col === 'para') {
		if (window.para) window.para = false
		else window.para = true
		resort(window.resortCol)
		}
	if (col === 'more') {
		if (window.more) window.more = false
		else window.more = true
		resort(window.resortCol)
		}
	}
