import * as actions from "../constants/actionTypes";

export const initialState = {
    pokemons: [],
    chosenPokemon: null,
    page: 1,
    pagesTotal: null
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.pokemons,
            };
        // case actions.GET_POKEMON_SUCCESS:
        //     return {
        //         ...state,
        //         pokemons: action.pokemon
        //     };
    }
    return state;
};

export default pokemonReducer;