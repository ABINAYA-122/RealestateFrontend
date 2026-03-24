import './SearchActionBar.css'
import { FilterIcon } from '../icons'

type SearchActionBarProps = {
  visibleResults: number
  summaryChips: string[]
}

export function SearchActionBar({ visibleResults, summaryChips }: SearchActionBarProps) {
  return (
    <section className="search-action-bar">
      <div className="search-action-bar__meta">
        <div className="search-action-bar__eyebrow">
          <FilterIcon name="spark" />
          <span>Ready to search</span>
        </div>
        <strong className="search-action-bar__headline">{visibleResults} curated matches</strong>
        <div className="search-action-bar__chips">
          {summaryChips.map((chip) => (
            <span key={chip} className="search-action-bar__chip">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <button type="button" className="search-action-bar__button">
        <span>Show {visibleResults} Properties</span>
        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </button>
    </section>
  )
}
