"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-4xl font-bold text-center mb-8 z-10">The MedTrack Effect: Pharmacists Speak Out</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
  );
}

const testimonials = [
  {
    quote:
    "MedTrack revolutionized our inventory management. We reduced waste by 37% in the first quarter alone. The real-time tracking is invaluable for controlled substances.",
    name: "Sarah Chen, PharmD",
    title: "Clinical Pharmacist at Valley Health",
  },
  {
    quote:
    "After 20 years of running my pharmacy, I wish I'd found MedTrack sooner. The automated reordering system is a game-changer, and customer support is exceptional.",
    name: "James O'Malley, RPh",
    title: "Owner, Family Care Pharmacy",
  },
  {
    quote: "Robust system that streamlined our multi-department inventory. Would be perfect with better mobile optimization, but the analytics features are outstanding.",
    name: "Dr. Michael Patel",
    title: "Hospital Pharmacy Director",
  },
  {
    quote:
     "Integration was seamless with our existing systems. The predictive analytics helped us optimize stock levels across our 5 locations. Excellent ROI.",
    name: "Lisa Rodriguez, PharmD",
    title: "Lead Pharmacist, MediCare Plus",
  },
  {
    quote:
     "MedTrack's reporting features are outstanding. We can generate regulatory compliance reports in minutes instead of hours. The audit trail functionality is excellent for DEA requirements.",
    name: "Dr. Sophia Martinez",
    title: "Clinical Pharmacy Coordinator",
  },
  
];



