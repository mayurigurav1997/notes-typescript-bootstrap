import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Note } from './models/note.model'
import Header from './components/Header';


function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    text: "Meeting with UI/UX Team",
    title: "Meetings",
    color: "green",
    date: (new Date).toString()
  }])
  return (
    <>
      <Header />
    </>
  );
}

export default App;
