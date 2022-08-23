const INITIAL_STATE = {
    data: [],
    error: ""
}

export const appReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case "LOAD_DATA":
            return {
                ...state,
                data: action.payload,
                error:"",
            }
        case "ERROR":
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state;
    }
}