import ActionTypes from "../ActionTypes"

const initailState = {
    Data : [
        {firstName: "Mohammed",
        lastName: "Ihsaan",
        }
    ]
}
const Reducer = (state=initailState,action)=>{
             switch(action.type){
                 case ActionTypes.AddUser :
                 state.Data.push(action.payload)    
                 return state ;
                 case ActionTypes.RemoveUser :
                     return {...state,Data : action.payload};
                 case ActionTypes.EditUser :
                     return {...state,Data : action.payload};
                default:
                    return state
             }
}

export default Reducer