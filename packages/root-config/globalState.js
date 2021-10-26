import { BehaviorSubject } from 'rxjs'

const $behaviorSubject = new BehaviorSubject('')

export default $behaviorSubject

let loggedInUserInfo = JSON.parse(sessionStorage.getItem('user'))

export let loggedInUser = {}

$behaviorSubject.subscribe(data => {
  loggedInUser = { ...data }
})

if (loggedInUserInfo?.id) $behaviorSubject.next({ ...loggedInUserInfo })

// Example

//Chess Plugin

// export let chessSubscription
// $behaviorSubject.subscribe(data => {
//   chessSubscription = data
// })
