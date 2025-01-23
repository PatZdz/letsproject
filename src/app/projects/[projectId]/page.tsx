import { notFound } from 'next/navigation';
import Image from 'next/image';

type Props = {
  params: { projectId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

const projectsData: Record<string, Project> = {
  "fitwise": {
    title: "FitWise",
    description: "Fitness management SaaS for sports facilities and personal trainers",
    fullDescription: "FitWise combines an intuitive interface with advanced features to deliver a tool that supports the growth and efficiency of managing any sports facility - from gyms to dance schools to fitness clubs.",
    image: "/images/project_1.jpg",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    challenge: "Creating an intuitive fitness management system that provides comprehensive tools for facility management while maintaining simplicity and ease of use.",
    solution: "We developed a modern SaaS platform that combines powerful management features with an intuitive interface, making complex tasks simple and efficient.",
    results: [
      "200% increase in management efficiency",
      "4.9/5 average user rating",
      "50,000+ active monthly users",
      "Used by leading fitness facilities"
    ],
    testimonial: {
      quote: "LetsProject has transformed our brand with a stunning new identity and a website that perfectly reflects our vision. Their attention to detail and creativity made the entire process a breeze.",
      author: "Daniel Semerjyan",
      position: "Co-Founder",
      company: "FitWise"
    }
  }
};

export default async function ProjectPage({ params }: Props) {
  if (!params?.projectId) {
    notFound();
  }

  const project = projectsData[params.projectId];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6F4F1]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {project.description}
          </p>
          <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">About the Project</h2>
            <p className="text-gray-600 mb-8">{project.fullDescription}</p>
            
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white rounded-md text-sm text-gray-600">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Challenge & Solution</h2>
            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">The Challenge</h3>
              <p className="text-gray-600 mb-6">{project.challenge}</p>
              
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">Our Solution</h3>
              <p className="text-gray-600">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="bg-[#F6F4F1] rounded-xl p-6">
                <p className="text-[#1A1A1A]">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 px-4">
          <div className="max-w-[800px] mx-auto bg-[#1A1A1A] text-white rounded-xl p-8">
            <p className="text-lg italic mb-6">&quot;{project.testimonial.quote}&quot;</p>
            <div>
              <p className="font-semibold">
                {project.testimonial.author}, {project.testimonial.position}
              </p>
              <p className="text-sm opacity-80">{project.testimonial.company}</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
