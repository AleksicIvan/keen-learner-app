import React from 'react'
import PropTypes from 'prop-types'
import { Table, Icon } from 'semantic-ui-react'


const VideoLink = ({ video, openModal }) => <Table.Row
  key={ video.id }
  positive={ video.watched }>
  <Table.Cell onClick={ () => openModal(video) }>{video.name}</Table.Cell>
  <Table.Cell>
    <Icon name={ video.watched ? 'checkmark' : 'close' } />Watched &nbsp;
  </Table.Cell>
</Table.Row>

VideoLink.propTypes = {
  video: PropTypes.object,
  openModal: PropTypes.func,
}

export default VideoLink
