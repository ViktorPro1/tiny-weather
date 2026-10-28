export function formatForecastDate(date) {
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error("Forecast date must be YYYY-MM-DD");
  }

  return date;
}
