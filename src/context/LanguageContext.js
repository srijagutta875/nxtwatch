import React from 'react'

const LanguageContext = React.createContext({
  savedVideos: [],
  addSavedVideos: () => {},
})

export default LanguageContext
