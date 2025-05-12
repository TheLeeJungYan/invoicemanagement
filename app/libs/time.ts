export function formatDate(date: Date, timeZone: string = 'Asia/Kuala_Lumpur'): string {
  const formatter = new Intl.DateTimeFormat('en-MY', {
    timeZone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const formatted = formatter.format(date);
  return formatted;
}
