import './PriceRangeCard.css'

type PriceRangeCardProps = {
  minValue: number
  maxValue: number
  lowerBound: number
  upperBound: number
  step: number
  onMinChange: (value: number) => void
  onMaxChange: (value: number) => void
}

const formatPrice = (value: number, upperBound: number) => {
  if (value >= upperBound) {
    const maxCrore = upperBound / 10_000_000
    return `\u20b9${Number.isInteger(maxCrore) ? maxCrore.toFixed(0) : maxCrore.toFixed(1)}Cr+`
  }

  if (value >= 10_000_000) {
    const crores = value / 10_000_000
    return `\u20b9${Number.isInteger(crores) ? crores.toFixed(0) : crores.toFixed(1)}Cr`
  }

  const lakhs = value / 100_000
  return `\u20b9${Number.isInteger(lakhs) ? lakhs.toFixed(0) : lakhs.toFixed(1)}L`
}

export function PriceRangeCard({
  minValue,
  maxValue,
  lowerBound,
  upperBound,
  step,
  onMinChange,
  onMaxChange,
}: PriceRangeCardProps) {
  const minPercent = ((minValue - lowerBound) / (upperBound - lowerBound)) * 100
  const maxPercent = ((maxValue - lowerBound) / (upperBound - lowerBound)) * 100

  return (
    <section className="range-card">
      <h2 className="range-card__title">Price Range</h2>
      <div className="range-card__body">
        <div className="range-card__values">
          <div>
            <span className="range-card__label">Minimum</span>
            <strong>{formatPrice(minValue, upperBound)}</strong>
          </div>
          <span className="range-card__dash" aria-hidden="true">
            —
          </span>
          <div className="range-card__value range-card__value--end">
            <span className="range-card__label">Maximum</span>
            <strong>{formatPrice(maxValue, upperBound)}</strong>
          </div>
        </div>

        <div className="range-card__slider">
          <div className="range-card__rail" aria-hidden="true" />
          <div
            className="range-card__fill"
            aria-hidden="true"
            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
          />
          <input
            className="range-card__input"
            type="range"
            min={lowerBound}
            max={upperBound}
            step={step}
            value={minValue}
            aria-label="Minimum price"
            onChange={(event) => onMinChange(Math.min(Number(event.target.value), maxValue - step))}
          />
          <input
            className="range-card__input"
            type="range"
            min={lowerBound}
            max={upperBound}
            step={step}
            value={maxValue}
            aria-label="Maximum price"
            onChange={(event) => onMaxChange(Math.max(Number(event.target.value), minValue + step))}
          />
        </div>
      </div>
    </section>
  )
}
