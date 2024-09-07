export const actionUserName = () => (dispatch) => {
    setTimeout(() => { 
        return dispatch({ type: "CHANGE_USER", value: "Muhammad Rifal" })
    }, 2000); 
}