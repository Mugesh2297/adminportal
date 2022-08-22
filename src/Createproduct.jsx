import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Createproduct() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      year: "",
      price: "",
      
    },
    validate: (values)=>{
      let errors = {};
      if(values.name===""){
        errors.name = "Please Enter User Name"
      }
      if(values.year===""){
        errors.year = "Please Enter Position"
      }
      if(values.price===""){
        errors.price = "Please Enter office"
      }
      
     return errors;
    },
    onSubmit: async (values) => {
      let user = await axios.post("https://62e12867fa8ed271c4908043.mockapi.io/products",values);
      alert("Product Created")
      navigate('/portal/products')
    }
  })
  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>

          <div className='col-lg-6 p-2 mx-auto'>
            <lable >Product Name</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name" 
            value={formik.values.name} onChange={formik.handleChange}
            name="name"></input>
            <span style={{color:'red'}}>{formik.errors.name}</span>
          
         
            <lable>Year</lable>
            <input className='form-control' type={"text"} placeholder="Enter Position"
            value={formik.values.year} onChange={formik.handleChange}
            name="year"></input>
            <span style={{color:'red'}}>{formik.errors.position}</span>

         
          
            <lable>Price</lable>
            <input className='form-control' type={"text"} placeholder="Enter Office"
            value={formik.values.price} onChange={formik.handleChange}
            name="price"></input>
            <span style={{color:'red'}}>{formik.errors.office}</span>
         
          
          
         

            <input className='btn btn-primary mt-2 ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
            </div>

        </div>
      </form>


    </div>


  )
}

export default Createproduct