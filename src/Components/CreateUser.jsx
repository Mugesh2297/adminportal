import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function CreateUser() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      job: "",
     
    },
    validate: (values)=>{
      let errors = {};
      if(values.name===""){
        errors.name = "Please Enter Name"
      }
      if(values.email===""){
        errors.email = "Please Enter Email"
      }
      if(values.phone===""){
        errors.phone = "Please Enter Phone No"
      }
      if(values.job===""){
        errors.job = "Please Enter Job"
      }
    
     return errors;
    },
    onSubmit: async (values) => {
      let user = await axios.post("https://6322a4b3362b0d4e7dd04cfa.mockapi.io/teacher",values);
      alert("User Created")
      navigate('/user')
    }
  })
  return (
    <div id="wrapper">

    {/* <!-- Sidebar --> */}
    <Sidebar />
    {/* <!-- End of Sidebar --> */}

    {/* <!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            <Topbar />
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>

          <div className='col-lg-6 p-2'>
            <lable >User Name</lable>
            <input className='form-control' type={"text"} placeholder="Enter Name" 
            value={formik.values.name} onChange={formik.handleChange}
            name="name"></input>
            <span style={{color:'red'}}>{formik.errors.name}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable>Email ID</lable>
            <input className='form-control' type={"email"} placeholder="Enter Email"
            value={formik.values.email} onChange={formik.handleChange}
            name="email"></input>
            <span style={{color:'red'}}>{formik.errors.email}</span>

          </div>
          <div className='col-lg-6  p-2'>
            <lable>Phone</lable>
            <input className='form-control' type={"text"} placeholder="Enter Phone"
            value={formik.values.phone} onChange={formik.handleChange}
            name="phone"></input>
            <span style={{color:'red'}}>{formik.errors.phone}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable>Job</lable>
            <input className='form-control' type={"text"} placeholder="Enter Job"
            value={formik.values.job} onChange={formik.handleChange}
            name="job"></input>
            <span style={{color:'red'}}>{formik.errors.job}</span>
          </div>
          
          <div className='col-lg-6  p-2'>

            <input className='btn btn-primary' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
          </div>

        </div>
      </form>


    </div>
    </div>
    </div>
    </div>

  )
}

export default CreateUser