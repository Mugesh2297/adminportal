import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      color: "",
      manufacturer: "",
      month: "",
      price: "",


    },
    validate: (values) => {
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
      await axios.put(`https://62e12867fa8ed271c4908043.mockapi.io/products/${params.id}`, values)
      alert("Product Edited");
      navigate('/portal/products')
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

    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>

          <div className='col-lg-6 p-2'>
            <lable >Product Name</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name"
              value={formik.values.name} onChange={formik.handleChange}
              name="name"></input>
            <span style={{ color: 'red' }}>{formik.errors.name}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable >Color</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name"
              value={formik.values.color} onChange={formik.handleChange}
              name="color"></input>
            <span style={{ color: 'red' }}>{formik.errors.color}</span>

          </div>
          <div className='col-lg-6  p-2'>
            <lable >Manufacturer</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name"
              value={formik.values.manufacturer} onChange={formik.handleChange}
              name="color"></input>
            <span style={{ color: 'red' }}>{formik.errors.manufacturer}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable >Month Of Manufacture</lable>
            <input className='form-control' type={"text"} placeholder="Enter User Name"
              value={formik.values.month} onChange={formik.handleChange}
              name="month"></input>
            <span style={{ color: 'red' }}>{formik.errors.month}</span>
          </div>
          <div className='col-lg-6  p-2'>
            <lable>Price</lable>
            <input className='form-control' type={"text"} placeholder="Enter Office"
              value={formik.values.price} onChange={formik.handleChange}
              name="price"></input>
            <span style={{ color: 'red' }}>{formik.errors.office}</span>
          </div>
          <div className='col-lg-12  p-2'>

            <input className='btn btn-primary mt-2 ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
          </div>

        </div>
      </form>


    </div>


  )
}

export default EditProduct