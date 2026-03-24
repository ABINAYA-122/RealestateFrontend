import type { AmenityOption, PropertyTypeOption } from './types'

export const priceRangeBounds = {
  min: 2_500_000,
  max: 500_000_000,
  step: 100_000,
  defaultMin: 5_000_000,
  defaultMax: 500_000_000,
} as const

export const areaBounds = {
  min: 400,
  max: 5000,
  step: 50,
  defaultArea: 1200,
} as const

export const propertyTypeOptions: PropertyTypeOption[] = [
  { value: 'house', label: 'House', icon: 'house' },
  { value: 'apartment', label: 'Apartment', icon: 'apartment' },
  { value: 'townhome', label: 'Townhome', icon: 'townhome' },
]

export const amenityOptions: AmenityOption[] = [
  { id: 'pool', label: 'Pool', icon: 'pool', defaultEnabled: true, priority: true },
  { id: 'parking', label: 'Parking', icon: 'parking', defaultEnabled: false, priority: true },
  { id: 'gym', label: 'Gym', icon: 'gym', defaultEnabled: true, priority: true },
  { id: 'petFriendly', label: 'Pet Friendly', icon: 'pet', defaultEnabled: false, priority: true },
  { id: 'security', label: '24/7 Security', icon: 'security', defaultEnabled: true, priority: false },
  { id: 'garden', label: 'Garden Access', icon: 'garden', defaultEnabled: false, priority: false },
]
