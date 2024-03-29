import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList"
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "17/08/2021",
    },
    {
      id: nanoid(),
      text: "this is my second note!",
      date: "18/08/2021",
    },
    {
      id: nanoid(),
      text: "this is my third note!",
      date: "19/08/2021",
    },
    {
      id: nanoid(),
      text: "this is my new note!",
      date: "20/08/2021",
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', JSON.stringify(notes)
      );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString("en-GB"),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes =notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (

      <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode}/>
          <Search handleSearchNote={setSearchText}/>
          <NotesList
            notes={notes.filter((note) => note.text.toLowerCase()
                .includes(searchText)
              )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    );
}

export default App;