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
                     console.log('payload:' ,action.payload)
                    let filterData = state.Data.filter((item,i)=>action.payload.firstName !== item.firstName) 
                    if(filterData.length===0){
                        filterData.push({firstName:"No user to view"})
                    }
                    let removed = state.Data.splice(0,1,filterData[0])
                    console.log('filterDAta:',filterData,'state',state, 'removed',removed)   
                    return state ;
                 case ActionTypes.EditUser :
                     console.log(action.payload)
                   let updated=  state.Data.map(item=>{
                       if(action.payload.oldname===item.firstName){
                           item.firstName = action.payload.firstName
                           item.lastName = action.payload.lastName
                       }
                       return item
                   }) 
                    console.log('hi', updated)   
                    return state ;
                default:
                    return state
             }
}

export default Reducer