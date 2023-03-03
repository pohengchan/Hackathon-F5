import React, { useState, useEffect } from "react";
import { login } from "../../services/user.service";
import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, setUser] = useState(null);

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handleLogin = async (formData) => {
      const { data } = await login(formData);
      setUser(data);
      localStorage.setItem('token',data.token)
      localStorage.setItem('user_name',data.user.name)
      console.log(data);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      const formData = {
         email: email,
         password: password,
      };

      handleLogin(formData);
   };

   return (
      <div className="container_login_view">
         <form
            onSubmit={handleSubmit}
            style={{
               display: "flex",
               flexDirection: "column",
               gap: "1rem",
               maxWidth: "500px",
            }}
         >
            <label htmlFor="">Email</label>
            <input type="email" onChange={handleEmailChange} />
            <label htmlFor="">password</label>
            <input type="password" onChange={handlePasswordChange} />
            <button type="submit">Ingresar</button>
         </form>
         <Link to="/register">No tienes una cuenta?</Link>
      </div>
   );
};

export default Login;
