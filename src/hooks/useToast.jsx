import { Toast } from "../components/Toast";
import { toast } from "react-toastify";
import { getMessageErrorToastLogin } from "../utils/ReturnMessageToast";

export const useToast = () => {

  const errorToast = (message) => {
    toast.error(getMessageErrorToastLogin(message), {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const successToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return {
    errorToast,
    Toast,
    successToast,
  };
};
