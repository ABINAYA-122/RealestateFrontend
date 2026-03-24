import '../FeaturedSection/FeaturedSection.css'
import type { Listing } from '../../../pages/LandingPage/types'
import { IconHeart } from '../icons'

type FeaturedSectionProps = {
  title: string
  listings: Listing[]
}

export function FeaturedSection({ title, listings }: FeaturedSectionProps) {
  const featuredSlots = [...listings.slice(0, 4), ...Array.from({ length: Math.max(0, 4 - listings.length) }, () => null)]

  return (
    <section className="section-block featured-section">
      <div className="featured-section__heading section-heading">
        <h2>{title}</h2>
        <a href="/">See all</a>
      </div>

      <div className="featured-section__grid featured-grid">
        {featuredSlots.map((listing, index) => {
          if (!listing) {
            return <article key={`placeholder-${index}`} className="featured-card featured-card--placeholder" aria-hidden="true" />
          }

          return (
            <article
              key={listing.id}
              className="featured-card property-card property-card--featured"
            >
              <div className="featured-card__media property-card__media">
                <img src={listing.image} alt={listing.location} />
                {listing.badge ? <span className="featured-card__pill pill">{listing.badge}</span> : null}
                <button
                  type="button"
                  className="featured-card__favorite favorite-chip"
                  aria-label="Save property"
                >
                  <IconHeart />
                </button>
              </div>

              <div className="featured-card__body property-card__body">
                <strong>{listing.price}</strong>
                <p>{listing.details}</p>
                <span>{listing.location}</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}