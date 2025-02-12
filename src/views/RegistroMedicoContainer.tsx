import React from 'react';
import { Container } from '@mui/material';
import Navigation from '../components/navigation.tsx';

const RegistroMedicoContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default RegistroMedicoContainer;