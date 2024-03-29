if (typeof traceSet === 'undefined') traceSet = new Set([])



// set accessibility defaults
access = {
    fontsize: 15,
    contrast: 'low'
    }




function applyRedirect() {
    var hash = ''
    if (window.location.hash) hash = window.location.hash
    var parameters = ''
    if (window.location.search) parameters = window.location.search

    // delete the previous content
    document.querySelector('body').innerHTML = ''

    // get the path
    newlocation = getFilename (window.location.pathname)

    var displayedURL = `https://r12a.github.io/scripts/${ newlocation}${parameters}${hash}`
    var linkURL = `../${ newlocation}${parameters}${hash}`

    var div = document.createElement('div')
        div.id = 'redirect'
        div.appendChild( document.createTextNode( 'This page has moved. Click on this link to go to the new location:' ))
        div.appendChild( document.createElement('br') )
    var a = document.createElement('a')
        a.href = linkURL
        a.appendChild( document.createTextNode(displayedURL))
        div.appendChild(a)
        document.querySelector('body').appendChild(div)
    }


/*function getFilenameX (locn) {

    // get the end of the pathname
    fields = locn.split('/')
    currentLocation = fields[fields.length-2] + '/' + fields[fields.length-1]
    console.log(currentLocation)
    
    var namelist = {
        'adlam/index.html': 'adlm/index.html',
        'adlam/fuf.html': 'adlm/fuf.html',
        'adlam/block.html': 'adlm/block.html',
        
        'armenian/index.html': 'armn/index.html',
        'armenian/hy.html': 'armn/hy.html',
        'armenian/block.html': 'armn/block.html',
        
        'arabic/index.html': 'arab/index.html',
        'arabic/arb.html': 'arab/arb.html',
        'arabic/pes.html': 'arab/pes.html',
        'arabic/ks.html': 'arab/ks.html',
        'arabic/ug.html': 'arab/ug.html',
        'arabic/ur.html': 'arab/ur.html',
        'arabic/ha.html': 'arab/ha.html',
        'arabic/block.html': 'arab/block.html',
        
        'balinese/index.html': 'bali/index.html',
        'balinese/ban.html': 'bali/ban.html',
        'balinese/block.html': 'bali/block.html',

        'bamum/index.html': 'bamu/index.html',
        'bamum/bax.html': 'bamu/bax.html',
        'bamum/block.html': 'bamu/block.html',

        'bassavah/index.html': 'bass/index.html',
        'bassavah/bsq.html': 'bass/bsq.html',
        'bassavah/block.html': 'bass/block.html',

        'bengali/index.html': 'beng/index.html',
        'bengali/bn.html': 'beng/bn.html',
        'bengali/block.html': 'beng/block.html',

        'buginese/index.html': 'bugi/index.html',
        'buginese/bug.html': 'bugi/bug.html',
        'buginese/block.html': 'bugi/block.html',

        'cherokee/index.html': 'cher/index.html',
        'cherokee/chr.html': 'cher/chr.html',
        'cherokee/block.html': 'cher/block.html',

        'cyrillic/index.html': 'cyrl/index.html',
        'cyrillic/mn.html': 'cyrl/mn.html',
        'cyrillic/ru.html': 'cyrl/ru.html',
        'cyrillic/uk.html': 'cyrl/uk.html',
        'cyrillic/block.html': 'cyrl/block.html',

        'devanagari/index.html': 'deva/index.html',
        'devanagari/hi.html': 'deva/hi.html',
        'devanagari/ks.html': 'deva/ks.html',
        'devanagari/block.html': 'deva/block.html',

        'ethiopic/index.html': 'ethi/index.html',
        'ethiopic/am.html': 'ethi/am.html',
        'ethiopic/block.html': 'ethi/block.html',

        'georgian/index.html': 'geor/index.html',
        'georgian/ka.html': 'geor/ka.html',
        'georgian/block.html': 'geor/block.html',

        'greek/index.html': 'grek/index.html',
        'greek/el.html': 'grek/el.html',
        'greek/block.html': 'grek/block.html',

        'gujarati/index.html': 'gujr/index.html',
        'gujarati/gu.html': 'gujr/gu.html',
        'gujarati/block.html': 'gujr/block.html',

        'gurmukhi/index.html': 'guru/index.html',
        'gurmukhi/pa.html': 'guru/pa.html',
        'gurmukhi/block.html': 'guru/block.html',

        'hangul/index.html': 'kore/ko.html',

        'han/index.html': 'hani/index.html',

        'hebrew/index.html': 'hebr/index.html',
        'hebrew/he.html': 'hebr/he.html',
        'hebrew/block.html': 'hebr/block.html',

        'javanese/index.html': 'java/index.html',
        'javanese/jv.html': 'java/jv.html',
        'javanese/block.html': 'java/block.html',

        'khmer/index.html': 'khmr/index.html',
        'khmer/km.html': 'khmr/km.html',
        'khmer/block.html': 'khmr/block.html',

        'lao/index.html': 'laoo/index.html',
        'lao/lo.html': 'laoo/lo.html',
        'lao/block.html': 'laoo/block.html',

        'latin/index.html': 'latn/index.html',
        'latin/bm.html': 'latn/bm.html',
        'latin/ha.html': 'latn/ha.html',
        'latin/ff.html': 'latn/ff.html',
        'latin/block.html': 'latn/block.html',

        'malayalam/index.html': 'mlym/index.html',
        'malayalam/ml.html': 'mlym/ml.html',
        'malayalam/block.html': 'mlym/block.html',

        'mandaic/index.html': 'mand/index.html',
        'mandaic/mid.html': 'mand/mid.html',
        'mandaic/block.html': 'mand/block.html',

        'mongolian/index.html': 'mong/index.html',
        'mongolian/mn.html': 'mong/mn.html',
        'mongolian/block.html': 'mong/block.html',

        'myanmar/index.html': 'mymr/index.html',
        'myanmar/my.html': 'mymr/my.html',
        'myanmar/shn.html': 'mymr/shn.html',
        'myanmar/block.html': 'mymr/block.html',

        'newtailue/index.html': 'talu/index.html',
        'newtailue/khb.html': 'talu/khb.html',
        'newtailue/block.html': 'talu/block.html',

        'nko/index.html': 'nkoo/index.html',
        'nko/nqo.html': 'nkoo/nqo.html',
        'nko/block.html': 'nkoo/block.html',

        'oriya/index.html': 'orya/index.html',
        'oriya/or.html': 'orya/or.html',
        'oriya/block.html': 'orya/block.html',

        'osage/index.html': 'osge/index.html',
        'osage/osa.html': 'osge/osa.html',
        'osage/block.html': 'osge/block.html',

        'santali/index.html': 'olck/index.html',
        'santali/sat.html': 'olck/sat.html',
        'santali/block.html': 'olck/block.html',

        'sinhala/index.html': 'sinh/index.html',
        'sinhala/sat.html': 'sinh/sat.html',
        'sinhala/block.html': 'sinh/block.html',

        'sundanese/index.html': 'sund/index.html',
        'sundanese/su.html': 'sund/su.html',
        'sundanese/block.html': 'sund/block.html',

        'syriac/index.html': 'syrc/index.html',
        'syriac/syr.html': 'syrc/syr.html',
        'syriac/aii.html': 'syrc/aii.html',
        'syriac/tru.html': 'syrc/tru.html',
        'syriac/block.html': 'syrc/block.html',

        'taile/index.html': 'tale/index.html',
        'taile/tdd.html': 'tale/tdd.html',
        'taile/block.html': 'tale/block.html',

        'taitham/index.html': 'lana/index.html',
        'taitham/nod.html': 'lana/nod.html',
        'taitham/kkh.html': 'lana/kkh.html',
        'taitham/block.html': 'lana/block.html',

        'taiviet/index.html': 'tavt/index.html',
        'taiviet/blt.html': 'tavt/blt.html',
        'taiviet/block.html': 'tavt/block.html',

        'tamil/index.html': 'taml/index.html',
        'tamil/ta.html': 'taml/ta.html',
        'tamil/block.html': 'taml/block.html',

        'telugu/index.html': 'telu/index.html',
        'telugu/te.html': 'telu/te.html',
        'telugu/block.html': 'telu/block.html',

        'thaana/index.html': 'thaa/index.html',
        'thaana/dv.html': 'thaa/dv.html',
        'thaana/block.html': 'thaa/block.html',

        'tibetan/index.html': 'tibt/index.html',
        'tibetan/bo.html': 'tibt/bo.html',
        'tibetan/block.html': 'tibt/block.html',

        'tifinagh/index.html': 'tfng/index.html',
        'tifinagh/zgh.html': 'tfng/zgh.html',
        'tifinagh/block.html': 'tfng/block.html',

        'vai/index.html': 'vaii/index.html',
        'vai/vai.html': 'vaii/vai.html',
        'vai/block.html': 'vaii/block.html',


        
        
        
        }*/


    function getFilename (locn) {


    // get the end of the pathname
    fields = locn.split('/')
    currentLocation = fields[fields.length-2] + '/' + fields[fields.length-1]

    console.log('locn',locn)
    console.log('fields',fields)
    console.log('currentLocation',currentLocation)
    
    if (currentLocation.endsWith('/')) currentLocation += 'index'
    if (! currentLocation.includes('.html')) currentLocation  += '.html'
    console.log('Final currentLocation',currentLocation)

    var namelist = {
        'adlam/index.html': 'adlm/index.html',
        'adlam/fuf.html': 'adlm/fuf.html',
        'adlam/block.html': 'adlm/block.html',
        
        'armenian/index.html': 'armn/index.html',
        'armenian/hy.html': 'armn/hy.html',
        'armenian/block.html': 'armn/block.html',
        
        'arabic/index.html': 'arab/index.html',
        'arabic/arb.html': 'arab/arb.html',
        'arabic/pes.html': 'arab/pes.html',
        'arabic/ks.html': 'arab/ks.html',
        'arabic/ug.html': 'arab/ug.html',
        'arabic/ur.html': 'arab/ur.html',
        'arabic/ha.html': 'arab/ha.html',
        'arabic/block.html': 'arab/block.html',
        
        'balinese/index.html': 'bali/index.html',
        'balinese/ban.html': 'bali/ban.html',
        'balinese/block.html': 'bali/block.html',

        'bamum/index.html': 'bamu/index.html',
        'bamum/bax.html': 'bamu/bax.html',
        'bamum/block.html': 'bamu/block.html',

        'bassavah/index.html': 'bass/index.html',
        'bassavah/bsq.html': 'bass/bsq.html',
        'bassavah/block.html': 'bass/block.html',

        'bengali/index.html': 'beng/index.html',
        'bengali/bn.html': 'beng/bn.html',
        'bengali/block.html': 'beng/block.html',

        'buginese/index.html': 'bugi/index.html',
        'buginese/bug.html': 'bugi/bug.html',
        'buginese/block.html': 'bugi/block.html',

        'cherokee/index.html': 'cher/index.html',
        'cherokee/chr.html': 'cher/chr.html',
        'cherokee/block.html': 'cher/block.html',

        'cyrillic/index.html': 'cyrl/index.html',
        'cyrillic/mn.html': 'cyrl/mn.html',
        'cyrillic/ru.html': 'cyrl/ru.html',
        'cyrillic/uk.html': 'cyrl/uk.html',
        'cyrillic/block.html': 'cyrl/block.html',

        'devanagari/index.html': 'deva/index.html',
        'devanagari/hi.html': 'deva/hi.html',
        'devanagari/ks.html': 'deva/ks.html',
        'devanagari/block.html': 'deva/block.html',

        'ethiopic/index.html': 'ethi/index.html',
        'ethiopic/am.html': 'ethi/am.html',
        'ethiopic/block.html': 'ethi/block.html',

        'georgian/index.html': 'geor/index.html',
        'georgian/ka.html': 'geor/ka.html',
        'georgian/block.html': 'geor/block.html',

        'greek/index.html': 'grek/index.html',
        'greek/el.html': 'grek/el.html',
        'greek/block.html': 'grek/block.html',

        'gujarati/index.html': 'gujr/index.html',
        'gujarati/gu.html': 'gujr/gu.html',
        'gujarati/block.html': 'gujr/block.html',

        'gurmukhi/index.html': 'guru/index.html',
        'gurmukhi/pa.html': 'guru/pa.html',
        'gurmukhi/block.html': 'guru/block.html',

        'hangul/index.html': 'kore/ko.html',

        'hebrew/index.html': 'hebr/index.html',
        'hebrew/he.html': 'hebr/he.html',
        'hebrew/block.html': 'hebr/block.html',

        'javanese/index.html': 'java/index.html',
        'javanese/jv.html': 'java/jv.html',
        'javanese/block.html': 'java/block.html',

        'khmer/index.html': 'khmr/index.html',
        'khmer/km.html': 'khmr/km.html',
        'khmer/block.html': 'khmr/block.html',

        'lao/index.html': 'laoo/index.html',
        'lao/lo.html': 'laoo/lo.html',
        'lao/block.html': 'laoo/block.html',

        'latin/index.html': 'latn/index.html',
        'latin/bm.html': 'latn/bm.html',
        'latin/ha.html': 'latn/ha.html',
        'latin/ff.html': 'latn/ff.html',
        'latin/block.html': 'latn/block.html',

        'malayalam/index.html': 'mlym/index.html',
        'malayalam/ml.html': 'mlym/ml.html',
        'malayalam/block.html': 'mlym/block.html',

        'mandaic/index.html': 'mand/index.html',
        'mandaic/mid.html': 'mand/mid.html',
        'mandaic/block.html': 'mand/block.html',

        'mongolian/index.html': 'mong/index.html',
        'mongolian/mn.html': 'mong/mn.html',
        'mongolian/block.html': 'mong/block.html',

        'myanmar/index.html': 'mymr/index.html',
        'myanmar/my.html': 'mymr/my.html',
        'myanmar/shn.html': 'mymr/shn.html',
        'myanmar/block.html': 'mymr/block.html',

        'newtailue/index.html': 'talu/index.html',
        'newtailue/khb.html': 'talu/khb.html',
        'newtailue/block.html': 'talu/block.html',

        'nko/index.html': 'nkoo/index.html',
        'nko/nqo.html': 'nkoo/nqo.html',
        'nko/block.html': 'nkoo/block.html',

        'oriya/index.html': 'orya/index.html',
        'oriya/or.html': 'orya/or.html',
        'oriya/block.html': 'orya/block.html',

        'osage/index.html': 'osge/index.html',
        'osage/osa.html': 'osge/osa.html',
        'osage/block.html': 'osge/block.html',

        'santali/index.html': 'olck/index.html',
        'santali/sat.html': 'olck/sat.html',
        'santali/block.html': 'olck/block.html',

        'sinhala/index.html': 'sinh/index.html',
        'sinhala/sat.html': 'sinh/sat.html',
        'sinhala/block.html': 'sinh/block.html',

        'sundanese/index.html': 'sund/index.html',
        'sundanese/su.html': 'sund/su.html',
        'sundanese/block.html': 'sund/block.html',

        'syriac/index.html': 'syrc/index.html',
        'syriac/syr.html': 'syrc/syr.html',
        'syriac/aii.html': 'syrc/aii.html',
        'syriac/tru.html': 'syrc/tru.html',
        'syriac/block.html': 'syrc/block.html',

        'taile/index.html': 'tale/index.html',
        'taile/tdd.html': 'tale/tdd.html',
        'taile/block.html': 'tale/block.html',

        'taitham/index.html': 'lana/index.html',
        'taitham/nod.html': 'lana/nod.html',
        'taitham/kkh.html': 'lana/kkh.html',
        'taitham/block.html': 'lana/block.html',

        'taiviet/index.html': 'tavt/index.html',
        'taiviet/blt.html': 'tavt/blt.html',
        'taiviet/block.html': 'tavt/block.html',

        'tamil/index.html': 'taml/index.html',
        'tamil/ta.html': 'taml/ta.html',
        'tamil/block.html': 'taml/block.html',

        'telugu/index.html': 'telu/index.html',
        'telugu/te.html': 'telu/te.html',
        'telugu/block.html': 'telu/block.html',

        'thaana/index.html': 'thaa/index.html',
        'thaana/dv.html': 'thaa/dv.html',
        'thaana/block.html': 'thaa/block.html',

        'tibetan/index.html': 'tibt/index.html',
        'tibetan/bo.html': 'tibt/bo.html',
        'tibetan/block.html': 'tibt/block.html',

        'tifinagh/index.html': 'tfng/index.html',
        'tifinagh/zgh.html': 'tfng/zgh.html',
        'tifinagh/block.html': 'tfng/block.html',

        'vai/index.html': 'vaii/index.html',
        'vai/vai.html': 'vaii/vai.html',
        'vai/block.html': 'vaii/block.html',


        }

    if (namelist[currentLocation]) return namelist[currentLocation] 
    }


