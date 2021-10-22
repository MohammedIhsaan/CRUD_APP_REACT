import ActionTypes from "./ActionTypes";

export const AddUser = (data)=>{
    return {
        type:ActionTypes.AddUser,
        payload: data
    }
}
export const RemoveUser = (data)=>{
    return {
        type:ActionTypes.RemoveUser,
        payload: data
    }
}
export const EditUser = (data)=>{
    return {
        type:ActionTypes.EditUser,
        payload: data
    }
}