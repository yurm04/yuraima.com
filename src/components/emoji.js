import React from 'react'

export default ({ emoji, label }) => 
  <span role="img" aria-label={`${label} emoji`}>{emoji}</span>
