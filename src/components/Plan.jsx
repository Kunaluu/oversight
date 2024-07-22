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
import product1Image from "../assets/product1.jpg";
import product2Image from "../assets/product2.jpg";
import product3Image from "../assets/product3.jpg";
import product4Image from "../assets/product4.jpg";
import product5Image from "../assets/product5.jpg";

const Plan = () => {
  return (
    <section id="demo">
      <div className="flex flex-col items-center justify-center bg-primary p-4">
        <h1 className="text-5xl font-semibold text-white mt-20 mb-16">
          Our Product
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-7xl">

          {/* Feature 1 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent">
            <img
              src={product1Image}
              alt="Kunal Umbrani"
              className="w-60 h-48 object-cover rounded-full mb-4"
            />
            <h2 className="text-1xl font-semibold text-white mt-4">
              AUTOMATIC FLAGGING
            </h2>
            <p className="text-white mt-5 text-center">
              Faces are categorized as Green (trusted), Orange (regular
              visitors), or Red (strangers) based on visit frequency
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent">
            <img
              src={product2Image}
              alt="Michelle Dsouza"
              className="w-60 h-48 object-cover rounded-full mb-4"
            />
            <h2 className="text-1xl font-semibold text-white mt-4">
              MANUAL ADJUSTMENT
            </h2>
            <p className="text-white mt-5 text-center">
              {" "}
              Users can manually set flags for individuals
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent">
            <img
              src={product3Image}
              alt="Michelle Dsouza"
              className="w-60 h-48 object-cover rounded-full mb-4"
            />
            <h2 className="text-1xl font-semibold text-white mt-4">
              MOTION DETECTION
            </h2>
            <p className="text-white mt-5 text-center">
              Prolonged motion without facial recognition (eg. use of masks) is
              flagged as suspicious
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent">
            <img
              src={product4Image}
              alt="Michelle Dsouza"
              className="w-60 h-48 object-cover rounded-full mb-4"
            />
            <h2 className="text-1xl font-semibold text-white mt-4">
              INSTANT ALERTS
            </h2>
            <p className="text-white mt-5 text-center">
              Suspicious activity triggers immediate alerts
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent">
            <img
              src={product5Image}
              alt="Michelle Dsouza"
              className="w-60 h-48 object-cover rounded-full mb-4"
            />
            <h2 className="text-1xl font-semibold text-white mt-4">
              VISITOR STATISTICS
            </h2>
            <p className="text-white mt-5 text-center">
              A dashboard provides visitor data with weekly and monthly
              summaries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
