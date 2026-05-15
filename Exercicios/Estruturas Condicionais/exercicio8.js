function verificarPlaca(digitoPlaca) {
    switch(true) {
        case ( digitoPlaca === 7  || digitoPlaca === 8) :
            console.log('Seu rodízio é Quinta Feira ')
            break
        case ( digitoPlaca === 5  || digitoPlaca === 6) :
            console.log('Seu rodízio é Quarta Feira ')
            break
        case ( digitoPlaca === 3  || digitoPlaca === 4) :
            console.log('Seu rodízio é Terça Feira ')
            break
        case ( digitoPlaca === 1  || digitoPlaca === 2) :
            console.log('Seu rodízio é Segunda Feira ')
            break
    }
}
verificarPlaca(1);
verificarPlaca(2);
verificarPlaca(3);
verificarPlaca(4);
verificarPlaca(5);
verificarPlaca(6);
verificarPlaca(7);
verificarPlaca(8);