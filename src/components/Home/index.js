import {Component} from 'react'

import {
  HomeContainer,
  HomeContainerInner,
  HomeContent,
} from '../../styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <HomeContainerInner>
          <Sidebar />
          <HomeContent>
            <h1>Hello</h1>
          </HomeContent>
        </HomeContainerInner>
      </HomeContainer>
    )
  }
}
export default Home
