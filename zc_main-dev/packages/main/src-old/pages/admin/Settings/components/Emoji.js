import React, { useState, useEffect, useRef, useContext } from "react";
import { authAxios } from "../../Utils/Api";
// import { ProfileContext } from "../../../../../../topbar/src/context/ProfileModal"
import toast from "react-hot-toast";
import Picker from "emoji-picker-react";
// import ForwardIcon from "../../../resources/assets/ForwardIcon.svg"
import classes from "../styles/EmojiTab.module.css";

const Emoji = () => {
  // const { orgId, user } = useContext(ProfileContext)
  const imageRef = useRef(null);
  const avatarRef = useRef(null);
  const _avatarRef = useRef(null);
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);
  const [btnName, setBtnName] = useState("");
  const [emojiImage, setEmojiImage] = useState(null);
  const [state, setState] = useState({ name: "" });
  const [formData, setFormData] = useState(new FormData());
  const [emojiOne, setEmojiObjectOne] = useState("\u2705");
  const [emojiTwo, setEmojiObjectTwo] = useState("\u{1F60A}");
  const [emojiThree, setEmojiObjectThree] = useState("\u{1F923}");
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(null);
  const [hover, setHover] = useState(false);
  const [customEmoji, setCustomEmoji] = useState(true);
  const [fileName, setFileName] = useState("");
  const ref = useRef(null);

  const onEmojiClick = (event, emojiObject) => {
    if (number === "1") {
      setEmojiObjectOne(emojiObject.emoji);
    } else if (number === "2") {
      setEmojiObjectTwo(emojiObject.emoji);
    } else {
      setEmojiObjectThree(emojiObject.emoji);
    }
  };

  const addAlias = () => {
    setBtnName("Add Alias");
    setDisplay(true);
  };

  const addCustomEmoji = () => {
    setBtnName("Add Custom Emoji");
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
    setBtnName("");
  };

  const optionsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      id="svg10"
    >
      <title id="title2">ellipsis vertical</title>
      <g>
        <circle cx="-10" cy="10" r="2" id="circle4" transform="rotate(-90)" />
        <circle cx="-17" cy="10" r="2" id="circle6" transform="rotate(-90)" />
        <circle cx="-3" cy="10" r="2" id="circle8" transform="rotate(-90)" />
      </g>
    </svg>
  );

  const bookmarkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path d="M880.2,906.5c-11.6-5.3-23.2-10.7-34.8-16c-27.9-12.8-55.9-25.7-83.8-38.5    c-33.6-15.4-67.2-30.9-100.8-46.3c-28.9-13.3-57.8-26.6-86.7-39.9c-13.8-6.3-27.6-12.8-41.4-19c-8.6-3.9-16.3-6.2-26-5    c-5.6,0.8-10.3,2.7-15.4,5c-1.5,0.7-3,1.4-4.4,2c-7.1,3.3-14.3,6.6-21.4,9.9c-26.2,12-52.4,24.1-78.6,36.1    c-33.4,15.4-66.8,30.7-100.2,46.1c-30.3,13.9-60.7,27.9-91,41.8c-16.5,7.6-33,15.2-49.5,22.8c-0.8,0.4-1.5,0.7-2.3,1.1    c20.1,11.5,40.1,23,60.2,34.5c0-7.2,0-14.3,0-21.5c0-19.5,0-38.9,0-58.4c0-28.8,0-57.5,0-86.3c0-35,0-70.1,0-105.1    c0-38.3,0-76.7,0-115c0-38.5,0-76.9,0-115.4c0-35.9,0-71.8,0-107.7c0-30.2,0-60.4,0-90.6c0-21.5,0-43,0-64.4c0-9.8,0-19.5,0-29.3    c0-3.1,0.2-6.1,0.5-9.1c-0.5,3.5-1,7.1-1.4,10.6c0.8-5.8,2.3-11.3,4.6-16.7c-1.3,3.2-2.7,6.4-4,9.6c2.1-4.8,4.8-9.3,7.9-13.5    c-2.1,2.7-4.2,5.4-6.3,8.1c3.5-4.5,7.5-8.4,11.9-11.9c-2.7,2.1-5.4,4.2-8.1,6.3c4.2-3.2,8.7-5.8,13.5-7.9c-3.2,1.3-6.4,2.7-9.6,4    c5.4-2.2,11-3.8,16.7-4.6c-3.5,0.5-7.1,1-10.6,1.4c7.3-0.9,14.7-0.5,22-0.5c13.5,0,27,0,40.6,0c45.6,0,91.2,0,136.8,0    c55.5,0,111.1,0,166.6,0c47.8,0,95.6,0,143.4,0c22.4,0,44.9-0.2,67.3,0c2.9,0,5.9,0.2,8.8,0.5c-3.5-0.5-7.1-1-10.6-1.4    c5.8,0.8,11.3,2.3,16.7,4.6c-3.2-1.3-6.4-2.7-9.6-4c4.8,2.1,9.3,4.8,13.5,7.9c-2.7-2.1-5.4-4.2-8.1-6.3c4.5,3.5,8.4,7.5,11.9,11.9    c-2.1-2.7-4.2-5.4-6.3-8.1c3.2,4.2,5.8,8.7,7.9,13.5c-1.3-3.2-2.7-6.4-4-9.6c2.2,5.4,3.8,11,4.6,16.7c-0.5-3.5-1-7.1-1.4-10.6    c1.1,9.1,0.5,18.5,0.5,27.7c0,18.9,0,37.8,0,56.7c0,28.4,0,56.7,0,85.1c0,34.8,0,69.6,0,104.4c0,38.2,0,76.5,0,114.7    c0,38.5,0,77,0,115.5c0,36.1,0,72.3,0,108.4c0,30.6,0,61.1,0,91.7c0,22,0,44,0,66c0,10.4-0.1,20.9,0,31.3c0,0.4,0,0.9,0,1.3    c0,20.9,18.4,41,40,40c21.7-1,40-17.6,40-40c0-14,0-28,0-41.9c0-36.2,0-72.4,0-108.6c0-49.9,0-99.7,0-149.6    c0-54.9,0-109.9,0-164.8c0-51.4,0-102.8,0-154.2c0-39.3,0-78.6,0-117.9c0-18.6,0-37.3,0-55.9c-0.1-36.8-18.7-70.9-50.1-90.2    C831.6,46.6,810.8,43,789.7,43c-29.3,0-58.5,0-87.8,0c-50,0-100,0-150,0c-54,0-108.1,0-162.1,0c-41.4,0-82.7,0-124.1,0    c-32.4,0-66.6-2.9-94.8,17c-22,15.4-40.2,38.4-44.6,65.6c-1.2,7.6-2.3,15.1-2.3,22.7c0,6.4,0,12.9,0,19.3c0,30.4,0,60.8,0,91.3    c0,46.7,0,93.3,0,140c0,54.3,0,108.6,0,162.9c0,53.4,0,106.8,0,160.1c0,43.9,0,87.7,0,131.6c0,25.8,0,51.5,0,77.3    c0,3.4,0,6.8,0,10.3c0,14.1,7.6,27.4,19.8,34.5c6.2,3.6,13,5.4,20.2,5.5c7.2,0,13.9-1.8,20.2-5.5c11.5-5.3,23-10.6,34.5-15.8    c27.8-12.8,55.5-25.5,83.3-38.3c33.4-15.4,66.9-30.8,100.3-46.1c29-13.4,58.1-26.7,87.1-40.1c14.1-6.5,28.3-12.7,42.2-19.4    c0.2-0.1,0.4-0.2,0.6-0.3c-13.5,0-26.9,0-40.4,0c11.5,5.3,23,10.6,34.5,15.8c27.8,12.8,55.5,25.5,83.3,38.3    c33.4,15.4,66.9,30.8,100.3,46.1c29,13.4,58.1,26.7,87.1,40.1c14.1,6.5,28.1,13,42.2,19.4c0.2,0.1,0.4,0.2,0.6,0.3    c10,4.6,19.8,7.1,30.8,4c9.3-2.6,19.3-9.7,23.9-18.4c4.9-9.3,7.4-20.5,4-30.8C895.5,921,889.5,910.7,880.2,906.5z" />
    </svg>
  );

  const forwardIcon = (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512.297 512.297"
      style="enable-background:new 0 0 512.297 512.297;"
    >
      <g>
        <g>
          <path
            d="M506.049,230.4l-192-192c-13.439-13.439-36.418-3.921-36.418,15.085v85.431
			c-122.191,5.079-229.968,88.278-264.124,206.683C2.101,385.123-0.745,417.65,0.154,452.659c0.113,4.11,0.142,5.296,0.142,6.159
			c0,21.677,28.579,29.538,39.666,10.911c23.767-39.933,50.761-70.791,80.333-93.599c53.462-41.233,109.122-53.174,157.335-48.352
			v109.707c0,19.006,22.979,28.524,36.418,15.085l192-192C514.38,252.239,514.38,238.731,506.049,230.4z M320.297,385.982v-76.497
			c0-9.773-6.641-18.296-16.117-20.686c-2.596-0.655-6.908-1.513-12.758-2.331c-60.43-8.455-130.633,4.548-197.184,55.876
			c-16.371,12.626-31.961,27.299-46.688,44.105l0.326-1.708c1.701-8.759,3.879-17.804,6.624-27.315
			c30.45-105.558,130.034-178.409,240.312-176.032c1.864,0.033,2.552,0.048,3.415,0.078c12.063,0.416,22.069-9.25,22.069-21.321
			v-55.163l140.497,140.497L320.297,385.982z"
          />
        </g>
      </g>
    </svg>
  );

  const emojiIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      id="add-reaction"
    >
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="24"
        height="24"
        fill="none"
      />
      <path
        id="Oval"
        d="M8.4,0a8.4,8.4,0,0,0,0,16.8h0a8.4,8.4,0,0,0,8.4-8.4"
        transform="translate(2.4 4.8)"
        fill="none"
        stroke="#000"
      />
      <path
        id="Oval-2"
        data-name="Oval"
        d="M0,0A4.807,4.807,0,0,0,1.042,1.557,4.785,4.785,0,0,0,4.436,2.963h0A4.785,4.785,0,0,0,7.83,1.557,4.807,4.807,0,0,0,8.872,0"
        transform="translate(6.364 15.037)"
        fill="none"
        stroke="#000"
      />
      <circle
        id="Oval-3"
        data-name="Oval"
        cx="1.2"
        cy="1.2"
        r="1.2"
        transform="translate(7.2 9.6)"
        fill="#fff"
        stroke="#000"
      />
      <circle
        id="Oval-4"
        data-name="Oval"
        cx="1.2"
        cy="1.2"
        r="1.2"
        transform="translate(12 9.6)"
        fill="#fff"
        stroke="#000"
      />
      <path
        id="Line"
        d="M1.2,0V7.2"
        transform="translate(18 1.2)"
        fill="none"
        stroke="#000"
      />
      <path
        id="Line-2"
        data-name="Line"
        d="M0,1.2H7.2"
        transform="translate(15.6 3.6)"
        fill="none"
        stroke="#000"
      />
    </svg>
  );

  const commentIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
    </svg>
  );

  useEffect(() => {
    if (display) document.body.style.overflow = "hidden";
    if (!display) document.body.style.overflow = "scroll";
  }, [display]);

  useEffect(() => {
    if (!isOpen) {
      setNumber(null);
    }
  }, [isOpen]);

  const setEmojiName = e => {
    setState({ name: e.target.value });
  };

  const handleImageChange = e => {
    if (imageRef.current.files[0]) {
      let fileReader = new FileReader();

      fileReader.onload = function (e) {
        avatarRef.current.src = e.target.result;
        _avatarRef.current.src = e.target.result;
        setEmojiImage(e.target.result);
      };

      fileReader.readAsDataURL(imageRef.current.files[0]);
      const imageReader = e.target.files[0];

      setFileName(imageRef.current.files[0].name);

      setFormData(formData.append("image", imageReader));
    }
  };

  useEffect(() => {
    //check for returned data from upload
  }, [state.name]);

  const handleSave = e => {
    setDisplay(false);

    //get the user data from session storage
    const getUser = () => {
      const result = JSON.parse(sessionStorage.getItem("user") || null);
      return result;
    };
    //get the currentWorkspace from local storage
    const getCurrentWorkspace = () => {
      const currentWorkspace = localStorage.getItem("currentWorkspace") || null;
      return currentWorkspace;
    };

    //upload the image to the database,make emojiImage a src gotten from the post request
    authAxios
      .patch(`v1/organizations/${getCurrentWorkspace()}/customemoji`, {
        name: state.name,
        imageUrl: emojiImage,
        user: getUser()
      })
      .then(res => {
        const uploadedImageData = res.data.data;
        // console.log(res, uploadedImageData)
        toast.success("User Image Updated Successfully", {
          position: "top-center"
        });
      })
      .catch(err => {
        console.error(err);
        toast.error(err?.message, {
          position: "top-center"
        });
      });
  };

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
              setHover(true), setNumber("1");
            }}
            onMouseLeave={() => {
              setHover(false), setNumber(null);
            }}
            onClick={() => {
              setNumber("1"), setIsOpen(!isOpen);
            }}
            style={number == 1 ? { position: "relative" } : null}
          >
            {emojiOne}
          </button>
          <button
            onMouseEnter={() => {
              setHover(true), setNumber("2");
            }}
            onMouseLeave={() => {
              setHover(false), setNumber(null);
            }}
            onClick={() => {
              setNumber("2"), setIsOpen(!isOpen);
            }}
            style={number == 2 ? { position: "relative" } : null}
          >
            {emojiTwo}
          </button>
          <button
            onMouseEnter={() => {
              setHover(true), setNumber("3");
            }}
            onMouseLeave={() => {
              setHover(false), setNumber(null);
            }}
            onClick={() => {
              setNumber("3"), setIsOpen(!isOpen);
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
              <button>{emojiIcon}</button>
              <button>{commentIcon}</button>
              <button>
                {/* <img src={ForwardIcon} alt="" /> */}
                <img src={forwardIcon} alt="" />
              </button>
              <button>{bookmarkIcon}</button>
              <button>{optionsIcon}</button>
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
          {customEmoji && <div className={classes.title}>{1} custom emoji</div>}
          <button
            style={customEmoji ? { marginLeft: "auto" } : null}
            className={classes.addAlias}
            onClick={addAlias}
          >
            Add Alias
          </button>
          <button className={classes.addCustomEmoji} onClick={addCustomEmoji}>
            Add Custom Emoji
          </button>
        </div>
        <div className={classes.search}>
          <input
            type="text"
            onChange={e => setState({ name: e.target.value })}
          />
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
                            <div>
                              {" "}
                              <img ref={_avatarRef} src="" alt="sticker pic" />
                            </div>
                            <div>
                              <img ref={avatarRef} src="" alt="sticker pic" />{" "}
                              {/*add default backgoground before image uploads*/}
                            </div>
                          </div>
                          <div>
                            {fileName.length > 0 ? (
                              fileName.length > 17 ? (
                                `${fileName.substring(0, 17)}...`
                              ) : (
                                fileName
                              )
                            ) : (
                              <p>Select an image</p>
                            )}
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
                          <input type="text" onChange={e => setEmojiName(e)} />
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className={classes.footer}>
                    <button onClick={closeModal}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                  </div>
                </>
              ) : (
                <>
                  <div className={classes.title}>
                    Add alias for an existing emoji
                  </div>
                  <hr />
                  <div className={classes.overflow}>
                    <div className={classes.text}>
                      Emoji aliases will be available to everyone in your
                      workspace. You’ll find them alongside the original emoji
                      in the emoji picker.
                    </div>
                    <div className={classes.list}>
                      <ol>
                        <li>
                          <div className={classes.title}>
                            1.&nbsp; Choose an existing emoji
                          </div>
                          <div className={classes.chooseEmoji}>
                            <div className={classes.emojiPreview}></div>
                            <button>Choose Emoji</button>
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
                  </div>
                  <hr />
                  <div className={classes.footer}>
                    <button onClick={closeModal}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Emoji;
