import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const notifyInfo = (message: string) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const notifyWarning = (message: string) => {
  toast.warn(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};
