import React, { useState, useEffect, useRef } from "react"
import classes from "../styles/EmojiTab.module.css"
import { authAxios } from "../../Utils/Api"
import toast from "react-hot-toast"
import Picker from "emoji-picker-react"

const Emoji = () => {
  const imageRef = useRef(null)
  const avatarRef = useRef(null)
  const [display, setDisplay] = useState(false)
  const [text, setText] = useState("")
  const [image, setImage] = useState([])
  const [btnName, setBtnName] = useState("")
  const [emojiImage, setEmojiImage] = useState(null)
  const [state, setState] = useState(null)
  const [formData, setFormData] = useState(new FormData())
  const [emojiOne, setEmojiObjectOne] = useState("\u2705")
  const [emojiTwo, setEmojiObjectTwo] = useState("\u{1F60A}")
  const [emojiThree, setEmojiObjectThree] = useState("\u{1F923}")
  const [isOpen, setIsOpen] = useState(false)
  const [number, setNumber] = useState(null)
  const [hover, setHover] = useState(false)
  const ref = useRef(null)

  const onEmojiClick = (event, emojiObject) => {
    if (number === "1") {
      setEmojiObjectOne(emojiObject.emoji)
    } else if (number === "2") {
      setEmojiObjectTwo(emojiObject.emoji)
    } else {
      setEmojiObjectThree(emojiObject.emoji)
    }
  }

  const addAlias = () => {
    setBtnName("Add Alias")
    setDisplay(true)
  }

  const addCustomEmoji = () => {
    setBtnName("Add Custom Emoji")
    setDisplay(true)
  }

  const closeModal = () => {
    setDisplay(false)
    setBtnName("")
  }

  useEffect(() => {
    if (display) document.body.style.overflow = "hidden"
    if (!display) document.body.style.overflow = "scroll"
  }, [display])

  useEffect(() => {
    if (!isOpen) {
      setNumber(null)
    }
  }, [isOpen])

  const handleImageChange = e => {
    if (imageRef.current.files[0]) {
      let fileReader = new FileReader()

      fileReader.onload = function (e) {
        avatarRef.current.src = e.target.result
      }

      fileReader.readAsDataURL(imageRef.current.files[0])
      const imageReader = e.target.files[0]

      // const formData = new FormData()
      setFormData(formData.append("image", imageReader))
    }
  }

  const handleSave = e => {
    //dummy endpoint
    setDisplay(false)

    let orgId = ""

    authAxios
      .patch(`/organizations/${orgId}/settings`, {
        formData,
        state
      })
      .then(res => {
        const newUploadedImage = res.data.data
        setEmojiImage(newUploadedImage)
        toast.success("Custom Emoji Updated Successfully", {
          position: "top-center"
        })
      })
      .catch(err => {
        console.error(err)
        toast.error(err?.message, {
          position: "top-center"
        })
      })
  }

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.title}>One-click reactions</div>
        <div className={classes.text}>
          Choose the default emoji people will see when they enable one-click
          reactions
        </div>

        <div className={classes.emojis}>
          <button
            onMouseEnter={() => {
              setHover(true), setNumber("1")
            }}
            onMouseLeave={() => {
              setHover(false), setNumber(null)
            }}
            onClick={() => {
              setNumber("1"), setIsOpen(!isOpen)
            }}
            style={number == 1 ? { position: "relative" } : null}
          >
            {emojiOne}
          </button>
          <button
            onMouseEnter={() => {
              setHover(true), setNumber("2")
            }}
            onMouseLeave={() => {
              setHover(false), setNumber(null)
            }}
            onClick={() => {
              setNumber("2"), setIsOpen(!isOpen)
            }}
            style={number == 2 ? { position: "relative" } : null}
          >
            {emojiTwo}
          </button>
          <button
            onMouseEnter={() => {
              setHover(true), setNumber("3")
            }}
            onMouseLeave={() => {
              setHover(false), setNumber(null)
            }}
            onClick={() => {
              setNumber("3"), setIsOpen(!isOpen)
            }}
            style={number == 3 ? { position: "relative" } : null}
          >
            {emojiThree}
          </button>
          {isOpen ? (
            <div style={{ position: "absolute", bottom: "61%", left: "0" }}>
              <div
                onClick={() => setIsOpen(false)}
                className={classes.pickerBackdrop}
              ></div>
              <div className={classes.picker}>
                <Picker onEmojiClick={onEmojiClick} />
              </div>
            </div>
          ) : null}
        </div>
        <div className={classes.example}>
          <div className={classes.text}>Here’s an example:</div>
          <div className={classes.messageDialog}>
            <div className={classes.messageActions}>
              <button
                style={
                  number == 1 && hover === true
                    ? { background: "#fcf4da" }
                    : null
                }
              >
                {emojiOne}
              </button>
              <button
                style={
                  number == 2 && hover === true
                    ? { background: "#fcf4da" }
                    : null
                }
              >
                {emojiTwo}
              </button>
              <button
                style={
                  number == 3 && hover === true
                    ? { background: "#fcf4da" }
                    : null
                }
              >
                {emojiThree}
              </button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className={classes.avatar}>
              <img
                src="https://a.slack-edge.com/bv1-9/avatar_marcel-37155b5.png"
                alt="avatar"
              />
            </div>
            <div className={classes.messageInfo}>
              <div className={classes.name}>
                Mark <span>1:12 PM</span>
              </div>
              <div className={classes.messageContent}>
                HNG is just a game. Don't take it too seriously
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.bottom}>
        <div className={classes.title}>
          There aren’t any custom emoji in your workspace yet
        </div>
        <div className={classes.text}>
          You don’t have to be limited to the standard emoji set. Make your
          workspace your own with custom emoji that mean something to your team.
        </div>
        <div className={classes.btn}>
          <button onClick={addAlias}>Add Alias</button>
          <button onClick={addCustomEmoji}>Add Custom Emoji</button>
        </div>
      </div>

      {display && (
        <>
          <div onClick={closeModal} className={classes.modalBackdrop}></div>
          <div className={classes.modal}>
            <div className={classes.close} onClick={closeModal}>
              &times;
            </div>
            <div className={classes.container}>
              {btnName === "Add Custom Emoji" ? (
                <>
                  <div className={classes.title}>Add custom emoji</div>
                  <div className={classes.text}>
                    Your custom emoji will be available to everyone in your
                    workspace. You’ll find it in the custom tab of the emoji
                    picker. (Hint: it’s the one with the Zuri-chat icon!)
                  </div>
                  <div className={classes.list}>
                    <ol>
                      <li>
                        <div className={classes.title}>
                          1.&nbsp; Upload an image
                        </div>
                        <div className={classes.text}>
                          Square images under 128KB and with transparent
                          backgrounds work best. If your image is too large,
                          we’ll try to resize it for you.
                        </div>
                        <div className={classes.imageUpload}>
                          <div className={classes.imageContainer}>
                            <div></div>
                            <div>
                              <img ref={avatarRef} src="" alt="sticker pic" />
                            </div>
                          </div>
                          <div>
                            <p>Select an image</p>
                            <input
                              ref={imageRef}
                              onChange={handleImageChange}
                              type="file"
                              hidden
                              id="image"
                            />
                            <label htmlFor="image">Upload an Image</label>
                            {/* <button>Upload an Image</button> */}
                          </div>
                        </div>
                      </li>
                      <hr />
                      <li>
                        <div className={classes.title}>
                          2.&nbsp; Give it a name
                        </div>
                        <div className={classes.text}>
                          This is also what you’ll type to add this emoji to
                          your messages.
                        </div>
                        <div className={classes.input}>
                          <input
                            type="text"
                            onChange={e => setState({ name: e.target.value })}
                          />
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className={classes.footer}>
                    <button onClick={() => setDisplay(false)}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                  </div>
                </>
              ) : (
                <>
                  <div className={classes.title}>
                    Add alias for an existing emoji
                  </div>
                  <hr />
                  <div className={classes.text}>
                    Emoji aliases will be available to everyone in your
                    workspace. You’ll find them alongside the original emoji in
                    the emoji picker.
                  </div>
                  <div className={classes.list}>
                    <ol>
                      <li>
                        <div className={classes.title}>
                          1.&nbsp; Choose an existing emoji
                        </div>
                      </li>
                      <hr />
                      <li>
                        <div className={classes.title}>
                          2.&nbsp; Enter an alias
                        </div>
                        <div className={classes.text}>
                          This is also what you’ll type to add this emoji to
                          your messages.
                        </div>
                        <div className={classes.input}>
                          <input
                            type="text"
                            onChange={e => setState({ name: e.target.value })}
                          />
                        </div>
                      </li>
                    </ol>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Emoji
