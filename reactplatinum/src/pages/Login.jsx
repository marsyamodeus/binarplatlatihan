import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [err, setErr] = useState('');
  const [load, setLoad] = useState(false);
  const [succ, setSucc] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    setLoad(true);
    const data = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`https://api-car-rental.binaracademy.org/customer/auth/login`, data)
      .then((res) => {

        console.log(res)
        localStorage.setItem('thetoken', res.data.access_token)
        navigate('/discovery')
        // console.log(res)
        // if (res.status === 201) {
        //   setSucc('berhasil login.');
          
        // }
        // setLoad(false);
        // setTimeout(() => {
        //   navigate('/discovery');
        // }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setErr('error login.');
        setLoad(false);
      });

    setTimeout(()=>{setErr('')
    setSucc('')},3000);
  };

  return (
    <div>
      {succ && <h1 style={{ color: 'green' }}>{succ}</h1>}
      {err && <h1 style={{ color: 'red' }}>{err}</h1>}

      <div>
        <label>Email: </label>
        <input onChange={handleChange} value={form.email} name="email" />
      </div>
      <div>
        <label>Password: </label>
        <input onChange={handleChange} value={form.password} name="password" />
      </div>
      <div>
        <button disabled={load} onClick={handleSubmit}>
          {load ? 'Loading...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Login;
