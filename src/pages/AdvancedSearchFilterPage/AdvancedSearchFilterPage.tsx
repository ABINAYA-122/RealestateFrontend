import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './AdvancedSearchFilterPage.css'
import { AmenitiesList } from '../../components/AdvancedSearchFilterPage/AmenitiesList/AmenitiesList'
import { CounterField } from '../../components/AdvancedSearchFilterPage/CounterField/CounterField'
import { PriceRangeCard } from '../../components/AdvancedSearchFilterPage/PriceRangeCard/PriceRangeCard'
import { PropertyTypeSelector } from '../../components/AdvancedSearchFilterPage/PropertyTypeSelector/PropertyTypeSelector'
import { SearchActionBar } from '../../components/AdvancedSearchFilterPage/SearchActionBar/SearchActionBar'
import { amenityOptions, areaBounds, priceRangeBounds, propertyTypeOptions } from './data'
import type { AmenityId, PropertyType } from './types'

const buildAmenityState = () =>
  amenityOptions.reduce<Record<AmenityId, boolean>>((state, amenity) => {
    state[amenity.id] = amenity.defaultEnabled
    return state
  }, {} as Record<AmenityId, boolean>)

export function AdvancedSearchFilterPage() {
  const [minPrice, setMinPrice] = useState<number>(priceRangeBounds.defaultMin)
  const [maxPrice, setMaxPrice] = useState<number>(priceRangeBounds.defaultMax)
  const [propertyType, setPropertyType] = useState<PropertyType>('house')
  const [beds, setBeds] = useState(3)
  const [baths, setBaths] = useState(2)
  const [areaSqft, setAreaSqft] = useState<number>(areaBounds.defaultArea)
  const [isExpanded, setIsExpanded] = useState(false)
  const [amenityState, setAmenityState] = useState<Record<AmenityId, boolean>>(buildAmenityState)

  const amenities = useMemo(
    () => amenityOptions.map((amenity) => ({ ...amenity, enabled: amenityState[amenity.id] })),
    [amenityState],
  )

  const enabledAmenities = useMemo(
    () => amenities.filter((amenity) => amenity.enabled),
    [amenities],
  )

  const visibleResults = useMemo(() => {
    const pricePenalty = Math.max(0, Math.floor((minPrice - priceRangeBounds.min) / 150_000))
    const roomPenalty = Math.max(0, beds - 1) * 3 + Math.max(0, baths - 1) * 2
    const amenityPenalty = enabledAmenities.length * 2
    const propertyTypeAdjustment = propertyType === 'house' ? 0 : propertyType === 'apartment' ? -4 : -6
    const spreadBonus = Math.round((maxPrice - minPrice) / 250_000)
    const areaPenalty = Math.max(0, Math.floor((areaSqft - areaBounds.min) / 350))

    return Math.max(8, Math.min(64, 54 - pricePenalty - roomPenalty - amenityPenalty - areaPenalty + propertyTypeAdjustment + spreadBonus))
  }, [areaSqft, baths, beds, enabledAmenities.length, maxPrice, minPrice, propertyType])

  const summaryChips = [
    propertyTypeOptions.find((option) => option.value === propertyType)?.label ?? 'House',
    `${beds} beds`,
    `${baths} baths`,
    `${areaSqft} sqft`,
    `${enabledAmenities.length} amenities`,
  ]

  const toggleAmenity = (id: AmenityId) => {
    setAmenityState((current) => ({
      ...current,
      [id]: !current[id],
    }))
  }

  const adjustCounter = (setter: React.Dispatch<React.SetStateAction<number>>, direction: 'increment' | 'decrement') => {
    setter((current) => {
      if (direction === 'increment') {
        return Math.min(current + 1, 8)
      }

      return Math.max(current - 1, 1)
    })
  }

  return (
    <main className="advanced-search-filter-page">
      <div className="advanced-search-filter-page__surface">
        <header className="advanced-search-filter-page__header">
          <div className="advanced-search-filter-page__heading">
            <p className="advanced-search-filter-page__eyebrow">Search Workspace</p>
            <h1>Advanced Search Filter</h1>
            <p>
              Build a focused property search with price controls, room requirements, and the
              amenities that matter before opening the listing grid.
            </p>
          </div>
          <Link to="/" className="advanced-search-filter-page__link">
            Open Landing Page
          </Link>
        </header>

        <div className="advanced-search-filter-page__content">
          <PriceRangeCard
            minValue={minPrice}
            maxValue={maxPrice}
            lowerBound={priceRangeBounds.min}
            upperBound={priceRangeBounds.max}
            step={priceRangeBounds.step}
            onMinChange={setMinPrice}
            onMaxChange={setMaxPrice}
          />

          <PropertyTypeSelector
            activeValue={propertyType}
            options={propertyTypeOptions}
            onChange={setPropertyType}
          />

          <div className="advanced-search-filter-page__counters">
            <CounterField
              label="Beds"
              value={beds}
              min={1}
              max={8}
              step={1}
              onValueChange={(value) => setBeds(Math.max(1, Math.min(value, 8)))}
              onDecrease={() => adjustCounter(setBeds, 'decrement')}
              onIncrease={() => adjustCounter(setBeds, 'increment')}
            />
            <CounterField
              label="Baths"
              value={baths}
              min={1}
              max={8}
              step={1}
              onValueChange={(value) => setBaths(Math.max(1, Math.min(value, 8)))}
              onDecrease={() => adjustCounter(setBaths, 'decrement')}
              onIncrease={() => adjustCounter(setBaths, 'increment')}
            />
            <CounterField
              label="Area"
              value={areaSqft}
              min={areaBounds.min}
              max={areaBounds.max}
              step={areaBounds.step}
              suffix="sqft"
              onValueChange={(value) => setAreaSqft(Math.max(areaBounds.min, Math.min(value, areaBounds.max)))}
              onDecrease={() => setAreaSqft((current) => Math.max(current - areaBounds.step, areaBounds.min))}
              onIncrease={() => setAreaSqft((current) => Math.min(current + areaBounds.step, areaBounds.max))}
            />
          </div>

          <AmenitiesList
            amenities={amenities}
            isExpanded={isExpanded}
            onToggle={toggleAmenity}
            onToggleExpanded={() => setIsExpanded((current) => !current)}
          />

          <SearchActionBar visibleResults={visibleResults} summaryChips={summaryChips} />
        </div>
      </div>
    </main>
  )
}
