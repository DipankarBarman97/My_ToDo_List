import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        variant={'ghost'}
        borderRadius={'full'}
        p={'0'}
        w={'10'}
        h={'10'}
        zIndex={'overlay'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My ToDo List</DrawerHeader>
            <DrawerBody>
              <VStack>
                <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                  <Link to={'/sourceCode'}>Source Code</Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
