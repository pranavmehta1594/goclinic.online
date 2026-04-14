'use client'

import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faCheckCircle,
  faMessage,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons'
import FeatureCarousel from './FeatureCarousel'
import CRMFeatureTabs from './Featurestabs'

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-0 relative overflow-hidden">
        {/* Top Section - Heading & CTA */}
        <div className="text-center mb-8">
          {/* AI Powered Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-8">
            <span className="text-sm font-medium text-blue-600">AI Powered</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-red-500">SIM Based</span>{' '}
            <span className="text-gray-900">Call Management</span>
            <br />
            <span className="text-gray-900">CRM</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            2x Calling Productivity in Just 2 Weeks. Earn Trust on Every Call.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/demo"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 min-w-max"
            >
              Book A Demo
            </Link>
            <Link
              href="/trial"
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-max"
            >
              Start 10-Day Free Trial
            </Link>
          </div>

          {/* No Credit Card Text */}
          <p className="text-sm text-gray-500">No Credit Card Required</p>
        </div>
        {/* <FeatureCarousel /> */}
        <CRMFeatureTabs />
      </div>
    </section>
  )
}
