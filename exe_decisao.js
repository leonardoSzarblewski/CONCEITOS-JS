// Exercicio 2 - Estrutura de decisão

// 1. Percorrer uma lista de times: ['flamengo', 'vasco', 'gremio', 'palmeiras']
// 2. Para cada item verificar se o time Grêmio está presente 
// 3. Printar nome da cidade
// 4. Caso esteja, avisar
// 5. Caso não seja o elemento procurado, avisar
// Número da execução


// Execução: 1
// Time: Grêmio 
// Encontrado / Não encontrado 
// ------------------------------

// Resolução do exercicio

const times = ['Flamengo', 'Grêmio', 'Vasco', 'Palmeiras']



times.forEach((time, indice) => {
    console.log('Execução:', indice + 1);
    console.log('Time:', time);

    if (time == 'Grêmio') {
        console.log('Encontrado!!');
        
    } else {
        console.log('Não encontrado!!');
    }

    console.log('------------------');

});

