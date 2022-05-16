let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);

//Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.