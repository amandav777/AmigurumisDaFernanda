const RolarAbaixo = document.getElementById('galeriaBotao');
const Galeria = document.getElementById('galeria');


RolarAbaixo.addEventListener('click', function() {
    // Role a página até a parte desejada.
    Galeria.scrollIntoView({ behavior: 'smooth' }); // Use 'smooth' para uma rolagem suave ou 'auto' para uma rolagem instantânea.
});




