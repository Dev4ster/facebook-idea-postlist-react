import React from 'react';
import Comment from '../Comment'
import './styles.css';
function Post({post}){
    return(
        <article>
        <div className="content">
        <div className="post-header">
                <figure><img src={post.author.avatar}></img></figure>
                <div className="post-info">
                    <span>{post.author.name}</span>
                    <small>{post.date} </small>
                </div>
            </div>
            <div className="post-body">
            {post.content}
            </div>
            <section className="post-coments">
                { post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </section>
        </div>
    </article>
    )
}
export default Post;