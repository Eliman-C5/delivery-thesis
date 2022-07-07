import React from "react";
import { app } from "./fb";
import './styles.css'
import SignUp from './SignUp'
import SignIn from "./SignIn";

const Logueo = ({setUsuario}) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  return (
    <div className="total">
      {
        isRegistrando ? 
        <SignUp 
          isRegistrando={isRegistrando} 
          setIsRegistrando={setIsRegistrando} 
          setUsuario={setUsuario}
        /> : 
        <SignIn 
          isRegistrando={isRegistrando} 
          setIsRegistrando={setIsRegistrando} 
          setUsuario={setUsuario} 
        />
      }
    </div>
  );
};

export default Logueo;