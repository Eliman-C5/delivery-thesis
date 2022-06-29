
import React from "react";
import { app } from "./fb";
import './styles.css'

const Logueo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div className="login-styles">

        <form onSubmit={submitHandler} className='mx-auto form-style' >
            <h1 className="text-center mb-3"> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>

            <div className="mb-3">
                <label for="emailField" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailField" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="passwordField" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordField" />
            </div>
            
            <button type="submit" class='btn btn-primary mb-3' className="mb-3 btn btn-primary d-block">
                {" "}
                {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
            </button>

            <button onClick={() => setIsRegistrando(!isRegistrando)} className='mb-5 btn btn-secondary d-block'>
            {isRegistrando
            ? "¿Ya tienes cuenta? ¡Inicia sesión"
            : "¿No tienes cuenta? ¡Regístrate gratis!"}
            </button>

            <h2 className="text-center">A TU PUERTA</h2>
        </form>

    </div>
  );
};

export default Logueo;