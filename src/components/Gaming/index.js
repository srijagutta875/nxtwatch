import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import PageLayout from '../PageLayout'
import GamingVideoCard from '../GamingVideoCard'

import {
  TrendingContainer,
  TrendingFirstContainer,
  MainTrendingCont,
  MainGamingIcon,
  LoaderContainer,
  FailureContainer,
  HomeFailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  GamingVideoUnorderedList,
} from '../../styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConst.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConst.progress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConst.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConst.failure,
      })
    }
  }

  renderLoader = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  retryButtonClicked = () => {
    this.getGamingVideos()
  }

  renderFailure = () => (
    <FailureContainer>
      <HomeFailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We are having some trouble completing your request.Please try again.
      </FailurePara>
      <FailureButton type="button" onClick={this.retryButtonClicked}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderSuccesView = () => {
    const {gamingVideos} = this.state
    console.log(gamingVideos)
    return (
      <GamingVideoUnorderedList>
        {gamingVideos.map(each => (
          <GamingVideoCard key={each.id} details={each} />
        ))}
      </GamingVideoUnorderedList>
    )
  }

  renderDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.progress:
        return this.renderLoader()
      case apiStatusConst.failure:
        return this.renderFailure()
      case apiStatusConst.success:
        return this.renderSuccesView()
      default:
        return null
    }
  }

  render() {
    return (
      <PageLayout>
        <TrendingContainer>
          <TrendingFirstContainer>
            <MainTrendingCont>
              <MainGamingIcon />
            </MainTrendingCont>
            <h1>Gaming</h1>
          </TrendingFirstContainer>
          {this.renderDetails()}
        </TrendingContainer>
      </PageLayout>
    )
  }
}
export default Gaming
