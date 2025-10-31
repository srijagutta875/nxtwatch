import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoMdHome, IoIosClose, IoIosSearch} from 'react-icons/io'
import {FaMoon, FaFireAlt, FaSun} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {Link} from 'react-router-dom'

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const NotFoundImage = styled.img`
  height: 40vh;
  width: 30vw;
`

export const NotFoundHeading = styled.h1`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
`

export const NotFoundPara = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cccccc' : '#231f20')};
  font-family: 'Roboto';
`
export const HeaderContainer = styled.div`
  height: 10vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  border-bottom: 1px solid
    ${props => (props.isDarkTheme ? '#383838' : '#cccccc')};
`
export const HeaderLogo = styled.img`
  height: 30px;
  width: 100px;
`
export const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
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
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`
export const HeaderThemeIcon = styled(FaMoon)`
  height: 30px;
  width: 30px;
`
export const HeaderLightIcon = styled(FaSun)`
  height: 30px;
  width: 30px;
  color: #ffffff;
`

export const HeaderMenuIcon = styled(GiHamburgerMenu)`
  height: 30px;
  width: 30px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
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
  border-color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.isDarkTheme ? '#3b82f6' : '#e2e8f0')};
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  }
`
export const HeaderRightSideSm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: auto;

  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const PageLayoutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const PageLayoutContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  margin-top: 10vh;
`
export const PageLayoutContent = styled.div`
  width: 80vw;
  padding: 10px;
  overflow-y: auto;
  margin-left: 20vw;
  @media screen and (max-width: 767px) {
    width: 100vw; /* Full width when sidebar hidden */
    margin-left: 0;
  }
`
export const SidebarContainer = styled.div`
  position: fixed;
  height: 90vh;
  top: 10vh;
  width: 20vw;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#000000')};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media screen and (max-width: 767px) {
    display: ${({show}) => (show ? 'flex' : 'none')};
    width: 40vw;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
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
  cursor: pointer;
  background-color: ${({active, isDarkTheme}) => {
    if (active) {
      return isDarkTheme ? '#383838' : '#f1f5f9'
    }
    return 'transparent'
  }};
`
export const SideHomeIcon = styled(IoMdHome)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  color: ${({active, isDarkTheme}) => {
    if (active) return '#ff0000'
    return isDarkTheme ? '#f9f9f9' : '#000000'
  }};
`

export const SideTrendingIcon = styled(FaFireAlt)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  color: ${({active, isDarkTheme}) => {
    if (active) return '#ff0000'
    return isDarkTheme ? '#f9f9f9' : '#000000'
  }};
`

export const SideGamingIcon = styled(SiYoutubegaming)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  color: ${({active, isDarkTheme}) => {
    if (active) return '#ff0000'
    return isDarkTheme ? '#f9f9f9' : '#000000'
  }};
`

export const SideSavedIcon = styled(MdPlaylistAdd)`
  height: 20px;
  width: 20px;
  margin-right: 30px;
  color: ${({active, isDarkTheme}) => {
    if (active) return '#ff0000'
    return isDarkTheme ? '#f9f9f9' : '#000000'
  }};
`

export const SideListItem = styled.p`
  font-size: 15px;
  margin: 0;
  font-weight: ${({active}) => (active ? 'bold' : 'normal')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#475569')};
`

export const LinkItems = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto';
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#212121')};
  display: flex;
  width: 100%;
`

export const SideLowerContainer = styled.div`
  margin: 15px;
`

export const SideContactUs = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-size: 25px;
  font-weight: bold;
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
  color: ${({isDarkTheme}) => (isDarkTheme ? '#e2e8f0' : '#1e293b')};
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const HomeFirstContainer = styled.div`
  background-image: ${({isDarkTheme}) =>
    isDarkTheme
      ? "url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg-dark.png')"
      : "url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png')"};
  height: 30vh;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`

export const HomeFirstdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 10px;
`

export const HomeCloseIcon = styled(IoIosClose)`
  font-size: 30px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#181818')};
`

export const HomeBannersLogo = styled.img`
  height: 30px;
  width: 120px;
`

