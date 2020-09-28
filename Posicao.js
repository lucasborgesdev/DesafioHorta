/**
 * 
 */
class Posicao {
    constructor(l, c) {
         this.l = l;
         this.c = c;
    }

    distancia(outra_posicao) {
        let distancia_eixo_horizontal = this.l - outra_posicao.l;
        let distancia_eixo_vertical = this.c - outra_posicao.c;
        return {
            distancia_eixo_horizontal,
            distancia_eixo_vertical
        };
    };
    
    direcao_para(outra_posicao) {

        let d = this.distancia(outra_posicao);

        if (d.distancia_eixo_horizontal < 0) { // se é negativo, esta posição está mais pra esquerda
            return 'L';
        } else if (d.distancia_eixo_horizontal == 0) { // está na mesma posição do eixo
            // não precisa fazer nada
        } else { // se cair aqui, entao esta posição está mais pra direita
            return 'O';
        }

        if (d.distancia_eixo_vertical < 0) {
            return 'N';
        } else if (d.distancia_eixo_vertical > 0) {
            return 'S';
        } else {
            return 'I';
        }
    }

    test() {
        console.log('eu funciono!');
    }
}

//*
module.exports = {
    foo: function () {
        console.log('foooo!');
    },
    bar: function () {
        console.log('baaar!');
    }
};
//*/
