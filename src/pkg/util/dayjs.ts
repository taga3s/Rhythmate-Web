import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale(ja);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo"); // tz()のデフォルトを設定

export const now = () => {
  return dayjs.tz().format();
};

// UTCをJSTに変換する
export const convertUTCtoJST = (date: string) => {
  return dayjs(date).tz().format();
};

// 単純フォーマット系
export const formatDate = (date: string) => {
  return dayjs(date).tz().format("YYYY-MM-DD");
};

export const formatDateTime = (date: string) => {
  return dayjs(date).tz().format("YYYY-MM-DD HH:mm:ss");
};

export const formatDateTimeOnlyDate = (dateTimeString: string) => {
  return dayjs(dateTimeString).tz().format("YYYY-MM-DD");
};

export const formatDateTimeOnlyTime = (date: string) => {
  return dayjs(date).tz().format("HH:mm");
};

export const formatDateJP = (date: string) => {
  return dayjs(date).tz().format("YYYY年MM月DD日");
};

export const formatDateTimeJP = (date: string) => {
  return dayjs(date).tz().format("MM/DD");
};

// 演算込みのフォーマット系
export const formatDateTimeWithAddMinutes = (date: string, minutes: number) => {
  return dayjs(date).tz().add(minutes, "m").format("YYYY-MM-DD HH:mm:ss");
};

export const formatDateTimeWithSubtract = (date: string, minutes: number) => {
  return dayjs(date).tz().subtract(minutes, "m").format("YYYY-MM-DD HH:mm:ss");
};

// 曜日取得系（日・英）
export const getToday = () => {
  return dayjs().tz().format("ddd");
};

export const getTodayEn = () => {
  return dayjs().tz().locale("en").format("ddd");
};

export const isBefore = (dateTimeString: string) => {
  return dayjs().tz().isBefore(dateTimeString);
};
