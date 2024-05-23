import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <SignIn path="/login" routing="path" />
    </div>
  );
};

export default Login;