export const HomeBannerPara = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#1e293b')};
  font-weight: 400;
`

export const HomeGetButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: transparent;
  border-color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#1e293b')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#1e293b')};
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
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#f8fafc')};
  min-height: 100vh;
`

export const LoaderContainer = styled.div`
  margin: 20px;
  margin-top: 50px;
  display: flex;
  flex-directin: column;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeFailureImage = styled.img`
  height: 40vh;
  width: 30vw;
`

export const FailureHeading = styled.h1`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f8fafc' : '#1e293b')};
  font-family: 'Roboto';
`

export const FailurePara = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cbd5e1' : '#475569')};
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
export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#000000')};
`

export const LoginCard = styled.div`
  height: 55vh;
  width: 35vw;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#ffffff')};
  border-radius: 10px;
  box-shadow: ${({isDarkTheme}) =>
    isDarkTheme ? 'none' : '0px 4px 10px rgba(0, 0, 0, 0.25)'};
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 30px;
  padding-left: 40px;
`

export const LoginLogos = styled.img`
  height: 40px;
  width: 40%;
  margin-bottom: 20px;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const LoginForm = styled.form`
  margin: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const LoginsLabel = styled.label`
  margin-bottom: 0px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#7e858e')};
  font-weight: 700;
  font-size: 13px;
`

export const LoginInput = styled.input`
  margin-top: 4px;
  padding: 12px;
  height: 36px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#000000')};

  &:focus {
    border-color: #3b82f6;
  }
`

export const LoginShowPassword = styled.div`
  margin-top: 8px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#000000')};
`

export const LoginsButton = styled.button`
  margin-top: 20px;
  height: 35px;
  border-style: none;
  border-radius: 5px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4f46e5;
`

export const LoginErrorMsg = styled.p`
  color: #ff0b37;
  margin-top: 0px;
`

export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
`

export const HomeSearchInput = styled.input`
  padding: 12px;
  height: 36px;
  border: 1px solid #cbd5e1;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  width: 40%;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#000000')};

  &:focus {
    border-color: #3b82f6;
  }
`

export const HomeSearchIcon = styled(IoIosSearch)`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#000000')};
`

export const HomeSearchsButton = styled.button`
  height: 36px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-style: none;
  border: 1px solid #cbd5e1;
  border-radius: 0 4px 4px 0;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f1f5f9')};
`
export const VideoListsItem = styled.li`
  height: auto;
  min-height: 300px; /* optional baseline */
  width: 25%;
  padding: 10px;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#ffffff')};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({isDarkTheme}) =>
      isDarkTheme
        ? '0 4px 12px rgba(255, 255, 255, 0.1)'
        : '0 4px 12px rgba(0, 0, 0, 0.1)'};
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 48%;
    min-height: 250px;
    padding: 6px;
  }

  @media screen and (max-width: 768px) {
    width: 46%;
    min-height: 220px;
  }

  @media screen and (max-width: 480px) {
    width: 96%;
    min-height: 200px;
  }
`

export const VideoThumb = styled.img`
  height: 50%;
  width: 100%;
  border-radius: 6px;
`

export const VideoChannelLogo = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  flex-shrink: 0;
`

export const VideoLogosDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 5px;
`

export const VideoLogInsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const VideoTitlePara = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-size: 15px;
  margin: 0;
  line-height: 1.4;
  font-weight: 500;

  @media screen and (min-width: 767px) and (max-width: 1200px) {
    font-size: 13px;
  }
`

export const VideoName = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cccccc' : '#616e7c')};
  font-size: 14px;
  margin: 4px 0;
`

export const VideoSmall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-size: 13px;
`

export const VideoSmallP = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#b3b3b3' : '#616e7c')};
  margin-right: 5px;
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block; /* ensures it behaves like a block container */
`
export const VideoPlayerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const VideoItemTitle = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f1f1' : '#1e293b')};
  font-weight: 400;
`

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HorizontalLines = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({isDarkTheme}) =>
    isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(66, 66, 66, 0.2)'};
