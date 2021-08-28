import React from 'react'
import ContentLoader from 'react-content-loader'

const Placeholder = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={400}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
    {...props}
  >
    <rect x="0" y="8" rx="8" ry="8" width="50" height="20" />
    <rect x="0" y="40" rx="8" ry="8" width="150" height="42" />
    <rect x="0" y="108" rx="0" ry="0" width="218" height="192" />
    <rect x="224" y="108" rx="0" ry="0" width="100%" height="96" />
    <rect x="224" y="108" rx="0" ry="0" width="100%" height="92" />
    <rect x="224" y="210" rx="0" ry="0" width="100%" height="90" />
    <rect x="0" y="334" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="350" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="366" rx="3" ry="3" width="178" height="6" />
  </ContentLoader>
)

export default Placeholder
