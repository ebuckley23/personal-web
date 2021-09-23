import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Flex, Box, Heading, Button, Stack } from '@chakra-ui/react'
import { FaArrowCircleRight } from 'react-icons/fa';
import RichText from '../RichText';

export default ({ post }) => {
  const { title, content, postImage, id } = post;
  return (
    <Flex
      w='100%'
      shadow='md'
      p={5}
      flexDir='row'
    >
      <Box display={['none', 'flex']} mr='10'>
        <GatsbyImage image={getImage(postImage)} />
      </Box>
      <Box flexDir='column' w='100%'>
        <Flex
          flexDir='row'>
          <Stack spacing={4}>
            <Heading noOfLines={2} fontSize={['md', 'xl']}>{title}</Heading>
            <RichText noOfLines={3}>{content}</RichText>
          </Stack>
        </Flex>
        <Flex flexDir='row' justifyContent='flex-end'>
          <Button
            as={Link}
            fontSize={['sm', 'md']}
            mt={3} 
            rightIcon={<FaArrowCircleRight />}
            variant='ghost'
            to={`/posts/${id}`}
          >
            Read More
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}