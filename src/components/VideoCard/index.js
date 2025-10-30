import {Component} from 'react'

import {formatDistanceToNow, parse} from 'date-fns'

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
    console.log(details)
    const date = parse(publishedAt, 'MMM dd, yyyy', new Date())
    return (
      <VideoListsItem>
        <VideoLink to={`/videos/${id}`}>
          <VideoThumb src={thumbnailUrl} alt="video thumbnail" />
          <VideoLogosDiv>
            <VideoChannelLogo src={profileImageUrl} alt="channel logo" />
            <VideoLogInsideDiv>
              <VideoTitlePara>{title}</VideoTitlePara>
              <VideoName>{name}</VideoName>
              <VideoSmall>
                <VideoSmallP>{viewCount} views</VideoSmallP>
                <VideoSmallP>, {formatDistanceToNow(date)} ago</VideoSmallP>
              </VideoSmall>
            </VideoLogInsideDiv>
          </VideoLogosDiv>
        </VideoLink>
      </VideoListsItem>
    )
  }
}

export default VideoCard
