import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { format as formatIsoDate } from "./dates/iso.js";
import { format as formatLocalDate } from "./dates/legacy.js";

const sampleForecast = JSON.parse(
  readFileSync(fileURLToPath(new URL("../fixtures/sample-forecast.json", import.meta.url)), "utf8"),
);

export function getForecast({ from, to } = {}) {
  const startDate = from === undefined ? undefined : formatIsoDate(from);
  const endDate = to === undefined ? undefined : formatIsoDate(to);

  return sampleForecast.forecast.filter(({ date }) => {
    const forecastDate = formatLocalDate(date);
    return (startDate === undefined || forecastDate >= startDate)
      && (endDate === undefined || forecastDate <= endDate);
  });
}
