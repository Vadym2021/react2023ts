import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../interfaces/comment.interface";
import {commentService} from "../services/comment.service";
import CommentsForm from "../components/CommentForm/CommentForm";
import Comments from "../components/Comments/Comments";

interface IProps {

}


const CommentPage: FC<IProps> = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentService.getAll().then(res => res.data).then(value => setComments(value))
    }, [])

    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentPage};