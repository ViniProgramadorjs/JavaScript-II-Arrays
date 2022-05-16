const alunos = ["Joao", "Juliana", "Caio", "Ana"];

const mediasDosAlunos = [10, 7, 9, 6];

// includes -> booleano
// indexOf -> numero do indice

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeENota = (nomeDoAluno) => {
      if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
          let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
          return listaDeNotasEAlunos[0][indice] + ",sua media é " + listaDeNotasEAlunos[1][indice];
      } else {
          return "Aluno não está cadastrado"
      }
}

console.log(exibeNomeENota("Ana"));