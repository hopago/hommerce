export function calculateEachPert(
  recorded: Record<string, number>,
  total: number
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const key in recorded) {
    result[key] = (recorded[key] / total) * 100;
  }
  return result;
}

export function findMostFrequentKeyword(recorded: Record<string, number>): string {
  return Object.entries(recorded).reduce(
    ([keyA, valA], [keyB, valB]) => (Number(valA) > Number(valB) ? keyA : keyB),
    Object.keys(recorded)[0]
  );
}
