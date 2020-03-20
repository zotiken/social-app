import { createStore,combineReducers} from 'redux'
import  dialogReducer from '../reduses/dialods-reducer'
import postReducer from '../reduses/post-reducer'


let rootReducer = combineReducers({dialogsPage:dialogReducer})



let store = createStore(rootReducer)

export default store;