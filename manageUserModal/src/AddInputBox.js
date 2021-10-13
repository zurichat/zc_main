import React, { useState } from "react"
import { Button, InputGroup } from "react-bootstrap"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import styles from "./styles/addmodal.module.css"

const AddInputBox = ({ config }) => {
  const [selectedMembers, setselectedMembers] = useState([])
  const animatedComponents = makeAnimated()

  const addMemberHandler = () => {
    config.addMembersEvent(selectedMembers)
  }

  return (
    <div className={`${styles.wrapper} w-100`}>
      <InputGroup className="mb-3 w-100">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={config.userList}
          placeholder="Enter a name or email..."
          value={selectedMembers}
          onChange={e => {
            setselectedMembers(e)
          }}
        />
        <Button
          variant="success"
          className={`${styles.button} mx-auto`}
          onClick={addMemberHandler}
          disabled={selectedMembers.length < 1}
        >
          Add
        </Button>
      </InputGroup>
    </div>
  )
}

export default AddInputBox
