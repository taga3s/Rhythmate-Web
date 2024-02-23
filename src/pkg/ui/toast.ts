import toast from "react-hot-toast";

export const notifySuccess = (msg: string) => toast.success(msg);
export const notifyFailed = (msg: string) => toast.error(msg);
