function stringCounter(string1, string2) {
  let returnedValue = '';

  if (string1.length > string2.length) {
    returnedValue = 'A maior palavra é ' + string1;
    return returnedValue;
  } else if (string1.length < string2.length) {
    returnedValue = 'A maior palavra é ' + string2;
    return returnedValue;
  } else if (string1.length == string2.length) {
    returnedValue = 'As palavras tem o mesmo tamanho!';
    return returnedValue;
  } else {
    returnedValue = 'Error';
    return returnedValue;
  }

}

var result = stringCounter('abacaxi', 'cebola');
console.log(result);