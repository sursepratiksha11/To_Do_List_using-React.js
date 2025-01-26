import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Totalitem from "./Totalitem";

const Totalitems = () => {
     const {todoItems}= useContext(TodoItemsContext);
     
    return(
       <div className="items-container">
                {todoItems.map((item) =>(
                <Totalitem 
                key={item.name}
                todoDate={item.dueDate}
                todoName={item.name} ></Totalitem>))}
            </div>
   );
};

export default Totalitems;