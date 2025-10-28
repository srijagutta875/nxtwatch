import {Component} from 'react'

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
    console.log('Toggle clicked')
  }

  render() {
    const {show} = this.state
    console.log('Show value:', show)
    const {children} = this.props
    console.log(children)
    return (
      <PageLayoutContainer>
        <Header onToggleChange={this.onToggleChanged} />
        <PageLayoutContainerInner>
          <Sidebar show={show} />
          <PageLayoutContent>{children}</PageLayoutContent>
        </PageLayoutContainerInner>
      </PageLayoutContainer>
    )
  }
}
export default PageLayout
