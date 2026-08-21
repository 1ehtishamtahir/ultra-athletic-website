"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/data";
import { Artwork } from "@/components/art/Artwork";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Soccer", "Cricket", "Basketball", "Baseball", "Ice Hockey"];

const VARIANT: Record<string, "soccer" | "cricket" | "basketball" | "baseball" | "ice-hockey"> = {
  Soccer: "soccer",
  Cricket: "cricket",
  Basketball: "basketball",
  Baseball: "baseball",
  "Ice Hockey": "ice-hockey",
};

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const items = useMemo(
    () => GALLERY_ITEMS.filter((item) => filter === "All" || item.sport === filter),
    [filter]
  );

  const activeIndex = lightbox !== null ? items.findIndex((i) => i.id === lightbox) : -1;

  const move = (dir: 1 | -1) => {
    if (activeIndex < 0 || items.length === 0) return;
    const next = (activeIndex + dir + items.length) % items.length;
    setLightbox(items[next].id);
  };

  return (
    <section className="relative bg-ink-950 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mb-12 md:mb-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#5a8a00]">
                Gallery
              </p>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold uppercase leading-tight tracking-tight text-ink-100">
                On The Field.<br />
                <span className="text-mist-500">In The Light.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                    filter === f
                      ? "border-volt bg-volt text-black"
                      : "border-[#e0e0e0] text-mist-400 hover:border-[#1a1a1b]/40 hover:text-ink-100"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div
          layout={!reduced}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
        >
          <AnimatePresence>
            {items.map((item) => (
              <motion.figure
                layout={!reduced}
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-[#2a2a30] bg-[#131316]"
              >
                <button
                  onClick={() => setLightbox(item.id)}
                  className="block w-full"
                  aria-label={`Open ${item.label}`}
                >
                  <div className="relative overflow-hidden">
                    <Artwork
                      variant={VARIANT[item.sport]}
                      color={
                        {
                          Soccer: "#3DD9FF",
                          Cricket: "#C6FF3D",
                          Basketball: "#FF9B3D",
                          Baseball: "#FF4D2E",
                          "Ice Hockey": "#7A8CFF",
                        }[item.sport]
                      }
                      style={{ height: item.height }}
                      className="transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        {item.label}
                      </span>
                      <span className="grid size-8 place-items-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                        <ChevronRight className="size-3.5" />
                      </span>
                    </figcaption>
                  </div>
                </button>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-[#0a0a0b]/90 backdrop-blur-lg"
              onClick={() => setLightbox(null)}
            />
            <motion.div
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#2a2a30] bg-[#131316]"
            >
              {activeIndex >= 0 && (
                <>
                  <Artwork
                    variant={VARIANT[items[activeIndex].sport]}
                    color={
                      {
                        Soccer: "#3DD9FF",
                        Cricket: "#C6FF3D",
                        Basketball: "#FF9B3D",
                        Baseball: "#FF4D2E",
                        "Ice Hockey": "#7A8CFF",
                      }[items[activeIndex].sport]
                    }
                    style={{ height: "min(64vh, 560px)" }}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between px-6 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist-400">
                      {items[activeIndex].label}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-mist-500">
                      {activeIndex + 1} / {items.length}
                    </p>
                  </div>

                  <button
                    onClick={() => move(-1)}
                    aria-label="Previous"
                    className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#0a0a0b]/60 text-white backdrop-blur transition-colors hover:bg-[#0a0a0b]"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={() => move(1)}
                    aria-label="Next"
                    className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#0a0a0b]/60 text-white backdrop-blur transition-colors hover:bg-[#0a0a0b]"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <button
                    onClick={() => setLightbox(null)}
                    aria-label="Close"
                    className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/15 bg-[#0a0a0b]/60 text-white backdrop-blur transition-colors hover:bg-[#0a0a0b]"
                  >
                    <X className="size-4" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}