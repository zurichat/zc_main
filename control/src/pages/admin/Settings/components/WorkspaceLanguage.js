import React from 'react'

const myStyle = {
    inputfield: {
        margin: "10px 0",
        width:"70%",
    },
    button: {
        backgroundColor:"#00B87C",
        color:"#ffffff",
        border: "none"
    },
}

const WorkspaceLanguage = () => {
    return (
        <>
            <select class="form-select" style={myStyle.inputfield}>
                <option selected>English(US)</option>
                <option value="1">Enlish(UK)</option>
                <option value="2">French</option>
            </select>
            <button type="button" className="btn btn-primary" style={myStyle.button}>Save</button>
        </>
    )
}

export default WorkspaceLanguage
