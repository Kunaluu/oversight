// import { features } from "../constants";
import React, { useState,useEffect,useRef } from 'react';
import BuildspaceVideo from '../assets/vid1.mp4';


// const Business = () => {
//   const [videoSrc, setVideoSrc] = useState('');

//   const handleLiveVideoClick = () => {
//     setVideoSrc(BuildspaceVideo);
//   };

//   const handleRecordedVideoClick = () => {
//     setVideoSrc(BuildspaceVideo);
//   };

//   const handleVideoEnd = () => {
//     setVideoSrc('');
//   };

//   return (
//     <div className="video-options-container bg-black border border-white-500 rounded-lg shadow-md overflow-hidden">
//       {videoSrc ? (
//         <div className="video-wrapper">
//           <video
//             className="w-full"
//             controls
//             onEnded={handleVideoEnd}
//           >
//             <source src={videoSrc} type="video/mp4"/>
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center justify-center p-6">
//           <div className="placeholder-video bg-black rounded-lg w-full h-64 flex items-center justify-center text-white text-lg">
//             Click a button to play a video
//           </div>
//           <div className="button-container flex justify-center mt-4">
//             <button 
//               onClick={handleLiveVideoClick} 
//               className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Play Live Video
//             </button>
//             <button 
//               onClick={handleRecordedVideoClick} 
//               className="bg-green-500 text-white px-4 py-2 m-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               Play Recorded Video
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Business;

// const Business = () => {
//   const [loading, setLoading] = useState(true);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Request access to the user's webcam
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(stream => {
//         // Set the video source to the webcam stream
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error accessing the webcam: ', err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section id='demo'>
//       <div className="video-options-container bg-black border border-white-500 rounded-lg shadow-md overflow-hidden">
//         {loading ? (
//           <div className="flex flex-col items-center justify-center p-6">
//             <div className="placeholder-video bg-black rounded-lg w-full h-64 flex items-center justify-center text-white text-lg">
//               Waiting to connect to webcam...
//             </div>
//           </div>
//         ) : (
//           <div className="video-wrapper">
//             <video
//               className="w-full"
//               ref={videoRef}
//               autoPlay
//               playsInline
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Business;

// export default function Business() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const getUserMedia = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({video: true});
//         videoRef.current.srcObject = stream;
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getUserMedia();
//   }, []);

//   return (
//     <div>
//       <video 
//         ref={videoRef}
//         autoPlay
//       />
//     </div>
//   );
// }



const Business = () => {

  return (
    <section id="demo">
      <div className="flex flex-col items-center justify-center bg-primary p-4">
        <h1 className="text-4xl font-semibold text-white mt-24 mb-32 text-center">What we do, and how it works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Idea */}
          <div
            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white"
          >
            <h2 className="text-2xl font-semibold text-white">Our idea</h2>
            <p className="text-white mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, dolores itaque at nam, cum deleniti ad pariatur laborum architecto dolor earum magnam molestiae neque omnis quasi adipisci est perspiciatis consequatur exercitationem nemo non eligendi! Libero corporis dicta recusandae similique perferendis tempore quam inventore? Dolorum natus voluptas obcaecati excepturi, minus dolor?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, unde?
            </p>
          </div>
          {/* Video */}
          <div
            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white"
          >
            <h2 className="text-2xl font-semibold text-white">Example</h2>
            <p className="text-white mt-4 text-center">
              Hi, I'm Michelle! I love working with AI and want to build interesting stuff with it!
            </p>
          </div>
          {/* App */}
          <div
            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white"
          >
            <h2 className="text-2xl font-semibold text-white">Why a waitlist?</h2>
            <p className="text-white mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, dolores itaque at nam, cum deleniti ad pariatur laborum architecto dolor earum magnam molestiae neque omnis quasi adipisci est perspiciatis consequatur exercitationem nemo non eligendi! Libero corporis dicta recusandae similique perferendis tempore quam inventore? Dolorum natus voluptas obcaecati excepturi, minus dolor?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, unde?
            </p>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Business;