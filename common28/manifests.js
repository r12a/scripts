// settings for the script notes pages


if (langVariables==='cyrl-mn') {
pickerDirectory='cyrl-mn'
notesLangtag='mn'
blockFilePath='/scripts/cyrillic/block'
langTag='mn'
scriptTag='mong'
scriptSummaryTableName='khk'
notesDirectory='mongolian'
charUsageBCP='khk'
}

else if (manifest==='thai') {
languageName = 'Thai'
lang = 'ta'
letterClassName = 'ta'
direction = ''
explainerDir = 'tamil/'
charappDir = 'taml/'

notesLangtag='mn'
blockFilePath='/scripts/cyrillic/block'
scriptTag='mong'
scriptSummaryTableName='khk'
notesDirectory='mongolian'
charUsageBCP='khk'
version = 'v27'
}


if (scriptVariables==='thai') {
window.scriptName = 'Thai'
window.ghDirectory = 'thai'
window.blockDirectory = 'thai'
window.languageList = ['my','shn'] // lang tags for each orthography handled
window.detailsfileList = ['my','shn'] // first part of xx-details for each orthography
window.scriptISO = 'mymr'
window.webfonts = ["Noto Sans Adlam WF","Noto Sans Adlam Unjoined WF"]
window.defaultSize = '24px'

}



else {
window.languageName = 'Tamil'
window.letterClassName = 'ta'
window.lang = 'ta'
window.direction = ''
window.explainerDir = 'tamil/'
window.charappDir = 'taml/'

window.version = 'v27'
window.scriptName = 'Arabic'
window.ghDirectory = 'myanmar'
window.blockDirectory = 'myanmar'
window.languageList = ['my','shn'] // lang tags for each orthography handled
window.detailsfileList = ['my','shn'] // first part of xx-details for each orthography
window.scriptISO = 'mymr'
window.webfonts = ["Noto Sans Adlam WF","Noto Sans Adlam Unjoined WF"]
window.defaultSize = '24px'

initialise(`/scripts/${ blockDirectory }/block`, ghDirectory, detailsfileList, version)
for (i=0;i<languageList.length;i++) autoTransliterate(languageList[i])
makeFontChanger(languageList.join(','), scriptISO, webfonts, defaultSize)
}