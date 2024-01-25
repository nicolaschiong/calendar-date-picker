import React from 'react'
import PropTypes from 'prop-types'

const FancyID = ({ id, size = 6 }) => (
  <span>{(id && id.slice(-1 * size)) || ''}</span>
)

FancyID.propTypes = {
  id: PropTypes.string,
}

export default FancyID
