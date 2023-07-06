import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    
    const [form, setForm] = useState({
        email:'',
        password:'',
    })

    const [err, setErr] = useState('');
    const [load, setLoad] = useState(false);
    const [succ, setSucc] = useState('');
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }

    const handleSubmit = ()=>{
        setLoad(true);
        const data = {
            email: form.email,
            password: form.password,
        };

        axios
            .post(`https://api-car-rental.binaracademy.org/customer/auth/register`,data)
            .then((res)=>{
                if (res.status === 201){
                    setSucc('berhasil register.');
                }
                setLoad(false);
                setTimeout(()=>{
                    navigate('/login');
                },3000);
            })
            .catch((err)=>{
                console.log(err)
                setErr('error dalam register.');
                setLoad(false);
            })
    }


  return (
    <div>

        {succ && <h1 style={{color:'green'}}>{succ}</h1>}
        {err && <h1 style={{color:'red'}}>{err}</h1>}

        <div>
            <label>Email: </label>
            <input onChange={handleChange} value={form.email} name='email'/>
        </div>
        <div>
            <label>Password: </label>
            <input onChange={handleChange} value={form.password} name='password'/>
        </div>
        <div>
            <button disabled={load ? true : false}onClick={handleSubmit}>
                {load ? "loading..." : "submit"}
            </button>
        </div>

    </div>
  )
}

export default Register