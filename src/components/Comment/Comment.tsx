import React, {FC} from 'react';
import {IComment} from "../../interfaces/comment.interface";


interface IProps {
    comment: IComment
}


const Comment: FC<IProps> = ({comment}) => {

    const {id, email, body} = comment;

    return (
        <div>
            <div>{id}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export default Comment;