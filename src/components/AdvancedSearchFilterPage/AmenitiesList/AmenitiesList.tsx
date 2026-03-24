import './AmenitiesList.css'
import { FilterIcon } from '../icons'
import type { AmenityId, AmenityOption } from '../../../pages/AdvancedSearchFilterPage/types'

type AmenitiesListProps = {
  amenities: Array<AmenityOption & { enabled: boolean }>
  isExpanded: boolean
  onToggle: (id: AmenityId) => void
  onToggleExpanded: () => void
}

export function AmenitiesList({ amenities, isExpanded, onToggle, onToggleExpanded }: AmenitiesListProps) {
  const visibleAmenities = isExpanded ? amenities : amenities.slice(0, 4)

  return (
    <section className="amenities-list">
      <h2 className="amenities-list__title">Amenities</h2>
      <div className="amenities-list__card">
        {visibleAmenities.map((amenity) => (
          <div key={amenity.id} className="amenities-list__row">
            <div className="amenities-list__meta">
              <span className="amenities-list__icon">
                <FilterIcon name={amenity.icon} />
              </span>
              <span>{amenity.label}</span>
            </div>
            <button
              type="button"
              className={`amenities-list__toggle ${amenity.enabled ? 'amenities-list__toggle--active' : ''}`.trim()}
              aria-pressed={amenity.enabled}
              aria-label={`${amenity.enabled ? 'Disable' : 'Enable'} ${amenity.label}`}
              onClick={() => onToggle(amenity.id)}
            >
              <span className="amenities-list__thumb" />
            </button>
          </div>
        ))}
      </div>

      <button type="button" className="amenities-list__expand" onClick={onToggleExpanded}>
        <span>{isExpanded ? 'Show fewer options' : 'Show more options'}</span>
        <span className={`amenities-list__expand-icon ${isExpanded ? 'amenities-list__expand-icon--open' : ''}`.trim()}>
          <FilterIcon name="chevronDown" />
        </span>
      </button>
    </section>
  )
}
