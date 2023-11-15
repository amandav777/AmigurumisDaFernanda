var RolarAbaixoGaleria = document.getElementById('galeriaBotao');
const Galeria = document.getElementById('galeria');

RolarAbaixoGaleria.addEventListener('click', function() {
    // Role a página até a parte desejada.
    Galeria.scrollIntoView({ behavior: 'smooth' }); // Use 'smooth' para uma rolagem suave ou 'auto' para uma rolagem instantânea.
});

var RolarAbaixoContato = document.getElementById('infos');
const Contato = document.getElementById('formularioContato');

RolarAbaixoContato.addEventListener('click', function() {
    // Role a página até a parte desejada.
    Contato.scrollIntoView({ behavior: 'smooth' }); // Use 'smooth' para uma rolagem suave ou 'auto' para uma rolagem instantânea.
});








const MudarFotoNico = document.getElementById('nico');

MudarFotoNico.addEventListener('click', function() {
    // Obtenha a imagem atual
    const imagemNico = document.getElementById('nico');

    // Verifique qual imagem atual está sendo exibida e altere para a imagem desejada
    if (imagemNico.src.endsWith('Nico.png')) {
        imagemNico.src = 'Rodholfo.png'; // Substitua 'imagem2.jpg' pela nova imagem desejada
    } else {
        imagemNico.src = 'Rodholfo.png'; // Substitua 'imagem1.jpg' pela imagem original
    }
});

const MudarFotoAbel = document.getElementById('abel');

MudarFotoAbel.addEventListener('click', function() {
    // Obtenha a imagem atual
    const imagemAbel = document.getElementById('abel');

    // Verifique qual imagem atual está sendo exibida e altere para a imagem desejada
    if (imagemAbel.src.endsWith('abel.png')) {
        imagemAbel.src = 'Rodholfo.png'; // Substitua 'imagem2.jpg' pela nova imagem desejada
    } else {
        imagemAbel.src = 'Rodholfo.png'; // Substitua 'imagem1.jpg' pela imagem original
    }
});



