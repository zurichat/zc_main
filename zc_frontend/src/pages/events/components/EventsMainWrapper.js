import React from 'react'
import EventsHeroSection from './EventsHeroSection'
import EventsMeetSection from './EventsMeetSection'
import eventsStyles from '../styles/events.module.css'
import EventsUpcomingMeetsSection from './EventsUpcomingMeetsSection'
// import Header from '../../../components/externalPagesComponents/Header'
import SearchSuggestion from '../../searchSuggestion'
import Footer from '../../../components/externalPagesComponents/Footer/Footer'

const EventsMainWrapper = () => {
  return (
    <div className={eventsStyles.eventsMainWrapper}>
      {/* <Header /> */}
      <SearchSuggestion />
      <EventsHeroSection />
      <EventsMeetSection />
      <EventsUpcomingMeetsSection />
      <Footer />
    </div>
  )
}

export default EventsMainWrapper
