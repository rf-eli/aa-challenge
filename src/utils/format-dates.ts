const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDateAsString(date: Date): string {
  const fullDate = new Date(date);
  const month = monthNames[fullDate.getMonth()];

  return `${month} ${fullDate.getUTCDate()}, ${fullDate.getFullYear()}`;
}
