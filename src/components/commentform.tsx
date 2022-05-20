import * as React from 'react';
import { useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        commentFormTextArea: {

        },
        commentFormButton: {

        },
        commentFormCancelButton: {

        }
    })
);
const Commentform = (input) => {
    const { handleSubmit, submitLabel, hasCancelButton = false, initialText="", handleCancel } = input;
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
    const classes = useStyles();
    return (
        <form onSubmit={onSubmit}>
        <textarea
          className={classes.commentFormTextArea}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={classes.commentFormButton} disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className={classes.commentFormCancelButton}
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>
    )
};

export default Commentform