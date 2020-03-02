var arrayObj = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21},
    {id: 5, nome: 'joao', sobrenome: 'machado',  idade: 28},
    {id: 6, nome: 'gustavo', sobrenome: 'toledo',  idade: 42}
    ];
    
var arrayObjOrdenado = arrayObj.sort((a, b) => {
  if(a.idade > b.idade) return -1;
  if(a.id > b.id) return 1;
  return 0;
});

console.table(arrayObjOrdenado);