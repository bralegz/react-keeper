import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
  });
  const [allNotes, setAllNotes] = useState([]);
  const localStorageContent = JSON.parse(localStorage.getItem('allNotes'));

  useEffect(() => {
    if (localStorageContent) {
      setAllNotes(localStorageContent);
    }
  }, []);

  const [emptyField, setEmptyField] = useState(false);

  function addNote(event) {
    const nameInput = event.target.name;
    const nameValue = event.target.value;

    if (nameInput === 'title') {
      setNewNote({
        ...newNote,
        [nameInput]:
          nameValue.charAt(0).toUpperCase() + nameValue.slice(1).toLowerCase(),
      });
    } else {
      setNewNote({
        ...newNote,
        [nameInput]: nameValue,
      });
    }
  }

  function clickHandler(event) {
    event.preventDefault();

    if (newNote.content === '' || newNote.title === '') {
      setEmptyField(true);
      return;
    }

    setEmptyField(false);

    localStorage.setItem('allNotes', JSON.stringify([...allNotes, newNote]));

    setAllNotes(() => {
      return [...allNotes, newNote];
    });

    setNewNote({
      title: '',
      content: '',
    });
  }

  function deleteItem(id) {
    setAllNotes(() => {
      return allNotes.filter((note, index) => id !== index);
    });
    localStorage.removeItem('allNotes');
    localStorage.setItem(
      'allNotes',
      JSON.stringify(allNotes.filter((note, index) => id !== index))
    );
  }

  return (
    <div className="wrap">
      <Header />
      <CreateArea
        addNote={addNote}
        clickHandler={clickHandler}
        titleValue={newNote.title}
        textAreaValue={newNote.content}
      />
      {emptyField && (
        <p className="validation">You must enter a title and a note</p>
      )}
      <div className="container">
        {allNotes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              deleteItem={deleteItem}
              title={note.title}
              content={note.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
