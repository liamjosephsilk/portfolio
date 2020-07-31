import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/Card"
import SEO from "../components/seo"

import { IndexWrapper } from "../lib/styles"

const BlogListQuery = graphql`
  {
    graphcms {
      posts {
        bodyMarkdown
        id
        publishDate
        slug
        title
        tag
      }
    }
  }
`

const IndexPage = () => (
  <StaticQuery
    query={BlogListQuery}
    render={data => (
      <Layout>
        <SEO title="Liam Silk | | Blog" />
        <IndexWrapper>
          {data.graphcms.posts.map(post => {
            const { title, id, slug, tag } = post
            return (
              <Card
                tags={["javascript"]}
                title={title}
                id={id}
                key={id}
                slug={`/posts/${slug}`}
                tag={tag}
              />
            )
          })}
        </IndexWrapper>
      </Layout>
    )}
  />
)

export default IndexPage