`

export const VideoLikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  color: ${({active, isDarkTheme}) => {
    if (active) {
      return '#2563eb' // blue when active
    }
    return isDarkTheme ? '#f1f1f1' : '#1e293b'
  }};
`
export const VideoActionItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
`

export const LikeIcon = styled(AiOutlineLike)`
  font-size: 15px;
  margin-right: 2px;
`

export const DislikeIcon = styled(BiDislike)`
  font-size: 15px;
  margin-right: 2px;
`

export const SavedIcon = styled(MdPlaylistAdd)`
  font-size: 15px;
  margin-right: 2px;
`

export const VideoActionsList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  margin: 0;
`

export const VideoDescriptionCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const Logoimg = styled.img`
  height: 5%;
  width: 5%;
  margin-right: 10px;
  margin-top: 10px;
`

export const VideoChannelName = styled.p`
  font-size: 15px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f1f1' : '#1e293b')};
  margin-bottom: 3px;
`

export const VideoChannelViews = styled.p`
  font-size: 11px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cbd5e1' : '#616e7c')};
`

export const VideoChannelDescription = styled.p`
  font-size: 11px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#94a3b8' : '#475569')};
`

export const LogoutCancelButton = styled.button`
  background-color: transparent;
  color: #616e7c;
  font-weight: bold;
  border-style: none;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  border-style: solid;
  border-color: #475569;
  font-weight: 200;
  border-width: 1px;
  cursor: pointer;
`
export const LogoutPa = styled.p`
  color: #1e293b;
  font-weight: 400;
`
export const LogoutConfirmButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  border-style: none;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin-left: 15px;
  cursor: pointer;
`
export const LogoutConfirmCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const TrendingContainer = styled.div`
  min-height: 100vh;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  overflow-x: hidden;
`
export const TrendingFirstContainer = styled.div`
  height: 15vh;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  padding-left: 30px;
`
export const MainTrendingIcon = styled(FaFireAlt)`
  color: #ff0000;
`
export const MainTrendingCont = styled.div`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 50px;
  height: 60px;
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
export const TrendingVideoUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const TrendingVideoListItem = styled.li`
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f1f1' : '#1e293b')};
  width: 100%;
  padding: 20px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({isDarkTheme}) =>
      isDarkTheme
        ? '0 4px 12px rgba(255, 255, 255, 0.1)'
        : '0 4px 12px rgba(0, 0, 0, 0.1)'};
  }
`
export const TrendingVideosThumb = styled.img`
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 1200px) {
    width: 320px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    height: auto;
  }
`
export const TrendingLogsInsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-left: 20px;
  margin: 10px;
  height: 90%;
`
export const TrendingVideoTitlePara = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-size: 20px;
  margin: 0;
  line-height: 1.4;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`
export const TrendVideoName = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cccccc' : '#475569')};
  font-size: 16px;
  margin: 0;
  line-height: 1.3;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`

export const TrendingVideoSmallP = styled.p`
  margin: 0;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#94a3b8' : '#64748b')};

  &:not(:last-child)::after {
    content: '•';
    margin-left: 2px;
    margin-right: 0px;
  }
`
export const TrendingVideoSmall = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#94a3b8' : '#64748b')};
  font-size: 14px;
  margin-top: 5px;

  @media screen and (max-width: 1200px) {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`
export const TrendingVideosLink = styled(Link)`
  color: inherit;
  display: flex;
  flex-direction: row;
  text-decoration: none;
`

export const MainGamingIcon = styled(SiYoutubegaming)`
  color: #ff0000;
`
export const GamingVideoUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`
export const GamingVideoList = styled.li`
  min-width: 20vw;
  margin: 10px;
`

export const GamingVideoImg = styled.img`
  height: 400px;
  width: 200px;
`

export const GamingVideoP = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  margin-bottom: 2px;
`

export const GamingViewPara = styled.p`
  margin-top: 2px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cccccc' : '#475569')};
`

export const GamingVideosLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const MainSavingIcon = styled(MdPlaylistAdd)`
  color: #ff0000;
`

export const NoSavingContainer = styled.div`
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    height: 100vh;
    width: 100vw;
  }
`
