const botaoabrir = document.querySelector ("header > button ")
const botaofechar = document.querySelector ("header nav button")

botaoabrir.addEventListener("click", abrirmenu)
botaofechar.addEventListener("click", fecharmenu)

const body = document.querySelector ("body")
const nav = document.querySelector ("header.mobile")

function abrirmenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharmenu () {
    body.classList.add ("escurecer")
    nav.classList.add ("abrir")
}
