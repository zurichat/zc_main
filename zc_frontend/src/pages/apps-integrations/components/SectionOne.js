import { useState } from 'react'
import { ReactComponent as Circle } from '../../../assets/circle.svg'
import { ReactComponent as SearchIcon } from '../../../assets/searchIcon.svg'
import { ReactComponent as CircleDot } from '../../../assets/circleDot.svg'
import { ReactComponent as SearchKite } from '../../../assets/kites1.svg'
import { ReactComponent as LeftKite } from '../../../assets/leftKite.svg'
import { ReactComponent as RightKite } from '../../../assets/rightKite.svg'
import { ReactComponent as Mail } from '../../../assets/mail.svg'
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
        <LeftKite className={SectionOneStyles.leftKite} />
        <RightKite className={SectionOneStyles.rightKite} />

        <button>Get Essentials Apps</button>
      </div>

      <CircleDot className={SectionOneStyles.circleDot} />
      <Circle className={SectionOneStyles.circleLine} />
      <Mail className={SectionOneStyles.mail} />

      <SearchIcon className={SectionOneStyles.searchIcon} />

      <input
        name="search"
        value={search}
        onChange={e => {
          setSearch(e.target.value)
        }}
        placeholder="What app are you looking for?"
      />

      <SearchKite className={SectionOneStyles.searchKite} />
    </div>
  )
}

export default App
