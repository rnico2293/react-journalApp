import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Grid,Typography } from "@mui/material";

export const NavBar = ({ drawerWith }) => {
    return (
        <>
            <AppBar
                position='fixed'
                sx={{ 
                    // width : { sm: `calc(100% - ${ drawerWith }px)` },
                    width : { sm: `calc(100% - 215px)` },
                  }}
                >
                <Toolbar>
                    <IconButton>
                        <MenuOutlined />
                    </IconButton>

                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant ='h6' noWrap component='div'> Journal App </Typography>
                    </Grid>

                    <IconButton>
                        <LogoutOutlined />
                    </IconButton>

                </Toolbar>

            </AppBar>
        </>
    )
}
