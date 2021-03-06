import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HeroEnum } from '../lib/enums'
import { Layout } from '@layouts'
import { SEO } from "@atoms"
import { Hero, Latest, Contact } from '@organisms'


const BlogListQuery = graphql`
  {
    allMdx {
    nodes {
			id
      slug
      frontmatter {
				title
        tag
      }
    }
  }
  }
`



const IndexPage = () => (
  <StaticQuery
    query={BlogListQuery}
    render={data => (
      <Layout header={false}>
        <SEO title="Liam Silk" />
        <Hero type={HeroEnum.IndexPage}/>
        <Latest data={data.allMdx.nodes} />
        <Contact />
      </Layout>
    )}
  />
)

export default IndexPage
