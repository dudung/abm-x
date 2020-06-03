# Jawaban soal Ujian Akhir Semester Fisika Komputasi <br /><br />
# Anggota kelompok : 
- Paulina Bertha / 10217009
- Maria Artha / 10217028
- Sekar Tanjung / 10217081
- Mutia Dyah L / 10217085
- Iis Rohmatin / 10217099
- Fajar Ridwan Sidik / 10217102

## NOMOR 1 : <br /><br />
### a. 

    Saat di titik kesetimbangan, gaya sentri petalnya adalah 
 
    \begin{equation}
    \frac {m v^2}{l} = T m g cos \theta
    \end{equation}

    kemudian dengan menggunakan hukum newton, nilai T nya adalah

    \begin{equation}
    T = \frac {mgy}{l} - \frac {m v^2}{l} 
    \end{equation}

    sehingga, persamaan osilasi harmoniknya menjadi

    \begin{equation}
    \sum F = ma 
    \end{equation}
    \begin{equation}
    -3 \pi \eta D v   - T sin \theta = ma
    \end{equation}
    \begin{equation}
    -3 \pi \eta D v - (\frac {mgy}{l} - \frac {m v^2}{l})\frac {x}{l} = ma
    \end{equation}
    \begin{equation}
    \frac {-3 \pi \eta D v}{m} - (\frac {gy}{l} - \frac {v^2}{l})\frac {x}{l} = a
    \end{equation}
    \begin{equation}
    a + \frac {3 \pi \eta D v}{m} - \frac {v^2}{l^2} x + \frac {g}{l^2}xy = 0
    \end{equation}
    \begin{equation}
    \label{eqn:nlode-x}
    \ddot{x} + \left( \frac{3 \pi \eta D}{m} \right) \dot{x} - \left(
    \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2}
    \right) xy = 0
    \end{equation}
    
    sedangkan untuk sumbu y hanya mengubah arahnya, sehingga menjadi: <br />
    
    \begin{equation}
    \sum F = ma 
    \end{equation}
    \begin{equation}
    -3 \pi \eta D v   + T cos \theta - mg = ma
    \end{equation}
    \begin{equation}
    -3 \pi \eta D v + (-\frac {mgy}{l} + \frac {m v^2}{l})\frac {y}{l} - mg = ma
    \end{equation}
    \begin{equation}
    \frac {-3 \pi \eta D v}{m} + (-\frac {gy}{l} + \frac {v^2}{l})\frac {y}{l} - g = a
    \end{equation}
    \begin{equation}
    a + \frac {3 \pi \eta D v}{m} - \frac {v^2}{l^2}y + \frac {g}{l^2}y^2 = -g
    \end{equation}
    \begin{equation}
    \label{eqn:nlode-y}
    \ddot{y} + \left( \frac{3 \pi \eta D}{m} \right) \dot{y} - \left(
    \frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) y + \left( \frac{g}{l^2}
    \right) y^2 = -g
    \end{equation}


### b. 
    Masing-masing suku memiliki makna tersendiri; <br />
    Untuk makna dari suku-suku dari persaman diferensial non linear pada arah sumbu x maupun sumbu y pada persoalan sistem bandul   tersebut  merupakan kumpulan percepatan yang mempengaruhi gerak bandul pada arah x dan arah y.Yang mana makna dari setiap suku percepatan di persamaan tersebut yaitu: <br /><br />
    suku pertama: merupakan percepatan dari gerak bandul (untuk masing-masing komponen) <br /><br />
    suku kedua: merupakan percepatan dari adanya gaya gesek udara yang mana arahnya berlawanan dengan arah gerak bandul (untuk masing-masing komponen) <br /><br />
    suku ketiga: merupakan kecepatan sentripetal dari sistem bandul (untuk masing-masing komponen) <br /><br />\suku keempat: merupakan percepatan dari gaya pemulih (untuk masing-masing komponen) <br /><br />
    Adapun jika persamaan 3 ( komponen sumbu y) komponen ruas kanannya dipindah ke kiri sehingga ruas kanan bernilai nol. Sehingga untuk komponen sumbu y terdapat suku kelima dan suku kelima tersebut merupakan percepatan gravitasi yang arahnya kea rah negative sumbu y.


