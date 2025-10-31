import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow, parse} from 'date-fns'
import Loader from 'react-loader-spinner'
import PageLayout from '../PageLayout'
import LanguageContext from '../../context/LanguageContext'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeSecondContainer,
  VideoPlayerDiv,
  LoaderContainer,
  FailureContainer,
  HomeFailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  VideoSmall,
  VideoSmallP,
  VideoItemTitle,
  VideoItemContainer,
  HorizontalLines,
  VideoActionsList,
  VideoActionItem,
  VideoLikeButton,
  LikeIcon,
  DislikeIcon,
  SavedIcon,
  VideoDescriptionCont,
  Logoimg,
  VideoChannelName,
  VideoChannelDescription,
  VideoChannelViews,
} from '../../styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

const videoActions = [
  {id: 1, label: 'Like', icon: LikeIcon},
  {id: 2, label: 'Dislike', icon: DislikeIcon},
  {id: 3, label: 'Save', icon: SavedIcon},
]

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    apiStatus: apiStatusConst.initial,
    activeAction: '',
    isSave: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({
      apiStatus: apiStatusConst.progress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const videoDetails = data.video_details
      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConst.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConst.failure,
      })
    }
  }

  VideoPlayer = () => {
    const {videoData} = this.state
    const videoURL = videoData.videoUrl
    return (
      <div className="video-container">
        <VideoPlayerDiv className="responsive-container">
          <ReactPlayer url={videoURL} width="100%" height="400px" controls />
        </VideoPlayerDiv>
      </div>
    )
  }

  renderSuccesView = isDarkTheme => {
    const {videoData, activeAction, isSave} = this.state
    const date = parse(videoData.publishedAt, 'MMM dd, yyyy', new Date())

    return (
      <LanguageContext.Consumer>
        {value => {
          const {addSavedVideos} = value
          const ButtonClicked = label => {
            if (label === 'Like' || label === 'Dislike') {
              this.setState(prevState => ({
                activeAction: prevState.activeAction === label ? '' : label,
              }))
            } else if (label === 'Save') {
              this.setState(prevState => ({isSave: !prevState.isSave}))
              addSavedVideos(videoData)
            }
          }

          return (
            <div>
              {this.VideoPlayer()}
              <VideoItemTitle isDarkTheme={isDarkTheme}>
                {videoData.title}
              </VideoItemTitle>
              <VideoItemContainer isDarkTheme={isDarkTheme}>
                <VideoSmall>
                  <VideoSmallP isDarkTheme={isDarkTheme}>
                    {videoData.viewCount} views
                  </VideoSmallP>
                  <VideoSmallP isDarkTheme={isDarkTheme}>
                    {formatDistanceToNow(date)} ago
                  </VideoSmallP>
                </VideoSmall>
                <VideoActionsList>
                  {videoActions.map(action => {
                    const Icon = action.icon
                    const isSaveAction = action.label === 'Save'
                    let labelText = action.label
                    if (isSaveAction) {
                      labelText = isSave ? 'Saved' : 'Save'
                    }
                    return (
                      <VideoActionItem
                        key={action.id}
                        active={
                          activeAction === action.label ||
                          (isSave && isSaveAction)
                        }
                        isDarkTheme={isDarkTheme}
                      >
                        <VideoLikeButton
                          onClick={() => ButtonClicked(action.label)}
                          isDarkTheme={isDarkTheme}
                          active={
                            activeAction === action.label ||
                            (isSave && isSaveAction)
                          }
                        >
                          <Icon alt={action.label} />
                          {labelText}
                        </VideoLikeButton>
                      </VideoActionItem>
                    )
                  })}
                </VideoActionsList>
              </VideoItemContainer>
              <div>
                <HorizontalLines isDarkTheme={isDarkTheme} />
                <VideoDescriptionCont isDarkTheme={isDarkTheme}>
                  <Logoimg
                    src={videoData.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <div>
                    <VideoChannelName isDarkTheme={isDarkTheme}>
                      {videoData.channel.name}
                    </VideoChannelName>
                    <VideoChannelViews isDarkTheme={isDarkTheme}>
                      {videoData.channel.subscriberCount} subscribers
                    </VideoChannelViews>
                    <VideoChannelDescription isDarkTheme={isDarkTheme}>
                      {videoData.description}
                    </VideoChannelDescription>
                  </div>
                </VideoDescriptionCont>
              </div>
            </div>
          )
        }}
      </LanguageContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  retryButtonClicked = () => {
    this.getVideoItemDetails()
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

  videoDetails = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.progress:
        return this.renderLoader()
      case apiStatusConst.failure:
        return this.renderFailure()
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
              <HomeSecondContainer isDarkTheme={isDarkTheme}>
                {this.videoDetails(isDarkTheme)}
              </HomeSecondContainer>
            </PageLayout>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
