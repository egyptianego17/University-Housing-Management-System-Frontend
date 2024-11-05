import React, { useEffect, useState } from 'react';
import { getMyStudentProfile } from '@/api/student/studentApi';
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaBuilding, FaDoorClosed, FaLayerGroup } from 'react-icons/fa';
import useTheme from '@/store/theme';

interface UserProfileData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  nationalId: string;
  faculty: string;
  room: string;
  floor: number;
}

const UserProfile: React.FC = () => {
  const [profileData, setProfileData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await getMyStudentProfile();
        setProfileData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError('تعذر تحميل البيانات. حاول مرة أخرى.');
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          جاري تحميل البيانات...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 bg-red-100 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 transition-all duration-300 pb-10`}
    >
      <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md transition-all duration-300">
        <div className="text-center mb-6">
          <FaUser size={50} className="mb-3 text-blue-600 dark:text-blue-400 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">الملف الشخصي</h2>
        </div>

        <div className="space-y-4">
          {profileData && (
            <>
              <ProfileField icon={<FaUser />} label="الاسم الأول" value={profileData.firstName} />
              <ProfileField icon={<FaUser />} label="الاسم الأوسط" value={profileData.middleName} />
              <ProfileField icon={<FaUser />} label="اسم العائلة" value={profileData.lastName} />
              <ProfileField icon={<FaEnvelope />} label="البريد الإلكتروني" value={profileData.email} />
              <ProfileField icon={<FaPhone />} label="رقم الهاتف" value={profileData.mobileNumber} />
              <ProfileField icon={<FaIdCard />} label="الرقم القومي" value={profileData.nationalId} />
              <ProfileField icon={<FaBuilding />} label="الكلية" value={profileData.faculty} />
              <ProfileField icon={<FaDoorClosed />} label="الغرفة" value={profileData.room} />
              <ProfileField icon={<FaLayerGroup />} label="الطابق" value={profileData.floor.toString()} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProfileFieldProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value, icon }) => (
  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
    <div className="text-blue-600 dark:text-blue-400">{icon}</div>
    <div className="flex-1">
      <div className="text-gray-700 dark:text-gray-300 font-semibold">{label}:</div>
      <div className="text-gray-900 dark:text-white">{value}</div>
    </div>
  </div>
);

export default UserProfile;
