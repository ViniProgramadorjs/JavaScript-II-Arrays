//Retornar uma Array com novos valores -> map()

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);
