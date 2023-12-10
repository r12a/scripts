/*
native | meaning | IPA① | transcription | other transcriptions② | notes | wiktionary③


① separate each text unit (consonant+combining_mark(s)) with §, separate phonetic syllables with .
   use ‹ and › for a sound that spans 2 text units
   use – for a text unit that doesn't produce sound
   syllable boundary markers go inside previous unit, and emphasis markers begin emphasised unit

② the previous transcription field is always Latin. 
   if there is another key orthography (eg. Mongolian cyrillic) it goes here.
   vowelled/unvowelled alternatives also go here

③ if Wiktionary spells the word differently, add the spelling here
*/


otherTranscription = true   // kicks in the latest order of items: indicates that this uses a format that includes other transcriptions in the position shown above – this affects the assignments for the code, and i think also affects lookup for script notes that show both unvocalised and vocalised
termListType = 3			// picks up sources automatically




autoExpandExamples.blt = `

@ wiktionary

ꪀꪚꪾ|with, and|k§ap²
ꪀꪫꪱꪉ|deer|k§ʷ§aː§ŋ˨
ꪀꪾꪚ||
ꪁꪫꪱꪣ|word, language|k§ʷ§aː§m˥
ꪁꪫꪱꪥ|water buffalo|k§ʷ§aː§j˥
ꪁꪮꪉꫂ||
ꪁꪲꪣ||
ꪁꪳꪒ||
ꪁꪾ|gold|kam⁴
ꪁ꫁ꪮꪉ||
ꪁ꫁ꪱ||
ꪄꪫꪱꪙ|axe|x§ʷ§aː§n˨
ꪄꪮꪥꫂ||
ꪄꪱꪣ||
ꪄꪱꪥ|to sell|x§aː§j˨
ꪄꪱꫂ||
ꪄꪳꪙꫂ||
ꪄꪳ꫁ꪙ||
ꪄꪴꪙꫀ|dust|xun²
ꪄꪴ꪿ꪙ|dust|xu§n²
ꪄ꫁ꪮꪥ|I, me|x§ɔ§j˨˩ˀ
ꪄ꫁ꪱ||
ꪅꪺꪀ|tadpole|x§uə̯§ʔ˦|ꞌkhuạk
ꪉꪮꪀ|to sprout|ŋɔʔ˦
ꪉꪴ|snake|ŋuː˥
ꪊꪮꪚ|hoe|t͡ɕ§ɔ§p̚˦˥
ꪊꪰ꪿ꪉ|so, then|t͡ɕa§ŋ˦˥|chắng
ꪋꪱꪉꫂ||
ꪋ꫁ꪱꪉ|elephant|t͡ɕ§aː§ŋ˧˩ˀ
ꪎꪮꪉ|two|s§ɔ§ŋ˨
ꪎꪮꪙ||
ꪎꪱꪡ꫁ꪮꪉ||
ꪎꪱꪣ||
ꪎꪲꪚ|ten|si§p̚˦˥
ꪎꪲ꪿||
ꪎꪲꫀ||
ꪎꪴꪉ||
ꪎꪺꪉꫂ|trousers|s§uə§ŋ§³
ꪎ꫁ꪺꪉ|trousers|s§uə§ŋ³
ꪏꪳ꫁|to buy|sɨː˧˩ˀ
ꪐꪱꫂ||
ꪐ꫁ꪱ|grass|ɲ§aː˨˩ˀ
ꪑꪱꪣ|time|ɲ§aː§m˥
ꪑꪲꪚ|to sew|ɲi§p̚˦
ꪒꪚꪾ|to extinguish|d§ap̚˦˥
ꪒꪲꪙ||
ꪒꪾꪚ||
ꪔꪰꪒ|to cut|ta§t²
ꪔꪱꪥ|to die|t§aː§j˨
ꪔꪲꪫ|to whistle|tʰi§w¹
ꪕꪮꪉꫂ||
ꪕ꫁ꪮꪉ|stomach|t§ɔ§ŋ˧˩ˀ
ꪖꪲ꫁ꪣ|to discard, drop|tʰi§m˨˩ˀ
ꪘꪰꪉ|skin, leather|na§ŋ˨
ꪘꪱꫂ||
ꪘ꫁ꪱ||
ꪙꪮꪙ||
ꪙꪰꪉꫀ||
ꪙꪰ꪿ꪉ|to sit|na§ŋ˦
ꪙꪳ꪿ꪉ||
ꪙꪾ꫁|water|nam˧˩ˀ
ꪙꪾꫂ||
ꪛꪱꪜꪺ|queen|b§aː˥.§p§uə̯˨
ꪜꪱ||
ꪜꪱꪀ||
ꪜꪳꪙ|arrow|pɨ§n¹
ꪜꪴ||
ꪜꪺ|king|p§uə̯˨
ꪜ꫁ꪽ|to squeeze|p§an³
ꪝꪷ|enough|pɔ⁴
ꪝ꪿ꪮꪣ|apple|p§ɔ§m˦
ꪡꪱꫂ||
ꪡ꫁ꪱ|sky|f§aː˧˩ˀ
ꪢꪱ|dog|m§aː˨
ꪢꪴ|pig|muː˨
ꪣꪱ||
ꪣꪲ||
ꪣꪳ||
ꪣꪸ|wife|miə⁴
ꪨꪰꪉ|behind, after|la§ŋ˨
ꪩꪳꪣ||
ꪩꪴꪀ|child|lu§ʔ˦
ꪩꪴꪀꪋꪱꪥ|son|l§u§ʔ˦.§t͡ɕ§aː§j˥
ꪩꪴꪀꪑꪲꪉ|daughter|lu§ʔ˦.§ɲi§ŋ˥
ꪫꪸꪀ|work, job|viə̯§ʔ˦
ꪬꪱꫂ||
ꪬ꫁ꪱ|five|h§aː˨˩ˀ
ꪭꪮꪀ||
ꪭꪮꪉꫂ||
ꪭꪮꪒ||
ꪭꪮꪥꫂ||
ꪭꪴ||
ꪭꪴꪒ|article|hu§t⁴
ꪭꪴ꫁||
ꪭꪴꫂ||
ꪭ꫁ꪮꪉ|to shout|h§ɔ§ŋ˧˩ˀ
ꪭ꫁ꪮꪥ|hundred|h§ɔ§j˧˩ˀ
ꪮꪮꪀ|to go out|ʔ§ɔ§ʔ²
ꪮꪮꪙꫀꪙꪮꪥꫂ||
ꪮ꪿ꪮꪙꪙ꫁ꪮꪥ|baby|ʔ§ɔ§n˦˥.§n§ɔ§j˧˩ˀ
ꪮ꪿ꪱꪉ|basin, tub|ʔaː§‹§ŋ²
ꪵꪀ꪿ꪙ|seed|›§kɛ§n²
ꪵꪁꪫꪥ|cinnamon|›§kʷɛ²§‹§‹‹
ꪵꪄꪉ||
ꪵꪄꪫ|green|›§xɛ§w˨
ꪵꪜꪒ||
ꪵꪣꪫ|cat|›§mɛ§w˥
ꪵꪣ꪿||
ꪵꪣꫀ||
ꪵꪮ||
ꪵꪮꪚ|to learn|›§ʔɛ§p̚˦˥
ꪶꪁꪙ|to stir|›§ko§n⁴
ꪶꪄꪙ|fur, feather|›§xo§n¹
ꪶꪊꪚ||
ꪶꪔꪒ||
ꪶꪙꪀ||
ꪶꪙꪣ||
ꪶꪠꪙ|rain|›§fo§n˨
ꪶꪩꪉ||
ꪶꪬꪀ||
ꪹꪀꪱꫂ||
ꪹꪀ꫁ꪱ||
ꪹꪄ꫁ꪱ||
ꪹꪄ꫁ꪱꪻꪊ||
ꪹꪉꪱ|reflection|›§ŋaːw¹§‹
ꪹꪊꪱꫂ||
ꪹꪊꪸꪒ||
ꪹꪊ꫁ꪱ||
ꪹꪋꪷ||
ꪹꪎ|tiger|›§sia¹
ꪹꪎ꫁||
ꪹꪎꫂ||
ꪹꪔꪸꪣ|full|›§te§m¹
ꪹꪚꪙ|moon|›§bɨə̯§n˨
ꪹꪚꪱꫀ||
ꪹꪚ꪿ꪱ|not|›§baw˦˥§‹
ꪹꪜꪸꪒ||
ꪹꪜꪸꪙ||
ꪹꪣꪉ||
ꪹꪣꪉꪡꪱꫂ||
ꪹꪣꪉꪡ꫁ꪱ||
ꪹꪫꪱꫂ||
ꪹꪫ꫁ꪱ|to say, speak|›§vaw˧˩ˀ§‹
ꪹꪬꪷꪉ|long|›§hə§ŋ¹
ꪹꪬꪸꪙ||
ꪻꪊ||
ꪻꪋ꫁||
ꪻꪐ꪿|large, big|›§ɲəw²
ꪻꪐꫀ||
ꪻꪚꪼꪣ꫁|leaf|›§baɰ˨.§›§maj˧˩ˀ
ꪻꪚꪼꪣꫂ||
ꪼꪀ꪿||
ꪼꪀꫀ||
ꪼꪒ꫁|to attain|›§daj³
ꪼꪕ||
ꪼꪕꪒꪾ|Tai Dam|›§taj§dam
ꪼꪜ||
ꪼꪡ||
ꪼꪡꪡ꫁ꪱ|electricity|›§faj˥.§f§aː˧˩ˀ
ꪼꪣ꫁||
ꪼꪣꫂ||
ꪼꪬ꫁||
ꪼꪬꫂ||
ꫛ|person|kon˥
ꫜ|one|nɨŋ˦

ꪘꪮꪉꪨꪺꪉ|sea|nɔŋ˨.luə̯ŋ˨
ꪅ꫁ꪽꪒꪷ|to be well|xa§n˧˩.§dɔː˨
ꪭꪰꪀ|love|ha§k˥






























`

