import { Provider } from 'react-redux'
import { store } from './redux/index'
import TopNavBar from './TopNavBar'
// import Topbar from './Topbar'

export default function Root() {
  return (
    <Provider store={store}>
      <TopNavBar />
    </Provider>
  )
}

// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>
// }
