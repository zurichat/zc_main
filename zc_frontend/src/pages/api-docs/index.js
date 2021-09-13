import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './style/index.css'

const index = () => {
  return (
    <div className="apidocs_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <Navbar/>
          </div>
          <div className="col-lg-10 col-sm-12">
            <div className="row">
                <div className="col-md-6">
                  <h4>Get Started</h4>
                  <p>Zuri Chat is an open source slack clone. However, 
                    it offers a lot more functionality via a plugin system where 
                    each room can be provided by a different plugin provider.
                  </p>
                  <p>Contact Support: Email: developer@zuri.chat</p>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header text-light bg-success">
                    Base URL
                    </div>
                    <div class="card-body">
                    <p>https://api.zuri.chat</p>
                    </div>
                  </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className = "col-md-6">
                    <h4>Users</h4>
                    <h6>(user id)</h6>
                    <p><b>Update details of a user</b></p>
                    <p>Updates existing user fields - first_name, last_name, phone, company</p>
                    <br/>
                    <p>GET Retrieves the information about a user</p>
                    <p>Retrieves existing information - first_name, last_name, phone,company</p>
                </div>
                <div className = "col-md-6">
                  <div className="card">
                    <div className="card-header text-light bg-success">
                    User URL
                    </div>
                    <div class="card-body">
                    <p>https://api.zuri.chat/v1/uses/:user_id</p>
                    </div>
                  </div>
                  <br/>
                  <div className="card">
                    <div className="card-header text-light bg-success">
                      Example Request
                    </div>
                    <div className="card-body">
                    <p>
                      curl --location --request PATCH 'https://api.zuri.chat/v1/users/:user_id' \ <br/>
                      --header 'Authorization: Bearer token' \ <br/>
                      --data-raw '( <br/>
                      <p className="mx-4">
                          "first_name": "officia magna", <br/>
                          "last_name": "magna labore", <br/>
                          "phone_number": -24163898.385010585, <br/>
                          "password": "eu et elit", <br/>
                          "email": "proident ullamco dolore", <br/>
                          "email_verified": false <br/>
                      </p>
                      )'
                    </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default index
