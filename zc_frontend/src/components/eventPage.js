import react from 'react'

import logo from './asset/people.jpg';
import logo1 from './asset/zurichatlogo.svg';
import styles from '../styles/eventPage.module.css'

function App() {
  return (
    <div className={styles.section2}>
      <div className={styles.subsection1}>
        <img src={logo} className={styles.subsection1-logo} alt="logo" />
      </div>
      <div className={styles.subsection2}>
        <div className={styles.sub-sub}>
          <img src={logo1} className={styles.subsection2-logo} alt="logo1"/>
          <h2>Zuri Meet</h2>
        </div>
        <h1>Get ready for Zuri Meet</h1>
        <p>Discover,learn,connect and <br/> prepare to inspired at Slack<br/><br/> Frontiers<br/><br/> this November.</p>
        <a
          className="subsection2-link"
          href="https://zuri.chat"
        >
          Check out more info <span>&#8594;</span> 
        </a>
      </div>
    </div>
  );
}

export default App;