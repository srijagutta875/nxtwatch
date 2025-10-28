import {Component} from 'react'

import Loader from 'react-loader-spinner'

import PageLayout from '../PageLayout'

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
    const apiUrl =
      searchInput === ''
        ? 'https://apis.ccbp.in/videos/all'
        : `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        punlishedAt: each.published_at,
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

  renderLoader = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  retryButtonClicked = () => {
    this.getVideos()
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
    return (
      <HomeVideosUnorderedList>
        {updatedData.map(each => (
          <li>
            <h1>{each.title}</h1>
            <img src={each.thumbnailUrl} alt={each.title} />
          </li>
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
    const {toShow} = this.state
    return (
      <PageLayout>
        <HomeContainer>
          {toShow ? (
            <HomeFirstContainer>
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
              <HomeClose onClick={this.closeButtonClicked}>
                <HomeCloseIcon />
              </HomeClose>
            </HomeFirstContainer>
          ) : (
            ''
          )}
          <HomeSecondContainer>{this.renderDetails()}</HomeSecondContainer>
        </HomeContainer>
      </PageLayout>
    )
  }
}
export default Home
