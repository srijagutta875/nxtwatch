import {Component} from 'react'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {
  HeaderContainer,
  HeaderLogo,
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
      <>
        <HeaderContainer>
          <HeaderLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <HeaderRightSideLg className="headerRightside">
            <HeaderThemeButton type="button" className="headerthemeButton">
              <HeaderThemeIcon />
            </HeaderThemeButton>
            <HeaderProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <div>
                  <HeaderLogoutButton type="button" className="trigger-button">
                    Logout
                  </HeaderLogoutButton>
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
          </HeaderRightSideLg>
          <HeaderRightSideSm>
            <HeaderThemeButton type="button">
              <HeaderThemeIcon />
            </HeaderThemeButton>
            <HeaderThemeButton type="button" onClick={onToggleChange}>
              <HeaderMenuIcon />
            </HeaderThemeButton>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <div>
                    <HeaderThemeButton type="button" className="trigger-button">
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
      </>
    )
  }
}
export default withRouter(Header)
