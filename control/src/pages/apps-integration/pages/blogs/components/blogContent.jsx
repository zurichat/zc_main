import React from 'react'
import style from '../Style/style.module.css'
import first from '../assets/ZuriChatBlogStater.png'
import Clock from '../assets/clock-black.svg'
import link from '../assets/link-black.svg'

import {
  UilFacebookF,
  UilTwitter,
  UilLinkedinAlt
} from '@iconscout/react-unicons'

const container = () => {
  return (
    <>
      {/* <div class={style.Blog_text}> */}
      <div className={style.get_started}>
        <p>Get Started</p>
      </div>
      <div className={style.blog_title}>
        <p>
          Boost teamwork in world in the hybrid <br />
          workplace with Zuri Chat
        </p>
      </div>
      <div className={style.Author}>
        <p>
          <b>Author:</b> Maurice Victor
        </p>
        <p className={style.aut}>
          <b>Illustration:</b> Swift
        </p>
        <p className={style.aut}>
          <b>Date:</b> 27 August 2021{' '}
        </p>
      </div>
      <div className={style.blogimage}>
        <img src={first} alt="" />
      </div>

      <div className={style.reader}>
        <div className={style.read_minutes}>
          <p>
            <img src={Clock} alt="" className={style.clock} />
            <span>4 Mins Read</span>
          </p>
        </div>
        <div className={style.blog_links}>
          <p>
            <img src={link} alt="" className={style.clock} />
          </p>
          <p>
            <p>
              <UilFacebookF className={style.clock} />
            </p>
          </p>
          <p>
            <UilTwitter className={style.clock} />
          </p>
          <p>
            <UilLinkedinAlt className={style.clock} />
          </p>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.Blog_article_text}>
        <p>
          Connecting with coworkers over common goals and shared interests has
          always been one of the best
          <br /> parts about office life. But in the{' '}
          <span>hybrid-remote workplace</span>, team lunches, happy hours,
          offsite events,
          <br /> and other opportunities to get to know colleagues are few and
          far between—if not replaced altogether
          <br /> by video conferences.
          <br />
          <br />
          According to <span>Zuri Chat</span> Future Forum study of 10,000
          knowledge workers, robust digital infrastructures
          <br /> will remain critical to boosting employees’ sense of belonging
          in a post-pandemic world. With Zuri Chat,
          <br /> coworkers can get to know each other beyond the daily grind,
          engage in team rituals, recognize each <br />
          other’s hard work, and celebrate each person’s unique point of view
          and contributions.
          <br />
          <br />
          Whether your organization has returned to the brick-and-mortar office,
          is fully remote, or is a hybrid of
          <br /> both, here are a few ways you can use Slack to strengthen team
          connection.
          <br />
          <br />
          When teams are juggling multiple projects and competing priorities, it
          can feel like all that hard work
          <br /> isn’t being seen or noticed by peers and team leaders. And when
          colleagues are working remotely, it’s <br />
          especially common to feel overlooked—out of sight, out of mind.
          <br />
          <br />
          <span>Zuri Chat</span> makes it easy to nurture a culture of peer
          recognition through acknowledging wins, birthdays,
          <br /> and work anniversaries in public channels. It takes only a
          couple of quick steps to make these small but
          <br /> meaningful gestures of appreciation part of your team’s
          culture.
        </p>
      </div>
      {/* </div> */}
    </>
  )
}

export default container
