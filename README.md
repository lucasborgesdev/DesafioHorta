# DesafioHorta
Programador | Teste Prático

A empresa Hortaliças e Hortaliças desenvolveu um robô que é programado para realizar a irrigação de uma horta a partir de algumas informações que são inseridas no mesmo. Considerando que todas as hortas são planas, e não possuem obstáculos que devem ser previstos pelo robô, as hortas possuem um tamanho X e Y e cada canteiro dentro da horta possui uma planta que deve ser irrigada.

Os comandos de movimento que são executados pelo robô são:

- D para virar 90º para a direita

- E para virar 90º para a esquerda

- M para movimentar o robô

- I ação de irrigação

Entrada de dados

O proprietário da horta deve informar o tamanho da horta (x e y) e a posição na qual o robô será inicialmente posicionado, neste caso deve considerar também para qual direção a face do robô está direcionada (norte - N, sul - S, leste - L ou oeste - O), essa direção vai indicar para onde o robô está caminhando, ou seja, se o robô estiver indo para o norte ele se deslocará da posição (x,y) para (x,y+1).

Após informar o tamanho da horta e a posição inicial do robô, deve-se informar quais canteiros o robô deve passar e irrigar (>= 1 sem limitação de qtde máxima de canteiros. A irrigação pode ser repetida em um mesmo canteiro).

O resultado que deve ser mostrado no final é uma STRING contendo os movimentos que devem ser realizados e a ação de irrigação (I) pelo robô para chegar no último canteiro indicado pelo usuário.

** A lógica para se percorrer o caminho é livre não necessariamente a utilizada neste exemplo, o importante é o resultado final - o robô não utiliza gasolina, nem energia, portanto o tamanho do caminho percorrido não é relevante.

** Plus: demonstrar o caminho e a irrigação realizados pelo robô na horta utilizando a string de resultado apresentada. Pode ser efetuado um movimento por segundo até o final do processo.

https://raw.githubusercontent.com/lucasborgesdev/DesafioHorta/master/desafio1.jpg
