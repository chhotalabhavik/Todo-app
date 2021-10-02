import TodoForm from "./component/TodoForm"; 
import TodoTile from "./component/TodoTile";
import {useState} from 'react';

function App() {
  const todolist = [
    {
      id : 1,
      text : "Make Cofee",
      isCompleted : true
    },
    {
      id : 2,
      text : "Make Cofee",
      isCompleted : false
    },
    {
      id : 3,
      text : "Make Cofee",
      isCompleted : false
    },
    {
      id : 4,
      text : "Make Cofee",
      isCompleted : false
    },
    {
      id : 1,
      text : "Make Cofee",
      isCompleted : false
    }
  ];
  const [todoList,setTodoList] = useState(todolist);
 
  return (
    <div style={{margin:'0 auto',textAlign:'center'}}>
      <h1>Daily Tasks</h1>
      <TodoForm todolist={todoList} setTodolist={setTodoList}/>
      {
      todoList.map(todo=><TodoTile id={todo.id} text={todo.text} isCompleted={todo.isCompleted} todolist={todoList} setTodolist={setTodoList} ></TodoTile>)
      }
    </div>
  );
}

export default App;
