#include <iostream>
using namespace std;

int pattern1(int row = 5){
    // let pattern = "" 
    for (int i = 0; i < row; i++)
    {
        char temp = 'A';
        for(int j = 0; j <= i; j++)
        {
            // pattern = pattern + char + j;
            temp = temp + j;
            cout << temp;
        }
        // pattern = pattern + '\n';
        cout << "\n";
    };
    return 0;
}

int main(){
    cout << "program start";
    pattern1();
    return 0;
}