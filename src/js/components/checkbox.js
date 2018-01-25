import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'


const Main = ({ isWatched, isWatchedHandler, id, label }) => {
  return <Checkbox defaultChecked={ isWatched } label={ label } type="checkbox" onChange={ v => isWatchedHandler(v, id) } />
}

Checkbox.propTypes = {
  isWatched: PropTypes.bool,
  isWatchedHandler: PropTypes.func,
  id: PropTypes.string,
  defaultChecked: PropTypes.bool,
  defaultIndeterminate: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  label: PropTypes.string,
}

export default Main
