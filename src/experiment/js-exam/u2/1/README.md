# UAS Fisika Komputasi Kelas 01
Ujian 2 Fisika Komputasi ITB dengan anggota kelompok :
- Vincentius Aryo Wasesatama (10217024)
- Muhammad Ridho Nurul Ihsan (10217063)
- Alessandro Widjati (10217079)
- Trian Verson Tumanan (10217091)
- Tito Dwi Syahputra (10217094)
- Juldan Umbu Riada (10217105)

## Nomor 1
### a.

    Pada sistem bandul berlaku hukum-hukum newton yang diantaranya adalah,
    1. Pada keadaan setimbang
    \begin{equation}
    \label{eqn:newt1}
    \sum{F} = 0
    \end{equation}

    Menggunakan persamaan \eqref{eqn:newt1} maka pada saat kondisi sebelum dilepas gaya yang bekerja pada bandul mengikuti Hukum 1           Newton dengan,

    \begin{equation}
    \label{sentri}
    T = mg\cos {\theta} - \frac{mv^2}{l} = mg\frac {y}{l} - \frac{mv^2}{l}
    \end{equation}

    Dengan $\theta$ merupakan sudut antara $l$ dan $y$
    
    2. Pada keadaan bandul bergerak
    Akan mengikuti hukum kedua Newton
    \begin{equation}
    \label{eqn:newt2}
    \sum{F} = ma
    \end{equation}
    
    Maka dilakukan analisis dengan dekomposisi sumbu x dan y. Untuk sumbu x didapat resultan gaya yaitu
    \begin{equation}
    \label{eqn:fx}
    \sum{F_x} = -F_{gesek angin (arah x)}-T\sin{\theta} = -(3 \pi \eta D)\dot{x} - (mg\frac {y}{l} - \frac{mv^2}{l})\frac{x}{l} =m\ddot{x}
    \end{equation}
    Sehingga didapat persamaan gerak x adalah
    \begin{equation}
    \label{dodox}
    \ddot{x} + \left( \frac{3 \pi \eta D}{m} \right) \dot{x} - \left( \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2} \right) xy = 0
    \end{equation}
    
    Untuk sumbu y didapat resultan gaya yaitu
    \begin{equation}
    \label{eqn:fy}
    \sum{F_y} = -F_{gesek angin (arah y)}+T\cos{\theta}-mg = -(3 \pi \eta D)\dot{y} + (mg\frac {y}{l} - \frac{mv^2}{l})\frac{y}{l} - mg =m\ddot{y}
    \end{equation}
    Sehingga didapat persamaan gerak y adalah
    \begin{equation}
    \label{dodoy}
    \ddot{y} + \left( \frac{3 \pi \eta D}{m} \right) \dot{y} + \left( \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) y - \left( \frac{g}{l^2} \right) y^2 = -g.
    \end{equation}
    
### b.

    Makna dari masing-masing suku pada persamaan gerak adalah
    
    1. Suku pertama menunjukan percepatan pendulum
    2. Suku kedua menunjukann gaya gesek udara dengan menggunakan Hukum Stokes dan gaya gesek ini sebanding dengan kecepatan yang berlawanan arah dengan gaya gesek.
    3. Suku ketiga dan keempat merupakan gaya dari tegangan tali yang merupakan coupling dari gaya sentripetal dan gaya berat yang bekerja pada tali
    4. Dan suku kelima diruas kanan merupakan gaya eksternal yang bekerja pada sistem
    
    Semua suku dinyatakan dalam satuan per massa
    
### c.

    Ketika tidak ada gesekan udara maka fluida yang dilewati merupakan fluida yang inviscid artinya viskositas $\eta$ = 0.
    Sehingga persamaan \eqref{dodox} dan \eqref{dodoy} dapat ditulis sebagai,
    
    \begin{equation}
    \label{dodox2}
    \ddot{x} - \left( \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2} \right) xy = 0
    \end{equation}
    
    dan
    
    \begin{equation}
    \label{dodoy2}
    \ddot{y} + \left( \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) y - \left( \frac{g}{l^2} \right) y^2 = -g.
    \end{equation}
    
