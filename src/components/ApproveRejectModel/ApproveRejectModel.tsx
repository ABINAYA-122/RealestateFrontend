import { useState } from 'react'
import './ApproveRejectModel.css'

export type ModerationAction = 'approve' | 'reject'

export type RejectionReason =
  | 'Misleading price details'
  | 'Incorrect property information'
  | 'Incomplete property details'
  | 'Low quality images'
  | 'Duplicate listing'
  | 'Fake / Scam listing'
  | 'Policy violation'
  | 'Incorrect or incomplete location details'
  | 'Property not available'
  | 'Legal / compliance issue'
  | 'Contact information violation'
  | 'Others'

export type ModerationDecision = {
  action: ModerationAction
  reason: RejectionReason | null
  details: string
}

type ApproveRejectModelProps = {
  title?: string
  subtitle?: string
  onSubmit?: (decision: ModerationDecision) => void
  onCancel?: () => void
}

const rejectionReasons: RejectionReason[] = [
  'Misleading price details',
  'Incorrect property information',
  'Incomplete property details',
  'Low quality images',
  'Duplicate listing',
  'Fake / Scam listing',
  'Policy violation',
  'Incorrect or incomplete location details',
  'Property not available',
  'Legal / compliance issue',
  'Contact information violation',
  'Others',
]

export function ApproveRejectModel({
  title = 'Approve / Reject Modal',
  subtitle = 'Select an action for this listing',
  onSubmit,
  onCancel,
}: ApproveRejectModelProps) {
  const [action, setAction] = useState<ModerationAction>('reject')
  const [reason, setReason] = useState<RejectionReason>('Misleading price details')
  const [details, setDetails] = useState('')

  const submitLabel = action === 'approve' ? 'Approve Listing' : 'Submit Decision'

  const handleSubmit = () => {
    onSubmit?.({
      action,
      reason: action === 'reject' ? reason : null,
      details: action === 'reject' ? details : '',
    })
  }

  return (
    <section
      className="approve-reject-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="approve-reject-modal-title"
    >
      <span className="approve-reject-modal__handle" aria-hidden="true" />

      <header className="approve-reject-modal__header">
        <h2 id="approve-reject-modal-title">{title}</h2>
        <p>{subtitle}</p>
      </header>

      <div className="approve-reject-modal__actions" role="group" aria-label="Moderation action">
        <button
          type="button"
          className={`approve-reject-modal__toggle ${action === 'approve' ? 'approve-reject-modal__toggle--active' : ''}`}
          onClick={() => setAction('approve')}
        >
          Approve
        </button>
        <button
          type="button"
          className={`approve-reject-modal__toggle ${action === 'reject' ? 'approve-reject-modal__toggle--active' : ''}`}
          onClick={() => setAction('reject')}
        >
          Reject
        </button>
      </div>

      {action === 'reject' ? (
        <>
          <label className="approve-reject-modal__field">
            <span>Reason for Rejection</span>
            <select value={reason} onChange={(event) => setReason(event.target.value as RejectionReason)}>
              {rejectionReasons.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="approve-reject-modal__field">
            <span>Additional Details</span>
            <textarea
              rows={4}
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Provide custom feedback for the agent..."
            />
          </label>
        </>
      ) : (
        <div className="approve-reject-modal__approval-note">
          <span className="approve-reject-modal__approval-badge">Ready to publish</span>
          <p>
            This listing will be marked as approved and can move forward without additional
            rejection feedback.
          </p>
        </div>
      )}

      <button type="button" className="approve-reject-modal__submit" onClick={handleSubmit}>
        {submitLabel}
      </button>

      <button type="button" className="approve-reject-modal__cancel" onClick={onCancel}>
        Cancel
      </button>
    </section>
  )
}
