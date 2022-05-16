//for Novo

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//callback -> Uma função que chama a outra

notas.forEach( nota => {
    somaDasNotas += nota
});

let media = somaDasNotas/notas.length;

console.log(media);