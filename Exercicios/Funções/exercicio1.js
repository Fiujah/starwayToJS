const p1 = 7;
const p2 = 5;
const p3 = 3.5;
const mediaMinima = 7;
const pf = 8;

// let media_antes_da_pf = (p1 + p2 + p3) / 3
// let media_final = (media_antes_da_pf + pf)/2

function calcularMedia() {
    const media_antes_da_pf = (p1 + p2 + p3) / 3;
    console.log(`A média desse aluno é ${media_antes_da_pf}`);
}
// console.log("a média final desse aluno é", media_final())
// console.log("a média desse aluno é", media_antes_da_pf())
calcularMedia();