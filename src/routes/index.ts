import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Login]: {
    component: asyncComponentLoader(() => import('@/pages/LoginPage')),
    path: '/login',
    title: 'Login',
    icon: HomeIcon,
    showInSidebar: false,
  },
  [Pages.LandingPage]: {
    component: asyncComponentLoader(() => import('@/pages/LandingPage')),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
    showInSidebar: false,
  },
  [Pages.ScanQrCode]: {
    component: asyncComponentLoader(() => import('@/pages/AttendanceScanner')),
    path: '/scan-attendance',
    title: 'Scan Attendance',
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/Page1')),
    path: '/page-1',
    title: 'Page 1',
    icon: GitHubIcon,
    showInSidebar: true,
  },
  [Pages.Page2]: {
    component: asyncComponentLoader(() => import('@/pages/Page2')),
    path: '/page-2',
    title: 'Page 2',
    icon: AddTaskIcon,
    showInSidebar: false,
  },
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/pages/Page3')),
    path: '/page-3',
    title: 'Page 3',
    icon: TerrainIcon,
    showInSidebar: false,
  },
  [Pages.Page4]: {
    component: asyncComponentLoader(() => import('@/pages/Page4')),
    path: '/page-4',
    title: 'Page 4',
    icon: BugReportIcon,
    showInSidebar: false,
  },
  [Pages.HomePage]: {
    component: asyncComponentLoader(() => import('@/pages/HomePage')),
    path: '/home',
    title: 'Home',
    icon: HomeIcon,
    showInSidebar: true,
  },
  [Pages.MyStudentProfile]: {
    component: asyncComponentLoader(() => import('@/pages/MyStudentProfile')),
    path: '/student/myprofile',
    title: 'My Profile',
    icon: HomeIcon,
    showInSidebar: false,
  },
  [Pages.Registeration]: {
    component: asyncComponentLoader(() => import('@/pages/RegisteratonPage')),
    path: '/student/register',
    title: 'Registeration',
    icon: HomeIcon,
    showInSidebar: false,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
    showInSidebar: false,
  },
  [Pages.QrCode]: {
    component: asyncComponentLoader(() => import('@/pages/QrCode')),
    path: '/student/getQrCode',
    title: 'QR Code',
    showInSidebar: true,
  },
};

export default routes;
