import {Component} from 'react'

import PageLayout from '../PageLayout'

import LanguageContext from '../../context/LanguageContext'
import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingContainer,
  TrendingFirstContainer,
  MainTrendingCont,
  MainSavingIcon,
  TrendingVideoUnorderedList,
  NoSavingContainer,
  HomeFailureImage,
  FailureHeading,
  FailurePara,
} from '../../styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {value => {
          const {savedVideos} = value
          console.log(savedVideos)
          if (savedVideos.length === 0) {
            return (
              <PageLayout>
                <NoSavingContainer>
                  <HomeFailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <FailureHeading>No Saved Videos Found</FailureHeading>
                  <FailurePara>
                    You can save your videos while watching them.
                  </FailurePara>
                </NoSavingContainer>
              </PageLayout>
            )
          }
          return (
            <PageLayout>
              <TrendingContainer>
                <TrendingFirstContainer>
                  <MainTrendingCont>
                    <MainSavingIcon />
                  </MainTrendingCont>
                  <h1>Saved Videos</h1>
                </TrendingFirstContainer>
                <TrendingVideoUnorderedList>
                  {savedVideos.map(each => (
                    <TrendingVideoCard key={each.id} details={each} />
                  ))}
                </TrendingVideoUnorderedList>
              </TrendingContainer>
            </PageLayout>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}
export default SavedVideos
