import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const defaults = JSON.parse(
  readFileSync(fileURLToPath(new URL("../../config/defaults.json", import.meta.url)), "utf8"),
);

export function format(day, { zone } = {}) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: zone ?? defaults.timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(day));
}