### c.
    Untuk benda jatuh bebas tanpa gesekan udara persamaan yang diperoleh menjadi <br />
    
    \begin{equation}
    \ddot{x} - \left(\frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2}\right) xy = 0
    \end{equation}
    \begin{equation}
    \ddot{y} - \left(\frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2}\right) xy = -g
    \end{equation}
    
    ketika benda bergerak tanpa gesekan udara, artinya udara tidak dianggap sebagai fluida sehingga tidak ada nilai viskositas. Maka dari persamaan sebelumnya (jawaban 1a), nilai suku keduanya dihilangkan, karena suku kedua memiliki makna adanya gesekan udara. Sehingga jika tidak ada gesekan udara nilai $\eta = 0$ <bt /><br />

### d. 
    Untuk bandul dengan simpangan kecil dan tanpa gaya gesek udara, bentuk persamaannya dengan nilai $sin \theta \approx \theta$
    dengan menggunakan hubungan sudut dengan jari-jari, diperoleh persamaan sebagai berikut <br />
    
    \begin{equation}
    s=r\theta
    \end{equation}
    \begin{equation}
    \sqrt{x^2+y^2} = r\theta
    \end{equation}
    \begin{equation}
    \theta = \frac {\sqrt{x^2+y^2}}{l}
    \end{equation}
     
     sehingga persamaan bandulnya pada sumbu x menjadi
    \begin{equation}
    \sum F_x = m a_x
    \end{equation}
    \begin{equation}
    -T sin \theta = m a_x
    \end{equation}
    \begin{equation}
    -T \theta = m a_x
    \end{equation}
    \begin{equation}
    (-\frac {mgy}{l}+\frac{m v^2}{l})(\frac {\sqrt{x^2+y^2}}{l}) = ma_x
    \end{equation}
    \begin{equation}
    a_x - \frac {gy}{l} \sqrt{x^2+y^2} + \frac {v^2}{l^2}\sqrt{x^2+y^2} = 0
    \end{equation}
    
    sedangkan untuk persamaan sumbu y adalah 
    \begin{equation}
    \sum F_y = m a_y
    \end{equation}
    \begin{equation}
    T cos \theta - mg = m a_y
    \end{equation}
    \begin{equation}
    T (1-\frac {\theta^2}{2})- mg = m a_y
    \end{equation}
    \begin{equation}
    (\frac {mgy}{l}-\frac{m v^2}{l})(1-\frac {\theta^2}{2}) - mg = ma_y
    \end{equation}
    \begin{equation}
    \frac {gy}{l} - \frac {gy\theta^2}{2l} - \frac{v^2}{l}+\frac{v^2\theta^2}{2l} - g = a_y
    \end{equation}
    \begin{equation}
    a_y + (gy - v^2)\frac {\theta^2}{2l} + (v^2 - gy)\frac{1}{l}=-g
    \end{equation}
    \begin{equation}
    a_y + (gy - v^2)\frac {x^2+y^2}{2l^3} + (v^2 - gy)\frac{1}{l}=-g
    \end{equation}
    
    Untuk makna dari suku-suku dari persaman diferensial non linear pada arah sumbu x maupun sumbu y pada persoalan sistem bandul dengan sudut kecil dan gesekan udara diabaikan  tersebut  merupakan kumpulan percepatan yang mempengaruhi gerak bandul pada arah x dan arah y. Aproksimasi sudut kecil digunakan dalam menyelesaikan persamaan diferensial non linear. Sehingga makna dari setiap suku percepatan di persamaan untuk komponen x tersebut yaitu: <br />
    suku pertama: merupakan percepatan dari gerak bandul arah x <br />
    suku kedua: merupakan percepatan dari gaya pemulih  sistem bandul <br />
    suku ketiga: merupakan percepatan dari gaya sentripetal <br />
    Adapun untuk makna dari setiap suku percepatan di persamaan untuk komponen y tersebut yaitu: <br/>
    Suku pertama : merupakan percepatan dari gerak bandul arah y <br />
    Suku kedua dan ketiga : merupakan percepatan dari kombinasi gaya pemulih dan gaya sentripetal sistem bandul. <br />
    Adapun jika persamaan komponen sumbu y ruas kanannya dipindah ke kiri sehingga ruas kanan bernilai nol. Sehingga untuk komponen sumbu y terdapat suku keempat dan suku keempat tersebut merupakan percepatan gravitasi yang arahnya ke arah negative sumbu y. 
 
