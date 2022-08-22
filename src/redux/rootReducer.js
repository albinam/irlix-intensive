import { combineReducers } from "redux";
import drinksReducer from "./reducers/drinksReducer";

const rootReducer = combineReducers({
    drinks: drinksReducer,
});

export default rootReducer;