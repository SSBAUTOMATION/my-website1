import { siteContent } from '../config/siteContent.ts'
import { renderFooter } from './common/footer.ts'
import { renderHeader } from './common/header.ts'
import { renderAboutPage } from './pages/aboutPage.ts'
import { renderContactPage } from './pages/contactPage.ts'
import { renderClientsPage } from './pages/clientsPage.ts'
import { renderHomePage } from './pages/homePage.ts'
import { renderProjectsPage } from './pages/projectsPage.ts'
import { renderServicesPage } from './pages/servicesPage.ts'
import layoutTemplate from '../templates/layout.html?raw'
import { fillTemplate } from '../utils/fillTemplate.ts'

function renderCurrentPage(path: string): string {
  if (path === '/about') {
    return renderAboutPage()
  }

  if (path === '/services') {
    return renderServicesPage()
  }

  if (path === '/contact') {
    return renderContactPage()
  }

  if (path === '/projects') {
    return renderProjectsPage(siteContent.labels.placeholderPages.projectsTitle)
  }

  if (path === '/clients' || path === '/gallery') {
    return renderClientsPage()
  }


  return renderHomePage()
}

export function createCompanyLayout(activePath: string): string {
  return fillTemplate(layoutTemplate, {
    header: renderHeader(activePath, siteContent.nav, siteContent.brand.companyName),
    page: renderCurrentPage(activePath),
    footer: renderFooter(),
  })
}
