import { siteContent } from '../../config/siteContent.ts'
import contactTemplate from '../../templates/contact.html?raw'
import actionButtonTemplate from '../../templates/partials/actionButton.html?raw'
import listItemTemplate from '../../templates/partials/listItem.html?raw'
import pageTitleTemplate from '../../templates/partials/pageTitle.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

export function renderContactPage(): string {
  const whatsappNumber = siteContent.contact.quickActions.whatsapp.replace(/\D/g, '')
  const whatsappMessage = encodeURIComponent(siteContent.contact.quickActions.whatsappMessage)
  const callNumber = siteContent.contact.quickActions.call.replace(/\s+/g, '')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const callUrl = `tel:${callNumber}`

  const quickActionButtons = [
    fillTemplate(actionButtonTemplate, {
      variantClass: 'btn-whatsapp',
      href: whatsappUrl,
      extraAttrs: ' target="_blank" rel="noopener noreferrer"',
      label: siteContent.labels.contact.whatsappButton,
    }),
    fillTemplate(actionButtonTemplate, {
      variantClass: 'btn-call',
      href: callUrl,
      extraAttrs: '',
      label: siteContent.labels.contact.callButton,
    }),
  ].join('')

  const servicesListItems = siteContent.labels.contact.serviceBullets
    .map((service) => fillTemplate(listItemTemplate, { text: service }))
    .join('')

  const pageTitle = fillTemplate(pageTitleTemplate, {
    text: siteContent.labels.contact.pageTitle,
  })

  const intro = siteContent.labels.contact.intro.replace('{{companyName}}', siteContent.brand.companyName)

  return fillTemplate(contactTemplate, {
    pageTitle,
    intro,
    servicesHeading: siteContent.labels.contact.servicesHeading,
    reachUsHeading: siteContent.labels.contact.reachUsHeading,
    quickActionButtons,
    servicesListItems,
    phone: siteContent.contact.phone,
    email: siteContent.contact.email,
    locationHtml: siteContent.contact.location,
  })
}
