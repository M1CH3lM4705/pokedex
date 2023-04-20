import card from "./card-pokemon.js"

const loader = 'https://weichiachang.github.io/pokemon-master/img/loading.45600eb9.gif'
const cards = () => {
    const insertPokemonsInDom = async ({ getPokemons }) => {
        const cards = document.querySelector('[data-js="cards"]')
        cards.innerHTML = `<img class="loader" src="${loader}" />` 
        const pokemons = await getPokemons()
        if(!pokemons) return
        
        cards.innerHTML = pokemons.map(({ name, image, types }) => 
                                card(name, image, types)).join('')
    }

    return { 
        insertPokemonsInDom
    }
}

export default cards;