
class PrintAbcSquare {

/*
 1. Pattern
AAA
BBB
CCC */
    square = (row=5) => {
        let i = 1;
        let pattern = "";
        while (i <= row) {
            for (let j = 0; j < row; j++) {
                pattern = pattern + this.nextChar("A",j+ i - 1) + " ";
            }
            pattern = pattern + "\n";
            i++;
        }
        return pattern;
    }

    triangle(row = 5){
        let i = 1;
        let pattern = "";
        while (i <= row) {
            for (let j = 0; j < i; j++) {
                pattern = pattern + this.nextChar("A", i+j - 1) + " ";
            }
            pattern = pattern + "\n";
            i++;
        }
        return pattern;
    }
    nextChar = (char="A", incNum=0 ) => {
        return String.fromCharCode(char.charCodeAt(0) + incNum);
    }
}
const result =new PrintAbcSquare().triangle(4);
console.log(result);
