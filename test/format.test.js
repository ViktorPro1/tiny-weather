import { test } from "node:test";
import assert from "node:assert/strict";
import { formatForecastDate } from "../src/format.js";

test("returns a date in YYYY-MM-DD format", () => {
  assert.equal(formatForecastDate("2026-10-28"), "2026-10-28");
});

test("throws for a date that does not match YYYY-MM-DD", () => {
  assert.throws(() => formatForecastDate("28-10-2026"), {
    name: "Error",
    message: "Forecast date must be YYYY-MM-DD",
  });
});
