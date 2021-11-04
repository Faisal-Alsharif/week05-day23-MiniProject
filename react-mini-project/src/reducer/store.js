import { createStore, combineReducers } from "redux";

import videosReducer from "./videos/reducer";

// combineReducers takes reducers and combine them to save them in the store
const myReducer = combineReducers({videosReducer});

// here we store the reducer
const store = createStore(myReducer);

export default store;