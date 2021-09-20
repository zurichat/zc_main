import { useRef } from 'react'
import styles from '../styles/EditProfile.module.css'
import AddLink from './AddLink'
import ProfileModal from './ProfileModal'

import { AiFillCamera } from 'react-icons/ai'

const EditProfile = () => {
  const imageRef = useRef(null)
  const avatarRef = useRef(null)

  const handleImageChange = event => {
    if (imageRef.current.files[0]) {
      let fileReader = new FileReader()

      fileReader.onload = function (event) {
        avatarRef.current.src = event.target.result
      }

      fileReader.readAsDataURL(imageRef.current.files[0])
    }
  }

  return (
    <ProfileModal full title="Edit profile">
      <>
        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <div className={styles.profileMain}>
              <div className={styles.sectionA}>
                <form>
                  <div className={styles.displayNameDesktop}>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                    />
                  </div>
                  <div
                    style={{ display: 'flex' }}
                    className={styles.formWrapper}
                  >
                    <div className={styles.formMargin}>
                      <label>Choose a Display Name</label>
                      <input
                        type="text"
                        name="displayName"
                        className={styles.formInput}
                      />
                      <div className={styles.subText}>
                        Please use a unique and permanent display name. If
                        someone uses your exact name, you should change it!
                      </div>
                    </div>

                    <div className={styles.sectionB}>
                      <label className="label">Pronouns</label>
                      <select className={styles.formInput}>
                        <option value="John">He/him</option>
                        <option value="John">She/her</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.mt}>
                    <label className="label">What you do</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.subText}>
                    Let people know what you do at{' '}
                    <span className={styles.fontBold}>ZURI</span>
                  </div>
                  <div className={styles.mt}>
                    <label className="label">Bio</label>
                    <textarea rows="3" className={styles.formInput} />
                  </div>

                  <div className="my-3">
                    <label>Phone Number</label>
                    <div className={styles.phoneNumber}>
                      <span>
                        <select>
                          <option value="number">+234</option>
                        </select>
                      </span>
                      <span>
                        <input
                          type="text"
                          name="number"
                          className="focus:outline-none"
                        />
                      </span>
                    </div>
                  </div>
                  <label className="label">Timezones</label>
                  <div>
                    <select className={styles.timeZone}>
                      <option value="timezone">
                        (UTC+01:00) West Central Africa
                      </option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <label>Twitter</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                    />
                  </div>
                  <div className="mt-3">
                    <label>Facebook</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                    />
                  </div>
                </form>
              </div>
              <div className={styles.sectionB}>
                <div className={styles.subContainer}>
                  <div className={styles.profilePic}>
                    <label htmlFor="img" className={styles.camera}>
                      <AiFillCamera className={styles.cameraIcon} />
                    </label>

                    <div className={styles.avatar}>
                      <img
                        ref={avatarRef}
                        src="/profiles.svg"
                        alt="profile-pic"
                      />
                    </div>
                    <div className={styles.username}>
                      <div className={styles.mt} style={{ width: '100%' }}>
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          className={styles.formInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.profileFunc}>
                    <div className={styles.subContainer}>
                      <div className={styles.mxAuto}>
                        <label htmlFor="img" className={styles.save}>
                          Upload an Image
                        </label>
                        <input
                          ref={imageRef}
                          onChange={handleImageChange}
                          type="file"
                          hidden
                          id="img"
                        />
                      </div>
                      <button className={styles.deleteImage}>
                        Delete image
                      </button>
                    </div>
                    <div className={styles.tagContainer}>
                      <p className={styles.setTag}>Set yourself as</p>
                      <button className={styles.away}>Away</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className={styles.bottomBtn}>Save</button>

            <div className={styles.px9}>
              <AddLink />
              <div className={styles.formFooter}>
                <div style={{ display: 'flex' }}>
                  <button className={styles.cancel}>Cancel</button>
                  <button className={styles.saveChange}>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </ProfileModal>
  )
}

export default EditProfile
