import { useState } from "react"
import styles from "./FAQ.module.css"
import { Helmet } from "react-helmet"

const Index = () => {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected === i) {
      setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className={styles.faqs}>
      <Helmet>
        <title> FAQ - Zuri Chat</title>
      </Helmet>
      <h2 className={`${styles.h2} text-center`}>Commonly Asked Questions</h2>
      <div className={styles.wrapper}>
        <div className={styles.accordion}>
          {data.map((i, index) => (
            <div className={styles.items} key={index}>
              <div className={styles.title} onClick={() => toggle(i)}>
                <h6 className={styles.h6}>{i.question}</h6>
                <span className={styles.span}>
                  {selected === i ? (
                    <i className="fas fa-angle-up"></i>
                  ) : (
                    <i className="fas fa-angle-down"></i>
                  )}
                </span>
              </div>
              {selected === i && (
                <div
                  className={selected === i ? "answer show" : "answer"}
                  onClick={() => toggle(i)}
                >
                  {i.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.billing}>
        Get more information on{" "}
        <a className={styles.info} href="/faq">
          billing at Zuri Chat.
        </a>
      </div>
    </div>
  )
}

const data = [
  {
    question: "What are my payment options - credit card and/or invoice?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Our team has several accounts which are not being actively used, but which we don't want to disable. Do we still have to pay for them?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "My team has credits. How do we use them?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "We need to add new users to our team. How will that be billed?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "My team wants to cancel its subscription. How do we do that? Can we get a refund?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Do you offer discounts for non-profit organizations or educational institutions?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  }
]

export default Index

// .

// <tr className={styles.pricingTableRowFeature}>
//        <td colSpan="2" className={styles.colStart}></td>

// <td className={styles.pricingtableSpacer}></td>

// <td className={`{stles.pricingtableSpacer} {styles.lastColumn}`}></td>

// <tr className={styles.pricingTableRowFeature}>
//                 <td colSpan="2" className={styles.colStart}></td>

// .
