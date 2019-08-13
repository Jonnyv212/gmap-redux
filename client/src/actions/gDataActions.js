export function setGData(gData){
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "GET_DATA",
                payload: gData
                //AXIOS PROMISE ON PAYLOAD
            });
        }, 2000)
    }
}

export function setDisplayComp(components){
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "DISPLAY_COMP",
                payload: components
            });
        }, 2000)
    }
}
// export function setDisplayComp(components){
//     return dispatch => {
//             dispatch({
//                 type: "DISPLAY_COMP",
//                 payload: components 
//         })
//     }
// }

