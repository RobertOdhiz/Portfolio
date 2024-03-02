import React, { useState } from 'react';
import Button from './button';
import '../styles/feedback.css'

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
    setError('');
  };


  return (
    <div className='feedback'>
        <h2>Connect with me</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder='email'
        />
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder='message'
        />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button label={'Send Feedback'} link={`mailto:odhizrober254@gmail.com?subject=Feedback from Portfolio Website&body=${encodeURIComponent(feedback)}`}
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
        </svg>
      } />
    </div>
  );
};

export default Feedback;
