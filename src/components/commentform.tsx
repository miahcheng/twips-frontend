import * as React from 'react';
import { useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        commentFormTextArea: {
            width: '90%',
            height: '80px',
            marginBottom: '8px',
            marginTop: '8px',
            border: '1px solid rgb(107, 114, 12)'
        },
        commentFormButton: {
            fontSize: '16px',
            padding: '8px 16px',
            background: 'rgb(59, 130, 246)',
            borderRadius: '8px',
            color: 'white'
        },
        commentFormCancelButton: {
            fontSize: '16px',
            padding: '8px 16px',
            background: 'rgb(59, 130, 246)',
            borderRadius: '8px',
            color: 'white',
            marginLeft: '10px'
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