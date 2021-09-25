import Sidebar from './sidebar.component'
import { BrowserRouter } from 'react-router-dom'
import root from 'react-shadow'
import styles from './styles/index.css'

export default function Root(props) {
  return (
    <root.section>
      <style>{styles.toString()}</style>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </root.section>
  )
}
