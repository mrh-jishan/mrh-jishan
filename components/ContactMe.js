import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function ContactMe() {

  return (
    <Stack alignItems="center" justifyContent="center" w="100%" spacing={10}>
      <SlideUpWhenVisible>
        <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
          Keep In Touch.
        </Heading>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Text color="textSecondary" fontSize="md" textAlign="center">
          I'm currently specializing in{' '}
          <chakra.span
            color="button1"
            display={{ base: 'block', md: 'inline' }}
          >
            {' '}
            Front-end Development.
          </chakra.span>
          .
          <br />
          Feel free to get in touch and talk more about your projects.
        </Text>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Stack isInline spacing={4}>
          <Link
            href="https://www.linkedin.com/in/rhsn1/"
            isExternal
            title='Robiul Hassan'
          >
            <Button
              pos="static"
              color="white"
              leftIcon={<FaLinkedin fill="#3CCF91" />}
              size="md"
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            href="mailto:robiul.hassan12102@gmail.com"
            isExternal
            title='robiul.hassan12102@gmail.com'
          >
            <Button
              pos="static"
              color="white"
              transition="0.3s"
              leftIcon={<FaEnvelope fill="#3CCF91" />}
              size="md"
            >
              Email
            </Button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1IvhcdThnfMAcPEHy6Yvq4o8vSaIi_ArV/view?usp=sharing"
            isExternal
          >
            <Button
              pos="static"
              color="white"
              leftIcon={<FaFileAlt fill="#3CCF91" />}
              size="md"
            >
              Resume
            </Button>
          </Link>
        </Stack>
      </SlideUpWhenVisible>
    </Stack>
  )
}
