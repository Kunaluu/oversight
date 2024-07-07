// import { features } from "../constants";
import React, { useState, useEffect, useRef } from "react";
import BuildspaceVideo from "../assets/vid1.mp4";

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
        <h1 className="text-4xl font-semibold text-white mt-12 mb-16 text-center">
          What we do, and how it works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Idea */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white">
            <h2 className="text-3xl font-semibold text-white">Plan</h2>
            <p className="text-white mt-6 text-center">
              We are developing an advanced surveillance system that uses AI for
              motion and facial recognition. Key features include:
            </p>
            <p className="text-white mt-3 text-center">
              Automatic Flagging: Faces are categorized as Green (trusted),
              Orange (regular visitors), or Red (strangers) based on visit
              frequency.
            </p>
            <p className="text-white mt-3 text-center">
              Manual Adjustment: Users can manually set flags for individuals.
            </p>
            <p className="text-white mt-3 text-center">
              Motion Detection: Prolonged motion without facial recognition (eg.
              use of masks) is flagged as suspicious.
            </p>
            <p className="text-white mt-3 text-center">
              Instant Alerts: Suspicious activity triggers immediate alerts.
            </p>
            <p className="text-white mt-3 text-center">
              Visitor Statistics: A dashboard provides visitor data with weekly
              and monthly summaries.
            </p>
          </div>

          {/* Example */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white">
            <h2 className="text-3xl font-semibold text-white">Demo</h2>
            <p className="text-white mt-6 text-center">
              Check out our face recognition model: the first demo runs in
              real-time, while the second one processes a prerecorded video.
            </p>
            <div
              className="relative mt-6 w-full"
              style={{ paddingBottom: "95%" }}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                controls
                controlsList="nodownload noremoteplayback noplaybackrate nofullscreen"
                disablePictureInPicture
                poster="src/assets/thumbnail.png" // Thumbnail image
              >
                <source src="/src/assets/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* App */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-transparent border border-white">
            <h2 className="text-3xl font-semibold text-white">
              Why a waitlist?
            </h2>
            <p className="text-white mt-6 text-center">
              Your privacy and security is our top priority
            </p>
            <p className="text-white mt-3 text-center">
              To accurately recognize a face as a green flag, our model needs
              detailed data. This requires capturing several hundred frames of
              your face in a 10-second video. While essential for model
              accuracy, we understand this might be uncomfortable, especially in
              our early development stage.
            </p>
            <p className="text-white mt-3 text-center">
              To address this, we are developing an app that you can download.
              You'll record your face using the app, and all data will remain on
              your device. The model will then train on this data locally,
              ensuring accurate recognition without sharing your information
              with us.
            </p>
            <p className="text-white mt-3 text-center">
              If interested, please join our waitlist for early access to the
              app upon release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
