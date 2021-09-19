import React from 'react'

export const Success = (props)=>{
     
     
        return (
           
            <section className="form-container">
                {props.postSucc ? 
                    <div>
                    <h1 className="text-success"><b>Successful!</b></h1>
                    <p className="text-success">Your complaint has been reported</p>

                    </div> 
                     :
                    <div>
                    <h1 className="text-danger"><b>Unsuccessful!</b></h1>
                    <p className="text-danger">Your complaint failed to be reported</p>

                    </div>  
                 }
                 
            </section>
        )
                }

export default Success;
