import React from "react";
import person1Image from "../assets/kunal.jpg";
import person2Image from "../assets/michelle.jpg";

const AboutUs = () => {
  return (
    <section id='about'>
    <div className="flex flex-col items-center justify-center bg-primary p-4">
      <h1 className="text-4xl font-semibold text-white mb-8">This is us</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
        {/* Person 1 */}
        <div className="flex flex-col items-center">
          <img
            src= {person1Image}
            alt="Person 1"
            className="w-48 h-48 object-cover rounded-full"
          />
          <p className="text-xl text-white mt-4">Kunal Umbrani</p>
          <p className="text-white mt-2 text-center max-w-md">
              Hey! I'm Kunal a recent computer science graduate. I'm excited to be working on buildspace and work on cool shit!
            </p>
        </div>
        {/* Person 2 */}
        <div className="flex flex-col items-center">
          <img
            src= {person2Image}
            alt="Person 2"
            className="w-48 h-48 object-cover rounded-full"
          />
          <p className="text-xl text-white mt-4">Michelle Dsouza</p>
          <p className="text-white mt-2 text-center max-w-md">
            Hi, I'm Michelle! I love working with AI and want to build interesting stuff with it!
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;