import React from 'react'
import style from './zurichatBlog.module.css'
import first from '../assets/ZuriChatBlogStater.png'
import Clock from '../assets/clock-black.svg'
import link from '../assets/link-black.svg'
import archImage from '../assets/ZuriArch.jpg'
import pluginImage from '../assets/ZuriPlugin.jpg'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import hero_img from "../assets/MacBookAir.svg"


import {
  UilFacebookF,
  UilTwitter,
  UilLinkedinAlt
} from '@iconscout/react-unicons'

const ZurichatBlog = () => {
  return (
    <>
    <Header />
    <div className={style.container}>
      <div className={style.Blog_text}>
      <div className={style.get_started}>
        <p>COLLABORATION</p>
      </div>
      <div className={style.blog_title}>
        <p>
        What is Zuri Chat Plugins and How does it Work?
        </p>
      </div>
      <div className={style.Author}>
        <p>
          <b>Author:</b> David Aniebo 
        </p>
        <p className={style.aut}>
          <b>Illustration:</b> Swift
        </p>
        <p className={style.aut}>
          <b>Date:</b> 02 Oct 2021{' '}
        </p>
        {/* <div className={style.read_minutes}>
          <p>
            <img src={Clock} alt="" className={style.clock} />
            <span>20 Mins Read</span>
          </p>
        </div> */}
      </div>
      <div className={style.blogimage}>
        <img src={hero_img} alt="" />
      </div>

      <div className={style.reader}>
        {/* <div className={style.read_minutes}>
          <p>
            <img src={Clock} alt="" className={style.clock} />
            <span>20 Mins Read</span>
          </p>
        </div> */}
        <div className={style.blog_links}>
          {/* <p>
            <img src={link} alt="" className={style.clock} />
          </p> */}
          <p>
            <p>
              <UilFacebookF className={style.clock} />
            </p>
          </p>
          <p>
            <UilTwitter className={style.twitter} />
          </p>
          <p>
            <UilLinkedinAlt className={style.linkedin} />
          </p>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.Blog_article_text}>
        <h3>What is zuri Chat?</h3>
        <p>Zuri Chat is a very flexible open source messaging app for organizations connecting members to information they need whenever they need them. Zuri Chat brings people together in an inclusive manner easing the unification of teams and transforming communications within organizations.</p>
        <h3>How Zuri Chat works</h3>
        <p>Zuri Chat unlike other messaging apps, offers more functionality via a <a href="https://docs.zuri.chat/#what-is-a-plugin">Plugin</a> system where each room can be provided by different providers giving you more control over your workspace and workspace's features.</p>
        <p>This documentation will introduce you to all the basic information you need such as the Zuri <a href="https://docs.zuri.chat/#core-api-documentation">core API documentation</a> and an overview of what plugins are so you can better understand the services offered by Zuri Chat.</p>
        {/* <img src={archImage} alt=""></img> */}
        <h3>Core API Documentation</h3>
        <p>The Zuri Chat Core API documentation provides developers with a concise and self explanatory detail on everything you need to get started working and building with Zuri Chat and the various services that Zuri Chat offers. The documentation gives a detailed explanation on how to make API calls for the authetication of users, user creation, workspace management, plugin installation, configurations and integrations and so much more. Some of the core APIs covered in this documentation include:</p>
        <ul>
            <li>Authentication</li>
            <li>Users</li>
            <li>Data</li>
            <li>Organizations</li>
            <li>Marketplace</li>
            <li>Plugins</li>
        </ul>

        <h3>What is a plugin?</h3>
        <p>A plugin is a standalone app provided by different pre-approved plugin providers which you can choose to add to your workspace to boost productivity. There are several plugins avaialable at the Zuri Chat market place. These plugins can easily be installed and configured to suite your workspace needs. Plugins can also be uninstalled anytime.</p>
        {/* <br /> */}
        <p>Some of the available plugins on Zuri Chat include:</p>
        {/* <br /> */}
        <h4>Channels</h4>
        <p>Channels are very fundamental to the Zuri Chat app, bringing the right people together in one place organizing work around a specific common goal.</p>
        {/* <br /> */}
        <h4>Direct Messages</h4>
        <p>Discussions that do not require the attention of the entire team take place here. DMs can be used for conversations that require the attention of a particular team mate or line supervisor or manager.</p>
        {/* <br /> */}
        <h4>Music Plugin</h4>
        <p>With Zuri Chat, the music plugin lets you enter into a room and enjoy some good music and also share music with colleagues without disrupting the workflow or having to go outside the app.</p>
        {/* <br /> */}
        <h4>Files Plugin</h4>
        <p>The files plugin lets you save, share, collaborate and access documents within an organization right inside of Zuri Chat. Files can also be protected so you don't have to worry about having confidential documents fall into the wrong hands.</p>
        {/* <br /> */}
        <h4>Goals Plugin</h4>
        <p>Do you have have personal goals? Or it's a common goal? Do you need to track your progress and that of your team? Then the goals plugin is here for you. It helps you organize your goals, keep track of your progress and achievements so you never lose focus.</p>
        {/* <br /> */}
        <h4>Todo Plugin</h4>
        <p>If you have a long list of tasks to carry out as a team or as individuals, keeping track of all the tasks in the list can sometimes be a daunting challenge. Sometimes, you just forget these tasks. We don't want that for you or your team which is why we have brought you the Todo plugin. It helps you to list out your tasks so you never forget or miss out any one of them</p>
        {/* <br /> */}
        <h4>Chess Plugin</h4>
        <p>Are you a lover of chess? Did a team mate challenge you to a chess game? Great! The chess plugin lets you enjoy some chess moments right here in Zuri Chat. As a team, you can also organize chess competitions and enjoy some bonding moments without having to leave your workspace. You can choose the multiplayer mode to play with a colleague or decide to explore the game with an automated opponent.</p>
        {/* <br /> */}
        <p>There are many more plugins on the Zuri Chat workspace to make your remote workspace experience a fabulous one. Don't hesitate to explore.</p>
        {/* <br /> */}
        <h3>How Do I get started with a plugin</h3>
        <p>You can visit the Zuri Chat market place to add a plugin to your organization's workspace and configure the plugin to suite your needs and help improve productivity. When a plugin is added to the workspace, it automatically appears on the side bar but Zuri Chat gives you the liberty to organize the plugins on the sidebar to help improve your productivity. You can also decide to remove a plugin from the sidebar.</p>
        {/* <br /> */}
        <p>For more enquries, please reach out us @ E-mail: <span>developer@zuri.chat</span></p>
      </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default ZurichatBlog;