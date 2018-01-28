import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

export default class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false
    }
  }

  handleOnLoad () {
    this.setState({
      ready: true
    })
  }

  render () {
    return <div className='player-wrapper'>
      <ReactPlayer className='react-player'
        width='100%'
        height='100%'
        url={ this.props.videoModal.src }
        controls
        onReady={ () => this.handleOnLoad() }
        onEnded={ () => this.props.isWatchedHandler(true, this.props.videoModal.videoId) }>
      </ReactPlayer>
    </div>
  }
}

Video.propTypes = {
  videoModal: PropTypes.object,
  isWatchedHandler: PropTypes.func,
}
