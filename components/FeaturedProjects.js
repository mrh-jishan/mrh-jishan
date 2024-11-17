import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import Cards from './Card'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function FeaturedProjects() {

  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <SlideUpWhenVisible threshold={0.1}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  color="displayColor"
                  fontFamily="Ubuntu"
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  All Creative Works.
                </Heading>
                <NextLink passHref href="/projects">
                  {/* <Link                  >
                    
                  </Link> */}
                  <Text
                      _hover={{ color: 'button2' }}
                      color="button1"
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text>
                </NextLink>
              </Stack>
              <Text color="textSecondary" fontSize={{ base: 'md', md: 'xl' }}>
                Here's some of my projects that I have worked on.
              </Text>
              <NextLink href="/projects">
                {/* <Link
                  onClick={() => handleClick('featuredprojects_explore more')}
                > */}
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                {/* </Link> */}
              </NextLink>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Cards
              slug="opiniometer"
              desc="A web app to analyze whether an opinion on specific topic is positive or negative based on recent tweets using Natural Language Processing concept called Sentiment Analysis."
              imageURL="https://github.com/abdulrcs/abdulrahman.id/assets/54136956/bbe7f444-095a-4683-b609-93684e119f99&w=1920&q=75"
              tag={[]}
              title="Opiniometer"
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Box mt={{ md: '-50%' }}>
              <Cards
                slug="opiniometer"
                desc="A web app to analyze whether an opinion on specific topic is positive or negative based on recent tweets using Natural Language Processing concept called Sentiment Analysis."
                imageURL="https://github.com/abdulrcs/abdulrahman.id/assets/54136956/bbe7f444-095a-4683-b609-93684e119f99&w=1920&q=75"
                tag={[]}
                title="Opiniometer"
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={0.8}>
            <Cards
              slug="opiniometer"
              desc="A web app to analyze whether an opinion on specific topic is positive or negative based on recent tweets using Natural Language Processing concept called Sentiment Analysis."
              imageURL="https://github.com/abdulrcs/abdulrahman.id/assets/54136956/bbe7f444-095a-4683-b609-93684e119f99&w=1920&q=75"
              tag={[]}
              title="Opiniometer"
            />
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
