import {Box} from "@mui/system";
import {NavBar,SideBar} from "../components";

const drawerWith = 200;

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
