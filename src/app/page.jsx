// import { useState, useEffect } from "react";
import api from "./lib/axios";
import LoginButton from "./Component/LoginButton";
import UserCard from "./Component/UserCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Services from "./Component/Service";
import WhyChooseUs from "./Component/WhyChooseUs";
import Pricing from "./Component/Pricing";
import Team from "./Component/Team";
import Contact from "./Component/Testimony";
import IndividualServices from "./Component/IndividualServices";

import FleetPreview from "./Component/fleeet";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      {/* Full-width Banner */}
      <Banner />
      <main className=" mx-auto max-w-7xl">
        <IndividualServices></IndividualServices>
      </main>
      <FleetPreview></FleetPreview>

      
    

      {/* Full-width Footer */}
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Team />
      <Contact />
      
      <Footer />
    </div>
  );
}
