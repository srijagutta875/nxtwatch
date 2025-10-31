import {Component} from 'react'

import PageLayout from '../PageLayout'
import ThemeContext from '../../context/ThemeContext'
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
      <ThemeContext.Consumer>
        {themeValue => {
          const {isDarkTheme} = themeValue

          return (
            <LanguageContext.Consumer>
              {value => {
                const {savedVideos} = value
                console.log(savedVideos)

                if (savedVideos.length === 0) {
                  return (
                    <PageLayout>
                      <NoSavingContainer isDarkTheme={isDarkTheme}>
                        <HomeFailureImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                          alt="no saved videos"
                        />
                        <FailureHeading isDarkTheme={isDarkTheme}>
                          No Saved Videos Found
                        </FailureHeading>
                        <FailurePara isDarkTheme={isDarkTheme}>
                          You can save your videos while watching them.
                        </FailurePara>
                      </NoSavingContainer>
                    </PageLayout>
                  )
                }

                return (
                  <PageLayout>
                    <TrendingContainer isDarkTheme={isDarkTheme}>
                      <TrendingFirstContainer isDarkTheme={isDarkTheme}>
                        <MainTrendingCont isDarkTheme={isDarkTheme}>
                          <MainSavingIcon />
                        </MainTrendingCont>
                        <h1
                          style={{color: isDarkTheme ? '#f9f9f9' : '#1e293b'}}
                        >
                          Saved Videos
                        </h1>
                      </TrendingFirstContainer>
                      <TrendingVideoUnorderedList>
                        {savedVideos.map(each => (
                          <TrendingVideoCard
                            key={each.id}
                            details={each}
                            isDarkTheme={isDarkTheme}
                          />
                        ))}
                      </TrendingVideoUnorderedList>
                    </TrendingContainer>
                  </PageLayout>
                )
              }}
            </LanguageContext.Consumer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
