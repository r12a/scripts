// prompts will be inserted into the title attributes of various headers after page upload


var contentPrompts = {
'cursive':"Is this script cursive? Is the basic shape of a letter radically changed? Is it sometimes not cursive? Are there any special features to note? Are Unicode joiner and non-joiner characters needed to override default joining behaviours?",

'gsub':"Are special glyph forms needed, depending on the context in which a character is used? Do glyphs interact in some circumstances?",

"gpos":"Are there requirements to position diacritics or other items specially, depending on context? Does the script have multiple diacritics competing for the same location relative to the base?",

"fontstyle":"Are italicisation, bolding, oblique, etc relevant? Do italic fonts lean in the right direction? Is synthesised italicisation problematic? Are there other problems relating to bolding or italicisation - perhaps relating to generalised assumptions of applicability?",

"graphemes":"Do Unicode grapheme clusters appropriately segment character units for the script? Are there special requirements when double-clicking on the text, or moving through the text with the cursor, or backspace, etc.?",

"word":"Are words separated by spaces, or other characters? Are there special requirements when double-clicking  on the text? Are words hyphenated?",

"phrase":"What characters are used to indicate the boundaries of phrases, sentences, and sections?",

"bracketing":"What characters or methods (eg. text decoration) are used to convey information about a range of text?\n• If lines are drawn alongside, over or through the text, do they need to be a special distance from the text itself?\n• Is it important to skip characters when underlining, etc?\n• How do things change for vertically set text?\n• (See also the following sections which deal with specific purposes.)",

"quotations":"What characters are used to indicate quotations?\n• Do quotations within quotations use different characters?\n• What characters are used to indicate dialogue?",

"abbrev":"What characters are used to indicate abbreviation, ellipsis &amp; repetition?",

"emphasis":"How are emphasis and highlighting achieved?\n• If lines are drawn alongside, over or through the text, do they need to be a special distance from the text itself?\n• Is it important to skip characters when underlining, etc?\n• How do things change for vertically set text?",

"otherPunctuation":"Punctuation not already mentioned, such as dashes, connectors, separators, etc.",

"inlinenotes":"What mechanisms, if any, are used to create *inline* notes and annotations? (For referent-type notes such as footnotes, see below.)",

"linebreak":"Are there special rules about the way text  wraps when it hits the end of a line?\n• Does line-breaking wrap whole 'words' at a time, or characters, or something else (such as syllables in Tibetan and Javanese)?\n• What characters should not appear at the end or start of a line, and what should be done to prevent that?",

"hyphenation":"Is hyphenation used, or something else? What rules are used? What difficulties exist?",

"justification":"Does text in a paragraph needs to have flush lines down both sides?\n• Does the script allow punctuation to hang outside the text box at the start or end of a line?\n• Where adjustments are need to make a line flush, how is that done?\n• Does the script shrink/stretch space between words and/or letters?\n• Are word baselines stretched, as in Arabic?\n• What about paragraph indents?",

"letterspace":"Does the script create emphasis or other effects by spacing out the words, letters or syllables in a word?  (For justification related spacing, see above).",
"lists":"Are there list or other counter styles in use?  If so, what is the format used? Do counters need to be upright in vertical text? Are there other aspects related to counters and lists that need to be addressed?",

"initials":"Does the script use special styling of the initial letter of a line or paragraph, such as for drop caps or similar? How about the size relationship between the large letter and the lines alongide? where does the large letter anchor relative to the lines alongside? is it normal to include initial quote marks in the large letter? is the large letter really a syllable? Are dropped, sunken, and raised types found? etc.",

"generallayout":"How are the main text area and ancilliary areas positioned and defined? Are there any special requirements here, such as dimensions in characters for the Japanese kihon hanmen? The book cover for scripts that are read right-to-left scripts is on the right of the spine, rather than the left.  When content can flow vertically and to the left or right, how to specify the location of objects, text, etc. relative to the flow? Do tables and grid layouts work as expected? How do columns work in vertical text? Can you mix block of vertical and horizontal text? Does text scroll in a different direction?",

"grids":"Does the script have special requirements for character grids or tables?",
"footnotes":"Does the script have special requirements for notes, footnotes, endnotes or other necessary annotations of this kind? (There is a section above for purely inline annotations, such as ruby or warichu. This section is more about annotation systems that separate the reference marks and the content of the notes.)",

"interaction":"Are vertical form controls needed? Are scroll bars in an unusual position? Other special requirements for user interaction?",

"headers":"Are there special conventions for page numbering, or the way that running headers and the like are handled?",

}





function setContentPrompts () {
	if (contentPrompts) {
		for (thePrompt in contentPrompts) {
			var node = document.getElementById(thePrompt)
			if (node) {		 	
				var heading = node.querySelector('h3')
				if (heading) heading.title = contentPrompts[thePrompt]
				
				var promptPara = node.querySelector('.prompts')
				if (promptPara) promptPara.textContent = contentPrompts[thePrompt]
				}
			 }
		}
	}

