import { Alert as AlertMUI } from '@mui/material';
import { AnimatePresence, motion } from 'motion/react';

function ConditionalAlert({
  condition,
  message,
  type,
}: {
  condition: boolean;
  message: string | null;
  type: 'success' | 'info' | 'warning' | 'error';
}) {
  return (
    <AnimatePresence>
      {condition ? (
        <motion.div
          className="flex justify-center mb-5"
          animate={{ y: [30, 0], opacity: [0, 1] }}
          exit={{ y: 30, opacity: 0 }}
        >
          <AlertMUI
            variant="outlined"
            severity={type}
            className="flex items-center text-red-600 dark:text-red-400 bg-red-200 dark:bg-red-800 rounded p-2 w-fit h-auto text-center"
          >
            {message}
          </AlertMUI>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ConditionalAlert;
