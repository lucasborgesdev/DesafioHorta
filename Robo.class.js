"strict";

class Robo {
  constructor(posicao, direcao) {
    this.posicao = posicao;
    this.direcao = direcao;
  }

  virar_para(nova_direcao) {
    if (this.direcao == "S") {
      if (nova_direcao == "S") {
        return "";
      }
      if (nova_direcao == "O") {
        return "D";
      }
      if (nova_direcao == "L") {
        return "E";
      }
      if (nova_direcao == "N") {
        return "EE"; // gira 180 graus, tanto faz a direção
      }
    }

    if (this.direcao == "O") {
      if (nova_direcao == "S") {
        return "E";
      }
      if (nova_direcao == "O") {
        return "";
      }
      if (nova_direcao == "L") {
        return "EE"; // gira 180 graus, tanto faz a direção
      }
      if (nova_direcao == "N") {
        return "D";
      }
    }

    if (this.direcao == "L") {
      if (nova_direcao == "S") {
        return "D";
      }
      if (nova_direcao == "O") {
        return "EE"; // gira 180 graus, tanto faz a direção
      }
      if (nova_direcao == "L") {
        return "";
      }
      if (nova_direcao == "N") {
        return "E";
      }
    }

    if (this.direcao == "N") {
      if (nova_direcao == "S") {
        return "EE"; // gira 180 graus, tanto faz a direção
      }
      if (nova_direcao == "O") {
        return "E";
      }
      if (nova_direcao == "L") {
        return "D";
      }
      if (nova_direcao == "N") {
        return "";
      }
    }
  }
}

//module.exports = Robo;
