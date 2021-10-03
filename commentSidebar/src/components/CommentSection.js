import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import Chats from "./Chats";
import CommentBox from "./CommentBox";

const CommentSection = ({header="Comments"}) => {
   
    // const[text,setText] = useState("");
    // const[comments,setComments] = useState(JSON.parse(localStorage.getItem("comments")) || []);
    // useEffect(() => {
    // localStorage.setItem("comments",JSON.stringify(comments));
    // },[comments])
    
    // const handleInput = (evt) => {
    //    setText(evt.target.value)
    // }
    // const chats = {
    //     author:"Yasir",
    //     message:text,
    //     time:"just now"
    // }
    // const handleAddComment = () => {
    //     setComments([...comments,chats]);
    //    setText("");
    // }
   
    // const commentArray = localStorage.setItem("comments",JSON.stringify(comments));
    // console.log(commentArray);
    // const commentArray = JSON.parse(localStorage.getItem("comments"))
    // console.log(commentArray)

    return(
    <Wrapper>
        <Header>
            {header}
        </Header>
        <Chats />
        <CommentBox />
    </Wrapper>
    )

}
const Wrapper = styled.aside`
display: grid;
grid-template-rows:auto 1fr auto;

/* width:399px; */

margin-left: 8px;
background-color: #E5E5E5;
height: 92vh;
padding:0 0 20px 0;

`
const Header = styled.header`
background: hsla(160, 100%, 36%, 1);
padding: 12px 16px;
margin-right: -16px;
color: white;
font-weight: 700;

font-size: ${18 / 16}rem;
;
`

export default CommentSection;