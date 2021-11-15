import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduser from "./Profile-reduser";
import dialogReduser from "./Dialog-reduser";
import usersReduser from "./Users-reduser";
import authReduser from "./Auth-reduser";
import thunkMidleware  from  "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReduser from "./App-reduser";
import newsReduser from "./News-reduser";


let redusers = combineReducers({
    DialogPage: dialogReduser,
    ProfilePage: profileReduser,
    UsersPage: usersReduser,
    Auth: authReduser,
    form: formReducer,
    App: appReduser,
    NewsPage: newsReduser
});

let store = createStore (redusers, applyMiddleware(thunkMidleware));

export default store;