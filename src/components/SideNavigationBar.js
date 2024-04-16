import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './SideNavigationBar.css';
import { Security, AltRoute, Warehouse, PieChart, Inventory, LocalShipping, Engineering, Analytics, Logout } from '@mui/icons-material';
import { useEffect } from 'react';

export default function SideNavigation() {

  const [selectedComponent, setSelectedComponent] = React.useState('');

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  const handleLogout = () => {
    window.location.href = '/Login';
  };

  useEffect(() => {
    // Highlight the correct component when the route changes
    const currentPath = window.location.pathname;
    if (currentPath === '/Dashboard' && selectedComponent !== 'Dashboard') {
      setTimeout(() => setSelectedComponent('Dashboard'), 100);
    } else if ((currentPath === '/DivisionManagement' || currentPath === '/AssociateClient') && selectedComponent !== 'Division') {
      setTimeout(() => setSelectedComponent('Division'), 100);
    } else if (currentPath === '/WarehouseSite' && selectedComponent !== 'Warehouse') {
      setTimeout(() => setSelectedComponent('Warehouse'), 100);
    } else if (currentPath === '/Parts' && selectedComponent !== 'Parts') {
      setTimeout(() => setSelectedComponent('Parts'), 100);
    } else if (currentPath === '/Inventory' && selectedComponent !== 'Inventory') {
      setTimeout(() => setSelectedComponent('Inventory'), 100);
    } else if (currentPath === '/Logshipment' && selectedComponent !== 'Logshipment') {
      setTimeout(() => setSelectedComponent('Logshipment'), 100);
    } else if (currentPath === '/Technician' && selectedComponent !== 'Technician') {
      setTimeout(() => setSelectedComponent('Technician'), 100);
    } else if (currentPath === '/ReconcileInventory' && selectedComponent !== 'Reconcile Inventory') {
      setTimeout(() => setSelectedComponent('Reconcile Inventory'), 100);
    } else if (currentPath === '/CustomReport' && selectedComponent !== 'Custom Report') {
      setTimeout(() => setSelectedComponent('Custom Report'), 100);
    }
  }, [selectedComponent]);
  
  return (
    <Box className='box' sx={{  bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Link to={'/Dashboard'} style={{ textDecoration: 'none'}} > 
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Dashboard' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Dashboard')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <Security className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Dashboard" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/DivisionManagement'} style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Division' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Division')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <AltRoute className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Division" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/WarehouseSite'} style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Warehouse' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Warehouse')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <Warehouse className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Warehouse" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/Parts'} style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Parts' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Parts')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <PieChart className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Parts" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Inventory' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Inventory')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <Inventory className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Inventory" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Logshipment' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Logshipment')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <LocalShipping className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Logshipment" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Technician' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Technician')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <Engineering className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Technician" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Reconcile Inventory' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Reconcile Inventory')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <Inventory className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Reconcile Inventory" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: 'none'}} >
            <ListItem disablePadding className={`sidebar-option ${selectedComponent === 'Custom Report' ? 'list-item-selected' : 'list-item'}`}
              onClick={() => handleComponentChange('Custom Report')}>
              <ListItemButton>
                <ListItemIcon className='icon'>
                  <Analytics className='icon-styling' />
                </ListItemIcon>
                <ListItemText primary="Custom Report" className="list-item-text" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding onClick={handleLogout} className='list-item'>
            <ListItemButton>
              <ListItemIcon className='icon'>
                <Logout className='icon-styling' />
              </ListItemIcon>
              <ListItemText primary="Logout" className="list-item-text" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>    
    </Box>
  );
}