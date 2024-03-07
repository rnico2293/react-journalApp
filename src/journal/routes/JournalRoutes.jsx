import { Route,Routes, Navigate } from 'react-router';
import {HomePage} from '../pages/index'

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element= {< HomePage />} />
            <Route path="/*" element= { <Navigate to="/" /> } />
        </Routes>
    )
}
