import React, { Component } from 'react'
import PropTypes from 'prop-types'

import loader from '../../assets/Loading_icon.gif'

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
    return <video poster={ this.state.ready ? null : loader }
      width="640"
      height="480" controls
      onLoadedData={ () => this.handleOnLoad() } >
      <source src={ this.props.videoModal.src } type="video/mp4" />
    </video>
  }
}

Video.propTypes = {
  videoModal: PropTypes.object
}
