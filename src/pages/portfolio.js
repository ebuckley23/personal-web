import * as React from 'react';
import { graphql } from 'gatsby';
import { Stack } from '@chakra-ui/react'
import GithubProject from '../components/GithubProject';

const Portfolio = ({ data }) => {
  const { viewer } = data?.github ?? {};
  const { repositories } = viewer ?? {};
  const { edges = [] } = repositories ?? {};
  return (
    <Stack w={'100%'} direction='column' spacing={8}>
      {edges.map((e) => {
        const { node } = e ?? {};
        const { id, name, description, url, languages } = node ?? {};
        const { edges = []} = languages ?? {};
        const projectLanguages = edges.map(({ node }) => ({ ...node }))
        return (
          <GithubProject {...{ id, name, description, url, languages: projectLanguages }} />
        )
      })}
    </Stack>
  )
}

export const query = graphql`
  {
    github {
      viewer {
        repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              id
              name
              createdAt
              description
              url
              updatedAt
              languages(first: 10) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Portfolio;