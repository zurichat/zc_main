import css from '../styles/section3.module.css'

const Section3 = () => {
  return (
    <div className={css.featuresContainer}>
      <div className={css.header}>
        <h2>Remote work made easier</h2>
        <p>
          work comfortably and efficiently at home with zuri chat. Connect with
          colleagues and teams to make fast decisions and get great outputs.
        </p>
      </div>
      <div className={css.featuresSection}>
        <div className={css.featureCard}>
          <img src={`/channels.svg`} alt="Channels Icon" />
          <h3>Channels</h3>
          <p>
            Increase level of organisation in your team focused with cetralized
            spaces for conversations
          </p>
        </div>
        <div className={css.featureCard}>
          <img src={`/todolist.svg`} alt="To do List Icon" />
          <h3>To do list</h3>
          <p>
            Get your tasks organized with the to-do list feature and never
            forget to do anything
          </p>
        </div>
        <div className={css.featureCard}>
          <img src={`/calendar.svg`} alt="Calendar Icon" />
          <h3>Company Holiday Calendar</h3>
          <p>Never miss an holiday and get the rest you deserve</p>
        </div>
        <div className={css.featureCard}>
          <img src={`/chats.svg`} alt="Chats Icon" />
          <h3>Quick Reply App</h3>
          <p>Get quick replies in your DMs as fast as possible</p>
        </div>
        <div className={css.featureCard}>
          <img src={`/deadline.svg`} alt="Deadline Icon" />
          <h3>Company Important Deadline</h3>
          <p>
            Never miss a company deadline with our company Important deadline
            feature.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section3
