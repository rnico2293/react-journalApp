import {Box} from "@mui/system";
import {NavBar,SideBar} from "../components";
import { Toolbar } from "@mui/material";


const drawerWith = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display:'flex'}}>

            {/* NavBar */}
            <NavBar drawerWith = { drawerWith } />
            
            {/* SideBar */}
            <SideBar drawerWith = { drawerWith } />

            <Box 
            component='main'
            sx  = {{flexGrow: 1,p: 0}}
            >
                { children }
            </Box>
            
        </Box>
    )
}
