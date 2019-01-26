var spreadsheet = `
ক	k	k	k	k	k	consonant	kɔ				
খ	K	kʰ	K	kh	kʰ	consonant	khɔ				
গ	g	g	g	g	g	consonant	gɔ				
ঘ	G	gʰ	G	gh	gʰ	consonant	ghɔ				
ঙ	N	ŋ	N	ṅ	ŋ ŋɡ	consonant	uŋɔ				
চ	c	c	c	c	c	consonant	cɔ				
ছ	C	cʰ	C	ch	cʰ	consonant	chɔ				
জ	d	ʤ	j	j	ʤ	consonant	bôr͟gīyô jɔ	বর্গীয় জ			
ঝ	D	ʤʰ	J	jh	ʤʰ	consonant	jhɔ				
ঞ	n	ñ	n	ñ	n	consonant	niyô/iyô				
ট	t	ʈ	t	ṭ	ʈ	consonant	ʈɔ				
ঠ	T	ʈʰ	T	ṭh	ʈʰ	consonant	ʈhɔ				
ড	d	ɖ	d	ḍ	ɖ	consonant	ɖɔ				
ঢ	D	ɖʰ	D	ḍh	ɖʰ	consonant	ɖhɔ				
ণ	n	n̈	n	ṇ	n	consonant	mūrdhônyô ɳɔ	মূর্ধন্য ণ			
ত	t¶	t	t¶	t	t	consonant	tɔ				
থ	T	tʰ	T	th	tʰ	consonant	thɔ				
দ	d¶	d	d¶	d	d	consonant	dɔ				
ধ	D	dʰ	D	dh	dʰ	consonant	dhɔ				
ন	n¶	n	n¶	n	n	consonant	dɔntyô nɔ	দন্ত্য ন			
প	p	p	p	p	p	consonant	pɔ				
ফ	P	pʰ	P	ph	pf pʰ f	consonant	phɔ				
ব	b	b	b	b	b ∅-	consonant	bɔ				
ভ	B	bʰ	B	bh	bʰ	consonant	bhɔ				
ম	m	m	m	m	m	consonant	mɔ				
য	y	ý	y	y	ʤ- -æ/-e	consonant	ɔntɔɦstʰo y̌ɔ	অন্তঃস্থ য			
র	r	r	r	r	r	consonant	rɔ				
ল	l	l	l	l	l	consonant	lɔ				
শ	s	ʃ	s	ś	ʃ s	consonant	tɑlobbo ʃɔ	তালব্য শ			
ষ	s	ʃ̇	s	ṣ	ʃ	consonant	mūrdhnyô ʂɔ	মূর্ধন্য ষ			
স	s¶	ʃ̈	s¶	s	ʃ s	consonant	dɔntyô sɔ	দন্ত্য স			
হ	h	h	h	h	h	consonant	hɔ				
ৰ	r	ɹ	r	r	ɹ	assamese consonant	rɔ				
ৱ	v	v	v	v	w β	assamese consonant	wɔβo				
											
											
\u09DC	r	ɽ	r	ɽ	ɽ	precomposed consonant	ɽɔ				
\u09DD	r	ɽ̇	r	ɽ	ɽ	precomposed consonant	ɽhɔ				
\u09DF	y	ẏ	y	ẏ	j e w	precomposed consonant	ɔntɔɦstʰo ɔ	অন্তঃস্থ য়			
											
											
ৎ	t	t̽	t	ṯ	t	consonant	khɔɳɖȏ tɔ	খণ্ড ত্‌			
ঁ	m	m̽	m	ṃ	~	vowel nasalisation marker	t͡ʃɔndrobindu	চন্দ্রবিন্দু			
ং	N	ŋ̽	m	ṁ	ŋ	final nasal	ɔnuʃbɑr/ɔnuʃbor	অনুস্বার/অনুস্বর			
ঃ	h	h̽	h	ḥ	ɦ	final consonant/consonant lengthener	biʃɔrɡo	বিসর্গ			
											
											
অ	O	ɔ̣	A	a	ɔ o u	independent vowel	ɔ-kar				
আ	A	ɑ	A	ā	ɑ	independent vowel	a-kar			া	
ই	I	ị	I	i	i e	independent vowel	hrɔʃʃo i	হ্রস্ব ই		ি	
ঈ	I	ị̄	I	ī	i e	independent vowel	dīrghô ī	দীর্ঘ ঈ		ী	
উ	U	ụ	U	u	u o	independent vowel	hrɔʃʃo u	হ্রস্ব উ		ু	
ঊ	U	ụ̄	U	ū	u	independent vowel	dīrghô ū	দীর্ঘ ঊ		ূ	
এ	E	ẹ	E	e	e æ	independent vowel	e-kar			ে	
ঐ	O	ọʲ	A	ai	oj	independent vowel	oǐ-kar			ৈ	
ও	O	ọ	O	o	o u ɔ	independent vowel	o-kar			ো	
ঔ	O	ọʷ	A	au	ow	independent vowel	oǔ-kar			ৌ	
											
											
া	a	ɑ	a	ā	ɑ æ	vowel sign	a-kar				আ
ি	i	i	i	i	i e a	vowel sign	hrɔsvô i				ই
ী	i	ī	i	ī	i e	vowel sign	dīrghô ī				ঈ
ু	u	u	u	u	u o	vowel sign	hrɔsvô u				উ
ূ	u	ū	u	ū	u	vowel sign	dīrghô ū				ঊ
ে	e	e	e	e	e æ	vowel sign	e-kar				এ
ৈ	o	oʲ	a	ai	oj	vowel sign	oǐ-kar				ঐ
ো	o	o	o	o	o u ɔ	vowel sign	o-kar				ও
ৌ	o	oʷ	a	au	ow	vowel sign	oǔ-kar				ঔ
											
											
ৃ	R	r̥	R	r̥	ri	vocalic vowel sign					ঋ
ৄ	R	r̥̄	R	r̥̄		vocalic vowel sign			a		ৠ
ঋ	R	r̥̣	R	r̥	ri	independent vocalic				ৃ	
ৠ	R	r̥̣̄				independent vocalic			a	ৄ	
ৢ	L	l̥	L	l̥		vocalic vowel sign			a		ঌ
ৣ	L	l̥̄	L	l̥̄		vocalic vowel sign			a		ৡ
ঌ	L	l̥̣	L	l̥		independent vocalic			a	ৢ	
ৡ	L	l̥̣̄				independent vocalic			a	ৣ	
											
											
											
											
											
											
০	0	0	0	0		digit	sɪfar				
১	1	1	1	1		digit	æk				
২	2	2	2	2		digit	dui				
৩	3	3	3	3		digit	tin				
৪	4	4	4	4		digit	car				
৫	5	5	5	5		digit	pãc				
৬	6	6	6	6		digit	chɔy				
৭	7	7	7	7		digit	sat				
৮	8	8	8	8		digit	aʈ				
৯	9	9	9	9		digit	nɔy				
											
											
৺						death symbol					
৳							৲				
৲							৳				
ঽ				'							
ৗ	:	ː	:			length mark			d		
											
৴											
৵											
৶											
৷											
৸											
৹											
											
											
											
়	[	ˑ	[			consonant extender	nukta				
্	*	͓	*			virama	hɔʃonto	হসন্ত			


।	.	.	.	.								
॥	¶	¶	¶									
॰												
«	"	“	"									
»	"	”	"									
												
												
												
ড়	r	ɖˑ (ɽ)	r	ɽ	ɽ							
ঢ়	r	ɖʰˑ (ɽ̇)	r	ɽ	ɽ							
য়	y	ýˑ (ẏ)	y	ẏ	j e w							
`

var cols = {
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 8,
"nameLoc": 7,
"numLoc": 0,
"statusLoc": 9,
"dvowel": 10,
"ivowel": 11,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"transcription": 4,

"othertranscriptions": [[4, 'ISO 15919']]
}