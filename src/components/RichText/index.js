import * as React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Text, Heading } from '@chakra-ui/react';

export default ({ richText, children, ...rest }) => {
  return (
    <Text fontSize={['sm', 'md']} {...rest}>
      {
        renderRichText(richText || children, {
          renderMark: {
            [MARKS.BOLD]: text => <Text as='b'>{text}</Text>,
            [MARKS.UNDERLINE]: text => <Text as='u'>{text}</Text>,
            [MARKS.ITALIC]: text => <Text as='i'>{text}</Text>,
            [MARKS.CODE]: text => <Text as='code'>{text}</Text>
          },
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_, children) => <Text as='p' mb={5}>{children}</Text>,
            [BLOCKS.HEADING_1]: (_, children) => <Heading as='h1'>{children}</Heading>
          },
          renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
              return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
          }
        })
      }
    </Text>
  )
}
