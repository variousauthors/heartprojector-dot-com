const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
    const game = path.resolve("./src/templates/game.js")
    const volume = path.resolve("./src/templates/volume.js")

    const regex = /volumes\/[0-9]+\/index/

    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000, filter: {
          fileAbsolutePath: {
            regex:"${regex}"
          }
        }) {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: volume,
            context: {
              path: edge.node.frontmatter.path,
              games: `/${edge.node.frontmatter.path}\/games/`,
            },
          })
        })
      })
    )
  })
}
