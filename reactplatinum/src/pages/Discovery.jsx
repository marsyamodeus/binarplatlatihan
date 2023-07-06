import React, {useEffect,useState} from 'react';
import axios from "axios";

const Discovery = () => {

  const [data, setData] = useState([]);
  const [err, setErr] = useState('');

 
  const [form, setForm] = useState({
    name:'',
    category:'',

  })

  useEffect(()=> {
    getData();
    },[form]);


////////////////////
//use async await//
//////////////////
  const getData = async()=>{
    try 
    {
      const res = await axios.get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${form.name}&category=${form.category}`);
      setData(res.data.cars);
    }

    catch (error)
    {
      setErr(error.message);
      cleanErrState();
    }

      
    };

//////////////////////////////////////
//alternatives, without async await//
////////////////////////////////////

//   const getData = () => {
    
//     axios
//        .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${form.name}&category=${form.category}`)
//        .then((res)=>{
//           setData(res.data.cars);
//        })
//        .catch((err)=>{
//         setErr(err.message);
//        });

//        cleanErrState();
      
//  };

 const cleanErrState = ()=>{
      setTimeout(()=>{
        setErr('');
      },4000);

 }

 const handleChange = (e)=>{
  const {name, value} = e.target;
  setForm({...form, [name]:value});

  // setForm((prevState) =>({
  //   ...prevState,
  //   [name]:value,
  // }));
 }






  return (
    <div>
        {err && <h1 style={{color: 'red'}}>{err}</h1>}
        <h1>
            Ini halaman Discovery.
        </h1>
        
        <label>nama mobil: </label>
        <input name='name' value={form.name} onChange={handleChange}/>
        <label>kategori: </label>
        <input name='category' value={form.category} onChange={handleChange}/>
        
        {
          data.map((item)=>(
            <div style={{padding: '10px'}}>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.isRented}</p>
            </div>
          ))
          
        }
    </div>
  )
}

export default Discovery