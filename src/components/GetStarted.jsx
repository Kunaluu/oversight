// GetStarted.js
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <a
      href="/new-page"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.flexCenter} w-[90vw] max-w-[550px] h-[50px] bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Ready to dive in? Join our waitlist for early access </span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
      </div>
    </a>
  );
};

export default GetStarted;
