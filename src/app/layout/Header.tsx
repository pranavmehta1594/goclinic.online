'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  href?: string
  submenu?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: 'Products',
    submenu: [
      { label: 'Clinic Management', href: '/products/clinic' },
      { label: 'Patient Portal', href: '/products/patient-portal' },
      { label: 'Telemedicine', href: '/products/telemedicine' },
    ],
  },
  {
    label: 'Features',
    submenu: [
      { label: 'Appointments', href: '/features/appointments' },
      { label: 'Electronic Records', href: '/features/ehr' },
      { label: 'Billing & Payment', href: '/features/billing' },
      { label: 'Analytics', href: '/features/analytics' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Resources',
    submenu: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
      { label: 'Community', href: '/community' },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md w-full' : 'bg-transparent w-full'
    }`}>
      <nav className={`mx-auto px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'max-w-full' : 'max-w-6xl'
      }`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              GoClinic
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => item.submenu && toggleDropdown(item.label)}
                  className="group relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-3 h-3 transform transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="invisible group-hover:visible absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl py-2 transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Request A Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/demo"
              className="hidden sm:inline-block px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={mobileMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      item.submenu && toggleMobileDropdown(item.label)
                    }
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors flex justify-between items-center"
                  >
                    {item.label}
                    {item.submenu && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-3 h-3 transform transition-transform ${
                          mobileDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.submenu && mobileDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-2 space-y-2 border-t border-gray-200">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/demo"
                  className="block px-3 py-2 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request A Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}