import { notFound } from 'next/navigation'
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

interface ProjectPageProps {
  params: { slug: string }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Używamy await dla params, aby upewnić się, że są dostępne przed destrukturyzacją
  const params_resolved = await params;
  const { slug } = params_resolved;

  let projectData;

  try {
    projectData = await import(`@/app/data/(projects)/${slug}.json`).then(module => module.default);
    if (!projectData) {
      notFound();
    }
  } catch (error) {
    console.error(`Error loading project data for slug ${slug}:`, error);
    notFound();
  }

  return (
    <>
      <Navbar />
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
