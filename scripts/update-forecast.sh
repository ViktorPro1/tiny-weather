#!/usr/bin/env bash
set -e

mkdir -p out
node --input-type=module -e 'import { readFileSync, writeFileSync } from "node:fs"; const data = JSON.parse(readFileSync("fixtures/sample-forecast.json", "utf8")); const text = data.forecast.map(({ date, temperature }) => `${date}: ${temperature}`).join("\n") + "\n"; writeFileSync("out/forecast.txt", text);'
node scripts/check-format.js fixtures/sample-forecast.json
diff -u fixtures/expected.txt out/forecast.txt
