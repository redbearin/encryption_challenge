
//takes a base number, encodes it, and produces a hex number
function numberEncodedHex(baseNumber){

  var number = baseNumber + 8192;
  var array = [];

  while(number > 0) {
    array.push(number % 2);
    number = Math.floor(number/2);
  }

  if (array.length) {
    if (array.length <= 8) {
      array[array.length - 1] = 0;
    }
    if(array.length > 8) {
      var value = array[8];
      array.splice(array[8], 0, value);
      array[7] = 0;
    }
  }

  var sum = 0;
  for (var index = 0; index < array.length; index++) {
    sum += array[index] * Math.pow(2, index);
  }

  var newArray = [];

  while(sum) {
    var hex = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'};
    var rem = sum % 16;
    sum = Math.floor(sum / 16);
    newArray.push(hex[rem]);
  }

  for (x = newArray.length; x < 4; x++) {
    newArray.push(0);
  }

  newArray.reverse();
  return newArray.join('');
}

numberEncodedHex(-4096);

//takes a hex number and generates a decimal number
//can set the sum to whatever is best, depending on problem criteria
//does not include decoding
function generateDecimalFromHex (hiByte, LoByte) {
  var strCompleteHex = '' + hiByte + LoByte;
  var sum = -8192;
  var hex = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'};

  for (var positionIndex = 3; positionIndex >= 0; positionIndex--) {
    var baseTen = hex[strCompleteHex[positionIndex]];
    // console.log(baseTen);
    var ExponentIndex = 3 - positionIndex;
    // console.log(baseTen * Math.pow(16, ExponentIndex));
    sum += baseTen * Math.pow(16, ExponentIndex);
  }
  return sum;
}

generateDecimalFromHex (2000);

//test with console logs for testing purposes
//more testing will likely be necessary, so saving this code for now
// var baseNumber = -4096;
// var number = baseNumber + 8192;
// console.log(number);
// var array = [];
// while(number > 0) {
//   array.push(number % 2);
//   number = Math.floor(number/2);
// }

// console.log('array before: ', array);
// if (array.length) {
//   if (array.length <= 8) {
//     array[array.length - 1] = 0;
//   }
//   if(array.length > 8) {
//     var value = array[8];
//     array.splice(array[8], 0, value);
//     array[7] = 0;
//   }
// }

// console.log('array after: ', array);
// var sum = 0;
// for (var x = 0; x < array.length; x++) {
//   sum += array[x] * Math.pow(2, x);
//   console.log(sum);
// }

// var newArray = [];

// while(sum) {
//   var hex = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'}
//   var rem = sum % 16;
//   console.log('remainder: ', rem);
//   sum = Math.floor(sum / 16);
//   console.log('new sum: ', sum);
//   newArray.push(hex[rem]);
// }

// console.log('newArray: ', newArray);
// for (x = newArray.length; x < 4; x++) {
//   newArray.push(0);
//   console.log('newArray: ', newArray);
// }

// console.log(newArray);
// newArray.reverse();
// console.log(newArray.join(''));

