import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Note } from './models/note.model'
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';


function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    text: "Meeting with UI/UX Team",
    title: "Meetings",
    color: "#dfdfdf",
    date: (new Date).toString()
  }])
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
