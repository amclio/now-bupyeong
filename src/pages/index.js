import { useState } from 'react'
import KakaoMap from '../components/kakaomap/map'
import Marker from '../components/kakaomap/marker'
import { BottomSection } from '../components/section'
import { useSetSectionOpenState } from '../states/uiSectionState'

const Main = () => {
  const [mapState, setMapState] = useState()
  const setSectionOpen = useSetSectionOpenState()

  const handleMarkerClick = () => {
    setSectionOpen((isOpen) => !isOpen)
  }

  if (typeof window === 'undefined') {
    return null
  }

  return (
    <>
      <KakaoMap
        setMapState={setMapState}
        options={{
          center: new window.kakao.maps.LatLng(37.4913, 126.72324),
          level: 2,
        }}
      />
      {mapState && (
        <Marker
          onClick={handleMarkerClick}
          map={mapState}
          position={new window.kakao.maps.LatLng(37.4913, 126.72324)}
        />
      )}
      <BottomSection />
    </>
  )
}

export default Main
