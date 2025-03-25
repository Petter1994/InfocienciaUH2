import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import { Posts } from "@/data/post";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infociencia Habana",
  description: "Infociencia Habana",
};

export default function Home() {


  return (
    <main>
      <ScrollUp />
      <Hero />
      {/*<Features />*/}
      <HomeBlogSection posts={Posts} />
      {/*<About />*/}
      <CallToAction />

      <Testimonials />
      <Faq />
      {/*<Team />*/}
      <Contact />
      <Clients />
    </main>
  );
}
