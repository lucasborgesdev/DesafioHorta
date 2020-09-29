const posicao = class Posicao {
  constructor(linha, coluna) {
    this.l = Number.parseInt(linha);
    this.c = Number.parseInt(coluna);
  }

  constroi_atraves_string(par_ordenado) {
    //let l = Number.parseInt(par_ordenado.match(/(\d+),/)[1]);
    let l = Number.parseInt(par_ordenado);
    //let c = Number.parseInt(par_ordenado.match(/,(\d+)/)[1]);
    let c = Number.parseInt(par_ordenado);
    return new Posicao(l, c);
  }

  distancia(outra_posicao) {
    return {
      distancia_eixo_vertical: outra_posicao.l - this.l,
      distancia_eixo_horizontal: outra_posicao.c - this.c,
    };
  }

  direcao_para(outra_posicao) {
    let d = this.distancia(outra_posicao);

    if (d.distancia_eixo_horizontal < 0) {
      // se é negativo, esta posição está mais pra esquerda
      return "O";
    } else if (d.distancia_eixo_horizontal == 0) {
      // está na mesma posição do eixo
      // não precisa fazer nada
    } else {
      // se cair aqui, entao esta posição está mais pra direita
      return "L";
    }

    if (d.distancia_eixo_vertical < 0) {
      return "S";
    } else if (d.distancia_eixo_vertical > 0) {
      return "N";
    } else {
      return "I";
    }
  }
};

module.exports = { posicao };