<br /><br />
## NOMOR 2 : <br /><br />
### a. 
    Persamaan diferensial pada arah $\theta$ adalah <br />
    
    \begin{equation}
    m a_x = m \ddot x = - T sin \theta = -T \frac {x}{\sqrt{x^2 + (h-y)^2}}
    \end{equation}
    \begin{equation}
    m a_y = m \ddot y = T cos \theta - mg = T \frac {h-y}{\sqrt{x^2 + (h-y)^2}} - mg
    \end{equation}
    karena
    \begin{equation}
    x = r sin \theta
    \end{equation}
    \begin{equation}
    (h-y)= r cos \theta
    \end{equation}
    sehingga diperoleh
    \begin{equation}
    \frac {dx}{dt} = rcos\theta \frac{d\theta}{dt}
    \end{equation}
    \begin{equation}
    \frac {dy}{dt} = rsin\theta \frac{d\theta}{dt}
    \end{equation}
    
    lalu jika dikuadratkan akan menjadi
    \begin{equation}
    \frac {d^2x}{dt^2} = -rsin\theta (\frac{d\theta}{dt})^2 + rcos\theta \frac {d^2\theta}{dt^2}
    \end{equation}
    \begin{equation}
    \frac {d^2y}{dt^2} = rcos\theta (\frac{d\theta}{dt})^2 + rsin\theta \frac {d^2\theta}{dt^2}
    \end{equation}
    
    kemudian dimasukan pada persamaa (1) dan (2) sehingga menghasilkan
    \begin{equation}
    m(-rsin\theta (\frac{d\theta}{dt})^2 + rcos\theta \frac {d^2\theta}{dt^2}) = -T sin \theta
    \end{equation}
    \begin{equation}
    m(rcos\theta (\frac{d\theta}{dt})^2 + rsin\theta \frac {d^2\theta}{dt^2}) = T cos \theta - mg
    \end{equation}
    
    kemudian 
    \begin{equation}
    \frac {d^2\theta}{dt^2} = \ddot \theta = \frac {g}{r} sin\theta =\frac {-g}{l} sin\theta  
    \end{equation}
    \begin{equation}
    \ddot \theta + \frac {g}{l} sin\theta = 0
    \end{equation}
    
    lalu
    \begin{equation}
    mr(\frac{d\theta}{dt})^2 = T-mgcos\theta
    \end{equation}
    \begin{equation}
    r\dot \theta ^2 = \frac {T}{m} - g cos\theta
    \end{equation}
    \begin{equation}
    \dot \theta ^2 = \frac {T}{ml} - \frac {g}{l} cos \theta ; g=-g
    \end{equation}
    \begin{equation}
    \dot \theta ^2 - \frac {g}{l} cos \theta = \frac {T}{ml} 
    \end{equation}

