import { useState } from 'react'
import { useQuery } from 'react-query'
import KakaoMap from '../components/kakaomap/map'
import Marker from '../components/kakaomap/marker'
import { BottomSection } from '../components/section'
import { getPlace } from '../lib/api'
import { styled } from '../lib/stitches'
import { useLocale } from '../lib/locale'
import Post from '../components/post'
import { useSetSectionOpenState } from '../states/uiSectionState'

const localeSet = {
  exit: {
    english: 'Exit',
    korean: '출구',
  },
}

const Container = styled('div', {
  overflow: 'hidden',
})

const Main = () => {
  const [mapState, setMapState] = useState()
  const [currentPlaceId, setCurrentPlaceId] = useState()
  const setSectionOpen = useSetSectionOpenState()

  const locale = useLocale()

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
    setSectionOpen((isOpen) => !isOpen)
  }

  const { data, isLoading } = useQuery('places', getPlace)

  if (typeof window === 'undefined') {
    return null
  }

  const place = data?.find((element) => element.id === currentPlaceId)

  return (
    <Container>
      <KakaoMap
        setMapState={setMapState}
        options={{
          center: new window.kakao.maps.LatLng(37.4913, 126.72324),
          level: 2,
        }}
      />
      {mapState &&
        !isLoading &&
        data.map(({ id, lat, lon }) => (
          <Marker
            key={id}
            id={id}
            onClick={handleMarkerClick}
            map={mapState}
            position={new window.kakao.maps.LatLng(lat, lon)}
          />
        ))}
      <BottomSection css={{ padding: '1.5em', overflow: 'scroll' }}>
        {place && (
          <Post
            title={place.name[locale]}
            subTitle={localeSet[place.type][locale]}
            image={place.photo}
            contents={place.description[locale]}
          />
        )}
      </BottomSection>
    </Container>
  )
}

export default Main
