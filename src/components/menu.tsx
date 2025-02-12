import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface MenuItemType {
  id: string;
  label: string;
  path?: string;
  icon?: string;
  children?: MenuItemType[];
  action?: () => void;
}

const menuItems: MenuItemType[] = [
  {
    id: 'administration',
    label: 'Administración',
    children: [
      { id: 'viewCitations', label: 'Vista citaciones', path: '/citations' },
      { id: 'viewResources', label: 'Vista de puestos y recursos', path: '/resources' },
      { id: 'changeCenter', label: 'Cambio de Centro', path: '/change-center' },
      { id: 'changePin', label: 'Cambio de Pin', path: '/change-pin' },
    ]
  },
  {
    id: 'reports',
    label: 'Informes',
    children: [
      { id: 'resourcesList', label: 'Listado de puestos y recursos', path: '/reports/resources' },
      { id: 'citationsList', label: 'Listado Citaciones Pacientes', path: '/reports/citations' },
    ]
  },
  {
    id: 'window',
    label: 'Ventana',
    children: [
      { id: 'cascade', label: 'Cascada' },
      { id: 'normal', label: 'Normal' },
      { id: 'toolbar', label: 'Barra de Herramientas' },
    ]
  },
  {
    id: 'help',
    label: 'Ayuda',
    children: [
      { id: 'help', label: 'Ayuda', path: '/help' },
      { id: 'about', label: 'Acerca de...', path: '/about' },
    ]
  },
];

const MainAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuId: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menuId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleMenuItemClick = (path?: string, action?: () => void) => {
    if (path) {
      navigate(path);
    } else if (action) {
      action();
    }
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HDIA
        </Typography>
        
        {menuItems.map((menu) => (
          <React.Fragment key={menu.id}>
            <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, menu.id)}
            >
              {menu.label}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={currentMenu === menu.id}
              onClose={handleMenuClose}
            >
              {menu.children?.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.path, item.action)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default  MainAppBar;