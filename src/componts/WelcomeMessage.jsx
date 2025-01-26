import React from 'react'
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
const WelcomeMessage = () => {

  const contextObj= useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return(
   todoItems.length === 0 && <p className='welcomeMessage'>Enjoy Your Day</p>
  ); 
};

export default WelcomeMessage;
