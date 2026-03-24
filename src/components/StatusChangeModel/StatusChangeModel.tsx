import { useState } from 'react'
import './StatusChangeModel.css'

type ListingStatus = 'Active' | 'Under Contract' | 'Sold' | 'Off-Market'

type StatusItem = {
  value: ListingStatus
  label: string
  description: string
  emoji: string
}

const statusOptions: StatusItem[] = [
  {
    value: 'Active',
    label: 'Active',
    description: 'Visible to all potential buyers and agents',
    emoji: '✅',
  },
  {
    value: 'Under Contract',
    label: 'Under Contract',
    description: 'Offer accepted, pending final closing',
    emoji: '🟠',
  },
  {
    value: 'Sold',
    label: 'Sold',
    description: 'Property transaction is complete',
    emoji: '🏷️',
  },
  {
    value: 'Off-Market',
    label: 'Off-Market',
    description: 'Temporarily withdrawn or permanently hidden',
    emoji: '🚫',
  },
]

type StatusChangeModelProps = {
  title?: string
  subtitle?: string
  onSubmit?: (status: ListingStatus, note: string) => void
  onCancel?: () => void
}

export function StatusChangeModel({
  title = 'Property Status',
  subtitle = 'Update the current listing availability',
  onSubmit,
  onCancel,
}: StatusChangeModelProps) {
  const [selected, setSelected] = useState<ListingStatus>('Active')
  const [note, setNote] = useState('')

  const handleSubmit = () => {
    onSubmit?.(selected, note)
  }

  return (
    <section className="status-change-modal" role="dialog" aria-modal="true" aria-labelledby="status-change-title">
      <span className="status-change-modal__handle" aria-hidden="true" />

      <header className="status-change-modal__header">
        <h2 id="status-change-title">{title}</h2>
        <p>{subtitle}</p>
      </header>

      <div className="status-change-modal__options">
        {statusOptions.map((item) => (
          <button
            type="button"
            key={item.value}
            className={`status-change-modal__option ${selected === item.value ? 'status-change-modal__option--active' : ''}`}
            onClick={() => setSelected(item.value)}
          >
            <div className="status-change-modal__option-left">
              <span className="status-change-modal__emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <div>
                <strong>{item.label}</strong>
                <p>{item.description}</p>
              </div>
            </div>
            <span className="status-change-modal__radio" aria-hidden="true">
              {selected === item.value ? '●' : '○'}
            </span>
          </button>
        ))}
      </div>

      <label className="status-change-modal__field">
        <span>Internal Note</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Describe the reason for this change..."
          rows={4}
        />
      </label>

      <button type="button" className="status-change-modal__submit" onClick={handleSubmit}>
        Save Status Change
      </button>
      <button type="button" className="status-change-modal__cancel" onClick={onCancel}>
        Dismiss
      </button>
    </section>
  )
}
