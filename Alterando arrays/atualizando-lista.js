                     //  0       1       2
const listaDeChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// splice remove em qualquer lugar e coloca em qualquer lugar e acrescenta sem remover

listaDeChamada.splice(1, 2, "Rodrigo"); // 
listaDeChamada.splice(2, 0, "Rodrigo"); //

console.log(`Lista de chamada: ${listaDeChamada}`);