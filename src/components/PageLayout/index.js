import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import {
  PageLayoutContainer,
  PageLayoutContainerInner,
  PageLayoutContent,
} from '../../styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'

class PageLayout extends Component {
  state = {show: false}

  onToggleChanged = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render() {
    const {show} = this.state
    const {children} = this.props

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <PageLayoutContainer isDarkTheme={isDarkTheme}>
              <Header onToggleChange={this.onToggleChanged} />
              <PageLayoutContainerInner>
                <Sidebar show={show} />
                <PageLayoutContent>{children}</PageLayoutContent>
              </PageLayoutContainerInner>
            </PageLayoutContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default PageLayout
