import Addtodo from './componts/Addtodo.jsx';
import Heading from './componts/Heading.jsx';
import WelcomeMessage from './componts/WelcomeMessage.jsx';
import Totalitems from './componts/Totalitems.jsx';
import { useState } from 'react';
import { TodoItemsContext } from './store/todo-items-store.jsx';
import "./App.css"

function App() {
    const [todoItems, setTodoItems] = useState([]);

    const addNewItem = (itemName, itemDueDate) => {
        const newTodoItems = [
            ...todoItems, 
            { name: itemName,
            dueDate: itemDueDate },
        ];
        setTodoItems(newTodoItems);
    };

    const deleteItem=(todoItemsName) =>{
        const newTodoItems=todoItems.filter((item)=>item.name !==todoItemsName);
        setTodoItems(newTodoItems);
    };

   
    return (
        <TodoItemsContext.Provider
         value={{
            todoItems,
            addNewItem,
            deleteItem,
        }}>
        <center className="todo-container">
            <Heading />
            <Addtodo></Addtodo>
           <WelcomeMessage></WelcomeMessage>
            <Totalitems ></Totalitems>
        </center>
        </TodoItemsContext.Provider>
    );
}

export default App
