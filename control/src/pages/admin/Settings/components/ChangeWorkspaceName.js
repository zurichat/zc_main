import React, { useState, useEffect } from "react";
import styles from "../styles/changeworkspacename.module.css";
import { Helmet } from 'react-helmet'
import AdminSettings from '../..';
import logo from "../../assets/default.svg";
import axios from 'axios';
import { Link } from "react-router-dom";


const ChangeWorkspaceName = () => {

    const [orgName, setOrgName] = useState(orgName);
    const [urlName, setUrlName] = useState("urlName");
    const [user, setUser] = useState(null);
    const [orgId, setOrgId] = useState(null)



    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"))
    
        if (user) {
          setUser(user)
        }
      }, []);
      
    let currentWorkspace = localStorage.getItem("currentWorkspace");

    const updateWorkspaceName = () => {
        axios.patch(
            `https://api.zuri.chat/organizations/${currentWorkspace}/name`,
            {
              organization_name: orgName
            },
            {
              headers: {
                Authorization: "Bearer " + user.token
              }
            }
          )  .then(res => {
            // console.log(res));
        
            setOrgId(res.data.data.organization_id)

          setTimeout(() => {
            axios.patch(
              `https://api.zuri.chat/organizations/${res.data.data.organization_id}/url`,
              {
                organization_name: urlName
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

        // <div className={styles["workspace__boss"]}>

        <AdminSettings>

        <Helmet>
          <title>Settings - Zuri Chat </title>
        </Helmet>
        
        <div className={styles["workspace__container"]}>

           
        
            <div className={styles["workspace__top"]}>
                <img src={logo} alt="" />
                <h2 className={styles["workspace__h2"]}>
                    Change Workspace Name
                </h2>
            </div>

            <div className={styles["workspace__text_container"]}>

            <form action="" method="post" >

                <section className={styles["workspace__section"]}>
                    <div className={styles["div1"]} >
                    <h2>
                            Workspace Name
                        </h2>
                    </div>
                    

                    <div className={styles["div2"]}>
                        <div>

                        <p > 
                            Your workspace name is displayed in menus and headings. It will
                            usually be (or include) the name of your company.
                        </p>

                        </div>
                        <input
                                type="text"
                                placeholder=""
                                onChange={e => setOrgName(e.target.value)}
                            />

                    </div>

                    
                </section>



                <section className={styles["workspace__section"]}>
                    <div className={styles["div1"]}>
                         <h2>Workspace URL</h2>
                    </div>
                    <div className={styles["div2"]}>
                        <div>
                            <p >
                                You can change your workspace’s URL (web address), but out of
                                courtesy to your fellow Zurichat users, please don’t do this often
                                :)
                             </p>
                        </div>
                        <div className={styles["div3"]}>

                                <div className={styles["div4"]}>
                                 <input
                                    type="text"
                                    name=""
                                    id=""
                                    // placeholder=""
                                    onChange={e => setOrgName(e.target.value)}
                                    className={styles["Half"]}
                                />
                                <span >.zuri.chat</span>
                                </div>

                                <div>
                                <p className={styles["small_text"]} >
                                Your workspace URL can only contain lowercase letters, numbers
                                and dashes (and must start with a letter or number).
                                </p>
                            </div>
                        </div>

                    </div>

                </section>


                <section className={styles["small_section"]}>

                    <div className={styles["notes_div"]}>
                        <p className={styles["note"]}>
                            Note: If you change your workspace’s URL, Zurichat will
                            automatically redirect from the old to the new address. However,
                            you should still make sure everyone in your workspace knows about
                            the change because the old name will be placed back into the pool
                            and could be used by some other workspace in the future.
                        </p>
                    </div>
                        <div className={styles["save_changes"]}>
                        <Link to='/admin/settings'>
                            <button 
                            type="submit" 
                            onClick={updateWorkspaceName}
                            className={styles["Button"]}>
                                Save Changes
                            </button>
                            </Link>
                        </div>

                </section>
                </form>
                </div>

       </div>

        </AdminSettings>

         
    );
}




export default ChangeWorkspaceName;
