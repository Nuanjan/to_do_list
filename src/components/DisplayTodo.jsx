import React from 'react';
import Todo from './Todo';

const DisplayTodo = ({todoArr, setTodoArr}) => {
    return (
        <div>
            {todoArr.map(todo => <Todo key={todo.id} todo={todo} setTodoArr={setTodoArr} todoArr={todoArr}/>)}
        </div>
    );
};

export default DisplayTodo;