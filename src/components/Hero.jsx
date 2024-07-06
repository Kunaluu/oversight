import camera from "../assets/camera.png";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-start justify-between min-h-screen py-20 px-6 md:px-16 lg:px-24 bg-black text-white"
    >
      {/* Left Column: Text */}
      <div className="flex-1 flex flex-col items-start text-left">
        <h1 className="font-poppins font-semibold text-[30px] md:text-[40px] lg:text-[115px] leading-tight max-w-[800px]">
          OVERSIGHT
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[30px] text-gray-300 mt-10 max-w-[550px]">
          The next generation of AI Security
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[15px] text-gray-500 mt-10 max-w-[550px]">
        A 24/7 surveillance system that uses AI for real-time anomaly detection, identifying and categorizing people as intruders (red), newcomers (orange), or confidants (green) based on visit frequency, and provides alerts and weekly stats
        </p>
        <div className="mt-20">
          <GetStarted />
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 relative">
        <img
          src={camera}
          alt="camera"
          className="w-[80%] md:w-[60%] lg:w-[55%] h-auto relative z-[1]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
