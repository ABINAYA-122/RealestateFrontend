import React from 'react'
import './AgentProfile.css'
import { listings as listingsData } from "../../data/LandingPage/listings";

type Props = {
  name?: string
  photo?: string
}

const indianPlaces = [
  'Mumbai, MH, India',
  'New Delhi, DL, India',
  'Bengaluru, KA, India',
  'Chennai, TN, India',
  'Hyderabad, TS, India'
]

export default function AgentProfile({ name = 'Sharukh Khan', photo = '' }: Props) {
  // use the existing listings but override locations with Indian places for demo
  const listings = listingsData.map((l, i) => ({ ...l, location: indianPlaces[i % indianPlaces.length] }))

  const activeListings = listings.slice(0, 3)
  const recentlySold = listings.slice(3, 6)

  return (
    <div className="agent-profile">
      <div className="agent-profile__header">
        <div className="agent-profile__avatar">
          {photo ? <img src={photo} alt={name} /> : <div className="avatar--placeholder">{name.split(' ').map(n=>n[0]).join('')}</div>}
        </div>
        <div className="agent-profile__meta">
          <h2 className="agent-name">{name}</h2>
          <div className="agent-title">PREMIER PLATINUM AGENT</div>
          <div className="agent-experience">• 12 years experience</div>
          <div className="agent-actions">
            <button className="btn btn-primary">Message</button>
            <button className="btn btn-outline">Call</button>
          </div>
        </div>
      </div>

      <div className="agent-stats">
        <div className="stat-card">
          <div className="stat-label">SOLD</div>
          <div className="stat-value">142</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">ACTIVE</div>
          <div className="stat-value">8</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">RATING</div>
          <div className="stat-value">4.9 ★</div>
        </div>
      </div>

      <section className="agent-section">
        <div className="section-header">Active Listings</div>
        <div className="listings-grid">
          {activeListings.map((p, idx) => (
            <article key={p.id || idx} className="property-card">
              <div className="media">
                <img src={p.image} alt={p.title || 'property'} />
                {p.badge && <span className="badge">{p.badge}</span>}
              </div>
              <div className="card-body">
                <div className="price">{p.price}</div>
                <div className="location">{p.location}</div>
                <div className="details">{p.details || ''}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="agent-section">
        <div className="section-header">Recently Sold</div>
        <div className="listings-grid small">
          {recentlySold.map((p, idx) => (
            <article key={p.id || idx} className="property-card small">
              <div className="media">
                <img src={p.image} alt={p.title || 'property'} />
              </div>
              <div className="card-body">
                <div className="price">{p.price}</div>
                <div className="location">{p.location}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
