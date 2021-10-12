import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "../ebooks/styles/ebooks.module.css"
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'



const index = () => {
    return (
        <div>
            <Header />

            <div className={` container ${styles.content}`}>
 {/* Wrapper 1  */}
<div className={`${styles.wrapper}`}>
  <div className={`p-4 ${styles.left}`}>
     <img src={img1} alt="Ebook" className="img-fluid" />
  </div>
  <div className={`${styles.right}`}>
    <h3 className="h3">How to Code as a Programmer</h3>
     <p>Determine your path after exploring different careers in tech and hearing from real-life web developers, data scientists, and more.</p>
  <button className={`${styles.button}`}>Get Ebook</button>
  </div>
 
 
</div>
{/* <!-- End of Wrapper 1  --> */}
  
{/* <!--  Wrapper 2  --> */}
    <div className={`${styles.wrapper2}`}>
  
  <div className={`p-4 ${styles.left2}`}>
    <h3 className="h3">Networking in Internship</h3>
     <p>Whether you are part of a sports league, attending a conference, or in the queue to order a morning coffee, you can make a lifetime connection.</p>
  <button className={`${styles.button}`}>Get Ebook</button>
  </div>
 
    <div className="right2 col-lg-4 col-sm-12  p-4">
     <img src={img2} alt="Ebook"  className="img-fluid"/>
  </div>
 
</div>
  {/* <!--  End of Wrapper 2  --> */}
  
  
                
{/* Wrapper 3  */}
<div className={`${styles.wrapper}`}>
  <div className={`p-4 ${styles.left}`}>
     <img src={img1} alt="Ebook" className="img-fluid" />
  </div>
  <div className={`${styles.right}`}>
    <h3 className="h3">How to Code as a Programmer</h3>
     <p>Determine your path after exploring different careers in tech and hearing from real-life web developers, data scientists, and more.</p>
  <button className={`${styles.button}`}>Get Ebook</button>
  </div>
 
 
</div>
{/* <!-- End of Wrapper 3  --> */}
  
{/* <!--  Wrapper 4  --> */}
    <div className={`${styles.wrapper2}`}>
  
  <div className={`p-4 ${styles.left2}`}>
    <h3 className="h3">Networking in Internship</h3>
     <p>Whether you are part of a sports league, attending a conference, or in the queue to order a morning coffee, you can make a lifetime connection.</p>
  <button className={`${styles.button}`}>Get Ebook</button>
  </div>
 
    <div className="right2 col-lg-4 col-sm-12  p-4">
     <img src={img2} alt="Ebook"  className="img-fluid"/>
  </div>
 
</div>
  {/* <!--  End of Wrapper 4  --> */}




  </div>


            <Footer />
            
        </div>
    )
}

export default index;
