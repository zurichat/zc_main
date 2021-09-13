import React from 'react'
import { NavLink, withRouter } from "react-router-dom";
import '../style/Navbar.css';
import Sidebar from './Sidebar';


const Navbar = () => {    
    return (
        <div>     
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: '#00B87C'}}>
                <Sidebar/>
            <div className="container">
            <NavLink className="navbar-brand" exact to="/"><span> Zuri</span></NavLink>
                <div className="items">
                    <NavLink className="text-light nav-item active" style={{textDecoration: 'none'}} to="/">
                    <span className=""> API reference</span>
                    </NavLink>
                    <NavLink className="text-light nav-item active" style={{textDecoration: 'none'}} to="/">
                    <span className=""> Docs</span>
                    </NavLink>
                    <NavLink className="text-light nav-item active" style={{textDecoration: 'none'}} to="/">
                    <span className=""> Support</span>
                    </NavLink>
                    <NavLink className="text-light nav-item active" style={{textDecoration: 'none'}} to="/">
                    <span className=""> Sign In</span>
                    </NavLink>

                </div>
            </div>              
            </nav>
        </div>
    )
}

export default withRouter(Navbar)
