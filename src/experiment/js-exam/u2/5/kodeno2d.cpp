#include <iostream>
#include <cmath>
#include <fstream>

using namespace std;

int main(){
    /* variabel yang digunakan */
    float g,l,h,m,tt;
    int i,n;

    g = 9.82;

    /*besar panjang tali*/
    l=1;
    /*besar massa*/
    m=0.5;
    /*total waktu analisis*/
    tt = 10;
    /*step waktu yang digunakan*/
    h = 0.1;

    n = tt/h;
    float theta[n],thetadot[n],f[n],T[n],t[n];

    for (i=0;i<n;i++){
        t[i] = 0;
        f[i] = 0;
        T[i] = 0;
        theta[i] = 0;
        thetadot[i] = 0;
    }

    /* pendefinisian awal */
    theta[0] = 30*3.14/180;
    thetadot[0] = 0;

    /* logika euler dan input data yang didapat ke file theta.txt */
    ofstream myfile;
    myfile.open ("theta.txt");
    for (i=0; i<=n; i++){
        theta[i+1] = theta[i] + thetadot[i]*h;
        f[i] = (g/l)*sin(theta[i+1])*-1;
        thetadot[i+1] = thetadot[i] + f[i]*h;
        T[i] = l*m*(thetadot[i]*thetadot[i] + g*cos(theta[i])/l);

        t[i+1] = t[i] + h;

        myfile <<  t[i]  << "  "  << theta[i] << "  " << thetadot[i] << "  " << T[i] << "\n";
        
        cout << "t[" << i << "]: " << t[i] << "\n";
        cout << "theta[" << i << "]: " << theta[i] << "\n";
        cout << "thetadot[" << i << "]: " << thetadot[i] << "\n";
        cout << "T[" << i << "]: " << T[i] << "\n" << "\n";
    }
    myfile.close();


/* terminasi program */
return 0;
}