function addPageFeatures () {


    // ============== REDIRECT TO v29 PAGES ===========================
    applyRedirect()



    initialiseSummary(window.blockDir, window.langTag, window.scriptSummaryTableName, window.explainerDir)
    //autoTransliterate(langTag)
    makeFontChanger(langTag, scriptTag, pageWebfonts, defaultSize)
    checkParameters()
    
    if (window.autoIndex) {
        makeIndexObject()
        makeMarkupForSection('index_letters')
        makeMarkupForSection('index_cchars')
        makeMarkupForSection('index_numbers')
        makeMarkupForSection('index_punctuation')
        makeMarkupForSection('index_symbols')
        makeMarkupForSection('index_other')
        window.index = {}
        }
    
    makeCharDataObj()
    pointToSummaryPages()
    
    marks = new Set()
    setMarks()
    
    // empty large global variables
    window.fontDB = []
    defList = []
    fontInfo = {}
    }


function initialiseSummary (blockDirectory, lang, tableName, dir) {
    if (traceSet.has('initialiseSummary') || traceSet.has('all')) console.log('initialiseSummary(',blockDirectory, lang, tableName, dir,')')
    
    //set accessibility defaults
    if (localStorage['docsAccess']) access = JSON.parse(localStorage['docsAccess']) 
    if (access.contrast === 'high') {
        document.querySelector('body').classList.add('contrast')
        document.getElementById('contrastLow').classList.remove('access_selected')
        document.getElementById('contrastDark').classList.remove('access_selected')
        document.getElementById('contrastHigh').classList.add('access_selected')
        }
    else if (access.contrast === 'dark') {
        document.querySelector('body').classList.add('dark')
        document.getElementById('contrastLow').classList.remove('access_selected')
        document.getElementById('contrastHigh').classList.remove('access_selected')
        document.getElementById('contrastDark').classList.add('access_selected')
        }
    document.querySelector('html').style.fontSize = access.fontsize+'px'
    document.getElementById('accessFontsize').value = access.fontsize
    console.log(access.fontsize,document.getElementById('accessFontsize').value)


	doHeadersFooters(dir)
    makeIndexIntro(document.getElementById('index_intro'))
    makeTables(lang)
	if (typeof addExamples !== 'undefined') addExamples(lang)
    initialiseShowNames(document, blockDirectory, '')
    if (document.getElementById('features')) document.getElementById('features').innerHTML = makeSidePanel(tableName,"")
    createtoc(3)
	removeEditorNotes()
	addDefinitions()
	if (typeof(contentPrompts) !== 'undefined') setContentPrompts()
	setFindIPA()
	setupBlockLinks()
	setTranslitToggle()
	setCharOnclicks()
	//if (typeof addExamples !== 'undefined') addExamples(lang)
	if (typeof reflist !== 'undefined') createReferences(lang)
	//if (typeof reflist !== 'undefined') chooseRelevantRefs()
    if (typeof scriptLanguageList !== 'undefined') makeScriptLanguageList()
    }



