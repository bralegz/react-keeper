import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteItem(props.id);
        }}
        id={props.id}
        className="remove">
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
