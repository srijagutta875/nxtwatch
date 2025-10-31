import {Component} from 'react'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'
import 'reactjs-popup/dist/index.css'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderLink,
  HeaderRightSideLg,
  HeaderThemeButton,
  HeaderThemeIcon,
  HeaderMenuIcon,
  HeaderLogoutIcon,
  HeaderLogoutButton,
  HeaderRightSideSm,
  HeaderProfileImage,
  LogoutConfirmButton,
  LogoutCancelButton,
  LogoutPa,
  LogoutConfirmCont,
  HeaderLightIcon,
} from '../../styledComponents'

class Header extends Component {
  LogoutButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {onToggleChange} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          return (
            <HeaderContainer isDarkTheme={isDarkTheme}>
              <HeaderLink to="/">
                <HeaderLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </HeaderLink>
              <HeaderRightSideLg className="headerRightside">
                <HeaderThemeButton
                  type="button"
                  className="headerthemeButton"
                  data-testid="theme"
                  onClick={toggleTheme}
                >
                  {isDarkTheme ? <HeaderLightIcon /> : <HeaderThemeIcon />}
                </HeaderThemeButton>
                <HeaderProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <div>
                      <HeaderLogoutButton
                        type="button"
                        className="trigger-button"
                        isDarkTheme={isDarkTheme}
                      >
                        Logout
                      </HeaderLogoutButton>
                    </div>
                  }
                  closeOnDocumentClick
                >
                  {close => (
                    <LogoutConfirmCont>
                      <LogoutPa>Are you sure, you want to logout</LogoutPa>
                      <div>
                        <LogoutCancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </LogoutCancelButton>
                        <LogoutConfirmButton
                          type="button"
                          onClick={this.LogoutButton}
                        >
                          Confirm
                        </LogoutConfirmButton>
                      </div>
                    </LogoutConfirmCont>
                  )}
                </Popup>
              </HeaderRightSideLg>
              <HeaderRightSideSm>
                <HeaderThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={toggleTheme}
                >
                  {isDarkTheme ? <HeaderLightIcon /> : <HeaderThemeIcon />}
                </HeaderThemeButton>
                <HeaderThemeButton type="button" onClick={onToggleChange}>
                  <HeaderMenuIcon isDarkTheme={isDarkTheme} />
                </HeaderThemeButton>
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <div>
                        <HeaderThemeButton
                          type="button"
                          className="trigger-button"
                          isDarkTheme={isDarkTheme}
                        >
                          <HeaderLogoutIcon />
                        </HeaderThemeButton>
                      </div>
                    }
                    closeOnDocumentClick
                  >
                    {close => (
                      <LogoutConfirmCont>
                        <LogoutPa>Are you sure you want to logout?</LogoutPa>
                        <div>
                          <LogoutCancelButton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutCancelButton>
                          <LogoutConfirmButton
                            type="button"
                            onClick={this.LogoutButton}
                          >
                            Confirm
                          </LogoutConfirmButton>
                        </div>
                      </LogoutConfirmCont>
                    )}
                  </Popup>
                </div>
              </HeaderRightSideSm>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)
