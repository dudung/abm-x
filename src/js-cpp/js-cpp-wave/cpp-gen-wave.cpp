/*
	cpp-gen-wave.cpp
	Generate random number for JS reading
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	Compile: g++ cpp-gen-wave.cpp -o cpp-gen-wave
	Execute: ./cpp-gen-wave
	
	20200529
	2007 Derive it from randint.cpp file.
	2047 Clear the streamstring [1].
	2116 Finish producing wave profile.
	2123 Add time stamp in the beginning of data.
	2146 Change format to JSON manually.
	2151 Corret JSON output, remove last semicolon.
	2218 Change delay to 0.1 s and test it.
	2221 Find problem with the last comma in array.
	2239 Fix range dependent wavelength.
	2251 Problem not until final time tend.
	
	References
	1. https://stackoverflow.com/a/2848109/9475509
*/

#include <iostream>
#include <chrono>
#include <thread>
#include <cstdlib>
#include <fstream>
#include <cmath>
#include <sstream>

using namespace std;

int main(int argc, char *argv[]) {
	// Prepare stringstream
	stringstream sout;
	stringstream xout;
	stringstream yout;
	
	// Define wave parameters
	double A = 0.1;       // m
	double T = 0.5;       // s
	double lambda = 1.0;  // main
	double phi0 = 0;      // rad
	
	// Calculate other parameters
	double omega = 2 *  M_PI / T;
	double k = 2 * M_PI / lambda;
	
	// Define ranges
	double xmin = 0;
	double xmax = xmin + 6 * lambda;
	double dx = 0.01 * lambda;
	int Nx = round((xmax - xmin) / dx);
	double tmin = 0;
	double tmax = tmin + 20 * T;
	double dt = 0.1 * T;
	
	// Initiate time
	double t = tmin;
	while(t <= tmax) {
		
		// Clear stringstream
		sout.str(string());
		sout.clear();
		xout.str(string());
		xout.clear();
		yout.str(string());
		yout.clear();
		
		// Begin JSON format
		sout << "var data =`{" << endl;
		
		// Add time information
		sout << "\"t\": " << t << "," << endl;
		
		// Begin array
		xout << "\"x\": [";
		yout << "\"y\": [";
		
		// Initiate position
		double x = xmin;
		int ix = 0;
		while(ix <= Nx) {
			x = xmin + ix * dx;
			
			// Calculate wave data
			double y = A * sin(k * x - omega * t + phi0);
			
			// Add content data
			xout << x;
			yout << y;
			
			if(ix < Nx) {
				xout << ", ";
				yout << ", ";
			}
			
			// Advance position
			ix++;
		}
		
		// End array
		xout << "]";
		yout << "]";
		
		// Add array
		sout << xout.str() << "," << endl;
		sout << yout.str() << endl;
		
		// End JSON format
		sout << "}`" << endl;
		
		// Write data to file
		ofstream fout;
		fout.open("data.txt");
		fout << sout.str();
		fout.close();
		
		// Display on console
		cout << t << "\t";
		cout.flush();
		
		// Delay
		this_thread::sleep_for(0.1s);
		
		// Advance time
		t += dt;
	}
	
	// Terminate program
	return 0;
}