function initialiseIndex () {
    // called from index.html pages to set up page after load

    // ============== REDIRECT TO v29 PAGES ===========================
    applyRedirect()




    makeScriptLanguageList()
    
    // add fragids for legacy URLs to all links to orthography descriptions
    olinks = document.querySelectorAll('#olinks a')
    for (i=0;i<olinks.length;i++) olinks[i].href += window.location.hash

    }


function setMarks () {
    // sets the global variable marks as a set containing all combining marks in the spreadsheet
    for (var char in spreadsheetRows) {
        //console.log(char,spreadsheetRows[char][cols['class']])
        if (spreadsheetRows[char][cols['class']].startsWith('M')) window.marks.add(char)
        }
    return
    }


function setCharOnclicks () {
	// all links with target=c should open descriptions in the panel
    if (traceSet.has('setCharOnclicks') || traceSet.has('all')) console.log('setCharOnclicks(',') All links with target=c should open descriptions in the panel')

	var links = document.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
	}

function setupBlockLinks () {
	// set target attribute for links that point to characters in the block page
    if (traceSet.has('setupBlockLinks') || traceSet.has('all')) console.log('setupBlockLinks(',') Set target attribute for links that point to characters in the block page')
    
	var links = document.querySelectorAll('.codepoint a, .codepoint code')
	for (var i=0;i<links.length;i++) if (links[i].target != null) links[i].target = 'c'
	}





function setFindIPA () { // test extension to map stuff
	// makes ipa characters in sounds charts indicate locations they are used
    if (traceSet.has('setFindIPA') || traceSet.has('all')) console.log('setFindIPA(',') Make ipa characters in sounds charts indicate locations they are used')

	var listItems = document.querySelectorAll('.codepoint span, .codepoint bdi')
	for (var i=0;i<listItems.length;i++) {
        if (listItems[i].parentNode.classList.contains('codepoint')) listItems[i].onclick = makeFootnoteIndex
        }
	var listItems = document.querySelectorAll('.ipaTable .ipa, .ipaTable .allophone')
	for (i=0;i<listItems.length;i++) listItems[i].onclick = findIPA
	var listItems = document.querySelectorAll('.ipaSVG .ipa, .ipaSVG .allophone')
	for (i=0;i<listItems.length;i++) listItems[i].onclick = findIPA
	}



function shareCodeLinks (charList, script, charApp) {
    // provides some of the repetitive code for listAllIndexCharacters
    
    out = `<td class="indexShareLinks" style="position:relative;" 
    onmouseover="this.lastChild.style.display='block'" 
    onmouseout="this.lastChild.style.display='none'"><img src="../common/icons/transfer_small.png" alt="Send characters." title="Send characters." class="ulink">
    <div class="popup" style="position: absolute; right: 0px; display: none;">
        <div><a href="/scripts/apps/listcategories/?chars=`+charList+`" target="_blank">General Category</a></div>
        <div><a href="/app-analysestring/?chars=`+charList+`" target="_blank">Show details</a></div>
        <div><a href="/uniview?charlist=`+charList+`" target="_blank">Show characters in UniView</a></div>
        <div><a href="/app-listcharacters?chars=`+charList+`" target="_blank">List characters by block</a></div>
        <div><a href="/scripts/fontlist?script=`+script+`&amp;text=`+charList+`" target="_blank">Send to Font lister</a></div>
        <div><a target="_blank" href="/pickers/`+charApp+`/?showFonts=true&amp;text=`+charList+`">Show in character app</a></div></td>`
    return out
}






function listAllIndexCharacters (scriptISO, pickerName) {
    // creates the showStats table
    
    var out = ''
    var list
    
    // find all the characters in the index
    var allItems = ''
    var itemArray = []
    listItems = document.getElementById('index').querySelectorAll('.listItem')
    for (i=0;i<listItems.length;i++) itemArray.push(listItems[i].textContent)
    const uniqueSet = new Set(itemArray)
    allItems = [...uniqueSet].join(' ')
    if (listItems.length !== [...uniqueSet].length) console.log('NOTE: Index contains ',listItems.length,' items, but only ',[...uniqueSet].length,' unique characters.')
    
    //for (i=0;i<listItems.length;i++) allItems += listItems[i].textContent+' '
	out += '<tr><th>All</th><td id="allCharList">'+allItems+'</td><td id="allCharListTotal">'+[...uniqueSet].length+'</td></tr>'
    out += '<tr><th colspan="3" style="font-weight:bold; text-align:start;">&nbsp;</td>'
    out += '</tr>'
    
    // find the characters of each type
    list = [...getOrthographyList('.characterBox')]
	out += '<tr><th>Main</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'
    
    fullList = list

    list = [...getOrthographyList('.auxiliaryBox')]
	if (list.length > 0) out += '<tr><th>Infrequent</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>'+ shareCodeLinks(list.join(''),scriptISO,pickerName)+'</tr>'
    
    fullList += list

    list = [...getOrthographyList('.formattingBox')]
	if (list.length > 0) out += '<tr><th>Formatting</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.archaicBox')]
	if (list.length > 0) out += '<tr><th>Archaic</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.foreignBox')]
	if (list.length > 0) out += '<tr><th>Foreign</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.otherBox')]
	if (list.length > 0) out += '<tr><th>Other</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'

    list = [...getOrthographyList('.deprecatedBox')]
	if (list.length > 0) out += '<tr><th>Deprecated</th><td id="allCharList">'+list.join(' ')+'</td><td id="allCharListTotal">'+list.length+'</td>' + shareCodeLinks(list.join(''),scriptISO,pickerName) + '</tr>'
	
	document.getElementById('charCountList').innerHTML = out
    }







function pointToSummaryPages () {
    // create links for various anchors such as line-breaking properties etc
    
    if (document.getElementById('showLinebreaks')) document.getElementById('showLinebreaks').href = '../apps/listlinebreak/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))

    if (document.getElementById('showBidiClass')) document.getElementById('showBidiClass').href = '../apps/listbidi/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))
	}








function doHeadersFooters (dir) {
    if (traceSet.has('doHeadersFooters') || traceSet.has('all')) console.log('doHeadersFooters(',dir,') Add links to top of document')
	// adds links to top of document
	// dir is of the form arabic/index or arabic/urdu

	if (document.getElementById('versionTop') === null) return
	

	//parse the dir
	var filename = ''
	var directory = ''
	var path = dir.split('/')
	directory = path[0]
	if (path.length === 1) {
		filename = path[0]
		}
	else {
		filename = path[1]
		}
		

	var out = '&bull; recent changes <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages" title="Show commits for the whole scripts repository.">scripts</a>/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'" title="Show commits for scripts/'+directory+'.">'+directory+'</a>'
	if (path.length > 1) out += '/<a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'/'+filename+'.html" title="Show commits for scripts/'+filename+'.">'+filename+'</a>'
	
	out += ' &bull; leave a <a target="_blank" href="https://github.com/r12a/scripts/issues/new?title=['+dir.replace(/index/,'')+']%20%20BRIEF_TITLE_GOES_HERE&body=%5Bsource%5D%20https%3A%2F%2Fr12a.github.io%2Fscripts%2F'+dir+'%0A%0A" title="Leave a comment.">comment</a>'
	
	document.getElementById('versionTop').innerHTML = out
	
	
	out = ''
	out += 'See <a target="_blank" href="https://github.com/r12a/scripts/commits/gh-pages/'+directory+'">recent changes</a>. &nbsp;&bull;&nbsp; Make a <a href="https://github.com/r12a/scripts/issues/new?title=%5B'+dir+'%5D%20TITLE_GOES_HERE&body=Comment%20on%20http%3A%2F%2Fr12a.github.io%2Fscripts%2F'+directory+'%2F%0A%0A" target="_blank">comment</a>. &nbsp;&bull;&nbsp; Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a>.</span></div>'
	
	
	document.getElementById('version').innerHTML = out
	}





function addDefinitions () {
	// adds text for definitions
	
	var nodes = document.querySelectorAll('.definitionStub')
	for (let i=0;i<nodes.length;i++) nodes[i].innerHTML = defList[nodes[i].id.replace(/^def-/,'')]
	}



function removeEditorNotes () {
	// removes editor's notes from the published version: they are only visible when using the localhost domain
	
	if (! window.location.origin.includes('localhost')) { 
		var nodes = document.querySelectorAll('.ednote')
		for (let i=0;i<nodes.length;i++) nodes[i].style.display = 'none'
		}
	}





