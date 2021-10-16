import styles from "../styles/TopBarSearchModal.module.css"
import { useState } from "react"
import axios from "axios"
import SearchModalResult from "./ModalAutoCompleteResult"
import { BigModal } from "./bigModal"

const base_URL = "https://jsonplaceholder.typicode.com/todos"

const TopBarSearchModal = () => {
  const [value, setValue] = useState("")
  const [items, setItems] = useState("")
  const [filter, setFilter] = useState("")
  const [isSearchOpen, setOpenSearch] = useState(false)

  const onSearchSubmit = e => {
    if (e.keyCode === 13 && value.length >= 1) {
      setOpenSearch(true)
    }
  }

  const onInputChange = e => {
    setValue(e.target.value)
    getData()
  }
  function getData() {
    axios.get(base_URL).then(res => {
      const result = Object.values(res.data)
        .map(item => {
          return item
        })
        .filter(item => {
          return item.title.includes(value)
        })

      const n = 10 //get the first 15 items
      setItems(result.slice(0, n))
    })
  }

  const pluginName = window.location.href
  const newName = pluginName.split("/")
  const plugins = [
    {
      name: "todo",
      baseUrl: "todo.zuri.chat"
    },
    {
      name: "music",
      baseUrl: "music.zuri.chat"
    },
    {
      name: "channels",
      baseUrl: "channels.zuri.chat"
    },
    {
      name: "dm",
      baseUrl: "dm.zuri.chat"
    },
    {
      name: "files",
      baseUrl: "companyfiles.zuri.chat"
    }
  ]
  const exactPlugin = plugins.find(
    plugin => plugin.name === newName[3] || newName[3] + "#"
  )
  // console.log(newName)
  // console.log(exactPlugin)

  return (
    <div className={styles.topBarSearchModal}>
      <input
        type="text"
        className={styles._input}
        placeholder="Search Here"
        value={value}
        onChange={onInputChange}
        onKeyUp={onSearchSubmit}
      />
      <div className={styles.MainBox}>
        <div>
          <div className={styles.input_box}>
            <div className={styles.grow}>
              <div className={styles.close_icon}>
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>

              <input
                type="text"
                className={styles._MainInput}
                placeholder="Search Here"
                value={value}
                onChange={onInputChange}
                onKeyUp={onSearchSubmit}
              />
              {value && <button className={styles.Clear} onClick={() => { setValue('') }}>Clear</button>}
            </div>
            <div className={styles.close_icon}>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div></div>
        <ul className={styles.ListWrapper}>
          {Array.isArray(items) ? (
            items.map(item => (
              <li
                key={item.id}
                className={styles.List}
                onClick={() => {
                  setFilter(item.title)
                }}
              >
                <SearchModalResult title={item.title} />
              </li>
            ))
          ) : (
            <li>
              <SearchModalResult title="" />
            </li>
          )}
        </ul>
      </div>
      {isSearchOpen ? (
        <BigModal
          onClose={() => {
            setOpenSearch(false)
          }}
          inputValue={value}
        />
      ) : null}
    </div>
  )
}

export default TopBarSearchModal

// import styles from "../styles/TopBarSearchModal.module.css"
// import { useState } from "react"
// import axios from "axios"
// import SearchModalResult from "./SearchModalResults"
// import { BigModal } from "./bigModal"

// const base_URL = "https://jsonplaceholder.typicode.com/todos"

// const TopBarSearchModal = () => {
//   const [value, setValue] = useState("")
//   const [items, setItems] = useState("")
//   const [isSearchOpen, setOpenSearch] = useState(false)

//   const onSearchSubmit = e => {
//     if (e.keyCode === 13 && value.length >= 1) {
//       setOpenSearch(true)
//     }
//   }

//   const onInputChange = e => {
//     setValue(e.target.value)
//     getData()
//   }

//   function getData() {
//     axios.get(base_URL).then(res => {
//       const result = Object.values(res.data)
//         .map(item => {
//           return item
//         })
//         .filter(item => {
//           return item.title.includes(value)
//         })

//       const n = 10 //get the first 15 items
//       setItems(result.slice(0, n))
//     })
//   }
//   return (
//     <div className={styles.topBarSearchModal}>
//       <input
//         type="text"
//         className={styles._input}
//         placeholder="Search Here"
//         value={value}
//         onChange={onInputChange}
//         onKeyUp={onSearchSubmit}
//       />
//       <div className={styles.MainBox}>
//         <div>
//           <div className={styles.input_box}>
//             <div className={styles.grow}>
//               <div className={styles.close_icon}>
//                 <svg
//                   focusable="false"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
//                 </svg>
//               </div>

//               <input
//                 type="text"
//                 className={styles._MainInput}
//                 placeholder="Search Here"
//                 value={value}
//                 onChange={onInputChange}
//                 onKeyUp={onSearchSubmit}
//               />
//             </div>
//             <div className={styles.close_icon}>
//               <svg
//                 focusable="false"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div></div>
//         <ul className={styles.ListWrapper}>
//           {Array.isArray(items) ? (
//             items.map(item => (
//               <li key={item.id} className={styles.List}>
//                 <SearchModalResult title={item.title} />
//               </li>
//             ))
//           ) : (
//             <li>
//               <SearchModalResult title="" />
//             </li>
//           )}
//         </ul>
//       </div>
//       {isSearchOpen ? (
//         <BigModal
//           onClose={() => {
//             setOpenSearch(false)
//           }}
//           inputValue={value}
//         />
//       ) : null}
//     </div>
//   )
// }

// export default TopBarSearchModal
