import { useNavigate } from 'react-router-dom'
import './ApproveRejectModelPage.css'
import { ApproveRejectModel } from '../../components/ApproveRejectModel/ApproveRejectModel'

export function ApproveRejectModelPage() {
  const navigate = useNavigate()

  return (
    <main className="property-moderation-page">
      <ApproveRejectModel onCancel={() => navigate('/')} />
    </main>
  )
}