### b. 
    Solusi analitik $\theta$ dan $T$ untuk nilai $\theta$ kecil adalah sebagai berikut <br />
    persamaan $\theta$ :
    
    dengan nilai $r$ = $l$ = konstan 
    \begin{equation}
    \frac {g}{l} cos \theta - \frac {T}{ml} = \ddot \theta ^2
    \end{equation}
    \begin{equation}
    \ddot \theta = \frac {-g}{l} sin\theta
    \end{equation}
    dimana $T$ adalah tegangan. Jika dianggap pergerakan osilasinya sangat kecil sehingga $sin \theta \approx 0$ sehingga persamaan yang diperoleh menjadi
    
    \begin{equation}
    \ddot \theta + \frac {g}{l} \theta = 0
    \end{equation}
    kemudian setelah diintegralkan akan diperoleh 
    \begin{equation}
    \theta (t) = C_1 cos (\sqrt{\frac{g}{l}} t) + C_2 sin (\sqrt{\frac{g}{l}} t) 
    \end{equation}
    dimana $C_1$ & $C_2$ merupakan determinasi dari kondisi awal sehingga nilainya adalah konstan. Jika
    \begin{equation}
    \theta (0) = \theta_{max} 
    \end{equation}
    maka
    \begin{equation}
    \theta (t) = \theta_{max} cos (\sqrt{\frac{g}{l}} t) 
    \end{equation}
    <br />
    
    persamaan $T$ :
    gaya yang bekerja adalah
    
    \begin{equation}
    -m \ddot x = -m r (\ddot \theta cos \theta - \dot\theta^2 sin\theta)
    \end{equation}
    \begin{equation}
    m \ddot y = mr (\ddot \theta sin \theta + \theta^2 cos \theta)
    \end{equation}
    
    diketahui pula bahwa nilai gaya tegangan tali adalah
    \begin{equation}
    T_x = - T sin \theta
    \end{equation}
    \begin{equation}
    T_y = T cos \theta
    \end{equation}
    
    dengan $F=mg$ maka
    \begin{equation}
    -T sin \theta - mr (\ddot\theta cos \theta - \dot\theta^2 sin \theta) = 0
    \end{equation}
    \begin{equation}
    T cos \theta + mr (\ddot\theta sin \theta + \dot\theta^2 cos \theta)+mg = 0
    \end{equation}
    
    setelah diselesaikan kedua persamaan didapat, maka diperoleh
    \begin{equation}
    T = mg cos \theta + mr \dot\theta^2
    \end{equation}

### c. 
    Solusi numerik dengan algoritma Euler untuk sembarang nilai adalah berupa plot yang dapat dilihat pada link berikut : https://plotly.com/~pautha/1/
<br />
### d. 
    Program sederhana dengan menggunakan C++ untuk menghasilkan angka-angka untuk sudut kecil dan sudut besar adalah <br />
   
    #include <cmath>
    #include <cstdlib>
    #include <fstream>
    #include <iostream>
    #include <string>

    using namespace std;
    const double g=9.81;//besaran gravitasi
    const double l=1;//misalkan panjang tali adalah 1 meter, bisa disesuaikan sesuai dengan kebutuhan
    struct point {//variabel yang akan digunakan dalam gerak dinamika
          double t;
          double teta;
          double omega; //omega adalah turunan pertama teta terhadap waktu
    };
    void Euler1(
           point& p,
           double dt)
    {
    double t=p.t,teta=p.teta, omega=p.omega;
    double omegaAwal=omega;
    
    //algoritma Euler
    omega-=(g/l)*teta*dt;
    teta+=omegaAwal*dt;
    t+=dt;
    p.t=t;
    p.teta=teta;
    p.omega=omega;
    }

    void simulasi(
              void metode (point&, double),
              double tmax,
              double dt,
              string namafile
              )
    {
    //inisiasi
    point p;
    p.t=0;
    p.teta=0;
    p.omega=1;
    ofstream file(namafile.c_str());
    
    //loop
    while (p.t<=tmax){
        metode (p,dt);
        file<<p.t<<'\t'<<p.teta<<'\t'<<p.omega<<'\n';
    }
    
    //final
    cout<<"data tranjectory dalam file"<<namafile<<endl;
    file.close();
    }
    int main(){
    cout<<"Simulasi Pandulum Sederhana dengan menggunakan Euler\n"
    <<"--------------------------------------------------------\n";
    double tmax, dt;
    cout<<"Masukkan rentang waktu dt (sekon): ";
    cin>>dt;
    cout<<"Masukkan tmax: ";
    cin>>tmax;
    cout<<"Running menggunakan Metode Euler"<<endl;
    simulasi (Euler1, tmax, dt, "euler.data");
    }
    <br /><br />
## NOMOR 3 : <br /><br />
Langkah-langkah untuk menentukan notasi arsitektur JST untuk tiap tabel pada soal a, b, dan c adalah sama.  Ketiga data yang terdiri dari x,y sebagai input dan nilai kelas (1,0) sebagai output dimasukan dalam program JST di matlab. Untuk melengkapi program dibutuhkan besaran dengan nilai berikut: <br />
Nilai threshold (b) = 0 <br />
Bobot (w) = 0 <br />
Learning rate ($\eta$) = 0 <br />
Dengan begitu didapatkan notasi arsitektur JST (input-hidden layer-output) untuk tiga data seperti berikut:
# a.   
    Notasinya adalah : 2-2-1
# b.
    Notasinya adalah : 2-3-1-1
