var trace = true // set to true to enable reporting

// add all or a list of functions to trace
var functionList = `
all
`




// normalize whitespace and turn into a Set
functionList = functionList.replace(/\s+/g, ' ').trim()
var traceSet = new Set(functionList.split(' '))



// the next two functions can be called from within any other function at the start and end

function traceHere(name, description, args) {

	// only log if this function is being traced
	if (!traceSet.has(name) && !traceSet.has('all')) return performance.now()

	// capture stack for caller info
	const err = new Error()
	const stack = err.stack.split('\n')

	// stack[0] = "Error"
	// stack[1] = "    at traceHere ..."
	// stack[2] = "    at callerFunction ..."
	const callerLine = stack[2] || ''
	const callerMatch = callerLine.match(/at\s+([^\s(]+)/)
	const caller = callerMatch ? callerMatch[1] : '(unknown)'

	// log header + args
	console.log(
        `\n\u001b[32m=== TRACE ${name}() ===\u001b[0m\n` +
		//`\n=== TRACE ${name}() ===\n` +
		`${description}\n` +
		`Called by: ${caller}\n` +
		`Arguments: ${JSON.stringify([...args].map(formatArg), null, 4)}\n`
		//`Arguments: ${JSON.stringify([...args].map(a => summarizeEvent(a)), null, 4)}\n`
		//`Arguments: ${JSON.stringify([...args], null, 4)}\n`
	   )

	// return timestamp so the caller can compute execution time
	return performance.now()
    }

function traceReturn(name, startTime, returnValue) {

	// only log if this function is being traced
	if (!traceSet.has(name) && !traceSet.has('all')) return returnValue

	const end = performance.now()

	console.log(
		`${ name } returns: ${JSON.stringify(returnValue, null, 4)}\n` +
		`Execution time: ${(end - startTime).toFixed(2)} ms\n`
	   )

	return returnValue
    }

function formatArg(a) {
	if (a instanceof Event) return summarizeEvent(a)
	if (a instanceof Node) return summarizeNode(a)
	return a
}

function summarizeEvent(evt) {
	if (!(evt instanceof Event)) return evt

	return {
		type: evt.type,
		target: evt.target?.tagName || null,
		id: evt.target?.id || null,
		class: evt.target?.className || null,
		value: evt.target?.value || null,
		key: evt.key || null,
		button: evt.button || null,
		clientX: evt.clientX,
		clientY: evt.clientY
		}
	}

function summarizeNode(node) {
	if (!(node instanceof Node)) return node

	return {
		nodeType: node.nodeType,
		tag: node.tagName || null,
		id: node.id || null,
		class: node.className || null,
		text: node.textContent?.trim().slice(0, 80) || null,
		attrs: node.attributes
			? [...node.attributes].reduce((o, a) => (o[a.name] = a.value, o), {})
			: null
		}
	}

/*
Add this code to every function - result should be null for functions not returning anything

	if (trace) var start = traceHere( 'functionName', `description`, arguments)


	if (start) return traceReturn('functionName', start, result)
	if (start) return traceReturn('functionName', start, null)
*/

/*var functionList = ``
//+ 'addPageFeatures makeCharDataObj  setMarks  addUsageHistory  doHeadersFooters  makeIndexIntro  makeSidePanel  copyIntroInfo  addResources  createtoc  removeEditorNotes  addDefinitions  setContentPrompts  setFindIPA  setTranslitToggle  createtocPanel  createReferences  makeAutoTranslitArray  expandCharacterBoxes  makeBreakdownTables  expandChMarkup  expandEgMarkup  makeIndexObject  makeMarkupForSection  pointToSummaryPages  addCharacterLists  makePopupDialogs  wrapToneLettersInBdi  showFnPopover  checkParameters'
//+ ' makeMarkupForSection makeIndexLine getStatusForIndex'
+ ' setTranslitToggle'


var functionList = `
all
`


var functionList = `
addCharacterLists
addDefinitions
addPageFeatures
addPageIntro
addResources
addUsageAdvice
addUsageHistory
autoTransliterate
bdiUncommonAttr
bp_appHeader
bp_compactHeader
bp_header
buildCharacterBox
characterBoxToPanel
checkParameters
clearFootnoteIndexHighlights
closeArticle
closeDialog
closeDialogEsc
closeTOC
convertTranscriptionData
copyCharToClipboard
copyExamplePanelText
copyIntroInfo
copyPanelList
copyPanelText
countUniqueChars
createReferences
createtoc
createtocPanel
doHeadersFooters
expandChMarkup
expandCharacterBoxes
expandEgMarkup
findIPA
findScriptGroup
findScriptISO
findSpecificIPA
getCallerName
getLanguage
getOrthographyList
getPhonemeList
getScriptGroup
getStatus
getStatusForIndex
getTransliteration
getUniqueChars
glyphHtmlForCodepoint
hideMenuText
includeHTML
initialiseIndex
initialiseShowNames
listAll
listCharactersInPanel
listCharsInSpreadsheet
listSectionCharacters
makeArticleDetails
makeAutoTranslitArray
makeBreakdownTables
makeCharArticleList
makeCharDataObj
makeCharacterLink
makeDetails
makeExampleArticle
makeExampleArticleDetails
makeFootnoteIndex
makeIndexIntro
makeIndexLine
makeIndexObject
makeMarkup
makeMarkupForSection
makePanelDetails
makePopupDialogs
makeSafeRegex
makeSidePanel
markupForCharDetails
normaliseHex
openExportWindow
pointToSummaryPages
printDetails
reTransliterate
readFlags
removeEditorNotes
renderTokens
setContentPrompts
setFigRefs
setFindIPA
setFootnoteRefs
setMarks
setOnclicks
setSectionRefs
setTranslitToggle
setupBlockLinks
shapingToPanel
showAbout
showAllCharDetails
showCharDetailsInPanel
showCharacterDetails
showFnPopover
showIPAPhoneEvt
showMenuText
showNameDetails
showTransliterations
showTransliterationsEvt
showUniqueCharsPopover
showUpperCaseRows
shownames_setClose
shownames_setImgOnclick
shownames_setOnclick
shownames_setOnclickX
toggleCustomList
toggleNotes
traceHere
traceReturn
transliterate
transliterateLang
transliteratePanel
unumToPanel
wrapToneLettersInBdi
shownames_setOnclickX
addUsageAdvice
bdiUncommonAttr
clearFootnoteIndexHighlights
copyCharToClipboard
copyExamplePanelText
copyPanelList
copyPanelText
countUniqueChars
findIPA
getCallerName
getOrthographyList
getScriptGroup
hideMenuText
listAll
makeCharacterLink
makeDetails
makeFootnoteIndex
makePanelDetails
markupForCharDetails
openExportWindow
printDetails
setFindIPA
setMarks
setTranslitToggle
showCharDetailsInPanel
showMenuText
shownames_setImgOnclick
`
*/




