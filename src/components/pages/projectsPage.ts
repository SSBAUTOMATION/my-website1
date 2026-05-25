import projectsTemplate from '../../templates/projects.html?raw'
import pageTitleTemplate from '../../templates/partials/pageTitle.html?raw'
import { fillTemplate } from '../../utils/fillTemplate.ts'

type ProductImage = {
  name: string
  url: string
}

const productImageModules = import.meta.glob('../../assets/product/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function getImageNumber(path: string): number {
  const fileName = path.split('/').pop() ?? ''
  const matchedNumber = fileName.match(/\d+/)
  return matchedNumber ? Number(matchedNumber[0]) : Number.MAX_SAFE_INTEGER
}

function getImageName(path: string): string {
  const fileName = path.split('/').pop() ?? ''
  return fileName.replace(/\.[^.]+$/, '')
}

const productImages: ProductImage[] = Object.entries(productImageModules)
  .sort(([leftPath], [rightPath]) => getImageNumber(leftPath) - getImageNumber(rightPath))
  .map(([path, url]) => ({
    name: getImageName(path),
    url,
  }))

export function renderProjectsPage(title: string): string {
  const pageTitle = fillTemplate(pageTitleTemplate, {
    text: title,
  })

  const slides = productImages
    .map(
      (image, index) => `<img
        class="projects-slide${index === 0 ? ' is-active' : ''}"
        src="${image.url}"
        alt="${image.name}"
      />`,
    )
    .join('')

  const controlsHiddenClass = productImages.length <= 1 ? 'is-hidden' : ''
  const dotsHiddenClass = productImages.length <= 1 ? 'is-hidden' : ''
  const dots = productImages
    .map(
      (image, index) => `<button
        type="button"
        class="projects-dot${index === 0 ? ' is-active' : ''}"
        data-slide-index="${index}"
        aria-label="Show ${image.name}"
        aria-current="${index === 0 ? 'true' : 'false'}"
      ></button>`,
    )
    .join('')

  return fillTemplate(projectsTemplate, {
    pageTitle,
    slides,
    controlsHiddenClass,
    dotsHiddenClass,
    dots,
  })
}

export function initializeProjectsSlider(container: ParentNode): () => void {
  const slider = container.querySelector<HTMLElement>('.projects-slider')
  if (!slider) {
    return () => {}
  }

  const slides = Array.from(slider.querySelectorAll<HTMLImageElement>('.projects-slide'))
  if (slides.length === 0) {
    return () => {}
  }

  const previousButton = slider.querySelector<HTMLButtonElement>('[data-slide-control="prev"]')
  const nextButton = slider.querySelector<HTMLButtonElement>('[data-slide-control="next"]')
  const dotButtons = Array.from(slider.querySelectorAll<HTMLButtonElement>('.projects-dot'))

  let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'))
  if (activeIndex < 0) {
    activeIndex = 0
  }

  const setActiveSlide = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + slides.length) % slides.length
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === normalizedIndex)
      slide.setAttribute('aria-hidden', index === normalizedIndex ? 'false' : 'true')
    })

    dotButtons.forEach((dot, index) => {
      const isActive = index === normalizedIndex
      dot.classList.toggle('is-active', isActive)
      dot.setAttribute('aria-current', isActive ? 'true' : 'false')
    })

    activeIndex = normalizedIndex
  }

  const showRelativeSlide = (offset: number) => {
    setActiveSlide(activeIndex + offset)
  }

  let autoSlideTimer = 0

  const restartAutoSlide = () => {
    if (autoSlideTimer) {
      globalThis.clearInterval(autoSlideTimer)
    }

    autoSlideTimer = globalThis.setInterval(() => {
      showRelativeSlide(1)
    }, 3000)
  }

  const onPreviousClick = () => {
    showRelativeSlide(-1)
    if (slides.length > 1) {
      restartAutoSlide()
    }
  }

  const onNextClick = () => {
    showRelativeSlide(1)
    if (slides.length > 1) {
      restartAutoSlide()
    }
  }

  const onDotClick = (event: Event) => {
    const target = event.currentTarget as HTMLButtonElement
    const selectedIndex = Number(target.dataset.slideIndex)
    if (Number.isNaN(selectedIndex)) {
      return
    }

    setActiveSlide(selectedIndex)
    if (slides.length > 1) {
      restartAutoSlide()
    }
  }

  setActiveSlide(activeIndex)

  previousButton?.addEventListener('click', onPreviousClick)
  nextButton?.addEventListener('click', onNextClick)
  dotButtons.forEach((dot) => dot.addEventListener('click', onDotClick))

  if (slides.length > 1) {
    restartAutoSlide()
  }

  return () => {
    if (autoSlideTimer) {
      globalThis.clearInterval(autoSlideTimer)
    }

    previousButton?.removeEventListener('click', onPreviousClick)
    nextButton?.removeEventListener('click', onNextClick)
    dotButtons.forEach((dot) => dot.removeEventListener('click', onDotClick))
  }
}