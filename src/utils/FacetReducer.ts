
enum FACET_ACTION{
    "SELECT",
    "DESELECT",
    "CLEAR_ALL"
    
}


const FacetReducer=(state,action)=>{
    switch(action.type){
        case FACET_ACTION.SELECT:{
            return [...state,action.payload.value]
        }
        
        case FACET_ACTION.DESELECT:{
            const filteredArray=state.filter((ele)=>ele!==action.payload.value)
            return filteredArray
        }
        
        
        case FACET_ACTION.CLEAR_ALL:{
            return []
        }
        default:{
            throw Error("Unknown action type for facet")
        }

    }
}


export {FacetReducer,FACET_ACTION}