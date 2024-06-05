import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import {useForm} from '../../hooks/index';
import { useDispatch, useSelector } from 'react-redux';
import {useMemo} from 'react';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/thunks';


export const LoginPage = () => {

    const dispatch = useDispatch();

    const { status } = useSelector( state => state.auth);

    const isAuthenticating = useMemo( () => status === 'checking', [status]);

    const {email, pass, onInputChange} = useForm ({
        email: 'rnico2293@gmail.com',
        pass:'react',


    }) 

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({email, pass});
        dispatch(checkingAuthentication() );
        
    }

    const onGoogleSignIn =()=> {
        console.log("logeando con google");
        dispatch(startGoogleSingIn() );

        
    }

    return (

        <AuthLayout title="Login">

            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='Ingrese su correo'
                            sx={{ my: 1 }}
                            fullWidth
                            name="email"
                            value= {email}
                            onChange = {onInputChange}

                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='Ingrese su correo'
                            sx={{ my: 1 }}
                            fullWidth
                            name="pass"
                            value= {pass}
                            onChange = {onInputChange}
                        >
                        </TextField>
                    </Grid>

                    <Grid container spacing={1} sx={{ mb: 2 }} justifyContent="center">
                        <Grid item xs={6}>
                            <Button type="submit" fullWidth variant='contained'
                            disabled = {isAuthenticating}>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={6} >
                            <Button 
                            disabled = {isAuthenticating}
                            onClick = {onGoogleSignIn}
                            fullWidth variant='contained'>
                                <Google />
                                oogle
                            </Button>
                        </Grid>

                        <Grid container direction="row" justifyContent="end" >
                            <Link component={RouterLink} color='inherit' to="/auth/register" sx={{ my: 1 }}>
                                Crear nueva cuenta
                            </Link>
                        </Grid>

                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

    )
}