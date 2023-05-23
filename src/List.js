import React, { useState } from "react";
import NewItem from "./Todo";
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ItemList({todoList}, {onDel}){

    return (
        <Col>
            {
                todoList.map((item) => {
                    return (
                        <NewItem key={item.id} item={item} onDel={onDel}/>
                    )
                })
            }
        </Col>
    )
}