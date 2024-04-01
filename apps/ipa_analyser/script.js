


function showIPAPhone (str) { 
	// look for a Wikipedia page that describes the phoneme input
        
    searchitem = str.normalize("NFD")
    
    //console.log('Looking up '+searchitem)
    founditems = []
    
    var out = ''
            
    out += `<table id="ipaAnalyseTable">`
    
    var searchArray = [... searchitem]
    for (i=0;i<searchArray.length;i++) {
        if (IPAsymbols[searchArray[i]]) {
            var names = IPAsymbols[searchArray[i]].split('§')
            var name = names[0]
            if (typeof names[1] !== 'undefined') var webpage = names[1]
            else webpage = names[0]
            out += `<tr><th>${ searchArray[i] }</th><td><a href="https://en.wikipedia.org/wiki/${ webpage.replace(/ /g,'_') }" target=_blank>${ name }</a></td></tr>`
            }
        }
    
    out += `</table>`
    
    
    document.getElementById('out').innerHTML = out
	}




function openUniViewWindow () {
	var chars =  document.getElementById('in').value
	var analyse = window.open('../../../uniview/index.html?charlist='+	encodeURIComponent(chars), 'analyse') 
	analyse.focus()
	}

