import styles from '../styles/EditProfile.module.css'
import ProfileModal from './ProfileModal'

const EditProfile = () => {
  return (
    <ProfileModal full title="Edit your profile">
      <>
        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <div className={styles.profileMain}>
              <div className={styles.sectionA}>
                <form>
                  <div className={styles.formWrapper}>
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
                    <div className={styles.displayNameDesktop}>
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
                      <label>Pronouns</label>
                      <select className={styles.formInput}>
                        <option value="John">He/him</option>
                        <option value="John">She/her</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.mt}>
                    <label>What you do</label>
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
                    <label>Bio</label>
                    <textarea rows="3" className={styles.formInput} />
                  </div>

                  <div className="my-4">
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
                  <label>Timezones</label>
                  <div>
                    <select className={styles.timeZone}>
                      <option value="timezone">
                        (UTC+01:00) West Central Africa
                      </option>
                    </select>
                  </div>

                  <div className={styles.mt}>
                    <label>Twitter</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.mt}>
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
                    <div className={styles.camera}>
                      <img
                        src="/camera.svg"
                        alt="camera"
                        style={{ display: 'flex' }}
                      />
                    </div>

                    <img src="/profiles.svg" alt="profile-pic" />
                    <div className={styles.username}>
                      <div className={styles.mt} style={{ width: '100%' }}>
                        <label>Display Name</label>
                        <input
                          type="text"
                          name="name"
                          className={styles.formInput}
                        />
                        <div className={styles.subText}>
                          Please use a unique and permanent display name. If
                          someone uses your exact name, you should change it!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.profileFunc}>
                    <div className={styles.subContainer}>
                      <div className={styles.mxAuto}>
                        <button className={styles.save}>Upload an Image</button>
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

            <div className={styles.px9}>
              <div className={styles.linkTab}>
                <label>
                  <span className={styles.fontMed}>
                    {' '}
                    <label>Additional Links</label>{' '}
                  </span>
                  <span className={styles.fontRed}> (5max) </span>
                </label>
                <input type="text" name="name" className={styles.formInput} />
                <div className={styles.addLink}>
                  <span class={styles.plus}>+</span>
                  <span className={styles.textYellow}>Add New Link</span>
                </div>
              </div>
              <div className={styles.formFooter}>
                <div>
                  <button className={styles.cancel}>Cancel</button>
                  <button className={styles.save}>Save Changes</button>
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