### d.

    Untuk bandul dengan simpangan kecil dan tanpa gesekan maka didapatkan bahwa
    
    \begin{equation}
    \cos{\theta}=1
    \end{equation}
    
    dan
    
    \begin{equation}
    \sin{\theta}=\theta
    \end{equation}
    
    Sehingga persamaan \eqref{dodox2} dan \eqref{dodoy2} dapat ditulis sebagai,
    
    \begin{equation}
    \label{dodox3}
    \ddot{x} - \left( \frac{\theta}{l} \right) (\dot{x}^2 + \dot{y}^2) x + g \theta= 0
    \end{equation}
    
    \begin{equation}
    \label{dodoy3}
    \ddot{y} - \left( \frac{1}{l} \right) (\dot{x}^2 + \dot{y}^2) y = 0
    \end{equation}
    
## Nomor 2
    
### a.

    Menggunakan koordinat polar maka dilakukan analisis hukum newton dua untuk masing-masing koordinag $r$ dan $\theta$
    
    Untuk $r$
    
    \begin{equation}
    a_{r}=\ddot{r} - r\dot{\theta}^2
    \end{equation}
    
    \begin{equation}
    \label{eqn:fr}
    \sum {F_r} = -mg\cos{\theta} + T = ma_r = m(\ddot{r} - r\dot{\theta}^2)
    \end{equation}
    
    Kemudian diterapkan bahwa $\ddot{r}=0$ dan $r=l$ sehingga didapat,
    
    \begin{equation}
    -mg \cos{\theta} + T = -ml\dot{\theta}^2 
    \end{equation}
    
    dan
    
    \begin{equation}
    \label{eqn:gerr}
    \dot{\theta}^2 - \frac{g\cos{\theta}}{l} = \frac{-T}{lm}
    \end{equation}
    
    Sementara, untuk $\theta$
    
    \begin{equation}
    a_{\theta}=r\ddot{\theta} - 2\dot{r}\dot{\theta}
    \end{equation}
    
    \begin{equation}
    \label{eqn:fteta}
    \sum{F_{\theta}} = -mg\sin{\theta} = m(r\ddot{\theta} - 2\dot{r}\dot{\theta})
    \end{equation}
    
    Kemudian diterapkan bahwa $\dot{r}=0$ dan $r=l$ sehingga didapat,
    
    \begin{equation}
    -g\sin{\theta} = l\ddot{\theta}
    \end{equation}
    
    \begin{equation}
    \label{eqn:gerthe}
    \ddot{\theta}+\frac{g}{l}\sin{\theta}=0
    \end{equation}
    
### b.
    
    Untuk kasus ${\theta}$ kecil maka
    
    \begin{equation}
    \sin {\theta} = {\theta}
    \end{equation}
    
    Dari persamaan \eqref{eqn:gerthe}, maka berlaku
    
    \begin{equation}
    \ddot{\theta} = -\frac{g}{l} \theta
    \end{equation}
    
    Dimisalkan $\omega = \sqrt{\frac{g}{l}}$
    
    Maka
    
    \begin{equation}
    \label{eqn:9}
    \ddot{\theta} = -\omega^2 \theta
    \end{equation}
    
    Yang solusi dari \eqref{eqn:9} adalah
    
    \begin{equation}
    \theta(t) = \theta_0 cos(\omega t + \phi)
    \end{equation}
    
    dengan $\phi = fasa awal$
    
    Untuk nilai T,
    
    \begin{equation}
    T = \frac{2\pi}{\omega} = 2\pi \sqrt{\frac{g}{l}}
    \end{equation}
    
### c.

    Menggunakan algoritma numerik euler dari persamaan differensial \eqref{eqn:gerthe}
    
    Sehingga menjadi bentuk $\dot{\theta}$ dan $\theta$ yaitu
    
    \begin{equation}
    \label{vthe}
    \dot{\theta}(t+\delta t)=\dot{\theta}(t) - \frac{-g}{l}\theta \delta t
    \end{equation}
    
    dan
    
    \begin{equation}
    \theta(t+\delta t)=\theta(t) + \dot{\theta}(t) \delta t
    \end{equation}
    
    Nilai $\dot{\theta}(t)$ didapat dari \eqref{vethe}
    
    Untuk menunjukan solusi menggunakan algoritma euler dipilih nilai. $\theta(0)=0,5236$, $\dot{\theta}(0)=0$, $l=2m$, dan $g=9,8 \frac{m}{s}$. Dan menggunakan ploty nilai $\theta(t)$ dan $\dot{\theta}(t)$.
    
    Grafik dan gambar terdapat pada tautan dibawah
    
[Solusi numerik menggunakan algoritma euler] https://plotly.com/~alswidjati/7/#/
    
