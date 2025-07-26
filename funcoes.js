// Função sem nenhum parâmetro
function nome() {
    const nome = 'Leonardo'
    const sobrenome = 'Laurindo'
    const idade = 23

    console.log('Nome:', nome, sobrenome);
    console.log('idade:', idade);
    
    
}

nome()


// Função com parâmetro
function nomeParametro(nome, sobrenome, idade) {
    console.log('Nome:', nome + sobrenome);
    console.log('idade:', idade);
    
      
}

nomeParametro('Pedro ', 'Silva', 21)


// Função com return
function nomeReturn(nome, sobrenome) {
    return 'Nome: ', nome + sobrenome

}


nomeGerado = nomeReturn('Brenda ', 'Kappel')
console.log(nomeGerado);
