import { useState } from 'react'
import { Stack, Heading, Text, Divider, Flex, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'
import { FaSearch } from 'react-icons/fa'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import dateFormat from 'dateformat'

import { GithubBlog } from '@rena.to/github-blog'

export default function Index({ posts }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => setQuery(e.target.value)

  return (
    <Container>
      <Head>
        <title>Blog - Robiul Hassan</title>
        <meta content="Blog - Robiul Hassan" name="title" />
        <meta
          content="Writings on programming, tutorials, and my experiences."
          name="description"
        />

        <meta content="website" property="og:type" />
        <meta content="https://abdulrahman.id/blog" property="og:url" />
        <meta content="Blog - Robiul Hassan" property="og:title" />
        <meta
          content="Writings on programming, tutorials, and my experiences."
          property="og:description"
        />
        <meta
          content="https://imagizer.imageshack.com/a/img924/6408/mSltwm.png"
          property="og:image"
        />

        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://abdulrahman.id/" property="twitter:url" />
        <meta content="Blog - Robiul Hassan" property="twitter:title" />
        <meta
          content="Writings on programming, tutorials, and my experiences."
          property="twitter:description"
        />
        <meta
          content="https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png"
          property="twitter:image"
        />
      </Head>
      <Stack
        as="main"
        alignItems="flex-start"
        justifyContent="center"
        my={{ base: '15vh', md: '16vh' }}
        spacing={5}
      >
        <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
          Blog
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }}>
          This is where I share my writings on programming, tutorials, and my
          experiences.
        </Text>
        <InputGroup maxW="400px">
          <InputRightElement pointerEvents="none">
            <FaSearch />
          </InputRightElement>
          <Input
            placeholder="Search articles"
            type="text"
            value={query}
            onChange={handleChange}
          />
        </InputGroup>
        <Divider />
        <Stack spacing={5}>
          {posts
            .filter((e) =>
              e.post.title.toLowerCase().includes(query.toLowerCase()),
            )
            .map(({ post }) => (
              <Stack
                key={post.frontmatter.slug}
                alignItems="flex-start"
                justifyContent="flex-start"
                direction="row"
              >
                <Text
                  display="block"
                  w={100}
                  color="textSecondary"
                  textAlign="right"
                >
                  {dateFormat(Date.parse(post.frontmatter.date), 'mmm d yyyy')}
                  <br />{' '}
                  <Text fontSize="sm" textAlign="right">
                    {post.frontmatter.readingTime}
                  </Text>
                </Text>
                <Text
                  display="block"
                  color="textSecondary"
                  fontSize="sm"
                >
                  {dateFormat(Date.parse(post.frontmatter.date), 'mmm d yyyy')}{' '}
                  <Box as="span" fontSize="xs">
                    &bull;
                  </Box>{' '}
                  {post.frontmatter.readingTime}
                </Text>
                <Flex direction="column" px="10">
                  <Link href={'/blog/' + post.frontmatter.slug}>
                    <Text
                      color="displayColor"
                      fontSize="xl"
                      fontWeight="bold"
                      cursor="pointer"
                    >
                      {post.title}
                    </Text>
                    <Text color="textSecondary">
                      {post.frontmatter.summary}
                    </Text>

                    <Text color="button1" cursor="pointer">
                      Learn more &rarr;
                    </Text>
                  </Link>
                </Flex>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export async function getStaticProps() {
  const blog = new GithubBlog({
    repo: 'mrh-jishan/mrh-jishan',
    token: process.env.GITHUB_TOKEN,
  })
  const posts = await blog.getPosts({
    query: {
      author: 'mrh-jishan',
      type: 'post',
      state: 'published',
    },
    pager: { limit: 10, offset: 0 },
  })

  return {
    props: {
      posts: posts.edges.sort(
        (a, b) =>
          Date.parse(b.post.frontmatter.date) -
          Date.parse(a.post.frontmatter.date),
      ),
    },
  }
}
