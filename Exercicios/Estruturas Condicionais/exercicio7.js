function mensagemSemaforo(corSemaforo) {
    corSemaforo === 'vermelho' ? console.log('Não é seguro, Pare !') : 
        corSemaforo === 'amarelo' ? console.log('Passe com Cuidado !') : 
            console.log('Não há perigo, Siga em Frente !') 
};

mensagemSemaforo('verde');
mensagemSemaforo('amarelo');
mensagemSemaforo('vermelho');