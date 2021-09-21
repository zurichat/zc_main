import { useState } from 'react'
import Circle from '../assets/circle.svg'
import SearchIcon from '../assets/searchIcon.svg'
import CircleDot from '../assets/circleDot.svg'
import SearchKite from '../assets/kites1.svg'
import LeftKite from '../assets/leftKite.svg'
import RightKite from '../assets/rightKite.svg'
import Mail from '../assets/mail.svg'
import SectionOneStyles from '../styles/SectionOne.module.css'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className={SectionOneStyles.app}>
      <div className={SectionOneStyles.offer}>
        <h1>Collaborate faster on zuri with third-party apps</h1>

        <p>
          <span>INTEGRATE</span> | <span>SET UP</span> |{' '}
          <span>COLLABORATE</span>
        </p>
        <img src={LeftKite} alt="icon" className={SectionOneStyles.leftKite} />
        <img src={RightKite} className={SectionOneStyles.rightKite} />

        <button>Get Essentials Apps</button>
      </div>

      <img src={CircleDot} className={SectionOneStyles.circleDot} />
      <img src={Circle} className={SectionOneStyles.circleLine} />
      <img src={Mail} className={SectionOneStyles.mail} />

      <img src={SearchIcon} className={SectionOneStyles.searchIcon} />

      <input
        name="search"
        value={search}
        onChange={e => {
          setSearch(e.target.value)
        }}
        placeholder="What app are you looking for?"
      />

      <img src={SearchKite} className={SectionOneStyles.searchKite} />
    </div>
  )
}

export default App
