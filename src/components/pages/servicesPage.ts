import { siteContent } from '../../config/siteContent.ts'
import servicesTemplate from '../../templates/services.html?raw'
import listItemTemplate from '../../templates/partials/listItem.html?raw'
import pageTitleTemplate from '../../templates/partials/pageTitle.html?raw'
import sectionHeadingTemplate from '../../templates/partials/sectionHeading.html?raw'
import serviceCardTemplate from '../../templates/partials/serviceCard.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

export function renderServicesPage(): string {
  const serviceCards = siteContent.services
    .map((service) =>
      fillTemplate(serviceCardTemplate, {
        title: service.title,
        description: service.description,
      }),
    )
    .join('')

  const whyChooseItems = siteContent.whyChoose
    .map((item) => fillTemplate(listItemTemplate, { text: item }))
    .join('')

  const whyChooseHeading = fillTemplate(sectionHeadingTemplate, {
    text: siteContent.labels.services.whyChooseHeading,
  })

  const pageTitle = fillTemplate(pageTitleTemplate, {
    text: siteContent.labels.services.pageTitle,
  })

  return fillTemplate(servicesTemplate, {
    pageTitle,
    serviceCards,
    whyChooseHeading,
    whyChooseItems,
  })
}
