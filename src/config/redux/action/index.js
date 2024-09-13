import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const actionUserName = () => (dispatch) => {
    setTimeout(() => { 
        return dispatch({ type: "CHANGE_USER", value: "Muhammad Rifal" })
    }, 2000); 
}

export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: "CHANGE_LOADING", value: true});
    return (
        createUserWithEmailAndPassword(getAuth(), data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            }).finally(() => {
                dispatch({type: "CHANGE_LOADING", value: false});
            }) 
    )
}