function makeSidePanel (id, otherlinks) {
	if (typeof langs === 'undefined') return
	if (typeof langs[id] === 'undefined') { console.log('Charuse data not found. ID sent to makeSidePanel was ',id); return }
    
    var letters, marks, punctuation, symbols, others, numbers, aux, total
    var out, records, fields, values
	
    // get character counts in a way that works around surrogates
	letters = marks = punctuation = symbols = others = numbers = aux = 0
	langs[id].letter ? letters = [...langs[id].letter].length : 0
	langs[id].letteraux ? letters += [...langs[id].letteraux].length : 0
	langs[id].mark ? marks = [...langs[id].mark].length : 0
	langs[id].markaux ? marks += [...langs[id].markaux].length : 0
	langs[id].punctuation ? punctuation = [...langs[id].punctuation].length : 0
	langs[id].punctuationaux ? punctuation += [...langs[id].punctuationaux].length : 0
	langs[id].symbol ? symbols = [...langs[id].symbol].length : 0
	langs[id].symbolaux ? symbols += [...langs[id].symbolaux].length : 0
	//langs[id].other ? others = [...langs[id].other].length : 0
	langs[id].other ? others = langs[id].other.length : 0
	langs[id].number ? numbers = [...langs[id].number].length : 0
	langs[id].numberaux ? numbers += [...langs[id].numberaux].length : 0
	langs[id].aux ? aux = [...langs[id].aux].length : 0
	
	total = letters + marks + punctuation + symbols + others + numbers 
	
	out = '<table>'
	out += '<tbody id="featureTableBody">'
	out += '<tr><th>Script code</th><td>'+langs[id].script+'</td></tr>'
	out += '<tr><th>Language code</th><td>'+id+'</td></tr>'
	out += '<tr><th>Script type</th><td class="tableHighlight">'+langs[id].type+'</td></tr>'
	out += '<tr><th>Total characters</th><td class="tableHighlight" style="font-size: 150%;">'+parseInt(total).toLocaleString()
	if (aux>0) out += ' <span style="font-size: 70%">+ '+aux+'</span>'
	out += '</td></tr>'
	out += '<tr><th>Letters</th><td class="tableHighlight">'+letters+'</td></tr>'

	
	out += '<tr><th>Combining marks</th><td'
	if (marks!==0) out += ' class="tableHighlight"'
	out += '>'+marks+'</td></tr>'
	
	if (punctuation!==0) out += '<tr><th>Punctuation</th><td class="tableHighlight">'+punctuation+'</td></tr>'
	
	if (symbols!==0) out += '<tr><th>Symbols</th><td class="tableHighlight">'+symbols+'</td></tr>'

	if (others!==0) out += '<tr><th>Format codes</th><td class="tableHighlight">'+others+'</td></tr>'

	out += '<tr><th>Native digits</th><td'
	if (numbers!==0) out += ' class="tableHighlight"'
	out += '>'+numbers+'</td></tr>'

	out += '<tr><th>Possible other</th><td>'+aux+'</td></tr>'
	
	out += '<tr><th colspan="2">Character counts exclude ASCII.</td></tr>'
	
	out += '<tr style="line-height: .4;"><th>&nbsp;</th><td style="border:0;">&nbsp;</td></tr>'

    if (langs[id].vowels) {
        records = langs[id].vowels.split(' ')
		out += '<tr><th>Vowels</th><td class="tableHighlight">'
        for (i=0;i<records.length;i++) {
            fields = records[i].split(':')
            if (fields[1] !== 'y') out += fields[1]
            switch (fields[0]) {
                case 'let': out += ' letters'; break
                case 'inh': out += ' inherent vowel'; break
                case 'vs': out += ' vowel sign marks'; break
                case 'vsl': out += ' vowel sign letters'; break
                case 'venc': out += ' visually-encoded'; break
                case 'ind': out += ' independent vowels'; break
                case 'ml': out += ' matres lectionis'; break
                case 'cm': out += ' combining marks'; break
                case 'hcm': out += ' hidden diacritics'; break
                case 'syl': out += ' syllables'; break

                case 'base': out += ' base'; break
                case 'pre': out += ' pre-base glyphs'; break
                case 'circ': out += ' circumgraphs'; break
                case 'comp': out += ' composite vowels'; break
                case 'voc': out += ' vocalics'; break
                }
            if (i<records.length) out += '<br>'
            }
        out += '</td></tr>'
		}

    if (langs[id].medials) {
        records = langs[id].medials.split(' ')
		out += '<tr><th>Medials</th><td class="tableHighlight">'
        for (i=0;i<records.length;i++) {
            fields = records[i].split(':')
            if (fields[1] !== 'y') out += fields[1]
            switch (fields[0]) {
                case 'cm': out += ' diacritics'; break
                case 'sj': out += ' subjoined letters'; break
                case 'vs': out += ' dedicated letters'; break
                }
            if (i<records.length) out += '<br>'
            }
        out += '</td></tr>'
		}

    if (langs[id].finals) {
        records = langs[id].finals.split(' ')
		out += '<tr><th>Finals</th><td class="tableHighlight">'
        for (i=0;i<records.length;i++) {
            fields = records[i].split(':')
            if (fields[1] !== 'y') out += fields[1]
            switch (fields[0]) {
                case 'cm': out += ' diacritics'; break
                case 'let': out += ' dedicated letters'; break
                case 'ss': out += ' superscript letters'; break
                case 'vk': out += ' vowel killer'; break
                }
            if (i<records.length) out += '<br>'
            }
        out += '</td></tr>'
		}

    if (langs[id].clusters) {
        values = langs[id].clusters.split(' ')
		out += '<tr><th>Consonant clusters</th><td class="tableHighlight">'
        for (i=0;i<values.length;i++) {
            switch (values[i]) {
                case 'vir': out += 'visible virama'; break
                case 'inv': out += 'hidden conjunct maker'; break
                case 'stk': out += 'stacked glyphs'; break
                case 'cnj': out += 'conjoined glyphs'; break
                case 'lig': out += 'ligatures'; break
                case 'tcg': out += 'touching glyphs'; break
                case 'rax': out += 'special RA handling'; break
                case 'mrk': out += 'vowel-killer diacritic'; break
                case 'let': out += 'special letters'; break
                case 'unm': out += 'unmarked'; break
                }
            if (i<values.length) out += '<br>'
            }
        out += '</td></tr>'
		}

	out += '<tr><th>Case distinction</th><td'
	if (langs[id].cs!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].cs+'</td></tr>'
	
	out += '<tr><th>Cursive script</th><td'
	if (langs[id].cursive!=='no') out += ' class="tableHighlight"'
	out += '>'+langs[id].cursive+'</td></tr>'
	
	out += '<tr><th>Text direction</th><td'
	if (langs[id].direction!=='ltr') out += ' class="tableHighlight"'
	out += '>'+langs[id].direction+'</td></tr>'
	
	out += '<tr><th>Baseline</th><td'
	if (langs[id].baseline!=='mid') out += ' class="tableHighlight"'
	out += '>'+langs[id].baseline+'</td></tr>'
	
	out += '<tr><th>Word separator</th><td'
	if (langs[id].wordsep!=='space') out += ' class="tableHighlight"'
	out += '>'+langs[id].wordsep
    if (langs[id].wordsepChar) out += ' '+langs[id].wordsepChar
    out += '</td></tr>'
	
	out += '<tr><th>Wraps at</th><td'
	if (langs[id].wrap!=='word') out += ' class="tableHighlight"'
	out += '>'+langs[id].wrap+'</td></tr>'
	
	out += '<tr><th>Hyphenation</th><td'
	if (langs[id].hyphenation!=='word') out += ' class="tableHighlight"'
	out += '>'+langs[id].hyphenation
    if (langs[id].hyphen) out += ' '+langs[id].hyphen
    out += '</td></tr>'
	
    if (langs[id].justification) {
        values = langs[id].justification.split(' ')
		out += '<tr><th>Justification</th><td class="tableHighlight">'
        for (i=0;i<values.length;i++) {
            switch (values[i]) {
                case 'sp': out += 'at spaces/wordbreaks'; break
                case 'str': out += 'baseline stretching'; break
                case 'sw': out += 'swashes'; break
                case 'pad': out += 'character padding'; break
                case 'ic': out += 'between characters'; break
                case 'ig': out += 'between glyphs'; break
                case 'none': out += 'none'; break
                case '?': out += '?'; break
                }
            if (i<values.length) out += '<br>'
            }
        out += '</td></tr>'
		}
	
	
	out += '<tr><th>Native speakers</th><td>'+parseInt(langs[id].speakers.replace(/~/g,'')).toLocaleString()+'</td></tr>'
	
	out += '<tr><th>Region</th><td>'+langs[id].region+'</td></tr>'
	
	
	
	out += '</tbody>'
	out += '</table>'

	out += '<p class="ctlink"><a href="../featurelist/">See the comparison table</a></p>'
	out += '<p class="ctlink"><a href="../featurelist/#key">See the key</a></p>'
	
	langs = {}
	
	return out
	}




	






