import React, { useState } from "react"
import classes from "../styles/EmojiTab.module.css"

const Emoji = () => {
  const [display, setDisplay] = useState(false)
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.header}>One-click reactions</div>
        <div className={classes.text}>
          Choose the default emoji people will see when they enable one-click
          reactions
        </div>
        <div className={classes.emojis}></div>
        <div className={classes.example}></div>
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
          <div onClick={() => setDisplay(false)} className={classes.overlay}></div>
          <div className={classes.modal}>
            <div className={classes.container}>
              <div className={classes.title}>Add custom emoji</div>
              <div className={classes.text}>
                Your custom emoji will be available to everyone in your
                workspace. You’ll find it in the custom tab of the emoji picker.
                (Hint: it’s the one with the Slack icon!)
              </div>
              <div className={classes.list}>
                <ul>
                  <li>
                    <div className={classes.title}>Upload an image</div>
                    <div className={classes.text}>
                      Square images under 128KB and with transparent backgrounds
                      work best. If your image is too large, we’ll try to resize
                      it for you.
                    </div>
                  </li>
                  <li>
                    <div className={classes.title}>Give it a name</div>
                    <div className={classes.text}>
                      This is also what you’ll type to add this emoji to your
                      messages.
                    </div>
                    <div className={classes.input}>
                      <input type="text" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Emoji
