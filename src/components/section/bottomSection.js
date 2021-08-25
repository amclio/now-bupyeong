import { animated, useSpring } from 'react-spring'
import { styled } from '../../lib/stitches'
import {
  useSectionOpenValue,
  useSetSectionOpenState,
} from '../../states/uiSectionState'
import { useWindowSizePercent } from '../../states/windowSizeState'
import { IconContext } from 'react-icons'
import { BsX } from 'react-icons/bs'

const CloseIcon = ({ className, ...props }) => {
  const setSectionOpen = useSetSectionOpenState()

  const handleClick = () => setSectionOpen(false)

  return (
    <CloseButtonContainer
      onClick={handleClick}
      className={`close-icon ${className}`}
      {...props}
    >
      <IconContext.Provider
        value={{ size: '2em', color: 'var(--colors-gray6)' }}
      >
        <BsX />
      </IconContext.Provider>
    </CloseButtonContainer>
  )
}

CloseIcon.toString = () => `.close-icon`

const Box = styled(animated.div, {
  background: '#FFF',
  width: '100%',
  position: 'fixed',
  zIndex: 3,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  variants: {
    shadow: {
      true: {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
    },
  },
  [`& ${CloseIcon}`]: {
    position: 'absolute',
    top: '4%',
    right: '4%',
  },
})

const CloseButtonContainer = styled('button', {
  background: 'none',
  border: 'none',
  padding: '8px',
})

const BottomSection = () => {
  const isOpen = useSectionOpenValue()
  const { height } = useWindowSizePercent(100, 80)

  const styles = useSpring({
    from: { y: 0 },
    y: isOpen ? -height : 0,
  })

  return (
    <Box shadow={isOpen} style={{ ...styles, height, bottom: -height }}>
      <CloseIcon />
    </Box>
  )
}

export default BottomSection
