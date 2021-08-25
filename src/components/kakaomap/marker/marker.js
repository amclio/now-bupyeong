import { useEffect } from 'react'

const Container = ({ map, position, onClick }) => {
  useEffect(() => {
    const marker = new window.kakao.maps.Marker({
      map,
      position,
      clickable: true,
    })

    if (onClick) {
      kakao.maps.event.addListener(marker, 'click', onClick)
    }
  }, [])

  return null
}

export default Container
