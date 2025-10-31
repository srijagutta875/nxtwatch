import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

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
    allVideos: [],
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
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        allVideos: updatedData,
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

  renderLoader = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
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
      this.searchButtonClicked()
    }
  }

  searchButtonClicked = () => {
    const {allVideos, searchInput} = this.state
    if (searchInput === '') {
      this.setState({
        updatedData: allVideos,
      })
      return
    }
    const filteredData = allVideos.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({
      updatedData: filteredData,
    })
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
    const {updatedData} = this.state
    console.log(updatedData)
    if (updatedData.length <= 0) {
      return (
        <FailureContainer>
          <HomeFailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureHeading>No Search Results Found</FailureHeading>
          <FailurePara>
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
    const {toShow, searchInput} = this.state
    return (
      <PageLayout>
        <HomeContainer>
          {toShow ? (
            <HomeFirstContainer data-testid="banner">
              <HomeFirstdiv>
                <HomeBannersLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="next watch logo"
                />
                <HomeBannerPara>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </HomeBannerPara>
                <HomeGetButton type="button">GET IT NOW</HomeGetButton>
              </HomeFirstdiv>
              <HomeClose onClick={this.closeButtonClicked} data-testid="close">
                <HomeCloseIcon />
              </HomeClose>
            </HomeFirstContainer>
          ) : (
            ''
          )}
          <HomeSecondContainer>
            <HomeSearchContainer>
              <HomeSearchInput
                type="search"
                value={searchInput}
                placeholder="Search"
                onChange={this.searchValueChange}
                onKeyDown={this.onEnterSearch}
              />
              <HomeSearchsButton
                onClick={this.searchButtonClicked}
                data-testid="searchButton"
              >
                <HomeSearchIcon />
              </HomeSearchsButton>
            </HomeSearchContainer>
            {this.renderDetails()}
          </HomeSecondContainer>
        </HomeContainer>
      </PageLayout>
    )
  }
}
export default Home
