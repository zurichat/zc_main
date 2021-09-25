import Sidebar from './sidebar.component'
import { BrowserRouter } from 'react-router-dom'

export default function Root(props) {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  )
}
