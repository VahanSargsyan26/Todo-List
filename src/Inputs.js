import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ItemList({onAdd}){
    const [text, setText] = useState("")
    const [desciption, setDescription] = useState("")

    return (
        <form className="d-flex justify-content-center" onSubmit={(evt) => {
            evt.preventDefault();
            if(text !== "" && desciption !== "") {
                onAdd(text, desciption);
            } else {
                return;
            }
            setText("");
            setDescription("");
        }}>
            <Form.Group controlId="formFile" className="w-100 d-flex">
            <Form.Control type="text" placeholder="task" className="me-2" value={text} onChange={(evt) => {
                setText(evt.target.value);
            }}/>
            <Form.Control type="text" placeholder="description" className="me-2" value={desciption} onChange={(evt) => {
                setDescription(evt.target.value);
            }}/>
            <Button type='submit'>Submit</Button>
        </Form.Group>
        </form>
    )
}