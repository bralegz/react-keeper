import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isClicked, setIsClicked] = useState(false);

  function inputClicked() {
    setIsClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder={isClicked ? 'Title' : 'Take a note...'}
          maxLength={35}
          onChange={props.addNote}
          value={props.titleValue}
          onClick={inputClicked}
          id="input-field"
        />
        {isClicked && (
          <textarea
            maxLength={100}
            name="content"
            placeholder="Take a note..."
            rows={isClicked ? '3' : '1'}
            onChange={props.addNote}
            value={props.textAreaValue}
          />
        )}

        {isClicked && (
          <div>
            <Zoom in={true}>
              <Fab onClick={props.clickHandler}>
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
