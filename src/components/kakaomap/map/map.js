import { useEffect, useRef } from 'react'
import { styled } from '../../../lib/stitches'

const MapContainer = styled('div', {
  width: '100%',
  height: '100vh',
})

const KakaoMap = ({ options, setMapState, ...props }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    const map = new window.kakao.maps.Map(mapRef.current, options)

    setMapState(map)
  }, [])

  return <MapContainer {...props} ref={mapRef} />
}

export default KakaoMap
