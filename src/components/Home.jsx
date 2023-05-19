import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import AddTodoList from './AddTodoList';
import TodoList from './TodoList';
import { useState, useEffect } from 'react'

const Home = () => {

  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: 'JavaScript',
  //   },
  //   {
  //     id: 2,
  //     body: 'ReactJS',
  //   },
  // ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  return (
    <>
      <VStack h={'85vh'}>
        <Heading
          my={'4'}
          bgGradient={'linear(to-r, purple.700, purple.200)'}
          bgClip={'text'}
          fontWeight={'extrabold'}
          size={'2xl'}
          borderBottom={'2px solid #9F7AEA'}
          pb={'4'}
        >
          My ToDo List
        </Heading>
        <AddTodoList addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </VStack>
    </>
  );
};

export default Home;