### d.
Program dari algoritma euler ini dalam bahasa C++ adalah

	#include<iostream>
	#include<cmath>

	using namespace std;
	//program hasil posisi sudut teta terhadap waktu dengan sudut teta kecil

	const double pi = 3.14;
	double t;
	int i;
	double tetahasil[5000]; //deklarasi array beukuran 5000 untuk menampung hasil posisi tetta
	//digunakan gravitasi g = 9.8 ; panjang tali l = 2 ; waktu t = 0..4 dengan interval 0.001

	double teta(double x){ //fungsi untuk memasukkan nilai solusi khusus posisi teta terhadap waktu
	double f = 0.5236 * cos(2.2135*x); // bentuk solusi khususnya f = 0.5236cos(wt) //omega(w) = (g/l)^1/2 = 2.2135 
	return f;
	}

	int main() {
	t=0; //deklarasi waktu awal
	i=0; //deklarasi initial number array
		while (t<=4.000){
		cout << "posisi saat t bernilai " << t << " adalah ";
		tetahasil[i]= teta(t);
		cout <<	tetahasil[i] << endl;
		t = t + 0.001;
		i = i + 1;
		}
	}

## Nomor 3

### a.
Dari tabel diplot scatter di excell dan kelas yang berbeda diberi warna berbeda untuk memberikan bantuan visual dari data set untuk 
    memilih data set default di website. Dari grafik disimpulkan bahwa data terpisah secara garis lurus konstan sehingga di website 
    digunakan data set kanan atas, dimana data biru dan oranye terpisah secara garis lurus juga. Kemudian $N_1$ atau feature dipilih 
    $X_1$ dan $X_2$ karena dalam data ada dua pengukuran $x$ dan $y$. Dipilih fungsi aktivasi $tanh(x)$ Dengan langkah ini dicari 
    jaringan neuron yang sesuai menggunakan website dan didapat
    
    \begin{equation}
    Jaringan Neuron = 2-3-2-1
    \end{equation}
    
Gambar yang mendukung dapat dilihat dibawah ini
![alt text](/3a.jpg)

### b.
Dari tabel diplot scatter di excell dan kelas yang berbeda diberi warna berbeda untuk memberikan bantuan visual dari data set untuk 
    memilih data set default di website. Dari grafik disimpulkan bahwa data terpisah secara garis linear sehingga di website digunakan 
    data set kiri bawah, dimana data biru dan oranye terpisah secara linear juga. Kemudian $N_1$ atau feature dipilih $X_1$ dan $X_2$ 
    karena dalam data ada dua pengukuran $x$ dan $y$. Dipilih fungsi aktivasi $tanh(x)$ Dengan langkah ini dicari jaringan neuron yang 
    sesuai menggunakan website dan didapat
    
    \begin{equation}
    Jaringan Neuron = 2-2-2-3-1
    \end{equation}
    
Gambar yang mendukung dapat dilihat dibawah ini
![alt text](/3b.jpg)
    
### c.
Dari tabel diplot scatter di excell dan kelas yang berbeda diberi warna berbeda untuk memberikan bantuan visual dari data set untuk 
    memilih data set default di website. Dari grafik disimpulkan bahwa data terpisah oleh lingkaran sehingga di website digunakan data 
    set kiri atas, dimana data biru dan oranye analog terpisah secara lingkaran juga. Kemudian $N_1$ atau feature dipilih $X_1$ dan 
    $X_2$ karena dalam data ada dua pengukuran $x$ dan $y$. Dipilih fungsi aktivasi $tanh(x)$ Dengan langkah ini dicari jaringan neuron 
    yang sesuai menggunakan website dan didapat
    
    \begin{equation}
    Jaringan Neuron = 2-3-2-1
    \end{equation}

Gambar yang mendukung dapat dilihat dibawah ini
![alt text](/3c.jpg)

### d.
Kaitan antara arsitektur yang diperlukan dengan fungsi ANN memisahkan data dengan baik adalah. Input dari ANN bergantung pada jumlah 
    parameter dan pengukuran dan Output dari ANN untuk skema forward adalah satu sehingga dalam kasus a-c yang berperan dalam memisahkan 
    data adalah hiden layer atau neuron antara input dan output. Semakin banyak jumlah hidden layer maka semakin baik ANN akan 
    memberikan koneksi (pembobotan) antara data satu dan data lainnya. Tetapi lebih memakan resource komputasi untuk melatih semua 
    neuron sehingga pemisahan berlangsung lama. Selain itu semakin banyak hidden layer neuron semakin memungkinkan pembobotan yang 
    kompleks. Semakin sedikit jumlah hidden layer maka semakin efisien jaringan ANN, ANN dengan hidden layer sedikit biasanya digunakan 
    untuk klasifikasi yang linear dan "mudah" dipisahkan. 
    
