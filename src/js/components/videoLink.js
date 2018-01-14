import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from './checkbox'


const VideoLink = ({ video, modalHandler, isWatchedHandler }) => <tr>
  <td>
    <button onClick={ () => modalHandler(video.name) }>{video.name}</button>
  </td>
  <td>
    <Checkbox isWatched={ video.watched } isWatchedHandler={ isWatchedHandler } id={ video.id } />
  </td>
</tr>

VideoLink.propTypes = {
  video: PropTypes.object,
  modalHandler: PropTypes.func,
  isWatchedHandler: PropTypes.func
}

export default VideoLink
