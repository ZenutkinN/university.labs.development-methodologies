import React, { useState, useCallback } from 'react';

export const NotesList = () => {
  const [text, setText] = useState('');
  const [notes, setNote] = useState([]);

  const addNote = () => {
    if (text !== '') {
      setNote((notes) => [...notes, text]);
      setText('');
    }
  };

  const deleteNote = (idx) => {
    setNote((notes) => [...notes.slice(0, idx), ...notes.slice(idx + 1)]);
  };

  const renderNotes = useCallback(() => {
    if (notes.length === 0) {
      return 'Please, add note';
    } else {
      return notes.map((title, idx) => {
        return (
          <li key={idx}>
            {title}
            <button onClick={() => deleteNote(idx)}>Delete</button>
          </li>
        );
      });
    }
  }, [notes]);

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={addNote}>Add note</button>
      <ul>{renderNotes()}</ul>
    </div>
  );
};
