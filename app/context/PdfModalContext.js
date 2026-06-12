'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const PdfModalContext = createContext(null)

export function PdfModalProvider({ children }) {
  const [modal, setModal] = useState({ open: false, url: '', title: '' })

  function openModal(url, title) {
    setModal({ open: true, url, title })
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    setModal({ open: false, url: '', title: '' })
    document.body.style.overflow = ''
  }

  // ESC key closes modal
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <PdfModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* The modal lives here — one instance for the whole site */}
      {modal.open && (
        <div
          className="pdf-modal-overlay open"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="pdf-modal">
            <div className="pdf-modal-header">
              <div className="pdf-modal-title">{modal.title}</div>
              <div className="pdf-modal-actions">
                <a href={modal.url} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
                <a href={modal.url} download>
                  Download
                </a>
                <button className="pdf-close" onClick={closeModal}>
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            <iframe src={modal.url} title={modal.title} />
          </div>
        </div>
      )}
    </PdfModalContext.Provider>
  )
}

// This is what every component calls: const { openModal } = usePdfModal()
export function usePdfModal() {
  return useContext(PdfModalContext)
}
