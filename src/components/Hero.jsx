import styles from "../style";
import camera from "../assets/camera.png";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        {/* <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Oversight</span>{" "}
          </h1>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div> */}
      <div className="flex flex-wrap justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[100px] text-[100px] text-white ss:leading-[100.8px] leading-[75px]">
        <span className="text-gradient">Oversight</span>{" "}
        </h1>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[50px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next Generation <br className="sm:block hidden" />{" "}
          {/* <span className="text-gradient">Generation</span>{" "} */}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
        <h1 className="font-poppins font-semibold ss:text-[50px] text-[50px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          of AI Security
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A 24/7 surveillance system that uses AI for real-time anomaly detection, identifying and categorizing people as intruders (red),
          newcomers (orange), or confidants (green) based on visit frequency, and provides alerts and weekly stats
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={camera} alt="billing" className="w-[80%] h-[100%] relative z-[1]" style={{ marginLeft: '200px' }} />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
