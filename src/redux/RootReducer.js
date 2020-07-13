import {combineReducers} from "redux"
import userReducer from "./User/UserReducer"
import cartReducer from "./Cart/CartReducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import directoryReducer from "../components/Directory/DirectoryReducer"

const persistConfig ={
    key: "root",
    storage,
    whiteList:["cart"]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer (persistConfig, rootReducer)