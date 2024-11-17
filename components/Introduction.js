import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Introduction() {

  return (
    <Stack
      alignItems="flex-start"
      justifyContent="flex-start"
      w="100%"
      spacing={{ base: 8, md: 10 }}
    >
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        in={true}
      >
        <Box pos="relative">
          <Image
            pos="absolute"
            zIndex={0}
            top={{ base: '0', md: '-15' }}
            left={{ base: '-4', md: '-10' }}
            w={{ base: '70px', md: '150px' }}
            alt=""
            filter="invert(0.1)"
            src="https://svgsilh.com/svg/26432.svg"
          ></Image>
          <Text
            pos="relative"
            zIndex={1}
            color="button1"
            fontSize="display2"
            fontWeight="medium"
          >
            Hey there!, I'm-
          </Text>
        </Box>
        <Heading
          pos="relative"
          zIndex={1}
          color="displayColor"
          fontSize="display"
          lineHeight={'95%'}
          letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
        >
          Robiul Hassan
        </Heading>
      </SlideFade>

      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        in={true}
      >
        <Heading
          color="textSecondary"
          fontSize="display2"
          fontWeight="medium"
          letterSpacing="-1.6px"
          whiteSpace="pre-wrap"
        >
          <Box as="span" color="displayColor">
            Sr. Software Engineer. {' '}
          </Box>
          A self-taught developer with an interest in Computer Science.
        </Heading>
      </SlideFade>

      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        in={true}
      >
        <Text color="textSecondary" fontSize="display3">
          🚀  Currently specializing in Frontend (React / Next.js)
          <br />
          <Stack isInline spacing={1}>
            <Box>
              ⚡
            </Box>
            <Box>
              Frontend Engineer at {' '}
              <Link
                href="https://ggl.life/pages/app"
                isExternal
                rel="noreferrer"
              >
                FFL
              </Link>
            </Box>
          </Stack>
        </Text>
      </SlideFade>
      <SlideFade
        direction="top"
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        in={true}
      >
        <Stack isInline spacing={4}>
          <Link href="https://github.com/mrh-jishan" isExternal>
            <Button
              pos="static"
              color="white"
              leftIcon={<FaGithub color="#3CCF91" />}
              size="md"
            >
              Github
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/rhsn1/" isExternal title='Robiul Hassan'>
            <Button
              pos="static"
              color="white"
              leftIcon={<FaLinkedin color="#3CCF91" />}
              size="md"
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:robiul.hassan12102@gmail.com" isExternal title='robiul.hassan12102@gmail.com'>
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
        </Stack>
      </SlideFade>
    </Stack>
  )
}
