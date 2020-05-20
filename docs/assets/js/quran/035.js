/*
	035.js
	Surah Fatir
	
	Sparisoma Viridi | https://github.com/dudung/ptext
	
	20200510
	1736 Begin recording from the source [1].
	1737 Replace ` with ' in content.
	1738 Remove the word Surat and header end tag.
	1739 Add id after test the xxx.js file.
	
	References
	1. https://litequran.net/fatir [20200510]
*/
var surah = `
<h1 class="page-title" id="035">Fatir</h1>
<p class="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
<ol>
<li><span class="ayat" title="Fatir Ayat 1">اَلْحَمْدُ لِلّٰهِ فَاطِرِ السَّمٰوٰتِ وَالْاَرْضِ جَاعِلِ الْمَلٰۤىِٕكَةِ رُسُلًاۙ اُولِيْٓ اَجْنِحَةٍ مَّثْنٰى وَثُلٰثَ وَرُبٰعَۗ يَزِيْدُ فِى الْخَلْقِ مَا يَشَاۤءُۗ اِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ </span><span class="bacaan">al-ḥamdu lillāhi fāṭiris-samāwāti wal-arḍi jā'ilil-malā'ikati rusulan ulī ajniḥatim maṡnā wa ṡulāṡa wa rubā', yazīdu fil-khalqi mā yasyā', innallāha 'alā kulli syai'ing qadīr</span><span class="arti">Segala puji bagi Allah Pencipta langit dan bumi, yang menjadikan malaikat sebagai utusan-utusan (untuk mengurus berbagai macam urusan) yang mempunyai sayap, masing-masing (ada yang) dua, tiga dan empat. Allah menambahkan pada ciptaan-Nya apa yang Dia kehendaki. Sungguh, Allah Mahakuasa atas segala sesuatu.</span></li>
<li><span class="ayat" title="Fatir Ayat 2">مَا يَفْتَحِ اللّٰهُ لِلنَّاسِ مِنْ رَّحْمَةٍ فَلَا مُمْسِكَ لَهَا ۚوَمَا يُمْسِكْۙ فَلَا مُرْسِلَ لَهٗ مِنْۢ بَعْدِهٖۗ وَهُوَ الْعَزِيْزُ الْحَكِيْمُ </span><span class="bacaan">mā yaftaḥillāhu lin-nāsi mir raḥmatin fa lā mumsika lahā, wa mā yumsik fa lā mursila lahụ mim ba'dih, wa huwal-'azīzul-ḥakīm</span><span class="arti">Apa saja di antara rahmat Allah yang dianugerahkan kepada manusia, maka tidak ada yang dapat menahannya; dan apa saja yang ditahan-Nya maka tidak ada yang sanggup untuk melepaskannya setelah itu. Dan Dialah Yang Mahaperkasa, Mahabijaksana.</span></li>
<li><span class="ayat" title="Fatir Ayat 3">يٰٓاَيُّهَا النَّاسُ اذْكُرُوْا نِعْمَتَ اللّٰهِ عَلَيْكُمْۗ هَلْ مِنْ خَالِقٍ غَيْرُ اللّٰهِ يَرْزُقُكُمْ مِّنَ السَّمَاۤءِ وَالْاَرْضِۗ لَآ اِلٰهَ اِلَّا هُوَۖ فَاَنّٰى تُؤْفَكُوْنَ </span><span class="bacaan">yā ayyuhan-nāsużkurụ ni'matallāhi 'alaikum, hal min khāliqin gairullāhi yarzuqukum minas-samā'i wal-arḍ, lā ilāha illā huwa fa annā tu'fakụn</span><span class="arti">Wahai manusia! Ingatlah akan nikmat Allah kepadamu. Adakah pencipta selain Allah yang dapat memberikan rezeki kepadamu dari langit dan bumi? Tidak ada tuhan selain Dia; maka mengapa kamu berpaling (dari ketauhidan)?</span></li>
<li><span class="ayat" title="Fatir Ayat 4">وَاِنْ يُّكَذِّبُوْكَ فَقَدْ كُذِّبَتْ رُسُلٌ مِّنْ قَبْلِكَۗ وَاِلَى اللّٰهِ تُرْجَعُ الْاُمُوْرُ </span><span class="bacaan">wa iy yukażżibụka fa qad kużżibat rusulum ming qablik, wa ilallāhi turja'ul-umụr</span><span class="arti">Dan jika mereka mendustakan engkau (setelah engkau beri peringatan), maka sungguh, rasul-rasul sebelum engkau telah didustakan pula. Dan hanya kepada Allah segala urusan dikembalikan.</span></li>
<li><span class="ayat" title="Fatir Ayat 5">يٰٓاَيُّهَا النَّاسُ اِنَّ وَعْدَ اللّٰهِ حَقٌّ فَلَا تَغُرَّنَّكُمُ الْحَيٰوةُ الدُّنْيَاۗ وَلَا يَغُرَّنَّكُمْ بِاللّٰهِ الْغَرُوْرُ </span><span class="bacaan">yā ayyuhan-nāsu inna wa'dallāhi ḥaqqun fa lā tagurrannakumul-ḥayātud-dun-yā, wa lā yagurrannakum billāhil-garụr</span><span class="arti">Wahai manusia! Sungguh, janji Allah itu benar, maka janganlah kehidupan dunia memperdayakan kamu dan janganlah (setan) yang pandai menipu, memperdayakan kamu tentang Allah.</span></li>
<li><span class="ayat" title="Fatir Ayat 6">اِنَّ الشَّيْطٰنَ لَكُمْ عَدُوٌّ فَاتَّخِذُوْهُ عَدُوًّاۗ اِنَّمَا يَدْعُوْا حِزْبَهٗ لِيَكُوْنُوْا مِنْ اَصْحٰبِ السَّعِيْرِۗ </span><span class="bacaan">innasy-syaiṭāna lakum 'aduwwun fattakhiżụhu 'aduwwā, innamā yad'ụ ḥizbahụ liyakụnụ min aṣ-ḥābis-sa'īr</span><span class="arti">Sungguh, setan itu musuh bagimu, maka perlakukanlah ia sebagai musuh, karena sesungguhnya setan itu hanya mengajak golongannya agar mereka menjadi penghuni neraka yang menyala-nyala.</span></li>
<li><span class="ayat" title="Fatir Ayat 7">اَلَّذِيْنَ كَفَرُوْا لَهُمْ عَذَابٌ شَدِيْدٌ ەۗ وَالَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ لَهُمْ مَّغْفِرَةٌ وَّاَجْرٌ كَبِيْرٌ </span><span class="bacaan">allażīna kafarụ lahum 'ażābun syadīd, wallażīna āmanụ wa 'amiluṣ-ṣāliḥāti lahum magfiratuw wa ajrung kabīr</span><span class="arti">Orang-orang yang kafir, mereka akan mendapat azab yang sangat keras. Dan orang-orang yang beriman dan mengerjakan kebajikan, mereka memperoleh ampunan dan pahala yang besar.</span></li>
<li><span class="ayat" title="Fatir Ayat 8">اَفَمَنْ زُيِّنَ لَهٗ سُوْۤءُ عَمَلِهٖ فَرَاٰهُ حَسَنًاۗ فَاِنَّ اللّٰهَ يُضِلُّ مَنْ يَّشَاۤءُ وَيَهْدِيْ مَنْ يَّشَاۤءُۖ فَلَا تَذْهَبْ نَفْسُكَ عَلَيْهِمْ حَسَرٰتٍۗ اِنَّ اللّٰهَ عَلِيْمٌ ۢبِمَا يَصْنَعُوْنَ </span><span class="bacaan">a fa man zuyyina lahụ sū'u 'amalihī fa ra'āhu ḥasanā, fa innallāha yuḍillu may yasyā'u wa yahdī may yasyā'u fa lā taż-hab nafsuka 'alaihim ḥasarāt, innallāha 'alīmum bimā yaṣna'ụn</span><span class="arti">Maka apakah pantas orang yang dijadikan terasa indah perbuatan buruknya, lalu menganggap baik perbuatannya itu? Sesungguhnya Allah menyesatkan siapa yang Dia kehendaki dan memberi petunjuk kepada siapa yang Dia kehendaki. Maka jangan engkau (Muhammad) biarkan dirimu binasa karena kesedihan terhadap mereka. Sesungguhnya Allah Maha Mengetahui apa yang mereka perbuat.</span></li>
<li><span class="ayat" title="Fatir Ayat 9">وَاللّٰهُ الَّذِيْٓ اَرْسَلَ الرِّيٰحَ فَتُثِيْرُ سَحَابًا فَسُقْنٰهُ اِلٰى بَلَدٍ مَّيِّتٍ فَاَحْيَيْنَا بِهِ الْاَرْضَ بَعْدَ مَوْتِهَاۗ كَذٰلِكَ النُّشُوْرُ </span><span class="bacaan">wallāhullażī arsalar-riyāḥa fa tuṡīru saḥāban fa suqnāhu ilā baladim mayyitin fa aḥyainā bihil-arḍa ba'da mautihā, każālikan-nusyụr</span><span class="arti">Dan Allah-lah yang mengirimkan angin; lalu (angin itu) menggerakkan awan, maka Kami arahkan awan itu ke suatu negeri yang mati (tandus) lalu dengan hujan itu Kami hidupkan bumi setelah mati (kering). Seperti itulah kebangkitan itu.</span></li>
<li><span class="ayat" title="Fatir Ayat 10">مَنْ كَانَ يُرِيْدُ الْعِزَّةَ فَلِلّٰهِ الْعِزَّةُ جَمِيْعًاۗ اِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ وَالْعَمَلُ الصَّالِحُ يَرْفَعُهٗ ۗوَالَّذِيْنَ يَمْكُرُوْنَ السَّيِّاٰتِ لَهُمْ عَذَابٌ شَدِيْدٌ ۗوَمَكْرُ اُولٰۤىِٕكَ هُوَ يَبُوْرُ </span><span class="bacaan">mang kāna yurīdul-'izzata fa lillāhil-'izzatu jamī'ā, ilaihi yaṣ'adul-kalimuṭ-ṭayyibu wal-'amaluṣ-ṣāliḥu yarfa'uh, wallażīna yamkurụnas-sayyi'āti lahum 'ażābun syadīd, wa makru ulā'ika huwa yabụr</span><span class="arti">Barangsiapa menghendaki kemuliaan, maka (ketahuilah) kemuliaan itu semuanya milik Allah. Kepada-Nyalah akan naik perkataan-perkataan yang baik, dan amal kebajikan Dia akan mengangkatnya. Adapun orang-orang yang merencanakan kejahatan mereka akan mendapat azab yang sangat keras, dan rencana jahat mereka akan hancur.</span></li>
<li><span class="ayat" title="Fatir Ayat 11">وَاللّٰهُ خَلَقَكُمْ مِّنْ تُرَابٍ ثُمَّ مِنْ نُّطْفَةٍ ثُمَّ جَعَلَكُمْ اَزْوَاجًاۗ وَمَا تَحْمِلُ مِنْ اُنْثٰى وَلَا تَضَعُ اِلَّا بِعِلْمِهٖۗ وَمَا يُعَمَّرُ مِنْ مُّعَمَّرٍ وَّلَا يُنْقَصُ مِنْ عُمُرِهٖٓ اِلَّا فِيْ كِتٰبٍۗ اِنَّ ذٰلِكَ عَلَى اللّٰهِ يَسِيْرٌ </span><span class="bacaan">wallāhu khalaqakum min turābin ṡumma min nuṭfatin ṡumma ja'alakum azwājā, wa mā taḥmilu min unṡā wa lā taḍa'u illā bi'ilmih, wa mā yu'ammaru mim mu'ammariw wa lā yungqaṣu min 'umurihī illā fī kitāb, inna żālika 'alallāhi yasīr</span><span class="arti">Dan Allah menciptakan kamu dari tanah kemudian dari air mani, kemudian Dia menjadikan kamu berpasangan (laki-laki dan perempuan). Tidak ada seorang perempuan pun yang mengandung dan melahirkan, melainkan dengan sepengetahuan-Nya. Dan tidak dipanjangkan umur seseorang dan tidak pula dikurangi umurnya, melainkan (sudah ditetapkan) dalam Kitab (Lauh Mahfuzh). Sungguh, yang demikian itu mudah bagi Allah.</span></li>
<li><span class="ayat" title="Fatir Ayat 12">وَمَا يَسْتَوِى الْبَحْرٰنِۖ هٰذَا عَذْبٌ فُرَاتٌ سَاۤىِٕغٌ شَرَابُهٗ وَهٰذَا مِلْحٌ اُجَاجٌۗ وَمِنْ كُلٍّ تَأْكُلُوْنَ لَحْمًا طَرِيًّا وَّتَسْتَخْرِجُوْنَ حِلْيَةً تَلْبَسُوْنَهَا ۚوَتَرَى الْفُلْكَ فِيْهِ مَوَاخِرَ لِتَبْتَغُوْا مِنْ فَضْلِهٖ وَلَعَلَّكُمْ تَشْكُرُوْنَ </span><span class="bacaan">wa mā yastawil-baḥrāni hāżā 'ażbun furātun sā'igun syarābuhụ wa hāżā mil-ḥun ujāj, wa ming kullin ta'kulụna laḥman ṭariyyaw wa tastakhrijụna ḥilyatan talbasụnahā, wa taral-fulka fīhi mawākhira litabtagụ min faḍlihī wa la'allakum tasykurụn</span><span class="arti">Dan tidak sama (antara) dua lautan; yang ini tawar, segar, sedap diminum dan yang lain asin lagi pahit. Dan dari (masing-masing lautan) itu kamu dapat memakan daging yang segar dan kamu dapat mengeluarkan perhiasan yang kamu pakai, dan di sana kamu melihat kapal-kapal berlayar membelah laut agar kamu dapat mencari karunia-Nya dan agar kamu bersyukur.</span></li>
<li><span class="ayat" title="Fatir Ayat 13">يُوْلِجُ الَّيْلَ فِى النَّهَارِ وَيُوْلِجُ النَّهَارَ فِى الَّيْلِۚ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ كُلٌّ يَّجْرِيْ لِاَجَلٍ مُّسَمًّىۗ ذٰلِكُمُ اللّٰهُ رَبُّكُمْ لَهُ الْمُلْكُۗ وَالَّذِيْنَ تَدْعُوْنَ مِنْ دُوْنِهٖ مَا يَمْلِكُوْنَ مِنْ قِطْمِيْرٍۗ </span><span class="bacaan">yụlijul-laila fin-nahāri wa yụlijun-nahāra fil-laīl, wa sakhkharasy-syamsa wal-qamara kulluy yajrī li'ajalim musammā, żālikumullāhu rabbukum lahul-mulk, wallażīna tad'ụna min dụnihī mā yamlikụna ming qiṭmīr</span><span class="arti">Dia memasukkan malam ke dalam siang dan memasukkan siang ke dalam malam dan menundukkan matahari dan bulan, masing-masing beredar menurut waktu yang ditentukan. Yang (berbuat) demikian itulah Allah Tuhanmu, milik-Nyalah segala kerajaan. Dan orang-orang yang kamu seru (sembah) selain Allah tidak mempunyai apa-apa walaupun setipis kulit ari.</span></li>
<li><span class="ayat" title="Fatir Ayat 14">اِنْ تَدْعُوْهُمْ لَا يَسْمَعُوْا دُعَاۤءَكُمْۚ وَلَوْ سَمِعُوْا مَا اسْتَجَابُوْا لَكُمْۗ وَيَوْمَ الْقِيٰمَةِ يَكْفُرُوْنَ بِشِرْكِكُمْۗ وَلَا يُنَبِّئُكَ مِثْلُ خَبِيْرٍ</span><span class="bacaan">in tad'ụhum lā yasma'ụ du'ā'akum, walau sami'ụ mastajābụ lakum, wa yaumal-qiyāmati yakfurụna bisyirkikum, wa lā yunabbi'uka miṡlu khabīr</span><span class="arti">Jika kamu menyeru mereka, mereka tidak mendengar seruanmu, dan sekiranya mereka mendengar, mereka juga tidak memperkenankan permintaanmu. Dan pada hari Kiamat mereka akan mengingkari kemusyrikanmu dan tidak ada yang dapat memberikan keterangan kepadamu seperti yang diberikan oleh (Allah) Yang Mahateliti.</span></li>
<li><span class="ayat" title="Fatir Ayat 15">۞ يٰٓاَيُّهَا النَّاسُ اَنْتُمُ الْفُقَرَاۤءُ اِلَى اللّٰهِ ۚوَاللّٰهُ هُوَ الْغَنِيُّ الْحَمِيْدُ </span><span class="bacaan">yā ayyuhan-nāsu antumul-fuqarā'u ilallāh, wallāhu huwal-ganiyyul-ḥamīd</span><span class="arti">Wahai manusia! Kamulah yang memerlukan Allah; dan Allah Dialah Yang Mahakaya (tidak memerlukan sesuatu), Maha Terpuji.</span></li>
<li><span class="ayat" title="Fatir Ayat 16">اِنْ يَّشَأْ يُذْهِبْكُمْ وَيَأْتِ بِخَلْقٍ جَدِيْدٍۚ </span><span class="bacaan">iy yasya' yuż-hibkum wa ya'ti bikhalqin jadīd</span><span class="arti">Jika Dia menghendaki, niscaya Dia membinasakan kamu dan mendatangkan makhluk yang baru (untuk menggantikan kamu).</span></li>
<li><span class="ayat" title="Fatir Ayat 17">وَمَا ذٰلِكَ عَلَى اللّٰهِ بِعَزِيْزٍ </span><span class="bacaan">wa mā żālika 'alallāhi bi'azīz</span><span class="arti">Dan yang demikian itu tidak sulit bagi Allah.</span></li>
<li><span class="ayat" title="Fatir Ayat 18">وَلَا تَزِرُ وَازِرَةٌ وِّزْرَ اُخْرٰى ۗوَاِنْ تَدْعُ مُثْقَلَةٌ اِلٰى حِمْلِهَا لَا يُحْمَلْ مِنْهُ شَيْءٌ وَّلَوْ كَانَ ذَا قُرْبٰىۗ اِنَّمَا تُنْذِرُ الَّذِيْنَ يَخْشَوْنَ رَبَّهُمْ بِالْغَيْبِ وَاَقَامُوا الصَّلٰوةَ ۗوَمَنْ تَزَكّٰى فَاِنَّمَا يَتَزَكّٰى لِنَفْسِهٖ ۗوَاِلَى اللّٰهِ الْمَصِيْرُ </span><span class="bacaan">wa lā taziru wāziratuw wizra ukhrā, wa in tad'u muṡqalatun ilā ḥimlihā lā yuḥmal min-hu syai'uw walau kāna żā qurbā, innamā tunżirullażīna yakhsyauna rabbahum bil-gaibi wa aqāmuṣ-ṣalāh, wa man tazakkā fa innamā yatazakkā linafsih, wa ilallāhil-maṣīr</span><span class="arti">Dan orang yang berdosa tidak akan memikul dosa orang lain. Dan jika seseorang yang dibebani berat dosanya memanggil (orang lain) untuk memikul bebannya itu tidak akan dipikulkan sedikit pun, meskipun (yang dipanggilnya itu) kaum kerabatnya. Sesungguhnya yang dapat engkau beri peringatan hanya orang-orang yang takut kepada (azab) Tuhannya (sekalipun) mereka tidak melihat-Nya dan mereka yang melaksanakan salat. Dan barangsiapa menyucikan dirinya, sesungguhnya dia menyucikan diri untuk kebaikan dirinya sendiri. Dan kepada Allah-lah tempat kembali.</span></li>
<li><span class="ayat" title="Fatir Ayat 19">وَمَا يَسْتَوِى الْاَعْمٰى وَالْبَصِيْرُ ۙ </span><span class="bacaan">wa mā yastawil-a'mā wal-baṣīr</span><span class="arti">Dan tidaklah sama orang yang buta dengan orang yang melihat,</span></li>
<li><span class="ayat" title="Fatir Ayat 20">وَلَا الظُّلُمٰتُ وَلَا النُّوْرُۙ </span><span class="bacaan">wa laẓ-ẓulumātu wa lan-nụr</span><span class="arti">dan tidak (pula) sama gelap gulita dengan cahaya,</span></li>
<li><span class="ayat" title="Fatir Ayat 21">وَلَا الظِّلُّ وَلَا الْحَرُوْرُۚ </span><span class="bacaan">wa laẓ-ẓillu wa lal-ḥarụr</span><span class="arti">dan tidak (pula) sama yang teduh dengan yang panas,</span></li>
<li><span class="ayat" title="Fatir Ayat 22">وَمَا يَسْتَوِى الْاَحْيَاۤءُ وَلَا الْاَمْوَاتُۗ اِنَّ اللّٰهَ يُسْمِعُ مَنْ يَّشَاۤءُ ۚوَمَآ اَنْتَ بِمُسْمِعٍ مَّنْ فِى الْقُبُوْرِ </span><span class="bacaan">wa mā yastawil-aḥyā'u wa lal-amwāt, innallāha yusmi'u may yasyā', wa mā anta bimusmi'im man fil-qubụr</span><span class="arti">dan tidak (pula) sama orang yang hi-dup dengan orang yang mati. Sungguh, Allah memberikan pendengaran kepada siapa yang Dia kehendaki dan engkau (Muhammad) tidak akan sanggup menjadikan orang yang di dalam kubur dapat mendengar.</span></li>
<li><span class="ayat" title="Fatir Ayat 23">اِنْ اَنْتَ اِلَّا نَذِيْرٌ</span><span class="bacaan">in anta illā nażīr</span><span class="arti">Engkau tidak lain hanyalah seorang pemberi peringatan.</span></li>
<li><span class="ayat" title="Fatir Ayat 24">اِنَّآ اَرْسَلْنٰكَ بِالْحَقِّ بَشِيْرًا وَّنَذِيْرًا ۗوَاِنْ مِّنْ اُمَّةٍ اِلَّا خَلَا فِيْهَا نَذِيْرٌ </span><span class="bacaan">innā arsalnāka bil-ḥaqqi basyīraw wa nażīrā, wa im min ummatin illā khalā fīhā nażīr</span><span class="arti">Sungguh, Kami mengutus engkau dengan membawa kebenaran sebagai pembawa berita gembira dan sebagai pemberi peringatan. Dan tidak ada satu pun umat melainkan di sana telah datang seorang pemberi peringatan.</span></li>
<li><span class="ayat" title="Fatir Ayat 25">وَاِنْ يُّكَذِّبُوْكَ فَقَدْ كَذَّبَ الَّذِيْنَ مِنْ قَبْلِهِمْ ۚجَاۤءَتْهُمْ رُسُلُهُمْ بِالْبَيِّنٰتِ وَبِالزُّبُرِ وَبِالْكِتٰبِ الْمُنِيْرِ </span><span class="bacaan">wa iy yukażżibụka fa qad każżaballażīna ming qablihim, jā'at-hum rusuluhum bil-bayyināti wa biz-zuburi wa bil-kitābil-munīr</span><span class="arti">Dan jika mereka mendustakanmu, maka sungguh, orang-orang yang sebelum mereka pun telah mendustakan (rasul-rasul); ketika rasul-rasulnya datang dengan membawa keterangan yang nyata (mukjizat), zubur, dan kitab yang memberi penjelasan yang sempurna.</span></li>
<li><span class="ayat" title="Fatir Ayat 26">ثُمَّ اَخَذْتُ الَّذِيْنَ كَفَرُوْا فَكَيْفَ كَانَ نَكِيْرِ </span><span class="bacaan">ṡumma akhażtullażīna kafarụ fa kaifa kāna nakīr</span><span class="arti">Kemudian Aku azab orang-orang yang kafir; maka (lihatlah) bagaimana akibat kemurkaan-Ku.</span></li>
<li><span class="ayat" title="Fatir Ayat 27">اَلَمْ تَرَ اَنَّ اللّٰهَ اَنْزَلَ مِنَ السَّمَاۤءِ مَاۤءًۚ فَاَخْرَجْنَا بِهٖ ثَمَرٰتٍ مُّخْتَلِفًا اَلْوَانُهَا ۗوَمِنَ الْجِبَالِ جُدَدٌ ۢبِيْضٌ وَّحُمْرٌ مُّخْتَلِفٌ اَلْوَانُهَا وَغَرَابِيْبُ سُوْدٌ </span><span class="bacaan">a lam tara annallāha anzala minas-samā'i mā'ā, fa akhrajnā bihī ṡamarātim mukhtalifan alwānuhā, wa minal-jibāli judadum bīḍuw wa ḥumrum mukhtalifun alwānuhā wa garābību sụd</span><span class="arti">Tidakkah engkau melihat bahwa Allah menurunkan air dari langit lalu dengan air itu Kami hasilkan buah-buahan yang beraneka macam jenisnya. Dan di antara gunung-gunung itu ada garis-garis putih dan merah yang beraneka macam warnanya dan ada (pula) yang hitam pekat.</span></li>
<li><span class="ayat" title="Fatir Ayat 28">وَمِنَ النَّاسِ وَالدَّوَاۤبِّ وَالْاَنْعَامِ مُخْتَلِفٌ اَلْوَانُهٗ كَذٰلِكَۗ اِنَّمَا يَخْشَى اللّٰهَ مِنْ عِبَادِهِ الْعُلَمٰۤؤُاۗ اِنَّ اللّٰهَ عَزِيْزٌ غَفُوْرٌ </span><span class="bacaan">wa minan-nāsi wad-dawābbi wal-an'āmi mukhtalifun alwānuhụ każālik, innamā yakhsyallāha min 'ibādihil-'ulamā', innallāha 'azīzun gafụr</span><span class="arti">Dan demikian (pula) di antara manusia, makhluk bergerak yang bernyawa dan hewan-hewan ternak ada yang bermacam-macam warnanya (dan jenisnya). Di antara hamba-hamba Allah yang takut kepada-Nya, hanyalah para ulama. Sungguh, Allah Mahaperkasa, Maha Pengampun.</span></li>
<li><span class="ayat" title="Fatir Ayat 29">اِنَّ الَّذِيْنَ يَتْلُوْنَ كِتٰبَ اللّٰهِ وَاَقَامُوا الصَّلٰوةَ وَاَنْفَقُوْا مِمَّا رَزَقْنٰهُمْ سِرًّا وَّعَلَانِيَةً يَّرْجُوْنَ تِجَارَةً لَّنْ تَبُوْرَۙ </span><span class="bacaan">innallażīna yatlụna kitāballāhi wa aqāmuṣ-ṣalāta wa anfaqụ mimmā razaqnāhum sirraw wa 'alāniyatay yarjụna tijāratal lan tabụr</span><span class="arti">Sesungguhnya orang-orang yang selalu membaca Kitab Allah (Al-Qur'an) dan melaksanakan salat dan menginfakkan sebagian rezeki yang Kami anugerahkan kepadanya dengan diam-diam dan terang-terangan, mereka itu mengharapkan perdagangan yang tidak akan rugi,</span></li>
<li><span class="ayat" title="Fatir Ayat 30">لِيُوَفِّيَهُمْ اُجُوْرَهُمْ وَيَزِيْدَهُمْ مِّنْ فَضْلِهٖۗ اِنَّهٗ غَفُوْرٌ شَكُوْرٌ </span><span class="bacaan">liyuwaffiyahum ujụrahum wa yazīdahum min faḍlih, innahụ gafụrun syakụr</span><span class="arti">agar Allah menyempurnakan pahalanya kepada mereka dan menambah karunia-Nya. Sungguh, Allah Maha Pengampun, Maha Mensyukuri.</span></li>
<li><span class="ayat" title="Fatir Ayat 31">وَالَّذِيْٓ اَوْحَيْنَآ اِلَيْكَ مِنَ الْكِتٰبِ هُوَ الْحَقُّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِۗ اِنَّ اللّٰهَ بِعِبَادِهٖ لَخَبِيْرٌۢ بَصِيْرٌ </span><span class="bacaan">wallażī auḥainā ilaika minal-kitābi huwal-ḥaqqu muṣaddiqal limā baina yadaīh, innallāha bi'ibādihī lakhabīrum baṣīr</span><span class="arti">Dan apa yang telah Kami wahyukan kepadamu (Muhammad) yaitu Kitab (Al-Qur'an) itulah yang benar, membenarkan kitab-kitab yang sebelumnya. Sungguh, Allah benar-benar Maha Mengetahui, Maha Melihat (keadaan) hamba-hamba-Nya.</span></li>
<li><span class="ayat" title="Fatir Ayat 32">ثُمَّ اَوْرَثْنَا الْكِتٰبَ الَّذِيْنَ اصْطَفَيْنَا مِنْ عِبَادِنَاۚ فَمِنْهُمْ ظَالِمٌ لِّنَفْسِهٖ ۚوَمِنْهُمْ مُّقْتَصِدٌ ۚوَمِنْهُمْ سَابِقٌۢ بِالْخَيْرٰتِ بِاِذْنِ اللّٰهِ ۗذٰلِكَ هُوَ الْفَضْلُ الْكَبِيْرُۗ </span><span class="bacaan">ṡumma auraṡnal-kitāballażīnaṣṭafainā min 'ibādinā, fa min-hum ẓālimul linafsih, wa min-hum muqtaṣid, wa min-hum sābiqum bil-khairāti bi'iżnillāh, żālika huwal-faḍlul-kabīr</span><span class="arti">Kemudian Kitab itu Kami wariskan kepada orang-orang yang Kami pilih di antara hamba-hamba Kami, lalu di antara mereka ada yang menzalimi diri sendiri, ada yang pertengahan dan ada (pula) yang lebih dahulu berbuat kebaikan dengan izin Allah. Yang demikian itu adalah karunia yang besar.</span></li>
<li><span class="ayat" title="Fatir Ayat 33">جَنّٰتُ عَدْنٍ يَّدْخُلُوْنَهَا يُحَلَّوْنَ فِيْهَا مِنْ اَسَاوِرَ مِنْ ذَهَبٍ وَّلُؤْلُؤًا ۚوَلِبَاسُهُمْ فِيْهَا حَرِيْرٌ </span><span class="bacaan">jannātu 'adniy yadkhulụnahā yuḥallauna fīhā min asāwira min żahabiw wa lu'lu'ā, wa libāsuhum fīhā ḥarīr</span><span class="arti">(Mereka akan mendapat) surga &lsquo;Adn, mereka masuk ke dalamnya, di dalamnya mereka diberi perhiasan gelang-gelang dari emas dan mutiara, dan pakaian mereka di dalamnya adalah sutera.</span></li>
<li><span class="ayat" title="Fatir Ayat 34">وَقَالُوا الْحَمْدُ لِلّٰهِ الَّذِيْٓ اَذْهَبَ عَنَّا الْحَزَنَۗ اِنَّ رَبَّنَا لَغَفُوْرٌ شَكُوْرٌۙ </span><span class="bacaan">wa qālul-ḥamdu lillāhillażī aż-haba 'annal-ḥazan, inna rabbanā lagafụrun syakụr</span><span class="arti">Dan mereka berkata, &ldquo;Segala puji bagi Allah yang telah menghilangkan kesedihan dari kami. Sungguh, Tuhan kami benar-benar Maha Pengampun, Maha Mensyukuri,</span></li>
<li><span class="ayat" title="Fatir Ayat 35"> ۨالَّذِيْٓ اَحَلَّنَا دَارَ الْمُقَامَةِ مِنْ فَضْلِهٖۚ لَا يَمَسُّنَا فِيْهَا نَصَبٌ وَّلَا يَمَسُّنَا فِيْهَا لُغُوْبٌ </span><span class="bacaan">allażī aḥallanā dāral-muqāmati min faḍlih, lā yamassunā fīhā naṣabuw wa lā yamassunā fīhā lugụb</span><span class="arti">yang dengan karunia-Nya menempatkan kami dalam tempat yang kekal (surga); di dalamnya kami tidak merasa lelah dan tidak pula merasa lesu.&rdquo;</span></li>
<li><span class="ayat" title="Fatir Ayat 36">وَالَّذِيْنَ كَفَرُوْا لَهُمْ نَارُ جَهَنَّمَۚ لَا يُقْضٰى عَلَيْهِمْ فَيَمُوْتُوْا وَلَا يُخَفَّفُ عَنْهُمْ مِّنْ عَذَابِهَاۗ كَذٰلِكَ نَجْزِيْ كُلَّ كَفُوْرٍ ۚ</span><span class="bacaan">wallażīna kafarụ lahum nāru jahannam, lā yuqḍā 'alaihim fa yamụtụ wa lā yukhaffafu 'an-hum min 'ażābihā, każālika najzī kulla kafụr</span><span class="arti">Dan orang-orang yang kafir, bagi mereka neraka Jahanam. Mereka tidak dibinasakan hingga mereka mati, dan tidak diringankan dari mereka azabnya. Demikianlah Kami membalas setiap orang yang sangat kafir.</span></li>
<li><span class="ayat" title="Fatir Ayat 37">وَهُمْ يَصْطَرِخُوْنَ فِيْهَاۚ رَبَّنَآ اَخْرِجْنَا نَعْمَلْ صَالِحًا غَيْرَ الَّذِيْ كُنَّا نَعْمَلُۗ اَوَلَمْ نُعَمِّرْكُمْ مَّا يَتَذَكَّرُ فِيْهِ مَنْ تَذَكَّرَ وَجَاۤءَكُمُ النَّذِيْرُۗ فَذُوْقُوْا فَمَا لِلظّٰلِمِيْنَ مِنْ نَّصِيْرٍ </span><span class="bacaan">wa hum yaṣṭarikhụna fīhā, rabbanā akhrijnā na'mal ṣāliḥan gairallażī kunnā na'mal, a wa lam nu'ammirkum mā yatażakkaru fīhi man tażakkara wa jā'akumun-nażīr, fa żụqụ fa mā liẓ-ẓālimīna min naṣīr</span><span class="arti">Dan mereka berteriak di dalam neraka itu, &ldquo;Ya Tuhan kami, keluarkanlah kami (dari neraka), niscaya kami akan mengerjakan kebajikan, yang berlainan dengan yang telah kami kerjakan dahulu.&rdquo; (Dikatakan kepada mereka), &ldquo;Bukankah Kami telah memanjangkan umurmu untuk dapat berpikir bagi orang yang mau berpikir, padahal telah datang kepadamu seorang pemberi peringatan? Maka rasakanlah (azab Kami), dan bagi orang-orang zalim tidak ada seorang penolong pun.&rdquo;</span></li>
<li><span class="ayat" title="Fatir Ayat 38">اِنَّ اللّٰهَ عَالِمُ غَيْبِ السَّمٰوٰتِ وَالْاَرْضِۗ اِنَّهٗ عَلِيْمٌ ۢبِذَاتِ الصُّدُوْرِ </span><span class="bacaan">innallāha 'ālimu gaibis-samāwāti wal-arḍ, innahụ 'alīmum biżātiṣ-ṣudụr</span><span class="arti">Sungguh, Allah mengetahui yang gaib (tersembunyi) di langit dan di bumi. Sungguh, Dia Maha Mengetahui segala isi hati.</span></li>
<li><span class="ayat" title="Fatir Ayat 39">هُوَ الَّذِيْ جَعَلَكُمْ خَلٰۤىِٕفَ فِى الْاَرْضِۗ فَمَنْ كَفَرَ فَعَلَيْهِ كُفْرُهٗۗ وَلَا يَزِيْدُ الْكٰفِرِيْنَ كُفْرُهُمْ عِنْدَ رَبِّهِمْ اِلَّا مَقْتًا ۚوَلَا يَزِيْدُ الْكٰفِرِيْنَ كُفْرُهُمْ اِلَّا خَسَارًا </span><span class="bacaan">huwallażī ja'alakum khalā'ifa fil-arḍ, fa mang kafara fa 'alaihi kufruh, wa lā yazīdul-kāfirīna kufruhum 'inda rabbihim illā maqtā, wa lā yazīdul-kāfirīna kufruhum illā khasārā</span><span class="arti">Dialah yang menjadikan kamu sebagai khalifah-khalifah di bumi. Barangsiapa kafir, maka (akibat) kekafirannya akan menimpa dirinya sendiri. Dan kekafiran orang-orang kafir itu hanya akan menambah kemurkaan di sisi Tuhan mereka. Dan kekafiran orang-orang kafir itu hanya akan menambah kerugian mereka belaka.</span></li>
<li><span class="ayat" title="Fatir Ayat 40">قُلْ اَرَاَيْتُمْ شُرَكَاۤءَكُمُ الَّذِيْنَ تَدْعُوْنَ مِنْ دُوْنِ اللّٰهِ ۗاَرُوْنِيْ مَاذَا خَلَقُوْا مِنَ الْاَرْضِ اَمْ لَهُمْ شِرْكٌ فِى السَّمٰوٰتِۚ اَمْ اٰتَيْنٰهُمْ كِتٰبًا فَهُمْ عَلٰى بَيِّنَتٍ مِّنْهُۚ بَلْ اِنْ يَّعِدُ الظّٰلِمُوْنَ بَعْضُهُمْ بَعْضًا اِلَّا غُرُوْرًا </span><span class="bacaan">qul a ra'aitum syurakā'akumullażīna tad'ụna min dụnillāh, arụnī māżā khalaqụ minal-arḍi am lahum syirkun fis-samāwāt, am ātaināhum kitāban fa hum 'alā bayyinatim min-h, bal iy ya'iduẓ-ẓālimụna ba'ḍuhum ba'ḍan illā gurụrā</span><span class="arti">Katakanlah, &ldquo;Terangkanlah olehmu tentang sekutu-sekutumu yang kamu seru selain Allah.&rdquo; Perlihatkanlah kepada-Ku (bagian) manakah dari bumi ini yang telah mereka ciptakan; ataukah mereka mempunyai peran serta dalam (penciptaan) langit; atau adakah Kami memberikan kitab kepada mereka sehingga mereka mendapat keterangan-keterangan yang jelas darinya? Sebenarnya orang-orang zalim itu, sebagian mereka hanya menjanjikan tipuan belaka kepada sebagian yang lain. </span></li>
<li><span class="ayat" title="Fatir Ayat 41">۞ اِنَّ اللّٰهَ يُمْسِكُ السَّمٰوٰتِ وَالْاَرْضَ اَنْ تَزُوْلَا ەۚ وَلَىِٕنْ زَالَتَآ اِنْ اَمْسَكَهُمَا مِنْ اَحَدٍ مِّنْۢ بَعْدِهٖ ۗاِنَّهٗ كَانَ حَلِيْمًا غَفُوْرًا</span><span class="bacaan">innallāha yumsikus-samāwāti wal-arḍa an tazụlā, wa la'in zālatā in amsakahumā min aḥadim mim ba'dih, innahụ kāna ḥalīman gafụrā</span><span class="arti">Sungguh, Allah yang menahan langit dan bumi agar tidak lenyap; dan jika keduanya akan lenyap tidak ada seorang pun yang mampu menahannya selain Allah. Sungguh, Dia Maha Penyantun, Maha Pengampun.</span></li>
<li><span class="ayat" title="Fatir Ayat 42">وَاَقْسَمُوْا بِاللّٰهِ جَهْدَ اَيْمَانِهِمْ لَىِٕنْ جَاۤءَهُمْ نَذِيْرٌ لَّيَكُوْنُنَّ اَهْدٰى مِنْ اِحْدَى الْاُمَمِۚ فَلَمَّا جَاۤءَهُمْ نَذِيْرٌ مَّا زَادَهُمْ اِلَّا نُفُوْرًاۙ </span><span class="bacaan">wa aqsamụ billāhi jahda aimānihim la'in jā'ahum nażīrul layakụnunna ahdā min iḥdal-umam, fa lammā jā'ahum nażīrum mā zādahum illā nufụrā</span><span class="arti">Dan mereka bersumpah dengan nama Allah dengan sungguh-sungguh bahwa jika datang kepada mereka seorang pemberi peringatan, niscaya mereka akan lebih mendapat petunjuk dari salah satu umat-umat (yang lain). Tetapi ketika pemberi peringatan datang kepada mereka, tidak menambah (apa-apa) kepada mereka, bahkan semakin jauh mereka dari (kebenaran),</span></li>
<li><span class="ayat" title="Fatir Ayat 43"> ۨاسْتِكْبَارًا فِى الْاَرْضِ وَمَكْرَ السَّيِّئِۗ وَلَا يَحِيْقُ الْمَكْرُ السَّيِّئُ اِلَّا بِاَهْلِهٖ ۗفَهَلْ يَنْظُرُوْنَ اِلَّا سُنَّتَ الْاَوَّلِيْنَۚ فَلَنْ تَجِدَ لِسُنَّتِ اللّٰهِ تَبْدِيْلًا ەۚ وَلَنْ تَجِدَ لِسُنَّتِ اللّٰهِ تَحْوِيْلًا</span><span class="bacaan">istikbāran fil-arḍi wa makras-sayyi', wa lā yaḥīqul-makrus-sayyi'u illā bi'ahlih, fa hal yanẓurụna illā sunnatal-awwalīn, fa lan tajida lisunnatillāhi tabdīlā, wa lan tajida lisunnatillāhi taḥwīlā</span><span class="arti">karena kesombongan (mereka) di bumi dan karena rencana (mereka) yang jahat. Rencana yang jahat itu hanya akan menimpa orang yang merencanakannya sendiri. Mereka hanyalah menunggu (berlakunya) ketentuan kepada orang-orang yang terdahulu. Maka kamu tidak akan mendapatkan perubahan bagi Allah, dan tidak (pula) akan menemui penyimpangan bagi ketentuan Allah itu.</span></li>
<li><span class="ayat" title="Fatir Ayat 44">اَوَلَمْ يَسِيْرُوْا فِى الْاَرْضِ فَيَنْظُرُوْا كَيْفَ كَانَ عَاقِبَةُ الَّذِيْنَ مِنْ قَبْلِهِمْ وَكَانُوْٓا اَشَدَّ مِنْهُمْ قُوَّةً ۗوَمَا كَانَ اللّٰهُ لِيُعْجِزَهٗ مِنْ شَيْءٍ فِى السَّمٰوٰتِ وَلَا فِى الْاَرْضِۗ اِنَّهٗ كَانَ عَلِيْمًا قَدِيْرًا </span><span class="bacaan">a wa lam yasīrụ fil-arḍi fa yanẓurụ kaifa kāna 'āqibatullażīna ming qablihim wa kānū asyadda min-hum quwwah, wa mā kānallāhu liyu'jizahụ min syai'in fis-samāwāti wa lā fil-arḍ, innahụ kāna 'alīmang qadīrā</span><span class="arti">Dan tidakkah mereka bepergian di bumi lalu melihat bagaimana kesudahan orang-orang sebelum mereka (yang mendustakan rasul), padahal orang-orang itu lebih besar kekuatannya dari mereka? Dan tidak ada sesuatu pun yang dapat melemahkan Allah baik di langit maupun di bumi. Sungguh, Dia Maha Mengetahui, Mahakuasa.</span></li>
<li><span class="ayat" title="Fatir Ayat 45">وَلَوْ يُؤَاخِذُ اللّٰهُ النَّاسَ بِمَا كَسَبُوْا مَا تَرَكَ عَلٰى ظَهْرِهَا مِنْ دَاۤبَّةٍ وَّلٰكِنْ يُّؤَخِّرُهُمْ اِلٰٓى اَجَلٍ مُّسَمًّىۚ فَاِذَا جَاۤءَ اَجَلُهُمْ فَاِنَّ اللّٰهَ كَانَ بِعِبَادِهٖ بَصِيْرًا </span><span class="bacaan">walau yu'ākhiżullāhun-nāsa bimā kasabụ mā taraka 'alā ẓahrihā min dābbatiw wa lākiy yu'akhkhiruhum ilā ajalim musammā, fa iżā jā'a ajaluhum fa innallāha kāna bi'ibādihī baṣīrā</span><span class="arti">Dan sekiranya Allah menghukum manusia disebabkan apa yang telah mereka perbuat, niscaya Dia tidak akan menyisakan satu pun makhluk bergerak yang bernyawa di bumi ini, tetapi Dia menangguhkan (hukuman)nya, sampai waktu yang sudah ditentukan. Nanti apabila ajal mereka tiba, maka Allah Maha Melihat (keadaan) hamba-hamba-Nya.</span></li>
</ol>
`;
Surah.push(surah);