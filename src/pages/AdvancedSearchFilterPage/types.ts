export type PropertyType = 'house' | 'apartment' | 'townhome'

export type FilterIconName =
  | 'house'
  | 'apartment'
  | 'townhome'
  | 'pool'
  | 'parking'
  | 'gym'
  | 'pet'
  | 'security'
  | 'garden'
  | 'chevronDown'
  | 'spark'

export type PropertyTypeOption = {
  value: PropertyType
  label: string
  icon: FilterIconName
}

export type AmenityId = 'pool' | 'parking' | 'gym' | 'petFriendly' | 'security' | 'garden'

export type AmenityOption = {
  id: AmenityId
  label: string
  icon: FilterIconName
  defaultEnabled: boolean
  priority: boolean
}
