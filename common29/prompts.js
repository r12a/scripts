// prompts will be inserted into the title attributes of various headers after page upload



function setContentPrompts () {

    subsectionPrompts = [
        {node:document.querySelector('#writingstyles h3, #writingstyles h4'), text:"How are fonts grouped into recognisable writing styles? How is each writing style used?"},

        {node:document.querySelector('#cursive h3, #cursive h4'), text:"Do letters in this script join with each other by default? Is the basic shape of a letter radically changed? Is it sometimes not cursive? Are there any special features to note? Are Unicode joiner and non-joiner characters needed to override default joining behaviours?"},

        {node:document.querySelector('#context h3, #context h4'), text:"Are special glyph forms needed, depending on the context in which a character is used? Do glyphs interact in some circumstances? Are there requirements to position diacritics or other items specially, depending on context? Does the script have multiple diacritics competing for the same location relative to the base?"},

        {node:document.querySelector('#fontstyle h3, #fontstyle h4'), text:"Are italicisation, bolding, oblique, etc relevant? Do italic fonts lean in the right direction? Is synthesised italicisation problematic? Are there other problems relating to bolding or italicisation - perhaps relating to generalised assumptions of applicability?"},

        {node:document.querySelector('#transforms h3, #transforms h4'), text:"Is the orthography bicameral? Are there other character pairings, especially when transforms are needed to convert between the two?"},


        {node:document.querySelector('#word h3, #word h4'), text:"Are words separated by spaces, or other characters? Are there special requirements when double-clicking  on the text? Are words hyphenated?"},

        {node:document.querySelector('#phrase h3, #phrase h4'), text:"What characters are used to indicate the boundaries of phrases, sentences, and sections?"},

        {node:document.querySelector('#bracketing h3, #bracketing h4'), text:"What parentheses, brackets or other punctuation is used to offset parenthetical information?"},

        {node:document.querySelector('#quotations h3, #quotations h4'), text:"What characters are used to indicate quotations? Do quotations within quotations use different characters? What characters are used to indicate dialogue? Are the same mechanisms used to cite words, or for scare quotes, etc? What about citing book or article names?"},

        {node:document.querySelector('#emphasis h3, #emphasis h4'), text:"How are emphasis and highlighting achieved? If lines are drawn alongside, over or through the text, do they need to be a special distance from the text itself? Is it important to skip characters when underlining, etc? How do things change for vertically set text?"},

        {node:document.querySelector('#abbrev h3, #abbrev h4'), text:"What characters are used to indicate abbreviation, ellipsis & repetition?"},

        {node:document.querySelector('#inlinenotes h3, #inlinenotes h4'), text:"What mechanisms, if any, are used to create *inline* notes and annotations? (For referent-type notes such as footnotes, see below?"},

        {node:document.querySelector('#otherpunctuation h3, #otherpunctuation h4'), text:"Punctuation not already mentioned, such as dashes, connectors, separators, scare quotes, etc."},

        {node:document.querySelector('#otherinline h3, #otherinline h4'), text:"Any other form of highlighting or marking of text, such as underlining, numeric overbars, etc. What characters or methods (eg. text decoration) are used to convey information about a range of text? If lines are drawn alongside, over or through the text, do they need to be a special distance from the text itself? Is it important to skip characters when underlining, etc? How do things change for vertically set text?"},


        {node:document.querySelector('#linebreak h3, #linebreak h4'), text:"Are there special rules about the way text  wraps when it hits the end of a line? Does line-breaking wrap whole 'words' at a time, or characters, or something else (such as syllables in Tibetan and Javanese)? What characters should not appear at the end or start of a line, and what should be done to prevent that? Is hyphenation used, or something else? What rules are used? What difficulties exist?"},

        {node:document.querySelector('#justification h3, #justification h4'), text:"Does text in a paragraph needs to have flush lines down both sides? Does the script allow punctuation to hang outside the text box at the start or end of a line? Where adjustments are need to make a line flush, how is that done? Does the script shrink/stretch space between words and/or letters? Are word baselines stretched, as in Arabic? What about paragraph indents?"},

        {node:document.querySelector('#spacing h3, #spacing h4'), text:"This section looks at ways in which spacing is applied between characters over and above that which is introduced during justification. For example, does the orthography create emphasis or other effects by spacing out the words, letters or syllables in a word?  (For justification related spacing, see Text alignment & justification, above)."},
 
        {node:document.querySelector('#baselines h3, #baselines h4'), text:"Does the script have special requirements for baseline alignment between mixed scripts and in general? Is line height special for this script? Are there other aspects that affect line spacing, or positioning of items vertically within a line?"},
 
        {node:document.querySelector('#lists h3, #lists h4'), text:"Are there list or other counter styles in use?  If so, what is the format used? Do counters need to be upright in vertical text? Are there other aspects related to counters and lists that need to be addressed?"},
 
        {node:document.querySelector('#initials h3, #initials h4'), text:"Does the script use special styling of the initial letter of a line or paragraph, such as for drop caps or similar? How about the size relationship between the large letter and the lines alongide? where does the large letter anchor relative to the lines alongside? is it normal to include initial quote marks in the large letter? is the large letter really a syllable? Are dropped, sunken, and raised types found? etc."},


        {node:document.querySelector('#generallayout h3, #generallayout h4'), text:"How are the main text area and ancilliary areas positioned and defined? Are there any special requirements here, such as dimensions in characters for the Japanese kihon hanmen? The book cover for scripts that are read right-to-left scripts is on the right of the spine, rather than the left.  When content can flow vertically and to the left or right, how to specify the location of objects, text, etc. relative to the flow? Do tables and grid layouts work as expected? How do columns work in vertical text? Can you mix block of vertical and horizontal text? Does text scroll in a different direction?"},

        {node:document.querySelector('#grids h3, #grids h4'), text:"Does the script have special requirements for character grids or tables?"},

        {node:document.querySelector('#footnotes h3, #footnotes h4'), text:"Does the script have special requirements for notes, footnotes, endnotes or other necessary annotations of this kind? (There is a section above for purely inline annotations, such as ruby or warichu. This section is more about annotation systems that separate the reference marks and the content of the notes."},

        {node:document.querySelector('#interaction h3, #interaction h4'), text:"Are vertical form controls needed? Are scroll bars in an unusual position? Other special requirements for user interaction?"},

        {node:document.querySelector('#headers h3, #headers h4'), text:"Are there special conventions for page numbering, or the way that running headers and the like are handled?"},

        // the following add descriptions to vowel/consonant section headers only if in the aside
        
        {node:document.querySelector('#vletter h4'), text:"What characters are used that have the general category of letter?"},

        {node:document.querySelector('#standalone h4'), text:"How does the orthography handle vowels that are not preceded by a consonant?"},

        {node:document.querySelector('#vlength h4'), text:"How does the orthography handle differences in vowel length?"},

        {node:document.querySelector('#nasalisation h4'), text:"How does the orthography handle vowel nasalisation?"},

        {node:document.querySelector('#novowel h4'), text:"How is the inherent vowel killed? What other mechanisms are used to indicate consonant clusters? When are they used and not used?"},

        {node:document.querySelector('#onsets h4'), text:"Do syllable onsets support consonant clusters, or other features (such as prenasalisation, aspiration, devoicing, etc.)? If so, how are these managed by the orthography"},

        {node:document.querySelector('#finals h4'), text:"How are syllable codas written in this orthography?"},

        {node:document.querySelector('#clusters h4'), text:"Are any special approaches taken for consonant clusters?"},

        {node:document.querySelector('#clength h4'), text:"If the phonology of the language supports gemination or consonant lengthening, how is that reflected in the orthography?"},
        ]



    // set the prompts in the subtitles
    for (i=0;i<subsectionPrompts.length;i++) {
        prompt = document.createElement('p')
        prompt.className = 'sectionSummary'
        prompt.appendChild(document.createTextNode(subsectionPrompts[i].text))
        if (subsectionPrompts[i].node) subsectionPrompts[i].node.after(prompt)
        }
    
    // set summaries for typography H2s
    typographyH2s = [
        {node:document.querySelector('#numbers h2'), text:"This section describes typographic features related to digits, dates, currencies, etc."},

        {node:document.querySelector('#shaping aside'), text:"This section describes typographic features related to font/writing styles, cursive text, context-based shaping, context-based positioning, letterform slopes, weights & italics, and case & other character transforms."},

        {node:document.querySelector('#graphemes h2'), text:"Do Unicode grapheme clusters appropriately segment character units for the script? Are there special requirements for the following operations: forwards/backwards deletion, cursor movement & selection, character counts, searching & matching, text insertion, line-breaking, justification, case conversions, sorting?"},

        {node:document.querySelector('#inline aside'), text:"This section describes typographic features related to word boundaries, phrase & section boundaries, bracketed text, quotations & citations, emphasis, abbreviation, ellipsis & repetition, inline notes & annotations, other punctuation, and other inline text decoration."},

        {node:document.querySelector('#para aside'), text:"This section describes typographic features related to line breaking & hyphenation, text alignment & justification, text spacing, baselines, line height, counters, lists, and styling initials."},

        {node:document.querySelector('#page aside'), text:"This section describes typographic features related to general page layout & progression; grids & tables, notes, footnotes, etc, forms & user interaction, and page numbering, running headers, etc."},
        ]

    for (i=0;i<typographyH2s.length;i++) {
        prompt = document.createElement('p')
        prompt.className = 'sectionSummary'
        prompt.appendChild(document.createTextNode(typographyH2s[i].text))
        if (typographyH2s[i].node) typographyH2s[i].node.after(prompt)
        }
    
    // set the summary text for the tbd details markup
    var summaries = document.querySelectorAll('.tbd summary')
    //for (i=0;i<summaries.length;i++) summaries[i].textContent = 'Sections to be added...'
    //for (i=0;i<summaries.length;i++) summaries[i].textContent = 'Still to be investigated...'
    for (i=0;i<summaries.length;i++) summaries[i].textContent = 'Topics needing investigation...'
	}











