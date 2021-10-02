import React,{useState} from 'react'



function TodoForm(props) {
    const [textvalue, settextvalue] = useState('');
    const addTask = (e) => { 
        
        if(textvalue)
        {
            props.setTodolist([...props.todolist,
            {id:props.todolist.length + 1,text:textvalue,iscompleted:false}]);
        }
        settextvalue('');
    }
    return (
        <div >
            <input type="text" placeholder="Type..." value={textvalue} onChange={(e)=>settextvalue(e.target.value)} />
            <button  onClick={addTask}>Add Task</button>
        </div>
    )
}

export default TodoForm
