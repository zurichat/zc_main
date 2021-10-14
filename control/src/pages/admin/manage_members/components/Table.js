import React from 'react';
import OptionsIcon from '../icons/three-dots.svg';
import styles from '../styles/Members.module.css'


const Table = (props) => {
    return (
        <div>
            <thead>
                <tr>
                    <th className={styles.heading} style={{color:'blue'}}>Name</th>
                    <th className={styles.heading}>Account type</th>
                    <th className={styles.heading}>Billing status</th>
                    <th className={styles.heading}>Authentication</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.showingContacts.map((user) => (
                    <tr className='' key={user._id}>
                        <td className={styles.member} key=''>
                        <MemberDetails 
                            userFirstName = {user.first_name}
                            userLastName = {user.last_name}
                            imageUrl = {user.image_url}
                            email = {user.email}
                            userName = {user.display_name}
                        /></td>
                        <td className={styles.member} key=''>{user.role}</td>
                        <td className={styles.member} key=''>Active</td>
                        <td className={styles.member} key=''>Default</td>
                        <td className={styles.member} key='' 
                        // onClick={props.toggleModal} 
                        onMouseLeave={props.toggleModal}>
                        <button className={styles.optionsBtn} onMouseOut={props.toggleModal}>
                            <img src={OptionsIcon} alt='options' className={styles.optionsIcon} onClick='' />
                        </button></td>
                    </tr>))}
            </tbody>
        </div>
    )
}

const MemberDetails = (props) => {
    return (
        <div className={styles.memRow2}>
            <img src={props.imageUrl} alt='' />
            <div className={styles.memCol}>
                <div className={styles.memName}>{props.userFirstName}{props.userLastName}</div>
                <div className={styles.memRow}>
                    <div>{props.userFirstName}{props.userLastName}</div>
                    <div>{props.email}</div>
                </div>
            </div>
        </div>
    )
}
 export default Table