import { Scanner, IDetectedBarcode } from '@yudiel/react-qr-scanner';

interface IProbs {
  onScan: (result: IDetectedBarcode[]) => void;
  onError?: (error: unknown) => void;
  isDarkMode: boolean;
}

function QrScanner({ onScan, isDarkMode, onError }: IProbs) {
  return (
    <div
      className={`flex flex-col items-center justify-between p-7 gap-6 m-4 ${
        isDarkMode ? 'dark' : ''
      } bg-gray-100 dark:bg-gray-800 transition-all duration-300 rounded-xl sm:m-6`}
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
        ماسح رمز الاستجابة السريعة
      </h2>
      <div className="rounded-full">
        <Scanner
          classNames={{ container: '', video: 'max-w-72 max-h-68 rounded-xl' }}
          onScan={onScan}
          onError={onError}
          allowMultiple
        />
      </div>
    </div>
  );
}

export default QrScanner;
