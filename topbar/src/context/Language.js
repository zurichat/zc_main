import React, { useContext, useState, createContext } from 'react'
import { languageOptions, dictionary } from '../constants/translations'
export const LanguageContext = createContext({
  userLanguage: 'en', //languageOptions[0],
  dictionary: dictionary.en
})

export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem('rcml-lang')
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en')
  const provider = {
    userLanguage,
    dictionary: dictionary[userLanguage], // ?
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage)
      window.localStorage.setItem('rcml-lang', newLanguage)
    }
  }
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}
// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext)

  return languageContext.dictionary[tid] || tid
}
