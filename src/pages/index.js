import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { MailChimp } from '../components/MailChimp'
import { SocialMedia } from '../components/SocialMedia'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <img src={__PATH_PREFIX__ + '/heart-projector.gif'} />
        <p>We at Heart Projector run small pop up arcades every few months in East Vancouver, Canada. Our events feature unique games by diverse creators. Join us next time or check out the games from previous shows below. </p>

        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div key={post.node.frontmatter.path}>
                <Link
                  style={{ boxShadow: 'none', textDecoration: 'underline' }}
                  to={post.node.frontmatter.path}
                >
                  {post.node.frontmatter.summary}
                </Link>
              </div>
            )
          }
        })}

        <MailChimp />
        <SocialMedia />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {
      fileAbsolutePath: {
        regex: "/volumes/"
      }
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            summary
          }
        }
      }
    }
  }
`
