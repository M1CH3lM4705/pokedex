import cards from '../js/components/cards.js'
import paginationCards from './components/pagination-list.js'
import factoryPokemon from '../js/services/pokedesx.js'
const paginated = document.querySelector('.pagination')
const pokedex = factoryPokemon()

const { insertPokemonsInDom } = cards();
const { paginationInit } = paginationCards(pokedex);

paginated.addEventListener('click', paginationInit)
insertPokemonsInDom(pokedex)