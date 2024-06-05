import { checkingCredentials, logout, login } from "./authSlice";
import {signInWithGoogle} from '../../firebase/providers';


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {

        dispatch(checkingAuthentication ());
        const result =  await signInWithGoogle();
        if (!result.ok) return dispatch (logout(result.errorMessage)) ;    
        dispatch (login (result));    
    }
}