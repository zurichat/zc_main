import styles from "../styles/section3.module.css";

const Section3 = () => {
  return (
    <>
      <div className={`${styles.Section3}`}>
        <h2>Join Our Free Internship</h2>
        <p>
          Zuri Internship is a 100% free, remote and fast paced training for
          young professionals seeking to improve their tech skills and boost
          their resume.
        </p>
        <div className={`${styles.section3Cards}`}>
          <div>
            <h3>Frontend Development</h3>
            <p>
              This track deals with the aspect of your application that the
              users interact with. A front-end developer will be able to
              correctly interpret a given design to the user interface.
            </p>
            <div className={`${styles.languages}`}>
              <hr />
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </div>
          </div>
          <div>
            <h3>Backend Development</h3>
            <p>
              This track deals with the aspect of the application the user does
              not directly interact with. It allows the frontend function either
              by running some back-end code or connecting to the database.
            </p>
            <div className={`${styles.languages}`}>
              <hr />
              <li>PHP</li>
              <li>Python</li>
              <li>NodeJS</li>
              <li>Go</li>
            </div>
          </div>
          <div>
            <h3>Design</h3>
            <p>
              This track deals with creating a graphic plan for an application.
              You will learn to convert project documentation into viewable and
              understandable graphic design for the developers to work with.
            </p>
            <div className={`${styles.languages}`}>
              <hr />
              <li>UI/UX</li>
            </div>
          </div>
          <div>
            <h3>Mobile Development</h3>
            <p>
              The mobile track contains a list of tools and languages needed for
              a developer to create mobile applications. A mobile application
              can be IOS or Android.
            </p>
            <div className={`${styles.languages}`}>
              <hr />
              <li>Flutter</li>
              <li>Kotlin</li>
            </div>
          </div>
          <div>
            <h3>Digital Marketing</h3>
            <p>
              It encomprises the use of digital means and utilities to boost
              discoverability of products, services and brands.
            </p>
            <div className={`${styles.languages}`}>
              <hr />
              <li>SEO</li>
            </div>
          </div>
          <div>
            <h3>Fremeworks</h3>
            <p>
              During the program we will be exploring several useful frameworks
              to give you an edge in the industry and help you develop complex
              applications much faster.
            </p>
            <div className={`${styles.languages}`}>
              <hr />
              <li>Laravel</li>
              <li>Django</li>
              <li>ReactJS</li>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.registerNow}`}>
        <p>Be a part of next cohort starting summer of 2022</p>
        <a
          className={styles.regbtn}
          href="https://internship.zuri.team/enrollment"
          target="_blank"
          rel="noreferrer"
        >
          Register now
        </a>
      </div>
    </>
  );
};

export default Section3;
