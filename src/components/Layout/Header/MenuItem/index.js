import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';

const activeStyle = {
  background: 'grey',
  color: 'white'
}
export default function MenuItem({ children, linkTo }) {
  return (
    <Button
      variant='link'
      activeStyle={activeStyle} 
      to={linkTo} 
      as={Link}
      p={3}
      w={'100%'}
    >
      {children}
    </Button>
  )
}