import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const sampleForecast = JSON.parse(
  readFileSync(fileURLToPath(new URL("../fixtures/sample-forecast.json", import.meta.url)), "utf8"),
);

export function getForecast() {
  return sampleForecast.forecast;
}
