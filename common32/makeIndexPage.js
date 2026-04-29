// these functions draw content on the index.html pages
// they need block-globals.js and refs.js


function writePage () {

    document.querySelector('title').textContent = `${ window.scriptName } index`
    document.getElementById('mainContent').innerHTML = createContent()
    addCollectionPages()
    makeScriptLanguageList()
    }




function createContent () {
    if (traceSet.has('createContent') || traceSet.has('all')) console.log('createContent()\n\tCreate the page.')
    
var out = ''

out += `
<header>${ bp_header('../../shared/images/world.gif','docs') }</header>
`

out += `<h1 style="hyphens: none;">${ window.scriptName }
<div class="subhead">&nbsp; orthographies</div></h1>`

out += `
<aside class="sidebar">
<nav>
<h2 style="margin-block-start: 0;">Related</h2>
<p><a href="../index.html#scriptnotes">All orthography descriptions</a></p>
<p><a href="block.html">Character notes</a></p>
<p><a href="../../pickers/index.html">Character apps</a></p>
<p><a href="../links.html?iso=${ window.scriptISO }">Additional information</a></p>
</nav>
</aside>
`

out += `
<div class="section">
<p>The following pages in this collection describe orthographies based on the ${ window.scriptName } script:</p>
<ul id="olinks">
</ul>
</div>
`

out += `
<section id="languages">
<h2>Languages using this script</h2>
<p>The ${ window.scriptName } script is used for the following languages. Information is from ScriptSource and Ethnologue.</p>
<ul id="scriptLanguageList">
</ul>
</section>
`
return out
}


function addCollectionPages () {
    if (traceSet.has('makeScriptLanguageList') || traceSet.has('all')) console.log('makeScriptLanguageList(',')\n\tCreates the list in the first section using the object defined in refs.js\n\tVariable scriptLanguageList: ', scriptLanguageList)
    if (document.getElementById('olinks') === null) return
    
    var out = ''
    var count = 0
    for (var langtag in scriptLanguageList) {
        if (scriptLanguageList[langtag].url) out += `<li class="linkedOrthography"><a href="${ scriptLanguageList[langtag].url }">${ scriptLanguageList[langtag].name }</a></li>\n`
        }
    document.getElementById('olinks').innerHTML = out
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