Perlu dibatasi arsitektur ANN yang paling sederhana untuk menghindari overfitting. Yaitu ketika jaringan ANN kekurangan 
informasi/data untuk melakukan training neuron. Akhirnya pembobotan yang terjadi pada data tidak tepat.
    
    
 ## Nomor 4

### a. 
Fungsi untuk mengekstrak informasi beserta *parrent* dan *crossover* awalanya adalah

    // Get interpretation of position and class from chromosome
    function getValues() {
	var p = arguments[0];
	
	var xs = p.slice(0, 3);
	var ys = p.slice(3, 6);
	var cs = p.slice(6);
	
	var x = xs.slice(0,1)*Math.pow(2,2)+xs.slice(1,2)*Math.pow(2,1)+xs.slice(2,3)*Math.pow(2,0);
	var y = ys.slice(0,1)*Math.pow(2,2)+ys.slice(1,2)*Math.pow(2,1)+ys.slice(2,3)*Math.pow(2,0);
	var g = cs;
	
	return [x, y, g];
    }

### b.
Fungsi *fitness* dalam bahasa Javascript adalah

	// Create fitness function
	function fitness() {
	var p = arguments[0];
	var x0 = arguments [1];
	var y0 = arguments [2];
	
	var x, y, g;
	[x, y, g] = getValues(p);
	
	var dr = Math.sqrt(Math.pow((x-x0),2)+ Math.pow((y-y0),2));
	
	var val = 1/(1+dr);
	return val;
	}
	
### c.
Fungsi *fitness* akan digunakan untuk menyeleksi kromosom yang paling "berhasil" dari angka tes fitness yang paling besar

Menggunakan program dibawah

	// Execute main funtion
	main();

	// Define main function
	function main() {
	var p1 = "0010110";
	var p2 = "1111111";
	var x0 = 0;
	var y0 = 0;
	
	var n = 4;
	[c1, c2] = crossover(p1, p2, n);
	
	console.log(p1);
	console.log(p2);
	console.log(c1);
	console.log(c2);
	
	var val1 = fitness(p1,x0,y0);
	var val2 = fitness(p2,x0,y0);
	var val3 = fitness(c1,x0,y0);
	var val4 = fitness(c2,x0,y0);
	
	console.log(val1);
	console.log(val2);
	console.log(val3);
	console.log(val4);
	
	var val = [val1,val2,val3,val4]
	
	var i;
	var hold = [0,0];
	var max = 0;
	
	for (i = 0; i<5 ;i++)
	{
		if (val[i]>max)
		{
			max = val[i];
			hold[0] = i;
		}
	}
	var buang = hold[0];
	val[buang]= -100;
	var max = 0;
	
	for (i=0; i<5 ; i++)
	{
		if (val[i]>max)
		{
			max = val[i];
			hold[0] = i;
		}
	}
		
	console.log(hold[0]);
	console.log(hold[1]);
	
	}


	// Crossover two chromosome
	function crossover() {
	var p1 = arguments[0];
	var p2 = arguments[1];
	var n = arguments[2];
	
	var c1 = p1.slice(0, n) + p2.slice(n);
	var c2 = p1.slice(n) + p2.slice(0, n);
	
	return [c1, c2];
	}


	// Get interpretation of position and class from chromosome
	function getValues() {
	var p = arguments[0];
	
	var xs = p.slice(0, 3);
	var ys = p.slice(3, 6);
	var cs = p.slice(6);
	
	var x = xs.slice(0,1)*Math.pow(2,2)+xs.slice(1,2)*Math.pow(2,1)+xs.slice(2,3)*Math.pow(2,0);
	var y = ys.slice(0,1)*Math.pow(2,2)+ys.slice(1,2)*Math.pow(2,1)+ys.slice(2,3)*Math.pow(2,0);
	var g = cs;
	
	return [x, y, g];
	}

	// Create fitness function
	function fitness() {
	var p = arguments[0];
	var x0 = arguments [1];
	var y0 = arguments [2];
	
	var x, y, g;
	[x, y, g] = getValues(p);
	
	var dr = Math.sqrt(Math.pow((x-x0),2)+ Math.pow((y-y0),2));
	
	var val = 1/(1+dr);
	return val;
	}
	
