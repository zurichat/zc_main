import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from "react-bootstrap"
import AdminSettings from '../../.'
import settings from '../../assets/cog.svg'
import analytics from '../../assets/dashboard.svg'
import right_caret from '../../assets/cheveron-right.svg'
import customize from '../../assets/magic-wand.svg'
import classes from '../styles//SettingsHome.module.css'

const randomizedGreeting = [
  "Hey there",
  "Welcome,",
  "¡Hola,"
]

const generateRandomNumber = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
};

const Home = () => {
  const [greeting, setGreeting] = useState(null);
  useEffect(() => {
    const newNumber = generateRandomNumber(1, 3)
    const greetingProcedure = randomizedGreeting[newNumber]
    setGreeting(greetingProcedure)
  }, [])
  return (
    <AdminSettings>
      <Container className={`p-4 ${classes.mtN3}`}>
        <div>
          {/* Picture of User */}
          <h1 className="mb-4">{greeting} Mark</h1>
        </div>

        <div className={classes.card}>
          <div>
            <Link to="/admin/settings" className={classes.grid}>
              <img src={settings} alt="Settings" className={classes.Settings}/>
              <h3>Account Settings </h3>
              <img src={right_caret} alt="go"/>
              <span className="mt-n2">
                Edit your profile, update your username and password, and manage
                other account settings.
              </span>
            </Link>
          </div>
        </div>

        <div className={classes.card}>
          <div>
            <Link to="/admin/settings/home" className={classes.grid}>
              <img src={customize} />
              <h3>Customize Zuri </h3>
              <img src={right_caret} />
              <span>Use these settings to make Zuri your own.</span>
            </Link>
          </div>

          <div className="mt-2">
            <Link to="/admin/stats" className={classes.grid}>
              <img src={analytics} />
              <h3>Analytics </h3>
              <img src={right_caret} />
              <span>
                View stats for your workspace, including activity, files, and
                integrations.
              </span>
            </Link>
          </div>
        </div>

        <nav>
          <li>
            <a href="">Tour</a>
          </li>
          <li>
            <a href="">Download Apps</a>
          </li>
          <li>
            <a href="">Brand Guidelines</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="" target="_blank">
              API
            </a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <div>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Policies</a>
            </li>
            <li>
              <a href="" target="_blank">
                Our Blog
              </a>
            </li>
            <li>
              <a href="">Sign Out</a>
            </li>
          </div>
        </nav>
      </Container>
    </AdminSettings>
  )
}

export default Home
