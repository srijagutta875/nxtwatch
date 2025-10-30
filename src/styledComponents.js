import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoMdHome, IoIosClose, IoIosSearch} from 'react-icons/io'
import {FaMoon, FaFireAlt} from 'react-icons/fa'
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

  @media screen and (min-width: 767px) {
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
  background-color: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  /* Mobile: toggle visibility */
  @media screen and (max-width: 767px) {
    display: ${({show}) => (show ? 'flex' : 'none')};
    width: 40vw;
    flex-direction: column; /* 👈 added */
    justify-content: space-between; /* 👈 added */
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
  display: flex; /* ✅ makes it fill horizontally */
  width: 100%;
`
export const SideLowerContainer = styled.div`
  margin: 15px;
`

export const SideContactUs = styled.h1`
  color: #1e293b;
  font-weight: 20px;
  font-size: 20px;
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
  display: flex;
  flex-direction: column;
`
export const HomeFirstContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  background-size: cover;
  background-position: center;
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
export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-directin: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`
export const LoginCard = styled.div`
  height: 55vh;
  width: 35vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
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
  @media screen and max-width: 768px {
    width: 80%;
  }
`
export const LoginForm = styled.form`
    margin: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-itens-center;
`
export const LoginsLabel = styled.label`
  margin-bottom: 0px;
  color: #7e858e;
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

  &:focus {
    border-color: #3b82f6;
  }
`
export const LoginShowPassword = styled.div`
  margin-top: 8px;
`
export const LoginsButton = styled.button`
  background-color: #3b82f6;
  margin-top: 20px;
  height: 35px;
  border-style: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
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
  &:focus {
    border-color: #3b82f6;
  }
`
export const HomeSearchIcon = styled(IoIosSearch)`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`
export const HomeSearchsButton = styled.button`
  height: 36px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-style: none;
  border: 1px solid #cbd5e1; /* merges smoothly with input */
  border-radius: 0 4px 4px 0;
`
export const VideoListsItem = styled.li`
height: auto;
min-height: 300px; /* optional baseline */
width: 25%;
padding: 10px;
transition: all 0.3s ease;

&:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  }
`
export const VideoThumb = styled.img`
  height: 50%;
  width: 100%;
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
  color: #1e293b;
  font-size: 15px;
  margin: 0;
  line-height: 1.4;
  @media screen and (min-width: 767px) and (max-width: 1200px) {
    font-size: 13px;
  }
`
export const VideoName = styled.p`
  color: #616e7c;
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
  color: #616e7c;
  margin-right: 5px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block; /* ensures it behaves like a block container */
`
export const VideoPlayerDiv = styled.div`
  display: flex;
  flex-direcion: column;
  align-items: center;
`
export const VideoItemTitle = styled.p`
  color: #1e293b;
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
  background-color: rgba(66, 66, 66, 0.2); /* 0.2 = 20% intensity */
`
export const VideoLikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border-style: none;
  color: #616e7c;
  color: inherit;
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
export const VideoActionItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({active}) =>
    active ? '#2563eb' : '#64748b'}; /* blue when active */
  cursor: pointer;
  transition: color 0.3s ease;
`

export const VideoDescriptionCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  color: #1e293b;
  margin-bottom: 3px;
`
export const VideoChannelViews = styled.p`
  font-size: 11px;
  color: #616e7c;
`
export const VideoChannelDescription = styled.p`
  font-size: 11px;
  color: #475569;
`
