import {combineReducers} from "redux";
import pokemon from "./pokemonReducer";
import loading from "./loadingReducer";
import status from "./statusReducer";

const rootReducer = combineReducers({
    pokemon,
    loading,
    status
});

export default rootReducer;