function showAbout (node, script, language) {
// Displays/hides the 'About this document' details

if (node.innerHTML == '') {
	console.log(node.parentNode)
	node.innerHTML = `
	<p class="instructions"><span class="leadin">Transcriptions.</span> Transcriptions in <span style="white-space:nowrap;">⌈corner brackets⌋</span> are taken from the sources consulted, and may be narrow or broad, phonemic or phonetic, depending on what is available (which is why corner brackets are used rather than the usual /phonemic/ and [phonetic] indicators). Transcriptions between <span style="white-space:nowrap;">&lt;angle brackets&gt;</span>, represent the letters as commonly written in the Latin script. When you click on an example to see its composition, the letters in the panel that opens are a <em><a href="../glossary/#transliteration" class="termref">transliteration</a></em>, rather than a <a href="../glossary/#transcription" class="termref">transcription</a>: the difference being that a transliteration provides perfect round-trip conversion between the native and Latin, whereas transcriptions rarely do.  The transliteration has been developed especially for this page, and is generally based on the sound of a letter where possible, but where a letter has multiple pronunciations, the transliteration represents only one.</p>
	<p class="instructions noprint"><span class="leadin">Detailed topic information.</span> Footnote  links with an arrow alongside take you to more detailed information on the current topic.</p>
	<p class="instructions noprint"><span class="leadin">Changing fonts.</span>Click on the vertical blue bar (bottom right) to change font settings for the sample text.</p>
	` 
	node.parentNode.open = true
	}
else { 
	node.parentNode.open = false
	node.innerHTML = ''
	}
}




