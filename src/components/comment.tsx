import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { AddComment } from '@mui/icons-material';
import Commentform from './commentform.tsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        comment: {
            display: 'flex',
        },
        commentImageContainer: {
            marginRight: '12px'
        },
        commentRightPart: {
            width: '100%'
        },
        commentContent: {
            display: 'flex'
        },
        commentAuthor: {
            marginRight: '8px',
            fontSize: '20px',
            color: 'rgb(59, 130, 246)'
        },
        commentText: {
            fontSize: '18px'
        },
        replies: {
            marginTop: '20px'
        },
        commentActions: {
            display: 'flex',
            fontSize: '12px',
            color: 'rgb(51, 51, 51)',
            cursor: 'pointer',
            marginTop: '8px'
        },
        commentAction: {
            marginRight: '8px'
        },
        avatar: {
            width: '75px',
            height: '75px',
            borderRadius: '40px'
        }
    })
);
const Comment = (input) => {
    const {
        comment,
        replies,
        currentUserId,
        deleteComment,
        activeComment,
        addComment,
        setActiveComment,
        parentId = null,
        updateComment
    } = input
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId)
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;

    const classes = useStyles();
    return (
        <div className={classes.comment}>
            <div className={classes.commentImageContainer}>
                <img className={classes.avatar} src="/farfa.jpeg" />
            </div>
            <div className={classes.commentRightPart}>
                <div className={classes.commentContent}>
                    <div className={classes.commentAuthor}>{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className={classes.commentText}>{comment.body}</div>}
                {isEditing && (
                    <Commentform
                        submitLabel="Update"
                        hasCancelButton
                        initialText={comment.body}
                        handleSubmit={(text) => updateComment(text, comment.id)}
                        handleCancel={() => {
                            setActiveComment(null);
                        }}
                    />
                )}
                <div className={classes.commentActions}>
                    {canReply && <div className={classes.commentAction} onClick={() => setActiveComment({ id: comment.id, type: 'replying' })}>Reply</div>}
                    {canEdit && <div className={classes.commentAction} onClick={() => setActiveComment({ id: comment.id, type: 'editing' })}>Edit</div>}
                    {canDelete && <div className={classes.commentAction} onClick={() => deleteComment(comment.id)}>Delete</div>}
                </div>

                {isReplying && (
                    <Commentform
                        submitLabel="Reply"
                        handleSubmit={(text) => addComment(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className={classes.replies}>
                        {replies.map(reply => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                replies={[]}
                                currentUserId={currentUserId}
                                deleteComment={deleteComment}
                                addComment={addComment}
                                activeComment={activeComment}
                                setActiveComment={setActiveComment}
                                parentId={comment.id}
                                updateComment={updateComment}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Comment