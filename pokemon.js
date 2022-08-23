function Pokemon(nome, pontosAtaque, pontosDefesa){
  this.nome = nome;
  this.pontosAtaque = pontosAtaque;
  this.pontosDefesa = pontosDefesa;
  this.atacar = (oponente) => {
    // Se eu tenho mais poontos de ataque
    //do que o outro pokemon tem pontos de defesa
    //eu sou o vencedor
    //senão, eu sou o perdedor
    // IF ternario -> CONDIÇÃO ? VERDADEIRO : FALSO
    const vencedor = (this.pontosAtaque > oponente.pontosDefesa) ? this : oponente;
    console.log(`O vencedor da luta é ${vencedor.nome}\n`);
     


    // if (this.pontosAtaque > oponente.pontosDefesa) {
    //     console.log(`${this.nome} venceu o pokemon ${oponente.nome}`);
    // }else {
    //     console.log(`${this.nome} é um perdedor, não conseguiu ganhar do pokemon ${oponente.nome}`);
    // }      ESSE IF É O MESMO DO IF TERNARIO DE CIMA
  };
  this.saudacao = (callbackSaudacao) => {
    const parametro = {...this};
    //UMA DAS MANEIRAS DE FAZER ESSE EXERCICIO COM UM OBJETO
    // const parametro = {
    //   nome: this.nome, 
    //   pontosAtaque: this.pontosAtaque, 
    //   pontosDefesa: this.pontosDefesa
    // };
    const textoSaudacao = `Olá. ${callbackSaudacao(parametro)}`;
    console.log(textoSaudacao);
  }
}

function saudacaoCompleta({ nome, pontosAtaque, pontosDefesa }){
  return `Meu nome é ${nome}. Tenho ${pontosAtaque} pontos de ataque. Tenho ${pontosDefesa} pontos de defesa`;
}

function saudacaoSimples({ pontosDefesa }){
  return `Tenho ${pontosDefesa} pontos de defesa.`;
}

let pineco = new Pokemon("Pineco", 1500, 500);
let pikachu = new Pokemon("Pikachu", 2500, 1000);
pineco.saudacao(saudacaoCompleta);
pikachu.saudacao(saudacaoSimples);


let jsonPokemons = '{"count":1154,"next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}'
let listaPokemons = JSON.parse(jsonPokemons);

//pineco.atacar(pikachu);
//pikachu.atacar(pineco);

//let pinecoJson = JSON.stringify(pineco); // Deixa o código como formato JSON


//console.log(pinecoJson);
// Para cada item dentro de RESULTS, vamos criar um novo POKEMON
// e adicionar em uma lista de pokemons

let instanciasPokemons = [];
for(let contador = 0; contador < listaPokemons.results.length; contador++) {
    let instancia = new Pokemon(listaPokemons.results[contador].name, 
        (contador + 1) * Math.random() * 1000, 
        (contador + 1) * Math.random() * 500
        );
    //console.log(instancia); Imprimi os pokemons pelo nome só 
    instanciasPokemons.push(instancia);
}
//console.log(instanciasPokemons); Mostra os pokemons que foram adicionados no array com os pontos de ataque e defesa multiplicados

// MÉTODOS DE ARRAY, Map, Filter, ForEach, Reduce, Find.
// Map -> Método que retorna um array alterado
// Filter -> Método utilizado para filtrar e retorna um array filtrado
// ForEach -> Método utilizado para percorrer/iterar sobre um array
// Reduce -> Método utilizado para criar algo novo a partir de um array
// Find -> Método utilizado para encontrar algo dentro de um array

  instanciasPokemons.forEach((pokemon, index) => {
    console.log(`O Pokemon atacante é ${pokemon.nome}. Os pontos de ataque são ${pokemon.pontosAtaque}`);
    console.log(`A posição do pokemon é ${index}`);
    instanciasPokemons.forEach((pokemonDefensor) => {
      if(pokemon != pokemonDefensor){
        console.log(`O Pokemon defensor é ${pokemonDefensor.nome}. Os pontos de defesa são ${pokemonDefensor.pontosDefesa}`)
        pokemon.atacar(pokemonDefensor);
      }
    })
  });

  // filtrar Pokmeons com mais de 2000 de ataque
  /*const pokemonsFortes = instanciasPokemons.filter((pokemon) => {
    return pokemon.pontosAtaque > 2000;
  });
*/
  //console.log(pokemonsFortes)
  
  // function proprioForEach (array, callback){
  //   for (let posicao = 0; posicao <array.length; posicao++){
  //     const valor = array[posicao];
  //     callback(valor, posicao);
  //   }
  // }

  // proprioForEach(pokemonsFortes, (valor, posicao) => {
  //   console.log(valor.pontosAtaque);
  // });

// "FOR" TRADICIONAL COMENTADO SÓ PARA NÃO APARECER TODOS OS CONSOLE LOG

// for(let atacante = 0; atacante < instanciasPokemons.length; atacante++){
//     const pokemonAtacante = instanciasPokemons[atacante]
//     console.log(`O Pokemon atacante é ${pokemonAtacante.nome}. Os pontos de ataque são ${pokemonAtacante.pontosAtaque}`);

//     for(let defensor = 0; defensor < instanciasPokemons.length; defensor++){
//      if(atacante != defensor) {
//         const pokemonDefensor = instanciasPokemons[defensor];
//         console.log(`O pokemon defensor é ${pokemonDefensor.nome}. Os pontos de defesa são ${pokemonDefensor.pontosDefesa}\n`);
//         pokemonAtacante.atacar(pokemonDefensor);
//         }
//     }
// }

