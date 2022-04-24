import { combineReducers } from "redux";

import users from "./users/reducer";
import carrinho from "./carrinho/reducer";

export default combineReducers({
    users,
    carrinho
});