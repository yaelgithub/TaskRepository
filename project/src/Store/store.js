import {createStore,combineReducers} from 'redux';
import userReducer from './Reducers/User'


// function reducer(state,action){
//     debugger
//     return {
//         user: userReducer(state.user,action)
//     }
// }
 const reducer=combineReducers({userReducer})


 const store=createStore(reducer)

window.store=store
export default store
