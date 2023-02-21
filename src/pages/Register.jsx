import './Register.css';
import React, { useState } from 'react';
import Axios from 'axios';



function Register() {

  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/insert', {
      firstName: name,
      Email: email,
      EmailPassword:password,
    })

 
  }
  return (
    <div className="App">
      <header className="App-header">      
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
                {/* <p>First Name</p> */}
                  <input
                  className = "Name" 
                  type="text" 
                  name="name" 
                  placeholder="First name ..."
                  onChange={(e) => {setName(e.target.value)}}
                  />
                <input 
                  className = "Email"
                  type="email"
                  name="email"
                  placeholder='Enter your email...'
                  onChange={(e) => {setEmail(e.target.value)}}
                  />
                
                  <input 
                  className = "Password"
                  type="password" 
                  name ="password" 
                  placeholder = "Password...." 
                  onChange={(e) => {setPassword(e.target.value)}}
                  />
                  
                <button type="submit">Submit</button>
            </form>
        </div>
      </header>
    </div>
  );
}

export default Register;