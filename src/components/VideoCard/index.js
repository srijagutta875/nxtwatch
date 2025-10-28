import {Component} from 'react'

class VideoCard extends Component {
  render() {
    const {details} = this.props
    console.log(details)
    return (
      <li>
        <h1>{details.title}</h1>
        <img src={details.thumbnailUrl} alt={details.title} />
      </li>
    )
  }
}

export default VideoCard
