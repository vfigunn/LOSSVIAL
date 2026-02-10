import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface ReelPost {
  video: string;
  caption: string;
  likes: number;
  comments: number;
  instagramUrl: string;
}

const reelsPosts: ReelPost[] = [
  {
    video: "/assets/video1.mp4",
    caption: "Movimiento de suelos a gran escala 🚜 Preparando el terreno para nuevos proyectos.",
    likes: 64,
    comments: 11,
    instagramUrl: "https://www.instagram.com/lossvial",
  },
  {
    video: "/assets/video2.mp4",
    caption: "Nuestra maquinaria pesada en acción 💪 Potencia y precisión en cada obra.",
    likes: 82,
    comments: 14,
    instagramUrl: "https://www.instagram.com/lossvial",
  },
  {
    video: "/assets/video3.mp4",
    caption: "Obras que transforman Gualeguaychú 🏗️ Más de 30 años de experiencia nos respaldan.",
    likes: 91,
    comments: 18,
    instagramUrl: "https://www.instagram.com/lossvial",
  },
];

export const SocialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);


  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-animate") || "0";
            setTimeout(() => {
              el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Play active video at 0.5x speed, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.playbackRate = 0.5;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  // Detect active card from scroll position (for touch/swipe)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const containerCenter = carousel.scrollLeft + carousel.offsetWidth / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;

        Array.from(carousel.children).forEach((child) => {
          const el = child as HTMLElement;
          const idx = el.getAttribute("data-card-index");
          if (idx === null) return; // skip spacer divs
          const cardCenter = el.offsetLeft + el.offsetWidth / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = parseInt(idx);
          }
        });

        if (closestIndex !== activeIndex) {
          setActiveIndex(closestIndex);
        }
      }, 100);
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeIndex]);

  const scrollToCard = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, reelsPosts.length - 1));
    setActiveIndex(clampedIndex);

    const carousel = carouselRef.current;
    const card = carousel?.children[clampedIndex] as HTMLElement;
    if (carousel && card) {
      const scrollLeft = card.offsetLeft - carousel.offsetWidth / 2 + card.offsetWidth / 2;
      carousel.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  const canGoLeft = activeIndex > 0;
  const canGoRight = activeIndex < reelsPosts.length - 1;

  return (
    <section className="py-20 bg-muted/30 overflow-hidden" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12" data-animate="0">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Redes Sociales</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Seguinos en nuestras redes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Mirá nuestros últimos trabajos y enterate de las novedades de Loss Vial S.A.
          </p>
          <a
            href="https://www.instagram.com/lossvial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-vial-yellow hover:text-vial-yellow/80 font-semibold transition-colors"
          >
            <Instagram className="h-5 w-5" />
            @lossvial
          </a>
        </div>

        {/* Carousel */}
        <div className="relative" data-animate="100">
          {/* Navigation arrows */}
          {/* Arrows — hidden on mobile, swipe is used instead */}
          {reelsPosts.length > 1 && (
            <>
              <button
                onClick={() => scrollToCard(activeIndex - 1)}
                disabled={!canGoLeft}
                className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg items-center justify-center transition-all duration-300 ${
                  canGoLeft ? "hover:bg-vial-yellow hover:text-vial-yellow-foreground hover:scale-110" : "opacity-30 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scrollToCard(activeIndex + 1)}
                disabled={!canGoRight}
                className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg items-center justify-center transition-all duration-300 ${
                  canGoRight ? "hover:bg-vial-yellow hover:text-vial-yellow-foreground hover:scale-110" : "opacity-30 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Cards container */}
          <div
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory py-4 md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
          >
            {/* Left spacer for centering first card on mobile */}
            <div className="flex-shrink-0 w-[calc((100vw-280px)/2-8px)] md:hidden" />
            {reelsPosts.map((post, index) => (
              <div
                key={index}
                data-card-index={index}
                onClick={() => scrollToCard(index)}
                className={`relative flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-card cursor-pointer snap-center transition-all duration-500 ${
                  index === activeIndex
                    ? "scale-100 shadow-construction ring-2 ring-vial-yellow/50"
                    : "scale-[0.92] opacity-70 hover:opacity-90"
                }`}
                style={{ aspectRatio: "9/16" }}
              >
                {/* Video */}
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={post.video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />

                {/* Top gradient overlay */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                {/* Instagram header */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-vial-yellow">
                      <img src="/assets/logo.jpg" alt="Loss Vial" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white text-sm font-semibold drop-shadow-lg">lossvial</span>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm mb-3 line-clamp-2 drop-shadow-lg leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-white">
                        <Heart className="h-4 w-4 fill-white" />
                        <span className="text-xs font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white">
                        <MessageCircle className="h-4 w-4 fill-white" />
                        <span className="text-xs font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <a
                      href={post.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* Right spacer for centering last card on mobile */}
            <div className="flex-shrink-0 w-[calc((100vw-280px)/2-8px)] md:hidden" />
          </div>

          {/* Dots indicator */}
          {reelsPosts.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {reelsPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 h-2.5 bg-vial-yellow"
                      : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10" data-animate="200">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <a
              href="https://www.instagram.com/lossvial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Seguir en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
