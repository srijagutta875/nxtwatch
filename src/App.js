import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import LanguageContext from './context/LanguageContext'
import ThemeContext from './context/ThemeContext'

// Replace your code here
class App extends Component {
  state = {savedVideos: [], isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addSavedVideos = video => {
    this.setState(prevState => {
      const alreadySaved = prevState.savedVideos.find(
        item => item.id === video.id,
      )
      if (alreadySaved) {
        return null
      }
      return {savedVideos: [...prevState.savedVideos, video]}
    })
  }

  render() {
    const {savedVideos, isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <LanguageContext.Provider
          value={{savedVideos, addSavedVideos: this.addSavedVideos}}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Redirect to="/not-found" />
          </Switch>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
