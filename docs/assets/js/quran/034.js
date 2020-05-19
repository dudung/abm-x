/*
	034.js
	Surah Saba'
	
	Sparisoma Viridi | https://github.com/dudung/ptext
	
	20200510
	1733 Begin recording from the source [1].
	1734 Replace ` with ' in content.
	1735 Remove the word Surat and header end tag.
	1736 Add id after test the xxx.js file.
	
	References
	1. https://litequran.net/saba [20200510]
*/
var surah = `
<h1 class="page-title" id="034">Saba'</h1>
<p class="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
<ol>
<li><span class="ayat" title="Saba' Ayat 1">اَلْحَمْدُ لِلّٰهِ الَّذِيْ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ وَلَهُ الْحَمْدُ فِى الْاٰخِرَةِۗ وَهُوَ الْحَكِيْمُ الْخَبِيْرُ</span><span class="bacaan">al-ḥamdu lillāhillażī lahụ mā fis-samāwāti wa mā fil-arḍi wa lahul-ḥamdu fil'ākhirah, wa huwal-ḥakīmul-khabīr</span><span class="arti">Segala puji bagi Allah yang memiliki apa yang ada di langit dan apa yang ada di bumi dan segala puji di akhirat bagi Allah. Dan Dialah Yang Mahabijaksana, Mahateliti. </span></li>
<li><span class="ayat" title="Saba' Ayat 2">يَعْلَمُ مَا يَلِجُ فِى الْاَرْضِ وَمَا يَخْرُجُ مِنْهَا وَمَا يَنْزِلُ مِنَ السَّمَاۤءِ وَمَا يَعْرُجُ فِيْهَاۗ وَهُوَ الرَّحِيْمُ الْغَفُوْرُ</span><span class="bacaan">ya'lamu mā yaliju fil-arḍi wa mā yakhruju min-hā wa mā yanzilu minas-samā'i wa mā ya'ruju fīhā, wa huwar-raḥīmul-gafụr</span><span class="arti">Dia mengetahui apa yang masuk ke dalam bumi, apa yang keluar darinya, apa yang turun dari langit dan apa yang naik kepadanya. Dan Dialah Yang Maha Penyayang, Maha Pengampun.</span></li>
<li><span class="ayat" title="Saba' Ayat 3">وَقَالَ الَّذِيْنَ كَفَرُوْا لَا تَأْتِيْنَا السَّاعَةُ ۗقُلْ بَلٰى وَرَبِّيْ لَتَأْتِيَنَّكُمْۙ عٰلِمِ الْغَيْبِۙ لَا يَعْزُبُ عَنْهُ مِثْقَالُ ذَرَّةٍ فِى السَّمٰوٰتِ وَلَا فِى الْاَرْضِ وَلَآ اَصْغَرُ مِنْ ذٰلِكَ وَلَآ اَكْبَرُ اِلَّا فِيْ كِتٰبٍ مُّبِيْنٍۙ </span><span class="bacaan">wa qālallażīna kafarụ lā ta'tīnas-sā'ah, qul balā wa rabbī lata'tiyannakum 'ālimil-gaibi lā ya'zubu 'an-hu miṡqālu żarratin fis-samāwāti wa lā fil-arḍi wa lā aṣgaru min żālika wa lā akbaru illā fī kitābim mubīn</span><span class="arti">Dan orang-orang yang kafir berkata, &ldquo;Hari Kiamat itu tidak akan datang kepada kami.&rdquo; Katakanlah, &ldquo;Pasti datang, demi Tuhanku yang mengetahui yang gaib, Kiamat itu pasti akan datang kepadamu. Tidak ada yang tersembunyi bagi-Nya sekalipun seberat zarrah baik yang di langit maupun yang di bumi, yang lebih kecil dari itu atau yang lebih besar, semuanya (tertulis) dalam Kitab yang jelas (Lauh Mahfuzh),&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 4">لِّيَجْزِيَ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِۗ اُولٰۤىِٕكَ لَهُمْ مَّغْفِرَةٌ وَّرِزْقٌ كَرِيْمٌ </span><span class="bacaan">liyajziyallażīna āmanụ wa 'amiluṣ-ṣāliḥāt, ulā'ika lahum magfiratuw wa rizqung karīm</span><span class="arti">agar Dia (Allah) memberi balasan kepada orang-orang yang beriman dan mengerjakan kebajikan. Mereka memperoleh ampunan dan rezeki yang mulia (surga).</span></li>
<li><span class="ayat" title="Saba' Ayat 5">وَالَّذِيْنَ سَعَوْ فِيْٓ اٰيٰتِنَا مُعٰجِزِيْنَ اُولٰۤىِٕكَ لَهُمْ عَذَابٌ مِّنْ رِّجْزٍ اَلِيْمٌ </span><span class="bacaan">wallażīna sa'au fī āyātinā mu'ājizīna ulā'ika lahum 'ażābum mir rijzin alīm</span><span class="arti">Dan orang-orang yang berusaha untuk (menentang) ayat-ayat Kami dengan anggapan mereka dapat melemahkan (menggagalkan azab Kami), mereka itu akan memperoleh azab, yaitu azab yang sangat pedih.</span></li>
<li><span class="ayat" title="Saba' Ayat 6">وَيَرَى الَّذِيْنَ اُوْتُوا الْعِلْمَ الَّذِيْٓ اُنْزِلَ اِلَيْكَ مِنْ رَّبِّكَ هُوَ الْحَقَّۙ وَيَهْدِيْٓ اِلٰى صِرَاطِ الْعَزِيْزِ الْحَمِيْدِ </span><span class="bacaan">wa yarallażīna ụtul-'ilmallażī unzila ilaika mir rabbika huwal-ḥaqqa wa yahdī ilā ṣirāṭil-'azīzil-ḥamīd</span><span class="arti">Dan orang-orang yang diberi ilmu (Ahli Kitab) berpendapat bahwa (wahyu) yang diturunkan kepadamu (Muhammad) dari Tuhanmu itulah yang benar dan memberi petunjuk (bagi manusia) kepada jalan (Allah) Yang Mahaperkasa, Maha Terpuji.</span></li>
<li><span class="ayat" title="Saba' Ayat 7">وَقَالَ الَّذِيْنَ كَفَرُوْا هَلْ نَدُلُّكُمْ عَلٰى رَجُلٍ يُّنَبِّئُكُمْ اِذَا مُزِّقْتُمْ كُلَّ مُمَزَّقٍۙ اِنَّكُمْ لَفِيْ خَلْقٍ جَدِيْدٍۚ </span><span class="bacaan">wa qālallażīna kafarụ hal nadullukum 'alā rajuliy yunabbi'ukum iżā muzziqtum kulla mumazzaqin innakum lafī khalqin jadīd</span><span class="arti">Dan orang-orang kafir berkata (kepada teman-temannya), &ldquo;Maukah kami tunjukkan kepadamu seorang laki-laki yang memberitakan kepadamu bahwa apabila badanmu telah hancur sehancur-hancurnya, kamu pasti (akan dibangkitkan kembali) dalam ciptaan yang baru.</span></li>
<li><span class="ayat" title="Saba' Ayat 8">اَفْتَرٰى عَلَى اللّٰهِ كَذِبًا اَمْ بِهٖ جِنَّةٌ ۗبَلِ الَّذِيْنَ لَا يُؤْمِنُوْنَ بِالْاٰخِرَةِ فِى الْعَذَابِ وَالضَّلٰلِ الْبَعِيْدِ </span><span class="bacaan">aftarā 'alallāhi każiban am bihī jinnah, balillażīna lā yu'minụna bil-ākhirati fil-'ażābi waḍ-ḍalālil-ba'īd</span><span class="arti">Apakah dia mengada-adakan kebohongan terhadap Allah atau sakit gila?&rdquo; (Tidak), tetapi orang-orang yang tidak beriman kepada akhirat itu berada dalam siksaan dan kesesatan yang jauh.</span></li>
<li><span class="ayat" title="Saba' Ayat 9">اَفَلَمْ يَرَوْا اِلٰى مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْ مِّنَ السَّمَاۤءِ وَالْاَرْضِۗ اِنْ نَّشَأْ نَخْسِفْ بِهِمُ الْاَرْضَ اَوْ نُسْقِطْ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاۤءِۗ اِنَّ فِيْ ذٰلِكَ لَاٰيَةً لِّكُلِّ عَبْدٍ مُّنِيْبٍ </span><span class="bacaan">a fa lam yarau ilā mā baina aidīhim wa mā khalfahum minas-samā'i wal-arḍ, in nasya' nakhsif bihimul-arḍa au nusqiṭ 'alaihim kisafam minas-samā', inna fī żālika la'āyatal likulli 'abdim munīb</span><span class="arti">Maka apakah mereka tidak memperhatikan langit dan bumi yang ada di hadapan dan di belakang mereka? Jika Kami menghendaki, niscaya Kami benamkan mereka di bumi atau Kami jatuhkan kepada mereka kepingan-kepingan dari langit. Sungguh, pada yang demikian itu benar-benar terdapat tanda (kekuasaan Allah) bagi setiap hamba yang kembali (kepada-Nya).</span></li>
<li><span class="ayat" title="Saba' Ayat 10">۞ وَلَقَدْ اٰتَيْنَا دَاوٗدَ مِنَّا فَضْلًاۗ يٰجِبَالُ اَوِّبِيْ مَعَهٗ وَالطَّيْرَ ۚوَاَلَنَّا لَهُ الْحَدِيْدَۙ </span><span class="bacaan">wa laqad ātainā dāwụda minnā faḍlā, yā jibālu awwibī ma'ahụ waṭ-ṭaīr, wa alannā lahul-ḥadīd</span><span class="arti">Dan sungguh, Telah Kami berikan kepada Dawud karunia dari Kami. (Kami berfirman), &ldquo;Wahai gunung-gunung dan burung-burung! Bertasbihlah berulang-ulang bersama Dawud,&rdquo; dan Kami telah melunakkan besi untuknya,</span></li>
<li><span class="ayat" title="Saba' Ayat 11">اَنِ اعْمَلْ سٰبِغٰتٍ وَّقَدِّرْ فِى السَّرْدِ وَاعْمَلُوْا صَالِحًاۗ اِنِّيْ بِمَا تَعْمَلُوْنَ بَصِيْرٌ </span><span class="bacaan">ani'mal sābigātiw wa qaddir fis-sardi wa'malụ ṣāliḥā, innī bimā ta'malụna baṣīr</span><span class="arti">yaitu) buatlah baju besi yang besar-besar dan ukurlah anyamannya; dan kerjakanlah kebajikan. Sungguh, Aku Maha Melihat apa yang kamu kerjakan.</span></li>
<li><span class="ayat" title="Saba' Ayat 12">وَلِسُلَيْمٰنَ الرِّيْحَ غُدُوُّهَا شَهْرٌ وَّرَوَاحُهَا شَهْرٌۚ وَاَسَلْنَا لَهٗ عَيْنَ الْقِطْرِۗ وَمِنَ الْجِنِّ مَنْ يَّعْمَلُ بَيْنَ يَدَيْهِ بِاِذْنِ رَبِّهٖۗ وَمَنْ يَّزِغْ مِنْهُمْ عَنْ اَمْرِنَا نُذِقْهُ مِنْ عَذَابِ السَّعِيْرِ </span><span class="bacaan">wa lisulaimānar-rīḥa guduwwuhā syahruw wa rawāḥuhā syahr, wa asalnā lahụ 'ainal-qiṭr, wa minal-jinni may ya'malu baina yadaihi bi'iżni rabbih, wa may yazig min-hum 'an amrinā nużiq-hu min 'ażābis-sa'īr</span><span class="arti">Dan Kami (tundukkan) angin bagi Sulaiman, yang perjalanannya pada waktu pagi sama dengan perjalanan sebulan dan perjalanannya pada waktu sore sama dengan perjalanan sebulan (pula) dan Kami alirkan cairan tembaga baginya. Dan sebagian dari jin ada yang bekerja di hadapannya (di bawah kekuasaannya) dengan izin Tuhannya. Dan siapa yang menyimpang di antara mereka dari perintah Kami, Kami rasakan kepadanya azab neraka yang apinya menyala-nyala.</span></li>
<li><span class="ayat" title="Saba' Ayat 13">يَعْمَلُوْنَ لَهٗ مَا يَشَاۤءُ مِنْ مَّحَارِيْبَ وَتَمَاثِيْلَ وَجِفَانٍ كَالْجَوَابِ وَقُدُوْرٍ رّٰسِيٰتٍۗ اِعْمَلُوْٓا اٰلَ دَاوٗدَ شُكْرًا ۗوَقَلِيْلٌ مِّنْ عِبَادِيَ الشَّكُوْرُ </span><span class="bacaan">ya'malụna lahụ mā yasyā'u mim maḥārība wa tamāṡīla wa jifāning kal-jawābi wa qudụrir rāsiyāt, i'malū āla dāwụda syukrā, wa qalīlum min 'ibādiyasy-syakụr</span><span class="arti">Mereka (para jin itu) bekerja untuk Sulaiman sesuai dengan apa yang dikehendakinya di antaranya (membuat) gedung-gedung yang tinggi, patung-patung, piring-piring yang (besarnya) seperti kolam dan periuk-periuk yang tetap (berada di atas tungku). Bekerjalah wahai keluarga Dawud untuk bersyukur (kepada Allah). Dan sedikit sekali dari hamba-hamba-Ku yang bersyukur.</span></li>
<li><span class="ayat" title="Saba' Ayat 14">فَلَمَّا قَضَيْنَا عَلَيْهِ الْمَوْتَ مَا دَلَّهُمْ عَلٰى مَوْتِهٖٓ اِلَّا دَاۤبَّةُ الْاَرْضِ تَأْكُلُ مِنْسَاَتَهٗ ۚفَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ اَنْ لَّوْ كَانُوْا يَعْلَمُوْنَ الْغَيْبَ مَا لَبِثُوْا فِى الْعَذَابِ الْمُهِيْنِۗ </span><span class="bacaan">fa lammā qaḍainā 'alaihil-mauta mā dallahum 'alā mautihī illā dābbatul-arḍi ta'kulu minsa'atah, fa lammā kharra tabayyanatil-jinnu al lau kānụ ya'lamụnal-gaiba mā labiṡụ fil-'ażābil-muhīn</span><span class="arti">Maka ketika Kami telah menetapkan kematian atasnya (Sulaiman), tidak ada yang menunjukkan kepada mereka kematiannya itu kecuali rayap yang memakan tongkatnya. Maka ketika dia telah tersungkur, tahulah jin itu bahwa sekiranya mereka mengetahui yang gaib tentu mereka tidak tetap dalam siksa yang menghinakan.</span></li>
<li><span class="ayat" title="Saba' Ayat 15">لَقَدْ كَانَ لِسَبَاٍ فِيْ مَسْكَنِهِمْ اٰيَةٌ ۚجَنَّتٰنِ عَنْ يَّمِيْنٍ وَّشِمَالٍ ەۗ كُلُوْا مِنْ رِّزْقِ رَبِّكُمْ وَاشْكُرُوْا لَهٗ ۗبَلْدَةٌ طَيِّبَةٌ وَّرَبٌّ غَفُوْرٌ</span><span class="bacaan">laqad kāna lisaba'in fī maskanihim āyah, jannatāni 'ay yamīniw wa syimāl, kulụ mir rizqi rabbikum wasykurụ lah, baldatun ṭayyibatuw wa rabbun gafụr</span><span class="arti">Sungguh, bagi kaum Saba&rsquo; ada tanda (kebesaran Tuhan) di tempat kediaman mereka yaitu dua buah kebun di sebelah kanan dan di sebelah kiri, (kepada mereka dikatakan), &ldquo;Makanlah olehmu dari rezeki yang (dianugerahkan) Tuhanmu dan bersyukurlah kepada-Nya. (Negerimu) adalah negeri yang baik (nyaman) sedang (Tuhanmu) adalah Tuhan Yang Maha Pengampun.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 16">فَاَعْرَضُوْا فَاَرْسَلْنَا عَلَيْهِمْ سَيْلَ الْعَرِمِ وَبَدَّلْنٰهُمْ بِجَنَّتَيْهِمْ جَنَّتَيْنِ ذَوَاتَيْ اُكُلٍ خَمْطٍ وَّاَثْلٍ وَّشَيْءٍ مِّنْ سِدْرٍ قَلِيْلٍ </span><span class="bacaan">fa a'raḍụ fa arsalnā 'alaihim sailal-'arimi wa baddalnāhum bijannataihim jannataini żawātai ukulin khamṭiw wa aṡliw wa syai'im min sidring qalīl</span><span class="arti">Tetapi mereka berpaling, maka Kami kirim kepada mereka banjir yang besar dan Kami ganti kedua kebun mereka dengan dua kebun yang ditumbuhi (pohon-pohon) yang berbuah pahit, pohon Atsl dan sedikit pohon Sidr.</span></li>
<li><span class="ayat" title="Saba' Ayat 17">ذٰلِكَ جَزَيْنٰهُمْ بِمَا كَفَرُوْاۗ وَهَلْ نُجٰزِيْٓ اِلَّا الْكَفُوْرَ </span><span class="bacaan">żālika jazaināhum bimā kafarụ, wa hal nujāzī illal-kafụr</span><span class="arti">Demikianlah Kami memberi balasan kepada mereka karena kekafiran mereka. Dan Kami tidak menjatuhkan azab (yang demikian itu), melainkan hanya kepada orang-orang yang sangat kafir.</span></li>
<li><span class="ayat" title="Saba' Ayat 18">وَجَعَلْنَا بَيْنَهُمْ وَبَيْنَ الْقُرَى الَّتِيْ بٰرَكْنَا فِيْهَا قُرًى ظَاهِرَةً وَّقَدَّرْنَا فِيْهَا السَّيْرَۗ سِيْرُوْا فِيْهَا لَيَالِيَ وَاَيَّامًا اٰمِنِيْنَ </span><span class="bacaan">wa ja'alnā bainahum wa bainal-qurallatī bāraknā fīhā quran ẓāhirataw wa qaddarnā fīhas-saīr, sīrụ fīhā layāliya wa ayyāman āminīn</span><span class="arti">Dan Kami jadikan antara mereka (penduduk Saba&rsquo;) dan negeri-negeri yang Kami berkahi (Syam), beberapa negeri yang berdekatan dan Kami tetapkan antara negeri-negeri itu (jarak-jarak) perjalanan. Berjalanlah kamu di negeri-negeri itu pada malam dan siang hari dengan aman.</span></li>
<li><span class="ayat" title="Saba' Ayat 19">فَقَالُوْا رَبَّنَا بٰعِدْ بَيْنَ اَسْفَارِنَا وَظَلَمُوْٓا اَنْفُسَهُمْ فَجَعَلْنٰهُمْ اَحَادِيْثَ وَمَزَّقْنٰهُمْ كُلَّ مُمَزَّقٍۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّكُلِّ صَبَّارٍ شَكُوْرٍ </span><span class="bacaan">fa qālụ rabbanā bā'id baina asfārinā wa ẓalamū anfusahum fa ja'alnāhum aḥādīṡa wa mazzaqnāhum kulla mumazzaq, inna fī żālika la'āyātil likulli ṣabbārin syakụr</span><span class="arti">Maka mereka berkata, &ldquo;Ya Tuhan kami, jauhkanlah jarak perjalanan kami,&rdquo; dan (berarti mereka) menzalimi diri mereka sendiri; maka Kami jadikan mereka bahan pembicaraan dan Kami hancurkan mereka sehancur-hancurnya. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kekuasaan Allah) bagi setiap orang yang sabar dan bersyukur.</span></li>
<li><span class="ayat" title="Saba' Ayat 20">وَلَقَدْ صَدَّقَ عَلَيْهِمْ اِبْلِيْسُ ظَنَّهٗ فَاتَّبَعُوْهُ اِلَّا فَرِيْقًا مِّنَ الْمُؤْمِنِيْنَ </span><span class="bacaan">wa laqad ṣaddaqa 'alaihim iblīsu ẓannahụ fattaba'ụhu illā farīqam minal-mu'minīn</span><span class="arti">Dan sungguh, Iblis telah dapat meyakinkan terhadap mereka kebenaran sangkaannya, lalu mereka mengikutinya, kecuali sebagian dari orang-orang mukmin.</span></li>
<li><span class="ayat" title="Saba' Ayat 21">وَمَا كَانَ لَهٗ عَلَيْهِمْ مِّنْ سُلْطَانٍ اِلَّا لِنَعْلَمَ مَنْ يُّؤْمِنُ بِالْاٰخِرَةِ مِمَّنْ هُوَ مِنْهَا فِيْ شَكٍّ ۗوَرَبُّكَ عَلٰى كُلِّ شَيْءٍ حَفِيْظٌ </span><span class="bacaan">wa mā kāna lahụ 'alaihim min sulṭānin illā lina'lama may yu'minu bil-ākhirati mim man huwa min-hā fī syakk, wa rabbuka 'alā kulli syai'in ḥafīẓ</span><span class="arti">Dan tidak ada kekuasaan (Iblis) terhadap mereka, melainkan hanya agar Kami dapat membedakan siapa yang beriman kepada adanya akhirat dan siapa yang masih ragu-ragu tentang (akhirat) itu. Dan Tuhanmu Maha Memelihara segala sesuatu.</span></li>
<li><span class="ayat" title="Saba' Ayat 22">قُلِ ادْعُوا الَّذِيْنَ زَعَمْتُمْ مِّنْ دُوْنِ اللّٰهِۚ لَا يَمْلِكُوْنَ مِثْقَالَ ذَرَّةٍ فِى السَّمٰوٰتِ وَلَا فِى الْاَرْضِ وَمَا لَهُمْ فِيْهِمَا مِنْ شِرْكٍ وَّمَا لَهٗ مِنْهُمْ مِّنْ ظَهِيْرٍ </span><span class="bacaan">qulid'ullażīna za'amtum min dụnillāh, lā yamlikụna miṡqāla żarratin fis-samāwāti wa lā fil-arḍi wa mā lahum fīhimā min syirkiw wa mā lahụ min-hum min ẓahīr</span><span class="arti">Katakanlah (Muhammad), &ldquo;Serulah mereka yang kamu anggap (sebagai tuhan) selain Allah! Mereka tidak memiliki (kekuasaan) seberat zarrah pun di langit dan di bumi, dan mereka sama sekali tidak mempunyai peran serta dalam (penciptaan) langit dan bumi dan tidak ada di antara mereka yang menjadi pembantu bagi-Nya.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 23">وَلَا تَنْفَعُ الشَّفَاعَةُ عِنْدَهٗٓ اِلَّا لِمَنْ اَذِنَ لَهٗ ۗحَتّٰىٓ اِذَا فُزِّعَ عَنْ قُلُوْبِهِمْ قَالُوْا مَاذَاۙ قَالَ رَبُّكُمْۗ قَالُوا الْحَقَّۚ وَهُوَ الْعَلِيُّ الْكَبِيْرُ </span><span class="bacaan">wa lā tanfa'usy-syafā'atu 'indahū illā liman ażina lah, ḥattā iżā fuzzi'a 'ang qulụbihim qālụ māżā qāla rabbukum, qālul-ḥaqq, wa huwal-'aliyyul-kabīr</span><span class="arti">Dan syafaat (pertolongan) di sisi-Nya hanya berguna bagi orang yang telah diizinkan-Nya (memperoleh syafaat itu). Sehingga apabila telah dihilangkan ketakutan dari hati mereka, mereka berkata, &ldquo;Apakah yang telah difirmankan oleh Tuhanmu?&rdquo; Mereka menjawab, &ldquo;(Perkataan) yang benar,&rdquo; dan Dialah Yang Mahatinggi, Mahabesar.</span></li>
<li><span class="ayat" title="Saba' Ayat 24">۞ قُلْ مَنْ يَّرْزُقُكُمْ مِّنَ السَّمٰوٰتِ وَالْاَرْضِۗ قُلِ اللّٰهُ ۙوَاِنَّآ اَوْ اِيَّاكُمْ لَعَلٰى هُدًى اَوْ فِيْ ضَلٰلٍ مُّبِيْنٍ </span><span class="bacaan">qul may yarzuqukum minas-samāwāti wal-arḍ, qulillāhu wa innā au iyyākum la'alā hudan au fī ḍalālim mubīn</span><span class="arti">Katakanlah (Muhammad), &ldquo;Siapakah yang memberi rezeki kepadamu dari langit dan dari bumi?&rdquo; Katakanlah, &ldquo;Allah,&rdquo; dan sesungguhnya kami atau kamu (orang-orang musyrik), pasti berada dalam kebenaran atau dalam kesesatan yang nyata.</span></li>
<li><span class="ayat" title="Saba' Ayat 25">قُلْ لَّا تُسْـَٔلُوْنَ عَمَّآ اَجْرَمْنَا وَلَا نُسْـَٔلُ عَمَّا تَعْمَلُوْنَ </span><span class="bacaan">qul lā tus'alụna 'ammā ajramnā wa lā nus'alu 'ammā ta'malụn</span><span class="arti">Katakanlah, &ldquo;Kamu tidak akan dimintai tanggung jawab atas apa yang kami kerjakan dan kami juga tidak akan dimintai tanggung jawab atas apa yang kamu kerjakan.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 26">قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا ثُمَّ يَفْتَحُ بَيْنَنَا بِالْحَقِّۗ وَهُوَ الْفَتَّاحُ الْعَلِيْمُ </span><span class="bacaan">qul yajma'u bainanā rabbunā ṡumma yaftaḥu bainanā bil-ḥaqq, wa huwal-fattāḥul-'alīm</span><span class="arti">Katakanlah, &ldquo;Tuhan kita akan mengumpulkan kita semua, kemudian Dia memberi keputusan antara kita dengan benar. Dan Dia Yang Maha Pemberi keputusan, Maha Mengetahui.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 27">قُلْ اَرُوْنِيَ الَّذِيْنَ اَلْحَقْتُمْ بِهٖ شُرَكَاۤءَ كَلَّا ۗبَلْ هُوَ اللّٰهُ الْعَزِيْزُ الْحَكِيْمُ </span><span class="bacaan">qul arụniyallażīna alḥaqtum bihī syurakā'a kallā, bal huwallāhul-'azīzul-ḥakīm</span><span class="arti">Katakanlah, &ldquo;Perlihatkanlah kepadaku sembahan-sembahan yang kamu hubungkan dengan Dia sebagai sekutu-sekutu(-Nya), tidak mungkin! Sebenarnya Dialah Allah Yang Mahaperkasa, Mahabijaksana.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 28">وَمَآ اَرْسَلْنٰكَ اِلَّا كَاۤفَّةً لِّلنَّاسِ بَشِيْرًا وَّنَذِيْرًا وَّلٰكِنَّ اَكْثَرَ النَّاسِ لَا يَعْلَمُوْنَ </span><span class="bacaan">wa mā arsalnāka illā kāffatal lin-nāsi basyīraw wa nażīraw wa lākinna akṡaran-nāsi lā ya'lamụn</span><span class="arti">Dan Kami tidak mengutus engkau (Muhammad), melainkan kepada semua umat manusia sebagai pembawa berita gembira dan sebagai pemberi peringatan, tetapi kebanyakan manusia tidak mengetahui.</span></li>
<li><span class="ayat" title="Saba' Ayat 29">وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ </span><span class="bacaan">wa yaqụlụna matā hāżal-wa'du ing kuntum ṣādiqīn</span><span class="arti">Dan mereka berkata, &ldquo;Kapankah (datangnya) janji ini, jika kamu orang yang benar?&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 30">قُلْ لَّكُمْ مِّيْعَادُ يَوْمٍ لَّا تَسْتَأْخِرُوْنَ عَنْهُ سَاعَةً وَّلَا تَسْتَقْدِمُوْنَ </span><span class="bacaan">qul lakum mī'ādu yaumil lā tasta'khirụna 'an-hu sā'ataw wa lā tastaqdimụn</span><span class="arti">Katakanlah, &ldquo;Bagimu ada hari yang telah dijanjikan (hari Kiamat), kamu tidak dapat meminta penundaan atau percepatannya sesaat pun.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 31">وَقَالَ الَّذِيْنَ كَفَرُوْا لَنْ نُّؤْمِنَ بِهٰذَا الْقُرْاٰنِ وَلَا بِالَّذِيْ بَيْنَ يَدَيْهِۗ وَلَوْ تَرٰىٓ اِذِ الظّٰلِمُوْنَ مَوْقُوْفُوْنَ عِنْدَ رَبِّهِمْۖ يَرْجِعُ بَعْضُهُمْ اِلٰى بَعْضِ ِۨالْقَوْلَۚ يَقُوْلُ الَّذِيْنَ اسْتُضْعِفُوْا لِلَّذِيْنَ اسْتَكْبَرُوْا لَوْلَآ اَنْتُمْ لَكُنَّا مُؤْمِنِيْنَ </span><span class="bacaan">wa qālallażīna kafarụ lan nu'mina bihāżal-qur'āni wa lā billażī baina yadaīh, walau tarā iżiẓ-ẓālimụna mauqụfụna 'inda rabbihim yarji'u ba'ḍuhum ilā ba'ḍinil-qaụl, yaqụlullażīnastuḍ'ifụ lillażīnastakbarụ lau lā antum lakunnā mu'minīn</span><span class="arti">Dan orang-orang kafir berkata, &ldquo;Kami tidak akan beriman kepada Al-Qur'an ini dan tidak (pula) kepada Kitab yang sebelumnya.&rdquo; Dan (alangkah mengerikan) kalau kamu melihat ketika orang-orang yang zalim itu dihadapkan kepada Tuhannya, sebagian mereka mengembalikan perkataan kepada sebagian yang lain; orang-orang yang dianggap lemah berkata kepada orang-orang yang menyombongkan diri, &ldquo;Kalau tidaklah karena kamu tentulah kami menjadi orang-orang mukmin.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 32">قَالَ الَّذِيْنَ اسْتَكْبَرُوْا لِلَّذِيْنَ اسْتُضْعِفُوْٓا اَنَحْنُ صَدَدْنٰكُمْ عَنِ الْهُدٰى بَعْدَ اِذْ جَاۤءَكُمْ بَلْ كُنْتُمْ مُّجْرِمِيْنَ </span><span class="bacaan">qālallażīnastakbarụ lillażīnastuḍ'ifū a naḥnu ṣadadnākum 'anil-hudā ba'da iż jā'akum bal kuntum mujrimīn</span><span class="arti">Orang-orang yang menyombongkan diri berkata kepada orang-orang yang dianggap lemah, &ldquo;Kamikah yang telah menghalangimu untuk memperoleh petunjuk setelah petunjuk itu datang kepadamu? (Tidak!) Sebenarnya kamu sendirilah orang-orang yang berbuat dosa.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 33">وَقَالَ الَّذِيْنَ اسْتُضْعِفُوْا لِلَّذِيْنَ اسْتَكْبَرُوْا بَلْ مَكْرُ الَّيْلِ وَالنَّهَارِ اِذْ تَأْمُرُوْنَنَآ اَنْ نَّكْفُرَ بِاللّٰهِ وَنَجْعَلَ لَهٗٓ اَنْدَادًا ۗوَاَسَرُّوا النَّدَامَةَ لَمَّا رَاَوُا الْعَذَابَۗ وَجَعَلْنَا الْاَغْلٰلَ فِيْٓ اَعْنَاقِ الَّذِيْنَ كَفَرُوْاۗ هَلْ يُجْزَوْنَ اِلَّا مَا كَانُوْا يَعْمَلُوْنَ </span><span class="bacaan">wa qālallażīnastuḍ'ifụ lillażīnastakbarụ bal makrul-laili wan-nahāri iż ta'murụnanā an nakfura billāhi wa naj'ala lahū andādā, wa asarrun-nadāmata lammā ra'awul-'ażāb, wa ja'alnal-aglāla fī a'nāqillażīna kafarụ, hal yujzauna illā mā kānụ ya'malụn</span><span class="arti">Dan orang-orang yang dianggap lemah berkata kepada orang-orang yang menyombongkan diri, &ldquo;(Tidak!) Sebenarnya tipu daya(mu) pada waktu malam dan siang (yang menghalangi kami), ketika kamu menyeru kami agar kami kafir kepada Allah dan menjadikan sekutu-sekutu bagi-Nya.&rdquo; Mereka menyatakan penyesalan ketika mereka melihat azab. Dan Kami pasangkan belenggu di leher orang-orang yang kafir. Mereka tidak dibalas melainkan sesuai dengan apa yang telah mereka kerjakan.</span></li>
<li><span class="ayat" title="Saba' Ayat 34">وَمَآ اَرْسَلْنَا فِيْ قَرْيَةٍ مِّنْ نَّذِيْرٍ ِالَّا قَالَ مُتْرَفُوْهَآ ۙاِنَّا بِمَآ اُرْسِلْتُمْ بِهٖ كٰفِرُوْنَ </span><span class="bacaan">wa mā arsalnā fī qaryatim min nażīrin illā qāla mutrafụhā innā bimā ursiltum bihī kāfirụn</span><span class="arti">Dan setiap Kami mengutus seorang pemberi peringatan kepada suatu negeri, orang-orang yang hidup mewah (di negeri itu) berkata, &ldquo;Kami benar-benar mengingkari apa yang kamu sampaikan sebagai utusan.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 35">وَقَالُوْا نَحْنُ اَكْثَرُ اَمْوَالًا وَّاَوْلَادًاۙ وَّمَا نَحْنُ بِمُعَذَّبِيْنَ </span><span class="bacaan">wa qālụ naḥnu akṡaru amwālaw wa aulādaw wa mā naḥnu bimu'ażżabīn</span><span class="arti">Dan mereka berkata, &ldquo;Kami memiliki lebih banyak harta dan anak-anak (daripada kamu) dan kami tidak akan diazab.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 36">قُلْ اِنَّ رَبِّيْ يَبْسُطُ الرِّزْقَ لِمَنْ يَّشَاۤءُ وَيَقْدِرُ وَلٰكِنَّ اَكْثَرَ النَّاسِ لَا يَعْلَمُوْنَ</span><span class="bacaan">qul inna rabbī yabsuṭur-rizqa limay yasyā'u wa yaqdiru wa lākinna akṡaran-nāsi lā ya'lamụn</span><span class="arti">Katakanlah, &ldquo;Sungguh, Tuhanku melapangkan rezeki bagi siapa yang Dia kehendaki dan membatasinya (bagi siapa yang Dia kehendaki), tetapi kebanyakan manusia tidak mengetahui.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 37">وَمَآ اَمْوَالُكُمْ وَلَآ اَوْلَادُكُمْ بِالَّتِيْ تُقَرِّبُكُمْ عِنْدَنَا زُلْفٰىٓ اِلَّا مَنْ اٰمَنَ وَعَمِلَ صَالِحًاۙ فَاُولٰۤىِٕكَ لَهُمْ جَزَاۤءُ الضِّعْفِ بِمَا عَمِلُوْا وَهُمْ فِى الْغُرُفٰتِ اٰمِنُوْنَ </span><span class="bacaan">wa mā amwālukum wa lā aulādukum billatī tuqarribukum 'indanā zulfā illā man āmana wa 'amila ṣāliḥan fa ulā'ika lahum jazā'uḍ-ḍi'fi bimā 'amilụ wa hum fil-gurufāti āminụn</span><span class="arti">Dan bukanlah harta atau anak-anakmu yang mendekatkan kamu kepada Kami; melainkan orang-orang yang beriman dan mengerjakan kebajikan, mereka itulah yang memperoleh balasan yang berlipat ganda atas apa yang telah mereka kerjakan; dan mereka aman sentosa di tempat-tempat yang tinggi (dalam surga).</span></li>
<li><span class="ayat" title="Saba' Ayat 38">وَالَّذِيْنَ يَسْعَوْنَ فِيْٓ اٰيٰتِنَا مُعٰجِزِيْنَ اُولٰۤىِٕكَ فِى الْعَذَابِ مُحْضَرُوْنَ </span><span class="bacaan">wallażīna yas'auna fī āyātinā mu'ājizīna ulā'ika fil-'ażābi muḥḍarụn</span><span class="arti">Dan orang-orang yang berusaha menentang ayat-ayat Kami untuk melemahkan (menggagalkan azab Kami), mereka itu dimasukkan ke dalam azab.</span></li>
<li><span class="ayat" title="Saba' Ayat 39">قُلْ اِنَّ رَبِّيْ يَبْسُطُ الرِّزْقَ لِمَنْ يَّشَاۤءُ مِنْ عِبَادِهٖ وَيَقْدِرُ لَهٗ ۗوَمَآ اَنْفَقْتُمْ مِّنْ شَيْءٍ فَهُوَ يُخْلِفُهٗ ۚوَهُوَ خَيْرُ الرّٰزِقِيْنَ </span><span class="bacaan">qul inna rabbī yabsuṭur-rizqa limay yasyā'u min 'ibādihī wa yaqdiru lah, wa mā anfaqtum min syai'in fa huwa yukhlifuh, wa huwa khairur-rāziqīn</span><span class="arti">Katakanlah, &ldquo;Sungguh, Tuhanku melapangkan rezeki dan membatasinya bagi siapa yang Dia kehendaki di antara hamba-hamba-Nya.&rdquo; Dan apa saja yang kamu infakkan, Allah akan menggantinya dan Dialah pemberi rezeki yang terbaik.</span></li>
<li><span class="ayat" title="Saba' Ayat 40">وَيَوْمَ يَحْشُرُهُمْ جَمِيْعًا ثُمَّ يَقُوْلُ لِلْمَلٰۤىِٕكَةِ اَهٰٓؤُلَاۤءِ اِيَّاكُمْ كَانُوْا يَعْبُدُوْنَ </span><span class="bacaan">wa yauma yaḥsyuruhum jamī'an ṡumma yaqụlu lil-malā'ikati a hā'ulā'i iyyākum kānụ ya'budụn</span><span class="arti">Dan (ingatlah) pada hari (ketika) Allah mengumpulkan mereka semuanya kemudian Dia berfirman kepada para malaikat, &ldquo;Apakah kepadamu mereka ini dahulu menyembah?&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 41">قَالُوْا سُبْحٰنَكَ اَنْتَ وَلِيُّنَا مِنْ دُوْنِهِمْ ۚبَلْ كَانُوْا يَعْبُدُوْنَ الْجِنَّ اَكْثَرُهُمْ بِهِمْ مُّؤْمِنُوْنَ </span><span class="bacaan">qālụ sub-ḥānaka anta waliyyunā min dụnihim, bal kānụ ya'budụnal-jinna akṡaruhum bihim mu'minụn</span><span class="arti">Para malaikat itu menjawab, &ldquo;Mahasuci Engkau. Engkaulah pelindung kami, bukan mereka; bahkan mereka telah menyembah jin; kebanyakan mereka beriman kepada jin itu.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 42">فَالْيَوْمَ لَا يَمْلِكُ بَعْضُكُمْ لِبَعْضٍ نَّفْعًا وَّلَا ضَرًّا ۗوَنَقُوْلُ لِلَّذِيْنَ ظَلَمُوْا ذُوْقُوْا عَذَابَ النَّارِ الَّتِيْ كُنْتُمْ بِهَا تُكَذِّبُوْنَ </span><span class="bacaan">fal-yauma lā yamliku ba'ḍukum liba'ḍin naf'aw wa lā ḍarrā, wa naqụlu lillażīna ẓalamụ żụqụ 'ażāban-nārillatī kuntum bihā tukażżibụn</span><span class="arti">Maka pada hari ini sebagian kamu tidak kuasa (mendatangkan) manfaat maupun (menolak) mudarat kepada se-bagian yang lain. Dan Kami katakan kepada orang-orang yang zalim, &ldquo;Rasakanlah olehmu azab neraka yang dahulu kamu dustakan.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 43">وَاِذَا تُتْلٰى عَلَيْهِمْ اٰيٰتُنَا بَيِّنٰتٍ قَالُوْا مَا هٰذَآ اِلَّا رَجُلٌ يُّرِيْدُ اَنْ يَّصُدَّكُمْ عَمَّا كَانَ يَعْبُدُ اٰبَاۤؤُكُمْ ۚوَقَالُوْا مَا هٰذَآ اِلَّآ اِفْكٌ مُّفْتَرًىۗ وَقَالَ الَّذِيْنَ كَفَرُوْا لِلْحَقِّ لَمَّا جَاۤءَهُمْۙ اِنْ هٰذَآ اِلَّا سِحْرٌ مُّبِيْنٌ </span><span class="bacaan">wa iżā tutlā 'alaihim āyātunā bayyināting qālụ mā hāżā illā rajuluy yurīdu ay yaṣuddakum 'ammā kāna ya'budu ābā'ukum, wa qālụ mā hāżā illā ifkum muftarā, wa qālallażīna kafarụ lil-ḥaqqi lammā jā'ahum in hāżā illā siḥrum mubīn</span><span class="arti">Dan apabila dibacakan kepada mereka ayat-ayat Kami yang terang, mereka berkata, &ldquo;Orang ini tidak lain hanya ingin menghalang-halangi kamu dari apa yang disembah oleh nenek moyangmu,&rdquo; dan mereka berkata, &ldquo;(Al-Qur'an) ini tidak lain hanyalah kebohongan yang diada-adakan saja.&rdquo; Dan orang-orang kafir berkata terhadap kebenaran ketika kebenaran (Al-Qur'an) itu datang kepada mereka, &ldquo;Ini tidak lain hanyalah sihir yang nyata.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 44">وَمَآ اٰتَيْنٰهُمْ مِّنْ كُتُبٍ يَّدْرُسُوْنَهَا وَمَآ اَرْسَلْنَآ اِلَيْهِمْ قَبْلَكَ مِنْ نَّذِيْرٍۗ </span><span class="bacaan">wa mā ātaināhum ming kutubiy yadrusụnahā wa mā arsalnā ilaihim qablaka min nażīr</span><span class="arti">Dan Kami tidak pernah memberikan kepada mereka kitab-kitab yang mereka baca dan Kami tidak pernah mengutus seorang pemberi peringatan kepada mereka sebelum engkau (Muhammad).</span></li>
<li><span class="ayat" title="Saba' Ayat 45">وَكَذَّبَ الَّذِيْنَ مِنْ قَبْلِهِمْۙ وَمَا بَلَغُوْا مِعْشَارَ مَآ اٰتَيْنٰهُمْ فَكَذَّبُوْا رُسُلِيْۗ فَكَيْفَ كَانَ نَكِيْرِ</span><span class="bacaan">wa każżaballażīna ming qablihim wa mā balagụ mi'syāra mā ātaināhum fa każżabụ rusulī, fa kaifa kāna nakīr</span><span class="arti">Dan orang-orang yang sebelum mereka telah mendustakan (para rasul) sedang orang-orang (kafir Mekah) itu belum sampai menerima sepersepuluh dari apa yang telah Kami berikan kepada orang-orang terdahulu itu namun mereka mendustakan para rasul-Ku. Maka (lihatlah) bagaimana dahsyatnya akibat kemurkaan-Ku.</span></li>
<li><span class="ayat" title="Saba' Ayat 46">۞ قُلْ اِنَّمَآ اَعِظُكُمْ بِوَاحِدَةٍۚ اَنْ تَقُوْمُوْا لِلّٰهِ مَثْنٰى وَفُرَادٰى ثُمَّ تَتَفَكَّرُوْاۗ مَا بِصَاحِبِكُمْ مِّنْ جِنَّةٍۗ اِنْ هُوَ اِلَّا نَذِيْرٌ لَّكُمْ بَيْنَ يَدَيْ عَذَابٍ شَدِيْدٍ </span><span class="bacaan">qul innamā a'iẓukum biwāḥidah, an taqụmụ lillāhi maṡnā wa furādā ṡumma tatafakkarụ, mā biṣāḥibikum min jinnah, in huwa illā nażīrul lakum baina yadai 'ażābin syadīd</span><span class="arti">Katakanlah, &ldquo;Aku hendak memperingatkan kepadamu satu hal saja, yaitu agar kamu menghadap Allah (dengan ikhlas) berdua-dua atau sendiri-sendiri; kemudian agar kamu pikirkan (tentang Muhammad). Kawanmu itu tidak gila sedikit pun. Dia tidak lain hanyalah seorang pemberi peringatan bagi kamu sebelum (menghadapi) azab yang keras.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 47">قُلْ مَا سَاَلْتُكُمْ مِّنْ اَجْرٍ فَهُوَ لَكُمْۗ اِنْ اَجْرِيَ اِلَّا عَلَى اللّٰهِ ۚوَهُوَ عَلٰى كُلِّ شَيْءٍ شَهِيْدٌ </span><span class="bacaan">qul mā sa'altukum min ajrin fa huwa lakum, in ajriya illā 'alallāh, wa huwa 'alā kulli syai'in syahīd</span><span class="arti">Katakanlah (Muhammad), &ldquo;Imbalan apa pun yang aku minta kepadamu, maka itu untuk kamu. Imbalanku hanyalah dari Allah, dan Dia Maha Mengetahui segala sesuatu.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 48">قُلْ اِنَّ رَبِّيْ يَقْذِفُ بِالْحَقِّۚ عَلَّامُ الْغُيُوْبِ </span><span class="bacaan">qul inna rabbī yaqżifu bil-ḥaqq, 'allāmul-guyụb</span><span class="arti">Katakanlah, &ldquo;Sesungguhnya Tuhanku mewahyukan kebenaran. Dia Maha Mengetahui segala yang gaib.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 49">قُلْ جَاۤءَ الْحَقُّ وَمَا يُبْدِئُ الْبَاطِلُ وَمَا يُعِيْدُ </span><span class="bacaan">qul jā'al-ḥaqqu wa mā yubdi'ul-bāṭilu wa mā yu'īd</span><span class="arti">Katakanlah, &ldquo;Kebenaran telah datang dan yang batil itu tidak akan memulai dan tidak (pula) akan mengulangi.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 50">قُلْ اِنْ ضَلَلْتُ فَاِنَّمَآ اَضِلُّ عَلٰى نَفْسِيْۚ وَاِنِ اهْتَدَيْتُ فَبِمَا يُوْحِيْٓ اِلَيَّ رَبِّيْۗ اِنَّهٗ سَمِيْعٌ قَرِيْبٌ </span><span class="bacaan">qul in ḍalaltu fa innamā aḍillu 'alā nafsī, wa inihtadaitu fa bimā yụḥī ilayya rabbī, innahụ samī'ung qarīb</span><span class="arti">Katakanlah, &ldquo;Jika aku sesat maka sesungguhnya aku sesat untuk diriku sendiri; dan jika aku mendapat petunjuk maka itu disebabkan apa yang diwahyukan Tuhanku kepadaku. Sungguh, Dia Maha Mendengar, Maha-dekat.&rdquo;</span></li>
<li><span class="ayat" title="Saba' Ayat 51">وَلَوْ تَرٰىٓ اِذْ فَزِعُوْا فَلَا فَوْتَ وَاُخِذُوْا مِنْ مَّكَانٍ قَرِيْبٍۙ </span><span class="bacaan">walau tarā iż fazi'ụ fa lā fauta wa ukhiżụ mim makāning qarīb</span><span class="arti">Dan (alangkah mengerikan) sekiranya engkau melihat mereka (orang-orang kafir) ketika terperanjat ketakutan (pada hari Kiamat); lalu mereka tidak dapat melepaskan diri dan mereka ditangkap dari tempat yang dekat (untuk dibawa ke neraka),</span></li>
<li><span class="ayat" title="Saba' Ayat 52">وَّقَالُوْٓا اٰمَنَّا بِهٖۚ وَاَنّٰى لَهُمُ التَّنَاوُشُ مِنْ مَّكَانٍۢ بَعِيْدٍۚ </span><span class="bacaan">wa qālū āmannā bih, wa annā lahumut-tanāwusyu mim makānim ba'īd</span><span class="arti">dan (ketika) mereka berkata, &ldquo;Kami beriman kepada-Nya.&rdquo; Namun bagaimana mereka dapat mencapai (keimanan) dari tempat yang jauh?</span></li>
<li><span class="ayat" title="Saba' Ayat 53">وَقَدْ كَفَرُوْا بِهٖ مِنْ قَبْلُۚ وَيَقْذِفُوْنَ بِالْغَيْبِ مِنْ مَّكَانٍۢ بَعِيْدٍۚ </span><span class="bacaan">wa qad kafarụ bihī ming qabl, wa yaqżifụna bil-gaibi mim makānim ba'īd</span><span class="arti">Dan sungguh, mereka telah mengingkari Allah sebelum itu; dan mereka mendustakan tentang yang gaib dari tempat yang jauh.</span></li>
<li><span class="ayat" title="Saba' Ayat 54">وَحِيْلَ بَيْنَهُمْ وَبَيْنَ مَا يَشْتَهُوْنَۙ كَمَا فُعِلَ بِاَشْيَاعِهِمْ مِّنْ قَبْلُۗ اِنَّهُمْ كَانُوْا فِيْ شَكٍّ مُّرِيْبٍ</span><span class="bacaan">wa hīla bainahum wa baina mā yasytahụna kamā fu'ila bi'asy-yā'ihim ming qabl, innahum kānụ fī syakkim murīb</span><span class="arti">Dan diberi penghalang antara mereka dengan apa yang mereka inginkan sebagaimana yang dilakukan terhadap orang-orang yang sepaham dengan mereka yang terdahulu. Sesungguhnya mereka dahulu (di dunia) dalam keraguan yang mendalam.</span></li>
</ol>
`;
Surah.push(surah);
