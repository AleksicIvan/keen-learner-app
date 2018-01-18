import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ isWatched, isWatchedHandler, id }) => {
  return <input type="checkbox"
    checked={ isWatched }
    onChange={ v => isWatchedHandler(v, id) }
  />
}

Checkbox.propTypes = {
  isWatched: PropTypes.bool,
  isWatchedHandler: PropTypes.func,
  id: PropTypes.string
}

export default Checkbox