/*
function showOrthoLinks (node, script, langName, lang, orthog, indic) {
// Adds the link popup and anchoring line in Basic Features
// script: iso code for script; langName: language name; lang: bcp47 tag
// orthog: ordinary name for orthography described
// indic: boolean indicating whether or not to show indic syllable property link
        
	out = `
    <div id="orthoLinkSwitch" onmouseover="document.getElementById('orthoLinkPopup').style.display='block'"  
    onmouseout="document.getElementById('orthoLinkPopup').style.display='none'"><img src="../common/icons/transfer.png" alt="External links">

    <div id="orthoLinkPopup">
    <ul>`
    
    out += `<li><a target="_blank" href="/app-charuse?language=${lang}">Character usage</a></li>`
    
    if (indic) out += `<li><a target="_blank" href="" onClick="this.href='../apps/listindic?chars='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true));">Indic category</a></li>`
    
    out += `<li><a target="_blank" href="" onClick="this.href='../apps/listcategories?chars='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))">General Category</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='/app-listcharacters?chars='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true));">Unicode blocks</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='/uniview?charlist='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true))">UniView</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='/app-analysestring/?chars='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true))">Analyse String</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='../fontlist/?script=${script}&text='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))">Font Lister</a></li>
    
    <li><a target="_blank" href="../samples/?script=${script}">Sample texts</a></li>
    
    <li><a target="_blank" href="block">Character notes</a></li>
    
    <li><a target="_blank" href="../links?iso=${script}">Related resources</a></li>
    
    <li id="closeOrthoLink" onClick="this.parentNode.parentNode.style.display='none'">X</li>
    </ul>
    </div>
    </div>

    <div id="orthoLinkInstructions">
    <p>Click on the image to the left to view all the characters in the index in various groupings or open related apps.</p>
    <!--p>Show <a href="../../app-charuse/?language=${lang}" target="_blank">${langName}</a> in the Character Usage app.</p>
    <p>Show ${orthog} characters grouped by <a target="_blank" href="" onClick="this.href='../apps/listcategories?chars='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))">General Category</a>, or click on the icon to the left to choose alternatives.</p-->
    </div>
	` 
	node.innerHTML = out

}
*/






