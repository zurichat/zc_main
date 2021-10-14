import React, { useState, useEffect, useRef } from "react"
import styles from "../styles/ChannelsTab.modules.css"
import { Table } from "react-bootstrap"
import { MdKeyboardArrowDown } from "react-icons/md"

const date = new Date()

const tableData = [
  {
    title: "Name",
    default: true,
    active: true,
    code: "name"
  },
  {
    title: "Created",
    default: true,
    active: true,
    code: "created"
  },
  {
    title: "Last active",
    default: true,
    active: true,
    code: "last_active"
  },
  {
    title: "Total membership",
    default: true,
    active: true,
    code: "total_members"
  },
  {
    title: "Messages Posted",
    default: true,
    active: true,
    code: "posted_messages"
  }
]

const apiData = [
  {
    name: {
      value: "kingsley okoro",
      styles: styles.topic,
      meta: "this channel is for... well",
      metaStyles: [styles.description]
    },
    created: { value: date.toLocaleString(), styles: "", meta: "" },
    last_active: { value: date.toLocaleString(), styles: "", meta: "" },
    total_members: {
      value: Math.floor(Math.random() * 20),
      styles: "",
      meta: ""
    },
    posted_messages: {
      value: Math.floor(Math.random() * 30),
      styles: "",
      meta: ""
    }
  },
  {
    name: {
      value: "Favour chris",
      styles: styles.topic,
      meta: "This channel is for... well",
      metaStyles: [styles.description]
    },
    created: { value: date.toLocaleString(), styles: "", meta: "" },
    last_active: { value: date.toLocaleString(), styles: "", meta: "" },
    total_members: {
      value: Math.floor(Math.random() * 20),
      styles: "",
      meta: ""
    },
    posted_messages: {
      value: Math.floor(Math.random() * 30),
      styles: "",
      meta: ""
    }
  },
  {
    name: {
      value: "Tessy Igwe",
      styles: styles.topic,
      meta: "This channel is for... well",
      metaStyles: [styles.description]
    },
    created: { value: date.toLocaleString(), styles: "", meta: "" },
    last_active: { value: date.toLocaleString(), styles: "", meta: "" },
    total_members: {
      value: Math.floor(Math.random() * 20),
      styles: "",
      meta: ""
    },
    posted_messages: {
      value: Math.floor(Math.random() * 30),
      styles: "",
      meta: ""
    }
  }
]

const ChannelsTab = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const node = useRef(null)
  const toggle = () => setIsOpen(!isOpen)
  const toggleColumnModal = () => setIsColumnModalOpen(!isColumnModalOpen)
  const [tableHeaderStateData, setTableHeaderStateData] = useState(tableData)
  const [apiStateData, setApiStateData] = useState(apiData)

  useEffect(() => {
    setTableHeaderStateData(tableHeaderStateData)
  }, [])

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setIsColumnModalOpen(false)
  }

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  const options = ["Last 30 days", "All time"]

  const generateTableHeader = () => {
    const activeHeader = tableHeaderStateData.filter(x => x.active)
    return activeHeader.map((x, i) => <th key={"th_data" + i}>{x.title}</th>)
  }

  const generateTableBody = () => {
    return apiStateData.map((x, i) => {
      const tempInnerData = []
      return (
        <tr key={"tr_body_" + i}>
          {Object.keys(x).forEach((key, index) => {
            let headerIndex = tableHeaderStateData.findIndex(
              x => x.code === key
            )
            if (headerIndex > -1 && tableHeaderStateData[headerIndex].active) {
              const { value, meta, styles, metaStyles } = x[key]
              let data = meta ? (
                <td key={"td_body_" + index}>
                  <div>
                    <p className={styles}>{`${value}`}</p>
                    <p className={metaStyles}>{`${meta}`}</p>
                  </div>
                </td>
              ) : (
                <td key={"td_body_" + index}>{`${value}`}</td>
              )
              tempInnerData.push(data)
            }
          })}
          {tempInnerData}
        </tr>
      )
    })
  }

  const toggleHeaderColumns = index => {
    tableHeaderStateData[index].active = !tableHeaderStateData[index].active
    setTableHeaderStateData([...tableHeaderStateData])
  }
  const getHeaderBoxes = () => {
    return tableHeaderStateData.slice(1).map((x, i) => (
      <div key={"column_header_" + (i + 1)} className={styles.radioFields}>
        <label htmlFor={x.code}>
          <input
            type="checkbox"
            id={x.code}
            checked={x.active}
            onChange={() => toggleHeaderColumns(i + 1)}
          />{" "}
          {x.title}
        </label>
      </div>
    ))
  }

  const selectAll = () => {
    tableHeaderStateData.forEach(x => {
      x.active = true
    })
    setTableHeaderStateData([...tableHeaderStateData])
  }
  const resetColumns = () => {
    const defaultHeaders = tableData.map(x => x.title)
    tableHeaderStateData.forEach(x => {
      if (defaultHeaders.includes(x.title)) {
        x.active = true
      } else {
        x.active = false
      }
    })

    setTableHeaderStateData([...tableHeaderStateData])
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.leftText}>3 public channels</p>
        <div className={styles.right}>
          <p>Updated 3 days ago</p>
          <div className={styles.dropdownHeader} onClick={toggle}>
            {selectedOption || options[0]}
            <MdKeyboardArrowDown className={styles.arrowDown} />
          </div>

          <button className={styles.button} onClick={toggleColumnModal}>
            Edit Columns
          </button>
          <button className={styles.button}>Export</button>
        </div>
      </div>

      <Table hover responsive="md" className={styles.table}>
        <thead>
          <tr>{generateTableHeader()}</tr>
        </thead>
        <tbody>{generateTableBody()}</tbody>
      </Table>

      {isOpen && (
        <div className={styles.dropdownListContainer} ref={node}>
          <ul className={styles.dropdownList}>
            {options.map((option, i) => (
              <li
                className={styles.listItem}
                onClick={onOptionClicked(option)}
                key={i}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isColumnModalOpen && (
        <div className={styles.columnsModal}>
          <div className={styles.columnsModalHeader}>
            <p className={styles.title}>Edit Columns</p>
            <p className={styles.description}>
              Choose which columns you'd like.
            </p>
            <div className={styles.columnLinks}>
              <span className={styles.firstLink} onClick={selectAll}>
                Select all
              </span>
              &nbsp;|&nbsp;
              <span className={styles.secondLink} onClick={resetColumns}>
                Reset columns
              </span>
            </div>
          </div>
          <div className={styles.columnsModalContent}>
            <div className={styles.basicsContainer}>
              <p>Basics</p>
              {getHeaderBoxes()}
            </div>
            <div className={styles.horizontalDivider}>
              <hr />
            </div>
            <div className={styles.activity}>
              <p>Activity</p>
              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" /> Messages posted
                </label>
              </div>
            </div>
            <div className={styles.horizontalDivider}>
              <hr />
            </div>
            <div className={styles.basicsContainer}>
              <p>Available on Paid Plans</p>
              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Full Members
                </label>
              </div>

              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Guests
                </label>
              </div>

              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Messages posted by members
                </label>
              </div>

              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Members who posted
                </label>
              </div>

              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Members who viewed
                </label>
              </div>

              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Change in members who
                  posted
                </label>
              </div>

              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Reactions added
                </label>
              </div>

              <div className={styles.radioFields}>
                <label>
                  <input type="checkbox" disabled /> Members who reacted
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChannelsTab
