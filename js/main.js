
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.google.com.br/");     //abre numa nova janela
    //window.location.href = "https://www.google.com.br/";  //abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma (n1 , n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));
/*


//alert(soma(5, 10));

/*
var d = new Date;
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay);
*/

/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);   
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
*/



/*
var frutas = [{nome:"maçã" , cor: "vermelho"},{nome:"uva" , cor: "roxo"}];
console.log(frutas);
alert(frutas[1].nome);
var fruta = {nome:"maçã" , cor: "vermelho"};
console.log(fruta.nome);
alert(fruta.cor);
var lista = ["maçã", "pera", "banana"];
lista.push("uva");
console.log(lista);
console.log(lista.toString());
//console.log(lista.join (" - ")); continua sendo String, não array porém separadas conforme quiser
//console.log(lista.toString()); tira Array, lista e transforma em string
//console.log(lista.reverse()); ao contrário na lista
//console.log(lista.length);
/*lista.pop() - para tirar o último ìtem da lista
lista.push("uva"); - inclui item na lista
var nome = " Edilene Lopes";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade " anos");
alert(idade + idade2)
console.log(nome);
console.log(n1 * n2);
console.log(frase);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão","Brasil"));*/
