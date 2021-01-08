import { createStore } from 'redux';
import MyReducer from "./reducer/myReducer";
export const store = createStore(MyReducer);