function makeIndexIntro (node) {
// Adds the introduction for the Index - includes the former showOrthoLinks 
// script: iso code for script; langName: language name; lang: bcp47 tag
// orthog: ordinary name for orthography described
// indic: boolean indicating whether or not to show indic syllable property link


    if (node === null) return

    // redefine the parameters here to improve portability, since this is called from each separate page
    var script = window.scriptTag
    var langName = window.languageName
    var lang = window.charUsageBCP
    var orthog = window.orthogName
    var indic = window.scriptIsIndic
    
    var out = ''
    
    out += `<div id="index_intro">
    <div class="index_intro_column">
    <p class="instructions">The index points to locations where a character is mentioned in this page, and indicates whether it is used by the ${orthog} orthography described here.</p>
    
    <p class="instructions"><a href="#" onclick="listAllIndexCharacters('arab','arab-fa'); document.getElementById('charCountList').style.display='block'; return false;">List &amp; export characters</a> in the index.</p>
    </div>
    <div class="index_intro_column" id="orthoLinks"></div>
    `

    
	out += `<div id="orthoLinkSwitch" onmouseover="document.getElementById('orthoLinkPopup').style.display='block'"  
    onmouseout="document.getElementById('orthoLinkPopup').style.display='none'"><img src="../common/icons/transfer.png" alt="External links">

    <div id="orthoLinkPopup">
    <ul>`
    
    out += `<li><a target="_blank" href="../../app-charuse/index.html?language=${lang}">Character usage</a></li>`
    
    if (indic) out += `<li><a target="_blank" href="" onClick="this.href='../apps/listindic/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true));">Indic category</a></li>`
    
    out += `<li><a target="_blank" href="" onClick="this.href='../apps/listcategories/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))">General Category</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='../../app-listcharacters/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true));">Unicode blocks</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='../../uniview/index.html?charlist='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true))">UniView</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='../../app-analysestring/index.html?chars='+encodeURI(getOrthographyList('.characterBox', 'index', false) + getOrthographyList('.auxiliaryBox', 'index', true))">Analyse String</a></li>
    
    <li><a target="_blank" href="" onClick="this.href='../fontlist/index.html?script=${script}&text='+encodeURI(getOrthographyList('.characterBox', 'index', true) + getOrthographyList('.auxiliaryBox', 'index', true))">Font Lister</a></li>
    
    <li><a target="_blank" href="../samples/index.html?script=${script}">Sample texts</a></li>
    
    <li><a target="_blank" href="block.html">Character notes</a></li>
    
    <li><a target="_blank" href="../links.html?iso=${script}">Related resources</a></li>
    
    <li id="closeOrthoLink" onClick="this.parentNode.parentNode.style.display='none'">X</li>
    </ul>
    </div>
    </div>

    <div id="orthoLinkInstructions">
    <p>Click on the image to the left to view all the 'main' and 'infrequent' characters in the index in various groupings or open related apps.</p>
    </div>
	`
    
    out += `</div>
    <div id="charCountList"></div>
    `
	node.outerHTML = out

}







