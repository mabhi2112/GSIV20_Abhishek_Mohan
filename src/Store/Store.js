import { createStore } from "redux";
// const state={allData:[]}
const movieReducer=(state={allData:[],displayDetails:false,displaySearch:false,detailsEl:null},action)=>{
    if(action.type==="displayList")
    {
        console.log(action.data.items)
        state.allData=action.data.items;
      return  state;
    }
    else if(action.type==="updateList")
    {
        console.log(action.data )
        state.allData=action.data;
      return  state;
    }
    else if(action.type==="displayDetails"){
        console.log(action.data)
        state.displayDetails=true;
     state.detailsEl=action.data
     return state;
    }
    return state;

}
const store=createStore(movieReducer);
export default store;