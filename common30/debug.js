var trace = false // this is for backwards compat - use 'all' in traceSet

var functionList = `
addPageFeatures 
`

functionList = functionList.replace(/\s+/g,' ').trim()
var traceSet = new Set(functionList.split(' '))

traceSet.add()