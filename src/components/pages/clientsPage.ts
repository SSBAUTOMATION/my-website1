import { siteContent } from '../../config/siteContent.ts'
import clientsTemplate from '../../templates/clients.html?raw'
import pageTitleTemplate from '../../templates/partials/pageTitle.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

type ClientImage = {
  name: string
  url: string
}

const clientImageModules = import.meta.glob('../../assets/clients/*.{png,jpg,jpeg,jfif,webp,avif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function getClientName(path: string): string {
  const fileName = path.split('/').pop() ?? ''
  return fileName.replace(/\.[^.]+$/, '')
}

const clientImages: ClientImage[] = Object.entries(clientImageModules)
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([path, url]) => ({
    name: getClientName(path),
    url,
  }))

export function renderClientsPage(): string {
  const pageTitle = fillTemplate(pageTitleTemplate, {
    text: siteContent.labels.clients.pageTitle,
  })

  const clientLogos = clientImages
    .map(
      (image) => `<img
        class="client-logo"
        src="${image.url}"
        alt="${image.name} logo"
        loading="lazy"
        decoding="async"
      />`,
    )
    .join('')

  return fillTemplate(clientsTemplate, {
    pageTitle,
    intro: siteContent.labels.clients.intro,
    clientLogos,
    ctaTitle: siteContent.labels.clients.ctaTitle,
    ctaBody: siteContent.labels.clients.ctaBody,
  })
}
