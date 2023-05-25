import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ItemList({onAdd}){
    const [text, setText] = useState("")

    return (
        <form className="d-flex justify-content-center" onSubmit={(evt) => {
            evt.preventDefault();
            onAdd(text);
            setText("")
        }}>
            <Form.Group controlId="formFile" className="w-50 d-flex">
            <Form.Control type="text" value={text} onChange={(evt) => {
                setText(evt.target.value);
            }}/>
            <Button type='submit'>Submit</Button>
        </Form.Group>
        </form>
    )
}