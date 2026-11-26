import { todos } from "./data"; 
import { TodoList } from "./components/TodoList"; 

export default function App() { 
  return ( 
  <main> 
    <h1>React TODO</h1> 
    <TodoList todos={todos} /> 
  </main> 
  );
}