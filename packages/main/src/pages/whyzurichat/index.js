import React from 'react'
import styles from './why.module.css'
import Footer from "./footer";
import {
    TopNavigationBar
  } from "../../components";
import Body from './Body';
export default function WhyZuriChat() {
  return (
    <div>
        <TopNavigationBar />
        <Body />
        <Footer/>
        
    </div>
  )
}
