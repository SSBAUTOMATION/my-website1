import { siteContent } from '../../config/siteContent.ts'
import aboutTemplate from '../../templates/about.html?raw'
import listItemTemplate from '../../templates/partials/listItem.html?raw'
import pageTitleTemplate from '../../templates/partials/pageTitle.html?raw'
import sectionHeadingTemplate from '../../templates/partials/sectionHeading.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

export function renderAboutPage(): string {
  const missionItems = siteContent.about.mission
    .map((item) => fillTemplate(listItemTemplate, { text: item }))
    .join('')

  const visionHeading = fillTemplate(sectionHeadingTemplate, {
    text: siteContent.labels.about.visionHeading,
  })

  const missionHeading = fillTemplate(sectionHeadingTemplate, {
    text: siteContent.labels.about.missionHeading,
  })

  const pageTitle = fillTemplate(pageTitleTemplate, {
    text: siteContent.about.title,
  })

  return fillTemplate(aboutTemplate, {
    pageTitle,
    intro: siteContent.about.intro,
    detail: siteContent.about.detail,
    visionHeading,
    vision: siteContent.about.vision,
    missionHeading,
    missionItems,
  })
}
