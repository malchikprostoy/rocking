import React from 'react';
import CommentCard from "../CommentCard";

const Comments = () => {
  const numberOfCommentCards = 4;
  return (
      <div className='comments' id='comments'>
        <h1>Отзывы наших <span id="h1">пользователей</span></h1>
        <div className="items">
          {Array.from({ length: numberOfCommentCards }).map((_, index) => (
              <CommentCard key={index}/>
          ))}
        </div>
      </div>
  );
}

export default Comments;