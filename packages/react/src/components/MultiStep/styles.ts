import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  marginTop: '$1',
  display: 'flex',
  gap: '$2',
})

export const Step = styled('div', {
  flex: 1,
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    isActive: {
      true: {
        background: '$gray100',
      },
    },
  },
})
