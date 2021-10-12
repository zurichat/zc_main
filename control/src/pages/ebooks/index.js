import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './styles/ebooks.module.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'


const styles  = {
    color: "red",
}

const index = () => {
    return (
        <div>
            <Header />

            <div className="container my-5">
 {/* Wrapper 1  */}
<div className="wrapper row g-3 flex align-items-center my-5 sm-flex-column bg-light p-2">
  <div className="left col-lg-4 col-sm-12 p-4">
     <img src={img1} alt="Ebook" className="img-fluid" />
  </div>
  <div className="right col-8">
    <h3 className="h3">How to Code as a Programmer</h3>
     <p>Determine your path after exploring different careers in tech and hearing from real-life web developers, data scientists, and more.</p>
  <button className="btn btn-success">Get Ebook</button>
  </div>
 
 
</div>
{/* <!-- End of Wrapper 1  --> */}
  
{/* <!--  Wrapper 2  --> */}
    <div className="wrapper2 row flex align-items-center my-5 sm-flex-column bg-light p-2">
  
  <div className="left2 col-lg-8 col-sm-12 p-3">
    <h3 className="h3">Networking in Internship</h3>
     <p>Whether you are part of a sports league, attending a conference, or in the queue to order a morning coffee, you can make a lifetime connection.</p>
  <button className="btn btn-success">Get Ebook</button>
  </div>
 
    <div className="right2 col-lg-4 col-sm-12  p-4">
     <img src={img2} alt="Ebook"  className="img-fluid"/>
  </div>
 
</div>
  {/* <!--  End of Wrapper 2  --> */}
  
  {/* <!-- Wrapper 3 --> */}
  <div className="wrapper row flex align-items-center my-5 sm-flex-column bg-light p-2 ">
  <div className="left col-lg-4 col-sm-12 p-4">
     <img src={img1} alt="Ebook" className="img-fluid" />
  </div>
  <div className="right col-lg-8 col-sm-12">
    <h3 className="h3">How to Code as a Programmer</h3>
     <p>Determine your path after exploring different careers in tech and hearing from real-life web developers, data scientists, and more.</p>
  <button className="btn btn-success">Get Ebook</button>
  </div>
 
 
</div>
 {/* End of Wrapper 3   */}
  
   {/* Wrapper 4   */}
   <div className="wrapper2 row flex align-items-center my-5 sm-flex-column bg-light p-2">
  
  <div className="left2 col-lg-8 col-sm-12 p-4">
    <h3 className="h3">Networking in Internship</h3>
     <p>Whether you are part of a sports league, attending a conference, or in the queue to order a morning coffee, you can make a lifetime connection.</p>
  <button className="btn btn-success">Get Ebook</button>
  </div>
 
    <div className="right2 col-lg-4 col-sm-12 p-4">
     <img src={img2} alt="Ebook"   className="img-fluid"/>
  </div>
 
</div>
  {/* <!--  End of Wrapper 4  --> */}
  </div>


            <Footer />
            
        </div>
    )
}

export default index;
