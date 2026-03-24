import '../PromoBanner/PromoBanner.css'
import { IconHome } from '../icons'

export function PromoBanner() {
  return (
    <section className="cta-banner">
      <div>
        <p className="cta-banner__eyebrow">Mortgage ready</p>
        <h2>Mortgage rates are low</h2>
        <p>Get pre-approved in minutes and see what you can afford before you tour.</p>
      </div>
      <button type="button" className="cta-button">
        Get Started
      </button>
      <span className="cta-banner__mark" aria-hidden="true">
        <IconHome />
      </span>
    </section>
  )
}