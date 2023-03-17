// techical suneja dsa lec 1
//

// function getSumZero(array=[]) {
//     for (let number of array) {
//         for (let j = 1; j < array.length - 1; j++){
//             const checkZeroSum = number + array[j]===0;
//             if (checkZeroSum) {
//                 return [number, array[j]]
//             }
//         }
//     }
// }

// optimize solution by sorting first
function getSumZeroN(array = []) {
    const sortArray = array.sort((a,b)=> a-b);
    // return sortArray
    let leftPoin = 0;
    let rightPoin = sortArray.length - 1;
console.log("sort ", new Date());
    while (leftPoin < rightPoin) {
        const sumCheck = sortArray[leftPoin] + sortArray[rightPoin];
        console.log(sortArray[leftPoin] , sortArray[rightPoin], sumCheck);
        if (sumCheck===0) {
            return [sortArray[leftPoin], sortArray[rightPoin]]
        } else if (sumCheck > 0) {
            rightPoin--;
        } else {
            leftPoin++;
        }
    }
}

const resut = getSumZeroN([-5,-4,-3,-2,0,2,3,4,5,6,8]);
console.log("sort ", new Date());
console.log("result", resut);
