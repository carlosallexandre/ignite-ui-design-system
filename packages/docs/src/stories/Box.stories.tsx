import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: null,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
