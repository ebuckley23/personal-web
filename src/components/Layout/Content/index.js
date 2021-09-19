import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from '../Sidebar';

export default function Content({ children }) {
  return <>
    <Sidebar />
    <Flex
      data-testid='content'
      direction='column'
      align='center'
      maxW={{ xl: '1200px' }}
      // m='0 auto'
      ml={[0, 0, 0, 0, 300]}
    >
      {children}
    </Flex>
  </>
}