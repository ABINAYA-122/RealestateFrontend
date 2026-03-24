import '../CategoryTabs/CategoryTabs.css'
import type { ListingCategory } from '../../../pages/LandingPage/types'
import { IconKey, IconTag } from '../icons'

type CategoryTabsProps = {
  activeCategory: ListingCategory
  onChange: (category: ListingCategory) => void
}

const tabItems: Array<{ value: ListingCategory; label: string }> = [
  { value: 'buy', label: 'Buy' },
  { value: 'rent', label: 'Rent' },
  { value: 'sell', label: 'Sell' },
]

export function CategoryTabs({ activeCategory, onChange }: CategoryTabsProps) {
  return (
    <section className="filter-tabs" aria-label="Listing categories">
      {tabItems.map((item) => {
        const isActive = item.value === activeCategory

        return (
          <button
            key={item.value}
            type="button"
            className={`filter-tab ${isActive ? 'filter-tab--active' : ''}`.trim()}
            onClick={() => onChange(item.value)}
          >
            {item.value === 'sell' ? <IconTag /> : item.value === 'buy' ? <i className="fa-solid fa-cart-shopping" aria-hidden="true" /> : <IconKey />}
            {item.label}
          </button>
        )
      })}
    </section>
  )
}