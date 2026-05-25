export function fillTemplate(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce((html, [key, value]) => {
    return html.split(`{{${key}}}`).join(value)
  }, template)
}