function makeTables (lang) {
    if (traceSet.has('makeTables') || traceSet.has('all')) console.log('makeTables(',lang,') Create the lists of characters in yellow, etc. boxes')

    if (typeof window.spreadsheet == 'undefined') {
		console.log("Spreadsheet undefined.")
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


    var tables, node, chars, info, bicameral, out, char, indexline
    
    tables = document.querySelectorAll('.auto')

	// for each figure in the document...
    for (let t=0;t<tables.length;t++) {
        replaceStuff(tables[t])
        }
    }



function getStatus (token) {
    // returns expanded strings for the status column in spreadsheet
    switch (token) {
    case 'r': status = 'rare'; break;
    case 'i': status = 'infreq.'; break;
    case 'l': status = 'loan'; break;
    case 't': status = 'transc.'; break;
    case 'a': status = 'archaic'; break;
    case 'u': status = 'unused'; break;
    case 'o': status = 'obsolete'; break;
    case 'd': status = 'deprecated'; break;
    default: status = '&nbsp;'
    }

    return status
    }


function replaceStuff (node) {

    var bicameral = false
    var showFirst = false
    //console.log(node)

    // check whether this is an index line
    if (node.classList.contains('indexline')) var indexline = true
    else indexline = false

    // populate the chars array with characters & gather additional info
    //chars = node.dataset.chars.split('␣')
    chars = node.textContent.split('␣')
    if (typeof node.dataset.cols === 'undefined') var info = ''
    else info = node.dataset.cols
    if (node.className.includes('bicameral')) bicameral = true // note: phase this out in favour of data-select=last
    else bicameral = false
    if (node.dataset.select && node.dataset.select == 'last') bicameral = true
    else if (node.dataset.select) showFirst = true
    if (node.className.includes('vowelcluster')) var vowelcluster = true // this should be phased out
    else vowelcluster = false
    if (node.dataset.ignore) var ignorableChar = node.dataset.ignore.codePointAt(0)
    else ignorableChar = ''
    if (node.dataset.notes) {
        var notes = node.dataset.notes.split(',')
        }
    else notes = []
    if (node.dataset.extra) {
        var extra = node.dataset.extra.split('␣')
        var extraLang = extra.pop()
        }
    else extra = []
    if (node.dataset.ipa) {
        ipa = node.dataset.ipa.split(',')
        }
    else ipa = []
    if (node.dataset.translit) {
        var translit = node.dataset.translit.split('␣')
        }
    else translit = []
    if (node.dataset.links) {
        var links = node.dataset.links.split(',')
        }
    else links = []
    var out = ''

    // make the summary count link
    if (chars.length > 1) {
        var length = chars.length
        for (let j=0;j<chars.length;j++) if (chars[j] === ' ') length-- // ignore spaces
        out += '<div class="listAll" onClick="listAll(this, \''+lang+'\')">list '
        if (length === 2) out += 'both'
        else out += 'all '+length
        out += '</div>'
        }

    // find out whether this table includes status information
    var showStatus = false
    for (c=0;c<chars.length;c++) {
        if (window.spreadsheetRows[chars[c]] && window.spreadsheetRows[chars[c]][cols.status] && window.spreadsheetRows[chars[c]][cols.status] !== '') showStatus = true
        }
    
    // start building the listArray
    out += '<div class="listArray">'

    // for each item ...
    for (let i=0;i<chars.length;i++) { 
        if (bicameral || showFirst) {
            var charList = [... chars[i]]
            if (bicameral) char = charList[1]
            else char = charList[0]
            }
        else char = chars[i]

        // create an id attribute for the listPairs in the index
        if (node.closest("#index")) var indexId = ' id="index'+chars[i]+'"'
        else indexId = ''

        if (node.dataset.lang) out += '<div class="listPair"'+indexId+'><span class="listItem" lang="'+node.dataset.lang+'">'+chars[i]+'</span>'
        else out += '<div class="listPair"'+indexId+'><span class="listItem" lang="'+lang+'">'+chars[i]+'</span>'


        // leave a blank where a space is used
        if (chars[i] === ' ') {
            out += '&nbsp;</span></div>'
            continue
            }

        // print any second row of characters
        if (extra.length > 0) {
            if (extra[i]) out += '<span class="listExtra" lang="'+extraLang+'">'+extra[i]+'</span>'
            else out += '<span>&nbsp;</span>'
            }

        
        // status line, if needed
        if (showStatus) {
            var status = '&nbsp;'
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.status]) {
                status = getStatus(window.spreadsheetRows[char][cols.status])
                }
            out += `<span class="listItemType">${ status }</span>`
            }


        if (info.includes('ipa')) { 
        //if (window.spreadsheetRows[char]) console.log('ipa',char,window.spreadsheetRows[char][cols.ipaLoc])
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ipaLoc]) ch = window.spreadsheetRows[char][cols.ipaLoc].toLowerCase()
            else ch = '&nbsp;'
            if (ch === '&nbsp;') out += '<span>&nbsp;</span>'
            else out += '<span class="listIPA">'+ch.replace(/ /g,' ')+'</span>'
            //else out += '<span class="listIPA">'+ch.replace(/ /g,'<i>~</i>')+'</span>'
            }

        if (ipa.length > 0) {
            if (ipa[i]) out += '<span class="listIPA">'+ipa[i]+'</span>'
            else out += ' '
            }

       if (info.includes('transc')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.transcription]) ch = window.spreadsheetRows[char][cols.transcription]
            else ch = '&nbsp;'
            out += '<span class="listTransc">'+ch+'</span>'
            }

        if (info.includes('trans2')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.transcription2]) ch = window.spreadsheetRows[char][cols.transcription2]
            else ch = '&nbsp;'
            out += '<span class="listTrans2">'+ch+'</span>'
            }

         if (info.includes('trans')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.transLoc]) ch = window.spreadsheetRows[char][cols.transLoc]
            else ch = '&nbsp;'
            out += '<span class="listTrans">'+ch+'</span>'
            }

         if (translit.length > 0) {
            if (translit[i]) out += '<span class="listTrans">'+translit[i]+'</span>'
            else out += ' '
            }

       if (info.includes('meaning')) {
            if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.meaning]) ch = window.spreadsheetRows[char][cols.meaning]
            else ch = '&nbsp;'
            out += '<span class="listMeaning">'+ch+'</span>'
            }

        if (notes.length > 0) {
            if (notes[i]) ch = notes[i]
            else ch = '&nbsp;'
            out += '<span class="listMeaning">'+ch+'</span>'
            }


        // print the code point values
        if (node.className.includes('noCodePoints')) {} // do nothing
        else {
            out += '<span class="listUnum">'
            charList = [... chars[i]]
            for (let z=0;z<charList.length;z++) {
                var hex = charList[z].codePointAt(0)
                if (ignorableChar && ignorableChar === hex) continue // ignore specified character
                if (vowelcluster && hex === 45) continue // ignore hyphens - this should be phased out
                hex = hex.toString(16).toUpperCase()
                while (hex.length < 4) hex = '0'+hex

                out += '<span class="listUnumCP" onclick="showCharDetailsInPanel(event)">'+hex+'</span>'
                if (charList.length>1 && z<charList.length-1) out += '<br/>'
                }
                out += '</span>'
                }


        // add any links
        if (links.length > 0) {
            if (links[i]) {
                var linkList = links[i].split(' ')
                if (indexline) out += '<div class="index_details">'
                if (window.spreadsheetRows[char]) var uname = window.spreadsheetRows[char][cols.ucsName].replace(/U\+[^:]+: /,'')
                else uname = "NAME UNKNOWN"
                if (indexline) out += '<span class="index_uname">'+uname+'</span>'
                out += `<span class="links">`
                for (let l=0;l<linkList.length;l++) {
                    out += '<a href="'+linkList[l]+'">↓</a>'
                    }
                out += '</span>'
                if (indexline) out += '</div>'
                }
            else out += '<span>&nbsp;</span>'
            }



        out += '</div>'
        }
    out += '</div>'

    node.innerHTML = out
    }







function getStatusForIndex (token) {
    // returns expanded strings for the status column in spreadsheet
    switch (token) {
    case 'r': status = 'index_rare'; break;
    case 'i': status = 'index_infrequent'; break;
    case 'l': status = 'index_loan'; break; // should migrate this to t
    case 't': status = 'index_transcription'; break;
    case 'a': status = 'index_archaic'; break;
    case 'u': status = 'index_unused'; break;
    case 'o': status = 'index_obsolete'; break;
    case 'd': status = 'index_deprecated'; break;
    default: status = ''
    }

    return status
    }






