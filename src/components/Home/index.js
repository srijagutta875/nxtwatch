import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import PageLayout from '../PageLayout'
import VideoCard from '../VideoCard'

import {
  HomeContainer,
  HomeFirstContainer,
  HomeFirstdiv,
  HomeCloseIcon,
  HomeBannersLogo,
  HomeBannerPara,
  HomeGetButton,
  HomeClose,
  HomeSecondContainer,
  LoaderContainer,
  FailureContainer,
  HomeFailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  HomeVideosUnorderedList,
  HomeSearchContainer,
  HomeSearchIcon,
  HomeSearchInput,
  HomeSearchsButton,
} from '../../styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class Home extends Component {
  state = {
    toShow: true,
    searchInput: '',
    updatedData: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConst.progress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = (data.videos || []).map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        updatedData,
        apiStatus: apiStatusConst.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConst.failure,
      })
    }
  }

  closeButtonClicked = () => {
    this.setState({
      toShow: false,
    })
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
    this.getVideos()
  }

  searchValueChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  searchButtonClicked = () => {
    this.getVideos()
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
    const {updatedData} = this.state
    if (updatedData.length <= 0) {
      return (
        <FailureContainer>
          <HomeFailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureHeading isDarkTheme={isDarkTheme}>
            No Search Results Found
          </FailureHeading>
          <FailurePara isDarkTheme={isDarkTheme}>
            Try different key words or remove search filter
          </FailurePara>
          <FailureButton type="button" onClick={this.retryButtonClicked}>
            Retry
          </FailureButton>
        </FailureContainer>
      )
    }
    return (
      <HomeVideosUnorderedList>
        {updatedData.map(each => (
          <VideoCard key={each.id} details={each} />
        ))}
      </HomeVideosUnorderedList>
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
    const {toShow, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bannerLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <PageLayout>
              <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                {toShow ? (
                  <HomeFirstContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="banner"
                  >
                    <HomeFirstdiv>
                      <HomeBannersLogo src={bannerLogo} alt="nxt watch logo" />
                      <HomeBannerPara isDarkTheme={isDarkTheme}>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </HomeBannerPara>
                      <HomeGetButton type="button" isDarkTheme={isDarkTheme}>
                        GET IT NOW
                      </HomeGetButton>
                    </HomeFirstdiv>
                    <HomeClose
                      onClick={this.closeButtonClicked}
                      data-testid="close"
                    >
                      <HomeCloseIcon isDarkTheme={isDarkTheme} />
                    </HomeClose>
                  </HomeFirstContainer>
                ) : (
                  ''
                )}
                <HomeSecondContainer isDarkTheme={isDarkTheme}>
                  <HomeSearchContainer>
                    <HomeSearchInput
                      type="search"
                      value={searchInput}
                      placeholder="Search"
                      onChange={this.searchValueChange}
                      onKeyDown={this.onEnterSearch}
                      isDarkTheme={isDarkTheme}
                    />
                    <HomeSearchsButton
                      onClick={this.searchButtonClicked}
                      data-testid="searchButton"
                      type="button"
                      isDarkTheme={isDarkTheme}
                    >
                      <HomeSearchIcon isDarkTheme={isDarkTheme} />
                    </HomeSearchsButton>
                  </HomeSearchContainer>
                  {this.renderDetails(isDarkTheme)}
                </HomeSecondContainer>
              </HomeContainer>
            </PageLayout>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
