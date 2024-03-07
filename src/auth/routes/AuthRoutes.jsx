import { Routes, Route, Navigate } from "react-router";
import {LoginPage, RegisterPage} from '../pages'

export const AuthRoutes = () => {
    return (
        <Routes>
            
            <Route path="login"  element= {<LoginPage/>} />
            <Route path="register"  element= {<RegisterPage/>} />
            {/* navigate to login if the path is any other  */}
            <Route path="/*" element={ <Navigate to = "/auth/login"/>}/>
            
        </Routes>
    )
};