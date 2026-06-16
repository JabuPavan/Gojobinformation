import React from 'react';
import Login from './Login';

// Since the new flow is unified (Mobile -> OTP -> Setup Profile/Password),
// Register and Login use the exact same component logic to simulate the modern Auth flow.
const Register = () => {
  return <Login />;
};

export default Register;
