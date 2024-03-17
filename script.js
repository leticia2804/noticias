<<<<<<< HEAD
const botaoAbrir = document.querySelector("header > button")
const buttonFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header.mobile")

botaoAbrir.addEventListener("click", abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}
=======
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
>>>>>>> 7ca9984b00eab3df1789b83a9a7cdc03685faa3c
