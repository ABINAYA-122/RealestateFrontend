import './PropertyTypeSelector.css'
import { FilterIcon } from '../icons'
import type { PropertyType, PropertyTypeOption } from '../../../pages/AdvancedSearchFilterPage/types'

type PropertyTypeSelectorProps = {
  activeValue: PropertyType
  options: PropertyTypeOption[]
  onChange: (value: PropertyType) => void
}

export function PropertyTypeSelector({ activeValue, options, onChange }: PropertyTypeSelectorProps) {
  return (
    <section className="property-type-selector">
      <h2 className="property-type-selector__title">Property Type</h2>
      <div className="property-type-selector__options" role="list" aria-label="Property types">
        {options.map((option) => {
          const isActive = option.value === activeValue

          return (
            <button
              key={option.value}
              type="button"
              className={`property-type-selector__option ${isActive ? 'property-type-selector__option--active' : ''}`.trim()}
              aria-pressed={isActive}
              onClick={() => onChange(option.value)}
            >
              <FilterIcon name={option.icon} />
              <span>{option.label}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
