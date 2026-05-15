function mensagemSemaforo(corSemaforo) {
    corSemaforo === 'vermelho' 
    ? console.log('Pare !') 
    : corSemaforo === 'amarelo' 
    ? console.log('Cuidado !') 
    : console.log('Siga em Frente !') 
};

mensagemSemaforo('verde');
mensagemSemaforo('amarelo');
mensagemSemaforo('vermelho');