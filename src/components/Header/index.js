import {Component} from 'react'

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
  render() {
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
            <HeaderLogoutButton type="button">Logout</HeaderLogoutButton>
          </HeaderRightSideLg>
          <HeaderRightSideSm>
            <HeaderThemeButton type="button" className="headerthemeButton">
              <HeaderThemeIcon />
              <HeaderMenuIcon />
              <HeaderLogoutIcon />
            </HeaderThemeButton>
          </HeaderRightSideSm>
        </HeaderContainer>
      </>
    )
  }
}
export default Header
