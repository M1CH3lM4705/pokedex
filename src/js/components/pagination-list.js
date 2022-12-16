import cards from './cards.js'

const paginationCards = ({ pagination, getPokemons }) => {
    
    const { insertPokemonsInDom } = cards();
    const paginationInit =  e => {
            e.preventDefault();
            const { target } = e;
            const paginateValue = target.dataset.pagination;

            pagination(paginateValue);
            insertPokemonsInDom({ getPokemons });
    }

    return {
        paginationInit
    }
}

export default paginationCards;