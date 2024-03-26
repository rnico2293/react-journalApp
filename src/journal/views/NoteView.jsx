import { Grid, Typography, Button, TextField } from "@mui/material";
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/index'


export const NoteView = () => {
    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mt: 5 }}
        >

            <Grid item>
                <Typography fontSize={50} fontWeight='light' > coso coso  </Typography>
            </Grid>

            <Grid item sx={{ mt: 1 }}>
                <Button color="primary" sx={{ padding: 2, m: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mt: 1, mr: 1 }} />
                    <Typography sx={{ fontSize: 15, mt: 1 }} fontWeight='light' > Guardar  </Typography>
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    fullWidth
                    label="Titulo"
                    placeholder="Ingrese un titulo para su entrada en el diario"
                    sx={{ mb: 2 }}
                />
                <TextField
                    type="text"
                    fullWidth
                    placeholder="Qué sucedió hoy?"
                    multiline  // Habilita el modo de múltiples líneas
                    rows={5}  // Establece el número inicial de filas
                />
            </Grid>

            {/* Galeria de imagenes */}
                <ImageGallery />

        </Grid>
    )
}
