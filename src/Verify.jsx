import React from 'react'
import logo from './asset/logo.png';
import { useState } from 'react';
import { addUser } from './service/api';
import { useNavigate } from 'react-router';


const initialValue={
    otp:"",

}

const Verify = () => {
    const [user, setUser]=useState(initialValue);
    const {otp}=user;
    const navigate = useNavigate();
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    const addUserDetails = async () => {
        await addUser(user);
        console.log(user);
        // history.push('/all');
        navigate("/")
      }
    return (
        <div className='card'>
            <div className='form'>
                <div className="imgcontainer">
                    <img src={logo} alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label><b>Kami Telah Mengirimkan SMS Kode OTP </b></label>
                    <input type="number" placeholder="Masukan Kode OTP" name="otp" value={otp} onChange={onValueChange} />

                  

                    <button onClick={() => addUserDetails()}>Kirim Kode</button>
                </div>
            </div>
        </div>
    )
}

export default Verify;