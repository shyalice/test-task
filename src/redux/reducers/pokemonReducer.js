import * as actions from "../constants/actionTypes";

export const initialState = {
    pokemons: [],
    page: 1,
    pagesTotal: null,
    chosenPokemon: null,
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.pokemons,
                count: action.count,
                pagesTotal: action.pagesTotal,
                page: action.page
            };
        case actions.GET_POKEMON_SUCCESS:
            return {
                ...state,
                chosenPokemon: action.pokemon
            };
        default:
            return state;
    }
};

export default pokemonReducer;