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

export default function Business() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    getUserMedia();
  }, []);

  return (
    <div>
      <video 
        ref={videoRef}
        autoPlay
      />
    </div>
  );
}
