document.querySelector(".burger").addEventListener("click", activateNAv)


function activateNAv(){
    document.querySelector(".link-container").classList.toggle("nav-link-show");

    document.querySelector(".burger").classList.toggle("toggle");
}


