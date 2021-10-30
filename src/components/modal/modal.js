import { styled } from '../../lib/stitches'
import * as Dialog from '@radix-ui/react-dialog'
import { BsX as CloseIcon } from 'react-icons/bs'
import { useSpring, animated, config } from 'react-spring'

const StyledOverlay = styled(animated.div, {
  background: 'rgba(0, 0, 0, 0.62)',
  position: 'fixed',
  inset: 0,
})

const StyledContent = styled(animated.div, {
  background: '#FFF',
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '90vw',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  padding: '1em',
})

const DialogTitle = styled(Dialog.Title, {
  fontSize: '1.1rem',
  margin: '0.3em 0',
})

const DialogDescription = styled(Dialog.Description, {
  margin: '0',
  fontSize: '0.9rem',
  color: '$gray6',
})

const StyledCloseButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: 15,
  right: 15,
})

const Modal = ({ trigger, title, description, content, ...props }) => {
  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.stiff,
  })

  const { verticalScale } = useSpring({
    from: { verticalScale: [-49, 0.98] },
    verticalScale: [-50, 1],
    config: config.stiff,
  })

  const enlargeProps = {
    transform: verticalScale.to(
      (y, scale) => `translate(-50%, ${y}%) scale(${scale})`
    ),
  }

  return (
    <Dialog.Root {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Overlay asChild>
        <StyledOverlay style={fadeProps} />
      </Dialog.Overlay>
      <Dialog.Content asChild>
        <StyledContent style={enlargeProps}>
          <DialogTitle asChild>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {content}
          <Dialog.Close asChild>
            <StyledCloseButton>
              <CloseIcon />
            </StyledCloseButton>
          </Dialog.Close>
        </StyledContent>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default Modal
