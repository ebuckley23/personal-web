import React, { useState, useCallback } from 'react';
import { Flex, Box, IconButton } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, navigate } from 'gatsby';
import { FaArrowLeft } from 'react-icons/fa';
import MenuItem from './MenuItem';
import { useUserScroll } from '../../../utils/hooks/useUserScroll';

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
      { show
        ? (
          <CloseIcon
            color='black' 
            fontSize='xl'
          />
          ) 
        : (
          <HamburgerIcon 
            color='black' 
            fontSize='xl'
          />
          ) 
      }
    </Box>
  )
}

const goBack = () => navigate(-1);
function NavigateIcon() {
  return (
    <Flex justify='center' align='center'>
      <IconButton
        fontSize={'xl'}
        display={['flex', 'none']} 
        onClick={goBack} 
        color='black' 
        variant='ghost' 
        mt='8px'
        icon={<FaArrowLeft />} />
    </Flex>
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
        <MenuItem linkTo='/portfolio'>Portfolio</MenuItem>
      </Flex>
    </Box>
  )
}
const getBoxShadow = (scrollPct) => {
  if (scrollPct > 0 && scrollPct <= 10) return 'sm';
  else if (scrollPct > 10 && scrollPct <= 20) return 'md'
  else if (scrollPct > 20) return 'lg';
  else return 'none';
}
export default function Header({ showBackButton }) {
  const [showToggle, setShowToggle] = useState(false);
  const { pct } = useUserScroll();

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
      boxShadow={getBoxShadow(pct)}>
      <Flex
        as='nav'
        align='center'
        justifyContent='space-between'
        wrap='wrap'
        w='100%'
        m='0 auto'
        p={[3, 8]}
        maxW={{ xl: '1200px'}}>
          <Box display='flex' data-testid='header-content' flexDir='row'>
            {showBackButton && <NavigateIcon />}
            <Logo />
          </Box>
        <ToggleIcon show={showToggle} onClick={toggle}/>
        <MenuItems show={showToggle} />
      </Flex>
    </Flex>
  )
}