import {Component} from 'react'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

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
} from '../../styledComponents'

class Header extends Component {
  LogoutButtonClicked = () => {
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
            <HeaderLogoutButton
              type="button"
              onClick={this.LogoutButtonClicked}
            >
              Logout
            </HeaderLogoutButton>
          </HeaderRightSideLg>
          <HeaderRightSideSm>
            <HeaderThemeButton type="button">
              <HeaderThemeIcon />
            </HeaderThemeButton>

            <HeaderThemeButton type="button" onClick={onToggleChange}>
              <HeaderMenuIcon />
            </HeaderThemeButton>

            <HeaderThemeButton type="button" onClick={this.LogoutButtonClicked}>
              <HeaderLogoutIcon />
            </HeaderThemeButton>
          </HeaderRightSideSm>
        </HeaderContainer>
      </>
    )
  }
}
export default withRouter(Header)
