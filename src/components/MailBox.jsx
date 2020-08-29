import React from 'react';

export default function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Hello!</h2>
      {unreadMessages.length > 0 && (
        <p>
          You have <strong>{unreadMessages.length} unread messages</strong>
        </p>
      )}
    </div>
  );
}
