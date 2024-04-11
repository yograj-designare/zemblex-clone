"use client";

import { AboutUs } from "@/sections/Homepage/AboutUs";
import { ContactUs } from "@/sections/Homepage/ContactUs";
import { Header } from "@/sections/Homepage/Header";
import { LastestProjects } from "@/sections/Homepage/LastestProjects";
import { LatestBlogs } from "@/sections/Homepage/LatestBlogs";
import { NewsLetter } from "@/sections/Homepage/NewsLetter";
import { OurProducts } from "@/sections/Homepage/OurProducts";
import { OurServices } from "@/sections/Homepage/OurServices";
import { OurSkills } from "@/sections/Homepage/OurSkills";
import { Testimonials } from "@/sections/Homepage/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <OurSkills />
      <OurServices />
      <LastestProjects />
      <Testimonials />
      <OurProducts />
      <LatestBlogs />
      <NewsLetter />
      <ContactUs />
    </>
  );
}
