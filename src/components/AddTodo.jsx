import React, { useState } from 'react';
import { nanoid } from 'nanoid';
const btnStyle={
    padding: '0.5rem',
    backgroundColor: 'blue',
    color: 'white',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '20px'
}
const AddTodo = ({todoArr, setTodoArr}) => {
    const [text, setText] = useState("")
    const submitTodo = (e) => {
        e.preventDefault();
        setTodoArr([...todoArr, {id: nanoid(),text:text, isComplete: false}])
        setText("")
    }

    return (
        <form onSubmit={(e) => submitTodo(e)}>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
            <input style={btnStyle} type="submit" value="ADD" />
        </form>
    );
};

export default AddTodo;