

// let Name = prompt("qual o seu nome?")
// alert(`Olá, ${Name}`)











// let NumberOne = Number(prompt("numro inicial"))
// let NumberTwo = Number(prompt(`numroque serasomado a ${NumberOne}`))

// alert(`O resultado é ${(NumberOne + NumberTwo)}`)











// alert("numeros que assarão por toas as operações matemmaticas ");
// let NumberOne = Number(prompt("primiro numero"));
// let NumberTwo = Number(prompt("segundo numero"));

// let sun = NumberOne + NumberTwo;
// let subtraction = NumberOne - NumberTwo;
// let multiplication = NumberOne * NumberTwo;
// let division = NumberOne / NumberTwo;
// let remnantDivision = NumberOne % NumberTwo;
// let exponential = NumberOne ** NumberTwo;

// alert(`O numero nas seguntes funçõe dão o resultado referente a :
// soma : ${sun}
// subitração : ${subtraction}
// multiplicação : ${multiplication}
// divisão : ${division}
// resto da divisão : ${remnantDivision}
// exponncial : ${exponential}`);
















// alert('Olá, vamos vr sua media ?')
// let Name = prompt("seu nomme")
// let firstBimester = Number(prompt("digie aqui a nota do primiro bimstre"))
// let secondBimester = Number(prompt("digie aqui a nota do segundo bimstre"))
// let thirdBimester = Number(prompt("digie aqui a nota do terceiro bimstre"))

// const mean = (firstBimester + secondBimester + thirdBimester) / 3

// if (mean > 6) {
//   alert(`parabens ${Name} você passou de ano sua media foi de ${mean} ` )
// }else{
//   alert(`Atenção ${Name} você não assou de ano. Sua media foi d apenas ${mean}... melhore.`)
// }



















// let itens =[]

// for (let item = 0; item < 10; item++) {
//   let itemName = prompt("disgit o itm " + (item + 1))

//   itens[item] = itemName

// }
// alert(itens)



// let result = prompt("advinhe o numero dee 0 a 10");

// const random = Math.round(Math.random() * 10);
// // const match = Number(result) == random

// let xatteempts = 1;

// while (Number(result) !== random) {
//  result = prompt("erro, tente nova mente");
//  xatteempts++

// }

// alert(`parabens vc acertou em ${xatteempts} tentativas`)



















// let option; 
// let itens =['oi', 'tuobom']

// while(option != 3){
//   option = Number(prompt(`
//   Olá usuario digite o numero da opão deseejada 
  
//   1. cadastrar
//   2. mostrar itens
//   3. sair do progama`))

//   if (option == 1){
//     let cadastro = prompt(`digite o nome do itmem a cadastrar`)
//     itens.push(cadastro)
//     // itens.unshift(cadastro)

//     // for (let item; item < 10; item++) {
//     //   let itemName = prompt("disgit o itm " + (item + 1))

//     //   itens[item] = itemName

//     // }
//   }else if (option == 2){
//     if(itens.length == 0){
//       alert("n tem nada aqui")
//     }else{
//      alert(itens)
//     }
//   }else if (option == 3) {
//     alert("bey")
//   }else{
//     alert("numero n valido")
//   }
// }

// let option; 
// let itens =['oi', 'tuobom']

// while(option != 3){
//   option = Number(prompt(`
//   Olá usuario digite o numero da opão deseejada 
  
//   1. cadastrar
//   2. mostrar itens
//   3. sair do progama`))


// switch (option) {
//   case 1:
//     let cadastro = prompt(`digite o nome do itmem a cadastrar`)
//     itens.push(cadastro)

//     break;


//   case 2:
//     if(itens.length == 0){
//     alert("n tem nada aqui")
//   }else{
//     alert(itens)}
//     break;


//   case 3:
//     alert("bey")
//     break;


//   default:
//     alert("numero n valido")
//     break;
// }


// }













// let Name = prompt('nome do paciente')
// let year = prompt('idade do paciente')
// let weight = prompt('peso do paciente')
// let height = prompt('altura do paciente')

// let chart = [{Name,year,weight,height}]

// alert(chart[0].Name,chart[0].year,chart[0].weight,chart[0].height)

// let name = 'gigil'
//     let age =  19
//     let stars = 10.10
//     let isSubscribed = true
//     let MyLife = {name, age, stars, isSubscribed}
//     console.log(chart)

// const pacints = [
// {
//   Name: 'gigi',
//   year:  19,
//   weight: 170,
//   height: 68
// },
// {
//   Name: 'gi',
//   year:  20,
//   weight: 171,
//   height: 70
// },

// {
//   Name: 'gio',
//   year:  21,
//   weight: 172,
//   height: 69
// }
// ]

// // let pacienteName = []

// // for (const paciente of pacints) {
// //   pacienteName.push(paciente.Name)
  
// // }
// // alert(pacienteName)

// function imc(pacints) {
  
//   alert(`
//     paciente ${pacints.name} possui o imc de ${(pacints.weight / ((pacints.weight /100)**2)).toFixed(2)}
//   `)
// }

// for (let patient of pacints) {
//   imc(patient)
// }
