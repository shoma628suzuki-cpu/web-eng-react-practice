import type { Todo } from "../types"; 
import { TodoItem } from "./TodoItem"; 

type TodoListProps = { 
    todos: Todo[]; 
}; 

export function TodoList({ todos }: TodoListProps) { 
    return ( 
      <ul> 
        {todos.map((todo: Todo) => ( 
           <TodoItem key={todo.id} todo={todo} /> 
        ))} 
      </ul> 
    ); 
}