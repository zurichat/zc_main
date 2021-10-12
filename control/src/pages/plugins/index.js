import React from 'react'
import style from './styles/plugin.css'
import hero_img from './assets/MacBookAir.svg'
import logo_hng from './assets/logo_hng.svg'
import logo_i4g from './assets/logo_i4g.svg'
import logo_camphouse from './assets/logo_camphouse.svg'
import logo_zuri from './assets/logo_zuri.svg'
import ft_img1 from './assets/ft_img1.svg'
import ft_img2 from './assets/ft_img2.svg'
import ft_img3 from './assets/ft_img3.svg'
import ft_img4 from './assets/ft_img4.svg'
import duty from './assets/compduty.png'
import compShift from './assets/compshiftman.png'
import deadline from './assets/deadline.png'
import dm from './assets/dm.png'
import expenses from './assets/expenses.png'
import game from './assets/game.png'
import goal from './assets/goal.png'
import holiday from './assets/holiday.png'
import music from './assets/music.png'
import sales from './assets/sales.png'
import todo from './assets/todo.png'
import tools from './assets/tools.png'



import sign_up_img from './assets/sign_up_img.svg'
import arrow_right from './assets/ArrowRight.svg'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Link } from 'react-router-dom'
import Cookies from '../cookies'
import Subscribe from './components/Subscribe1'
import { Helmet } from 'react-helmet'

