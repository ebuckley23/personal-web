import * as React from 'react';
import { graphql } from 'gatsby';
import { Stack } from '@chakra-ui/react'
import PostPreview from '../components/PostPreview'

const IndexPage = ({ data }) => {
  const { nodes: posts } = data?.allContentfulPost ?? [];
  return (
    <Stack w={'100%'} direction={'column'} spacing={8}>
      {posts.map(p => (<PostPreview key={p.id} post={p} />))}
    </Stack>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      nodes {
        id
        title
        content {
          raw
        }
        postImage {
          gatsbyImageData(
            width: 200
            height: 200
            quality: 100
            placeholder: BLURRED
            layout: CONSTRAINED)
        }
      }
    }
  }
`

export default IndexPage
