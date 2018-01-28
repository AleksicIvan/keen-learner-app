import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { Modal } from 'semantic-ui-react'

import Checkbox from '../checkbox'
import Video from '../video'


const VideoModal = ({
  videoModal,
  isWatchedHandler,
  closeModal
}) => {
  return <div>
    <Modal open={ videoModal.isOpen } size="large" onClose={ () => closeModal() } closeIcon closeOnDimmerClick>
      <Modal.Content>
        <Video videoModal={ videoModal } isWatchedHandler={ isWatchedHandler } />
        <br />

        <Checkbox label='Watched'
          isWatched={ videoModal.watched || false }
          isWatchedHandler={ isWatchedHandler }
          id={ get(videoModal, 'videoId') } />
      </Modal.Content>
    </Modal>

  </div>
}


VideoModal.propTypes = {
  videoModal: PropTypes.object,
  closeModal: PropTypes.func,
  isWatchedHandler: PropTypes.func,
}

export default VideoModal
