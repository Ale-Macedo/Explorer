alert('Olá, vamos ver sua media ?')

let lisaAlunos = [
  {
    Name: 'Larissinha',
    firstBimester: 7,
    secondBimester: 8,
  },

  {
    Name: 'Jãuu',
    firstBimester: 4,
    secondBimester: 2,
  }

]

let quem = prompt('quem és tu ? Jãuu ou Larissinha')

// let mean = () =>  {(firstBimester + secondBimester)/ 2} 

function calculaMedia(nota1, nota2){
  return (nota1 + nota2) / 2
}


let nota;

if (quem == 'Jãuu') {
  nota = calculaMedia(lisaAlunos[1].firstBimester, lisaAlunos[1].secondBimester)
} else if (quem == 'Larissinha'){
  nota = calculaMedia(lisaAlunos[0].firstBimester, lisaAlunos[0].secondBimester)
} else{
  alert('aluno n cadascrado')
}

let prova;

if(nota > 7){
  prova = `Parabens você foi Aprovado(a)`
}else{
  prova = `Parabens você foi Reprovado(a), mehore`
}

alert(`A média do(a) aluno(a) ${quem} é : ${nota}
${prova}`)