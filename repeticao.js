/* 
     array.forEach(variavel => { 
        console.log(elemento)
    })

    Repetição por array
 */
const times = ['grêmio', 'flamengo', 'palmeiras'] // Array que será usado


//Utilizando um parâmetro (Percorre o array)
times.forEach(element => {
    console.log(element);

    
});


// Utilizando dois parâmetros (Percorre por nome e indice)
times.forEach((elemento, indice) => {
    console.log('Indice', indice);
    console.log(elemento);
    
    
}) 


// Repetição utilizando o for (Repetindo todos os itens do meu array)
for (let indice = 0; indice < times.length; indice++) {
    console.log('Looping de repetição:', times[indice]);

    
}

// Repetição utilizando o for (Para fazer uma contagem)
for (let i = 0; i < 6; i++) {
    console.log(i);
    

}

// Condições
// let i = 0 Por onde vamos começar a contagem
// i < 6 Até aonde vai a contagem
// i ++ Adiciona +1 na contagem 