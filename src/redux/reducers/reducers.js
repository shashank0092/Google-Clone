const intialValue=null;

export const changeSearch=(state=intialValue,action)=>{
    
    switch(action.type){
        case 'SEACRH VALUE':return action.payload;
        default:return state;
    }
}

