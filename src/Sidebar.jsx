import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLaughWink,faTachometer, faUser,faCircle} from "@fortawesome/free-solid-svg-icons";


function Sidebar(){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon={faLaughWink} className="fas fa-laugh-wink fa-2x"></FontAwesomeIcon>
                {/* <i className="fas fa-laugh-wink"></i> */}
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"/>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <Link className="nav-link" to="/portal/dashboard">
            <FontAwesomeIcon icon={faTachometer}></FontAwesomeIcon>

                {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
                <span className="m-2">Dashboard</span></Link>
        </li>
        <hr className="sidebar-divider my-0"/>

        <li className="nav-item active">
            <Link className="nav-link" to="/portal/users">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>

                {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
                <span className="m-2">Users</span></Link>
        </li>
        <hr className="sidebar-divider my-0"/>
        <li className="nav-item active">
            <Link className="nav-link" to="/portal/products">
            <FontAwesomeIcon icon={faCircle }></FontAwesomeIcon>

                 <span className="m-2">Products</span></Link>
        </li>
        <hr className="sidebar-divider my-0"/>

       

    </ul>
    )
}

export default Sidebar;