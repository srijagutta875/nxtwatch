import {Component} from 'react'
import {formatDistanceToNow, parse} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoListsItem,
  VideoThumb,
  VideoChannelLogo,
  VideoLogosDiv,
  VideoLogInsideDiv,
  VideoTitlePara,
  VideoName,
  VideoSmall,
  VideoSmallP,
  VideoLink,
} from '../../styledComponents'

class VideoCard extends Component {
  render() {
    const {details} = this.props
    const {id, thumbnailUrl, channel, title, viewCount, publishedAt} = details
    const {name, profile_image_url: profileImageUrl} = channel

    const date = parse(publishedAt, 'MMM dd, yyyy', new Date())

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoListsItem isDarkTheme={isDarkTheme}>
              <VideoLink to={`/videos/${id}`}>
                <VideoThumb src={thumbnailUrl} alt="video thumbnail" />
                <VideoLogosDiv>
                  <VideoChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoLogInsideDiv>
                    <VideoTitlePara isDarkTheme={isDarkTheme}>
                      {title}
                    </VideoTitlePara>
                    <VideoName isDarkTheme={isDarkTheme}>{name}</VideoName>
                    <VideoSmall>
                      <VideoSmallP isDarkTheme={isDarkTheme}>
                        {viewCount} views
                      </VideoSmallP>
                      <VideoSmallP isDarkTheme={isDarkTheme}>
                        , {formatDistanceToNow(date)} ago
                      </VideoSmallP>
                    </VideoSmall>
                  </VideoLogInsideDiv>
                </VideoLogosDiv>
              </VideoLink>
            </VideoListsItem>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoCard
