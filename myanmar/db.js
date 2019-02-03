var spreadsheet = `
က	k	k		ka.	k -ʔ ɡ tɕ-	consonant					
ခ	k	kʰ		hka.	kʰ ɡ tɕ-	consonant					
ဂ	g	g		ga.	ɡ dʑ-	consonant					
ဃ	g	ġ		gha.	ɡ	consonant			rare		
င	n	ŋ		nga.	ŋ	consonant					
စ	s	ṡ		ca.	s -ʔ z z-	consonant					
ဆ	s	ṡʰ		hca.	sʰ z	consonant					
ဇ	z	ż		ja.	z	consonant					
ဈ	z	z̈		jha.	z	consonant			rare		
ည	n	ɲ		nya.	ɲ	consonant					
ဉ	n	ɲ̇		nya.	ɲ	consonant					
ဋ	t	ṫ		ṭa.	t	consonant			mostly archaic		
ဌ	t	ẗ		hṭa.	t	consonant			mostly archaic		
ဍ	d	ḋ		ḍa.	d	consonant			mostly archaic		
ဎ	d	d̈		ḍha.	d	consonant			mostly archaic		
ဏ	n	ṅ		ṇa.	n	consonant			mostly archaic		
တ	t¶	t		ta.	t -ʔ d	consonant					
ထ	t	tʰ		hta.	tʰ d	consonant					
ဒ	d¶	d		da.	d	consonant					
ဓ	d	d̊		dha.	d	consonant					
န	n¶	n		na.	n	consonant					
ပ	p	p		pa.	p -ʔ b	consonant					
ဖ	p	pʰ		hpa.	pʰ f b	consonant					
ဗ	b	b		ba.	b v	consonant					
ဘ	b	ḃ		bha.	b pʰ-	consonant					
မ	m	m		ma.	m	consonant					
ယ	y	y		ya.	j ɛ	consonant					
ရ	r	ṙ		ra.	j r ʃ	consonant					
လ	l	l		la.	l -ʃ-	consonant					
ဠ	l	l̇		ḷ	l -ʃ-	consonant			rare		
ဝ	w	w		wa.	w	consonant					
သ	@	θ		sa.	θ ð	consonant					
ဿ	@	θː		ssa.	θ	consonant ligature					
ဟ	h	h		ha.	h	consonant					
အ	}	ʔ		a	ʔ ʔa	consonant/indpendent vowel					
											
											
ျ	y	y̆		ya.	j ʨ ʥ ʃ	medial consonant					
ြ	j	j̆		ra.	j ʨ ʥ ɲ	medial consonant					
ွ	w	w̆		wa.	w	medial consonant					
ှ		h̆		ha	̥ -ʃ	medial consonant					
											
											
ံ	n	n̽		m	ɴ	final consonant					
											
											
ဣ	I	ị		i.	ʔḭ	independent vowel				ိ	
ဤ	I	ị̈		i:	ʔì	independent vowel				ီ	
ဥ	U	ụ		u.	ʔṵ	independent vowel				ု	
ဦ	U	ụ̇		u	ʔù	independent vowel				ူ	
ဧ	E	ẹ		ei:	ʔè	independent vowel				ေ	
ဩ	O	ɔ̣		au:	ʔɔ́	independent vowel					
ဪ	O	ɔ̣̇		au	ʔɔ̀	independent vowel					
											
											
ာ	a	a		a	a	vowel sign					
ါ	a	ä		a	a	vowel sign					
ိ	i	i		i.	i eɪ	vowel sign					ဣ
ီ	i	ï		i	i	vowel sign					ဤ
ု	u	u		u.	u oʊ	vowel sign					ဥ
ူ	u	u̇		u	u	vowel sign					ဦ
ေ	e	e		e	e	vowel sign					ဧ
ဲ	e	ɛ		ai:	ɛ	vowel sign					
											
											
်	\	ˣ				asat	əθaʔ	အသတ်			
္	*	͓				virama					
											
											
့	^	¹		.		tone mark					
း	^	²		:		tone mark					
											
											
၌	$	(loc)		hnai.	n̥aiʔ	symbol	ɛʔkʰəjanʰaɪʔ				
၍	$	(sub)		rwe	jwɛ	symbol	ɛʔkʰəjajwɛ				
၎	$	(afore)		la. kaung		symbol	ɛʔkʰəjajwɛ				
၏	$	(gen)		e	í	symbol	ɛʔkʰəjaí				
၊	,	,		၊		comma					
။	.	.		။		full stop					
											
											
၀	0	0		0		digit					
၁	1	1		1		digit					
၂	2	2		2		digit					
၃	3	3		3		digit					
၄	4	4		4		digit					
၅	5	5		5		digit					
၆	6	6		6		digit					
၇	7	7		7		digit					
၈	8	8		8		digit					
၉	9	9		9		digit					
											
											
\u200B	]	␣									
\u200C	=	ₓ									
\u200D	=	₊									
											
											
											
											
											
											
											
											
ို	o	iu	o	ui	o aɪ						
ော	o	ea	ɔ	au:	ɔ aʊ						
ယ်	e	yˣ	ɛ	ai	ɛ						
ေါ	o	eä	ɔ	au:	ɔ aʊ						
ော်	o	eaˣ	ɔ	au							
ေါ်	o	eäˣ	ɔ	au							
											
္လ		l̆		la.		medial l					
င်္		ṅ̽		ng		kinzi					
`

var cols = {
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
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
"transcription":4,

//"othertranscriptions": [[3, 'Transcription']]
}