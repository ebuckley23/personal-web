import React from 'react';
import { Box, Stack, Text, Flex, Divider, IconButton, ButtonGroup, Link } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
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
export default function Sidebar() {
  return (
    <Content>
      <Flex direction='column' justify='start' align='center'>
        <StaticImage
          imgStyle={{ borderRadius: '50%' }}
          height={135}
          width={135}
          alt=''
          src='../../../images/me.jpg' />
        <Stack alignItems='center' spacing={3}>
          <Text>Emmanuel K. Buckley</Text>
          <Stack direction='row' h='100px' p={4}>
            <Divider orientation='vertical' />
            <Text as='cite'>Trying to visualize something I've never seen.</Text>
          </Stack>
          <Text>Contact me at:</Text>
          <ButtonGroup variant='outline'>
            <IconButton
              as={Link}
              isExternal
              href='https://www.facebook.com/ebuckley23'
              variant='outline'
              aria-label='Facebook'
              icon={<FaFacebook />} />
            <IconButton
              as={Link}
              isExternal
              href='https://www.linkedin.com/in/emmanuelbuckley'
              variant='outline'
              aria-label='LinkedIn'
              icon={<FaLinkedinIn />} />
            <IconButton
              as={Link}
              isExternal
              href='https://twitter.com/ebuckleyk'
              variant='outline'
              aria-label='Twitter'
              icon={<FaTwitter />} />
            <IconButton
              as={Link}
              href='mailto:me@ebuckley.io'
              variant='outline'
              aria-label='Email'
              icon={<FaAt />} />
          </ButtonGroup>
        </Stack>
      </Flex>
    </Content>
  )
}