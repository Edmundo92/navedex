export function calcAgeOrYear(date: string) {
  const currentYear = new Date();
  const d = new Date(date);

  let result = currentYear.getFullYear() - d.getFullYear();

  if (result == 0) {
    result = currentYear.getMonth() - d.getMonth();
  }

  return result;
}
