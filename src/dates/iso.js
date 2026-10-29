export function format(day) {
  return new Date(day).toISOString().slice(0, 10);
}
