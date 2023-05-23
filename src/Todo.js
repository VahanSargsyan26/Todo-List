import React from "react";
import { Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewItem({item}, {onDel}) {
    const myObj = item;
    const handleDelete = () => {
        onDel();
      };
    return (
    <Col className="d-flex flex-row ">
        <Col className="d-flex justify-content-between m-2 p-2 border-bottom ">
            <Col>
                <h3>{item.title}</h3> 
            </Col>
            <Col>
                <h3>{item.date}</h3>
            </Col>
             
            <Button onClick={() => {
                handleDelete()
            }}>X</Button>
        </Col>
    </Col>
       
    )
}