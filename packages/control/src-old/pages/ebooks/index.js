import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../ebooks/styles/ebooks.module.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

const index = () => {
  return (
    <div>
      <Header />

      <div className={`${styles.mycon}`}>
        <div className="container">
          {/* Wrapper 1  */}
          <div className={`${styles.wrapper}`}>
            <div className={`${styles.left}`}>
              <img
                src={img1}
                alt="Ebook"
                className={`img-fluid ${styles.leftImg}`}
              />
            </div>
            <div className={`${styles.right}`}>
              <h3 className="h3">How to Code as a Programmer</h3>
              <p>
                Determine your path after exploring different careers in tech
                and hearing from real-life web developers, data scientists, and
                more.
              </p>
              <a href="/#" className={`${styles.button}`}>
                Get Ebook
              </a>
            </div>
          </div>
          {/* <!-- End of Wrapper 1  --> */}

          {/* <!--  Wrapper 2  --> */}
          <div className={`${styles.wrapper2}`}>
            <div className={`${styles.left2}`}>
              <h3 className="h3">Networking in Internship</h3>
              <p>
                Whether you are part of a sports league, attending a conference,
                or in the queue to order a morning coffee, you can make a
                lifetime connection.
              </p>
              <a href="/#" className={`${styles.button}`}>
                Get Ebook
              </a>
            </div>

            <div className={`${styles.right2}`}>
              <img
                src={img2}
                alt="Ebook"
                className={`img-fluid ${styles.rightImg}`}
              />
            </div>
          </div>
          {/* <!--  End of Wrapper 2  --> */}

          {/* Wrapper 3  */}
          <div className={`${styles.wrapper}`}>
            <div className={`${styles.left}`}>
              <img
                src={img1}
                alt="Ebook"
                className={`img-fluid ${styles.leftImg}`}
              />
            </div>
            <div className={`${styles.right}`}>
              <h3 className="h3">How to Code as a Programmer</h3>
              <p>
                Determine your path after exploring different careers in tech
                and hearing from real-life web developers, data scientists, and
                more.
              </p>
              <a href="/#" className={`${styles.button}`}>
                Get Ebook
              </a>
            </div>
          </div>
          {/* <!-- End of Wrapper 3  --> */}

          {/* <!--  Wrapper 4  --> */}
          <div className={`${styles.wrapper2}`}>
            <div className={`${styles.left2}`}>
              <h3 className="h3">Networking in Internship</h3>
              <p>
                Whether you are part of a sports league, attending a conference,
                or in the queue to order a morning coffee, you can make a
                lifetime connection.
              </p>
              <a href="/#" className={`${styles.button}`}>
                Get Ebook
              </a>
            </div>

            <div className={`${styles.right2}`}>
              <img
                src={img2}
                alt="Ebook"
                className={`img-fluid ${styles.rightImg}`}
              />
            </div>
          </div>
          {/* <!--  End of Wrapper 4  --> */}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default index;
