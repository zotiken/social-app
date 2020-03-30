import { createStore,combineReducers ,applyMiddleware} from 'redux'
import  dialogReducer from '../reduses/dialods-reducer'
import postReducer from '../reduses/post-reducer'
import SearchUserReducer from '../reduses/search-reducer'
import Thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import authReducer from '../reduses/auth-reducer'

let rootReducer = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:postReducer,
    findUsersPage:SearchUserReducer,
    auth:authReducer,
    form:formReducer
})



let store = createStore(rootReducer,applyMiddleware(Thunk))

export default store;
