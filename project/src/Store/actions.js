
function convertActionNameToType(actionName){
    //setStoreUser => SET_STORE_USER
    return actionName.replace(/([A-Z])/g,"_$1").toUpperCase();
}

export const actions= new Proxy(    
    {},//target
    {       
        get:function (target,prop){//prop => 'setStoreUser'  
            if(target[prop]===undefined)
            
            return function(args){      
                console.log('args',args);       
                return {
                    
                   // type:convertActionNameToType(prop),//prop => 'SET_ . . .'
                    type:prop,
                    payload: args//args => user
                }
            }
            else return target[prop]
        }
    }
)