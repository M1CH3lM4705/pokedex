const factoryPokemon = () => {
    let url = "https://pokeapi.co/api/v2/pokemon";
    let pNext;
    let pPrevious;

    const linkImage = id => 
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`

    const typesName = types => types.map(({type}) => type.name).join(' | ')

    const getParallelismPokemonsImageAsync = async results => 
        await Promise.all(results.map(async ({ name, url }) => {
        const { id, types } = await (await fetch(url)).json()

        return { 
            name, 
            image: linkImage(id),
            types: typesName(types) 
        }
    }))

    const setUrl = newUrl => url = newUrl 
    
    const pagination = value => {
        const Mapper_Pagination = {
            next:() => setUrl(pNext),
            previous:() => setUrl(pPrevious)
        }

        return Mapper_Pagination[value]()
    }

    const getPokemons = async () => {
        if(!url) return
        
        const pokedex = await fetch(url)
        const { results, next, previous } = await pokedex.json()
        pNext = next
        pPrevious = previous
        
        return await getParallelismPokemonsImageAsync(results)
    }

    return {
        getPokemons,
        pagination
    }
}

export default factoryPokemon;