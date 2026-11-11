/**
 * Adds the closing period to a paragraph unless it already ends in punctuation
 * (. ! ? … : ;) or a closing quote/parenthesis that follows one.
 */
export function sentence(text: string): string {
  const value = text.trimEnd();
  if (!value || /[.!?…:;]["”»)]?$/.test(value)) return value;
  return `${value}.`;
}
