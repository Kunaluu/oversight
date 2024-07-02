import styles from "./style";
import {Business, Footer, Navbar, Hero } from "./components";
import AboutUs from "./components/About Us";
import { Analytics } from "@vercel/analytics/react";

const App = () => (
  
  <div className="bg-primary w-full overflow-hidden">
    <Analytics />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingPageX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs/>
        <div className="app-container">
        <div className="app-container flex flex-col items-center justify-center min-h-screen">
      {/* Video options box */}
      <div className="camera-container flex justify-center items-center">
        <Business />
      </div>
      {/* <Button styles="mt-10" /> */}
      </div>
      {/* <Button styles="mt-10" /> */}
    </div>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
