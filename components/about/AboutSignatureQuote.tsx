"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSignatureQuote() {
  const words = "WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE MOST VALUABLE, MOST INNOVATIVE AND MOST ADMIRED COMPANIES".split(' ');

  return (
    <section className="relative overflow-hidden py-32"
             style={{ background:'linear-gradient(135deg,#050c0a 0%,#0b1a10 50%,#050c0a 100%)' }}>
      {/* Gold top line */}
      <div className="absolute top-0 inset-x-0 h-px"
           style={{ background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.5),transparent)' }} />
      {/* Gold bottom line */}
      <div className="absolute bottom-0 inset-x-0 h-px"
           style={{ background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)' }} />
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background:'radial-gradient(ellipse at 50% 50%,rgba(201,168,76,0.06) 0%,transparent 65%)' }} />
      {/* Vertical gold accent lines */}
      <div className="absolute left-12 top-12 bottom-12 w-px hidden lg:block"
           style={{ background:'linear-gradient(to bottom,transparent,rgba(201,168,76,0.25),transparent)' }} />
      <div className="absolute right-12 top-12 bottom-12 w-px hidden lg:block"
           style={{ background:'linear-gradient(to bottom,transparent,rgba(201,168,76,0.25),transparent)' }} />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div className="flex items-center justify-center gap-4 mb-14"
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ duration:1 }}
        >
          <div className="h-px w-12" style={{ background:'rgba(201,168,76,0.5)' }} />
          <span className="text-[#c9a84c] text-[9px] tracking-[0.5em] uppercase font-light">
            Our Vision
          </span>
          <div className="h-px w-12" style={{ background:'rgba(201,168,76,0.5)' }} />
        </motion.div>

        {/* Animated word-by-word quote */}
        <h2 className="font-light text-white leading-relaxed"
            style={{ fontSize:'clamp(1.4rem,3.5vw,2.6rem)', letterSpacing:'0.04em' }}>
          {words.map((word, i) => (
            <motion.span key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity:0, y:15 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay: i * 0.04, ease:'easeOut' }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Animated underline */}
        <motion.div className="mx-auto mt-12 h-px origin-center"
          style={{ background:'linear-gradient(90deg,transparent,#c9a84c,transparent)' }}
          initial={{ scaleX:0 }} whileInView={{ scaleX:1 }}
          viewport={{ once:true }} transition={{ duration:1.2, delay:0.5 }}
        />

        {/* Sub-label */}
        <motion.p className="mt-8 text-white/25 text-xs tracking-[0.3em] uppercase font-light"
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ duration:1, delay:1 }}
        >
          Dar Al-Maamar · Real Estate Development
        </motion.p>
      </div>
    </section>
  );
}
