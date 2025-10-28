import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoMdHome, IoIosClose} from 'react-icons/io'
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
  background-color: #ffffff;
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
  background-color: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* Mobile: toggle visibility */
  @media screen and (max-width: 767px) {
    display: ${({show}) => (show ? 'flex' : 'none')};
    width: 60vw;
    flex-direction: column; /* 👈 added */
    justify-content: space-between; /* 👈 added */
    align-items: flex-start;
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
  margin: 0;
  padding: 10px 20px;
  border-radius: 3px;
  width: 100%;
  background-color: ${({active}) => (active ? '#f1f5f9' : 'transparent')};
  cursor: pointer;
`
export const SideHomeIcon = styled(IoMdHome)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  margin-left: 0px;
  color: ${({active}) => (active ? '#ff0000' : '#000000')};
`
export const SideTrendingIcon = styled(FaFireAlt)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  margin-left: 0px;
  color: ${({active}) => (active ? '#ff0000' : '#000000')};
`
export const SideGamingIcon = styled(SiYoutubegaming)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  margin-left: 0px;
  color: ${({active}) => (active ? '#ff0000' : '#000000')};
`
export const SideSavedIcon = styled(MdPlaylistAdd)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  margin-left: 0px;
  color: ${({active}) => (active ? '#ff0000' : '#000000')};
`
export const SideListItem = styled.p`
  font-size: 15px;
  margin: 0;
  font-weight: ${({active}) => (active ? 'bold' : 'normal')};
  color: #475569;
`
export const LinkItems = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
  color: #212121;
`
export const SideLowerContainer = styled.div`
  margin: 15px;
`

export const SideContactUs = styled.h1`
  color: #1e293b;
  font-weight: 20px;
`
export const SideIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ImageLogos = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const SideLowerPara = styled.p`
  color: #1e293b;
`
export const HomeContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`
export const HomeFirstContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  background-size: cover;
  background-position: center;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
export const HomeFirstdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 10px;
`
export const HomeCloseIcon = styled(IoIosClose)`
  font-size: 30px;
`
export const HomeBannersLogo = styled.img`
  height: 30px;
  width: 120px;
`
export const HomeBannerPara = styled.p`
  color: #1e293b;
  font-weight: 400;
`
export const HomeGetButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: transparent;
  border-color: #1e293b;
  color: #1e293b;
  border-style: solid;
  border-width: 1px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
`
export const HomeClose = styled.button`
  background-color: transparent;
  border-style: none;
  margin-top: 5px;
`
export const HomeSecondContainer = styled.div`
  padding: 10px;
  background-color: #f8fafc;
  min-height: 100vh;
`
export const LoaderContainer = styled.div`
  margin: 20px;
`
export const FailureContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomeFailureImage = styled.img`
  height: 30vh;
  width: 20vw;
`
export const FailureHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
`
export const FailurePara = styled.p`
  color: #475569;
  font-family: 'Roboto';
`
export const FailureButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border-style: none;
  width: 100px;
  border-radius: 5px;
  height: 30px;
`
export const HomeVideosUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
