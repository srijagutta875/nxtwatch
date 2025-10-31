import {Component} from 'react'
import {formatDistanceToNow, parse} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

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
    const date = parse(publishedAt, 'MMM dd, yyyy', new Date())

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <TrendingVideoListItem isDarkTheme={isDarkTheme}>
              <TrendingVideosLink to={`/videos/${id}`}>
                <TrendingVideosThumb src={thumbnailUrl} alt="video thumbnail" />
                <TrendingLogsInsideDiv>
                  <TrendingVideoTitlePara isDarkTheme={isDarkTheme}>
                    {title}
                  </TrendingVideoTitlePara>
                  <TrendVideoName isDarkTheme={isDarkTheme}>
                    {channel.name}
                  </TrendVideoName>
                  <TrendingVideoSmall isDarkTheme={isDarkTheme}>
                    <TrendingVideoSmallP isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </TrendingVideoSmallP>
                    <TrendingVideoSmallP isDarkTheme={isDarkTheme}>
                      {formatDistanceToNow(date)} ago
                    </TrendingVideoSmallP>
                  </TrendingVideoSmall>
                </TrendingLogsInsideDiv>
              </TrendingVideosLink>
            </TrendingVideoListItem>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideoCard
