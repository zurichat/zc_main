import { useState } from "react";
import styles from "./FAQ.module.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const toggle = item =>
    selected === item ? setSelected(null) : setSelected(item);

  const data_lang = localStorage.getItem("myLanguage");
  const { t } = useTranslation();

  return (
    <div className={styles.faqs}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.h2}`}>{t("pricing.FAQ.headline")}</h2>
        <div className={styles.accordion}>
          {data_lang == "en"
            ? en_data.map((i, index) => (
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
              ))
            : data_lang == "fr"
            ? fr_data.map((i, index) => (
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
              ))
            : data_lang == "zh"
            ? zh_data.map((i, index) => (
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
              ))
            : data_lang == "de"
            ? de_data.map((i, index) => (
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
              ))
            : null}
        </div>
        <div className={styles.billing}>
          {t("pricing.FAQ.link_info")}{" "}
          <a className={styles.info} href="/faq">
            {t("pricing.FAQ.link")}
          </a>
        </div>
      </div>
    </div>
  );
};

const en_data = [
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
];

const fr_data = [
  {
    question:
      "Quelles sont mes options de paiement - carte de cr??dit et/ou facture ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Notre ??quipe a plusieurs comptes qui ne sont pas utilis??s activement, mais que nous ne voulons pas d??sactiver. Doit-on encore les payer ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "Mon ??quipe a des cr??dits. Comment les utilisons-nous ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Nous devons ajouter de nouveaux utilisateurs ?? notre ??quipe. Comment cela sera-t-il factur?? ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Mon ??quipe souhaite annuler son abonnement. Comment fait-on cela? Pouvons-nous obtenir un remboursement?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Offrez-vous des rabais pour les organisations ?? but non lucratif ou les ??tablissements d'enseignement?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  }
];

const zh_data = [
  {
    question: "??????????????????????????? - ????????????/?????????",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "???????????????????????????????????????????????????",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "?????????????????????????????????????????????????????????????????????",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "??????????????????????????????????????????????????????????????????????????????",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "?????????????????????????????????????????????????????????",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  }
];

const de_data = [
  {
    question:
      "Welche Zahlungsm??glichkeiten habe ich ??? Kreditkarte und/oder Rechnung?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Unser Team hat mehrere Konten, die nicht aktiv genutzt werden, die wir aber nicht deaktivieren m??chten. M??ssen wir sie noch bezahlen?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question: "Mein Team hat Credits. Wie benutzen wir sie?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Wir m??ssen unserem Team neue Benutzer hinzuf??gen. Wie wird das abgerechnet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Mein Team m??chte sein Abonnement k??ndigen. Wie machen wir das? K??nnen wir eine R??ckerstattung erhalten?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  },
  {
    question:
      "Bieten Sie Rabatte f??r gemeinn??tzige Organisationen oder Bildungseinrichtungen an?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur recusandae maiores molestias. Tempore nemo dolor debitis velit voluptate distinctio adipisci amet, laboriosam est dignissimos sequi expedita ab at molestias."
  }
];

export default Index;

// .

// <tr className={styles.pricingTableRowFeature}>
//        <td colSpan="2" className={styles.colStart}></td>

// <td className={styles.pricingtableSpacer}></td>

// <td className={`{stles.pricingtableSpacer} {styles.lastColumn}`}></td>

// <tr className={styles.pricingTableRowFeature}>
//                 <td colSpan="2" className={styles.colStart}></td>

// .
