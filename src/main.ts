import './style.css'
import { createCompanyLayout } from './components/companyLayout.ts'
import { initializeHeaderMenu } from './components/common/header.ts'
import { initializeProjectsSlider } from './components/pages/projectsPage.ts'
import { siteContent } from './config/siteContent.ts'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Missing #app root element')
}

const root = app
let destroyPageInteractions: (() => void) | null = null

const routes = siteContent.nav.map((item) => item.path)

function applySeoMeta() {
  document.title = siteContent.seo.title

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (description) {
    description.content = siteContent.seo.description
  }

  const keywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]')
  if (keywords) {
    keywords.content = siteContent.seo.keywords
  }
}

function render(pathname: string) {
  destroyPageInteractions?.()
  root.innerHTML = createCompanyLayout(pathname)
  destroyPageInteractions = initializeProjectsSlider(root)
  initializeHeaderMenu(root)
}

globalThis.addEventListener('click', (event) => {
  const target = event.target as HTMLElement
  const link = target.closest('a[data-link]') as HTMLAnchorElement | null
  if (!link) {
    return
  }

  event.preventDefault()
  const nextPath = link.getAttribute('href') ?? '/home'
  history.pushState({}, '', nextPath)
  render(nextPath)
})

globalThis.addEventListener('popstate', () => {
  render(globalThis.location.pathname)
})

if (!routes.includes(globalThis.location.pathname)) {
  history.replaceState({}, '', '/home')
}

applySeoMeta()
render(globalThis.location.pathname)
