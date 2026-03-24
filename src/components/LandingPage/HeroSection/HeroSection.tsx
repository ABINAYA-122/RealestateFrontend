import '../HeroSection/HeroSection.css'
import { IconSearch } from '../icons'

export function HeroSection() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <h1>Find the place you&apos;ll love to live</h1>
        <p className="hero-banner__text">
          Browse the most complete source of real estate listings, rentals, and seller
          insights in one clean experience.
        </p>

        <form className="search-panel">
          <label className="search-field" htmlFor="location-search">
            <span className="search-field__icon">
              <IconSearch />
            </span>
            <input
              id="location-search"
              name="location"
              type="text"
              placeholder="City, Neighborhood, or zip"
            />
          </label>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </section>
  )
}