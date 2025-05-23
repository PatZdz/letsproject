'use client'

import { notFound } from 'next/navigation'
import { useState, use } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import HeaderProject from './components/HeaderProject'
import OverviewProject from './components/OverviewProject'
import ChallengesProject from './components/ChallengesProject'
import Needs from './components/Needs'
import Branding from './components/Branding'
import SolutionProject from './components/SolutionProject'
import ResultsProject from './components/ResultsProject'
import GalleryProject from './components/GalleryProject'
import TechnologiesProject from './components/TechnologiesProject'
import projectData from '@/app/data/(projects)/fitwise.json'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { slug } = use(params)

  if (slug !== 'fitwise') {
    notFound()
  }

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main className="min-h-screen w-full">
        <HeaderProject {...projectData.header} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          <OverviewProject {...projectData.overview} />
          <ChallengesProject challenges={projectData.challenges} />
          <Needs {...projectData.needs} />
          <Branding {...projectData.branding} />
          <SolutionProject {...projectData.solutions} />
          <ResultsProject metrics={projectData.results.metrics} achievements={projectData.results.achievements} />
          <GalleryProject gallery={projectData.gallery} />
          <TechnologiesProject technologies={projectData.technologies} />
        </div>
      </main>
      <Footer />
    </>
  )
}
