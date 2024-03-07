import { Routes, Route } from "react-router";
import {AuthRoutes} from '../auth/routes/AuthRoutes';
import {JournalRoutes} from '../journal/routes/JournalRoutes';


export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro */}
            <Route path="/auth/*" element={ <AuthRoutes />} />
            
            {/* Paginas de la app */}
            <Route path="/*" element={ <JournalRoutes />} />
        </Routes>
    )
}
