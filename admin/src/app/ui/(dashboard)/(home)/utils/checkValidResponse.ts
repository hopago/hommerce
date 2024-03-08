export function checkValidResponse(res: any[] | null | undefined) {
  if (!res) return false;

  return Array.isArray(res) && res.length;
}
