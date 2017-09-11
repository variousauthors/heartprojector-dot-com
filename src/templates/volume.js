import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { FaPlay } from 'react-icons/lib/fa'

class VolumeTemplate extends React.Component {

  render () {
    const post = this.props.data.markdownRemark
    const games = this.props.data.allMarkdownRemark.edges
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <div>
          {games.map((game, index) => {
            const front = game.node.frontmatter
            console.log(game)
            return (
              <div key={ index } id="item">

                <center>
                  <h1>
                    {front.title}
                    <a href={front.url} target="_blank">
                      <FaPlay />
                    </a>
                  </h1>

                  <h2>{front.author}</h2>
                </center>

                <a href={ front.url } target="_blank">
                  HELLO
                  <img className="imgfloatleft" src={ front.icon } />
                </a>

                <div id="textfloatright">
                  { game.node.html }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  /*
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
            <h1>{post.frontmatter.title}</h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: 'block',
                marginBottom: rhythm(1),
                marginTop: rhythm(-1),
              }}
            >
              {post.frontmatter.date}
            </p>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Bio />
          </div>
          )
  }
  */
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
          }
        }
      }
    }
  }
`
