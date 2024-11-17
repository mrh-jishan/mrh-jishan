import { ArticleJsonLd, NextSeo } from 'next-seo'

import React from 'react'

const NextSeoData = ({ slug, metadata, publishedDate }) => {
  return (
    <>
      <NextSeo
        additionalMetaTags={[
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'twitter:url',
            content: `https://abdulrahman.id/blog/${slug}`,
          },
          { property: 'twitter:title', content: metadata.title },
          {
            property: 'twitter:description',
            content: metadata.frontmatter.summary,
          },
          { property: 'twitter:image', content: metadata.frontmatter.image },
        ]}
        canonical={`https://abdulrahman.id/blog/${slug}`}
        description={metadata.frontmatter.summary}
        openGraph={{
          url: `https://abdulrahman.id/blog/${slug}`,
          site_name: 'Robiul Hassan',
          title: metadata.title,
          description: metadata.frontmatter.summary,
          type: 'article',
          article: {
            authors: ['Robiul Hassan'],
            publishedTime: publishedDate,
            modifiedTime: publishedDate,
            tags: ['Programming', 'Web Development', 'Software Engineering'],
          },
          images: [
            {
              url: metadata.frontmatter.image,
              alt: metadata.title,
            },
          ],
        }}
        title={metadata.title}
      />
      <ArticleJsonLd
        authorName="Robiul Hassan"
        dateModified={publishedDate}
        datePublished={publishedDate}
        description={metadata.frontmatter.summary}
        images={[metadata.frontmatter.image]}
        publisherLogo="https://avatars.githubusercontent.com/u/16862701?v=4"
        publisherName="Robiul Hassan"
        title={metadata.title}
        url={`https://abdulrahman.id/blog/${slug}`}
      />
    </>
  )
}

export default NextSeoData
