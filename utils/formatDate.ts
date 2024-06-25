import { format, parse } from "date-fns";

export default function formatDate(releaseDate: string) {
  const date = parse(releaseDate, "yyyy-MM-dd", new Date());
  const formattedDate = format(date, "d MMMM y");
  return formattedDate;
}
