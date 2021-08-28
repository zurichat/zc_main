/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
// import Image from 'next/image'
import Script from 'next/script';
import React, { useState } from 'react';

import styles from '../styles/Signup.module.css';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up | Zuri Chat</title>
        <link rel="icon" href="/zurichatlogo.svg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className={`container text-center m-auto`}>
        <div className={`pt-5 px-3 mt-0`}>
          <a className={`${styles.logolink}`} href="#" title="Zuri">
            <span>
              <img
                src="/zurichatlogo.svg"
                alt="Zuri"
                width="60px"
                height="60px"
              />
              <p className={`d-inline p-1 ${styles.logo}`}>Zuri</p>
            </span>
          </a>

          <h2 className={styles.signin_text}>Sign in to Zuri</h2>
          <p className={styles.subtext}>Sign in with your official email</p>
          <div className={`my-3`}>
            <button
              className={`${styles.button_outline} m-0 col-12 col-md-6 px-2 px-md-5 py-2 btn btn-outline-dark`}
            >
              <img
                className={`text-align-center px-2`}
                src="/googleicon.svg"
                alt="google icon"
              />
              Sign in with Google
            </button>
          </div>
          <div className={`my-3`}>
            <button
              className={`${styles.button_outline} m-0 col-12 col-md-6 btn px-2 px-md-5 py-2 btn-outline-primary`}
            >
              <img
                className={`text-align-center px-2`}
                src="/facebookicon.svg"
                alt="google icon"
              />
              Sign in with Facebook
            </button>
          </div>
          <div className={`d-flex`}>
            <div className={`col-12 col-md-6 m-auto mt-4`}>
              <p className={`mb-2 text-center ${styles.email_subheading}`}>
                Or sign in with Email
              </p>
            </div>
          </div>
          <div className={`d-flex ${styles.email_input}`}>
            <div className={`mb-3 col-12 col-md-6 m-auto`}>
              <input
                type="email"
                className={`py-2 form-control ${styles.email_inputs}`}
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }}
                placeholder="aristotle@gmail.com"
              />
            </div>
          </div>

          <div>
            <button
              className={` ${styles.button} btn mb-3 col-12 col-md-6 px-5 px-md-5 py-2 btn-primary`}
            >
              Sign in with Email
            </button>
          </div>
          <span className={``}>
            Don't have an account?{' '}
            <a className={styles.link} href="/signup">
              Create an account
            </a>
          </span>
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
}
