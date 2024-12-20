import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';
import { Pages, Role, Routes } from './types';

const routes: Routes = {
  [Pages.Login]: {
    component: asyncComponentLoader(() => import('@/pages/LoginPage')),
    path: '/login',
    title: 'Login',
    icon: HomeIcon,
    showInSidebar: true,
  },
  [Pages.LandingPage]: {
    component: asyncComponentLoader(() => import('@/pages/LandingPage')),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
    showInSidebar: true,
  },
  [Pages.ScanQrCode]: {
    component: asyncComponentLoader(() => import('@/pages/AttendanceScanner')),
    path: '/attendance-manager/scan',
    title: 'Scan Attendance',
    showInSidebar: true,
    accessibleBy: [Role.ATTENDANCE_MANAGER],
  },
  [Pages.StudentDetails]: {
    component: asyncComponentLoader(() => import('@/pages/StudentDetailsPage')),
    path: '/attendance-manager/student-details/:id',
    title: 'Student Details',
    showInSidebar: false,
    accessibleBy: [Role.ATTENDANCE_MANAGER],
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
    showInSidebar: true,
  },
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/pages/Page3')),
    path: '/page-3',
    title: 'Page 3',
    icon: TerrainIcon,
    showInSidebar: true,
  },
  [Pages.Page4]: {
    component: asyncComponentLoader(() => import('@/pages/Page4')),
    path: '/page-4',
    title: 'Page 4',
    icon: BugReportIcon,
    showInSidebar: true,
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
    showInSidebar: true,
    accessibleBy: [Role.STUDENT],
  },
  [Pages.Registeration]: {
    component: asyncComponentLoader(() => import('@/pages/RegisteratonPage')),
    path: '/student/register',
    title: 'Registeration',
    icon: HomeIcon,
    showInSidebar: true,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
    showInSidebar: true,
  },
  [Pages.QrCode]: {
    component: asyncComponentLoader(() => import('@/pages/QrCode')),
    path: '/student/getQrCode',
    title: 'QR Code',
    showInSidebar: true,
    accessibleBy: [Role.STUDENT],
  },
};

export default routes;
