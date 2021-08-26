import { useEffect } from 'react'

const Container = ({ map, id, position, onClick }) => {
  useEffect(() => {
    const marker = new window.kakao.maps.Marker({
      map,
      position,
      clickable: true,
    })

    if (onClick) {
      kakao.maps.event.addListener(marker, 'click', () => onClick(id))
    }
  }, [])

  return null
}

export default Container
