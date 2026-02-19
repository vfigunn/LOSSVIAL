import { useEffect, useRef, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MachineData {
  name: string;
  image: string;
  description: string;
}

const machines: MachineData[] = [
  {
    name: "CAT 120",
    image: "/assets/machines/cat-120.png",
    description: "Motoniveladora",
  },
  {
    name: "CAT 126",
    image: "/assets/machines/cat-126.png",
    description: "Minicargadora",
  },
  {
    name: "CAT 24063",
    image: "/assets/machines/cat-24063.png",
    description: "Excavadora Hidráulica",
  },
  {
    name: "CAT 320",
    image: "/assets/machines/cat-320.png",
    description: "Excavadora",
  },
];

export const MachinesCarouselSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-animate") || "0";
            setTimeout(() => {
              el.style.transition =
                "opacity 0.6s ease-out, transform 0.6s ease-out";
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

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % machines.length);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(
        ((index % machines.length) + machines.length) % machines.length
      );
      setIsAutoPlaying(false);
      // Resume autoplay after 8 seconds of inactivity
      setTimeout(() => setIsAutoPlaying(true), 8000);
    },
    []
  );

  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  return (
    <section
      id="maquinaria"
      className="py-20 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16" data-animate="0">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">
            Nuestra Maquinaria
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Flota de equipos de alta gama
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contamos con maquinaria Caterpillar de última generación para
            garantizar la máxima eficiencia en cada proyecto.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative" data-animate="200">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm shadow-lg border border-border flex items-center justify-center text-primary hover:bg-vial-yellow hover:text-vial-yellow-foreground hover:border-vial-yellow transition-all duration-300 hover:scale-110"
            aria-label="Máquina anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm shadow-lg border border-border flex items-center justify-center text-primary hover:bg-vial-yellow hover:text-vial-yellow-foreground hover:border-vial-yellow transition-all duration-300 hover:scale-110"
            aria-label="Máquina siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            <div className="relative w-full max-w-5xl h-[420px] md:h-[500px]">
              {machines.map((machine, index) => (
                <MachineCard
                  key={machine.name}
                  machine={machine}
                  index={index}
                  activeIndex={activeIndex}
                  total={machines.length}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {machines.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-10 bg-vial-yellow shadow-vial"
                    : "w-3 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Ir a máquina ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Individual 3D Card ──────────────────────────────────────────────

interface MachineCardProps {
  machine: MachineData;
  index: number;
  activeIndex: number;
  total: number;
  onClick: () => void;
}

const MachineCard = ({
  machine,
  index,
  activeIndex,
  total,
  onClick,
}: MachineCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const isActive = index === activeIndex;

  // Calculate relative position for carousel arrangement
  const getPosition = () => {
    let diff = index - activeIndex;
    // Wrap around
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absPos = Math.abs(diff);
    const sign = Math.sign(diff);

    if (absPos === 0) {
      return {
        x: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
        rotateY: 0,
      };
    }
    if (absPos === 1) {
      return {
        x: sign * 340,
        z: -180,
        scale: 0.78,
        opacity: 0.7,
        zIndex: 5,
        rotateY: sign * -25,
      };
    }
    // Further items
    return {
      x: sign * 500,
      z: -350,
      scale: 0.55,
      opacity: 0.3,
      zIndex: 1,
      rotateY: sign * -40,
    };
  };

  const pos = getPosition();

  // 3D cursor tilt effect for active card
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isActive || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateY = (mouseX / (rect.width / 2)) * 15;
      const rotateX = -(mouseY / (rect.height / 2)) * 10;

      setTilt({ rotateX, rotateY });
    },
    [isActive]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  const finalRotateX = isActive ? tilt.rotateX : 0;
  const finalRotateY = isActive
    ? tilt.rotateY + pos.rotateY
    : pos.rotateY;

  return (
    <div
      ref={cardRef}
      className={`absolute top-1/2 left-1/2 w-[280px] md:w-[380px] transition-all duration-700 ease-out ${
        isActive ? "cursor-grab" : "cursor-pointer"
      }`}
      style={{
        transform: `translate(-50%, -50%) translateX(${pos.x}px) translateZ(${pos.z}px) scale(${pos.scale}) rotateX(${finalRotateX}deg) rotateY(${finalRotateY}deg)`,
        opacity: pos.opacity,
        zIndex: pos.zIndex,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={!isActive ? onClick : undefined}
    >
      <div
        className={`relative rounded-2xl overflow-hidden transition-shadow duration-500 ${
          isActive
            ? "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] ring-2 ring-vial-yellow/40"
            : "shadow-card"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Reflective gloss overlay */}
        {isActive && (
          <div
            className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
            style={{
              background: `linear-gradient(${
                105 + tilt.rotateY * 2
              }deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)`,
              transition: "background 0.1s ease-out",
            }}
          />
        )}

        {/* Image */}
        <div className="relative bg-white dark:bg-muted p-6 md:p-8 flex items-center justify-center h-[260px] md:h-[330px]">
          <img
            src={machine.image}
            alt={`${machine.name} - ${machine.description} | Loss Vial S.A.`}
            className={`w-full h-full object-contain  transition-transform duration-700 ${
              isActive ? "scale-105" : ""
            }`}
            draggable={false}
          />
          {/* Subtle shadow under machine */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/10 dark:bg-black/20 rounded-[50%] blur-md" />
        </div>

        {/* Info bar */}
        <div className="bg-white dark:bg-card border-t border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-primary">
                {machine.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {machine.description}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">
                Operativa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
