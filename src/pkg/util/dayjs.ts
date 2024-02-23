import dayjs from "dayjs";
import ja from "dayjs/locale/ja";

dayjs.locale(ja);

export const getNow = () => {
  return dayjs().format();
};

export const formatDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const formatDateToTime = (date: string) => {
  return dayjs(date).format("HH:mm");
};

export const isBefore = (date1: string, date2: string) => {
  console.log(dayjs(date1).isBefore(date2));
  return dayjs(date1).isBefore(date2);
};
