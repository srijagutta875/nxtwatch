import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from '../../styledComponents'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const imageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

          return (
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
