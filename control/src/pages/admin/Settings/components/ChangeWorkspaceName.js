import React, { useState, useEffect } from "react"
import { Helmet } from 'react-helmet'
import AdminSettings from '../..'
import styles from "../styles/changeworkspacename.module.css";
import Logo  from '../../assets/default.svg'
import axios from 'axios'
import { Link } from "react-router-dom"

let currentWorkspace = localStorage.getItem("currentWorkspace")


const ChangeWorkspaceName = () => {

    const [user, setUser] = useState(null)
    const [orgUrl, setOrgUrl] = useState(null)
    const [orgName, setOrgName] = useState(orgName)
  
    useEffect(() => {
      const user = JSON.parse(sessionStorage.getItem("user"))
  
      if (user) {
        setUser(user)
      }
    }, []);

    


    const updateName = () => {
        axios
          .patch(
            `https://api.zuri.chat/organizations/${currentWorkspace}/name`,
            {
                organization_name: orgName
              },
          
            {
              headers: {
                Authorization: "Bearer " + user.token
              }
            }
          )
          .then(res => {
            // Clears User Extracted Details from LS during Registraion
    
            
            // setOrgId(res.data.data.organization_id)
    
            // Automatic Org Name Renaming From Default to new Org Name
            setTimeout(() => {
              axios.patch(
                `https://api.zuri.chat/organizations/${currentWorkspace}/url`,
                {
                  url: orgUrl
                },
                {
                  headers: {
                    Authorization: "Bearer " + user.token
                  }
                }
              )
              // .then(res => console.log(res))
            }, 500)
    
           
          })
          .catch(err => {
            console.error(err.message)
          })
      }




    return (


        <AdminSettings>
      <div>
        <Helmet>
          <title>Settings - Zuri Chat</title>
        </Helmet>
      </div>
   
        <div className={styles["change_workspace"]}>

        <form action="">

            <div className={styles["change_workspace_header"]}>

                <div className={styles["change_workspace_logo"]} >
                    <img src={Logo} alt="" />
                </div>
                


                <h1> Change Workspace Name</h1>

            </div>
           
            <div className={styles["change_workspace_content"]}>

                
                <section className={styles["change_workspace_section"]}>

                    <div className={styles["change_workspace_div1"]}>
                        <h2 className={styles["change_workspace_h2"]}>
                          Workspace Name
                        </h2>

                            <div className={styles["change_workspace_text"]}>

                            <p className={styles["change_workspace_p"]} >
                            Your workspace name is displayed in menus and headings. It will
                            usually be (or include) the name of your company.
                        </p>

                        <input
                                type="text"
                                placeholder="HNGI8"
                                className={styles["change_workspace_input1"]}
                                onChange={e => setOrgName(e.target.value)}
                            />

                          </div>
                    </div>


                </section>



                <section className={styles["change_workspace_section"]}>

                   
                        <div>
                        <h2 className={styles["change_workspace_h2"]}> 
                        Workspace URL
                        </h2>
                        </div>

                        <div  className={styles["change_workspace_cast"]}>

                            <div>
                                <p className={styles["change_workspace_p"]}>
                                        You can change your workspace’s URL (web address), but out of
                                        courtesy to your fellow Zurichat users, please don’t do this often
                                        :)
                            </p>
                           </div>

                           <div className={styles["change_workspace_flexinput"]}>

                            <input
                            type="text"
                            name=""
                            id=""
                            placeholder="HNG"
                            className={styles["change_workspace_input2"]}
                            onChange={e => setOrgUrl(e.target.value)}
                            />
                            <span className="px-2">.zuri.chat</span>{' '}

                               

                         </div>                 
                      </div>
                            


              </section>

               <section className={styles["change_workspace_section_last"]}>
                        <p className={styles["change_workspace_small"]}>
                        Your workspace URL can only contain lowercase letters, numbers
                        and dashes (and must start with a letter or number).
                        </p>



                        <Link to='/admin/settings'>
                        <button type="submit" onClick={updateName} className={styles["Button"]}>
                        Save Changes
                        </button>
                        </Link>

                

                 </section>

              

             </div>
             </form>
      </div>

        </AdminSettings>
    )
}

export default ChangeWorkspaceName;



// import React, { useState, useEffect } from "react"
// import { Helmet } from 'react-helmet'
// import AdminSettings from '../..'
// import styles[""] from "../styles[""]/changeworkspaceName.module.css";
// import Logo  from '../../assets/default.svg'
// import axios from 'axios'
// import { Link } from "react-router-dom"

// let currentWorkspace = localStorage.getItem("currentWorkspace")


// const ChangeWorkspaceName = () => {

//     const [user, setUser] = useState(null)
//     const [orgUrl, setOrgUrl] = useState(null)
//     const [orgName, setOrgName] = useState(orgName)
  
//     useEffect(() => {
//       const user = JSON.parse(sessionStorage.getItem("user"))
  
//       if (user) {
//         setUser(user)
//       }
//     }, []);

    


//     const updateName = () => {
//         axios
//           .patch(
//             `https://api.zuri.chat/organizations/${currentWorkspace}/name`,
//             {
//                 organization_name: orgName
//               },
          
//             {
//               headers: {
//                 Authorization: "Bearer " + user.token
//               }
//             }
//           )
//           .then(res => {
            // Clears User Extracted Details from LS during Registraion
    
            
            // setOrgId(res.data.data.organization_id)
    
            // Automatic Org Name Renaming From Default to new Org Name
    //         setTimeout(() => {
    //           axios.patch(
    //             `https://api.zuri.chat/organizations/${currentWorkspace}/url`,
    //             {
    //               url: orgUrl
    //             },
    //             {
    //               headers: {
    //                 Authorization: "Bearer " + user.token
    //               }
    //             }
    //           )
    //           // .then(res => console.log(res))
    //         }, 500)
    
           
    //       })
    //       .catch(err => {
    //         console.error(err.message)
    //       })
    //   }

    //   

//     return (

        
//         <AdminSettings>
//       <div>
//         <Helmet>
//           <title>Settings - Zuri Chat</title>
//         </Helmet>
//       </div>
//         <div className="app bg-light pb-5">
//             <div className="container py-5 d-flex">
//               <img src={Logo} alt="" />
//                 <h2 className="px-3" styles[""]={{ fontWeight: '700' }}>
//                     Change Workspace Name
//                 </h2>
//             </div>

//             <div className="container bg-white mb-5 px-5 rounded">
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <h2 className="my-3" styles[""]={{ fontWeight: '700' }}>
//                             Workspace Name
//                         </h2>
//                         <p className="mb-5">
//                             Your workspace name is displayed in mrnus and headings. It will
//                             usually be (or include) the name of your company.
//                         </p>

//                         <h2 styles[""]={{ fontWeight: '700' }}>Workspace URL</h2>
//                         <p className="mb-5">
//                             You can change your workspace’s URL (web address), but out of
//                             courtesy to your fellow Zurichat users, please don’t do this often
//                             :)
//                         </p>

//                         <p className={styles[""].Note}>
//                             Note: If you change your workspace’s URL, Zurichat will
//                             automatically redirect from the old to the new address. However,
//                             you should still make sure everyone in your workspace knows about
//                             the change because the old name will be placed back into the pool
//                             and could be used by some other workspace in the future.
//                         </p>
//                     </div>

//                     <div className="col-sm-6">
//                         <form action="" method="post" className="pt-5">
                           
                           
                           
                           
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </AdminSettings>
//     );
// }



// export default ChangeWorkspaceName
