import ThemeContext from '../../context/ThemeContext'
import {
  GamingVideoList,
  GamingVideoImg,
  GamingVideoP,
  GamingViewPara,
  GamingVideosLink,
} from '../../styledComponents'

const GamingVideoCard = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingVideoList isDarkTheme={isDarkTheme}>
            <GamingVideosLink to={`/videos/${id}`}>
              <GamingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoP isDarkTheme={isDarkTheme}>{title}</GamingVideoP>
              <GamingViewPara isDarkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </GamingViewPara>
            </GamingVideosLink>
          </GamingVideoList>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