# c.
    Notasinya adalah : 2-2-2-2-1
# d. 
Pemisahan untuk data 1 diperluka untuk memisahkan data terkumpul pada bagian yang sama sehingga diperlukan dua layer untuk tampilan nilai keseluruhan positif di pojok grafik. Pada data 2 akan dilakukan pemisahan data dekat titik 0,0 dengan seluruh data menumpuk dibagian pojok kiri bawah, karena itu dilakukan notasi seperti soal b. Sedangkan pada soal c, dilakukan dengan membuat data terkumpul seperti soal a. Bedanya sebaran data lebih acak. Diperlukan notasi yang sederhana agar proses pengolahan data tidak bertumbukan dengan neuron-neuron yang berhubungan.
    <br />   
## NOMOR 4 : <br /><br />
# a dan b 
    Suatu fungsi yang dapat mengekstrak informasi dari masing-masing kromosom, bahwa tiga digit pertama adalah posisi x, tiga digit kedua adalah posisi y, dan satu digit terakhir adalah kelasnya (0 atau 1) adalah sebagai berikut
    /* ga.js
    Simple genetic algoritm (GA)
 
    Sparisoma Viridi | https://github.com/dudung/jsxPhys
 
    20200501
    1255 Create this program.
    1318 Cancel the use of online compiler [1].
 
    Refrences
    1. https://jsconsole.com/ [20200501]
    */

    // Execute main funtion
    main();


    // Define main function
    function main() {
     var p1 = "0010110";
    var p2 = "1111111";
 
    var p3 = "1110001";
 
     var n = 4;
     [c1, c2] = crossover(p1, p2, n);
 
     console.log("soal A");
    [x, y, c] = getValues(c1);
    console.log(c1);
    console.log(x);
    console.log(y);
    console.log(c);
    [x, y, c] = getValues(c2);
    console.log(c2);
    console.log(x);
    console.log(y);
    console.log(c);
 
    console.log("soal C");
    val = fitness(c1);
    console.log(val);
 
    val = fitness(c2);
    console.log(val);
 
    console.log("soal D");
    var arrayP = ["0010110","1111111","1110001"];
    var i,j;
    var f = 0;
    var C =0;
    for ( i = 0 ; i < arrayP.length-1 ; i++){
    for(j = i ; j < arrayP.length ; j++){
    console.log("P1 = "+arrayP[i]);
    console.log("P2 = "+arrayP[j]);
    [c1, c2] = crossover(arrayP[i], arrayP[j], n);
     console.log("C1 = "+c1);
    val = fitness(c1);
    console.log("Fitness C1 = "+val);
    if (f < val){
        f = val;
        C = c1;
     }
    console.log("C2 = "+c2);
    val = fitness(c2);
    console.log("Fitness C2 = "+val);
    if (f < val){
     f = val;
     C = c2;
    }
   
    }
     }
    console.log("Higest fitness = "+f);
    console.log("Higest C = "+C);
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
 
    var x = -1;
    var y = -1;
    var c = -1;
 
     x = xs;
     y = ys;
    c = cs;
 
    return [x, y, c];
    }

    // Create fitness function 
    // Soal B
    function fitness() {
     var p = arguments[0];
 
     var x, y, g;
     [x, y, g] = getValues(p);
     var x_0 = 0; //diasumsikan
     var y_0 = 0; //diasumsikan
    var dr = Math.sqrt(Math.pow((x-x_0),2)+Math.pow((y-y_0),2)); 
 
    var val = 1 / (1 + dr);
     return val;
    }
    <br />
