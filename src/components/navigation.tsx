import React from 'react';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action: string) => {
    handleMenuClose();
    switch (action) {
      case 'add':
        navigate('/medical-order/new');
        break;
      case 'delete':
        navigate('/medical-order/delete');
        break;
      // Add other navigation cases
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Medical Orders
        </Typography>
        
        <Button
          color="inherit"
          onClick={handleMenuOpen}
        >
          Actions
        </Button>
        
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleAction('add')}>Add</MenuItem>
          <MenuItem onClick={() => handleAction('delete')}>Delete</MenuItem>
          <MenuItem onClick={() => handleAction('suspend')}>Suspend/Activate</MenuItem>
          <MenuItem onClick={() => handleAction('protocol')}>Protocol</MenuItem>
          <MenuItem onClick={() => handleAction('allergies')}>Allergies</MenuItem>
          <MenuItem onClick={() => handleAction('history')}>History</MenuItem>
          {/* Add other menu items */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;