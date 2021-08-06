
// You should implement your task here.

module.exports = function towelSort (matrix) {
//function towelSort (matrix) {
  if (arguments.length == 0) {
    return [];
  } else {
  let arrNew = [];
  for(let j = 0; j < matrix.length; j++) {
    let r = matrix[j].length;
    let k = j%2;
    if (j%2==0) {
      for(let n = 0; n < matrix[j].length; n++) {
        arrNew.push(matrix[j][n]);
      }
    } else {
      for(let n = matrix[j].length; n > 0; n--) {
        arrNew.push(matrix[j][n-1]);
      }
    }
  }
  return arrNew;
}
}
//console.log(towelSort([[4,5,6], [1,2,3], [7,8,9],]));
//console.log(towelSort([4,5,6,1,2,3,7,8,9]));
//console.log(towelSort([1,2,3,4]));
