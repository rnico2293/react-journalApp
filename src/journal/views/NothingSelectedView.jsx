import { Typography, Grid } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
    return (
        <Grid
        container
        spacing= {0}
        alignItems="center"
        justifyContent="center"
        sx = {{ minHeight:'180vh', backgroundColor:'primary.main', borderRadius: 3}}
        >
            <Typography variant='h3' sx = {{color: 'white'}} >
                Selecciona o crea una entrada para el diario.
            </Typography>
            <Grid item xs={ 5 }> 
                <StarOutline sx = {{color: 'white', ml: '47%', fontSize: 100}} />
            </Grid>
        </Grid>
    )
}
