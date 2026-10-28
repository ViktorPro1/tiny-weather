import { readFileSync } from "node:fs";
import { formatForecastDate } from "../src/format.js";

try {
  const filePath = process.argv[2];
  if (!filePath) {
    throw new Error("Usage: node scripts/check-format.js <json-file>");
  }

  const data = JSON.parse(readFileSync(filePath, "utf8"));
  if (!Array.isArray(data.forecast)) {
    throw new Error("Forecast must contain a forecast array");
  }

  for (const day of data.forecast) {
    formatForecastDate(day.date);
  }

  console.log("OK");
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
