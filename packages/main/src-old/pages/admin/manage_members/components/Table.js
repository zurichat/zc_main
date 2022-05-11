import React from "react";
import OptionsIcon from "../icons/three-dots.svg";
import styles from "../styles/Members.module.css";
import AvatarIcon from "../icons/avatar.png";
import ToolTipMenu from "./ToolTipMenu";

const imageShot = AvatarIcon;

const Table = props => {
  return (
    <div className={styles.table}>
      <table className={styles.tableWrap}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th className={styles.heading} style={{ color: "blue" }}>
              Name
            </th>
            <th className={styles.heading}>Account type</th>
            <th className={styles.heading}>Billing status</th>
            <th className={styles.heading}>Authentication</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {props.showingContacts.length > 0 ? (
            props.showingContacts.map(user => (
              <tr className={styles.tableRow} key={user._id}>
                <td className={styles.member} key="">
                  <MemberDetails
                    userFirstName={user.first_name}
                    userLastName={user.last_name}
                    imageUrl={user.image_url}
                    email={user.email}
                    userName={user.display_name}
                    altImg={imageShot}
                  />
                </td>
                <td className={styles.member} key="">
                  {user.account_role}
                </td>
                <td className={styles.member} key="">
                  {props.billing}
                </td>
                <td className={styles.member} key="">
                  {user.account_type}
                </td>
                <td className={styles.member} key="">
                  {/* // onClick={props.toggleModal}
                            // onMouseLeave={props.toggleModal}> */}
                  <ToolTipMenu />
                </td>
              </tr>
            ))
          ) : (
            <>
              <td className={styles.emptySearch} colSpan="5">
                No results to display
              </td>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

const MemberDetails = props => {
  return (
    <div className={styles.memRow2}>
      {props.imageUrl !== "" || null ? (
        <img src={props.imageUrl} alt="" />
      ) : (
        <img src={AvatarIcon} className={styles.avatarIcon} alt="" />
      )}
      <div className={styles.memCol}>
        <div className={styles.memName}>
          {props.userFirstName} {props.userLastName}
        </div>
        <div className={styles.memRow}>
          <div className={styles.memName1}>
            {props.userFirstName} {props.userLastName}
          </div>
          <div>{props.email}</div>
        </div>
      </div>
    </div>
  );
};
export default Table;