Dari program didapat kromosom yang paling tepat dan memiliki nilai fungsi *fitness* adalah kromosom ke 0 dan ke 2 artinya adalah kromosom dari P1 dan C1

### d.

Akan dilakukan proses algoritma genetika dengan iterasi sebanyak 10 kali dengan algoritma sebagai berikut

	// Execute main funtion
	main();


	// Define main function
	function main() {
	var p1 = "0010110";
	var p2 = "1111111";
	var nn;
	for (nn=1;nn<11;nn++)
	{
	var x0 = 0;
	var y0 = 0;
	var n = 4;
	[c1, c2] = crossover(p1, p2, n);
	
	var val1 = fitness(p1,x0,y0);
	var val2 = fitness(p2,x0,y0);
	var val3 = fitness(c1,x0,y0);
	var val4 = fitness(c2,x0,y0);
	
	var val = [val1,val2,val3,val4]
	
	var i;
	var hold = [0,0];
	var max = 0;
	
	for (i = 0; i<5 ;i++)
	{
		if (val[i]>max)
		{
			max = val[i];
			hold[0] = i;
		}
	}
	var buang = hold[0];
	val[buang]= -100;
	var max = 0;
	
	for (i=0; i<5 ; i++)
	{
		if (val[i]>max)
		{
			max = val[i];
			hold[0] = i;
		}
	}
	var berhasil= [p1,p2];
	
	if (hold[0]==0){
		berhasil[0]=p1;
	}
	else if (hold[0]==1) {
		berhasil[0]=p2;
	}
	else if (hold[0]==2) {
		berhasil[0]=c1;
	}
	else if (hold[0]==3) {
		berhasil[0]=c2;
	}
	
	if (hold[1]==0){
		berhasil[1]=p1;
	}
	else if (hold[1]==1) {
		berhasil[1]=p2;
	}
	else if (hold[1]==2) {
		berhasil[1]=c1;
	}
	else if (hold[1]==3) {
		berhasil[1]=c2;
	}
	
	p1 = berhasil[0];
	p2 = berhasil[1];
	}
	console.log("Kromosom yang berhasil adalah : ");
	console.log(p1);
	console.log(p2);
	console.log("Dengan nilai fitness : ");
	var fit1 = fitness(p1,x0,y0);
	var fit2 = fitness(p2,x0,y0);
	console.log(fit1);
	console.log(fit2);
	
	}


	// Crossover two chromosome
	function crossover() {
	var p1 = arguments[0];
	var p2 = arguments[1];
	var n = arguments[2];
	
	var c1 = p1.slice(0, n) + p2.slice(n);
	var c2 = p1.slice(n) + p2.slice(0, n);
	
	return [c1, c2];
	}


	// Get interpretation of position and class from chromosome
	function getValues() {
	var p = arguments[0];
	
	var xs = p.slice(0, 3);
	var ys = p.slice(3, 6);
	var cs = p.slice(6);
	
	var x = xs.slice(0,1)*Math.pow(2,2)+xs.slice(1,2)*Math.pow(2,1)+xs.slice(2,3)*Math.pow(2,0);
	var y = ys.slice(0,1)*Math.pow(2,2)+ys.slice(1,2)*Math.pow(2,1)+ys.slice(2,3)*Math.pow(2,0);
	var g = cs;
	
	return [x, y, g];
	}

	// Create fitness function
	function fitness() {
	var p = arguments[0];
	var x0 = arguments [1];
	var y0 = arguments [2];
	
	var x, y, g;
	[x, y, g] = getValues(p);
	
	var dr = Math.sqrt(Math.pow((x-x0),2)+ Math.pow((y-y0),2));
	
	var val = 1/(1+dr);
	return val;
	}
	
Yang menghasilkan sepasang kromosom yaitu P1 (0010110) dengan nilai *fitness* 0,24025307 dan P2 (0010111) dengan nilai *fitness* 0,24025307.
	
## Nomor 5

### Judul RBL
PENYELESAIAN BEDA HINGGA UNTUK PERSAMAAN PANAS DAN GELOMBANG DENGAN MENGGUNAKAN SEGITIGA PASCAL

### Tujuan
Memberikan gambaran yang jelas tentang bagaimana segitiga Pascal digunakan dalam menyajikan pendekatan beda hingga untuk persamaan panas 
dan persamaan gelombang

