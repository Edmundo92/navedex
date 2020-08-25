import { combineReducers } from "redux";
import { LoginReducer } from "./account/login/reducer";
import { naverReducer } from "./navers/reducer";

// reducers

const rootReducer = combineReducers({
  login: LoginReducer,
  navers: naverReducer,
});

export default rootReducer;
