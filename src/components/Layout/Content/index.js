import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from '../Sidebar';

export default function Content({ children, showSideBar }) {
  return (
    <>
      <Sidebar display={showSideBar} />
      <Flex
        data-testid='content-container'
        as='main'
        p={[1, 100]}
        direction='column'
        align='center'
        mb={0}
        mr='auto'
        ml={{xl: showSideBar ? '300px' : 'auto'}}
      >
        {children}
      </Flex>
    </>)
}