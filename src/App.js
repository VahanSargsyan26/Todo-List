import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List'
import { useState } from 'react';
import getCurrentDate from './helpers/CurrDate';
import Inputs from './Inputs'
import GenID from './helpers/GenId';


function App() {
  let [todos, setTodos] = useState([]);
  const deleteObj = () => {
    console.log("OBJECT DELETED")
  }

  return (
    <div className="App">
      <h1><span className="badge bg-primary mt-4">TODOS</span></h1>
      <Container className='mt-5 border border-dark rounded w-50 list'>
        <Row className="input-btn-field p-2 d-flex justify-content-center border-bottom">
          <Inputs 
            onAdd={(text) => {
            setTodos([
              ...todos, 
              {
                id: GenID(),
                title: text,
                date: getCurrentDate(),
              }
            ])
            }}
          />
        </Row>
        <Row>
        <List 
          todoList={todos} 
          onDel={deleteObj}
        />
        </Row>
      </Container>
    </div>
  );
}

export default App;
