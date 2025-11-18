/**
 * Very simple helper that masks a password (for logging purposes).
 */
export function maskPassword(password: string): string {
  if (!password) return '';
  const visiblePart = password.slice(0, 2);
  const masked = '*'.repeat(Math.max(password.length - 2, 0));
  return visiblePart + masked;
}

/**
 * Convert a string to Title Case.
 */
export function toTitleCase(text: string): string {
  return text
    .split(' ')
    .filter(Boolean)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
