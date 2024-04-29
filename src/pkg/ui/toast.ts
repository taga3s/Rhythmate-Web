import toast from "react-hot-toast";

export const notifySuccess = (msg: string) => toast.success(msg);
export const notifyFailed = (msg: string) => toast.error(msg);
export const notifyLoading = (msg: string) => toast.loading(msg);

type Status = "success" | "error" | "loading";

export const notifyWithToast = (options: { status: Status; msg: string }) => {
  if (options.status === "success") {
    notifySuccess(options.msg);
  }
  if (options.status === "error") {
    notifyFailed(options.msg);
  }
  if (options.status === "loading") {
    notifyLoading(options.msg);
  }
};
