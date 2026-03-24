import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './StatusChangeModelPage.css'
import { StatusChangeModel } from '../../components/StatusChangeModel/StatusChangeModel'

type ListingStatus = 'Active' | 'Under Contract' | 'Sold' | 'Off-Market'

type Toast = {
  status: ListingStatus
  message: string
  variant: 'success' | 'warning' | 'info' | 'danger'
  icon: string
}

const toastByStatus: Record<ListingStatus, Toast['variant']> = {
  Active: 'success',
  'Under Contract': 'warning',
  Sold: 'info',
  'Off-Market': 'danger',
}

const iconByStatus: Record<ListingStatus, string> = {
  Active: '✅',
  'Under Contract': '🟡',
  Sold: '🏷️',
  'Off-Market': '🚫',
}

export function StatusChangeModelPage() {
  const navigate = useNavigate()
  const [toast, setToast] = useState<Toast | null>(null)

  useEffect(() => {
    if (!toast) {
      return
    }
    const timer = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  return (
    <main className="status-change-page">
      <StatusChangeModel
        onSubmit={(status) => {
          setToast({
            status,
            message: `Selected property has been ${status.toLowerCase()}.`,
            variant: toastByStatus[status],
            icon: iconByStatus[status],
          })
        }}
        onCancel={() => navigate('/')}
      />

      <div className={`side-toast ${toast ? 'side-toast--show' : ''} ${toast ? `side-toast--${toast.variant}` : ''}`}>
        <div className="side-toast__header">
          <span className="side-toast__dot" aria-hidden="true">{toast?.icon || 'ℹ️'}</span>
          <strong>Status updated</strong>
          <button type="button" className="side-toast__close" onClick={() => setToast(null)}>
            ×
          </button>
        </div>
        <div className="side-toast__body">
          <p>{toast?.message}</p>
        </div>
      </div>
    </main>
  )
}
