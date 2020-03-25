import { createStore,combineReducers} from 'redux'
import  dialogReducer from '../reduses/dialods-reducer'
import postReducer from '../reduses/post-reducer'
import SearchUserReducer from '../reduses/search-reducer'
import authReducer from '../reduses/auth-reducer'

let rootReducer = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:postReducer,
    findUsersPage:SearchUserReducer,
    auth:authReducer
})



let store = createStore(rootReducer)

export default store;
