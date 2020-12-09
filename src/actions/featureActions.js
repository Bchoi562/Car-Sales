export const ADD_FEATURE = "ADD_FEATURE";
export const CLEAR_FEATURE = "CLEAR_FEATURE";


export const addFeature = feat => {
    return({type: ADD_FEATURE, payload:feat})
}


export const clearFeature = feat => {
    return({type:CLEAR_FEATURE, payload:feat})
}


