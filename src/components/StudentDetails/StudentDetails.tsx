import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaBuilding,
  FaDoorClosed,
  FaLayerGroup,
} from 'react-icons/fa';
import useTheme from '@/store/theme';
import { StudentProfileInterface } from '@/api/student';

interface StudentDetailsPropsI {
  children?: any;
  studentData: StudentProfileInterface | null;
}

function StudentDetails({ children, studentData }: StudentDetailsPropsI) {
  const fullName = [studentData?.firstName, studentData?.middleName, studentData?.lastName].join(
    ' ',
  );
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div
      dir="rtl"
      className={`flex items-center justify-center ${
        isDarkMode ? 'dark' : ''
      } bg-gray-100 dark:bg-gray-900 transition-all duration-300`}
    >
      <div className="bg-white dark:bg-gray-900 w-full max-w-md transition-all duration-300">
        <div className="space-y-4">
          <ProfileField icon={<FaUser />} label="الاسم بالكامل" value={fullName} />
          <ProfileField
            icon={<FaEnvelope />}
            label="البريد الإلكتروني"
            value={studentData?.email}
          />
          <ProfileField icon={<FaPhone />} label="رقم الهاتف" value={studentData?.mobileNumber} />
          <ProfileField icon={<FaIdCard />} label="الرقم القومي" value={studentData?.nationalId} />
          <ProfileField icon={<FaBuilding />} label="الكلية" value={studentData?.faculty} />
          <ProfileField icon={<FaDoorClosed />} label="الغرفة" value={studentData?.room} />
          <ProfileField icon={<FaLayerGroup />} label="الطابق" value={studentData?.floor + ''} />

          {children && children}
        </div>
      </div>
    </div>
  );
}

interface ProfileFieldProps {
  label: string;
  value: string | undefined;
  icon: React.ReactNode;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value, icon }: ProfileFieldProps) => (
  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
    <div className="text-blue-600 dark:text-blue-400">{icon}</div>
    <div className="flex-1">
      <div className="text-gray-700 dark:text-gray-300 font-semibold">{label}:</div>
      <div className="text-gray-900 dark:text-white">{value}</div>
    </div>
  </div>
);

export default StudentDetails;
