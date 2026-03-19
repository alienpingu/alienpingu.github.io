import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { oldPortfolioItems } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import useEmblaCarousel from 'embla-carousel-react';

interface OldPortfolioSectionProps {
  visibleElements: Set<string>;
}

const OldPortfolioSection: React.FC<OldPortfolioSectionProps> = ({ visibleElements }) => {
  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);
  const [hasAnimatedContent, setHasAnimatedContent] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  const [emblaRefMain, emblaApiMain] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });
  
  const [emblaRefThumbs, emblaApiThumbs] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  useEffect(() => {
    if (visibleElements.has("old-portfolio-header") && !hasAnimatedHeader) {
      setHasAnimatedHeader(true);
    }
    if (visibleElements.has("old-portfolio-content") && !hasAnimatedContent) {
      setHasAnimatedContent(true);
    }
  }, [visibleElements, hasAnimatedHeader, hasAnimatedContent]);

  useEffect(() => {
    if (!emblaApiMain || !emblaApiThumbs) return;
    
    const handleMainSelect = () => {
      const index = emblaApiMain.selectedScrollSnap();
      setSelectedIndex(index);
      if (!emblaApiThumbs.scrollSnapList().includes(index)) {
        emblaApiThumbs.scrollTo(index);
      }
    };
    
    const handleThumbsSelect = () => {
      const index = emblaApiThumbs.selectedScrollSnap();
      if (!emblaApiMain.scrollSnapList().includes(index)) {
        emblaApiMain.scrollTo(index);
      }
    };
    
    emblaApiMain.on('select', () => handleMainSelect());
    emblaApiThumbs.on('select', () => handleThumbsSelect());
    
    return () => {
      emblaApiMain.off('select');
      emblaApiThumbs.off('select');
    };
  }, [emblaApiMain, emblaApiThumbs]);

  const nextSlide = () => {
    if (emblaApiMain) emblaApiMain.scrollNext();
  };

  const prevSlide = () => {
    if (emblaApiMain) emblaApiMain.scrollPrev();
  };

  const onThumbClick = (index: number) => {
    if (emblaApiMain) emblaApiMain.scrollTo(index);
  };

  return (
    <section id="old-portfolio" className="py-20 border-t-8 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            hasAnimatedHeader ? "animate-slide-up" : ""
          }`}
          id="old-portfolio-header"
        >
          <h2 className="text-6xl font-black mb-4">OLD PORTFOLIO</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div
          className={`relative transition-all duration-700 delay-200 ${
            hasAnimatedContent ? "animate-slide-up" : ""
          }`}
          id="old-portfolio-content"
          ref={portfolioRef}
        >
          <div className="bg-white p-8 min-h-[500px] flex flex-col justify-between">
            <div className="overflow-hidden select-none mb-6" ref={emblaRefMain}>
              <div className="flex">
                {oldPortfolioItems.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.33%] px-2 transition-transform duration-500" style={{ transform: selectedIndex === index ? 'scale(1)' : 'scale(0.95)' }}>
                    <Card
                      className="border-2 border-black rounded-lg overflow-hidden cursor-pointer h-full"
                      onClick={() => window.open(item.url, "_blank")}
                    >
                      <CardHeader className="p-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded"
                        />
                      </CardHeader>
                      <CardContent className="p-4 bg-white text-black text-center font-bold">
                        <CardTitle>{item.title}</CardTitle>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden select-none mt-4 md:hidden" ref={emblaRefThumbs}>
              <div className="flex gap-2 justify-center">
                {oldPortfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-[0_0_20%] cursor-pointer opacity-50 transition-opacity ${
                      selectedIndex === index ? "opacity-100" : ""
                    }`}
                    onClick={() => onThumbClick(index)}
                  >
                    <div className="border-2 border-black rounded-lg overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={`${item.title} thumbnail`}
                        className="w-full h-16 object-cover rounded"
                      />
                      <div className="p-1 bg-black text-white text-center text-xs font-bold">
                        {item.title || 'N/A'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center mt-4 md:hidden">
              <span className="text-lg font-bold">
                {selectedIndex + 1} / {oldPortfolioItems.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldPortfolioSection;
