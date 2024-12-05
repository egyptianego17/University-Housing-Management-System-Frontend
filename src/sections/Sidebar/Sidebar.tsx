import { Link, useNavigate } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import routes from '@/routes';
import useSidebar from '@/store/sidebar';
import { checkTokenStatus } from '@/api/auth';
import { useEffect, useState } from 'react';
import { Role } from '@/routes/types';

function Sidebar() {
  const [role, setRole] = useState<string | null>(null);
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRole() {
      const { role } = await checkTokenStatus();
      setRole(role);
    }
    fetchRole();
  }, []);

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
      data-pw="sidebar"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <List sx={{ flex: 1, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}>
          {Object.values(routes)
            .filter((route) => route.showInSidebar && route.accessibleBy?.includes(role as Role))
            .map(({ path, title, icon: Icon }) => (
              <ListItem sx={{ p: 0 }} key={path}>
                <ListItemButton component={Link} to={path as string} onClick={sidebarActions.close}>
                  <ListItemIcon>{Icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
                  <ListItemText>{title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <div style={{ padding: '16px', borderTop: '1px solid #ddd' }}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={() => {
              localStorage.setItem('token', '');
              localStorage.setItem('role', '');
              sidebarActions.close();
              navigate('/login');
            }}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

export default Sidebar;
