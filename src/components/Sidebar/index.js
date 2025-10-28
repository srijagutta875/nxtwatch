import {Component} from 'react'

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
} from '../../styledComponents'

class Sidebar extends Component {
  render() {
    const {show} = this.props
    return (
      <SidebarContainer show={show}>
        <UnorderedListContainer>
          <UnorderedList>
            <LinkItems to="/">
              <ListItem>
                <SideHomeIcon />
                <SideListItem>Home</SideListItem>
              </ListItem>
            </LinkItems>
            <LinkItems to="/trending">
              <ListItem>
                <SideTrendingIcon />
                <SideListItem>Trending</SideListItem>
              </ListItem>
            </LinkItems>
            <LinkItems to="/gaming">
              <ListItem>
                <SideGamingIcon />
                <SideListItem>Gaming</SideListItem>
              </ListItem>
            </LinkItems>
            <LinkItems to="/saved-videos">
              <ListItem>
                <SideSavedIcon />
                <SideListItem>Saved Videos</SideListItem>
              </ListItem>
            </LinkItems>
          </UnorderedList>
        </UnorderedListContainer>
      </SidebarContainer>
    )
  }
}
export default Sidebar
