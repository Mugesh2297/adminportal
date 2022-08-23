import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
 const [users,setUsers] = useState([]);
 const[isLoading,setLoading]=useState(false);
useEffect(()=>{
loadData()
},[])
let loadData = async ()=>{
    setLoading(true)
let users = await axios.get("https://62e12867fa8ed271c4908043.mockapi.io/products");
setUsers(users.data)
setLoading(false)
}
let deleteProduct = async (id) =>{
    try {
        let ask = window.confirm("Are You Sure Want to Delete This Data");
        if(ask){
        await axios.delete(`https://62e12867fa8ed271c4908043.mockapi.io/products/${id}`);
        loadData()
    }
    } catch (error) {
        
    }
}
    return (
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Product Details</h1>
                <Link to="/portal/create-product" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
            </div>

            {/* <!-- DataTales Example --> */}
            {
                isLoading ? <span>Loading...</span> :  <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                    <th>Month of Manufacture</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>

                           <tbody>
                            {
                                users.map((user,index)=>{
                                    return <tr key = {index}>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.year}</td>
                                        <td>${user.price}</td>
                                        <td><Link to={`/portal/products/${user.id}`} class="btn btn-sm btn-warning mr-2">View</Link>
                                        <Link  to={`/portal/products/editproduct/${user.id}`} class="btn btn-sm btn-primary mr-2">Edit</Link>
                                        <button onClick={()=>deleteProduct(user.id)} class="btn btn-sm btn-danger mr-2">Delete</button>
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

export default Products;