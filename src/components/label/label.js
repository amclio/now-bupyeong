import { styled } from '../../lib/stitches'
import * as LabelPrimitive from '@radix-ui/react-label'

const Label = styled(LabelPrimitive.Root, {
  fontSize: '0.85rem',
  display: 'block',
  userSelect: 'none',
  color: '$gray6',
})

export default Label