### Perumusan Masalah
Memberikan gambaran yang jelas tentang bagaimana segitiga Pascal digunakan dalam menyajikan pendekatan beda hingga untuk persamaan panas 
dan persamaan gelombang

### Usulan metode yang digunakan
Penyelesaian eksak persamaan panas dan gelombang yang telah didapat, didalamnya memuat perhitungan integral fungsi syarat awal dan juga 
perhitungan deret tak hingga. Jika fungsi syarat awal yang diberikan memiliki bentuk tertentu yang nilai integralnya tidak dapat 
ditentukan dengan menggunakan teknik pengintegralan, maka nilai koefisien-koefisien pada bentuk penyelesaian eksak tersebut sulit 
ditentukan secara pasti. Tambahan pula, dengan adanya perhitungan untuk deret tak hingga mengakibatkan nilai penyelesaian eksak akan 
sulit diperoleh secara tepat. Oleh karena itu, perhitungan numerik dibutuhkan untuk memberikan suatu nilai penyelesaian dari masalah 
persamaan panas dan gelombang yang diberikan. Metode numerik yang akan digunakan adalah metode beda hingga.

### Perkiraan hasil yang diperoleh
Pengamatan pada turunan-turunan orde-m yang telah diperoleh dengan menggunakan persamaan beda maju, beda pusat, dan beda mundur, 
memberikan suatu hasil yang akan dapat membantu dalam pembentukkan turunan. Hasil tersebut adalah adanya suatu pola bilangan yang khas 
pada koefisien-koefisien tiap turunan. Pola tersebut adalah pola bilangan dalam segitiga Pascal. 

Persamaan panas dan persamaan gelombang adalah dua persamaan diferensial parsial yang masing-masing memodelkan proses atau kejadian 
fisis, yaitu penghantaran panas dan perambatan gelombang. Kedua persamaan tersebut dapat diselesaikan secara eksak maupun pendekatan 
dengan memperhatikan syarat awal dan syarat batas yang menyertainya. Secara eksak, penyelesaiannya diperoleh dengan menggunakan metode 
pemisahan variabel (metode Fourier). Sedangkan secara pendekatan, penyelesaiannya diperoleh dengan metode beda hingga. Pada metode beda 
hingga, persamaan panas dan persamaan gelombang diubah menjadi persamaan beda hingga (persamaan beda parsial) yang kemudian diselesaikan 
untuk menghasilkan penyelesaian beda hingga. Persamaan beda hingga tersebut diperoleh dengan menggunakan formula beda hingga yang 
dihasilkan dari pengaplikasian segitiga Pascal. Pengaplikasian segitiga Pascal tersebut didasarkan atas adanya kesamaan antara
koefisien-koefisien pada turunan orde tinggi, yang dihasilkan oleh pendekatan beda
hingga, dengan bilangan-bilangan pada segitiga Pascal

### Analisis
Setiap penyelesaian pada waktu tertentu dihubungkan oleh sebuah kurva yang membentuk gelombang, yang diasumsikan sebagai gelombang pada
senar. Pada saat t = 0, senar ditarik ke atas yang tinggi tiap titik segmennya dinyatakan oleh fungsi syarat awal. Selanjutnya, senar dilepas dan pergerakan gelombang
senar dievaluasi setiap 0.05 detik (∆t). Tinggi tiap segmen pada senar diperoleh dari
perhitungan yang telah dilakukan. 
Analisa ketakstabilan penyelesaian numerik pada kasus ini juga diperlihatkan
oleh Gambar di bawah.

![alt text](/5data.jpg)

Gambar tersebut menganalisa perbandingan antara penyelesaian numerik dan penyelesaian eksak saat t = 0.28 dengan perhitungan 
penyelesaian eksaknya sampai n = 200. Terlihat bahwa penyelesaian numeriknya sama sekali tidak mendekati penyelesaian eksaknya. Dengan 
demikian, nilai penyelesaian numerik masalah persamaan gelombang, menjadi tidak sesuai dengan yang diharapkan (dengan
penyelesaian eksak), jika kondisi kestabilan Courant tidak dipenuhi.

### Referensi
Sulistiono, Yohanes. (2008): Penyelesaian Beda Hingga Untuk Persamaan Panas dan Gelombang Dengan Menggunakan Segitiga Pascal. Skripsi Program Sarjana Sains Program Studi Matematika, Universitas Sanata Dharma Yogyakarta.
http://repository.usd.ac.id/27017/2/043114016_Full.pdf


	


