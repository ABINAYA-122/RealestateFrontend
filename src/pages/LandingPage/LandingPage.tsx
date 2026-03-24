import { useMemo, useState } from 'react'
import './LandingPage.css'
import { BottomNavigation } from '../../components/LandingPage/BottomNavigation/BottomNavigation'
import { CategoryTabs } from '../../components/LandingPage/CategoryTabs/CategoryTabs'
import { CompactListingList } from '../../components/LandingPage/CompactListingList/CompactListingList'
import { FeaturedSection } from '../../components/LandingPage/FeaturedSection/FeaturedSection'
import { HeroSection } from '../../components/LandingPage/HeroSection/HeroSection'
import { PromoBanner } from '../../components/LandingPage/PromoBanner/PromoBanner'
import { TopBar } from '../../components/LandingPage/TopBar/TopBar'
import { listings } from '../../data/LandingPage/listings'
import type { ListingCategory, NavigationItem } from './types'

export function LandingPage() {
  const [activeCategory, setActiveCategory] = useState<ListingCategory>('buy')
  const [activeNav, setActiveNav] = useState<NavigationItem>('search')

  const activeListings = useMemo(
    () => listings.filter((listing) => listing.category === activeCategory),
    [activeCategory],
  )

  const featuredListings = activeListings.filter((listing) => listing.featured)
  const compactListings = activeListings.filter((listing) => !listing.featured)

  return (
    <main className="landing-page">
      <div className="landing-page__surface">
        <TopBar />

        <div className="landing-page__grid">
          <div className="landing-page__panel landing-page__panel--hero">
            <HeroSection />
          </div>

          <div className="landing-page__panel landing-page__panel--tabs">
            <CategoryTabs activeCategory={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="landing-page__panel landing-page__panel--featured">
            <FeaturedSection title="Recently Added" listings={featuredListings} />
          </div>

          <div className="landing-page__panel landing-page__panel--nav">
            <BottomNavigation activeItem={activeNav} onChange={setActiveNav} />
          </div>

          <div className="landing-page__panel landing-page__panel--compact">
            <CompactListingList title="Best Matches" listings={compactListings} />
          </div>

          <div className="landing-page__panel landing-page__panel--promo">
            <PromoBanner />
          </div>
        </div>
      </div>
    </main>
  )
}
