import * as React from 'react';
import { useState } from "react";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi
} from "../components/api.js"
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import Comment from './comment.tsx';
import Commentform from './commentform.tsx';
import { type } from '@testing-library/user-event/dist/type';
import { Hidden } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        comments: {
            color: 'white',
            marginTop: '20px'
        },
        commentsTitle: {
            fontSize: '30px',
            marginBottom: '20px'
        },
        commentsContainer: {
            marginTop: '40px',
            color: 'white',
            overflow: 'scroll',
            overflowX: 'hidden',
            height: '475px'
        },
        commentFormTitle: {
            fontSize: '22px'
        }
    })
);
const Comments = (currentUserId) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null)
    const rootComments = backendComments.filter(
        backendComment => backendComment.parentId === null)
    const getReplies = commentId => {
        return backendComments.filter(backendComment => backendComment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    };

    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId)
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
            setActiveComment(null)
        });
    }

    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentApi().then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            });
        }
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };

    React.useEffect(() => {
        getCommentsApi().then(data => {
            setBackendComments(data);
        })
    }, [])
    const classes = useStyles();
    return (
        <div className={classes.comments}>
            <h3 className={classes.commentsTitle}>
                Comments
            </h3>
            <div className={classes.commentFormTitle}>Write Comment</div>
            <Commentform submitLabel="Write" handleSubmit={addComment} />
            <div className={classes.commentsContainer}>
                {rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        currentUserId={currentUserId}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        updateComment={updateComment}
                    />
                ))}
            </div>
        </div>
    )
};

export default Comments