import type { NavItem } from '../../config/siteContent'
import headerTemplate from '../../templates/header.html?raw'
import navLinkTemplate from '../../templates/partials/navLink.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

export function renderHeader(activePath: string, nav: NavItem[], brandName: string): string {
  const links = nav
    .map((item) => {
      const isActive = item.path === activePath
      return fillTemplate(navLinkTemplate, {
        path: item.path,
        label: item.label,
        currentAttr: isActive ? ' aria-current="page"' : '',
      })
    })
    .join('')

  return fillTemplate(headerTemplate, {
    brandName,
    links,
  })
}
