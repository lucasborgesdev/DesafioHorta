const Posicao = require("./Posicao.class.js");

const Robo = class Robo extends Posicao.posicao {
  constructor(posicao, direcao) {
    super(posicao, direcao);
    this.posicao = new Posicao.posicao().constroi_atraves_string(posicao);
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

  caminhar_para(nova_posicao) {
    console.log("Iniciou uma nova viagem!");
    //let direcao_para = new Posicao.posicao().direcao_para(nova_posicao);
    let proxima_acao = new Posicao.posicao().direcao_para(nova_posicao);
    //let proxima_acao = this.posicao.direcao_para(nova_posicao);
    console.log(proxima_acao);
    this.virar_para(proxima_acao);
    console.log("A posição deveria ser igual a nova_posicao!");
    console.log(this.posicao);
    console.log(nova_posicao);
  }
};

module.exports = { Robo };
