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

export function initializeHeaderMenu(container: HTMLElement): void {
  const header = container.querySelector<HTMLElement>('.ssb-header')
  const menu = container.querySelector<HTMLElement>('.ssb-menu')
  const toggle = container.querySelector<HTMLButtonElement>('.ssb-menu-toggle')

  if (!header || !menu || !toggle) {
    return
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!expanded))
    menu.setAttribute('aria-expanded', String(!expanded))
    menu.classList.toggle('ssb-menu--open', !expanded)
  })
}
