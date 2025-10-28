import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoMdHome} from 'react-icons/io'
import {FaMoon, FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {Link} from 'react-router-dom'

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 40vh;
  width: 30vw;
`
export const NotFoundHeading = styled.h1`
  color: #181818;
  font-family: 'Roboto';
`
export const NotFoundPara = styled.p`
  color: #231f20;
  font-family: 'Roboto';
`
export const HeaderContainer = styled.div`
  height: 10vh;
  background-color: #f9f9f9;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  overflow: hidden;
`
export const HeaderLogo = styled.img`
  height: 30px;
  width: 100px;
`
export const HeaderRightSideLg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 20%;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HeaderThemeButton = styled.button`
  background-color: transparent;
  border-style: none;
`
export const HeaderThemeIcon = styled(FaMoon)`
  height: 30px;
  width: 30px;
`

export const HeaderMenuIcon = styled(GiHamburgerMenu)`
  height: 30px;
  width: 30px;
`

export const HeaderLogoutIcon = styled(FiLogOut)`
  height: 30px;
  width: 30px;
`

export const HeaderProfileImage = styled.img`
  height: 30px;
  width: 30px;
`
export const HeaderLogoutButton = styled.button`
  border-color: #3b82f6;
  color: #3b82f6;
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  margin-left: 10px;
`
export const HeaderRightSideSm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PageLayoutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`
export const PageLayoutContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100vw;
  margin-top: 10vh;
`
export const PageLayoutContent = styled.div`
  width: 80vw;
  padding: 10px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 20vw;
  }
  @media screen and (max-width: 768px) {
    width: 100vw; /* Full width when sidebar hidden */
    margin-left: 0;
  }
`
export const SidebarContainer = styled.div`
  position: fixed;
  height: 90vh;
  top: 10vh;
  width: 20vw;
  background-color: #f9f9f9;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justicy-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    display: block;
  }

  /* Mobile: toggle visibility */
  @media screen and (max-width: 767px) {
    display: ${({show}) => (show ? 'block' : 'none')};
    width: 60vw;
  }
`
export const UnorderedListContainer = styled.div`
  padding: 10px;
`
export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 0;
`
export const SideHomeIcon = styled(IoMdHome)`
  height: 28px;
  width: 28px;
  margin-right: 30px;
  margin-left: 0px;
`
export const SideTrendingIcon = styled(FaFireAlt)`
  height: 25px;
  width: 25px;
  margin-right: 30px;
  margin-left: 0px;
`
export const SideGamingIcon = styled(SiYoutubegaming)`
  height: 25px;
  width: 25px;
  margin-right: 30px;
  margin-left: 0px;
`
export const SideSavedIcon = styled(MdPlaylistAdd)`
  height: 25px;
  width: 25px;
  margin-right: 30px;
  margin-left: 0px;
`
export const SideListItem = styled.p`
  font-size: 18px;
  margin: 0;
`
export const LinkItems = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
  color: #212121;
`
