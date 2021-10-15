import React, { useState } from "react"
import styled from "styled-components"

const DefaultStatus = ({
  setStatusText,
  setStatusEmoji,
  setChosenStatus,
  setChoosePeriod
}) => {
  const [defaultStatus, setDefaultStatus] = useState([
    {
      icon: "📅",
      text: "In a meeting",
      time: {
        label: "1 hour",
        value: "one_hour"
      }
    },
    {
      icon: "🚌",
      text: "Commuting",
      time: {
        label: "4 hours",
        value: "four_hours"
      }
    },
    {
      icon: "🤒",
      text: "Out sick",
      time: {
        label: "Today",
        value: "today"
      }
    },
    {
      icon: "🌴",
      text: "Vacation",
      time: {
        label: "Don't clear",
        value: "dont_clear"
      }
    },
    {
      icon: "🏡",
      text: "Working remotely",
      time: {
        label: "Today",
        value: "today"
      }
    }
  ])

  return (
    <Status>
      <h1>For HNGi8 x I4G</h1>
      <>
        {defaultStatus.map((status, idx) => (
          <div
            onClick={() => {
              setChosenStatus(status)
              setStatusText(status.text)
              setStatusEmoji(status.icon)
              setChoosePeriod(status.time.value)
            }}
            key={idx}
            className="status"
          >
            <span className="status__icon">{status.icon}</span>
            <span className="status__text" id="status__text">
              {status.text} -
            </span>
            <span className="status__time" id="status__time">
              {status.time.label}
            </span>
          </div>
        ))}
      </>
    </Status>
  )
}

export default DefaultStatus

// styles

const Status = styled.div`
  h1 {
    color: #999999;
    font-weight: 600;
    font-size: 1rem;
    padding-left: 0.5rem;
    margin-bottom: -0.6rem;
  }
  .status {
    cursor: pointer;
    padding: 0.5rem;
    transition: 0.3s all;

    &__text {
      font-weight: 700;
      color: #333333;
      margin-right: 0.3rem;
    }

    &__time {
      font-weight: 500;
      color: #616161;
    }

    &__icon {
      margin-right: 0.3rem;
    }

    &:hover {
      background-color: #27aa62;
      width: 100%;
      #status__text,
      #status__time {
        color: #fff;
      }
    }
  }
`
