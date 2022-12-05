/*
Entender situações do cotidiano… para tomada de decisão 
Elabore um algoritmo que possa descobrir, através de perguntas 
e respostas, em qual área de um restaurante uma pessoa ou grupo
de pessoas precisa ser alocada. O restaurante tem três áreas: 
térreo, 1ro andar, e área externa. Clientes fumantes ou com 
animais de estimação precisam ser alocadas na área externa. 
Grupos de 5 ou mais precisam ser alocados no 1ro andar, pois
não dá para juntar mesas no térreo. Qualquer outro grupo de 
pessoas pode ser alocado no térreo. 
*/

//Grupos(Primeiro Andar)
//Animais(Área Externa)
//Fumantes(Área Externa)
//Grupos de 2 a 4(Térrio)




//# VARIÁVEIS

var Animais = false;
var Fumantes = false;
var grupo;
contfu, contani= String;

//# COLETA DE DADOS

Escreva('Qual a quantidade de pessoas?');
leia = grupo;    

Escreva('São fumantes? s/n');
leia = contfu;    

se(contfu == 's'){
    Fumantes == true;
}

Escreva('Estão acompanhado com animais? s/n');  
leia = contani;  

//# ESTRUTURA DE DECISÃO

se (contani == 's'){
    Animais == true;
}
    
se (grupo >= 1 && grupo <= 4){
    Escreva('Por favor, siga para o Térreo');
}
senão (grupo >=5){
    Escreva('Por favor, siga para o 1° Andar!');
}

se ((Animais == true) || (Fumantes == true)){
    Escreva('Siga para a Ára Externa!');
}    
fimse

     





