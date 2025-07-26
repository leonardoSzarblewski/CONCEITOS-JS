// Se / Senão - estrutura de decisão if else

// Exemplo com nomes usando o igual(==)
const nome = 'brenda'

if (nome == 'brenda') {
    console.log('Condição atendida!');
    
} else {
    console.log('Condição NÃO atendida!');
}

 
/* 
Sinais:
    == Igual
    < Menor
    <= Menor ou igual
    > Maior
    >= Maior ou igual
    != Diferente 

Exemplo com números
*/
const idade = 29

if (idade < 30) {
    console.log('A idade é menor do que 30'); // Utilizando sinal de menor 
    
} else if (idade == 30){
    console.log('A idade é igual a 30'); // Utilizando sinal de igual

} else {
    console.log('A idade é maior do que 30'); 

}

// Exemplo com boolean
const ligado = true 

if (ligado) {
    console.log('Está ligado'); // Executa se for true(verdadeiro)
    
} else {
    console.log('Não está ligado'); // Executa se for false(falso)
}

