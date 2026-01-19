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

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      {/* Full-width Banner */}
      <Banner />
      <main className=" mx-auto max-w-7xl">
        <IndividualServices></IndividualServices>
      </main>

      {/* Main content container */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-xl w-full">
        
          <UserCard />

            <LoginButton />
         

          <p className="text-base-content/70 mb-8">
            This is the home page with Axios + MongoDB data.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Session</h2>
            <div className="bg-base-200 rounded-lg p-4 border">
              {session ? (
                <pre className="text-left text-sm overflow-x-auto">
                  {JSON.stringify(session, null, 2)}
                </pre>
              ) : (
                <p className="text-base-content/70">No active session</p>
              )}
            </div>
          </div>
        </div>
      </div>

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
