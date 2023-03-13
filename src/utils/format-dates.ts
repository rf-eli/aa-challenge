export function formatDateAsString(date: Date): string {
  return date.toString().split("T")[0];
}
