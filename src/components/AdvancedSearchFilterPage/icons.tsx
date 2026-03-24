import type { FilterIconName } from '../../pages/AdvancedSearchFilterPage/types'

type FilterIconProps = {
  name: FilterIconName
}

const iconClassNames: Record<FilterIconName, string> = {
  house: 'fa-house',
  apartment: 'fa-building',
  townhome: 'fa-city',
  pool: 'fa-water-ladder',
  parking: 'fa-square-parking',
  gym: 'fa-dumbbell',
  pet: 'fa-paw',
  security: 'fa-shield',
  garden: 'fa-seedling',
  chevronDown: 'fa-chevron-down',
  spark: 'fa-sliders',
}

export function FilterIcon({ name }: FilterIconProps) {
  return <i className={`fa-solid ${iconClassNames[name]}`} aria-hidden="true" />
}
