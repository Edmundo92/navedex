import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./rootReducer";

export const store = applyMiddleware(thunk)(createStore)(reducers);