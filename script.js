// SLIDERS

var RolarAbaixoGaleria = document.getElementById('galeriaBotao');
const Galeria = document.getElementById('galeria');

RolarAbaixoGaleria.addEventListener('click', function() {
    // Role a página até a parte desejada.
    Galeria.scrollIntoView({ behavior: 'smooth' }); // Use 'smooth' para uma rolagem suave ou 'auto' para uma rolagem instantânea.
});

var RolarAbaixoContato = document.getElementById('infos');
const Contato = document.getElementById('informacoes');

RolarAbaixoContato.addEventListener('click', function() {
    // Role a página até a parte desejada.
    Contato.scrollIntoView({ behavior: 'smooth' }); // Use 'smooth' para uma rolagem suave ou 'auto' para uma rolagem instantânea.
});


// TROCADOR DE FOTOS

var nicoInicial = "./imagens/Nico.png";
var nicoFinal = "./imagens/NicoDois.png";

function trocarNico(){
    document.getElementById("nico").src = nicoInicial;
    let aux = nicoInicial;
    nicoInicial = nicoFinal;
    nicoFinal = aux;
}


var abelInicial = "./imagens/Abel.png";
var abelFinal = "./imagens/AbelDois.png";

function trocarAbel(){
    document.getElementById("abel").src = abelInicial;
    let aux = abelInicial;
    abelInicial = abelFinal;
    abelFinal = aux;
}


var arturaInicial = "./imagens/Artura.png";
var arturaFinal = "./imagens/ArturaDois.png";

function trocarArtura(){
    document.getElementById("artura").src = arturaInicial;
    let aux = arturaInicial;
    arturaInicial = arturaFinal;
    arturaFinal = aux;
}


var rodholfoInicial = "./imagens/Rodholfo.png";
var rodholfoFinal = "./imagens/RodholfoDois.png";

function trocarRodholfo(){
    document.getElementById("rodholfo").src = rodholfoInicial;
    let aux = rodholfoInicial;
    rodholfoInicial = rodholfoFinal;
    rodholfoFinal = aux;
}


var thomasInicial = "./imagens/Thomas.png";
var thomasFinal = "./imagens/ThomasDois.png";

function trocarThomas(){
    document.getElementById("thomas").src = thomasInicial;
    let aux = thomasInicial;
    thomasInicial = thomasFinal;
    thomasFinal = aux;
}

var biaInicial = "./imagens/Bia.png";
var biaFinal = "./imagens/BiaDois.png";

function trocarBia(){
    document.getElementById("bia").src = biaInicial;
    let aux = biaInicial;
    biaInicial = biaFinal;
    biaFinal = aux;
}

// Dino
var dinoInicial = "./imagens/Dino.png";
var dinoFinal = "./imagens/DinoDois.png";

function trocarDino() {
    document.getElementById("dino").src = dinoInicial;
    let aux = dinoInicial;
    dinoInicial = dinoFinal;
    dinoFinal = aux;
}

// Fofo
var fofoInicial = "./imagens/Fofo.png";
var fofoFinal = "./imagens/FofoDois.png";

function trocarFofo() {
    document.getElementById("fofo").src = fofoInicial;
    let aux = fofoInicial;
    fofoInicial = fofoFinal;
    fofoFinal = aux;
}

// Leo
var leoInicial = "./imagens/Leo.png";
var leoFinal = "./imagens/LeoDois.png";

function trocarLeo() {
    document.getElementById("leo").src = leoInicial;
    let aux = leoInicial;
    leoInicial = leoFinal;
    leoFinal = aux;
}

// Maria
var mariaInicial = "./imagens/Maria.png";
var mariaFinal = "./imagens/MariaDois.png";

function trocarMaria() {
    document.getElementById("maria").src = mariaInicial;
    let aux = mariaInicial;
    mariaInicial = mariaFinal;
    mariaFinal = aux;
}

// Naninha
var naninhaInicial = "./imagens/Naninha.png";
var naninhaFinal = "./imagens/NaninhaDois.png";

function trocarNaninha() {
    document.getElementById("naninha").src = naninhaInicial;
    let aux = naninhaInicial;
    naninhaInicial = naninhaFinal;
    naninhaFinal = aux;
}

// Polvo
var polvoInicial = "./imagens/Polvo.png";
var polvoFinal = "./imagens/PolvoDois.png";

function trocarPolvo() {
    document.getElementById("polvo").src = polvoInicial;
    let aux = polvoInicial;
    polvoInicial = polvoFinal;
    polvoFinal = aux;
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Mostra ou oculta o botão com base na rolagem
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  // Rola suavemente para o topo da página
  document.body.scrollTop = 0; // Para navegadores da web
  document.documentElement.scrollTop = 0; // Para Safari e Edge
}