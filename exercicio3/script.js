const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//EXERCICIO 03
//a)
const pokemon2 = {
    ...pokemon1,
    nome:"Squirtle",
    tipo:"Água"
}

//b)
pokemon1.ataques=[]

//c)
const ataque ={
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque)

//c - 2)
pokemon2.ataques=[]

//d)

pokemon1.ataques.push({
    nome:"Folha Navalha",
    dano:45,
    tipo:"Grama",
    precisao:100
})

//e)

pokemon2.ataques.push({
    nome:"Jato de Água",
    dano:40,
    tipo:"Água",
    precisao:100
})

//e)

console.log(pokemon1)
console.log(pokemon2)