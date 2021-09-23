import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Stack, Text, Flex, Divider, IconButton, ButtonGroup, Link } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaLinkedinIn, FaFacebook, FaTwitter, FaAt } from 'react-icons/fa'

function Content({ children }) {
  return (
    <Box
      data-testid='sidebar-container'
      h={'100%'}
      display={['none', 'none', 'none', 'none', 'flex']}
      justifyContent='center'
      maxW={300}
      position='fixed'
      zIndex={1}
      bg={'gray.50'}
      p={10}
    >
      {children}
    </Box>
  )
}
export default function Sidebar({ display }) {
  const data = useStaticQuery(graphql`
    {
      contentfulProfile {
        id
        firstName
        lastName
        middleInitial
        profileImage {
          gatsbyImageData(
            width: 135
            quality: 100
            placeholder: BLURRED)
        }
        twitter
        tagLine
      }
    }
  `)
  
  if (!display) return null;
  const { firstName, lastName, middleInitial, tagLine, facebook, twitter, linkedIn, email, profileImage } = data?.contentfulProfile || {};
  const image = getImage(profileImage);

  return (
    <Content>
      <Flex direction='column' justify='start' align='center'>
        <Stack alignItems='center' spacing={3}>
          <GatsbyImage
            imgStyle={{ borderRadius: '50%' }}
            alt=''
            image={image}
          />
          <Text>{`${firstName} ${middleInitial}. ${lastName}`}</Text>
          <Stack direction='row' h='100px' p={0} bg='white'>
            <Divider orientation='vertical' />
            <Box p={1}>
              <Text align='center' as='cite'>
                {tagLine}
              </Text>
            </Box>
          </Stack>
          <Text>Contact me at:</Text>
          <ButtonGroup variant='outline'>
            <IconButton
              as={Link}
              isExternal
              href={facebook}
              variant='outline'
              aria-label='Facebook'
              icon={<FaFacebook />} />
            <IconButton
              as={Link}
              isExternal
              href={linkedIn}
              variant='outline'
              aria-label='LinkedIn'
              icon={<FaLinkedinIn />} />
            <IconButton
              as={Link}
              isExternal
              href={twitter}
              variant='outline'
              aria-label='Twitter'
              icon={<FaTwitter />} />
            <IconButton
              as={Link}
              href={email}
              variant='outline'
              aria-label='Email'
              icon={<FaAt />} />
          </ButtonGroup>
        </Stack>
      </Flex>
    </Content>
  )
}