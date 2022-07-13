import React from "react";
import { app } from "./fb";
import './styles.css'
import Form from "./components/Form";

const SignIn = ({isRegistrando, setIsRegistrando, setUsuario}) => {

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        //Ver por consola que respuesta da y manejar una respuesta erronea para
        //comunicarle al usuario que no esta en la DB
        console.log("sesión iniciada con:", usuarioFirebase.user);
        setUsuario(usuarioFirebase);
      })
      .catch(err => {
        console.log(err)
        alert(`No existe ningun usuario con esos datos. Debes registrarte primero`)
      })
      ;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    //Pasar estilos de iniciar sesion
    <Form text="Inicia sesión" submitHandler={submitHandler} style='SignIn'>
        <button onClick={() => setIsRegistrando(!isRegistrando)} className='mb-5 btn btn-secondary d-block'>
        ¿No tienes cuenta? ¡Regístrate gratis!
        </button>
    </Form>
  );
};

export default SignIn;