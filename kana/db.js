var spreadsheet = `
ア	a	a	
イ	i	i	
ウ	u	u	
エ	e	e	
オ	o	o	
カ	ka	ka	
キ	ki	ki	
ク	ku	ku	
ケ	ke	ke	
コ	ko	ko	
サ	sa	sa	
シ	ʃi	shi	
ス	su	su	
セ	se	se	
ソ	so	so	
タ	ta	ta	
チ	t͡ʃi	chi	
ツ	t͡su	tsu	
テ	te	te	
ト	to	to	
ナ	na	na	
ニ	ni	ni	
ヌ	nu	nu	
ネ	ne	ne	
ノ	no	no	
ハ	ha	ha	
ヒ	hi	hi	
フ	hu	hu	
ヘ	he	he	
ホ	ho	ho	
マ	ma	ma	
ミ	mi	mi	
ム	mu	mu	
メ	me	me	
モ	mo	mo	
ヤ	ja	ya	
ユ	ju	yu	
ヨ	jo	yo	
ラ	ra	ra	
リ	ri	ri	
ル	re	re	
レ	ru	ru	
ロ	ro	ro	
ワ	wa	wa	
ヰ	wi	wi	
ヱ	wu	wu	
ヲ	wo	wo	
ン	n	n	
			
			
ガ	ga	ga	
ギ	gi	gi	
グ	gu	gu	
ゲ	ge	ge	
ゴ	go	go	
ザ	za	za	
ジ	d͡ʒi	ji	
ズ	d͡zu	zu	
ゼ	ze	ze	
ゾ	zo	zo	
ダ	da	da	
ヂ	d͡ʒi	ji	
ヅ	d͡zu	zu	
デ	de	de	
ド	do	do	
バ	ba	ba	
ビ	bi	bi	
ブ	bu	bu	
ベ	be	be	
ボ	bo	bo	
ヷ	va	va	
ヸ	vi	vi	
ヹ	vu	vu	
ヺ	vo	vo	
			
			
パ	pa	pa	
ピ	pi	pi	
プ	pu	pu	
ペ	pe	pe	
ポ	po	po	
			
			
ァ	a	a	
ィ	i	i	
ゥ	u	u	
ェ	e	e	
ォ	o	o	
ャ	ja	ya	
ュ	ju	yu	
ョ	jo	yo	
			
			
ッ			
			
			
ー			vowel lengthener
			
			
ヽ			unvoiced iteration mark
ヾ			voiced iteration mark
			
			
゠			
ヴ			
ヮ			
ヵ			
ヶ			
ヿ			
`



var cols = {
"transLoc": 0,
"ipaLoc": 1,
"typeLoc": 2,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 0,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"transcription":0,

//"othertranscriptions": [[3, 'LOC']]
}