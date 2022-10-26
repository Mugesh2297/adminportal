import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function UserView() {
    const params = useParams();
    console.log(params)
   const[userData,setUserData] = useState({})
    useEffect(() => {
        loadUser()
    }, [])
    let loadUser = async () => {
        try {
            let user = await axios.get(`https://6322a4b3362b0d4e7dd04cfa.mockapi.io/teacher/${params.userid}`);
            setUserData(user.data)
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
        <div className='row'>
        <div className='col-lg-6 p-2 mx-auto'>

        <div class="card" style={{width:'18 rem'}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Name:</b> {userData.name}</li>
          <li class="list-group-item"><b>Position:</b> {userData.job}</li>
          <li class="list-group-item"><b>Email: </b>{userData.email}</li>
          <li class="list-group-item"><b>Phone:</b> {userData.phone}</li>
        </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
       
    )
}

export default UserView