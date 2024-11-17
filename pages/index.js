import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import { GithubBlog } from '@rena.to/github-blog'

export default function Index({ articles }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Robiul Hassan - Sr.Software Engineer</title>
          <meta content="Robiul Hassan - Sr. Software Engineer" name="title" />
          <meta content="abdulrcs, abdulrcs website" name="keywords" />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://abdulrahman.id" property="og:url" />
          <meta
            content="Robiul Hassan - Sr. Software Engineer"
            property="og:title"
          />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta content="https://abdulrahman.id/" property="twitter:url" />
          <meta
            content="Robiul Hassan - Sr. Software Engineer"
            property="twitter:title"
          />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="twitter:image"
          />
        </Head>

        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
        >
          <Introduction />
          <AboutMe />
          <FeaturedProjects />
          <LatestArticle articles={articles} />
          <ContactMe />
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {

  const blog = new GithubBlog({
    repo: 'mrh-jishan/mrh-jishan',
    token: process.env.GITHUB_TOKEN,
  })

  let blogPosts = await blog.getPosts({
    query: {
      author: 'mrh-jishan',
      type: 'post',
      state: 'published',
    },
    pager: { limit: 10, offset: 0 },
  })

  return {
    props: {
      articles: blogPosts.edges
        .sort(
          (a, b) =>
            Date.parse(b.post.frontmatter.date) -
            Date.parse(a.post.frontmatter.date),
        )
        .map((edge) => edge.post)
        .slice(0, 4),
    },
  }
}
