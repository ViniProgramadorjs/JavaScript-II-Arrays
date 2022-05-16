const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log(`Tamanho do Array: ${nomes.length}`);
                        // 0, 10
const sala1 = nomes.slice(0,nomes.length/2); //pega metade
                        // 10
const sala2 = nomes.slice(nomes.length/2);  //pega outra metade

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);