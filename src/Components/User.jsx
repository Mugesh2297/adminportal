import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faEye,faTrash } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

function User() {
 const [users,setUsers] = useState([]);
 const[isLoading,setLoading]=useState(false);
useEffect(()=>{
loadData()
},[])
let loadData = async ()=>{
    setLoading(true)
let users = await axios.get("https://6322a4b3362b0d4e7dd04cfa.mockapi.io/teacher");
console.log(users)
setUsers(users.data)
setLoading(false)
}
let deleteUser = async (id) =>{
    try {
        let ask = window.confirm("Are You Sure Want to Delete This Data");
        if(ask){
        await axios.delete(`https://6322a4b3362b0d4e7dd04cfa.mockapi.io/teacher/${id}`);
        
        loadData()
        alert("User deleted Sucessfully");
    }
    } catch (error) {
        
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
        <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User Details</h1>
                <Link to="/createuser" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>

            {/* <!-- DataTales Example --> */}
            {
                isLoading ? <span>Loading...</span> :  <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-dark" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Job </th>
                                    <th>Action </th>
                                   
                                </tr>
                            </thead>

                           <tbody>
                            {
                                users.map((user,index)=>{
                                    return <tr key = {index}>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.job}</td>
                                        <td><Link to={`/user/${user.id}`} className="btn btn-sm btn-warning mr-2">
                                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> View</Link>
                                        <Link  to={`/user/edituser/${user.id}`} className="btn btn-sm btn-primary mr-2">
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit</Link>
                                        <button onClick={()=>deleteUser(user.id)} className="btn btn-sm btn-danger mr-2">
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button>
                                        </td>
                                    
                                      </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            }
           
           <Footer></Footer>
        </div>
        </div>
        </div>
        
        </div>
        
    )
}

export default User;