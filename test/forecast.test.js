import { test } from "node:test";
import assert from "node:assert/strict";
import { getForecast } from "../src/forecast.js";
import { format as formatLegacyDate } from "../src/dates/legacy.js";
import { format as formatIsoDate } from "../src/dates/iso.js";

test("filters inclusively through the 29th day", () => {
  assert.deepEqual(getForecast({ from: "2026-10-29", to: "2026-10-29" }), [
    { date: "2026-10-29", temperature: 18 },
  ]);
});

test("keeps the London calendar day at the March 29 DST boundary", () => {
  const instant = "2026-03-29T00:30:00Z";

  assert.equal(formatIsoDate(instant), "2026-03-29");
  assert.equal(formatLegacyDate(instant, { zone: "Europe/London" }), "2026-03-29");
});
