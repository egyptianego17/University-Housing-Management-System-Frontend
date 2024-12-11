import { MealsI } from '@/pages/StudentDetailsPage/StudentDetailsPage';
import useTheme from '@/store/theme';
import { Checkbox } from '@mui/material';

interface PropsI {
  meals: MealsI;
  setMeals: React.Dispatch<React.SetStateAction<MealsI>>;
}
interface ItemPropsI extends PropsI {
  mealName: string;
}

export default function MealsCheckBox({ meals, setMeals }: PropsI) {
  return (
    <div className="space-y-4 w-full max-w-md transition-all duration-300">
      <div
        dir="rtl"
        className="flex flex-col p-4 rounded-lg shadow-md dark:bg-gray-700 dark:text-white bg-gray-50 text-gray-600"
      >
        <div className="font-semibold">الوجبات:</div>
        <div className="space-y-2">
          <div className="flex items-center">
            <CheckboxItem meals={meals} setMeals={setMeals} mealName="الإفطار" />
          </div>
          <div className="flex items-center">
            <CheckboxItem meals={meals} setMeals={setMeals} mealName="الغداء" />
          </div>
          <div className="flex items-center">
            <CheckboxItem meals={meals} setMeals={setMeals} mealName="العشاء" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckboxItem({ meals, setMeals, mealName }: ItemPropsI) {
  const [theme] = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="flex items-center">
      <Checkbox
        id={mealName}
        color={isDarkMode ? 'info' : 'primary'}
        value={meals.tookBreakfast}
        onChange={(e) => {
          setMeals((old) => {
            return { ...old, tookBreakfast: e.target.checked };
          });
        }}
      />
      <label htmlFor={mealName} className="ml-2">
        {mealName}
      </label>
    </div>
  );
}
