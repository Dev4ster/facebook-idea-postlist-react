
import React from 'react';
import './styles.css';
function Comment({ comment }){
    return (
        <article key={comment.id}>
        <figure><img src={comment.author.avatar}></img></figure>
        <div className="content">
            <div className="comment-raw">
                    <strong>{comment.author.name}</strong> {comment.content}
            </div>
            <div className="comment-actions">
                <a href="#">Curtir</a>
                <a href="#">Responder</a>
                <a href="#">{comment.date}</a>
            </div>
        </div>
    </article>
    )
}
export default Comment;