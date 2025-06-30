export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function formatDatePretty(date: Date) {
  return date.toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