## NOMOR 5 : <br /><br />
    Konsep fisika komputasi seperti Artificial Neural Network (ANN) dapat digunakan untuk mengontrol kesehatan mental masyarakat guna meningkatkan kesadaran akan pentingnya menjaga kesehatan mental. Sehingga diharapkan diagnosis dini dapat memberikan penanganan yang sesuai kepada masyarakat yang mengalami kesehatan mental yang buruk seperti depresi. Hal ini terjadi karena masalah kesehatan mental tidak hanya diakibatkan kurangnya fasilitas. Kuatnya stigma buruk masyarakat terhadap depresi dan gangguan kejiwaan lainnya turut menjadi penghalang besar penderita mendapat penanganan dan kontrol. Penderita kerap mengabaikan gejala depresi dan kelainan yang dihadapinya sampai berlarut-larut karena malu dan tidak ingin disebut sebagai orang gila. Akibatnya, penanganan dini gagal dilakukan dan gejala yang dialami berubah menjadi kronis.
    1.	Tujuan 
        Untuk mendeteksi kesehatan mental masyarakat menggunakan aplikasi sosial media berbasis Artificial Neural Network (ANN) 

    2.	Rumusan masalah 
        Bagaimana metode aplikasi sosial media berbasis Artificial Neural Network (ANN) dapat mendeteksi kesehatan mental masyarat?

    3.	Metode 
        Metode diagnosis depresi yang digunakan ada 2, yaitu 
        a.	Facial Test Recognition. 
            Metode ini memanfaatkan algoritma SVM (Support Vector Machine) berdasarkan data training yang tersedia demi mendapatkan tingkat depresi seseorang dari potret wajahnya. Metode facial image recognition bekerja berdasarkan pendetekesian emosi dari gambar wajah seseorang. Sistem ini dilatih dengan mendeteksi fitur wajah dari emosi negatif dan positif dari banyak data citra ekspresi. Pada akhirnya, sistem yang terlatih akan mampu mengidentifikasi tingkat depresi seseorang berdasarkan parameter paling dominan yang menunjukkan emosi buruk.
        b.	Deep Learning Neural Network
            Metode ini memanfaatkan deep learning neural network untuk menganalisa diksi dan timing posting seseorang untuk dicari kondisi mentalnya. Metode ini bekerja dengan melakukan analisis unggahan pengguna. Katakata pengguna yang mengandung ekspresi rasa depresi seperti “#sedih”, “#bosanhidup”, atau “#depresi” akan dideteksi. Komputer akan belajar mengenali pola-pola depresi  melalui tulisan dan foto dengan deep learning neural network. Metode pembelajaran mesin yang digunakan adalah supervised learning. Komputer diberi tulisan-tulisan dan gambar-gambar dari data training yang telah diklasifikasikan depresi dan tidaknya. Data tersebut kemudian dikembangkan untuk mencari korelasi antara suatu kosakata terhadap tes uji yaitu depresi dan cost functionnya sebagai bobot pengaruh. Cost function yang diperoleh kemudian akan dievaluasi dengan metode gradient descent sehingga diperoleh hubungan yang tepat antara input data dengan hasil prediksi.

    4.	Hasil dan Analisis 
    SVM merupakan suatu teknik untuk menemukan hyperplane yang bisa memisahkan dua set data dari dua kelas yang berbeda. SVM classifier mengklasifikasikan data uji dan memberikan kelas prediksi. SVM memanfaatkan data training untuk memisahkan pengguna berdasarkan tingkat depresinya. Semakin lama, akurasi akan terus meningkat seiring jumlah data training meningkat. Metode deep learning neural network memungkinan proses analisis terhadap perilaku pengguna aplikasi sosial media secara online setiap harinya dengan otomatis tanpa memerlukan partisipasi aktif pengguna. Dengan metode ini, kecenderungan pengguna akan depresi dapat dideteksi sedini mungkin. 
    Sistem prediksi bertujuan untuk memperkirakan kondisi mental seseorang di masa depan. Prediksi berguna sehingga pengguna bisa menyiapkan diri terhadap siklus kesehatan mentalnya. Kondisi mental buruk dapat ditangani secara pribadi, dibantu orang terdekat, dan dengan bantuan ahli. 

    Referensi :
    [1] Ang Li, et al., “Detecting depression stigma on social media ; A Linguistic Analysis”; Journal of Affeective Disorders; Volume 232
    [2] Girard, Jeffrey M. et al. (2013), Social risk and depression : Evidence from manual and automatic facial recognition analysis. IEEE International Conferencence and Workshop
    [3] Girard, Jeffrey M. et al. (2013), Social risk and depression : Evidence from manual and automatic facial recognition analysis. IEEE International Conferencence and Workshop
    [4] Prameswara, Namboodiri S. et al., (2019).  A computer vision based image processomg system for depression detection among students for counseling. Indonesian Journal of Electrical Engineering and Computer Science.
