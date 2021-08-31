import { useState } from "react";
import "../../styles/FAQ.css";

const Index = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="faqs">
      <h1>Commonly Asked Questions</h1>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="items">
              <div className="title" onClick={() => toggle(i)}>
                <h5>{item.question}</h5>
                <span>{selected === i ? "˄" : "˅"}</span>
              </div>
              <div
                className={selected === i ? "answer show" : "answer"}
                onClick={() => toggle(i)}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: "What are my payment options - credit card and/or invoice?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias.",
  },
  {
    question:
      "Our team has several accounts which are not being actively used, but which we don't want to disable. Do we still have to pay for them?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias.",
  },
  {
    question: "My team has credits. How do we use them?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias.",
  },
  {
    question: "We need to add new users to our team. How will that be billed?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias.",
  },
  {
    question:
      "My team wants to cancel its subscription. How do we do that? Can we get a refund?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias.",
  },
  {
    question:
      "Do you offer discounts for non-profit organizations or educational institutions?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias.",
  },
];

export default Index;
