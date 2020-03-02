function Impressora()
{
  var args = [].slice.call(arguments, 0);
  for (var i = 0; i < args.length; i++) console.log(args[i]);
}

var strings =['AA', 'BB', 'CC'];

Impressora(strings);
Impressora('Feijão', 'Arroz', 'Ovo', 'Batata Frita');