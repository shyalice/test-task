import * as actions from "../constants/actionTypes";

export const initialState = {
    pokemons: [],
    count: null,
    nextPage: null,
    prevPage: null,
    chosenPokemon: null,
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.pokemons,
                count: action.count,
                nextPage: action.next,
                prevPage: action.previous
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