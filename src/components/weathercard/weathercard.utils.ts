import { parseISO } from "date-fns";

export const ISOStringToDateString = (date: string) => {
  // Consider that the date is in ISOString format and the day can have leading 0 or the hour or the minutes can have leading 0
  const parsedDate = parseISO(date);
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = parsedDate.getFullYear();
  const hour = parsedDate.getHours().toString().padStart(2, "0");
  const minute = parsedDate.getMinutes().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hour}:${minute}`;
};
