import * as React from 'react';
import { Flex, Box, Heading, Wrap, Stack, Text, Tag, Link, TagLabel, WrapItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa'

export default ({ name, description, createdAt, url, updatedAt, languages }) => {
  console.log({ url })
  return (
    <Flex
      w='100%'
      shadow='md'
      p={5}
      flexDir='row'
    >
      <Box flexDir='column' w='100%'>
        <Stack spacing={4}>
          <Flex
            flexDir='row'>
            <Stack spacing={4}>
              <Heading fontSize={['md', 'xl']}>{name}</Heading>
              <Text noOfLines={3}>{description}</Text>
            </Stack>
          </Flex>
          <Flex flexDir='row' justifyContent='space-between' align='flex-end'>
          <Flex width='90%' wrap='wrap'>
            <Wrap width='100%'direction='row' spacing={2}>
              {languages.map((l) => {
                return (
                  <WrapItem>
                    <Tag
                      variant='outline' 
                      size='sm' 
                      key={l.name}>
                      <TagLabel color={l.color}>{l.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                )
              })}
            </Wrap>
          </Flex>
          <Flex>
            <Link
              display='flex' 
              flexDir='row' 
              alignItems='center' 
              fontSize={['sm', 'md']}
              isExternal>
              <Stack
                textDecoration='none'
                direction='row' 
                spacing={2} 
                align='center'>
                <FaGithub /> 
                <Text>Github</Text>
                <ExternalLinkIcon />
              </Stack>
            </Link>
          </Flex>
        </Flex>
        </Stack>
      </Box>
    </Flex>
  )
}