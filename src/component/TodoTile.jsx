import React from 'react'

function TodoTile(props) {
    console.log(props);

    const deleteTodo = () =>
    {
        props.setTodolist(props.todolist.filter((todo)=>{
            if(todo.id === props.id)
            {
                return false;
            }
            else
            {
                return true;
            }
        }))
    } 

    return (
        <div>
            <input type="checkbox" checked={props.isCompleted} value={props.isCompleted}/>
            <span>{props.text}</span>
            <button onClick={deleteTodo}>Delete</button>
        </div>

    )
}

export default TodoTile
