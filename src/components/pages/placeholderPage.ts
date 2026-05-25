import { siteContent } from '../../config/siteContent.ts'
import placeholderTemplate from '../../templates/placeholder.html?raw'
import pageTitleTemplate from '../../templates/partials/pageTitle.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

export function renderPlaceholderPage(title: string): string {
  const pageTitle = fillTemplate(pageTitleTemplate, {
    text: title,
  })

  return fillTemplate(placeholderTemplate, {
    pageTitle,
    description: siteContent.labels.placeholderPages.defaultDescription,
  })
}
