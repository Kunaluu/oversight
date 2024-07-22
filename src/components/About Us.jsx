// import React from "react";
// import person1Image from "../assets/kunal.jpg";
// import person2Image from "../assets/michelle.jpg";

// const AboutUs = () => {
//   return (
//     <section id='about'>
//     <div className="flex flex-col items-center justify-center bg-primary p-4">
//       <h1 className="text-4xl font-semibold text-white mb-8">This is us</h1>
//       <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
//         {/* Person 1 */}
//         <div className="flex flex-col items-center">
//           <img
//             src= {person1Image}
//             alt="Person 1"
//             className="w-48 h-48 object-cover rounded-full"
//           />
//           <p className="text-xl text-white mt-4">Kunal Umbrani</p>
//           <p className="text-white mt-2 text-center max-w-md">
//               Hey! I'm Kunal a recent computer science graduate. I'm excited to be working on buildspace and work on cool shit!
//             </p>
//         </div>
//         {/* Person 2 */}
//         <div className="flex flex-col items-center">
//           <img
//             src= {person2Image}
//             alt="Person 2"
//             className="w-48 h-48 object-cover rounded-full"
//           />
//           <p className="text-xl text-white mt-4">Michelle Dsouza</p>
//           <p className="text-white mt-2 text-center max-w-md">
//             Hi, I'm Michelle! I love working with AI and want to build interesting stuff with it!
//           </p>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";
import person1Image from "../assets/kunal.jpg";
import person2Image from "../assets/michelle.jpg";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center bg-customBlue p-20">
        <h1 className="text-5xl font-semibold text-white mt-8 mb-16">
          This is us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {/* Person 1 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white">
            <img
              src={person1Image}
              alt="Kunal Umbrani"
              className="w-60 h-48 object-cover rounded-full mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mt-4">
              Kunal Umbrani
            </h2>
            <p className="text-white mt-5 text-center">
              Hey, I'm Kunal, a Computer Science graduate with a profound
              fascination for the potential of Machine Learning and Generative
              AI. Every new project and discovery drives me to delve deeper into
              the development of these fields. I am equally passionate about
              Game Development, where I blend my expertise with creative design
              to build captivating and engaging experiences.
            </p>
          </div>
          {/* Person 2 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white">
            <img
              src={person2Image}
              alt="Michelle Dsouza"
              className="w-60 h-48 object-cover rounded-full mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mt-4">
              Michelle Dsouza
            </h2>
            <p className="text-white mt-5 text-center">
              Hi, I'm Michelle. I'm a Computer Science graduate immersed in
              Artificial Intelligence and 3D Animation. My focus lies on
              leveraging automation and AI to build innovative approaches. I
              thrive on crafting compelling narratives through visual
              storytelling, seamlessly merging imagination with technology, and
              bringing dynamic worlds to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
