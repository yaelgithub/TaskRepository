import {produce} from 'immer';
import createReducer from './ReducerUtils';

const initialState={
   
    user:{
        _id:'',
        name:'',
        email:'',
        password:'',
        token:'',
        // tasks:[{}]
    }
}
 debugger;
const userHandlers={
    setStoreUser(state,action){
        //const user= JSON.stringify(action.payload.user)
        console.log('from set store ',action.payload.user);
        //.user.name["user"][0].name
        state.user._id=action.payload.user._id
        state.user.name=action.payload.user.name
        state.user.password=action.payload.user.password
        state.user.email=action.payload.user.email
        state.user.token=action.payload.user.token
        // state.user.tasks=action.payload.user.tasks
    }
}
export default produce((state,action)=>createReducer(state,action,userHandlers),initialState);
