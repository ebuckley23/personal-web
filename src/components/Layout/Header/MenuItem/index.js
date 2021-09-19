import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { Link } from 'gatsby';

const activeStyle = {
  background: 'blue',
  color: 'white'
}
export default function MenuItem({ children, linkTo }) {
  return (
    <Text
      flex={1}
      mb={{ base: 5, sm: 0 }}
      mr={{ base: 0, sm: 5 }}
      w={'100%'}
      display='flex'>
      <Button
        variant='link'
        activeStyle={activeStyle} 
        to={linkTo} 
        as={Link}
      >
        {children}
      </Button>
    </Text>
  )
}