function makeIndexLine (node) {


    var bicameral = false
    var showFirst = false
    //console.log(node)

    // populate the chars array with characters & gather additional info
    //chars = node.dataset.chars.split('␣')
    chars = node.textContent.split('␣')
    
    if (typeof node.dataset.cols === 'undefined') var info = ''
    else info = node.dataset.cols
   
    if (node.dataset.notes) {
        var notes = node.dataset.notes.split(',')
        }
    else notes = []


    var out = ''

    // make the summary count link
    if (chars.length > 1) {
        var length = chars.length
        for (let j=0;j<chars.length;j++) if (chars[j] === ' ') length-- // ignore spaces
        out += '<div class="listAll" onClick="listAll(this, \''+lang+'\')">list '
        if (length === 2) out += 'both'
        else out += 'all '+length
        out += '</div>'
        }

    // start building the listArray
    out += '<div class="listArray">'

    // for each item ...
    for (let i=0;i<chars.length;i++) {
        //console.log('makeIndexLine',chars[i])
        char = chars[i]

        // create an id attribute for the listPairs in the index
        if (node.closest("#index")) var indexId = ' id="index'+chars[i]+'"'
        else indexId = ''

        // check for status
        if (window.spreadsheetRows[char][cols.status] && window.spreadsheetRows[char][cols.status] !== '0') status = getStatusForIndex(window.spreadsheetRows[char][cols.status]).replace(/\./,'')
        else status = ''

        if (node.dataset.lang) out += `<div class="listPair ${ status }"${ indexId }><span class="listItem" lang="${ node.dataset.lang }" onclick="makeFootnoteIndex(charVal)">${ chars[i] }</span>`
        else out += `<div class="listPair ${ status }"${ indexId }><span class="listItem" lang="${ lang }" onclick="makeFootnoteIndex('${ chars[i] }')">${ chars[i] }</span>`



        if (notes.length > 0) {
            if (notes[i]) ch = notes[i]
            else ch = '&nbsp;'
            out += '<span class="listMeaning">'+ch+'</span>'
            }


        // print the code point values
        out += '<span class="listUnum">'
        charList = [... chars[i]]
        for (let z=0;z<charList.length;z++) {
            var hex = charList[z].codePointAt(0)
            hex = hex.toString(16).toUpperCase()
            while (hex.length < 4) hex = '0'+hex

            out += '<span class="listUnumCP" onclick="showCharDetailsInPanel(event)">'+hex+'</span>'
            if (charList.length>1 && z<charList.length-1) out += '<br/>'
            }
        out += '</span>'


        // add any links
        out += '<div class="index_details">'
        if (window.spreadsheetRows[char] && window.spreadsheetRows[char][cols.ucsName]) {
            var uname = window.spreadsheetRows[char][cols.ucsName].replace(/U\+[^:]+: /,'')
            //if (window.spreadsheetRows[char][cols.status] && window.spreadsheetRows[char][cols.status] !== '0') {
                //status = getStatusForIndex(window.spreadsheetRows[char][cols.status]).replace(/\./,'')
                //out += `<span class="index_uname index_${ status }" onclick="makeFootnoteIndex('${ chars[i] }')">(${ status }) &nbsp;&nbsp; ${ uname }</span>`
                //}
            if (status) out += `<span class="index_uname" onclick="makeFootnoteIndex('${ chars[i] }')">(${ status.replace(/index_/,'') }) &nbsp;&nbsp; ${ uname }</span>`
            else out += `<span class="index_uname" onclick="makeFootnoteIndex('${ chars[i] }')">${uname}</span>`          
            }
        else uname = "NAME UNKNOWN"

        //out += `<span class="index_uname" onclick="makeFootnoteIndex('${ chars[i] }')">${uname}</span>`
        if (window.spreadsheetRows[char]) {
            out += `<span class="indexLineData" onclick="makeFootnoteIndex('${ chars[i] }')">`
            if (window.spreadsheetRows[char][cols.typeLoc]) out += `<span class="typeLoc">${ window.spreadsheetRows[char][cols.typeLoc] }</span> `
            if (window.spreadsheetRows[char][cols.statusLoc]) out += `<span class="statusLoc">${ window.spreadsheetRows[char][cols.statusLoc] }</span> `
            if (window.spreadsheetRows[char][cols.ipaLoc]) out += `<span class="ipa">${ window.spreadsheetRows[char][cols.ipaLoc].toLowerCase() }</span> `
            if (window.spreadsheetRows[char][cols.transcription] && window.spreadsheetRows[char][cols.transcription] !== '0') out += `<span class="transc">${ window.spreadsheetRows[char][cols.transcription] }</span> `
            out += '</span>'
            }
        out += '</span>'
        out += '</div>'



        out += '</div>'
        }
    out += '</div>'

    node.innerHTML = out
    }







function initialiseShowNamesX (node, base, target) {
    if (traceSet.has('setFindIPA') || traceSet.has('all')) console.log('initialiseShowNames(',node, base, target,') Add onclick function to all .ex elements to display in panel')
    // add function to all images with class ex
    // function will display character by character names for example in the panel
    // base (string), path for link to character detail

    // this extends the function in show_codepoints.js to add support for listItems


	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') { base = ''; }
	if(typeof target === 'undefined') { target = ''; } 
	
    var e
	var examples = node.querySelectorAll('.ex')
	for (e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() == 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}
	
    // this is the new stuff
	var listItems = document.querySelectorAll(".listItem")
	for (let i=0;i<listItems.length;i++) {
		listItems[i].addEventListener('click', showCharDetailsEvent)
		listItems[i].addEventListener('click', makeFootnoteIndex)
		//listItems[i].addEventListener('click', showCharDetailsInPanel)
		//listItems[i].addEventListener('mouseover', showCharDetailsInPanel)
		listItems[i].addEventListener('mouseover', showCharDetailsEvent)
		}
	
	var lists = document.querySelectorAll(".exlist")
	for (let i=0;i<lists.length;i++) lists[i].addEventListener('click', showCharDetailsEvent)
	}





function initialiseShowNames (node, base, target) {
    if (traceSet.has('initialiseShowNames') || traceSet.has('all')) console.log('initialiseShowNames(',node, base, target,') Add onclick function to all .ex elements to display in panel')
    // add function to all images with class ex
    // function will display character by character names for example in the panel
    // base (string), path for link to character detail

    // this extends the function in show_codepoints.js to add support for listItems


	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') base = ''
	if(typeof target === 'undefined') target = ''
	
    var e
	var examples = node.querySelectorAll('.ex')
	for (e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() == 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}
	
    // this is the new stuff
	var listItems = document.querySelectorAll(".listItem")
	for (let i=0;i<listItems.length;i++) {
		listItems[i].addEventListener('click', showCharDetailsEvent)
		listItems[i].addEventListener('click', makeFootnoteIndex)
		//listItems[i].addEventListener('click', showCharDetailsInPanel)
		//listItems[i].addEventListener('mouseover', showCharDetailsInPanel)
		listItems[i].addEventListener('mouseover', showCharDetailsEvent)
		}
	
	var lists = document.querySelectorAll(".exlist")
	for (let i=0;i<lists.length;i++) lists[i].addEventListener('click', showCharDetailsEvent)
	}





function showCharDetailsEvent (evt) {
    // opens a panel to display character notes details
    
	if (typeof charDetails === 'undefined') return

	if (evt.type === 'mouseover' && document.getElementById('showDetailOnMouseover').checked != true) return
	
	table = evt.target.parentNode.parentNode.parentNode.querySelector('table')
    displayedItem = ''
    if (table !== null) displayedItem = table.querySelector('.ex')
    if (displayedItem) displayedItem = displayedItem.textContent
    
    // if clicked item and table are about the same thing, just close table
    if (displayedItem && displayedItem === evt.target.textContent) { 
        console.log("found",displayedItem)
        table.parentNode.removeChild(table)
        return
        }
    
    // clear any existing table
	if (table !== null) table.parentNode.removeChild(table)
	
	var table = document.createElement('table')
	table.className = 'charDetails'
	table.innerHTML = makeDetails(evt.target.textContent, evt.target.lang)
	evt.target.parentNode.parentNode.parentNode.appendChild(table)
	
	
	addExamples(evt.target.lang)
	//autoTransliterate(evt.target.lang)
	convertTranscriptionData(evt.target)
	setFootnoteRefs()
    var links = table.querySelectorAll('.codepoint a, .codepoint code')
	for (i=0;i<links.length;i++) links[i].onclick = showCharDetailsInPanel
    initialiseShowNames(table, window.blockDir, 'c')
    }






function showtext (sourceName) {
	// when text is highlighted in the freeText area, display the character list
	text=getSelected()
	if (text.focusOffset > text.anchorOffset) {
		var start = text.anchorOffset
		var end = text.focusOffset
		}
	else {
		var start = text.focusOffset
		var end = text.anchorOffset
		}
	var highlight = text.focusNode.nodeValue.substr(start, end-start)
	var source = document.getElementById(sourceName)
	showNameDetails(highlight, source.lang, source.dataset.base, source.dataset.target, document.getElementById('panel') )
	}




function getSelected() {
	if (window.getSelection) return window.getSelection()
	else if (document.getSelection) return document.getSelection()
	else {
		var selection = document.selection && document.selection.createRange()
		if (selection.text) return selection.text
		return false
		}
	return false
	}




function toggleTranscription (type, show) { 
    // shows/hides a line of transcriptions in the listPairs
    // type: string, name of the class of the items to toggle
    // show: boolean, checkbox unchecked gives false
    var trans = document.querySelectorAll('.'+type)
    console.log('translen for ', type, 'is', trans.length)
    if (trans.length === 0) return

    for (let i=0; i<trans.length; i++) {
        if (show) trans[i].style.display = 'block'
        else trans[i].style.display = 'none'
        }
    }








function getOrthographyList (type, location, spaced=false) {
    // this is a modified version of runCharCount, adapted to harvest characters after the 
    // page has been rendered, and used by the links in the Basic Summary section on click
    // it requires the presence of #index
	var charlists, out
	if (document.getElementById('index') == null) {
        alert('No #index element (in getOrthographyList)')
        return
        }
    else charlists = document.querySelectorAll('#index '+type+' .listItem')
    var chars = ''
	for (let i=0;i<charlists.length;i++) chars += charlists[i].textContent
    var charlistArray = [...chars]
	const uniqueSet = new Set(charlistArray)
	var uniqueArray = [...uniqueSet]
	
    if (spaced) out = uniqueArray.toString().replace(/,/g,' ')
	else out = uniqueArray.toString().replace(/,/g,'')
    return out
	}








//itemToFind.test(possibleMatches[i].textContent)

