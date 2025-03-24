import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import PagesHeader from "@/components/Headers/PagesHeader";
import AboutIntro from "@/components/AboutUs/AboutIntro";
import Services from "@/components/Services/Services1";
import TestimonialsWithVideo from "@/components/Testimonials/TestimonialsWithVideo";
import SkillsCircle from "@/components/Skills/SkillsCircle";
import Team from "@/components/Team/Team1";
import MinimalArea from "@/components/Others/MinimalArea1";
import Clients from "@/components/Clients/Clients1";
import CallToAction from "@/components/Others/CallToAction";
import Footer from "@/components/Common/Footer";
import Clients4 from "@/components/Clients/Clients4";

export const metadata = {
  title: "The Dark Light - About",
};

function AboutDark() {
  return (
    <>
      <Loading />
      <Navbar />
      <PagesHeader imageLink="/img/slid/about.jpg">
        Empowering Your Digital Future with Innovation
      </PagesHeader>
      <AboutIntro />
      <Services style="lficon" />
      <TestimonialsWithVideo />
      <SkillsCircle from="aboutPage" />
      <Team />
      <MinimalArea />
      {/* <Clients theme="dark" /> */}
      <Clients4 />
      <CallToAction />
      <Footer />
    </>
  );
}

export default AboutDark;
