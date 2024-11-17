import { chakra } from '@chakra-ui/react'
import NextImage from 'next/legacy/image'

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'layout', 'priority'].includes(prop),
})

export default Image
