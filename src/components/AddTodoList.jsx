import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { nanoid } from 'nanoid';

const AddTodoList = ({ addTodo }) => {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        title: 'No Content',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack my={'4'}>
        <Input
          variant={'filled'}
          placeholder="Add task here.."
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button
          colorScheme="purple"
          borderRadius={'full'}
          p={'0'}
          variant={'outline'}
          type="submit"
        >
          <FaPlus />
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodoList;