function findIPA () {
	// when you click on a phone in an svg or table chart, this highlights occurrences of that phone in the doc
	// this only locates a match if the phone is isolated (ie the only phone in the span or one of a set of 
	// space-separated phones in the span.  It won't pick up usage in ipa spellings of examples.
	// This is to avoid matching t with th, tʰ, t͡ʃʰ, etc.)

	// create a set of the character(s) being looked up
	const phoneSet = new Set(this.textContent.replace(/-/g,'').split(' '))
	//console.log('search for:',phoneSet)

	// identify locations in svg and tables that should not count
	var svgArray = document.querySelectorAll('.ipaSVG .ipa, .ipaSVG .allophone',)
	var tableArray = document.querySelectorAll('.ipaTable .ipa, .ipaTable .allophone')
	var screenedItems = new Set([ ...svgArray, ...tableArray ])
	//console.log('screenedItems',screenedItems)

	// collect all the .ipa elements
	var listItems = document.querySelectorAll('.ipa, .listIPA')
	var counter = 0
	var links = []
	for (k=0;k<listItems.length;k++) listItems[k].style.backgroundColor = 'transparent'
	
	for (let i=0;i<listItems.length;i++) {
        listItemContent = listItems[i].textContent

        // separate vowels and consonants if this is a syllabary
        // vowelsInSyllables is defined in xxx.js
        if (typeof vowelsInSyllables !== 'undefined') {
            for (var v=0;v<vowelsInSyllables.length;v++) {
                re = new RegExp(vowelsInSyllables[v],'g')
                if (re.test(listItems[i].textContent)) listItemContent += ' '+listItems[i].textContent.replace(re,'')+' '+vowelsInSyllables[v]
                }
            }
        //console.log(listItemContent)
        
		//var listPhones = listItems[i].textContent.split(' ')
		var listPhones = listItemContent.split(' ')
		for (let p=0;p<listPhones.length;p++) {
			if ((! screenedItems.has(listItems[i])) && phoneSet.has(listPhones[p].replace(/-/g,''))) {
				listItems[i].style.backgroundColor = '#ffa442ad'
				listItems[i].style.borderRadius = '5px'
				
				// gather a list of links to the found items
				var ptr = listItems[i]
				//console.log(listItems[i])
				while (ptr.parentNode.id == '') ptr = ptr.parentNode
				links.push(ptr.parentNode.id)
				
				counter++
				}
			}
		}
	
	// remove redundancy from the links array
	const uniqueLinks = new Set(links)
	leanLinks = [...uniqueLinks]
	//console.log(leanLinks)
	
	// report the results
	if (document.getElementById('phoneLinks')) {
		var out = counter+' matches found: &nbsp; '
		for (let i=0;i<leanLinks.length;i++) {
            if (i>0) out += ' • '
            out += '<a href="#'+leanLinks[i]+'">'+leanLinks[i]+'</a> '
            }
		document.getElementById('phoneLinks').style.display = 'block'
		document.getElementById('phoneLinks').innerHTML = out+' &nbsp;&nbsp;<span style="cursor:pointer" onclick="this.parentNode.style.display = \'none\'">X</span>&nbsp;&nbsp;'
		}
	else {
		if (counter > 0) alert(counter+' matches found: &nbsp; '+leanLinks+'.')
		else alert('No matches found.')
		}
	}





function makeSafeRegex (str) {
    // escapes the regex syntax characters in a string
    
    str = str.replace(/\./,'\\.')
    str = str.replace(/\?/,'\\?')
    str = str.replace(/\(/,'\\(')
    str = str.replace(/\)/,'\\)')
    str = str.replace(/\*/,'\\*')
    str = str.replace(/\+/,'\\+')
    str = str.replace(/\$/,'\\$')
    
    return str
    }




function makeFootnoteIndex (charVal) {
    if (traceSet.has('makeFootnoteIndex')) console.log('makeFootnoteIndex(',charVal,')')
	// when you click on a character in a .listItem or .codepoint this creates a set of links at the bottom
    // of the page to other locations where that character is mentioned
    // it also highlights those instances

	// create a regex of the character(s) being looked up
    var incomingValue, itemToFind
    
    // this creation of itemToFind regex seems unnecessary, and .test was failing 
    // to locate all instances.  Replaced the latter with .includes
    // seems to work: wait a while to ensure it's a good fix, then delete the following
    if (typeof charVal === 'string') incomingValue = charVal.replace(/◌/g,'')
    else incomingValue = this.textContent.replace(/◌/g,'')
    itemToFind = new RegExp(makeSafeRegex(incomingValue), 'g')
    //console.log('search for:',itemToFind)

	// collect all the .listItem & .codepoint elements
	var possibleMatches = document.querySelectorAll('.listItem, .codepoint span, .codepoint bdi')
	var counter = 0
	var links = []
    for (x=0;x<possibleMatches.length;x++) if (traceSet.has('makeFootnoteIndex')) //console.log('possibleMatch:',possibleMatches[x].textContent)
    
    // clear any existing highlights
	for (var k=0;k<possibleMatches.length;k++) possibleMatches[k].style.backgroundColor = 'transparent'
	
    // check for matches and add highlights etc
	for (var i=0;i<possibleMatches.length;i++) {
        if (possibleMatches[i].parentNode.nodeName !== 'A' && 
       // itemToFind.test(possibleMatches[i].textContent)) {
        possibleMatches[i].textContent.includes(incomingValue)) {
            possibleMatches[i].style.backgroundColor = '#ffa442ad'
            possibleMatches[i].style.borderRadius = '5px'
            //console.log('FOUND',possibleMatches[i].textContent)
            
            // gather a list of links to the found items
            var ptr = possibleMatches[i]
            while (ptr.parentNode.nodeName == 'FIGURE' || ptr.parentNode.id == '') ptr = ptr.parentNode
            links.push(ptr.parentNode.id)
            counter++
            }
		}

    //if (traceSet.has('makeFootnoteIndex')) console.log('links',links)

	// remove redundancy from the links array
	const uniqueLinks = new Set(links)
	var leanLinks = [...uniqueLinks]
	//if (traceSet.has('makeFootnoteIndex')) console.log(leanLinks)
	
	// report the results
	if (document.getElementById('phoneLinks')) {
		var out = counter+' matches found: &nbsp; '
		for (let i=0;i<leanLinks.length;i++) {
            if (typeof leanLinks[i] === 'undefined') {
                console.log('*** Undefined leanLinks in makeFootnoteIndex')
                continue
                }
            if (i>0) out += ' • '
            out += `<a href="#${ leanLinks[i] }"`
            // open the index, if necessary
            if (leanLinks[i].startsWith('index')) {
                out += ` onclick = "var indexSections = document.getElementById('index').querySelectorAll('details'); for (i=0;i<indexSections.length;i++) indexSections[i].open = true"`
                }
            out += `>${ leanLinks[i] }</a> `
            //out += '<a href="#'+leanLinks[i]+'">'+leanLinks[i]+'</a> '
            }
		document.getElementById('phoneLinks').style.display = 'block'
		document.getElementById('phoneLinks').innerHTML = out+`<span style="cursor:pointer; margin-inline: 1em;" onclick="this.parentNode.style.display = 'none'; clearFootnoteIndexHighlights()">X</span>&nbsp;&nbsp;`
		}
	else {
		if (counter > 0) alert(counter+' matches found: &nbsp; '+leanLinks+'.')
		else alert('No matches found.')
		}
	}







function clearFootnoteIndexHighlights () {
    // removes the highlighting associated with the footnote index links
    // called when the footnote index box is closed
	var listItems = document.querySelectorAll('.listItem, .codepoint span, .codepoint bdi')
	for (var k=0;k<listItems.length;k++) listItems[k].style.backgroundColor = 'transparent'
    }




function showTransliterations (yes) {
    //console.log('showTransliterations(',yes,')')
	if (! yes) {
		var nodes = document.querySelectorAll('.charExample .trans')
		for (let n=0;n<nodes.length;n++) nodes[n].style.display = 'none'
		}
	else {
		var nodes = document.querySelectorAll('.charExample .trans')
		for (let n=0;n<nodes.length;n++) nodes[n].style.display = 'inline'
		}
	}



function setTranslitToggle () {
    if (traceSet.has('setTranslitToggle') || traceSet.has('all')) console.log('setTranslitToggle(',') Add checkboxes and links to the fixed position selector')
	// adds checkboxes and links to the fixed position selector
	
	var checkboxList = document.getElementById('showTranscriptions')
	if (checkboxList === null) {
		console.log("Couldn't find sliding checkbox!")
		return
		}
    
    var details = document.createElement('details')
    
    var summary = document.createElement('summary')
    summary.appendChild(document.createTextNode('Hide/show other items'))
    details.appendChild(summary)
    
	// add translit toggle
	var div = document.createElement('div')
	div.id = 'translitToggle'
	var label = document.createElement('label')
	var input = document.createElement('input')
	input.type = 'checkbox'
    input.id = 'translitToggleCheckbox'
	label.appendChild(document.createTextNode('Show transcriptions '))
	label.appendChild(input)
	label.onclick = showTransliterationsEvt
	div.appendChild(label)
	details.appendChild(div)

	// add detail mouseover toggle
	div = document.createElement('div')
	div.id = 'showDetailType'
	label = document.createElement('label')
	input = document.createElement('input')
	input.type = 'checkbox'
	input.checked = false
	input.id = 'showDetailOnMouseover'
	label.appendChild(document.createTextNode('Detail on mouseover '))
	label.appendChild(input)
	//label.onclick = showTransliterationsEvt
	div.appendChild(label)
	details.appendChild(div)
    
	checkboxList.appendChild(details)

	// add links to phonetic symbol info
	div = document.createElement('div')
	div.id = 'phoneticLinks'
    div.appendChild(document.createTextNode('Phonetic alphabet tips:'))
    div.appendChild(document.createElement('br'))
    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Consonants'))
    a.href = 'https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Consonants'
    a.target = "_blank"
    div.appendChild(a)

    div.appendChild(document.createTextNode(' • '))

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Vowels'))
    a.href = 'https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Vowels'
    a.target = "_blank"
    div.appendChild(a)

    div.appendChild(document.createTextNode(' • '))

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Diacritics'))
    a.href = 'https://en.wikipedia.org/wiki/International_Phonetic_Alphabet#Diacritics_and_prosodic_notation'
    a.target = "_blank"
    div.appendChild(a)

	checkboxList.appendChild(div)

    // add link to glossary
	div = document.createElement('div')
    div.id = 'glossaryLink'

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Open glossary'))
    a.href = '../glossary/'
    a.title = 'Find a term in the glossary.'
    a.target = '_blank'
    div.appendChild(a)

	checkboxList.appendChild(div)
    
    // add link to character app
	div = document.createElement('div')
    div.id = 'characterAppLink'

    var a = document.createElement('a')
    a.appendChild(document.createTextNode('Open character app'))
    a.href = '../../pickers/'+window.pickerDir
    a.title = 'Open a character app for this orthography.'
    a.target = '_blank'
    div.appendChild(a)

	checkboxList.appendChild(div)

    // add link to top of plage
	div = document.createElement('div')
    var img = document.createElement('img')
    img.src = '../../shared/images/up.png'
    img.style.marginBlockStart = '2rem'
    img.alt = 'TOC.'
    img.title = 'Jump to table of contents.'

    var a = document.createElement('a')
    a.appendChild(img)
    a.href = '#header-boilerplate'
    div.appendChild(a)

	checkboxList.appendChild(div)
	}




