import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/ChannelsTab.modules.css";
import { Table } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { getCurrentWorkspace } from "../../Utils/Common";
import { authAxios } from "../../Utils/Api";
import ToolTip from "../utils/Tooltip";
import axios from "axios";

// fixed default table headers needed by the view
const tableData = [
  {
    title: "Name",
    active: true,
    code: "name"
  },
  {
    title: "Created",
    active: true,
    code: "created_on"
  },
  {
    title: "Last active",
    active: true,
    code: "last_active"
  },
  {
    title: "Total membership",
    active: true,
    code: "members"
  },
  {
    title: "Messages Posted",
    active: true,
    code: "message_count"
  }
];

const FormatText = text => {
  const arr = text.split(" ");
  const result =
    arr.length > 6 ? arr.slice(0, 5).join(" ") + "..." : arr.join(" ");
  return result;
};

const ChannelsTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const node = useRef();
  const durationNode = useRef();
  const toggle = () => setIsOpen(!isOpen);
  const toggleColumnModal = () => setIsColumnModalOpen(!isColumnModalOpen);
  const [tableHeaderStateData, setTableHeaderStateData] = useState(tableData);
  const [apiStateData, setApiStateData] = useState([]);
  const [workspaceData, setWorkspaceData] = useState({});
  const currentWorkspace = getCurrentWorkspace();

  useEffect(() => {
    if (currentWorkspace) {
      authAxios
        .get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [currentWorkspace]);

  useEffect(() => {
    axios(
      `https://channels.zuri.chat/api/v1/${currentWorkspace}/workspace_channel/`
    )
      .then(res => {
        const formattedApiResult = res.data.map(x => {
          let tempArray = {};
          Object.keys(x).map(key => {
            if (key != "description") {
              tempArray = {
                ...tempArray,
                [key]: {
                  value: x[key],
                  styles: key === "name" ? styles.topic : "",
                  meta: key === "name" ? x.description : ""
                }
              };
            }
          });
          return tempArray;
        });
        setApiStateData(formattedApiResult);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    setTableHeaderStateData(tableHeaderStateData);
  }, []);

  useEffect(() => {
    const handleClick = e => {
      if (
        !(node.current && node.current.contains(e.target)) &&
        isColumnModalOpen
      ) {
        setIsColumnModalOpen(false);
      }
    };
    // add when mounted
    document.addEventListener("click", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isColumnModalOpen]);

  useEffect(() => {
    const handleClick = e => {
      if (
        !(durationNode.current && durationNode.current.contains(e.target)) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    // add when mounted
    document.addEventListener("click", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const options = ["Last 30 days", "All time"];

  const generateTableHeader = () => {
    const activeHeader = tableHeaderStateData.filter(x => x.active);
    return activeHeader.map((x, i) => <th key={"th_data" + i}>{x.title}</th>);
  };

  const generateTableBody = () => {
    let tableRowArray = [];
    if (apiStateData.length) {
      let currentIndex = 0;
      while (currentIndex <= apiStateData.length) {
        const tempInnerData = [];

        tableHeaderStateData.map((x, index) => {
          if (
            apiStateData[currentIndex] &&
            apiStateData[currentIndex][x?.code] &&
            x?.active
          ) {
            const { value, meta, styles } = apiStateData[currentIndex][x.code];

            const description = meta && FormatText(meta);
            let data = description ? (
              <td key={"td_body_" + index + "_" + currentIndex}>
                <div>
                  <p className={styles}>{`${value}`}</p>
                  <ToolTip toolTipText={meta}>{description}</ToolTip>
                </div>
              </td>
            ) : (
              <td key={"td_body_" + index + "_" + currentIndex}>
                {value instanceof Date && !isNaN(value)
                  ? `${value.toLocaleString}`
                  : `${value}`}
              </td>
            );
            tempInnerData.push(data);
          }
        });

        tableRowArray.push(
          <tr key={"tr_body_" + currentIndex}>{tempInnerData}</tr>
        );
        currentIndex++;
      }
      return tableRowArray;
    } else {
      return null;
    }
  };

  const toggleHeaderColumns = index => {
    tableHeaderStateData[index].active = !tableHeaderStateData[index].active;
    setTableHeaderStateData([...tableHeaderStateData]);
  };
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
    ));
  };

  const selectAll = () => {
    tableHeaderStateData.forEach(x => {
      x.active = true;
    });
    setTableHeaderStateData([...tableHeaderStateData]);
  };
  const resetColumns = () => {
    const defaultHeaders = tableData.map(x => x.title);
    tableHeaderStateData.forEach(x => {
      if (defaultHeaders.includes(x.title)) {
        x.active = true;
      } else {
        x.active = false;
      }
    });

    setTableHeaderStateData([...tableHeaderStateData]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.leftText}>{apiStateData.length} public channels</p>
        <div className={styles.right}>
          <p>Updated 3 days ago</p>
          <div className={styles.dropdownHeader} onClick={toggle}>
            <IoCalendarOutline className={styles.calender} />
            {selectedOption || options[0]}
            <MdKeyboardArrowDown className={styles.arrowDown} />
          </div>

          <button className={styles.button} onClick={toggleColumnModal}>
            Edit Columns
          </button>
          <button className={styles.button}>Export</button>
        </div>
      </div>

      {generateTableBody() === null ? (
        <p className={styles.emptyChannels}>
          There are no channels in your workspace currently
        </p>
      ) : (
        <Table hover className={styles.channelsTable}>
          <thead>
            <tr>{generateTableHeader()}</tr>
          </thead>
          <tbody>{generateTableBody()}</tbody>
        </Table>
      )}

      {isOpen && (
        <div className={styles.dropdownListContainer} ref={durationNode}>
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
        <div className={styles.columnsModal} ref={node}>
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

            {/* paid plans functionalities not yet implemented on zuri chat */}
            <div className={styles.basicsContainer}>
              <p>Available on Paid Plans</p>
              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Full Members
                </label>
              </div>

              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Guests
                </label>
              </div>

              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Messages posted by members
                </label>
              </div>

              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Members who posted
                </label>
              </div>

              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Members who viewed
                </label>
              </div>

              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Change in members who posted
                </label>
              </div>

              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Reactions added
                </label>
              </div>

              <div className={styles.radioFields}>
                <label
                  className={
                    workspaceData.version == "pro" ? "" : `${styles.grey}`
                  }
                >
                  <input
                    type="checkbox"
                    disabled={workspaceData.version != "pro"}
                  />{" "}
                  Members who reacted
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelsTab;
