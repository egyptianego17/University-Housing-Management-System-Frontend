import { checkTokenStatus } from '@/api/auth';

export default async function authorize(authorizedRole: string): Promise<boolean> {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  const { status, role } = await checkTokenStatus();
  return status === 'Token is valid' && role === authorizedRole;
}
