import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { FaPlay } from 'react-icons/lib/fa'

class VolumeTemplate extends React.Component {

  render() {
    const post = get(this, 'props.data.markdownRemark')
    const games = get(this, 'props.data.allMarkdownRemark.edges')

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <div>
          {games ? games.map((game, index) => {
            const front = game.node.frontmatter

            return (
              <div key={index} id="item">

                <center>
                  <h1>
                    {front.title}
                    <a className="arrow" href={front.url} target="_blank" >
                      <FaPlay color="white" size="30" />
                    </a>
                  </h1>

                  <h2>{front.author}</h2>
                </center>

                <a href={front.url} target="_blank">
                  <img
                    className="imgfloatleft"
                    src={`${__PATH_PREFIX__}/${front.icon}`}
                  />
                </a>

                <div id="textfloatright" dangerouslySetInnerHTML={{ __html: game.node.html }}></div>
              </div>
            )
          }) : null }
        </div>
      </div>
    )
  }
}

export default VolumeTemplate

export const pageQuery = graphql`
  query VolumeByPath($path: String!, $games: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      id
      html
        frontmatter {
          title
        }
      }
    allMarkdownRemark(filter: {
      fileAbsolutePath: {
        regex: $games
      }
    }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            author
            url
            icon
          }
        }
      }
    }
  }
`
