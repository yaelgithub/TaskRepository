function convertActionTypeToName(actionType) {
    //actions.'SET_STORE_USER' => setStoreUser 
    return actionType.toLowerCase().replace(/_(\w)/g,v=>v[1].toUpperCase());
}


export default function createReducer(state,action,handlers){
    //const key=convertActionTypeToName(action.type);
    const key=action.type;
    const handler=handlers[key];//handlers=>user.json
    
    if(handler){
        console.log('from reducer utils ',action.type);
        handler(state,action)//שהתקבל action מפעיל את הפונקציה המתאימה ל 
    }
}