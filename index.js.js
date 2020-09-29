/*
DesafioHorta
Programador | Teste Prático

A empresa Hortaliças e Hortaliças desenvolveu um robô que é programado para realizar a irrigação de uma horta a partir de algumas informações que são inseridas no mesmo. Considerando que todas as hortas são planas, e não possuem obstáculos que devem ser previstos pelo robô, as hortas possuem um tamanho X e Y e cada canteiro dentro da horta possui uma planta que deve ser irrigada.

Os comandos de movimento que são executados pelo robô são:

D para virar 90º para a direita

E para virar 90º para a esquerda

M para movimentar o robô

I ação de irrigação

Entrada de dados

O proprietário da horta deve informar o tamanho da horta (x e y) e a posição na qual o robô será inicialmente posicionado, neste caso deve considerar também para qual direção a face do robô está direcionada (norte - N, sul - S, leste - L ou oeste - O), essa direção vai indicar para onde o robô está caminhando, ou seja, se o robô estiver indo para o norte ele se deslocará da posição (x,y) para (x,y+1).

Após informar o tamanho da horta e a posição inicial do robô, deve-se informar quais canteiros o robô deve passar e irrigar (>= 1 sem limitação de qtde máxima de canteiros. A irrigação pode ser repetida em um mesmo canteiro).

O resultado que deve ser mostrado no final é uma STRING contendo os movimentos que devem ser realizados e a ação de irrigação (I) pelo robô para chegar no último canteiro indicado pelo usuário.

** A lógica para se percorrer o caminho é livre não necessariamente a utilizada neste exemplo, o importante é o resultado final - o robô não utiliza gasolina, nem energia, portanto o tamanho do caminho percorrido não é relevante.

** Plus: demonstrar o caminho e a irrigação realizados pelo robô na horta utilizando a string de resultado apresentada. Pode ser efetuado um movimento por segundo até o final do processo.

*/



//const modulo_posicao = require('./Posicao.js');

//*
class Posicao {
    constructor(linha, coluna) {
         this.l = linha;
         this.c = coluna;
    }

    distancia(outra_posicao) {
        return {
            distancia_eixo_vertical   : outra_posicao.l - this.l,
            distancia_eixo_horizontal : outra_posicao.c - this.c
        };
    };
    
    direcao_para(outra_posicao) {

        let d = this.distancia(outra_posicao);

        if (d.distancia_eixo_horizontal < 0) { // se é negativo, esta posição está mais pra esquerda
            return 'O';
        } else if (d.distancia_eixo_horizontal == 0) { // está na mesma posição do eixo
            // não precisa fazer nada
        } else { // se cair aqui, entao esta posição está mais pra direita
            return 'L';
        }

        if (d.distancia_eixo_vertical < 0) {
            return 'S';
        } else if (d.distancia_eixo_vertical > 0) {
            return 'N';
        } else {
            return 'I';
        }
    }

    test() {
        console.log('eu funciono!');
    }
}
//*/




const io = require('console-read-write');

async function main() {





    /* Disposição de 9 canteiros de exemplo.

        7|8|9
        4|5|6
        1|2|3
    */
    //                          L, C
    let canteiro1 = new Posicao(1, 1)
       ,canteiro2 = new Posicao(1, 2)
       ,canteiro3 = new Posicao(1, 3)

       ,canteiro4 = new Posicao(2, 1)
       ,canteiro5 = new Posicao(2, 2)
       ,canteiro6 = new Posicao(2, 3)

       ,canteiro7 = new Posicao(3, 1)
       ,canteiro8 = new Posicao(3, 2)
       ,canteiro9 = new Posicao(3, 3);

    //console.log(canteiro1.direcao_proximo_par(canteiro2));

    //*
    console.log(canteiro5.distancia(canteiro1));
    console.log(canteiro5.distancia(canteiro2));
    console.log(canteiro5.distancia(canteiro3));

    console.log(canteiro5.distancia(canteiro4));
    console.log(canteiro5.distancia(canteiro5)); 
    console.log(canteiro5.distancia(canteiro6));

    console.log(canteiro5.distancia(canteiro7));
    console.log(canteiro5.distancia(canteiro8));
    console.log(canteiro5.distancia(canteiro9));
    //*/
    //-------------------------------------------------


    console.log(canteiro5.direcao_para(canteiro1));
    console.log(canteiro5.direcao_para(canteiro2));
    console.log(canteiro5.direcao_para(canteiro3));

    console.log(canteiro5.direcao_para(canteiro4));
    console.log(canteiro5.direcao_para(canteiro5));    // I
    console.log(canteiro5.direcao_para(canteiro6));

    console.log(canteiro5.direcao_para(canteiro7));
    console.log(canteiro5.direcao_para(canteiro8));
    console.log(canteiro5.direcao_para(canteiro9));

   

    // Simple readline scenari

    let posicao_inicial = `${await io.ask('Posição inicial    : ')}`; // (3,2)
    let direcao = `${await io.ask('Orientação inicial : ')}`;          // N
    let canteiros = `${await io.ask('Canteiros a irrigar : ')}`;       // (4,1) (4,5) (3,4)

    
    var regex_par_ordenado = /\([^)]+\)/g;
    var result;
    while((result = regex_par_ordenado.exec(canteiros)) !== null) {

        // dado a posição atual do robo + direção, calcula a rota para proximo canteiro
        let linha = result[0].match(/(\d+),/)
        let coluna = result[0].match(/,(\d+)/)

        let pos = new Posicao(linha, coluna)
        console.log(pos);
    }
   

    
    //console.log();
    
    //canteiros.match(regex_par_ordenado)
    //console.log(qt_canteiros);
    //io.write(`hello ${await io.ask('Who are you?')}!`);
    
  


    /*
    let valor_x = `${await io.ask('Posição o valor de X    : ')}`; // |----|
    let valor_y = `${await io.ask('Posição o valor de Y    : ')}`; // I
    */

   /*let Par_ordenado(linha,coluna) = {
       linha: x,
       colina: y
   }

   let constructor = {
       Par
   }
    */

    /*function qt_canteiros(){
        let valor = `${await io.ask('Digite quantos canteiros voce vai cadastrar')}`;
        for(let x = 0; x < valor; i++ ){
            
        }
    } 
    */



    // le tamanho do mapa
    //console.log('Posição inicial    : ')
    //let posicao = prompt()
    //let posicao = readline() 

    //console.log('você digitou ' + posicao)

    // lê posição inicial do robô


    // lê direção inicial do robô



}

main();