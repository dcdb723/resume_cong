import React, { useState, useEffect, useRef } from 'react';
import { Job } from '../types';

interface WorkCardProps {
  job: Job;
}

const WorkCard: React.FC<WorkCardProps> = ({ job }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const hasImages = job.imageUrls && job.imageUrls.length > 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Element is considered visible when 30% visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasImages || job.imageUrls!.length <= 1 || isHovered || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % job.imageUrls!.length);
    }, 3000); // 3 second delay

    return () => clearInterval(interval);
  }, [hasImages, job.imageUrls, isHovered, isVisible]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering any parent clicks if necessary
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % job.imageUrls!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + job.imageUrls!.length) % job.imageUrls!.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  }

  return (
    <div ref={cardRef} className="relative group bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Visual Column */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 flex-shrink-0 relative self-stretch">
          <div 
            className="md:absolute md:inset-0 bg-slate-100 rounded-xl overflow-hidden relative shadow-inner group/image w-full aspect-[460/996] md:aspect-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {hasImages ? (
              <>
                {/* 1. Blurred Background Layer */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={job.imageUrls![currentImageIndex]} 
                    alt="Background Blur"
                    className="w-full h-full object-cover blur-xl opacity-50 scale-110 transition-opacity duration-500" 
                  />
                </div>

                {/* 2. Main Content Layer (Object Contain) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center p-2">
                  <img 
                    src={job.imageUrls![currentImageIndex]} 
                    alt={`${job.role} - Image ${currentImageIndex + 1}`} 
                    className="w-full h-full object-contain drop-shadow-lg animate-fade-in transition-opacity duration-300" 
                  />
                </div>
                
                {/* Carousel Controls - Only show if more than 1 image */}
                {job.imageUrls!.length > 1 && (
                  <div className="z-20 relative h-full w-full pointer-events-none">
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity shadow-sm pointer-events-auto"
                    >
                      <span className="material-icons text-sm">chevron_left</span>
                    </button>
                    
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity shadow-sm pointer-events-auto"
                    >
                      <span className="material-icons text-sm">chevron_right</span>
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-auto">
                      {job.imageUrls!.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToImage(idx)}
                          className={`w-1.5 h-1.5 rounded-full transition-all shadow-sm ${
                            idx === currentImageIndex 
                              ? 'bg-white w-3' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                 <span className="material-icons text-4xl mb-2">image_not_supported</span>
                 <p className="text-sm">No Visual Available</p>
              </div>
            )}
            
            {/* Hover overlay/hint removed to keep clean, controls appear on hover */}
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">{job.role}</h3>
              <p className="text-lg text-blue-600 font-medium">{job.company}</p>
            </div>
            <div className="text-slate-500 text-sm mt-1 md:mt-0 bg-slate-100 px-3 py-1 rounded-full w-fit">
              {job.period} | {job.location}
            </div>
          </div>

          <div className="mb-6">
             <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Project</h4>
             <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <p className="font-semibold text-slate-800">{job.project}</p>
                <p className="text-slate-600 text-sm mt-1">{job.projectDesc}</p>
             </div>
          </div>

          <ul className="space-y-3">
            {job.description.map((desc, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                {desc}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {job.keywords.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
