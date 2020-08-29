import React from 'react';
import './App.css';
import MailBox from './components/MailBox';

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    <div className='App'>
      <MailBox unreadMessages={messages} />
    </div>
  );
}

export default App;
