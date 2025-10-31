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
    <GamingVideoList>
      <GamingVideosLink to={`/videos/${id}`}>
        <GamingVideoImg src={thumbnailUrl} alt="video thumbnail" />
        <GamingVideoP>{title}</GamingVideoP>
        <GamingViewPara>{viewCount} Watching Worldwide</GamingViewPara>
      </GamingVideosLink>
    </GamingVideoList>
  )
}
export default GamingVideoCard
