import React, { useState, useCallback } from 'react';

export const NotesList = () => {
  const [text, setText] = useState('');
  const [notes, setNote] = useState([]);

  const addNote = () => {
    setNote((notes) => [...notes, text]);
    setText('');
  };

  const renderNotes = useCallback(() => {
    if (notes.length === 0) {
      return 'Please, add note';
    } else {
      return notes.map((title, idx) => <li key={idx}>{title}</li>);
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
