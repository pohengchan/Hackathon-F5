import React, { useState, useEffect } from "react";
import { register } from "../../services/user.service";
import { Link } from "react-router-dom";
import './register.css'

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [user, setUser] = useState(null);

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handleNameChange = (event) => {
      setName(event.target.value);
   };

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handleRegister = async (formData) => {
      const { data } = await register(formData);
      setUser(data);
      console.log(data)
      localStorage.setItem('token',data.token)
      localStorage.setItem('user_name',data.user.name)
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      const formData = {
         email: email,
         name: name,
         password: password,
         password_confirmation: password,
      };

      handleRegister(formData);
   };

   return (
      <div className="container_register_view">
         <form
            onSubmit={handleSubmit}
            style={{
               display: "flex",
               flexDirection: "column",
               gap: "1rem",
               maxWidth: "500px",
            }}
         >
            <label htmlFor="">Name</label>
            <input type="text" onChange={handleNameChange} />
            <label htmlFor="">Email</label>
            <input type="email" onChange={handleEmailChange} />
            <label htmlFor="">password</label>
            <input type="password" onChange={handlePasswordChange} />
            <button type="submit">Ingresar</button>
         </form>
         <Link to="/login">ya tienes una cuenta?</Link>
      </div>
   );
};

export default Register;
