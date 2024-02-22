import React, { useMemo } from 'react';
import { Flex, type FlexProps } from '@chakra-ui/react';

interface Props extends FlexProps {
  children: React.ReactNode | React.ReactNode[];
  colorSchema?: 'blue' | 'green' | 'gray' | 'purple';
}

const Tag = ({ children, colorSchema = 'blue', ...props }: Props) => {
  const theme = useMemo(() => {
    const map = {
      blue: {
        borderColor: 'primary.500',
        bg: '#F2FBFF',
        color: 'primary.600'
      },
      green: {
        borderColor: '#67c13b',
        bg: '#f8fff8',
        color: '#67c13b'
      },
      purple: {
        borderColor: '#A558C9',
        bg: '#F6EEFA',
        color: '#A558C9'
      },
      gray: {
        borderColor: 'borderColor.base',
        bg: 'myGray.50',
        color: 'myGray.700'
      }
    };
    return map[colorSchema];
  }, [colorSchema]);

  return (
    <Flex
      {...theme}
      borderWidth={'1px'}
      px={2}
      lineHeight={1}
      py={1}
      borderRadius={'sm'}
      fontSize={'xs'}
      alignItems={'center'}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Tag;
