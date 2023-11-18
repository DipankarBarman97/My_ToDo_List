import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      px={'16'}
      py={['12', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text
            fontWeight={'bold'}
            size={'md'}
            borderBottom={'2px solid'}
            pb={'1'}
            w={'25%'}
          >
            About
          </Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            This is one of the best ToDo-list app in India.
          </Text>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading
            // textTransform={'uppercase'}
            textAlign={'center'}
            // color={'purple.600'}
            bgGradient={'linear(to-r, purple.200, purple.700)'}
            bgClip={'text'}
          >
            My ToDo List
          </Heading>

          <Text>@all rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} mb={'2'}>
            Social Handles
          </Heading>

          <HStack>
            <Button variant={'link'} colorScheme={'pink'}>
              <a target="blank" href="https://instagram.com/dipankar.db37">
                <AiFillInstagram size={'3vmax'} />
              </a>
            </Button>

            <Button variant={'link'} colorScheme={'white'}>
              <a target="blank" href="https://github.com/DipankarBarman97">
                <AiFillGithub size={'3vmax'} />
              </a>
            </Button>

            <Button variant={'link'} colorScheme={'linkedin'}>
              <a
                target="blank"
                href="https://www.linkedin.com/in/dipankarbarman2607/"
              >
                <AiFillLinkedin size={'3vmax'} />
              </a>
            </Button>

            <Button variant={'link'} colorScheme={'red'}>
              <a target="blank" href="https://youtube.com/@dipankarbarman5307">
                <AiFillYoutube size={'3vmax'} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
