import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import SueroForm from './SueroForm.tsx';
import DuracionForm from './DuracionForm.tsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const GridForms: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} size={12}>
        <Grid size={4}>
          <SueroForm />
        </Grid>
        <Grid size={8} container>
          <Grid size={6}>
            <DuracionForm />
          </Grid>
          <Grid size={6}>
              <Item>size=6</Item>
          </Grid>
        </Grid>   
      </Grid>
    </Box>
  );
}

export default GridForms;
