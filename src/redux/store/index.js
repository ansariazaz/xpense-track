import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expense";
const reducer = combineReducers({
    expenses:expenseReducer,
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;