function addPageIntro (script, orthogName, iso, picker, page) {
	// Add a para to the intro & add accessibility controls
    var draft = ''
    var fonts = ''
    
    // capture any para relating to font availability
    if (document.querySelector('#fontWarning')) fonts = `<p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">Fonts:</strong> ${ document.querySelector('#fontWarning').innerHTML }</p>`
   
    // Add a line to mention this is a draft if 'draft' appears in h1
    if (document.querySelector('h1').textContent.includes('draft')) draft = `<p class="instructions">This page is a work in progress. The information given here should be correct, but needs to be added to and refined further.</p>`


    var out = ''
	
    
    if (script !== '') {
        out += `
        ${ draft }

        <p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">Phonological transcriptions:</strong> These should be treated as a guide, only. They are taken from the sources consulted, and may be narrow or broad, phonemic or phonetic, depending on what is available. They mostly represent pronunciation of words in isolation. For more detailed information about allophones, alternations, sandhi, dialectal differences, and so on, follow the links to cited references.</p>
`

if (window.location.href.includes('block')) out += `
        <p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">This is an interactive document:</strong> Click/tap on <span class="ex" style="font-size:1em;">coloured examples</span> to reveal detailed compositional information. If your browser supports it, your cursor will change to look like <img src="../common29/icons/info_cursor.png" alt="" style="height:1rem;"> as you hover over these items.</p>
`

else out += `
        <p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">This is an interactive document:</strong> Click/tap on the following to reveal detailed information and examples for each character: <strong>(a)</strong> <span class="ex" style="font-size:1em;">coloured characters</span> in examples and lists; <strong>(b)</strong> <span style="color:teal;">link text</span> on character names. If your browser supports it, your cursor will change to look like <img src="../common29/icons/info_cursor.png" alt="" style="height:1rem;"> as you hover over these items.</p>
`


out += `

        ${ fonts }


        <div id="about">

        <details class="supportdocs noprint">
        <summary class="instructions">More about using this page</a></summary>
`

if (window.location.href.includes('block')) out += `
        <p class="instructions"><span class="leadin">Character names.</span> The names of characters in codepoint markup drop the initial ${ script.toUpperCase() } label (purely to reduce the length of the examples). In other places the full name can be found.</p>

        <p class="instructions"><span class="leadin">Fonts.</span> The large character in the box will not be rendered unless the webfont downloaded with the page or a system font has a glyph for it. If there is no glyph and you want to see what it looks like, click on the <img src="../common/showImages.png" alt="Toggle images" style="vertical-align: middle; height:1rem;"> icon to toggle the large characters between font glyphs and graphics.</p>

        <p class="instructions"><span class="leadin">Navigation.</span> The <img src="../../shared/images/up.png" alt="Toggle images" style="vertical-align: middle; height:1rem;"> icon takes you to the top of the page.</p>
`
else out += `
        <p class="instructions"><span class="leadin">Character names.</span> The names of characters in codepoint markup drop the initial ${ script.toUpperCase() } label (purely to reduce the length of the examples). In other places the full name can be found.</p>

        <p class="instructions"><span class="leadin">Navigation.</span> The <img src="../../shared/images/up.png" alt="Toggle images" style="vertical-align: middle; height:1rem;"> icon opens the table of contents in a popup window. Dismiss it by clicking on the X alongside it, or by hitting the ESC key.</p>

        <p class="instructions"><span class="leadin">Detailed character notes.</span> Clicking on coloured characters in lists or on character names opens panels that give detailed information about each character. This information is taken from the companion document, <a target="_blank" href="block.html">${ script } Character Notes</a>. (Those panels can be dismissed by pressing on the ESC key.)</p>
`
out += `
        <p class="instructions"><span class="leadin">Transcriptions &amp; transliterations.</span> Phonological transcriptions are surrounded by <span style="white-space:nowrap;">⌈corner brackets⌋</span>, to indicate that they vary between narrow, [phonetic] and broad, /phonemic/ transcriptions.<br>
        Latin <a href="../glossary/index.html#transcription" class="termref">transcriptions</a> between <span style="white-space:nowrap;">&lt;angle brackets&gt;</span>, represent the letters as commonly written in the Latin script.<br>
        A <em><a href="../glossary/index.html#transliteration" class="termref">transliteration</a></em> has also been developed especially for this orthography, and is generally based on the sound of a letter where possible, but where a letter has multiple pronunciations, the transliteration represents only one.<br>
        Transliterations provide perfect round-trip conversion between the native script and Latin, whereas Latin transcriptions rarely do.<br>
        When you click on an example to see its composition, the top of the panel that opens contains a transliteration, followed by the native text, then (if available) an IPA transcription.</p>
        
        <!--p class="instructions noprint"><span class="leadin">Show characters.</span><button onclick="document.getElementById('characterDump').textContent = allchars;">GO</button></p>
        <p id="characterDump"></p-->
`


if (window.location.href.includes('block')) out += `
<details><summary onclick="chMarkup = document.querySelectorAll('.charimg')
    chList = ''
    for (i=0;i<chMarkup.length;i++) chList += chMarkup[i].textContent+' '
    document.getElementById('charsListed').innerHTML = chList
" style="color: #CC6600; font-style: italic; margin-right: 1em; font-size: 70%; font-weight:bold;">Show all characters listed here</summary>
    <p id="charsListed"></p>
    </details>
`


out += `
        </details>

        </div>
        
        
        <dialog id="copyNotice">Copied !</dialog>
        `
        }
    
if (! window.location.href.includes('block')) out += `
    <span id="findChar"><input type="text" style="text-align:center; width: 1rem; height:1.4rem; vertical-align:top;" title="Highlight locations of a character in this page." onchange="if (this.value !== '') makeFootnoteIndex(this.value)" placeholder="🔎"></span>

    <img id="showTOC" src="../../shared/images/up.png" alt="TOC." title="Show the table of contents." onclick="document.getElementById('tocPanel').style.display = 'block'">

    <div id="optionSwitch" title="Options." onclick="if (document.getElementById('showTranscriptions').style.display === 'block') document.getElementById('showTranscriptions').style.display='none'; else document.getElementById('showTranscriptions').style.display='block';"><img src="../../shared/images/showImages.png" alt="Option menu"></div>

    <div id="contrastSwitch" title="Accessibility settings." onclick="document.getElementById('access').style.display='flex'; document.getElementById('settings_saved').style.visibility='hidden';"><img src="../../shared/images/access.png" alt="Accessibility settings"></div>
    
    
    <!-- ACCESSIBILITY PANEL  -->
    <div id="access" style="display: none;">
    <div id="access_contrast">
    <div id="contrastChoice">
    
    <button id="contrastLow" class="access_selected" onClick="
    document.querySelector('.access_selected').classList.remove('access_selected');
	document.querySelector('body').classList.remove('contrast');
	document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('low');
        access.contrast = 'low';
        this.classList.add('access_selected');">Low contrast</button>
        
    <button id="contrastDark" onClick="
    document.querySelector('.access_selected').classList.remove('access_selected');
	document.querySelector('body').classList.remove('low');
	document.querySelector('body').classList.remove('contrast');
    document.querySelector('body').classList.add('dark');
        access.contrast = 'dark';
        this.classList.add('access_selected');">Dark mode</button>
        
    <button id="contrastHigh" onClick="
    document.querySelector('.access_selected').classList.remove('access_selected');
	document.querySelector('body').classList.remove('low');
	document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('contrast');
        access.contrast = 'high';
        this.classList.add('access_selected');">High contrast</button>
    </div>
    </div>

    <div id="access_fontsize">Set text size: <input id="accessFontsize" type="range" min="15" max="24" step="1" value="15" oninput="access.fontsize=this.value; document.querySelector('html').style.fontSize = this.value+'px'" style="width:12rem;"></div>
    <div style="color: white;">Font &amp; text size of the examples can be changed independently using the control that pulls out from the bottom right of the page.</div>
    
    <div style="display:flex; flex-direction:row; flex-wrap:nowrap; justify-content:space-around;">
    <div style="margin-block-start: 1rem; font-size: 1.4rem; color: black; cursor:pointer;" onclick="localStorage['docsAccess'] = JSON.stringify(access); document.getElementById('settings_saved').style.visibility = 'visible';">Save settings <span id="settings_saved" style="visibility:hidden">✓</span></div>
    
    <div style="margin-block-start: 1rem; font-size: 1.4rem; color: black; cursor:pointer;" onclick="this.parentNode.parentNode.style.display='none';">Close X</div>
    </div>
    </div>
`

//out += `<div>`

if (window.location.href.includes('block')) out += `
<p><a target="_blank" href="index.html#languages">Languages using the ${ script } script</a> • <a target="_blank" href="../links.html?iso=${ iso }">${ script } links</a> • <a target="_blank" href="../index.html#charnotes">Other character notes</a></p>
`
else out += `
<p><a target="_blank" href="index.html#languages">Languages using the ${ script } script</a> • <a target="_blank" href="../../pickers/${ picker }/index.html">${ orthogName } picker</a> • <a target="_blank" href="../links.html?iso=${ iso }">${ script } links</a> • <a target="_blank" href="../index.html#scriptnotes">Other orthography notes</a></p>

    `
    
    
	document.getElementById('usage').outerHTML = out
    }







