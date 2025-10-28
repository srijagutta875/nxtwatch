import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

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
  width: 20%;
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`
export const HomeContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100vw;
  margin-top: 10vh;
`
export const HomeContent = styled.div`  
  width: 80vw;
  padding: 10px;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 100vw; /* Full width when sidebar hidden */
  }
`
export const SidebarContainer = styled.div`
  position: fixed;
  height: 90vh;
  top: 10vh; 
  width: 20vw;
  background-color: #f9f9f9;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
