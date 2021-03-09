import {combineReducers} from "redux";
import pokemon from "./pokemonReducer";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
    pokemon,
    loading
});

export default rootReducer;