/* !!!! Calls to this function should be phased out in favour of addPageIntro  !!! */
function addUsageAdvice (script, iso, picker) {
	// Add a para to the intro & add accessibility controls
    var draft = ''
    var fonts = ''
    
    // capture any para relating to font availability
    if (document.querySelector('#fontWarning')) fonts = `<p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">Fonts:</strong> ${ document.querySelector('#fontWarning').innerHTML }</p>`
   
    // Add a line to mention this is a draft if 'draft' appears in h1
    if (document.querySelector('h1').textContent.includes('draft')) draft = `<p class="instructions">This page is a work in progress. The information given here should be correct, but needs to be added to and refined further.</p>`


    var out = ''
	
    
    if (script !== '') {
        out += `
        <p>See a list of <a href="index.html#languages" target="_blank">languages using the ${ orthogName } script</a>.</p>

        ${ draft }

        <p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">Phonological transcriptions:</strong> These should be treated as an approximate guide, only. They are taken from the sources consulted, and may be narrow or broad, phonemic or phonetic, depending on what is available. They mostly represent pronunciation of words in isolation. For more detailed information about allophones, alternations, sandhi, dialectal differences, and so on, follow the links to cited references.</p>

        <p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">This is an interactive document:</strong> Click/tap on the following to reveal detailed information and examples for each character: (a) <span class="ex">coloured characters</span> in examples and lists. If your browsers supports it, your cursor will change to look like <img src="../common29/icons/info_cursor.png" alt="" style="height:1rem;"> as you hover over these items. (b) <span style="color:teal;">link text</span> on character names. You can show details as the cursor moves over the characters in boxes, by selecting <samp>Detail on mouseover</samp> in the floating menu to the right.</p>

        <!--p style="line-height:1.4; font-style:italic; font-size:.9rem;"><strong style="font-size:120%;">This is an interactive document:</strong> Click/tap on the following to reveal detailed information and examples for each character: (a) characters in boxes with coloured backgrounds, (b) <span style="color:teal;">link text</span> on character names. (You can make this happen as the cursor moves over the characters in boxes, by selecting <samp>Detail on mouseover</samp> in the floating menu to the right.) The same information also appears in the companion document, <a href="block.html" target="_blank" class="linkHighlightx">${ orthogName } character notes</a>. In addition, you can click/tap on <span class="ex">coloured examples</span> and on figures to see a list of the characters they contain.</p-->


        ${ fonts }

        <div id="about">

        <details class="supportdocs noprint">
        <summary class="instructions">More about using this page</a></summary>

        <p class="instructions"><span class="leadin">Transcriptions.</span> Transcriptions in <span style="white-space:nowrap;">⌈corner brackets⌋</span> are taken from the sources consulted, and may be narrow or broad, phonemic or phonetic, depending on what is available (which is why corner brackets are used rather than the usual /phonemic/ and [phonetic] indicators). Transcriptions between <span style="white-space:nowrap;">&lt;angle brackets&gt;</span>, represent the letters as commonly written in the Latin script. When you click on an example to see its composition, the letters in the panel that opens are a <em><a href="../glossary/#transliteration" class="termref">transliteration</a></em>, rather than a <a href="../glossary/#transcription" class="termref">transcription</a>: the difference being that a transliteration provides perfect round-trip conversion between the native and Latin, whereas transcriptions rarely do.  The transliteration has been developed especially for this page, and is generally based on the sound of a letter where possible, but where a letter has multiple pronunciations, the transliteration represents only one.</p>

        <p class="instructions noprint"><span class="leadin">Detailed topic information.</span> Footnote  links with an arrow alongside take you to more detailed information on the current topic.</p>

        <p class="instructions noprint"><span class="leadin">Changing fonts.</span>Click on the vertical blue bar (bottom right) to change font settings for the sample text.</p>
        
        <p class="instructions noprint"><span class="leadin">Show characters.</span><button onclick="document.getElementById('characterDump').textContent = allchars;">GO</button></p>
        <p id="characterDump"></p>
        </details>


        <details class="supportdocs noprint">
        <summary class="instructions"><a href="../links.html?iso=${ scriptTag }">Related pages</a></summary>
        </details>

        <details class="supportdocs noprint">
        <summary class="instructions"><a target="_blank" href="../../pickers/${ pickerDir }/index.html">Character app</a></summary>
        </details>

        <details class="supportdocs noprint">
        <summary class="instructions"><a href="../index.html#scriptnotes">Other orthography descriptions</a></summary>
        </details>

        </div>
        
        
        <dialog id="copyNotice">Copied !</dialog>
        `
        }
    
    out += `
    <img id="showTOC" src="../../shared/images/up.png" alt="TOC." title="Show the table of contents." onclick="  document.getElementById('tocPanel').style.display = 'block'">

    <div id="optionSwitch" title="Options." onclick="if (document.getElementById('showTranscriptions').style.display === 'block') document.getElementById('showTranscriptions').style.display='none'; else document.getElementById('showTranscriptions').style.display='block';"><img src="../../shared/images/showImages.png" alt="Option menu"></div>

    <div id="contrastSwitch" title="Accessibility settings." onclick="document.getElementById('access').style.display='flex'; document.getElementById('settings_saved').style.visibility='hidden';"><img src="../../shared/images/access.png" alt="Accessibility settings"></div>
    
    
    <!-- ACCESSIBILITY PANEL  -->
    <div id="access" style="display: none;">
    <div id="access_contrast">
    <div id="contrastChoice">
    
    <button id="contrastLow" class="access_selected" onClick="
    document.querySelector('.access_selected').classList.remove('access_selected');
	document.querySelector('body').classList.remove('contrast');
	document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('low');
        access.contrast = 'low';
        this.classList.add('access_selected');">Low contrast</button>
        
    <button id="contrastDark" onClick="
    document.querySelector('.access_selected').classList.remove('access_selected');
	document.querySelector('body').classList.remove('low');
	document.querySelector('body').classList.remove('contrast');
    document.querySelector('body').classList.add('dark');
        access.contrast = 'dark';
        this.classList.add('access_selected');">Dark mode</button>
        
    <button id="contrastHigh" onClick="
    document.querySelector('.access_selected').classList.remove('access_selected');
	document.querySelector('body').classList.remove('low');
	document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('contrast');
        access.contrast = 'high';
        this.classList.add('access_selected');">High contrast</button>
    </div>
    </div>

    <div id="access_fontsize">Set text size: <input id="accessFontsize" type="range" min="15" max="24" step="1" value="15" oninput="access.fontsize=this.value; document.querySelector('html').style.fontSize = this.value+'px'" style="width:12rem;"></div>
    <div style="color: white;">Font &amp; text size of the examples can be changed independently using the control that pulls out from the bottom right of the page.</div>
    
    <div style="display:flex; flex-direction:row; flex-wrap:nowrap; justify-content:space-around;">
    <div style="margin-block-start: 1rem; font-size: 1.4rem; color: black; cursor:pointer;" onclick="localStorage['docsAccess'] = JSON.stringify(access); document.getElementById('settings_saved').style.visibility = 'visible';">Save settings <span id="settings_saved" style="visibility:hidden">✓</span></div>
    
    <div style="margin-block-start: 1rem; font-size: 1.4rem; color: black; cursor:pointer;" onclick="this.parentNode.parentNode.style.display='none';">Close X</div>
    </div>
    </div>
    `
    
    
	document.getElementById('usage').outerHTML = out
    }








