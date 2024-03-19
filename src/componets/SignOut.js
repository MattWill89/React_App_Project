import React from 'react';
import './styles/SignOut.css'; // Import CSS file

const SignOut = ({ onSignOut }) => {
  return (
    <div className="sign-out">
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
