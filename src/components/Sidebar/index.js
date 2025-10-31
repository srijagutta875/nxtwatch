import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  SidebarContainer,
  UnorderedListContainer,
  UnorderedList,
  ListItem,
  SideHomeIcon,
  SideTrendingIcon,
  SideGamingIcon,
  SideSavedIcon,
  SideListItem,
  LinkItems,
  SideContactUs,
  SideIconsContainer,
  ImageLogos,
  SideLowerContainer,
  SideLowerPara,
} from '../../styledComponents'

const menuItems = [
  {id: 1, name: 'Home', path: '/', icon: SideHomeIcon},
  {id: 2, name: 'Trending', path: '/trending', icon: SideTrendingIcon},
  {id: 3, name: 'Gaming', path: '/gaming', icon: SideGamingIcon},
  {id: 4, name: 'Saved Videos', path: '/saved-videos', icon: SideSavedIcon},
]

class Sidebar extends Component {
  render() {
    const {show, location} = this.props
    const {pathname} = location

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SidebarContainer show={show} isDarkTheme={isDarkTheme}>
              <UnorderedListContainer>
                <UnorderedList>
                  {menuItems.map(item => {
                    const IconComponent = item.icon
                    const isActive = pathname === item.path
                    return (
                      <LinkItems to={item.path} key={item.id}>
                        <ListItem active={isActive} isDarkTheme={isDarkTheme}>
                          <IconComponent
                            active={isActive}
                            isDarkTheme={isDarkTheme}
                          />
                          <SideListItem
                            active={isActive}
                            isDarkTheme={isDarkTheme}
                          >
                            {item.name}
                          </SideListItem>
                        </ListItem>
                      </LinkItems>
                    )
                  })}
                </UnorderedList>
              </UnorderedListContainer>
              <SideLowerContainer isDarkTheme={isDarkTheme}>
                <SideContactUs isDarkTheme={isDarkTheme}>
                  CONTACT US
                </SideContactUs>
                <SideIconsContainer>
                  <ImageLogos
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ImageLogos
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ImageLogos
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SideIconsContainer>
                <SideLowerPara isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </SideLowerPara>
              </SideLowerContainer>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
