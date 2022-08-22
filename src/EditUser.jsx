import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
    const params =  useParams()
    const navigate = useNavigate()
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
         return errors;
        },
        onSubmit: async (values) => {
            await axios.put(`https://62e12867fa8ed271c4908043.mockapi.io/users/${params.id}`, values)
            alert("User Edited");
            navigate('/portal/users')
        }
      })

      useEffect(()=>{
        loadUser()
      },[])

      let loadUser = async () => {
        try{
            let user = await axios.get(`https://62e12867fa8ed271c4908043.mockapi.io/users/${params.id}`);
            formik.setValues({
          name: user.data.name,
          position: user.data.position,
          office: user.data.office,
          age:user.data.age,
          startdate: user.data.startdate,
          salary: user.data.salary,
            })
        }
        catch(error){

        }
      }
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
              </div>
              <div className='col-lg-6  p-2'>
                <lable>Age</lable>
                <input className='form-control' type={"number"} placeholder="Enter Age"
                value={formik.values.age} onChange={formik.handleChange}
                name="age"></input>
              </div>
              <div className='col-lg-6  p-2'>
                <lable>Start Date</lable>
                <input className='form-control' type={"text"} placeholder="Enter Start Date DD/MM/YYYY"
                value={formik.values.startdate} onChange={formik.handleChange}
                name="startdate"></input>
              </div>
              <div className='col-lg-6  p-2'>
                <lable>Salary</lable>
                <input className='form-control' type={"number"} placeholder="Enter Salary"
                value={formik.values.salary} onChange={formik.handleChange}
                name="salary"></input>
              </div>
              <div className='col-lg-6  p-2'>
    
                <input className='btn btn-primary' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
              </div>
    
            </div>
          </form>
    
    
        </div>
    
    
      )
    }

export default EditUser