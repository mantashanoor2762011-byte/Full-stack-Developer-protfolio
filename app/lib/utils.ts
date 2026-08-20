export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatProficiency(value: number): string {
  return `${Math.min(100, Math.max(0, value))}%`;
}