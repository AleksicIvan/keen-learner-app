import React from 'react'
// import Modal from 'react-modal'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { Modal } from 'semantic-ui-react'

import Checkbox from '../checkbox'
import Video from '../video'


class VideoModal extends React.Component {
  state: {
    watched: null
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.videoModal.watched !== nextProps.videoModal.watched) {
      this.setState({
        watched: nextProps.videoModal.watched
      })
    }
  }
  render () {
    const videoModal = this.props.videoModal
    const isWatchedHandler = this.props.isWatchedHandler
    const closeModal = this.props.closeModal


    return <div>
      <Modal open={ videoModal.isOpen } size="large" onClose={ () => closeModal() } closeIcon closeOnDimmerClick>
        <Modal.Content>
          <Video videoModal={ videoModal } isWatchedHandler={ isWatchedHandler } />
          <br />

          <Checkbox label='Watched'
            isWatched={ get(this.state, 'watched', false) }
            isWatchedHandler={ isWatchedHandler }
            id={ get(videoModal, 'videoId') } />
        </Modal.Content>
      </Modal>

    </div>

  }
}


VideoModal.propTypes = {
  videoModal: PropTypes.object,
  closeModal: PropTypes.func,
  isWatchedHandler: PropTypes.func,
  isWatched: PropTypes.bool,
}

export default VideoModal
