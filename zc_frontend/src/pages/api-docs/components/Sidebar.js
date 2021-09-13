import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import '../style/Sidebar.css'

const sidebar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark sidenav" style={{backgroundColor: '#00B87C'}}>
          <button className="navbar-toggler"   data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className="hidden" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-times text-light"></i>
            </span> 
            <ul className="sideUl">
              <form className="form-inline my-3 px-2">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
              </form>
              <NavLink className="text-white mb-3 px-3" exact to="/"><h5>ZURI CHAT</h5></NavLink>
              <hr className = "bg-white" style={{height: '5px'}}/>

              <NavLink className="pt-3 navbarItems" exact to="/apidocs">
              <i class="far fa-folder"></i>
              <span className=""> Get Started</span>  
              </NavLink>
              <NavLink className="pt-3 navbarItems" to="/apidocs_users">
              <i class="far fa-folder"></i>
              <span className=""> Users</span>                 
              </NavLink>
              <NavLink className="pt-3 navbarItems" to="/apidocs_organizations">
              <i class="far fa-folder"></i>
              <span className=""> Organizations</span>
              </NavLink>     

              <NavLink className="pt-3 navbarItems" to="/apidocs_marketplace">
              <i class="far fa-folder"></i>
              <span className=""> Marketplace/Apps</span>
              </NavLink> 

              <NavLink className="pt-3 navbarItems" to="/apidocs_data">
              <i class="far fa-folder"></i>
              <span className=""> Data</span>
              </NavLink>  
            </ul>               
          </div>
      </nav>
    )
}
export default withRouter(sidebar)
