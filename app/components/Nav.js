'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileSub, setOpenMobileSub] = useState(null)
  const [theme, setTheme] = useState('light')

  // On mount, read saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bh-theme')
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.nav-item')) setOpenDropdown(null)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('bh-theme', next)
  }

  function toggleDropdown(name) {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  function toggleMobileSub(name) {
    setOpenMobileSub(openMobileSub === name ? null : name)
  }

  function handleMobileLinkClick() {
    setMobileOpen(false)
    setOpenMobileSub(null)
  }

  function smoothScroll(e, href) {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' })
    }
    setMobileOpen(false)
    setOpenMobileSub(null)
    setOpenDropdown(null)
  }

  const navItems = [
    {
      label: 'Reports',
      id: 'reports-dd',
      links: [
        { label: 'Annual Reports', href: '#reports' },
        { label: 'News Releases', href: '#news' },
        { label: 'Annual Meeting', href: '#meeting' },
      ],
    },
    {
      label: 'Letters',
      id: 'letters-dd',
      links: [
        { label: 'Shareholder Letters', href: '#letters' },
        { label: 'Pledge Letters', href: '#pledges' },
      ],
    },
    {
      label: 'Governance',
      id: 'governance-dd',
      links: [
        { label: 'Corporate Governance', href: '#governance' },
        { label: 'SEC Filings', href: '#sec' },
      ],
    },
    {
      label: 'Sustainability',
      id: 'sus-dd',
      links: [
        { label: 'EEO-1 Data', href: '#sustainability' },
        { label: 'Subsidiary Sustainability', href: '#sustainability' },
      ],
    },
  ]

  return (
    <>
      <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo" onClick={(e) => smoothScroll(e, '#hero')}>
            Berkshire Hathaway
            <span>Omaha, Nebraska · Est. 1955</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${openDropdown === item.id ? 'open' : ''}`}
              >
                <button onClick={() => toggleDropdown(item.id)}>
                  {item.label} <i className="fa-solid fa-chevron-down" />
                </button>
                <div className="nav-dropdown">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => smoothScroll(e, link.href)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
            <li className="nav-item">
              <a href="#companies" onClick={(e) => smoothScroll(e, '#companies')}>
                Companies
              </a>
            </li>
            <li className="nav-item">
              <a href="#stock" onClick={(e) => smoothScroll(e, '#stock')}>
                Stock Info
              </a>
            </li>
          </ul>

          {/* Right side: theme toggle + hamburger */}
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            />
            <button
              id="hamburger"
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => toggleMobileSub(item.id)}>
                {item.label}
              </button>
              <div className={`mobile-sub ${openMobileSub === item.id ? 'open' : ''}`}>
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
          <li>
            <a href="#companies" onClick={handleMobileLinkClick}>
              Companies
            </a>
          </li>
          <li>
            <a href="#stock" onClick={handleMobileLinkClick}>
              Stock Info
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
