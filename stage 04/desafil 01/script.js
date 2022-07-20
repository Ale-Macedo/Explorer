
let NumberOne = Number(prompt("primiro numero"));
let NumberTwo = Number(prompt("segundo numero"));

let sun = NumberOne + NumberTwo;
let subtraction = NumberOne - NumberTwo;
let multiplication = NumberOne * NumberTwo;
let division = NumberOne / NumberTwo;
let remnantDivision = NumberOne % NumberTwo;
let igual;
let pair;
let sunPair;
let sunP = (NumberOne + NumberTwo) % 2
let NumberOnePair = NumberOne % 2
let NumberTwoPair = NumberTwo % 2


if (NumberOnePair === 0 && NumberTwoPair === 0 ) {
  pair = "os dois numeros são pares" 
  } else if(NumberOnePair === 0){
  pair = `soment o numeron ${NumberOne} é par`
  }else if (NumberTwoPair === 0){
  pair = `soment o numeron ${NumberTwo} é par`
  }else{
  pair = `nem um dos numeros são pares`
}

if(sunP === 0){
  sunPair = `pares`
  }else{
  sunPair = `impares`
}

if (subtraction === 0) {
  igual = `iguais`
  }else{
  igual = `difrentes`
}

alert(`Os numeros nas seguntes funçõe dão os resultados referentes a :
soma : ${sun}
subitração : ${subtraction}
multiplicação : ${multiplication}
divisão : ${division}
resto da divisão : ${remnantDivision}

alen disso os numeros são ${igual} e ${pair} e a soma deles são ${sunPair} `);