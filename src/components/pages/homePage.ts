import { siteContent } from '../../config/siteContent.ts'
import homeTemplate from '../../templates/home.html?raw'
import actionButtonTemplate from '../../templates/partials/actionButton.html?raw'
import highlightCardTemplate from '../../templates/partials/highlightCard.html?raw'
import listItemTemplate from '../../templates/partials/listItem.html?raw'
import pageTitleTemplate from '../../templates/partials/pageTitle.html?raw'
import sectionHeadingTemplate from '../../templates/partials/sectionHeading.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

export function renderHomePage(): string {
  const heroButtons = [
    fillTemplate(actionButtonTemplate, {
      variantClass: 'btn-primary',
      href: '/contact',
      extraAttrs: ' data-link',
      label: siteContent.hero.primaryButton,
    }),
    fillTemplate(actionButtonTemplate, {
      variantClass: 'btn-outline',
      href: '/contact',
      extraAttrs: ' data-link',
      label: siteContent.hero.secondaryButton,
    }),
  ].join('')

  const highlightCards = siteContent.highlights
    .map((item) => fillTemplate(highlightCardTemplate, { text: item }))
    .join('')

  const serviceChips = siteContent.services
    .slice(0, 4)
    .map((service) => fillTemplate(listItemTemplate, { text: service.title }))
    .join('')

  const pageTitle = fillTemplate(pageTitleTemplate, {
    text: siteContent.hero.heading,
  })

  const welcomeHeading = fillTemplate(sectionHeadingTemplate, {
    text: siteContent.welcome.title,
  })

  const highlightsHeading = fillTemplate(sectionHeadingTemplate, {
    text: siteContent.labels.home.highlightsHeading,
  })

  const coreServicesHeading = fillTemplate(sectionHeadingTemplate, {
    text: siteContent.labels.home.coreServicesHeading,
  })

  return fillTemplate(homeTemplate, {
    tagline: siteContent.brand.tagline,
    pageTitle,
    subheading: siteContent.hero.subheading,
    heroButtons,
    welcomeHeading,
    welcomeBody: siteContent.welcome.body,
    welcomeValues: siteContent.welcome.values,
    highlightsHeading,
    coreServicesHeading,
    highlightCards,
    serviceChips,
  })
}