export default function Homepage() {
  const { useState, useEffect } = React

  const [loading, setLoading] = useState(true)

  const cookieStorage = {
    getItem: key => {
      const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {})
      return cookies[key]
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`
    }
  }

  const allowCookie = cookieStorage.getItem('Zuri Chat Accept')
  const declineCookie = cookieStorage.getItem('Zuri Chat Decline')

  if (!allowCookie == true || declineCookie == true) {
    useEffect(() => {
      const timer = () => setTimeout(() => setLoading(false), 2000)
      const timerId = timer()
      return () => {
        clearTimeout(timerId)
      }
    })
  }

  const FeatureRow = props => {
    return (
      <div className={`${style.ft_row} ${props.rowOrder}`}>
        <Helmet>
          <title>Zuri Chat - Connect and Interact</title>
        </Helmet>
        <div className={`${style.ft_col}`}>
          <img src={props.src} alt={props.alt} className={`${style.ft_img}`} />
        </div>
        <div className={`${style.ft_col}`}>
          <div className={`${style.ft_texts}`}>
            <p className={`${style.ft_text_one}`}>{props.pContent1}</p>
            <h2 className={`${style.ft_heading}`}>{props.h2Content}</h2>
            <p className={`${style.ft_p}`}>{props.pContent2}</p>
          </div>
          <div className={`${style.ft_link_wrap}`}>
            <a className={`${style.ft_link}`} href={props.href}>
              <div className={`${style.ft_link_div}`}>
                <p className={`${style.ft_link_p}`}>{props.aContent}</p>
                <img
                  src={arrow_right}
                  alt="arrow right icon"
                  className={`${style.arrow_right}`}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <Header />
      <div className={`${style.homepage}`}>
        {/* { COOKIES BANNER} */}
        <div>{loading ? '' : <Cookies />}</div>
        {/* FEATURES */}
        <div className={`${style.features_wrap}`}>
          <div className={`${style.features}`}>
            {/* dm plugin */}
            <FeatureRow
              src={dm}
              alt=""
              pContent1="Direct Message Plugin"
              h2Content="Sends Direct Messages"
              pContent2="A plugin that facilitates the sending of messages between collaborators"
              href="#"
              aContent="Explore DM Plugin "
            />
            {/* contribution tracker */}
            <FeatureRow
              src={ft_img2}
              alt=""
              pContent1="Contribution Tracker's Plugin"
              h2Content="Track peoples Contributions and Highlights Pressing Issues"
              pContent2="A plugin that allows you track peoples contribution to open 
              source projects, and highlight most pressing issues"
              href="#"
              aContent="Explore Contribution Tracker Plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* music plugin */}
            <FeatureRow
              src={music}
              alt=""
              pContent1="Music Plugin"
              h2Content="Access to music and music videos on the go!"
              pContent2="Music Plugin allows individuals 
              in an organization to add music and video links from YouTube to a shared playlist."
              href="#"
              aContent="Explore Music Plugin"
            />
            {/* games plugin */}
            <FeatureRow
              src={game}
              alt=""
              pContent1="Chess Plugin"
              h2Content="Make learning fun, stay engaged with the virtual games"
              pContent2="Zuri chesss plugin is a web based recreational and competitive board game played between two players."
              href="chess.zuri.chat/"
              aContent="Explore Games Plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* company goal */}
             <FeatureRow
              src={goal}
              alt=""
              pContent1="Company Goal's Plugin"
              h2Content="Keep track of Goals"
              pContent2="A plugin that allows you to keep track of company's goals and achievements"
              href="#"
              aContent="Explore Company's Goal Plugin"
            />
            {/* todo plugins */}
            <FeatureRow
              src={todo}
              alt=""
              pContent1="Todo Plugin"
              h2Content="Keeps track of important task"
              pContent2="A plugin that allows you list everything that you have to do and 
              make sure that your tasks are written down all in one place so you don't forget anything important."
              href="https://zuri.chat/todo/"
              aContent="Explore Todo's plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* channels plugin */}
             <FeatureRow
              src={ft_img1}
              alt=""
              pContent1="Channels Plugin"
              h2Content="Organizes conversations into dedicated spaces"
              pContent2="A plugin that lets a group of indivduals in a channel know about timely, relevant informations in order to achieve a certain goal"
              href="https://zuri.chat/channels"
              aContent="Explore Channels Plugins"
            />
            {/* noticeboard plugin */}
            <FeatureRow
              src={ft_img3}
              alt=""
              pContent1="Noticeboard Plugin"
              h2Content="Share Information Effectively"
              pContent2="Its an Effective plugin for displaying information and communicating with collaborators"
              href="https://zuri.chat/noticeboard"
              aContent="Explore Noticeboard Plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* company file plugin */}
             <FeatureRow
              src={ft_img4}
              alt=""
              pContent1="Company Files Plugin"
              h2Content="Access and Manages Company's Files Effectively"
              pContent2="An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval."
              href="#"
              aContent="Explore Company Files Plugins"
            />
            {/* company sales plugin */}
            <FeatureRow
              src={sales}
              alt=""
              pContent1="Company Sales Plugin"
              h2Content="Keeps track of Sales record"
              pContent2="An effective sales system that keeps track of company's sales records."
              href="https://zuri.chat/sales"
              aContent="Explore Company Sales Plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* deadline plugin */}
             <FeatureRow
              src={deadline}
              alt=""
              pContent1="Deadline Plugins"
              h2Content="Deadline Tracker"
              pContent2="A plugin that keeps track of deadlines of task, events, projects assigned to members of an organisation"
              href="#"
              aContent="Explore Deadline Plugin"
            />
            {/* expenses plugin */}
            <FeatureRow
              src={expenses}
              alt=""
              pContent1="Expenses Plugin"
              h2Content="Keeps track of Expenses"
              pContent2="A plugin that helps to keep an accurate record of a company's expenses"
              href="#"
              aContent="Explore Expenses Plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* duty shift plugin */}
             <FeatureRow
              src={duty}
              alt=""
              pContent1="Duty Shift Plugin"
              h2Content="Tracking your shifts has never been easier! "
              pContent2="A plugin that helps indiviuals track their working hours and communicate with other employees."
              href="#"
              aContent="Explore Duty Shift Plugin"
            />
            {/* external tools plugin */}
            <FeatureRow
              src={tools}
              alt=""
              pContent1="External Tools Plugins"
              h2Content="Usage of 3rd Party Tools"
              pContent2="The External Tools plugin is a feature which allows users to interact with third party tools like Google Drive, Figma, Github, etc. to make work flow for themselves or their team faster and easier"
              href="externaltools.zuri.chat"
              aContent="Explore Tools Plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* whiteboard plugin */}
             <FeatureRow
              src={ft_img2}
              alt=""
              pContent1="Whiteboard Plugin"
              h2Content="Idea sharing and Team collaborations"
              pContent2="The whiteboard plugin is used for visualizing thoughts, concepts, write down ideas, explain and teach, to plan and create within a certain group of individuals"
              href="#"
              aContent="Explore Whiteboard Plugins"
            />
            {/* holiday calender plugin */}
            <FeatureRow
              src={holiday}
              alt=""
              pContent1="Holiday Calender Plugin"
              h2Content="Schedules Events or holidays for staffs"
              pContent2="Company Holiday Calendar Plugin is a plugin that enables calendar 
              functions mainly to organize or schedule holidays or events for a company"
              href="#"
              aContent="Explore Company's Calender Plugin"
              rowOrder={style.ft_row_reverse}
            />
            {/* company shift */}
             <FeatureRow
              src={compShift}
              alt=""
              pContent1="Company Shift Plugin"
              h2Content="Monitors a Company's Working Hours"
              pContent2="A plugin that keeps track of a company's working hour and how it is distributed among employees of the company."
              href="https://employeeshift.zuri.chat/"
              aContent="Explore Company Shift Plugin"
            />
          </div>
        </div>
        {/* learn more */}
        <div className={`${style.sign_up_banner_wrap}`}>
          <div className={`${style.sign_up_banner}`}>
            <div className={`${style.sign_up_left}`}>
              <p className={`${style.sign_up_left_p}`}>
                Get plugins that you would enjoy
              </p>
              <p className={`${style.sign_up_right_p}`}>
              Integrate your favorite plugins and get more exciting experience
              </p>
              <a href="/signup">
                <button className={`${style.sign_up_btn}`}>
                  Discover more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}
