var dicionario = new Map();//{4: 'a', 3: 'e', 1: 'i', 5: 's'}
dicionario.set('4', 'a');
dicionario.set("3", "e");
dicionario.set("1", "i");
dicionario.set("5", "s");

var frase = 'T35t3 d3 35t4g1o';


function troca(){
for (var [key, value] of dicionario) {
  for(i = 0; i < frase.length; i++){
    if(frase[i] == key){
      var regexp = new RegExp(key, 'g');
      frase = frase.replace(regexp, value)
  }
  }
  
  }
 }
troca();

console.log(frase);