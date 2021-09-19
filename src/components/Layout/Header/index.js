import React, { useState, useCallback } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import MenuItem from './MenuItem';

function Logo() {
  return (
    <Flex align='center'>
      <Link to='/'>
        <StaticImage
          src='../../../images/ekb@transparent.png'
          height={50}
          aspectRatio={16/9}
          quality={100}
        />
      </Link>
    </Flex>
  )
}

function ToggleIcon({ show, onClick }) {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={onClick}>
      { show ? <CloseIcon color='black' w={5} h={5} /> :<HamburgerIcon color='black' w={5} h={5} /> }
    </Box>
  )
}

function MenuItems({ show }) {
  return (
    <Box
      display={{ base: show ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto'}}>
      <Flex
        align={['center', 'center', 'center', 'center']}
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}>
        <MenuItem linkTo='/about'>About</MenuItem>
        <MenuItem>Portfolio</MenuItem>
      </Flex>
    </Box>
  )
}

export default function Header(props) {
  const [showToggle, setShowToggle] = useState(false);
  const toggle = useCallback(() => {
    setShowToggle((prev) => prev = !prev);
  }, [showToggle])

  return (
    <Flex
      bg='gray.50'
      color={['white', 'white', 'primary.700', 'primary.700']}
      position='sticky'
      top={0}
      zIndex={100}
      boxShadow='xl'
      {...props}>
      <Flex
        as='nav'
        align='center'
        justifyContent='space-between'
        wrap='wrap'
        w='100%'
        m='0 auto'
        p={8}
        maxW={{ xl: '1200px'}}>
        <Logo />
        <ToggleIcon show={showToggle} onClick={toggle}/>
        <MenuItems show={showToggle} />
      </Flex>
    </Flex>
  )
}