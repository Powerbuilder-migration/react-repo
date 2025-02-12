import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import TabPanel from './tabPanel.tsx';

interface props {
  children: React.ReactNode;
} 


const MainForm: React.FC<props> = ({ children }) => {

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={0}  aria-label="Prescripción Medica">                
        <Tab label="Prescripción Medica" />                           
      </Tabs>            
      <TabPanel index={0}>          
        {children}
      </TabPanel>         
     </Box>)
}

export default MainForm