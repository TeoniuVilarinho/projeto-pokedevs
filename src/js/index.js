const listaSelecaoPokedevs = document.querySelectorAll('.pokedev')

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener('click', () => {
        esconderCartaoPokedev()
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev)
        desativarPokedevListagem()
        ativarPokedevListagem(idPokedevSelecionado)
    })
})

function ativarPokedevListagem(idPokedevSelecionado) {
    const pokedevSelecionadoListagem = document.getElementById(idPokedevSelecionado)
    pokedevSelecionadoListagem.classList.add('ativo')
}

function desativarPokedevListagem() {
    const pokedevAtivoListagem = document.querySelector('.ativo')
    pokedevAtivoListagem.classList.remove('ativo')
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value
    const idCartaoPokedevParaAbrir = 'cartao-' + idPokedevSelecionado
    const cartaoPokedevParaAbrir = document.getElementById(idCartaoPokedevParaAbrir)
    cartaoPokedevParaAbrir.classList.add('aberto')
    return idPokedevSelecionado
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto')
    cartaoPokedevAberto.classList.remove('aberto')
}