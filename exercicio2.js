function stringCounter(str1, str2) {
  
  var str3 = '';
  str3 = str1 + str2;

  return str3;
}

function counterPack(funcao, string1, string2) {
  console.log(funcao(string1, string2));

}


counterPack(stringCounter,'Abacate', ' Verde');
