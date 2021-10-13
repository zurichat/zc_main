import React, { useState, useEffect } from "react"
import classes from "../styles/EmojiTab.module.css"

const Emoji = () => {
  const [display, setDisplay] = useState(false)
  const [text, setText] = useState("")
  const [image, setImage] = useState([])
  const [btnName, setBtnName] = useState("")

  useEffect(() => {
    if (display) document.body.style.overflow = "hidden"
    if (!display) document.body.style.overflow = "scroll"
  }, [display])

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.title}>One-click reactions</div>
        <div className={classes.text}>
          Choose the default emoji people will see when they enable one-click
          reactions
        </div>
        <div className={classes.emojis}>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className={classes.example}>
          <div className={classes.text}>Here’s an example:</div>
          <div className={classes.messageDialog}>
            <div className={classes.messageActions}>
              <button>
                <img src="" alt="" />
              </button>
              <button></button>
              <button></button>
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
      <div className={classes.bottom}>
        <div className={classes.title}>
          There aren’t any custom emoji in your workspace yet
        </div>
        <div className={classes.text}>
          You don’t have to be limited to the standard emoji set. Make your
          workspace your own with custom emoji that mean something to your team.
        </div>
        <div className={classes.btn}>
          <button>Add Alias</button>
          <button onClick={() => setDisplay(true)}>Add Custom Emoji</button>
        </div>
      </div>

      {display && (
        <>
          <div
            onClick={() => setDisplay(false)}
            className={classes.overlay}
          ></div>
          <div className={classes.modal}>
            <div className={classes.close} onClick={() => setDisplay(false)}>
              &times;
            </div>
            <div className={classes.container}>
              <div className={classes.title}>Add custom emoji</div>
              <div className={classes.text}>
                Your custom emoji will be available to everyone in your
                workspace. You’ll find it in the custom tab of the emoji picker.
                (Hint: it’s the one with the Zuri-chat icon!)
              </div>
              <div className={classes.list}>
                <ol>
                  <li>
                    <div className={classes.title}>
                      1.&nbsp; Upload an image
                    </div>
                    <div className={classes.text}>
                      Square images under 128KB and with transparent backgrounds
                      work best. If your image is too large, we’ll try to resize
                      it for you.
                    </div>
                    <div className={classes.imageUpload}>
                      <div className={classes.imageContainer}>
                        <div></div>
                        <div></div>
                      </div>
                      <div>
                        <p>Select an image</p>
                        <button>Upload an Image</button>
                      </div>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <div className={classes.title}>2.&nbsp; Give it a name</div>
                    <div className={classes.text}>
                      This is also what you’ll type to add this emoji to your
                      messages.
                    </div>
                    <div className={classes.input}>
                      <input type="text" />
                    </div>
                  </li>
                </ol>
              </div>
              <div className={classes.footer}>
                <button onClick={() => setDisplay(false)}>Cancel</button>
                <button>Save</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Emoji
