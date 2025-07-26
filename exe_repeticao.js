// Exercicio 1 - Estrutura de repetição 


// 1. Percorrer uma lista de nomes: Eduardo, Maria, Fernando, João e Francisco
// 2. Numero da execução, começando em 1
// 3. Nome que está sendo executado 
// Separadores


/* 
EXEMPLO DE COMO DEVE FICAR 

    Execução: 1
    Nome: Eduardo
    ----------------
*/

// Resolução do exercicio

const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']

nomes.forEach((nome, indice) => {

    console.log('Execução:',  indice + 1);
    console.log('Nome:',  nome);
    console.log('---------------------------');
    
    
});