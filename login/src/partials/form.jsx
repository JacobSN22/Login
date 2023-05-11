import React, { useState } from 'react'
import { useLogingStore } from '../login';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const {loggedIn, setLoggedIn, setLogOut } = useLogingStore()
    const navigate = useNavigate()

    const [user, setUser] = useState({ 
        username: "",
        password: ""
    }) 
    const handleChange = (e) => {
        const{name, value} = e.target;
        setUser(prev => ({...prev, [name] : value}))
    }



    const handleLogin = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch("https://api.mediehuset.net/token",
        {method: "POST",
            headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({username, password})
    });

    if(response.ok) {
        const user = await response.json();
        setLoggedIn(user)
        navigate("/about")
    } else{
        console.log("Request failed" , response.status);
    }

    } catch (error) {
        console.error(error)
    }
    }

    const {username, password} = user

    const handleLogOut = () => {
        setLogOut()
    }

  return (
    <>{!loggedIn ? 
    <form onSubmit={handleLogin}>
    <input type="text" name="username" value={username} onChange={handleChange}  placeholder='enter username' /> <br />
    <input type="password" name="password" value={password} onChange={handleChange} placeholder='enter password' /> <br />
    <button>Login</button>
  </form> :
    <button onClick={handleLogOut}>LogOut</button>
    }
    </>
  )
}
