import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import PageLayout from '../PageLayout'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingContainer,
  TrendingFirstContainer,
  MainTrendingCont,
  MainTrendingIcon,
  LoaderContainer,
  FailureContainer,
  HomeFailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  TrendingVideoUnorderedList,
} from '../../styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConst.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConst.progress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConst.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderLoader = isDarkTheme => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader
          type="ThreeDots"
          color={isDarkTheme ? '#ffffff' : '#000000'}
          height="50"
          width="50"
        />
      </div>
    </LoaderContainer>
  )

  retryButtonClicked = () => {
    this.getTrendingVideos()
  }

  renderFailure = isDarkTheme => (
    <FailureContainer>
      <HomeFailureImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailurePara isDarkTheme={isDarkTheme}>
        We are having some trouble completing your request. Please try again.
      </FailurePara>
      <FailureButton type="button" onClick={this.retryButtonClicked}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderSuccesView = isDarkTheme => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoUnorderedList>
        {trendingVideos.map(each => (
          <TrendingVideoCard
            key={each.id}
            details={each}
            isDarkTheme={isDarkTheme}
          />
        ))}
      </TrendingVideoUnorderedList>
    )
  }

  renderDetails = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.progress:
        return this.renderLoader(isDarkTheme)
      case apiStatusConst.failure:
        return this.renderFailure(isDarkTheme)
      case apiStatusConst.success:
        return this.renderSuccesView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <PageLayout>
              <TrendingContainer
                isDarkTheme={isDarkTheme}
                data-testid="trending"
              >
                <TrendingFirstContainer isDarkTheme={isDarkTheme}>
                  <MainTrendingCont isDarkTheme={isDarkTheme}>
                    <MainTrendingIcon isDarkTheme={isDarkTheme} />
                  </MainTrendingCont>
                  <h1 style={{color: isDarkTheme ? '#ffffff' : '#1e293b'}}>
                    Trending
                  </h1>
                </TrendingFirstContainer>
                {this.renderDetails(isDarkTheme)}
              </TrendingContainer>
            </PageLayout>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
