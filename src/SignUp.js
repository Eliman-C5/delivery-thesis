import React from "react";
import { app } from "./fb";
import './styles.css'
import Form from "./components/Form";

const SignUp = ({isRegistrando, setIsRegistrando, setUsuario}) => {

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

  };

  return (
    //Pasar estilos de registrarse. Añadir un texto más.
    <Form text="Regístrate" submitHandler={submitHandler} style='SignUp'>
        <button onClick={() => setIsRegistrando(!isRegistrando)} className='mb-5 btn btn-secondary d-block'>
        ¿Ya tienes cuenta? ¡Inicia sesión
        </button>
    </Form>
  );
};

export default SignUp;