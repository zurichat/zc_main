import React, { Component } from 'react'

export class AdminSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        return (

            <div className="form-container">
                <br />
                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}
                        style={{
                            color: "white",
                            backgroundColor: " #00B87C",
                            padding: "12px",
                            borderRadius: "10%",
                        }}
                    >Report Complaint</button>
                </div>
            </div >


        )
    }
}

export default AdminSetup
