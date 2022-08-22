import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Productsview() {
    const params = useParams();
    console.log(params)
   const[userData,setUserData] = useState({})
    useEffect(() => {
        loadUser()
    }, [])
    let loadUser = async () => {
        try {
            let user = await axios.get(`https://62e12867fa8ed271c4908043.mockapi.io/products/${params.productid}`);
            setUserData(user.data)
        }
        catch (error) {

        }

    }
    return ( 
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6 p-2 mx-auto'>

        <div class="card" style={{width:'18 rem'}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Name:</b> {userData.name}</li>
          <li class="list-group-item"><b>Month:</b> {userData.year}</li>
          <li class="list-group-item"><b>Price: </b>{userData.price}</li>
          
        </ul>
      </div>
      </div>
      </div>
      </div>
       
    )
}

export default Productsview