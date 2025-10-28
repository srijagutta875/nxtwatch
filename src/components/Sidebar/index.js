import {Component} from 'react'

import {withRouter} from 'react-router-dom'

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
      <SidebarContainer show={show}>
        <UnorderedListContainer>
          <UnorderedList>
            {menuItems.map(item => {
              const IconComponent = item.icon
              const isActive = pathname === item.path
              return (
                <LinkItems to={item.path} key={item.id}>
                  <ListItem active={isActive}>
                    <IconComponent active={isActive} />
                    <SideListItem active={isActive}>{item.name}</SideListItem>
                  </ListItem>
                </LinkItems>
              )
            })}
          </UnorderedList>
        </UnorderedListContainer>
        <SideLowerContainer>
          <SideContactUs>CONTACT US</SideContactUs>
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
              alt="linkedin logo"
            />
          </SideIconsContainer>
          <SideLowerPara>
            Enjoy! Now you can see your recommodations!
          </SideLowerPara>
        </SideLowerContainer>
      </SidebarContainer>
    )
  }
}
export default withRouter(Sidebar)
