import { Box, Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBar = ({ drawerWith }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}>

            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    width: drawerWith
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'> Nicolas Rodriguez </Typography>
                </Toolbar>

                <List>
                    {
                        ['Primero','Segundo','Tercero','Ciuarto','QUinto','Sexto'].map(text => (
                            <ListItem key = { text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <ListItemText primary= {text}
                                                  secondary ='Descripcion'/>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>


            </Drawer>
        </Box>
    )
}
