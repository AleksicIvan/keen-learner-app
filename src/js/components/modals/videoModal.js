import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import Video from '../video'


const VideoModal = ({ videoModal, modalHandler }) => {
  return <Modal isOpen={ videoModal.isOpen }>
    <Video videoModal={ videoModal }/>
    <div>
      <button onClick={ () => modalHandler() }>CLOSE</button>
    </div>
  </Modal>
}

VideoModal.propTypes = {
  videoModal: PropTypes.object,
  modalHandler: PropTypes.func
}

export default VideoModal
