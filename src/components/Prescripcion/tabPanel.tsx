import React from 'react';
import { Box } from '@mui/material';

interface props {
  children: React.ReactNode;
  index: number;
} 

const TabPanel: React.FC<props> = ({ children, index}) => {        
  
  return (
    <div  role="tabpanel"                
          id={`tab-panel-${index}`}        
          aria-labelledby={`tab-${index}`}               
    >                
      <Box p={3}>                        
        {children}                
       </Box>
    </div>       
  );
};

export default TabPanel;