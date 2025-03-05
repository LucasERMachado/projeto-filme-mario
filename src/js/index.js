const botaoTrailer = document.querySelector(".botao-trailer");  
const modal = document.querySelector(".modal");
const botaoFecharTrailer = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () =>{

    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharTrailer.addEventListener("click", () =>{

    alternarModal();
    video.setAttribute("src", "");

});



