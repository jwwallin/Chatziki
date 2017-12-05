import React from 'react';

const Message = ({ username, content }) => (
  <div>
    <div className='message-title'>
      {username}
    </div>
    <div className='message-content'>
      {content}
    </div>
  </div>
);

export default Message;