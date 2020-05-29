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
	
	// Define wave parameters
	double A = 0.1;       // m
	double T = 1.0;       // s
	double lambda = 1.0;  // main
	double phi0 = 0;      // rad
	
	// Calculate other parameters
	double omega = 2 *  M_PI / T;
	double k = 2 * M_PI / lambda;
	
	// Define ranges
	double xmin = 0;
	double xmax = xmin + 2 * lambda;
	double dx = 0.01 * lambda;
	double tmin = 0;
	double tmax = tmin + 10 * T;
	double dt = 0.1 * T;
	
	// Initiate time
	double t = tmin;
	while(t <= tmax) {
		
		// Clear stringstream
		sout.str(string());
		sout.clear();
		
		// Add prefix data
		sout << "var data =`" << endl;
		
		// Initiate position
		double x = xmin;
		while(x <= xmax + 0.01 * dx) {
			
			// Calculate wave data
			double y = A * sin(k * x - omega * t + phi0);
			
			// Add content data
			sout << x << "\t";
			sout << y << endl;
			
			// Advance position
			x += dx;
		}
		
		// Add sufix data
		sout << "`" << endl;
		
		// Write data to file
		ofstream fout;
		fout.open("data.txt");
		fout << sout.str();
		fout.close();
		
		// Display on console
		cout << t << "\t";
		cout.flush();
		
		// Delay
		this_thread::sleep_for(0.5s);
		
		// Advance time
		t += dt;
	}
	
	// Terminate program
	return 0;
}
