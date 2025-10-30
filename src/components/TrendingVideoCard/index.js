import {Component} from 'react'

import {formatDistanceToNow, parse} from 'date-fns'

import {
  TrendingVideoListItem,
  TrendingVideosThumb,
  TrendingLogsInsideDiv,
  TrendingVideoTitlePara,
  TrendVideoName,
  TrendingVideoSmall,
  TrendingVideoSmallP,
  TrendingVideosLink,
} from '../../styledComponents'

class TrendingVideoCard extends Component {
  render() {
    const {details} = this.props
    const {id, thumbnailUrl, channel, title, viewCount, publishedAt} = details
    console.log(details)
    const date = parse(publishedAt, 'MMM dd, yyyy', new Date())
    return (
      <TrendingVideoListItem>
        <TrendingVideosLink to={`/videos/${id}`}>
          <TrendingVideosThumb src={thumbnailUrl} alt="video thumbnail" />
          <TrendingLogsInsideDiv>
            <TrendingVideoTitlePara>{title}</TrendingVideoTitlePara>
            <TrendVideoName>{channel.name}</TrendVideoName>
            <TrendingVideoSmall>
              <TrendingVideoSmallP>{viewCount} views</TrendingVideoSmallP>
              <TrendingVideoSmallP>
                {formatDistanceToNow(date)} ago
              </TrendingVideoSmallP>
            </TrendingVideoSmall>
          </TrendingLogsInsideDiv>
        </TrendingVideosLink>
      </TrendingVideoListItem>
    )
  }
}
export default TrendingVideoCard
