export function useRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  )

  const elements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-feature',
  )
  elements.forEach((element) => observer.observe(element))

  return observer
}
