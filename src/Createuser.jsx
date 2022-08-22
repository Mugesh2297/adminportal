import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';

function Createuser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startdate: "",
      salary: "",
    },
    validate: (values)=>{
      let errors = {};
      if(values.name===""){
        errors.name = "Please Enter User Name"
      }
      if(values.position===""){
        errors.position = "Please Enter Position"
      }
      if(values.office===""){
        errors.office = "Please Enter office"
      }
      if(values.age===""){
        errors.age = "Please Enter age"
      }
      if(values.startdate===""){
        errors.startdate = "Please Enter Start Date"
      }
      if(values.salary===""){
        errors.salary = "Please Enter Salary"
      }
     return errors;
    },
    onSubmit: async (values) => {
      let user = await axios.post("https://62e12867fa8ed271c4908043.mockapi.io/users",values);
      alert("User Created")
    }
  })
  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>

          <div className='col-lg-6 p-2'>
            <lable >User Name</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name" 
            value={formik.values.name} onChange={formik.handleChange}
            name="name"></input>
            <span style={{color:'red'}}>{formik.errors.name}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable>Position</lable>
            <input className='form-control' type={"text"} placeholder="Enter Position"
            value={formik.values.position} onChange={formik.handleChange}
            name="position"></input>
            <span style={{color:'red'}}>{formik.errors.position}</span>

          </div>
          <div className='col-lg-6  p-2'>
            <lable>Office</lable>
            <input className='form-control' type={"text"} placeholder="Enter Office"
            value={formik.values.office} onChange={formik.handleChange}
            name="office"></input>
            <span style={{color:'red'}}>{formik.errors.office}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable>Age</lable>
            <input className='form-control' type={"number"} placeholder="Enter Age"
            value={formik.values.age} onChange={formik.handleChange}
            name="age"></input>
            <span style={{color:'red'}}>{formik.errors.age}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable>Start Date</lable>
            <input className='form-control' type={"text"} placeholder="Enter Start Date DD/MM/YYYY"
            value={formik.values.startdate} onChange={formik.handleChange}
            name="startdate"></input>
            <span style={{color:'red'}}>{formik.errors.startdate}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable>Salary</lable>
            <input className='form-control' type={"number"} placeholder="Enter Salary"
            value={formik.values.salary} onChange={formik.handleChange}
            name="salary"></input>
            <span style={{color:'red'}}>{formik.errors.salary}</span>
          </div>
          <div className='col-lg-6  p-2'>

            <input className='btn btn-primary' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
          </div>

        </div>
      </form>


    </div>


  )
}

export default Createuser