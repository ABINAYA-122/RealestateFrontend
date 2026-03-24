import '../TopBar/TopBar.css'
import { Link } from 'react-router-dom'
import { IconBell, IconHome, IconUser } from '../icons'

export function TopBar() {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <span className="brand-mark" aria-hidden="true">
          <IconHome />
        </span>
        <span className="brand-name">LuxeAbode</span>
      </div>

      <div className="topbar-actions" aria-label="Quick actions">
        <Link to="/approverejectmodel" className="topbar-link">
          Moderate
        </Link>
        <button type="button" className="icon-button" aria-label="Notifications">
          <IconBell />
        </button>
        <button type="button" className="icon-button icon-button--solid" aria-label="Profile">
          <IconUser />
        </button>
      </div>
    </header>
  )
}