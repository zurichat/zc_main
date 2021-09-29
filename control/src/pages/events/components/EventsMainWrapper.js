import React from 'react'
import EventsHeroSection from './EventsHeroSection'
import EventsMeetSection from './EventsMeetSection'
import eventsStyles from '../styles/events.module.css'
import EventsUpcomingMeetsSection from './EventsUpcomingMeetsSection'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const EventsMainWrapper = () => {
  return (
    <div className={eventsStyles.eventsMainWrapper}>
      <Header />
      <EventsHeroSection />
      <EventsMeetSection />
      <EventsUpcomingMeetsSection />
      <Footer />
    </div>
  )
}

export default EventsMainWrapper
