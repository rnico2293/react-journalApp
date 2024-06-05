import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks';

const formData = {
  displayName:'' , 
  email: 'rnico2293@gmail.com',
  pass: 'react',
}

const formValidation = {
  email: [ (value) => value.includes('@'), 'El email debbe tener arroba @'],
  pass: [ (value) => value.length >= 3, 'la contraseña debe tener mas de 3 digitos'],
  displayName: [ (value) => value.length <= 1, 'lel nombre es requerido'],
}

export const RegisterPage = () => {


  const { formState, displayName, email, pass, onInputChange,  
          isFormValid, isNameValid ,isEmailValid,isPassValid } = useForm(formData,formValidation);

  const onSubmit = (event) => { 
    event.preventDefault();
    console.log(formState);
    
  } 


  return (

    <AuthLayout title="Crear Cuenta">

      <form onSubmit= {onSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder='Ingrese su nombre'
              name='displayName'
              value = {displayName}
              onChange = {onInputChange}
              error = {!isNameValid}
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
              name = 'email'
              value = {email}
              onChange = { onInputChange}
              error = {!isEmailValid}
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
              name ="pass"
              value = {pass}
              onChange= {onInputChange}
              error = {!isPassValid}
              sx={{ my: 1 }}
              fullWidth
            >
            </TextField>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 2 }} justifyContent="center">
            <Grid item xs={6}>
              <Button type="submit" fullWidth variant='contained'>
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