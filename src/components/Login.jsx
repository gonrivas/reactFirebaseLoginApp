import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const registrarUsuario = (e)=>{
      e.preventDefault()
      try{
        createUserWithEmailAndPassword(auth,email,pass)
        alert('usuario registrado')
      }catch (e){
        console.log(e)
      }
  }


  return (
    <div className="row mt-3">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={registrarUsuario} className="form-group">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            placeholder="Introduce el email"
            type="text"
          />
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="form-control mt-3"
            placeholder="Introduce la contraseña"
            type="password"
          />
          <input
            className="btn btn-dark mt-3 w-100"
            value="Registrar Usuario"
            type="submit"
          />
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
