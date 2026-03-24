import './CounterField.css'

type CounterFieldProps = {
  label: string
  value: number
  min?: number
  max?: number
  step?: number
  suffix?: string
  onValueChange: (value: number) => void
  onDecrease: () => void
  onIncrease: () => void
}

export function CounterField({
  label,
  value,
  min,
  max,
  step = 1,
  suffix,
  onValueChange,
  onDecrease,
  onIncrease,
}: CounterFieldProps) {
  const handleInputChange = (nextValue: string) => {
    const parsed = Number(nextValue)

    if (!Number.isFinite(parsed)) {
      return
    }

    const boundedLow = min === undefined ? parsed : Math.max(parsed, min)
    const bounded = max === undefined ? boundedLow : Math.min(boundedLow, max)
    onValueChange(Math.round(bounded))
  }

  return (
    <div className="counter-field">
      <h2 className="counter-field__label">{label}</h2>
      <div className="counter-field__control" role="group" aria-label={`${label} controls`}>
        <button type="button" className="counter-field__button" aria-label={`Decrease ${label}`} onClick={onDecrease}>
          <i className="fa-solid fa-minus" aria-hidden="true" />
        </button>
        <label className="counter-field__value" htmlFor={`${label.toLowerCase()}-input`}>
          <input
            id={`${label.toLowerCase()}-input`}
            className="counter-field__value-input"
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(event) => handleInputChange(event.target.value)}
          />
          {suffix ? <span className="counter-field__suffix">{suffix}</span> : null}
        </label>
        <button type="button" className="counter-field__button counter-field__button--active" aria-label={`Increase ${label}`} onClick={onIncrease}>
          <i className="fa-solid fa-plus" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
