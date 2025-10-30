import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow, parse} from 'date-fns'
import Loader from 'react-loader-spinner'
import PageLayout from '../PageLayout'

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
} from '../../styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videoData: {}, apiStatus: apiStatusConst.initial}

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

  renderSuccesView = () => {
    const {videoData} = this.state
    const date = parse(videoData.publishedAt, 'MMM dd, yyyy', new Date())
    return (
      <div>
        {this.VideoPlayer()}
        <p>{videoData.title}</p>
        <div>
          <VideoSmall>
            <VideoSmallP>{videoData.viewCount} views</VideoSmallP>
            <VideoSmallP>, {formatDistanceToNow(date)} ago</VideoSmallP>
          </VideoSmall>
          <div>lIKe,dislike,save</div>
          <hr />
          <div>
            <img
              src={videoData.channel.profileImageUrl}
              alt={videoData.title}
            />
            <p>{videoData.channel.name}</p>
            <p>{videoData.channel.subscriberCount} subscribers</p>
            <p>{videoData.description}</p>
          </div>
        </div>
      </div>
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

  videoDetails = () => {
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
        <HomeSecondContainer>{this.videoDetails()}</HomeSecondContainer>
      </PageLayout>
    )
  }
}
export default VideoItemDetails
