import './App.css';
import { Button, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List'
import { useState } from 'react';
import getCurrentDate from './helpers/CurrDate';
import Inputs from './Inputs'
import GenID from './helpers/GenId';


function App() {
  let [todos, setTodos] = useState([]);
  

  return (
    <div className="App">
      <h1><span className="badge bg-primary mt-4">TODOS</span></h1>
      <Container className='mt-5 border border-dark rounded w-50 list'>
        <Row className="input-btn-field p-2 d-flex justify-content-center border-bottom">
          <Inputs 
            onAdd={(text, desciption) => {
            setTodos([
              ...todos,
              {
                id: GenID(),
                title: text,
                date: getCurrentDate(),
                description: desciption,
                completed: false
              }
            ])
            }}
          />
        </Row>
        <Row>
        <List 
          todoList={todos} 
          onDel={(id) => {
            setTodos(todos.filter((item) => item.id !== id))
          }}
        />
        </Row>
          <Button className="btn btn-danger m-3" disabled={todos.length === 0}>Delete Selected</Button>
          <Button className="btn btn-primary m-3" disabled={todos.length === 0} >Select all</Button>
      </Container>
    </div>
  );
}

export default App;
