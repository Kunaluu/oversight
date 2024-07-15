// // GetStarted.js
// import styles from "../style";
// import { arrowUp } from "../assets";

// const GetStarted = () => {
//   return (
//     <a
//   href="#form"
//   className={`${styles.flexCenter} w-[90vw] max-w-[550px] h-[50px] bg-blue-gradient p-[2px] cursor-pointer`}
// >
//   <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full`}>
//     <div className={`${styles.flexStart} flex-row`}>
//       <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
//         <span className="text-gradient">Ready to dive in? Join our waitlist for early access </span>
//       </p>
//       <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
//     </div>
//   </div>
// </a>
//   );
// };

// export default GetStarted;

import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfDR8VsD9m2eIIyDBqYn2Y57fVXC7bTIEz0Hign-2xCtCFRpg/viewform?usp=sf_link"
        className={`${styles.flexCenter} w-[90vw] max-w-[550px] h-[50px] bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-full h-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[14px] leading-[23.4px]">
              <span className="text-gradient">
                Ready to dive in? Join our waitlist for early access{" "}
              </span>
            </p>
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
        </div>
      </a>
      <br></br>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfDR8VsD9m2eIIyDBqYn2Y57fVXC7bTIEz0Hign-2xCtCFRpg/viewform?usp=sf_link"
        className={`${styles.flexCenter} w-[90vw] max-w-[550px] h-[50px] bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-full h-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[14px] leading-[23.4px]">
              <span className="text-gradient">
              Got feedback? Share it now without the wait!{" "}
              </span>
            </p>
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default GetStarted;
