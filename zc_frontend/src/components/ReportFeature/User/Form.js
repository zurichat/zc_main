import React, { Component } from 'react';
import AdminSetup from './AdminSetup';
import ComplaintProfiles from './ComplaintProfiles';
import {Confirm} from './Confirm';
import Success from './Success';
import './reports.css';

export class UserForm extends Component {
    state = {
        step: 1,
        email: '',
        offence: 'Anti Semitism',
        description:'',
        date:'',
        anonymous: false,
        postSuccess:true,
        password: '',
        facebook: '',
        twitter: '',
        github: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        if(input === 'anonymous'){
            this.setState({
                [input]: e.target.checked
            })
            // console.log(input, e.target.checked);
        }else{
        this.setState({
            [input]: e.target.value
        })
        // console.log(input, e.target.value);
    }
    };

    setPostSuccess = (response) =>{
        this.setState({
            postSuccess: response
        })
    }

    render() {
        const { step } = this.state;
        const { email, offence,date, description,anonymous, postSuccess, password, facebook, twitter, github } = this.state;
        const values = { email, offence,date, description, anonymous, postSuccess, password, facebook, twitter, github };

        switch (step) {
            case 1:
                return (
                    <AdminSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <ComplaintProfiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        setPostSucc={this.setPostSuccess}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success 
                    postSucc = {postSuccess}/>
                );
                default:
                    return
        }
    }
}

export default UserForm
