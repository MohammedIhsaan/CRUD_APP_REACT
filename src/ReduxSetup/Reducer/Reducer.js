import ActionTypes from "../ActionTypes"

const initailState = {
    Data : [1,2,3]
}
const Reducer = (state=initailState,action)=>{
             switch(action.type){
                 case ActionTypes.AddUser :
                     return {...state,Data : action.payload};
                 case ActionTypes.RemoveUser :
                     return {...state,Data : action.payload};
                 case ActionTypes.EditUser :
                     return {...state,Data : action.payload};
                default:
                    return state
             }
}

export default Reducer