import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const SourceCode = () => {
  return (
    <VStack h={'85vh'} justifyContent={'center'}>
        {/* <FaGithub size={'75'} /> */}
        <Button variant={'link'} colorScheme='black'>
              <a target="blank" href="linkHere">
                <FaGithub size={'7vmax'} />
              </a>
            </Button>
        <Text fontWeight={'bold'} bgGradient={'linear(to-r, purple.700, purple.500)'} bgClip={'text'}>Tap to this icon</Text>
    </VStack>
  )
}

export default SourceCode
