import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale(ja);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export const now = () => {
  return dayjs().format();
};

// UTCをJSTに変換する
export const convertUTCtoJST = (date: string) => {
  return dayjs(date).tz().format();
};

// 単純フォーマット系
export const formatDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const formatDateWithTime = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

export const formatDateToTime = (date: string) => {
  return dayjs(date).format("HH:mm");
};

export const formatDateJP = (date: string) => {
  return dayjs(date).format("YYYY年MM月DD日");
};

// 演算込みのフォーマット系
export const formatDateWithAddMinutes = (date: string, minutes: number) => {
  return dayjs(date).add(minutes, "m").format("YYYY-MM-DD HH:mm:ss");
};

export const formatDateWithSubtract = (date: string, minutes: number) => {
  return dayjs(date).subtract(minutes, "m").format("YYYY-MM-DD HH:mm:ss");
};

// 曜日取得系（日・英）
export const getToday = () => {
  return dayjs().format("ddd");
};

export const getTodayEn = () => {
  return dayjs().locale("en").format("ddd");
};
