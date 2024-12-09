import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Login,
  Page1,
  Page2,
  Page3,
  Page4,
  HomePage,
  MyStudentProfile,
  LandingPage,
  Registeration,
  NotFound,
  ScanQrCode,
  QrCode,
  StudentDetails,
}

export enum Role {
  ADMIN = 'ADMIN',
  ATTENDANCE_MANAGER = 'ATTENDANCE_MANAGER',
  CATERING_MANAGER = 'CATERING_MANAGER',
  STUDENT = 'STUDENT',
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: FC<SvgIconProps>;
  showInSidebar?: boolean;
  accessibleBy?: Role[];
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
