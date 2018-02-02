// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//Solution #1
//    var arrayOfString = str.split("");
//    var arrayLength = arrayOfString.length;
//    var arrayOfReversedString = [];
//    for( var i = 0; i < arrayLength; i++ ){
//        arrayOfReversedString[i] = arrayOfString.pop();
//    }
//    return arrayOfReversedString.join();
    
//Solution #2    
    
    var arrayOfString = str.split("");
    var reversedArray = arrayOfString.reverse();
    return reversedArray.join();
}

module.exports = reverse;
