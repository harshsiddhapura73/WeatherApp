import React from 'react'
import './SubMenu.css'

export default function SubMenu() {
  return (
    <div className='container'>
        <nav className="nav nav-pills justify-content-between text-border-bottom">
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height " href="/">today</a>
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height" href="/">hourly</a>
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height" href="/">daily</a>
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height" href="/">radar</a>
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height" href="/">minutecast</a>
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height" href="/">monthly</a>
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height" href="/">air quality</a>
            <a className="nav-item nav-link text-uppercase text-decoration-none text-dark bg-muted pill-bg tab-height" href="/">health & activities</a>
        </nav>
    </div>
  )
}
