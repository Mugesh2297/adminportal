import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faEye,faTrash } from "@fortawesome/free-solid-svg-icons";

function User() {
 const [users,setUsers] = useState([]);
 const[isLoading,setLoading]=useState(false);
useEffect(()=>{
loadData()
},[])
let loadData = async ()=>{
    setLoading(true)
let users = await axios.get("https://62e12867fa8ed271c4908043.mockapi.io/users");
console.log(users)
setUsers(users.data)
setLoading(false)
}
let deleteUser = async (id) =>{
    try {
        let ask = window.confirm("Are You Sure Want to Delete This Data");
        if(ask){
        await axios.delete(`https://62e12867fa8ed271c4908043.mockapi.io/users/${id}`);
        
        loadData()
        alert("User deleted Sucessfully");
    }
    } catch (error) {
        
    }
}
    return (
        <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User Details</h1>
                <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
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
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                           <tbody>
                            {
                                users.map((user,index)=>{
                                    return <tr key = {index}>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{user.office}</td>
                                        <td>{user.age}</td>
                                        <td>{user.startdate}</td>
                                        <td>${user.salary}</td>
                                        <td><Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-warning mr-2">
                                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> View</Link>
                                        <Link  to={`/portal/user/edit/${user.id}`} className="btn btn-sm btn-primary mr-2">
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
           

        </div>
    )
}

export default User;