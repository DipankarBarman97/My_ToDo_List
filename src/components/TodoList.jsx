import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={'4'} m={'4'} borderRadius={'lg'}>
        No Todos here!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor={'gray.100'}
      shadow={'2xl'}
      p={'4'}
      borderRadius={'lg'}
      w={'100%'}
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      // maxW={'container.xl'}
      alignItems={'stretch'}
    >
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            variant={'ghost'}
            colorScheme="red"
            isRound
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
