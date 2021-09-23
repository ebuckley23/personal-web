import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Box, Heading, Flex, Stack } from '@chakra-ui/react'
import RichText from '../../components/RichText';

const Post = ({ data }) => {
  const { title, content, postImage } = data?.contentfulPost;
  const image = getImage(postImage);
  return (
    <Box>
      <Stack direction='column' spacing={5}>
        <Flex justify='center'>
          <Heading fontSize={['md', 'x-large']}>{title}</Heading>
        </Flex>
        <Flex maxH={'200px'} justify='center'>
          <GatsbyImage
            image={image}
            alt=''
          />
        </Flex>
        <RichText>{content}</RichText>
      </Stack>
    </Box>
  )
}


// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.

// https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
export const query = graphql`
  query Post($id: String) {
    contentfulPost(id: {eq: $id}) {
      content {
        raw
      }
      title
      updatedAt
      createdAt
      postImage {
        gatsbyImageData(
          quality: 100
        )
      }
    }
  }
`

export default Post;