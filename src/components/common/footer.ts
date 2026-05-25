import { siteContent } from '../../config/siteContent.ts'
import footerTemplate from '../../templates/footer.html?raw'
import footerCopyrightTemplate from '../../templates/partials/footerCopyright.html?raw'
import footerProfileTemplate from '../../templates/partials/footerProfile.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

export function renderFooter(): string {
  const profileLine = fillTemplate(footerProfileTemplate, {
    text: siteContent.brand.oneLineProfile,
  })

  const copyrightLine = fillTemplate(footerCopyrightTemplate, {
    year: String(new Date().getFullYear()),
    companyName: siteContent.brand.companyName,
  })

  return fillTemplate(footerTemplate, {
    profileLine,
    copyrightLine,
  })
}
