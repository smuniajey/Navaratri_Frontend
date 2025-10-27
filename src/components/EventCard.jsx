import React from 'react'

export default function EventCard({ event }) {
  return (
    <div className={`event-card ${event.type}`}>
      <div className="badge">{event.date}</div>
      <h4>{event.title}</h4>
      <p className="time">{event.time}</p>
      <p className="desc">{event.description}</p>
      <div className="meta">
        <span>{event.location}</span>
        <span className="pill">{event.type}</span>
      </div>
    </div>
  )
}
