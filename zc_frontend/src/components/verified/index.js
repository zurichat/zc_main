import "../../components/verified/master.css"


import { FiPhoneCall } from "react-icons/fi"
import Button from "../verified"
import FloatingButton from '../verified'

// import styled from 'styled-components'

const StyleGuide = () => {
    return (
        <>
            <h1>Primary Button</h1>
            <Button>
                Medium Button
            </Button>
            <Button>
                Medium Button
            </Button>
            <Button>
                <FiPhoneCall />{" "}Button
            </Button>
            <br />

            <h1>Secondary Button</h1>
            <Button variant={`secondary`}>
                Medium Button
            </Button>
            <Button variant={`secondary`}>
                Medium Button
            </Button>
            <Button variant={"secondary"}>
                <FiPhoneCall />{" "}Button
            </Button>
            <br />

            <h1>Tertiary Button</h1>
            <Button variant={"tertiary"}>
                Medium Button
            </Button>
            <Button variant={"tertiary"} className={"underline"}>
                Medium Button
            </Button>
            <Button variant={"tertiary"}>
                <FiPhoneCall />{" "}Button
            </Button>
            <Button variant={"tertiary"} className={"underline"}>
                <FiPhoneCall />{" "}Button
            </Button>
            <br />

            <h1>Floating Button</h1>
            <FloatingButton />
            <FloatingButton disabled />
            {/* <P >This is the test site</P>
<p className="subtext">This is the test site</p>
<p className="small_text">This is the test site</p>
<p className="header_1">This is the test site</p>
<p className="header_2">This is the test site</p>
<p className="normal_text">This is the test site</p> */}
        </>
    )
}

export default StyleGuide;

