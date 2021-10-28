import React, { useState } from 'react';
const todoStyle={
    display: 'flex',
    justifyContent: "space-evenly",
    alignItems: "center"
}
const btnStyle={
    padding: '0.5rem',
    backgroundColor: 'red',
    color: 'white',
    fontWeight: '900',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '10px'
}
const crossTextStyle= {

}
const Todo = ({todo, setTodoArr, todoArr}) => {
    const [isCross, setIsCross] = useState(false)
    const deleteTodo= () => {
      const newTodo = todoArr.filter(el => el.id !== todo.id)
      setTodoArr(newTodo)
    
    }
    const onCheckIsComplete =(e) => {
        if(e.target.checked)
        setIsCross(true)
        else
        setIsCross(false)

    }
    return (
        <div style={todoStyle}>
            <input type="checkbox" onClick={(e) => onCheckIsComplete(e)}/>
            <p style={{textDecoration:isCross?"line-through": "none"}}>{todo.text}</p>
            <button style={btnStyle} onClick={deleteTodo}>Delete</button>
        </div>
    );
};

export default Todo;