function showTransliterationsEvt (evt) { 
	showTransliterations(evt.target.checked )
	}






// MAKE INDEX DATA
index = {}

function makeIndexObject () {
    var charArray = []
	chars = document.querySelectorAll('.codepoint, .listItem')
	for (i=0;i<chars.length;i++) {
        if (chars[i].textContent.trim() === '') continue
        if (chars[i].classList.contains('noindex') || chars[i].parentNode.parentNode.parentNode.classList.contains('noindex')) continue
        
        //console.log('Processing:',chars[i].textContent)
        if (chars[i].firstChild == null) console.log('No content found for',chars[i].parentNode.textContent)
        cell = chars[i].firstChild.textContent
        
        // get the heading
		ptr = chars[i]
		while (ptr.nodeName != 'SECTION' && ptr.nodeName != 'HTML') {
			ptr = ptr.parentNode
			}
		section = ptr.id
        //console.log(cell, section)
        if (section.includes('index_')) continue
        if (section.includes('_map')) continue
        if (section.includes('map_')) continue
      
        
        // get the status
        var status = ''
        if (chars[i].classList.contains('listItem')) {
            listHead = chars[i].parentNode.parentNode.parentNode
            if (listHead.classList.contains('otherBox')) status = 'other'
            //else if (listHead.classList.contains('characterBox') || listHead.classList.contains('mainBox')) status = 'main'
            //else if (listHead.classList.contains('auxiliaryBox') || listHead.classList.contains('auxBox')) status = 'aux'
            else if (listHead.classList.contains('characterBox') || listHead.classList.contains('mainBox')) status = 'character'
            else if (listHead.classList.contains('auxiliaryBox') || listHead.classList.contains('auxBox')) status = 'auxiliary'
            else if (listHead.classList.contains('deprecatedBox')) status = 'deprecated'
            else if (listHead.classList.contains('archaicBox')) status = 'archaic'
            //console.log(cell, status)
            }
        
        // create an object for each item in the cell
        cellList = [...cell]
        for (j=0;j<cellList.length;j++) {
            charArray.push(new Object)
            charArray[charArray.length-1].codepoint = cellList[j]
            charArray[charArray.length-1].section = section
            if (status !== '') charArray[charArray.length-1].status = status
            }
		}
	//console.log('charArray',charArray)

	allchars = '' // makes a list of all characters for sorting later
    
    // create entries in the index array, avoiding duplicate entries per section
    for (j=0;j<charArray.length;j++) {
        indexChar = charArray[j].codepoint
        // stop duplicates within the same section
        if (index[indexChar] && index[indexChar].section.includes(charArray[j].section)) {
            if (charArray[j].status) index[indexChar].status = charArray[j].status
            continue
            }
		if (index[indexChar]) {
            index[indexChar].section += ' #'+charArray[j].section
            if (charArray[j].status) index[indexChar].status = charArray[j].status
            }
		else {
            index[indexChar] = new Object
			index[indexChar].section = '#'+charArray[j].section
            if (charArray[j].status) index[indexChar].status = charArray[j].status
			allchars += indexChar
			}
		}
	//console.log('index',index)
    
    // sort the allchars string
    sortedAllChars = [...allchars].sort()
    allchars = sortedAllChars.join('')
	document.getElementById('allchars').value = allchars
    
    // drop lists of characters into the right form fields
    for (entry in index) {
        if (index[entry].status) {
            if (index[entry].status.includes('character')) document.getElementById('mainIndexList').value += entry
            if (index[entry].status.includes('aux')) document.getElementById('auxIndexList').value += entry
            if (index[entry].status.includes('archaic')) document.getElementById('archaicIndexList').value += entry
            if (index[entry].status.includes('deprecated')) document.getElementById('deprecatedIndexList').value += entry
            if (index[entry].status.includes('other')) document.getElementById('otherIndexList').value += entry
            }
        else document.getElementById('unknownIndexList').value += entry
        }
    
    
    
    
	}




// reworked to add indexline
function makeMarkup () {

	charList = document.getElementById('in').value
	charList = charList.replace(/ /g,'')
	chars = [...charList]
    type = index[chars[0]].status
	out = '<figure class="'+type+'Box auto noindex indexline"  data-cols="" data-links="'
	for (i=0;i<chars.length;i++) {
		out += index[chars[i]].section+','
		}
	//out +='" data-notes="'
 	//for (i=0;i<chars.length;i++) {
	//	out += index[chars[i]].sectionName+','
	//	}
    out += '">'+chars.join('␣')+'</figure>'
	document.getElementById('out').value = out
	document.getElementById('out').select()
	}







function makeMarkupForSection (sectionName) {
    // rewrite the index for a given section in the index
    // new versions makes markup changes in place
    // sectionName is the id of a section in the index
    // global: index, contains the mappings of character to section
    
    if (document.getElementById(sectionName) === null) {
        console.log('INFO: sectionName points to non-existent section',sectionName,'in makeMarkupForSection')
        return
        }

    var i, j, k
    
    var indexList = document.getElementById(sectionName)
    var indexFigures = indexList.querySelectorAll('figure')
    for (i=0;i<indexFigures.length;i++) {
        var allCharsArray = indexFigures[i].textContent.split('␣')
        //console.log('allCharsArray',allCharsArray)
                
        var out = ''
        var missing = []
        for (k=0;k<allCharsArray.length;k++) {
            if (typeof index[allCharsArray[k]] === 'undefined') missing.push(allCharsArray[k])
            else out += index[allCharsArray[k]].section + ','
            }
        if (missing.length > 0) {
            console.log('INFO: in makeMarkupForSection, the following characters were not found in the global index object (meaning that they don\'t appear in the text)')
            for (var j=0;j<missing.length;j++) console.log(missing[j])
            }
        //console.log('out',out)
        
        indexFigures[i].dataset.links = out
        //replaceStuff(indexFigures[i])
        makeIndexLine(indexFigures[i])
        }
	}






function checkParameters () {
    // check for parameters and take appropriate action
    var parameters = location.search.split('&')
    parameters[0] = parameters[0].substring(1)
    for (var p=0;p<parameters.length;p++) {  
        var pairs = parameters[p].split('=')
        
        // open index and jump to character location
        if (pairs[0] === 'index') { if (pairs[1]) {
            indexSections = document.getElementById('index').querySelectorAll('details')
            console.log('indexSections',indexSections.length)
            for (i=0;i<indexSections.length;i++) indexSections[i].open = true
            //document.getElementById('index_details').open = true
            document.location = '#index'+pairs[1]
            } }
        
        // open index without jumping to character location
        if (pairs[0] === 'showIndex') {
            indexSections = document.getElementById('index').querySelectorAll('details')
            for (i=0;i<indexSections.length;i++) indexSections[i].open = true
            }
        
        // turn off mouseover reveal of list boxes
        if (pairs[0] === 'nomouseover') {
            document.getElementById('showDetailOnMouseover').checked = false
            console.log('Detail on mouseover is off.')
            }
        }
    }









function makeScriptLanguageList () {
    if (traceSet.has('makeScriptLanguageList') || traceSet.has('all')) console.log('makeScriptLanguageList(',')\n\tFill in the "Languages using the ... script" section, using an object defined in refs.js\n\tVariable scriptLanguageList: ', scriptLanguageList)
    // fills in the "Languages using the ... script" section, using an object defined in refs.js
    
    if (document.getElementById('scriptLanguageList') === null) return
    
    var out = ''
    var count = 0
    for (var langtag in scriptLanguageList) {
        if (scriptLanguageList[langtag].url) out += `<li class="linkedOrthography"><a href="${ scriptLanguageList[langtag].url }">${ scriptLanguageList[langtag].name } [${ langtag }]</a></li>\n`
        else out += `<li>${ scriptLanguageList[langtag].name } [${ langtag }]</li>\n`
        count++
        }
    out += `<li><i>Total: ${ count }</i></li>`
    document.getElementById('scriptLanguageList').innerHTML = out
    scriptLanguageList = ''
    }






function makeCharDataObj () {
    // create a charData array - (this removes reliance on the all-names.js file)
    // global, spreadsheetRows
    
    window.charData = {}
    
    for (var c in spreadsheetRows) {
        charData[c] = spreadsheetRows[c][cols['ucsName']].replace(/U\+[^:]+: /,'')
        }
    }














