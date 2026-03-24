import '../CompactListingList/CompactListingList.css'
import type { Listing } from '../../../pages/LandingPage/types'

type CompactListingListProps = {
  title: string
  listings: Listing[]
}

export function CompactListingList({ title, listings }: CompactListingListProps) {
  return (
    <section className="section-block section-block--stacked compact-list-section">
      <div className="compact-list-section__heading section-heading">
        <h2>{title}</h2>
        <a href="/">View map</a>
      </div>

      <div className="compact-list-section__items compact-listings" aria-label="More listings">
        {listings.map((listing) => (
          <article key={listing.id} className="compact-card property-card property-card--compact">
            <img
              src={listing.image}
              alt={listing.location}
              className="compact-card__thumb property-card__thumb"
            />
            <div className="compact-card__body property-card__body property-card__body--compact">
              {listing.badge ? (
                <span className="compact-card__badge mini-badge">{listing.badge}</span>
              ) : null}
              <strong>{listing.price}</strong>
              <p>{listing.details}</p>
              <span>{listing.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}