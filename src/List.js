import React from "react";
import NewItem from "./Todo";
import 'bootstrap/dist/css/bootstrap.min.css';


const List = ({ todoList, onDel }) => {

    return (
        <div>
            {todoList.map((todo) => (
                <NewItem  key={todo.id} item={todo} onDel={onDel}/>
            ))}
        </div>
    );
};

export default List;
