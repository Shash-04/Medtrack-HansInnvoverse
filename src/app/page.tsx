"use client"


import Footer from "@/components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import MedTrackStats from "@/components/MedTrackStats"
import { Reviews } from "@/components/Reviews"

function page() {
  return (
    <div>
      <HeroSection />
      <MedTrackStats />
      <Reviews />
      <Footer/>
    </div>
  )
}

export default page
