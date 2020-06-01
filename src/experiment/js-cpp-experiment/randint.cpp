/*
	randint.cpp
	Generate random number for JS reading
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	Compile: g++ randint.cpp -o randint
	Execute: ./randint [N]
	
	20200529
	1646 Start this C++ program.
	1701 Try this [1] for slowing the output.
	1707 Play again with [3].
	1711 Does not work with console pipe |.
	
	References
	1. url https://stackoverflow.com/a/42045893/9475509
	2. url https://en.cppreference.com/w/cpp/thread/sleep_for
	   [20200529].
	3. url http://www.cplusplus.com/reference/cstdlib/rand/
	   [20200529].	
*/

#include <iostream>
#include <chrono>
#include <thread>
#include <cstdlib>
#include <fstream>

using namespace std;

int main(int argc, char *argv[]) {
	int N = 5;
	if(argc > 1) {
		N = atoi(argv[1]);
	}
	
	int i = 0;
	while(i < N) {
		int j = rand() % 256;
		
		ofstream fout;
		fout.open("data.txt");
		fout << "var data = " << j << ";" << endl;
		fout.close();
				
		this_thread::sleep_for(1s);
		i++;
	}
	
	return 0;
}
