import dayjs from "dayjs";
import ja from "dayjs/locale/ja";

dayjs.locale(ja);

export const now = () => {
  return dayjs().format();
};

export const formatDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const formatDateWithAddMinutes = (date: string, minutes: number) => {
  return dayjs(date).add(minutes, "m").format("YYYY-MM-DD HH:mm:ss");
};

export const formatDateWithSubtract = (date: string, minutes: number) => {
  return dayjs(date).subtract(minutes, "m").format("YYYY-MM-DD HH:mm:ss");
};

export const formatDateToTime = (date: string) => {
  return dayjs(date).format("HH:mm");
};

export const formatDateJP = (date: string) => {
  return dayjs(date).format("YYYY年MM月DD日");
};
