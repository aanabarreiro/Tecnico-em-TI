// 1
const serie = {
    nome: "Stranger Things", 
    ano: 2016, 
    elenco: [
      "Millie Bobby Brown", "Finn Wolfhard", "Gaten Matarazzo", 
      "Caleb McLaughlin", "Sadie Sink"
      ], 
    episodiosHoje: [
      {canal: "Netflix", horario: "16h"}, 
      {canal: "HBO Max", horario: "18h"}, 
      {canal: "Prime Video", horario: "20h"}
      ]
  }
  
  console.log(serie.elenco[1])  
    // Finn Wolfhard
  console.log(serie.elenco[serie.elenco.length - 1])
    // Sadie Sink
  console.log(serie.episodiosHoje[1])
    // {canal: "HBO Max", horario: "18h"}

//   2
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  proprietario: {
    nome: "Carlos",
    idade: 45,
    habilitado: true
  }
};

console.log(carro.proprietario.nome);
// Carlos
console.log(carro.proprietario.habilitado);
// True
// B) console.log(carro.modelo)

// 3
const calculadora = {
  somar: function(a, b) {
    return a + b;
  },
  subtrair: function(a, b) {
    return a - b;
  }
};

console.log(calculadora.somar(5, 3));
//8
console.log(calculadora.subtrair(10, 4));
// 6
// B) console.log(calculadora.somar(5, 3));
// C) multiplicar: function(a, b) {
//    return a * b;},
//    dividir: function(a, b) {
//    return a / b;}
// D) Para retornar um valor específico e encerra a função.

// 1) 
let pessoa={
  nome: 'Ana Beatriz',
  apelidos: ['Aninha', 'Ana B', 'Beatriz']
}

alert(`Eu sou a ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)



// 2
const listaDeTarefas = {
  nome: "João",
  tarefas: [
    { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
    { descricao: "Limpar o quarto", concluida: false, prioridade: "média" }
  ]
};
// A
listaDeTarefas.tarefas.push({descricao: "Fazer almoço", concluida: false, prioridade: "baixa"})

// B
listaDeTarefas.tarefas[2].concluida= true


// 3
let nome= prompt(`Digite seu nome: `)
let idade= prompt(`Digite sua idade: `)
let profissao= prompt(`Digite sua profissão: `)

let dados={
  
}

dados.nomeDados= nome
dados.idadeDados= idade
dados.profissaoDados= profissao

console.log(`{nome: '${dados.nomeDados}', profissão: '${dados.profissaoDados}', idade: '${dados.idadeDados}'}`)


// 4
let carrinho=[]

let Uva={
  nome: 'Uva',
  disponibilidade: true
}

let maca={
  nome: 'Maçã',
  disponibilidade: true
}

let banana={
  nome: 'Banana',
  disponibilidade: true
}

carrinho.push(Uva)
carrinho.push(maca)
carrinho.push(banana)

console.log(carrinho)