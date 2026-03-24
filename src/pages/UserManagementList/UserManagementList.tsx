import { useState } from 'react'
import './UserManagementList.css'

const users = [
  {
    name: 'Arun Kumar',
    email: 'arun.kumar@realestate.in',
    role: 'Owner',
    joined: 'Oct 12, 2023',
    status: 'ACTIVE',
    active: true,
  },
  {
    name: 'Priya Sharma',
    email: 'priya.sharma@client.in',
    role: 'Buyer',
    joined: 'Jan 05, 2024',
    status: 'BANNED',
    active: false,
  },
  {
    name: 'Rakesh Mehta',
    email: 'rakesh.mehta@agency.in',
    role: 'Agent',
    joined: 'Feb 22, 2024',
    status: 'ACTIVE',
    active: true,
  },
  {
    name: 'Neha Verma',
    email: 'neha.verma@client.in',
    role: 'Buyer',
    joined: 'Mar 15, 2024',
    status: 'ACTIVE',
    active: true,
  },
  {
    name: 'Siddharth Rao',
    email: 'siddharth.rao@agency.in',
    role: 'Agent',
    joined: 'Apr 02, 2024',
    status: 'ACTIVE',
    active: true,
  },
]

export function UserManagementList() {
  const [filter, setFilter] = useState<'all' | 'owner' | 'agent' | 'buyer'>('all')
  const filteredUsers =
    filter === 'all' ? users : users.filter((user) => user.role.toLowerCase() === filter)

  return (
    <div className="user-management-page">
      <div className="user-management-card">
        <div className="top-row">
          <div className="title-row">
            <div className="icon-circle">👤</div>
            <div>
              <h1>User Management</h1>
            </div>
          </div>
          <button className="icon-btn">➕</button>
        </div>

        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input placeholder="Search by name, email or ID" />
        </div>

        <div className="chips">
          <button className={`chip ${filter === 'all' ? 'selected' : ''}`} onClick={() => setFilter('all')}>
            All Users
          </button>
          <button className={`chip ${filter === 'owner' ? 'selected' : ''}`} onClick={() => setFilter('owner')}>
            Owner
          </button>
          <button className={`chip ${filter === 'agent' ? 'selected' : ''}`} onClick={() => setFilter('agent')}>
            Agent
          </button>
          <button className={`chip ${filter === 'buyer' ? 'selected' : ''}`} onClick={() => setFilter('buyer')}>
            Buyer
          </button>
        </div>

        <div className="user-list">
          {filteredUsers.map((user) => (
            <div className="user-item" key={user.email}>
              <div className="user-heading-row">
                <div className="user-identity">
                  <div className="avatar">{user.name.split(' ').map((n) => n[0]).join('')}</div>
                  <div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                  </div>
                </div>
                <div className={`status-pill ${user.active ? 'active' : 'banned'}`}>{user.status}</div>
              </div>
              <div className="user-meta-row">
                <div>
                  <div className="meta-label">ROLE</div>
                  <div className="meta-value">{user.role}</div>
                </div>
                <div>
                  <div className="meta-label">JOINED</div>
                  <div className="meta-value">{user.joined}</div>
                </div>
              </div>
              <div className="action-row">
                <button className="action action-edit">✎ Edit</button>
                <button className="action action-reset">↻ Reset</button>
                <button className="action action-ban">🚫</button>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-row">
          <div className="showing">Showing {filteredUsers.length} of {users.length} users</div>
          <button className="load-more">Load more users</button>
        </div>
      </div>

      <div className="bottom-nav">
        <button className="nav-item">🏠 Dash</button>
        <button className="nav-item">🏡 Props</button>
        <button className="nav-item active">👥 Users</button>
        <button className="nav-item">📊 Reports</button>
        <button className="nav-item">⚙ Setup</button>
      </div>
    </div>
  )
}
