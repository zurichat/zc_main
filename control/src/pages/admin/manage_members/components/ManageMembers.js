import React, { useState, useRef, useEffect } from 'react';
import OptionsIcon from '../icons/three-dots.svg';
import '../styles/Members.css'
import OptionsPopUp from './OptionsPopUp';
import { Route } from 'react-router';
// import { GetWorkspaceUsers } from '../../../../../../utilities/src/zuri-utilities';
import { GetWorkspaceUsers } from '../../../../zuri-control';


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
        <div className='members-wrap'>



            <div className='banner'>
                Looking to use Slack with people outside your organization? Give external teams or individuals restricted access to your workspace. Learn more
            </div>

            <div className='header'>
                <h1 style={{ fontFamily: 'sans-serif' }}> Manage Members</h1>
                <div className='header-sub'>
                    <button className='btn-1'>Export Member List </button>
                    <button className='btn-2'>Invite People</button>
                </div>
            </div>

            <div className='list-contacts-top'>
                <input
                    className='search-contacts'
                    type='text'
                    placeholder='Search'
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                />
                <button className='filter' onClick=''>Filter</button>
            </div>
            {/*
            <Header />
            <ul className='members-list'>
                {showingMembers.map((user) => (

                    <Member
                        memberId={user.id}
                        memberName={user.name}
                        memberDate={user.date}
                    // optionsPopupAction={toggleModal}
                    />

                ))}
            </ul> */}
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



const Table = (props) => {
    return (
        <div>
            <thead>
                <tr>
                    <th className='heading' style={{color:'blue'}}>Name</th>
                    <th className='heading'>Account type</th>
                    <th className='heading'>Billing status</th>
                    <th className='heading'>Authentication</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.showingContacts.map((user) => (
                    <tr className='' key={user._id}>
                        <td className='member' key=''>
                        <MemberDetails 
                            userFirstName = {user.first_name}
                            userLastName = {user.last_name}
                            imageUrl = {user.image_url}
                            email = {user.email}
                            userName = {user.display_name}
                        /></td>
                        <td className='member' key=''>{user.role}</td>
                        <td className='member' key=''>Active</td>
                        <td className='member' key=''>Default</td>
                        <td className='member' key='' 
                        // onClick={props.toggleModal} 
                        onMouseLeave={props.toggleModal}><button className='options-btn' onMouseOut={props.toggleModal}><img src={OptionsIcon} alt='options' className='options-icon' onClick='' /></button></td>
                    </tr>))}
            </tbody>
        </div>
    )
}

const MemberDetails = (props) => {
    return (
        <div className='mem-row-2'>
            <img src={props.imageUrl} alt='' />
            <div className='mem-col'>
                <div className='memName'>{props.userFirstName}{props.userLastName}</div>
                <div className='mem-row'>
                    <div>{props.userFirstName}{props.userLastName}</div>
                    <div>{props.email}</div>
                </div>
            </div>
        </div>
    )
}

export default ManageMembers
