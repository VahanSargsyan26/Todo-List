import React from "react";
import { Col, Button, InputGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CutSentence from "./helpers/CutSentence";
import { useState } from "react";

export default function NewItem({item, onDel}) {
    const [checked, setChecked] = useState(item.completed);
    const [selectedTasks, setSelectedTasks] = useState([])
    const handleDelete = () => {
        onDel(item.id);
      };

    let editTask = (task) => {
        console.log(task) // chgites inchu submiti jmnk e kanchum ays functiony chi stacvum edity chisht vercnel
    }

    return (
    <Col className="d-flex flex-row ">
        <Col className="d-flex justify-content-between m-2 p-2 border-bottom ">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={() => {
                setChecked(!checked) 
                }} /> 
            <Col>
                <h2>{CutSentence(item.title)}</h2>
            </Col>
            <Col>
                <h3 className="mt-1">{CutSentence(item.description)}</h3>
            </Col>
             
            <Button onClick={handleDelete} className="pe-3 ps-3 me-2">X</Button>
            <Button className="btn btn-warning text-light" onClick={editTask(item)}>Edit</Button>
        </Col>
    </Col>
       
    )
}