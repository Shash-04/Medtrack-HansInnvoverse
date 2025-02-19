"use client"


import Footer from "@/components/Footer"
import HeroSection from "../components/HeroSection"
import MedTrackStats from "@/components/MedTrackStats"
import { Reviews } from "@/components/Reviews"

function page() {
  return (
    <div className="px-5">
      <HeroSection />
      <MedTrackStats />
      <Reviews />
      <Footer/>
    </div>
  )
}

export default page
