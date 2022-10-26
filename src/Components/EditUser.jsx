import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function EditUser() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      job: "",

    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please Enter  Name"
      }
      if (values.email === "") {
        errors.email = "Please Enter Email"
      }
      if (values.phone === "") {
        errors.phone = "Please Enter Phone Number"
      }
      if (values.job === "") {
        errors.job = "Please Enter Job"
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(`https://6322a4b3362b0d4e7dd04cfa.mockapi.io/teacher/${params.id}`, values)
      alert("User Edited");
      navigate('/user')
    }
  })

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://6322a4b3362b0d4e7dd04cfa.mockapi.io/teacher/${params.id}`);
      formik.setValues({
        name: user.data.name,
        email: user.data.email,
        phone: user.data.phone,
        job: user.data.job,
      })
    }
    catch (error) {

    }
  }
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
                  <input className='form-control' type={"text"} placeholder="Enter  Name"
                    value={formik.values.name} onChange={formik.handleChange}
                    name="name"></input>
                  <span style={{ color: 'red' }}>{formik.errors.name}</span>
                </div>
                <div className='col-lg-6  p-2'>
                  <lable>Email</lable>
                  <input className='form-control' type={"email"} placeholder="Enter Email"
                    value={formik.values.email} onChange={formik.handleChange}
                    name="email"></input>
                  <span style={{ color: 'red' }}>{formik.errors.email}</span>

                </div>
                <div className='col-lg-6  p-2'>
                  <lable>Phone</lable>
                  <input className='form-control' type={"text"} placeholder="Enter Phone"
                    value={formik.values.phone} onChange={formik.handleChange}
                    name="phone"></input>
                  <span style={{ color: 'red' }}>{formik.errors.phone}</span>

                </div>
                <div className='col-lg-6  p-2'>
                  <lable>Job</lable>
                  <input className='form-control' type={"text"} placeholder="Enter Job"
                    value={formik.values.job} onChange={formik.handleChange}
                    name="job"></input>
                  <span style={{ color: 'red' }}>{formik.errors.job}</span>

                </div>

                <div className='col-lg-12  p-2'>

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

export default EditUser