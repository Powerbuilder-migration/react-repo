import React from 'react';
import { Container } from '@mui/material';
import Navigation from '../components/navigation.tsx';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;