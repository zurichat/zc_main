import styles from "../../styles/EditProfile.module.css";
import profileImage from  './profile-pics.png'

function EditProfile() {
  return (
    <div>
      <div className={styles.pageWrapper}>
        <div className={styles.backdrop}>
          <div className={styles.profileWrapper}>
            <div className={styles.profile}>
              <div className={styles.profileHeader}>
                <div>Edit your profile</div>
                <div>X</div>
              </div>
              <div className={styles.profileMain}>
                <div className={styles.sectionA}>
                  <form>
                    <div className={styles.formWrapper}>
                      <label>First Name</label>
                      <input
                        type="text"
                        name="name"
                        className={styles.nameInput}
                      />
                    </div>
                    <div
                      className={styles.formWrapper}
                      style={{ display: "flex" }}
                    >
                      <div className={styles.sectionA}>
                        <label>Choose a Display Name</label>
                        <input
                          type="text"
                          name="displayName"
                          className={styles.nameInput}
                        />
                        <div className="text-gray-500 text-sm ml-4 mt-2">
                          Please use a unique and permanent display name. If
                          someone uses your exact name, you should change it!
                        </div>
                      </div>

                      <div className={styles.sectionB}>
                        <label>Pronouns</label>
                        <select className={styles.nameInput}>
                          <option value="John">He/him</option>
                          <option value="John">She/her</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label>What you do</label>
                      <input
                        type="text"
                        name="name"
                        className={styles.nameInput}
                      />
                    </div>
                    <div className="text-gray-500 text-sm ml-4 mt-2">
                      Let people know what you do at{" "}
                      <span className="font-bold">ZURI</span>
                    </div>
                    <div className="mt-4">
                      <label>Bio</label>
                      <textarea rows="3" className={styles.nameInput} />
                    </div>

                    <div className="my-4">
                      <label>Phone Number</label>
                      <div className="border text-gray-500 border-gray-300 p-2 rounded-md">
                        <span>
                          <select>
                            <option value="number">+234</option>
                          </select>
                        </span>
                        |
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
                      <select className="border w-full text-gray-500 border-gray-300 p-2 rounded-md">
                        <option value="timezone">
                          (UTC+01:00) West Central Africa
                        </option>
                      </select>
                    </div>

                    <div className="mt-4">
                      <label>Twitter</label>
                      <input
                        type="text"
                        placeholder="JaneDoe"
                        name="name"
                        className={styles.nameInput}
                      />
                    </div>
                    <div className="mt-4">
                      <label>Facebook</label>
                      <input
                        type="text"
                        name="name"
                        className={styles.nameInput}
                      />
                    </div>
                  </form>
                </div>
                <div className={styles.sectionB}>
                  <div className="flex flex-col justify-center space-y-4">
                    <div>
                      <img
                        src={profileImage}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                     <div className="mx-auto">
                     <button className=" rounded-md w-auto text-white bg-green-500  hover:bg-green-600 transition p-3">
                        Upload an Image
                      </button>ْ
                     </div>
                      <button className="mt-4 p-3 text-gray-400">
                        Delete image
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="mr-4 font-semibold">Set yourself as</p>
                      <button className="border px-2 py-1 rounded-lg hover:bg-green-500 transition  border-green-500 text-center">
                        Away
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-9 ">
                <div className="bg-gray-50 px-10 pt-7 pb-14 mt-8 rounded-md mb-16">
                  <label>
                    <span className="font-medium">Additional Links</span>
                    <span className="text-red-500"> (5max) </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={styles.nameInput}
                  />
                  <div className="cursor-pointer mt-6  text-lg ">
                    <span class="py-2 px-3 mr-5  hover:bg-yellow-400 transition  bg-yellow-300  text-yellow-500  rounded-lg">
                      +
                    </span>
                    <span className='text-yellow-400'>Add New Link</span>
                  </div>
                </div>
                <div className="flex   text-center justify-end">
                  <div>
                    <button className="mr-4 p-3 text-gray-400">Cancel</button>
                    <button className="rounded-md text-white hover:bg-green-600 transition  bg-green-500 p-3">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;












