export type ListingCategory = 'buy' | 'rent' | 'sell'

export type NavigationItem = 'search' | 'saved' | 'sell' | 'inbox' | 'profile'

export type Listing = {
  id: number
  image: string
  price: string
  details: string
  location: string
  badge?: string
  category: ListingCategory
  featured: boolean
}