
/*1. triangle pattern 
*
**
***
****
*****
*/

const trianglePatternWithStar = function (row = 5) {
    let pattern=""
    for (let i = 0; i < row; i++){
        for (let j = 0; j <= i; j++){
            pattern =pattern+ "*";
        }
        pattern  =pattern+ '\n';
    }
    return pattern;
}

/*
5. Downward Triangle Star Pattern
*****
****
***
**
*
*/
const dawnwarTrianglePatternWithStar = function (row = 5) {
    let pattern = ""
    // 1st method
    // for (let i = 0; i < row; i++) {
    //     for (let j = row; j>i; j--) {
    //         pattern = pattern + "*";
    //     }
    //     pattern = pattern + '\n';
    // }

    // 2nd method
    for (let i = 0; i < row; i++) {
        for (let j = 0; j<row-i; j++) {
            pattern = pattern + "*";
        }
        pattern = pattern + '\n';
    }

    // 3rd method
    // let i = 0, j = row;
    // while (i < row) {
    //     while (j > i) {
    //         pattern = pattern + "*";
    //         j--;
    //     }
    //     pattern = pattern + "\n";
    //     j=row-1;
    //     i++;
    // }
        
    return pattern;
}

/*
6. Hollow Triangle Star Pattern
*
**
* *
*  *
*   *
******
*/
const HollowTrianglePattern = function (n = 6) {
    let pattern=""
    let string = "";

    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            if (j == 1|| j==i) {
                pattern=pattern+"*"
            } else if (i == n) {
                pattern = pattern + "*"
            } else {
                pattern = pattern + j
            }
        }
        pattern = pattern + "\n"
    }
    return pattern;
}
// console.log(HollowTrianglePattern());

/*
7. Javascript Pyramid Pattern
    *
   ***
  *****
 *******
*********
*/

const pyramidPattern = function (n = 5) {
    let pattern = ""
    console.log("start");
    //outer loop for row
    for (let i = 1; i <= n; i++){
        // console.log("start1");
        //space
        for (let j = n - i; j >= 1; j--){
            // console.log("start2");
            pattern = pattern + " ";
        }
        //start
        for (let k = 0; k < (2 * (i-1)) + 1; k++){
            // console.log("start3");
            pattern = pattern + "*";
        }
        for (let j = n - i; j >= 1; j--){
            pattern = pattern + " ";
        }
        pattern = pattern + "\n";
    }
    return pattern;
}

console.log(pyramidPattern(6));