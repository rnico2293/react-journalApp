import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (

    <AuthLayout title="Crear Cuenta">

      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder='Ingrese su nombre'
              sx={{ my: 1 }}
              fullWidth
            >
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Email'
              type='Email'
              placeholder='Ingrese su correo'
              sx={{ my: 1 }}
              fullWidth
            >
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Password'
              type='password'
              placeholder='Ingrese su contraseña'
              sx={{ my: 1 }}
              fullWidth
            >
            </TextField>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 2 }} justifyContent="center">
            <Grid item xs={6}>
              <Button fullWidth variant='contained'>
                Crear Cuenta
                </Button>
            </Grid>
            <Grid item xs={6} >
              <Button fullWidth variant='contained'>
                <Google />oogle
               </Button>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color='inherit' to="/auth/login" sx={{ mt: 1 }}>
                Volver
              </Link>
            </Grid>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}