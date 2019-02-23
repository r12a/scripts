var spreadsheet = `
ક	k	k	k	k	consonant				
ખ	K	kʰ	kh	kʰ	consonant				
ગ	g	g	g	g	consonant				
ઘ	G	gʰ	gh	gʰ	consonant				
ઙ	N	ŋ	ṅ	ŋ	consonant				
ચ	c	c	c	ʧ	consonant				
છ	c	cʰ	ch	ʧʰ	consonant				
જ	d	ʤ	j	ʤ	consonant				
ઝ	d	ʤʰ	jh	ʤʰ	consonant				
ઞ	n	ɲ	ñ	ɲ	consonant				
ટ	t	ʈ	ṭ	ʈ	consonant				
ઠ	T	ʈʰ	ṭh	ʈʰ	consonant				
ડ	d	ɖ	ḍ	ɖ	consonant				
ઢ	D	ɖʰ	ḍh	ɖʰ	consonant				
ણ	n	ɳ	ṇ	ɳ	consonant				
ત	t¶	t	t	t	consonant				
થ	T¶	tʰ	th	tʰ	consonant				
દ	d¶	d	d	d	consonant				
ધ	D¶	dʰ	dh	dʰ	consonant				
ન	n¶	n	n	n	consonant				
પ	p	p	p	p	consonant				
ફ	f	f	ph	f	consonant				
બ	b	b	b	b	consonant				
ભ	B	bʰ	bh	bʰ	consonant				
મ	m	m	m	m	consonant				
ય	y	y	y	j	consonant				
ર	r	r	r	r	consonant				
લ	l	l	l	l	consonant				
ળ	l	ɭ	ḷ	ɭ	consonant				
વ	v	ʋ	v	w ʋ	consonant				
શ	c	ɕ	ś	ɕ ʃ	consonant				
ષ	s	ʃ	ṣ	ʃ	consonant				
સ	s¶	s	s	s	consonant				
હ	h	h	h	ɦ	consonant				
									
									
									
ઁ			m̐						
ં	[	˜	ṁ	ä	vowel nasalisation	anusvār			
ઃ	h	h̽	ḥ	ɨ	visarga	visarga			
									
									
ૃ	R	r̥	r̥	ru	dependent vocalic				ઋ
ૄ	R	r̥̄	r̥̄		dependent vocalic				ૠ
ઋ	R	r̥̣	r̥	ru	independent vocalic			ૃ	
ૠ	R	r̥̣̄	r̥̄		independent vocalic			ૄ	
ૢ	L	l̥	l̥		dependent vocalic				ઌ
ૣ	L	l̥̄	l̥̄		dependent vocalic				ૡ
ઌ	L	l̥̣	l̥		independent vocalic			ૢ	
ૡ	L	l̥̣̄	l̥̄		independent vocalic			ૣ	
									
									
અ	E	ə̣	a	ə	independent vowel				
આ	A	ạ̄	ā	ɑ	independent vowel			ા	
ઇ	I	ị	i	i	independent vowel			િ	
ઈ	I	ị̄	ī	i	independent vowel			ી	
ઉ	U	ụ	u	u	independent vowel			ુ	
ઊ	U	ụ̄	ū	u	independent vowel			ૂ	
એ	E	ẹ	ē	e ɛ	independent vowel			ે	
ઐ	E	ə̣ʲ	ai	əj	independent vowel			ૈ	
ઓ	O	ọ	ō	o ɔ	independent vowel			ો	
ઔ	E	ə̣ʷ	au	əʋ	independent vowel			ૌ	
ઍ	A	æ̣	ê	æ	independent vowel			ૅ	
ઑ	O	ɔ̣	ô	ɔ	independent vowel			ૉ	
									
									
ા	e	ə	ā	ɑ	vowel sign	kāno			આ
િ	i	i	i	i	vowel sign	hrasva-ajju			ઇ
ી	i	ī	ī	i	vowel sign	dīrgha-ajju			ઈ
ુ	u	u	u	u	vowel sign	hrasva-varaṛũ			ઉ
ૂ	u	ū	ū	u	vowel sign	dīrgha-varaṛũ			ઊ
ે	e	e	ē	e ɛ	vowel sign	ek mātra			એ
ૈ	e	əʲ	ai	əj	vowel sign	be mātra			ઐ
ો	o	o	ō	o ɔ	vowel sign	kāno ek mātra			ઓ
ૌ	e	əʷ	au	əʋ	vowel sign	kāno be mātra			ઔ
ૅ	a	æ	ê	æ	vowel sign				ઍ
ૉ	o	ɔ	ô	ɔ	vowel sign				ઑ
									
									
ૐ									
૱									
									
									
્	*	͓			virama				
઼	[	̣			nukta				
									
									
૦	0	0			digit	mīṇḍu or shunya			
૧	1	1			digit	ekado or ek			
૨	2	2			digit	bagado or bay			
૩	3	3			digit	tragado or tran			
૪	4	4			digit	chogado or chaar			
૫	5	5			digit	pāchado or paanch			
૬	6	6			digit	chagado or chah			
૭	7	7			digit	sātado or sāt			
૮	8	8			digit	āṭhado or āanth			
૯	9	9			digit	navado or nav			
`

var cols = {
"transLoc": 2,
"ipaLoc": 4,
"typeLoc": 5,
"nnameLoc": 0,
"nameLoc": 6,
"numLoc": 0,
"statusLoc": 7,
"dvowel": 8,
"ivowel": 9,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"transcription":3,

"othertranscriptions": [[3, 'ISO 19515']]
}