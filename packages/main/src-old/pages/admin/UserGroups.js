import usergroupimg from "../admin/Settings/assets/usergroups.png";
import usergroups from "../admin/Settings/styles/usergroups.module.css";
import { Link } from "react-router-dom";
import AdminSettings from ".";

const UserGroups = () => {
  return (
    <AdminSettings>
      <div className={`${usergroups.con}`}>
        <div className={`${usergroups.containerheader}`}>
          <h2 className={`${usergroups.header}`}> User Groups </h2>
        </div>
        <div className={`${usergroups.content}`}>
          <div>
            <img
              src={usergroupimg}
              alt="usergroup pics"
              className={`${usergroups.imguser}`}
            />
          </div>
          <div>
            <h3 className={`${usergroups.title}`}>
              Organize your team with user groups
            </h3>
          </div>
          <div className={`${usergroups.containerpara}`}>
            <p className={`${usergroups.para}`}>
              User groups let you manage entire departments at once, by bundling{" "}
              <br />
              them together in a group — like @sales or @marketing.{" "}
              <Link to="/faq" className={`${usergroups.learnmore}`}>
                Learn More
              </Link>
            </p>
          </div>
          <div>
            <Link to="/pricing" className={`px-3 py-2 ${usergroups.link}`}>
              See Paid Plans
            </Link>
          </div>
        </div>
      </div>
    </AdminSettings>
  );
};

export default UserGroups;
