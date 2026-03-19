import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import useEmblaCarousel from 'embla-carousel-react';

interface ProjectsSectionProps {
  visibleElements: Set<string>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  const nextProject = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const prevProject = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  return (
    <section id="projects" className="py-20 border-t-8 border-black bg-white ">
      <div>
      <div className="text-center mb-16" id="projects-header">
        <h2 className="text-6xl font-black mb-4">PROJECTS</h2>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>

      <div className="relative" id="projects-content">
        <div className="bg-white py-8 min-h-[500px] flex flex-col justify-between">
        <div className="overflow-hidden select-none" ref={emblaRef}>
          <div className="flex">
          {projects.map((project, index) => (
            <div key={index} className="flex-[0_0_68%] md:flex-[0_0_45%] lg:flex-[0_0_22.25%] px-2">
            <Card className="border-2 border-black mb-4 relative h-full">
              <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
              <div className="flex flex-wrap gap-2 mb-12">
                {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-black text-white px-4 py-2 font-bold text-sm">
                  {tech}
                </span>
                ))}
              </div>
              </CardContent>
              {project.website && (
              <CardFooter>
                <Button
                onClick={() => window.open(project.website, '_blank')}
                className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 flex items-center gap-2 hover:bg-white hover:text-black border-2 border-black transition-all duration-200"
                >
                <ExternalLink size={16} />
                Visit Website
                </Button>
              </CardFooter>
              )}
            </Card>
            </div>
          ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 px-4">
          <Button
          onClick={prevProject}
          className="bg-black text-white p-4 hover:bg-white hover:text-black border-2 border-black transition-all duration-200"
          >
          <ChevronLeft size={24} />
          </Button>
          <Button
          onClick={nextProject}
          className="bg-black text-white p-4 hover:bg-white hover:text-black border-2 border-black transition-all duration-200"
          >
          <ChevronRight size={24} />
          </Button>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
