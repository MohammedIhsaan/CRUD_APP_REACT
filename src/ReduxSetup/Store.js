import { createStore } from "redux";
import CombineReducer from "./Reducer/CombineReducer";


const store = createStore(CombineReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store