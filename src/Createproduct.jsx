import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Createproduct() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      color: "",
      manufacturer: "",
      month: "",
      price: "",
      
    },
    validate: (values)=>{
      let errors = {};
      if (values.name === "") {
        errors.name = "Please Enter Product Name"
      }
      if (values.color === "") {
        errors.color = "Please Enter Product Color"
      }
      if (values.manufacturer === "") {
        errors.manufacturer = "Please Enter Manufacturer"
      }
      if (values.month === "") {
        errors.month = "Please Enter Month Of Manufacture"
      }
      if (values.price === "") {
        errors.price = "Please Enter Product Price"
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
            </div>
          
            <div className='col-lg-6 p-2 mx-auto'>
            <lable>color</lable>
            <input className='form-control' type={"text"} placeholder="Enter Color"
            value={formik.values.color} onChange={formik.handleChange}
            name="color"></input>
            <span style={{color:'red'}}>{formik.errors.color}</span>
            </div>

         
            <div className='col-lg-6 p-2 mx-auto'>
            <lable>Manufacturer</lable>
            <input className='form-control' type={"text"} placeholder="Enter Manufacturer"
            value={formik.values.manufacturer} onChange={formik.handleChange}
            name="manufacturer"></input>
            <span style={{color:'red'}}>{formik.errors.manufacturer}</span>
            </div>
       
            <div className='col-lg-6 p-2 mx-auto'>
            <lable>Month</lable>
            <input className='form-control' type={"text"} placeholder="Enter Month"
            value={formik.values.month} onChange={formik.handleChange}
            name="month"></input>
            <span style={{color:'red'}}>{formik.errors.month}</span>
            </div>
           
            <div className='col-lg-6 p-2 '>
            <lable>Price</lable>
            <input className='form-control' type={"text"} placeholder="Enter Price"
            value={formik.values.price} onChange={formik.handleChange}
            name="price"></input>
            <span style={{color:'red'}}>{formik.errors.price}</span>
            </div>
         
          
          
         
            <div className='col-lg-12 p-2 mx-auto'>
            <input className='btn btn-primary mt-2 ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
            </div>

        </div>
      </form>


    </div>
    


  )
}

export default Createproduct