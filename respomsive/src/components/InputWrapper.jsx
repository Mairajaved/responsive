import React from 'react';
import '../styles/InputWrapper.css';
import { Link } from 'react-router-dom';

function InputWrapper() {
  return (
    <div className="kotaweb">
      <input type="text" placeholder="Enter your email" />
      <Link to='/about'>
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default InputWrapper;
