var matriz = [];
var nrlinhas;
var nrcolunas;
var i;
var x;
var matriz_I = [];
var nrcolunas_I;
var nrlinhas_I;
var j;
var k;
var matriz_II = [];
var passa_valor;
var l;
var m;
var coluna = x;
var coluna_I = k;
var a_m = prompt("Você quer que a matriz seja manual(1) ou aleatória(2)");
var aleatorio;
Math.round(aleatorio);



if(a_m == 1){
//leitura de dados 

nrlinhas = parseInt(prompt('Digite o número de linhas'));
nrcolunas = parseInt(prompt('Digite o número de colunas'));

nrlinhas_I = parseInt(prompt('Digite o número de linhas para a segunda matriz'));
nrcolunas_I = parseInt(prompt('Digite o número de colunas para a segunda matriz'));

for(i = 0; i < nrlinhas; i++){
    matriz.push([nrlinhas]);
    for(x = 0; x < nrcolunas; x++){
        matriz[i][x] = parseInt(prompt("Digite a linha " + i + " coluna " + x));
    }
}
//leitura de dados2

for(j = 0; j < nrlinhas_I; j++){
    matriz_I.push([nrlinhas_I]);
    for(k = 0; k < nrcolunas_I; k++){
        matriz_I[j][k] = parseInt(prompt("Digite a linha " + j + " coluna " + k));
    }
}
//mostrar os dados

document.write("<table border = 1 id='place'>");
for(i = 0; i < matriz.length; i++) {
    var linha = "<tr>";
    for(x = 0; x < matriz[i].length; x++){
        linha = linha + "<td>" + matriz[i][x] + "</td>"; 
    }
linha = linha + "</tr>";
document.write(linha);
}
document.write("</table>");

//espaço

document.write("</br>");
document.write("<h2> X </h2>");
document.write("</br>");

//mostrar os dados2

document.write("<table border = 1 id='place'>");
for(j = 0; j < matriz_I.length; j++) {
    var linha_I = "<tr>";
    for(k = 0; k < matriz_I[j].length; k++){
        linha_I = linha_I + "<td>" + matriz_I[j][k] + "</td>"; 
    }
linha_I = linha_I + "</tr>";
document.write(linha_I);
}
document.write("</table>");

document.write("</br>");
document.write("<h2> = </h2>");
document.write("</br>");


}else if(a_m == 2){

  //dados
nrlinhas = parseInt(prompt('Digite o número de linhas'));
nrcolunas = parseInt(prompt('Digite o número de colunas'));

nrlinhas_I = parseInt(prompt('Digite o número de linhas para a segunda matriz'));
nrcolunas_I = parseInt(prompt('Digite o número de colunas para a segunda matriz'));

for(i = 0; i < nrlinhas; i++){
    matriz.push([nrlinhas]);
    for(x = 0; x < nrcolunas; x++){
      matriz[i][x] = Math.floor(Math.random(aleatorio) * 10 + 1);
    }
}
document.write("<table border = 1 id='place'>");
for(i = 0; i < matriz.length; i++) {
    var linha = "<tr>";
    for(x = 0; x < matriz[i].length; x++){
        linha = linha + "<td>" + matriz[i][x] + "</td>"; 
    }
linha = linha + "</tr>";
document.write(linha);
}
document.write("</table>");

document.write("</br>");
document.write("<h2> X </h2>");
document.write("</br>");


//impressão

for(j = 0; j < nrlinhas_I; j++){
  matriz_I.push([nrlinhas_I]);
  for(k = 0; k < nrcolunas_I; k++){
    matriz_I[j][k] = Math.floor(Math.random(aleatorio) * 10 + 1);
  }
}

document.write("<table border = 1 id='place' >");
for(j = 0; j < matriz_I.length; j++){
    var linha_I = "<tr>";
    for(k = 0; k < matriz_I[j].length; k++){
        linha_I = linha_I + "<td>" + matriz_I[j][k] + "</td>"; 
    }
linha_I = linha_I + "</tr>";
document.write(linha_I);
}
document.write("</table>");

document.write("</br>");
document.write("<h2> = </h2>");
document.write("</br>");

}

//multiplicação
if(matriz[0].length == matriz_I.length ){
document.write("<table border = 1 id='place'>");
for(i = 0; i < matriz.length; i++) {
    var linha = "<tr>";
    for(x = 0; x < matriz_I[i].length; x++){
      var valor = 0;
      for(var y = 0; y < matriz[i].length; y++){
          
        valor +=  matriz[i] [y] * matriz_I[y] [x];  
    }
        linha = linha + "<td>" + valor + "</td>"; 
    }
linha = linha + "</tr>";
document.write(linha);
}
document.write("</table>");

}else{
  document.write("Matriz impossível");
}
