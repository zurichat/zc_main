import styles from '../styles/Section3.module.css'

const faqEntries = [
  {
    question: 'What are my payment options - credit card and/or invoicing?',
    answer: ''
  },
  {
    question:
      'Our team has several accounts which are not being actively used, but which we don’t want to disable. Do we still have to pay for them?',
    answer: ''
  },
  { question: 'My team has credits. How do we use them?', answer: '' },
  {
    question: 'We need to add new users to our team. How will that be billed?',
    answer: ''
  },
  {
    question:
      'My team wants to cancel its subscription. How do we do that? Can we get a refund?',
    answer: ''
  },
  {
    question:
      'Do you offer discounts for non-profit organizations or educational institutions?',
    answer: ''
  }
]

function Section3() {
  return (
    <section className={`${styles.section3} ${styles.py3}`}>
      <div className={styles.container}>
        <header className={styles.my3}>
          <h2>Commonly asked questions</h2>
        </header>
        <div className="faq-questions">
          <div className={styles.faqQuestions}>
            {faqEntries.map((_faq, key) => (
              <div className={styles.questionItem} key={key}>
                <p className={styles.question}>
                  {_faq.question}
                  <span
                    className={`${styles.arrow} ${styles.arrowDown}`}
                  ></span>
                </p>
                <p className="answer"></p>
              </div>
            ))}
          </div>
        </div>
        <footer className={`${styles.textAlignC} ${styles.mt3}`}>
          <p className={styles.pv5}>
            Get more information on{' '}
            <a className={styles.textLink} href="./">
              billing at Zuri Chat.
            </a>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Section3
