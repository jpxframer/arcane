/** Join conditional class names. Keeps component APIs tidy without a dependency. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
