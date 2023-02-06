
var slides = document.querySelectorAll(".fundo");

var setaEsquerda = document.getElementById("setaesquerda");

var setaDireita = document.getElementById("setadireita");

var slideAtual = 0;

setaDireita.addEventListener('click', ()=>{

   if (slideAtual === slides.length - 1){ return;}

      slideAtual++;
  
   esconderImagemAberta();
   mostrarImagem();
   mostrarOuEsconderSetas();
})

setaEsquerda.addEventListener('click', ()=>{

   if (slideAtual === 0){ return;}

      slideAtual--;
  
   esconderImagemAberta();
   mostrarImagem();
   mostrarOuEsconderSetas();
})



function esconderImagemAberta(){

   slides[slideAtual].classList.remove("mostrar");

}

function mostrarOuEsconderSetas(){

   const naotanocomeco = imagemAtual !== 0;
   if(naotanocomeco){
      setaEsquerda.classList.remove('esqapagada');
   }
   else{
      setaEsquerda.classList.add('esqacesa');
   }

   const tanofim = imagemAtual !==0 && imagemAtual === slides.length - 1; 
   if(tanofim){
      setaDireita.classList.remove('diracesa');
   }
   else{
      setaDireita.classList.remove('dirapagada');
   }
}

function mostrarImagem(){

   slides[imagemAtual].classList.add("mostrar");
}