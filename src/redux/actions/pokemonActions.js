import axios from 'axios';
import * as actions from '../constants/actionTypes';

export function fetchPokemons(page) {
    return dispatch => {
        dispatch(fetchPokemonsRequest());
        return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${(page*20)-20}`)
            .then(response => {
                dispatch(fetchPokemonsSuccess(response.data.results, response.data.count, page));
            })
            .catch(error => {
                dispatch(fetchPokemonsFailure());
            });
    }
}
function fetchPokemonsRequest() {
    return {
        type: actions.FETCH_POKEMONS_REQUEST,
    }
}
export function fetchPokemonsSuccess(pokemons, count, page) {
    return {
        type: actions.FETCH_POKEMONS_SUCCESS,
        pokemons,
        pagesTotal: Math.ceil(count/20),
        page
    }
}
function fetchPokemonsFailure(error) {
    return {
        type: actions.FETCH_POKEMONS_FAILURE,
    }
}

export function getPokemon(name) {
    return dispatch => {
        dispatch(getPokemonRequest());
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                dispatch(getPokemonSuccess(response.data));
            })
            .catch(error => {
                dispatch(getPokemonFailure());
            });
    }
}
function getPokemonRequest() {
    return {
        type: actions.GET_POKEMON_REQUEST,
    }
}
export function getPokemonSuccess(pokemon) {
    return {
        type: actions.GET_POKEMON_SUCCESS,
        pokemon
    }
}
function getPokemonFailure(error) {
    return {
        type: actions.GET_POKEMON_FAILURE,
    }
}