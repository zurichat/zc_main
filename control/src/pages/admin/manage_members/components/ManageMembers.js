import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Members.module.css'
import OptionsPopUp from './OptionsPopUp';
import { Route } from 'react-router';
// import { GetWorkspaceUsers } from '../../../../../../utilities/src/zuri-utilities';
import { GetWorkspaceUsers } from '../../../../zuri-control';
import Table from './Table';


const ManageMembers = () => {
    const users = GetWorkspaceUsers();
    
    // const users = [
    //     {
    //         id: 1,
    //         name: "Joe Kunsten",
    //         date: "12th June, 2029"

    //     },
    //     {
    //         id: 2,
    //         name: "Me Kunsten",
    //         date: "12th June, 2029"

    //     },
    //     {
    //         id: 3,
    //         name: "Toe Kunsten",
    //         date: "12th June, 2029"

    //     },
    //     {
    //         id: 4,
    //         name: "Soe Kunsten",
    //         date: "12th June, 2029"

    //     },
    // ];

    const ref = useRef()
    const [query, setQuery] = useState('');
    const [showModal, setShowModal] = useState(false)

    const updateQuery = (query) => {
        setQuery(query.trim());
    };

    // //const clearQuery = () => {
    //     this.updateQuery("");
    // };

    const showingMembers =
        query === ""
            ? users
            : users.filter((userF) =>
                userF.name.toLowerCase().includes(query.toLowerCase())
            );

    // const getModal = data => {
    //     setShowModal(true);
    // };

    const toggleModal = () => {
        setShowModal(!showModal);
    };





    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (showModal && ref.current && !ref.current.contains(e.target)) {
                setShowModal(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showModal])

    return (
        <div className={styles.membersWrap}>



            <div className={styles.banner}>
                Looking to use Slack with people outside your organization? Give external teams or individuals restricted access to your workspace. Learn more
            </div>

            <div className={styles.header}>
                <h1 style={{ fontFamily: 'sans-serif' }}> Manage Members</h1>
                <div className={styles.headerSub}>
                    <button className='btn-1'>Export Member List </button>
                    <button className='btn-2'>Invite People</button>
                </div>
            </div>

            <div className={styles.listTop}>
                <input
                    className={styles.searchMembers}
                    type='text'
                    placeholder='Search'
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                />
                <button className={styles.filter}onClick=''>Filter</button>
            </div>
            
            {showModal ?
                <OptionsPopUp
                    ref={ref}
                    toggleModal={toggleModal}
                // name={this.state.dataModal.name}
                /> :
                null}
            <Table users={users}
                toggleModal={toggleModal}
                showingContacts={showingMembers} />
        </div>
    );
}




export default ManageMembers
