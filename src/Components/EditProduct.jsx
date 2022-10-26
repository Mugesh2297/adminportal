import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function EditProduct() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      color: "",
      manufacturer: "",
      month: "",
      price:""


    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please Enter Product  Name"
      }
      if (values.color === "") {
        errors.color = "Please Enter color"
      }
      if (values.manufacturer === "") {
        errors.manufacturer = "Please Enter manufacturer"
      }
      if (values.month === "") {
        errors.month = "Please Enter month"
      }
      if (values.price === "") {
        errors.price = "Please Enter price"
      }
     
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(`https://62e12867fa8ed271c4908043.mockapi.io/products/${params.id}`, values)
      alert("Product Edited");
      navigate('/products')
    }
  })

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://62e12867fa8ed271c4908043.mockapi.io/products/${params.id}`);
      formik.setValues({
        name: user.data.name,
        color: user.data.color,
        manufacturer: user.data.manufacturer,
        month: user.data.month,
        price: user.data.price,
       
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

<div className='col-lg-6 p-2 mx-auto'>
  <lable >Product Name</lable>
  <input className='form-control' type={"text"} placeholder="Enter User Name" 
  value={formik.values.name} onChange={formik.handleChange}
  name="name"></input>
  <span style={{color:'red'}}>{formik.errors.name}</span>
  </div>

  <div className='col-lg-6 p-2 mx-auto'>
  <lable>Color</lable>
  <input className='form-control' type={"text"} placeholder="Enter Color"
  value={formik.values.color} onChange={formik.handleChange}
  name="color"></input>
  <span style={{color:'red'}}>{formik.errors.color}</span>
  </div>


  <div className='col-lg-6 p-2 mx-auto'>
  <lable>Manufacturer</lable>
  <input className='form-control' type={"text"} placeholder="Enter manufacturer"
  value={formik.values.manufacturer} onChange={formik.handleChange}
  name="manufacturer" ></input>
  <span style={{color:'red'}}>{formik.errors.manufacturer}</span>
  </div>

  <div className='col-lg-6 p-2 mx-auto'>
  <lable>Month</lable>
  <input className='form-control' type={"text"} placeholder="Enter month"
  value={formik.values.month} onChange={formik.handleChange}
  name="month"></input>
  <span style={{color:'red'}}>{formik.errors.month}</span>
  </div>
 

 
  <div className='col-lg-6 p-2 mx-auto'>
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
    </div>
    </div>
    </div>


  )
}

export default EditProduct