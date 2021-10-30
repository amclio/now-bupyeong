import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import KakaoMap from '../components/kakaomap/map'
import Marker from '../components/kakaomap/marker'
import { BottomSection } from '../components/section'
import Modal from '../components/modal'
import { getPlace } from '../lib/api'
import { styled } from '../lib/stitches'
import { useLocale } from '../lib/locale'
import Post from '../components/post'
import { useSetSectionOpenState } from '../states/uiSectionState'
import { useIntroductionState } from '../states/introductionState'

const localeSet = {
  exit: {
    english: 'Exit',
    korean: '출구',
  },
}

const Container = styled('div', {
  overflow: 'hidden',
})

const IntroContent = () => {
  return (
    <ContentContainer>
      <ContentImage src="/intro-images/1-marker.jpg" alt="Maps Marker" />
    </ContentContainer>
  )
}

const ContentContainer = styled('div', {
  margin: '1.2em 0',
})

const ContentTitle = styled('div', {
  fontWeight: 'bold',
  fontSize: '1.1rem',
})

const ContentImage = styled('img', {
  width: '100%',
  borderRadius: 3,
})

const Main = () => {
  const [mapState, setMapState] = useState()
  const [currentPlaceId, setCurrentPlaceId] = useState()
  const setSectionOpen = useSetSectionOpenState()
  const [isIntroExcuted, setIntro] = useIntroductionState()
  const [isIntroModalOpen, setIntroModalOpen] = useState(false)

  const locale = useLocale()

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
    setSectionOpen((isOpen) => !isOpen)
  }

  const { data, isLoading } = useQuery('places', getPlace)

  useEffect(() => {
    if (!isIntroExcuted) {
      const timer = setTimeout(() => {
        setIntro(true)
        setIntroModalOpen(true)
      }, 400)

      return () => clearTimeout(timer)
    }
  }, [])

  if (typeof window === 'undefined') {
    return null
  }

  const place = data?.find((element) => element.id === currentPlaceId)

  return (
    <>
      {isIntroModalOpen && (
        <Modal
          defaultOpen={true}
          title={
            <ContentTitle>
              지도 위에 있는
              <br />
              마커를 클릭해보세요!
            </ContentTitle>
          }
          description="해당 출구의 사진과 정보를 볼 수 있어요."
          content={<IntroContent />}
        />
      )}
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
    </>
  )
}

export default Main
