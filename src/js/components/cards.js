import card from "./card-pokemon.js"

const cards = () => {

    const insertPokemonsInDom = async ({ getPokemons }) => {
        const cards = document.querySelector('[data-js="cards"]')
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