import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <button onClick={() => navigate('/')} type='button'>
      Go back
    </button>
  );
};

export default GoBackButton;