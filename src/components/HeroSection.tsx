"use client";
import { AuroraBackground } from "@/components/ui/aurora-background"


import React from 'react'
import Cards from "./Cards";

function HeroSection() {
    return (
        <div>
            <AuroraBackground >
                {/* <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                > */}
              
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Why MedTrack?
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    Innovating together For a better future
                    </div>
                {/* </motion.div> */}
                <div>
                <Cards />
                </div>
            </AuroraBackground>
        </div>
    )
}

export default HeroSection
