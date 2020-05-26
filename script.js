const activateNAv = () => {
    document.querySelector(".link-container").classList.toggle("nav-link-show");

    document.querySelector(".burger").classList.toggle("toggle");
}

const fullProgressBar = () => {
    document.querySelector(".progress").style.width = "100%";
}

const emptyProgressBar = () => {
    document.querySelector(".progress").style.width = "7%";
}
document.querySelector(".burger").addEventListener("click", activateNAv)

document.querySelector(".findacar").addEventListener("mouseenter", fullProgressBar);
document.querySelector(".findacar").addEventListener("mouseleave", emptyProgressBar)
